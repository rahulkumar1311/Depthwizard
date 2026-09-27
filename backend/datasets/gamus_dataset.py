"""GAMUS PyTorch Dataset and DataLoader for DepthWizard
Single-View Height Estimation & Remote Sensing Domain Adaptation (ISRO SIH 2026 Problem Statement 26175)

Loads co-registered optical RGB imagery and reference metric elevation (nDSM / AGL height in meters),
verifies paired sample alignment, performs Depth Anything V2 Small normalization,
and safely handles invalid/negative elevation values.
"""

import os
import csv
from pathlib import Path
from typing import Dict, Any, List, Optional, Tuple, Union
import numpy as np

try:
    import torch
    from torch.utils.data import Dataset, DataLoader
    TORCH_AVAILABLE = True
except ImportError:
    TORCH_AVAILABLE = False
    class Dataset:
        def __len__(self):
            raise NotImplementedError
        def __getitem__(self, idx):
            raise NotImplementedError

try:
    import h5py
    H5PY_AVAILABLE = True
except ImportError:
    H5PY_AVAILABLE = False

try:
    from PIL import Image
except ImportError:
    Image = None

# Depth Anything V2 standard ImageNet normalization constants
DEPTH_ANYTHING_MEAN = [0.485, 0.456, 0.406]
DEPTH_ANYTHING_STD = [0.229, 0.224, 0.225]

class GAMUSDataset(Dataset):
    """PyTorch Dataset for the GAMUS remote-sensing benchmark (RGB + nDSM/AGL Height).

    Args:
        root_dir: Path to GAMUS directory (e.g. 'data/GAMUS_mvp' or 'data/GAMUS')
        split: 'train' or 'val' or 'test'
        target_size: Optional (height, width) tuple to resize imagery (e.g. (518, 518) for Depth Anything V2)
        normalize_rgb: Whether to apply Depth Anything V2 ImageNet mean/std normalization
        clamp_negative_elevations: If True, clamps negative heights (< 0) to 0.0m
        max_elevation_cap: Optional cap for unrealistic outliers (e.g. 200.0m)
        augment: If True, applies random horizontal/vertical flips for training
        return_tensors: Whether to convert outputs to PyTorch Tensors
    """

    def __init__(
        self,
        root_dir: Union[str, Path],
        split: str = "train",
        target_size: Optional[Tuple[int, int]] = (518, 518),
        normalize_rgb: bool = True,
        clamp_negative_elevations: bool = True,
        max_elevation_cap: Optional[float] = 200.0,
        augment: bool = False,
        return_tensors: bool = True,
    ):
        self.root_dir = Path(root_dir)
        self.split = split
        self.target_size = target_size
        self.normalize_rgb = normalize_rgb
        self.clamp_negative_elevations = clamp_negative_elevations
        self.max_elevation_cap = max_elevation_cap
        self.augment = augment and (split == "train")
        self.return_tensors = return_tensors and TORCH_AVAILABLE

        self.samples = self._load_and_verify_pairs()
        if len(self.samples) == 0:
            raise FileNotFoundError(
                f"No verified RGB-reference pairs found for split '{split}' in {self.root_dir}."
            )

    def _load_and_verify_pairs(self) -> List[Dict[str, Any]]:
        """Discovers paired samples and verifies that RGB and reference files match identical tile IDs."""
        samples = []

        # 1. First priority: Check manifest.csv
        manifest_path = self.root_dir / "manifest.csv"
        if manifest_path.exists():
            with open(manifest_path, "r", encoding="utf-8") as f:
                reader = csv.DictReader(f)
                for row in reader:
                    if row.get("split") == self.split:
                        rgb_path = self._resolve_file_path(row["rgb_path"])
                        agl_path = self._resolve_file_path(row["reference_depth_path"])

                        # Verification check: Ensure sample IDs match
                        sample_id = row["sample_id"]
                        self._verify_pair(sample_id, rgb_path, agl_path)

                        if rgb_path.exists() and agl_path.exists():
                            samples.append({
                                "id": sample_id,
                                "rgb_path": rgb_path,
                                "agl_path": agl_path,
                            })
            if len(samples) > 0:
                return samples

        # 2. Directory discovery fallback (e.g. data/GAMUS/train or data/GAMUS/images/train)
        split_dir = self.root_dir / self.split
        candidate_img_dirs = [
            self.root_dir / "images" / self.split,
            split_dir / "rgb",
            split_dir / "images",
            split_dir,
        ]
        active_img_dir = next((d for d in candidate_img_dirs if d.exists() and d.is_dir()), None)
        if not active_img_dir:
            return []

        candidate_hgt_dirs = [
            self.root_dir / "heights" / self.split,
            split_dir / "heights",
            split_dir / "dsm",
            active_img_dir,
        ]

        rgb_files = sorted([p for p in active_img_dir.iterdir() if p.name.endswith("_RGB.h5") or "rgb" in p.name.lower()])
        for rgb_p in rgb_files:
            stem = rgb_p.name
            if stem.endswith("_RGB.h5"):
                base_id = stem[:-7]
            elif stem.endswith("RGB.h5"):
                base_id = stem[:-6]
            else:
                base_id = rgb_p.stem

            # Search corresponding AGL height file
            agl_p = None
            for h_dir in candidate_hgt_dirs:
                for cand_name in [f"{base_id}_AGL.h5", f"{base_id}AGL.h5", f"{base_id}_dsm.h5", f"{base_id}.h5"]:
                    cand_path = h_dir / cand_name
                    if cand_path.exists():
                        agl_p = cand_path
                        break
                if agl_p:
                    break

            if agl_p:
                self._verify_pair(base_id, rgb_p, agl_p)
                samples.append({
                    "id": base_id,
                    "rgb_path": rgb_p,
                    "agl_path": agl_p,
                })

        return samples

    def _resolve_file_path(self, raw_path_str: str) -> Path:
        p = Path(raw_path_str)
        if p.is_absolute() and p.exists():
            return p
        # Check relative to root_dir
        p_in_root = self.root_dir / p.name
        if p_in_root.exists():
            return p_in_root
        p_split = self.root_dir / self.split / p.name
        if p_split.exists():
            return p_split
        # Check relative to workspace root
        if p.exists():
            return p
        return self.root_dir / p

    @staticmethod
    def _verify_pair(sample_id: str, rgb_path: Path, agl_path: Path):
        """Strict verification: checks filename consistency between RGB and reference."""
        rgb_name = rgb_path.name
        agl_name = agl_path.name

        # Extract normalized base ID
        rgb_base = rgb_name.replace("_RGB.h5", "").replace("RGB.h5", "")
        agl_base = agl_name.replace("_AGL.h5", "").replace("AGL.h5", "").replace("_dsm.h5", "")

        if rgb_base != agl_base:
            raise ValueError(
                f"[Pairing Error] RGB file '{rgb_name}' does not match reference file '{agl_name}'! "
                f"Resolved stems: '{rgb_base}' vs '{agl_base}'"
            )

    def __len__(self) -> int:
        return len(self.samples)

    def _read_h5_dataset(self, file_path: Path, key: str = "image") -> np.ndarray:
        if not H5PY_AVAILABLE:
            raise ImportError("h5py is required to read GAMUS HDF5 files.")
        with h5py.File(file_path, "r") as f:
            if key in f:
                data = f[key][:]
            else:
                first_key = list(f.keys())[0]
                data = f[first_key][:]
        return data

    def _resize_pair(
        self, rgb: np.ndarray, height: np.ndarray, target_size: Tuple[int, int]
    ) -> Tuple[np.ndarray, np.ndarray]:
        """Resizes RGB (bilinear) and continuous elevation (bilinear) to target dimensions using PIL."""
        from PIL import Image

        orig_h, orig_w = rgb.shape[:2]
        tgt_h, tgt_w = target_size

        if orig_h == tgt_h and orig_w == tgt_w:
            return rgb, height

        # Resize RGB using PIL
        rgb_pil = Image.fromarray(rgb)
        rgb_resized = np.array(rgb_pil.resize((tgt_w, tgt_h), resample=Image.BILINEAR))

        # Resize continuous elevation (mode 'F' for 32-bit floating point)
        height_pil = Image.fromarray(height.astype(np.float32), mode="F")
        height_resized = np.array(height_pil.resize((tgt_w, tgt_h), resample=Image.BILINEAR), dtype=np.float32)

        return rgb_resized, height_resized

    def __getitem__(self, idx: int) -> Dict[str, Any]:
        sample_meta = self.samples[idx]
        sid = sample_meta["id"]

        # 1. Load RGB array
        rgb = self._read_h5_dataset(sample_meta["rgb_path"], key="image")
        orig_shape = rgb.shape

        # Ensure (H, W, 3)
        if rgb.ndim == 2:
            rgb = np.stack([rgb] * 3, axis=-1)
        elif rgb.ndim == 3 and rgb.shape[2] > 3:
            rgb = rgb[:, :, :3]

        # 2. Load Reference Height array (nDSM / AGL in meters)
        height = self._read_h5_dataset(sample_meta["agl_path"], key="image").astype(np.float32)

        # 3. Handle invalid reference values safely
        # Replace NaNs or Infs with 0.0
        nan_mask = np.isnan(height) | np.isinf(height)
        if np.any(nan_mask):
            height[nan_mask] = 0.0

        raw_min = float(np.min(height))
        raw_max = float(np.max(height))

        # Clamp negative values (e.g. -5.0m elevation sinkholes/water)
        if self.clamp_negative_elevations:
            height = np.maximum(height, 0.0)

        # Cap extreme height outliers if configured
        if self.max_elevation_cap is not None:
            height = np.minimum(height, self.max_elevation_cap)

        # 4. Resize only when necessary
        if self.target_size is not None:
            rgb, height = self._resize_pair(rgb, height, self.target_size)

        # 5. Data Augmentation (train split only)
        if self.augment:
            if np.random.rand() > 0.5:  # Horizontal flip
                rgb = np.ascontiguousarray(np.fliplr(rgb))
                height = np.ascontiguousarray(np.fliplr(height))
            if np.random.rand() > 0.5:  # Vertical flip
                rgb = np.ascontiguousarray(np.flipud(rgb))
                height = np.ascontiguousarray(np.flipud(height))

        # 6. Normalize RGB for Depth Anything V2 Small
        # Transform [0, 255] uint8 -> [0.0, 1.0] float32 -> Standardize with ImageNet stats
        rgb_float = rgb.astype(np.float32) / 255.0
        if self.normalize_rgb:
            mean = np.array(DEPTH_ANYTHING_MEAN, dtype=np.float32).reshape(1, 1, 3)
            std = np.array(DEPTH_ANYTHING_STD, dtype=np.float32).reshape(1, 1, 3)
            rgb_normalized = (rgb_float - mean) / std
        else:
            rgb_normalized = rgb_float

        # Convert to Channel-First format (C, H, W)
        rgb_ch_first = np.transpose(rgb_normalized, (2, 0, 1)).astype(np.float32)
        height_expanded = np.expand_dims(height, axis=0).astype(np.float32)

        metadata = {
            "id": sid,
            "raw_min_elevation": raw_min,
            "raw_max_elevation": raw_max,
            "clamped_min_elevation": float(np.min(height)),
            "clamped_max_elevation": float(np.max(height)),
            "original_shape": orig_shape,
            "processed_shape": (rgb.shape[0], rgb.shape[1]),
            "resolution_gsd": "0.5m/pixel",
            "rgb_path": str(sample_meta["rgb_path"]),
            "reference_path": str(sample_meta["agl_path"]),
        }

        # 7. Convert to PyTorch tensors or return NumPy
        if self.return_tensors and TORCH_AVAILABLE:
            image_out = torch.from_numpy(rgb_ch_first).float()
            target_out = torch.from_numpy(height_expanded).float()
        else:
            image_out = rgb_ch_first
            target_out = height_expanded

        return {
            "image": image_out,
            "target": target_out,
            "metadata": metadata,
        }

def get_gamus_dataloaders(
    root_dir: Union[str, Path] = "data/GAMUS_mvp",
    batch_size: int = 2,
    target_size: Optional[Tuple[int, int]] = (518, 518),
    normalize_rgb: bool = True,
    num_workers: int = 0,
    pin_memory: bool = False,
) -> Tuple[Any, Any]:
    """Factory creating PyTorch DataLoaders for both training and validation splits."""
    if not TORCH_AVAILABLE:
        raise ImportError("PyTorch is required to construct DataLoaders.")

    train_dataset = GAMUSDataset(
        root_dir=root_dir,
        split="train",
        target_size=target_size,
        normalize_rgb=normalize_rgb,
        augment=True,
        return_tensors=True,
    )

    val_dataset = GAMUSDataset(
        root_dir=root_dir,
        split="val",
        target_size=target_size,
        normalize_rgb=normalize_rgb,
        augment=False,
        return_tensors=True,
    )

    train_loader = DataLoader(
        train_dataset,
        batch_size=batch_size,
        shuffle=True,
        num_workers=num_workers,
        pin_memory=pin_memory,
    )

    val_loader = DataLoader(
        val_dataset,
        batch_size=batch_size,
        shuffle=False,
        num_workers=num_workers,
        pin_memory=pin_memory,
    )

    return train_loader, val_loader
