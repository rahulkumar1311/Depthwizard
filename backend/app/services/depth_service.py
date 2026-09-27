"""Depth Estimation Service
Manages Depth Anything 3 (DA3) model loading, preprocessing, and relative depth inference.
ISRO SIH 2026 Problem Statement 26175 (DepthWizard)

Note: The output is strictly RELATIVE DEPTH, not metric elevation.
"""

import os
import time
from typing import Optional, Tuple, Union, Dict, Any
from pathlib import Path
import io
import base64
import numpy as np
from PIL import Image
import matplotlib

from app.config import settings


class DepthService:
    def __init__(self):
        self._model = None
        self.device = settings.DEVICE

    def is_available(self) -> Tuple[bool, str]:
        """Checks if PyTorch is available for DA3 inference."""
        try:
            import torch
        except ImportError as e:
            return False, f"Required PyTorch runtime not installed: {e}"

        return True, "Ready"

    def load_model(self):
        """Loads Depth Anything 3 onto the detected device."""
        if self._model is not None and self._model.is_loaded:
            return

        available, msg = self.is_available()
        if not available:
            raise RuntimeError(f"DepthService unavailable: {msg}")

        from models.depth_anything import get_depth_model
        self._model = get_depth_model(device=self.device)

    def predict_relative_depth(
        self,
        image: Union[str, Path, Image.Image, np.ndarray],
        return_normalized: bool = False,
    ) -> np.ndarray:
        """Infers relative depth map from an input RGB image using Depth Anything 3.

        Returns:
            np.ndarray: 2D float32 relative depth array (H, W).
            Note: Output is RELATIVE DEPTH, not metric elevation.
        """
        available, msg = self.is_available()
        if not available:
            raise RuntimeError(msg)

        if self._model is None or not self._model.is_loaded:
            self.load_model()

        return self._model.predict_depth(image, return_normalized=return_normalized)

    def colorize_depth_map(self, depth_map: np.ndarray, colormap: str = "plasma") -> Image.Image:
        """Applies a colormap to a 2D float depth map."""
        d_min = float(np.min(depth_map))
        d_max = float(np.max(depth_map))
        if d_max > d_min:
            norm = (depth_map - d_min) / (d_max - d_min)
        else:
            norm = np.zeros_like(depth_map)
        cmap = matplotlib.colormaps.get(colormap, matplotlib.colormaps["plasma"])
        colored = cmap(norm)[:, :, :3]
        colored_uint8 = (colored * 255.0).astype(np.uint8)
        return Image.fromarray(colored_uint8)

    def process_and_visualize(
        self,
        image_bytes: bytes,
        filename: str = "input.png",
        colormap: str = "plasma",
    ) -> Dict[str, Any]:
        """Complete modular pipeline:
        RGB image bytes -> preprocessing -> Depth Anything 3 -> relative depth -> visualization + stats.
        """
        pil_img = Image.open(io.BytesIO(image_bytes)).convert("RGB")
        in_w, in_h = pil_img.size

        # Model inference: Returns 2D float32 relative depth with timing
        t_start = time.perf_counter()
        raw_depth = self.predict_relative_depth(pil_img, return_normalized=False)
        t_end = time.perf_counter()
        inference_time_ms = round((t_end - t_start) * 1000.0, 2)

        out_h, out_w = raw_depth.shape

        # Depth statistics
        min_d = float(np.min(raw_depth))
        max_d = float(np.max(raw_depth))
        mean_d = float(np.mean(raw_depth))
        std_d = float(np.std(raw_depth))

        # Colorize relative depth map for visualization
        colored_img = self.colorize_depth_map(raw_depth, colormap=colormap)

        # Base64 encode for direct frontend rendering without network caching artifacts
        buf = io.BytesIO()
        colored_img.save(buf, format="PNG")
        depth_b64 = "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode("utf-8")

        # Save to outputs directory
        stem = Path(filename).stem
        depth_out_dir = settings.OUTPUTS_DIR / "depth"
        png_path = depth_out_dir / f"{stem}_relative_depth.png"
        npy_path = depth_out_dir / f"{stem}_relative_depth.npy"
        try:
            depth_out_dir.mkdir(parents=True, exist_ok=True)
            colored_img.save(png_path)
            np.save(npy_path, raw_depth)
        except Exception as e:
            logger.warning(f"Could not persist depth files to disk: {e}")

        return {
            "status": "success",
            "model": "Depth Anything 3",
            "filename": filename,
            "width": out_w,
            "height": out_h,
            "min_depth": round(min_d, 4),
            "max_depth": round(max_d, 4),
            "mean_depth": round(mean_d, 4),
            "inference_time_ms": inference_time_ms,
            "depth_image_base64": depth_b64,
            "depth_image_url": f"/static/outputs/depth/{png_path.name}",
            "depth_array_url": f"/static/outputs/depth/{npy_path.name}",
            "statistics": {
                "input_dimensions": {"width": in_w, "height": in_h, "channels": 3},
                "output_dimensions": {"width": out_w, "height": out_h},
                "min_depth": round(min_d, 4),
                "max_depth": round(max_d, 4),
                "mean_depth": round(mean_d, 4),
                "std_depth": round(std_d, 4),
            },
            "device": str(self._model.device if self._model else self.device),
            "colormap": colormap,
            "note": "Output is RELATIVE DEPTH (camera-ray distance Z representation, unitless), NOT metric elevation in metres.",
        }


depth_service = DepthService()
