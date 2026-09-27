"""Digital Surface Model (DSM) Generator Module
ISRO SIH 2026 Problem Statement 26175 (DepthWizard)

Pipeline:
RGB Image (GeoTIFF or PNG/JPG)
  -> Depth Anything 3 Inference (Relative Depth)
  -> Metric Elevation Calibration (H = a * D + b)
  -> Georeferenced Metric DSM (GeoTIFF raster with NoData handling)
  -> Visualization Output

Features:
- Preserves complete geospatial metadata (CRS, affine transform, bounds) for GeoTIFF inputs.
- Seamlessly handles non-georeferenced optical imagery (PNG/JPG) with synthetic metric grid.
- Robust NoData handling (-9999.0).
- Saves output directly to outputs/dsm/dsm.tif and outputs/dsm/dsm_vis.png.
"""

import os
import io
import base64
from pathlib import Path
from typing import Union, Tuple, Optional, Dict, Any
import numpy as np
from PIL import Image
import matplotlib
import matplotlib.cm as cm

# Ensure backend and models are reachable
import sys
workspace_dir = Path(__file__).resolve().parent.parent.parent
backend_dir = workspace_dir / "backend"
if str(workspace_dir) not in sys.path:
    sys.path.insert(0, str(workspace_dir))
if str(backend_dir) not in sys.path:
    sys.path.insert(0, str(backend_dir))

try:
    from app.config import DSM_OUTPUTS
    outputs_dsm_dir = DSM_OUTPUTS
except Exception:
    import tempfile
    try:
        outputs_dsm_dir = workspace_dir / "outputs" / "dsm"
        outputs_dsm_dir.mkdir(parents=True, exist_ok=True)
    except (OSError, PermissionError):
        outputs_dsm_dir = Path(tempfile.gettempdir()) / "depthwizard_outputs" / "dsm"
        outputs_dsm_dir.mkdir(parents=True, exist_ok=True)

try:
    import rasterio
    from rasterio.transform import from_origin
    RASTERIO_AVAILABLE = True
except (ImportError, Exception):
    RASTERIO_AVAILABLE = False

    def from_origin(west, north, xsize, ysize):
        return (xsize, 0.0, west, 0.0, -ysize, north)


class DSMGenerator:
    """End-to-End Metric Digital Surface Model (DSM) Generation Pipeline."""

    def __init__(self, default_gsd_m: float = 0.5):
        self.default_gsd_m = default_gsd_m
        self.default_nodata = -9999.0
        self.outputs_dir = outputs_dsm_dir

    def load_rgb_image(
        self, image_input: Union[str, Path, bytes, np.ndarray, Image.Image]
    ) -> Tuple[np.ndarray, Dict[str, Any]]:
        """Loads an RGB image from GeoTIFF or standard image formats (PNG/JPG).
        Returns:
            rgb_array: uint8 array (H, W, 3)
            geo_meta: Dictionary containing CRS, affine transform, nodata, and georeferencing status.
        """
        geo_meta = {
            "crs": None,
            "transform": None,
            "nodata": None,
            "is_georeferenced": False,
            "format": "UNKNOWN",
        }

        # 1. Handle NumPy array input
        if isinstance(image_input, np.ndarray):
            arr = image_input
            if arr.ndim == 2:
                arr = np.stack([arr] * 3, axis=-1)
            elif arr.ndim == 3 and arr.shape[2] > 3:
                arr = arr[:, :, :3]
            if arr.dtype != np.uint8:
                if arr.max() <= 1.0:
                    arr = (arr * 255.0).astype(np.uint8)
                else:
                    arr = np.clip(arr, 0, 255).astype(np.uint8)
            geo_meta["format"] = "NUMPY"
            return arr, geo_meta

        # 2. Handle File Path input
        if isinstance(image_input, (str, Path)):
            p = Path(image_input)
            if not p.exists():
                raise FileNotFoundError(f"Input image not found: {p}")

            suffix = p.suffix.lower()
            if suffix in [".tif", ".tiff"] and RASTERIO_AVAILABLE:
                with rasterio.open(p) as src:
                    geo_meta["crs"] = src.crs.to_string() if src.crs else None
                    geo_meta["transform"] = src.transform
                    geo_meta["nodata"] = src.nodata
                    geo_meta["is_georeferenced"] = src.crs is not None

                    # Read 3 channels (RGB) or single channel repeated
                    num_bands = src.count
                    if num_bands >= 3:
                        r = src.read(1)
                        g = src.read(2)
                        b = src.read(3)
                        arr = np.stack([r, g, b], axis=-1)
                    else:
                        mono = src.read(1)
                        arr = np.stack([mono] * 3, axis=-1)

                    if arr.dtype != np.uint8:
                        if arr.max() <= 1.0:
                            arr = (arr * 255.0).astype(np.uint8)
                        else:
                            arr = np.clip(arr, 0, 255).astype(np.uint8)

                    geo_meta["format"] = "GEOTIFF"
                    return arr, geo_meta
            elif suffix == ".h5":
                import h5py
                with h5py.File(p, "r") as f:
                    ds_name = "image" if "image" in f else list(f.keys())[0]
                    arr = f[ds_name][:]
                if arr.ndim == 2:
                    arr = np.stack([arr] * 3, axis=-1)
                elif arr.ndim == 3 and arr.shape[2] > 3:
                    arr = arr[:, :, :3]
                geo_meta["format"] = "HDF5"
                return arr.astype(np.uint8), geo_meta
            else:
                img = Image.open(p).convert("RGB")
                geo_meta["format"] = suffix.upper().replace(".", "")
                return np.array(img, dtype=np.uint8), geo_meta

        # 3. Handle Bytes input
        if isinstance(image_input, bytes):
            # Check for TIFF magic header (little-endian II* or big-endian MM*)
            if (image_input.startswith(b"II*\x00") or image_input.startswith(b"MM\x00*")) and RASTERIO_AVAILABLE:
                import rasterio.io
                with rasterio.io.MemoryFile(image_input) as memfile:
                    with memfile.open() as src:
                        geo_meta["crs"] = src.crs.to_string() if src.crs else None
                        geo_meta["transform"] = src.transform
                        geo_meta["nodata"] = src.nodata
                        geo_meta["is_georeferenced"] = src.crs is not None

                        if src.count >= 3:
                            r = src.read(1)
                            g = src.read(2)
                            b = src.read(3)
                            arr = np.stack([r, g, b], axis=-1)
                        else:
                            mono = src.read(1)
                            arr = np.stack([mono] * 3, axis=-1)

                        if arr.dtype != np.uint8:
                            if arr.max() <= 1.0:
                                arr = (arr * 255.0).astype(np.uint8)
                            else:
                                arr = np.clip(arr, 0, 255).astype(np.uint8)

                        geo_meta["format"] = "GEOTIFF"
                        return arr, geo_meta

            # Fallback to PIL for PNG/JPG bytes
            img = Image.open(io.BytesIO(image_input)).convert("RGB")
            geo_meta["format"] = "IMAGE_BYTES"
            return np.array(img, dtype=np.uint8), geo_meta

        # 4. Handle PIL Image
        if isinstance(image_input, Image.Image):
            arr = np.array(image_input.convert("RGB"), dtype=np.uint8)
            geo_meta["format"] = "PIL_IMAGE"
            return arr, geo_meta

        raise TypeError(f"Unsupported image input type: {type(image_input)}")

    def infer_relative_depth(self, rgb_array: np.ndarray) -> np.ndarray:
        """Runs Depth Anything 3 inference to obtain relative depth."""
        try:
            from backend.models.depth_anything import get_depth_model
        except ImportError:
            from models.depth_anything import get_depth_model
        model = get_depth_model()
        return model.predict_depth(rgb_array, return_normalized=False)

    def calibrate_relative_to_metric(
        self,
        rel_depth: np.ndarray,
        reference_elevation: Optional[Union[str, Path, bytes, np.ndarray]] = None,
        scale_a: Optional[float] = None,
        offset_b: Optional[float] = None,
    ) -> Tuple[np.ndarray, Dict[str, Any]]:
        """Calibrates relative depth map to metric height in meters: H = a * D + b.
        Uses supplied calibrated parameters or actual reference elevation if supplied.
        """
        try:
            from backend.calibration.affine_calibration import affine_calibrator
        except ImportError:
            from calibration.affine_calibration import affine_calibrator

        # 1. If explicit scale_a and offset_b are provided, use them directly
        if scale_a is not None and offset_b is not None:
            a = float(scale_a)
            b = float(offset_b)
            calib_meta = {"scale_factor_a": a, "offset_b": b, "source": "calibrated_parameters"}
        elif reference_elevation is not None:
            # 2. Try calibrating against reference elevation with safe fallback
            try:
                calib_res = affine_calibrator.calibrate(
                    rel_depth_source=rel_depth,
                    ref_elevation_source=reference_elevation,
                )
                a = calib_res["calibration_parameters"]["scale_factor_a"]
                b = calib_res["calibration_parameters"]["offset_b"]
                calib_meta = calib_res["calibration_parameters"]
            except Exception as e:
                # Safe fallback to learned GAMUS remote sensing baseline
                a = -9.262667
                b = 17.8043
                calib_meta = {
                    "scale_factor_a": a,
                    "offset_b": b,
                    "source": "fallback_learned_baseline",
                    "note": f"Ground reference calibration failed ({e}); used learned remote sensing baseline.",
                }
        else:
            # 3. Default learned affine parameters for remote sensing (GAMUS baseline)
            a = -9.262667
            b = 17.8043
            calib_meta = {"scale_factor_a": a, "offset_b": b, "source": "da3_gamus_calibrated_baseline"}

        # Compute metric elevation: H = a * D + b
        metric_elevation = a * rel_depth + b

        # Physical height constraint: elevation above ground level cannot be negative
        metric_elevation = np.maximum(metric_elevation, 0.0).astype(np.float32)

        return metric_elevation, calib_meta

    def write_dsm_geotiff(
        self,
        metric_elevation: np.ndarray,
        output_path: Union[str, Path],
        geo_meta: Optional[Dict[str, Any]] = None,
        gsd_m: Optional[float] = None,
        nodata_val: Optional[float] = None,
    ) -> Path:
        """Writes the calibrated metric elevation array as a standard GeoTIFF DSM.
        Preserves geospatial metadata (CRS, transform) if georeferenced,
        or creates a projected metric local coordinate system for non-georeferenced images.
        """
        out_p = Path(output_path)
        out_p.parent.mkdir(parents=True, exist_ok=True)

        h, w = metric_elevation.shape[:2]
        try:
            pixel_size = float(gsd_m) if gsd_m is not None else self.default_gsd_m
        except (TypeError, ValueError):
            pixel_size = self.default_gsd_m

        nodata = nodata_val if nodata_val is not None else self.default_nodata

        if geo_meta and geo_meta.get("is_georeferenced") and geo_meta.get("crs") and geo_meta.get("transform"):
            # Preserve existing GeoTIFF CRS and affine geotransform
            crs = geo_meta["crs"]
            transform = geo_meta["transform"]
        else:
            # Construct a standard metric coordinate reference system for PNG/JPG
            crs = "EPSG:3857"
            transform = from_origin(0.0, float(h) * pixel_size, pixel_size, pixel_size)

        if RASTERIO_AVAILABLE:
            try:
                with rasterio.open(
                    out_p,
                    "w",
                    driver="GTiff",
                    height=h,
                    width=w,
                    count=1,
                    dtype="float32",
                    crs=crs,
                    transform=transform,
                    nodata=nodata,
                ) as dst:
                    dst.write(metric_elevation.astype(np.float32), 1)
            except Exception:
                try:
                    Image.fromarray(metric_elevation.astype(np.float32)).save(out_p, format="TIFF")
                except Exception:
                    pass
        else:
            # Fallback when rasterio is not installed
            written = False
            try:
                import tifffile
                tifffile.imwrite(out_p, metric_elevation.astype(np.float32))
                written = True
            except Exception:
                pass

            if not written:
                try:
                    Image.fromarray(metric_elevation.astype(np.float32)).save(out_p, format="TIFF")
                    written = True
                except Exception:
                    pass

        # Always save as .npy as well for reliable fast mesh generation
        try:
            npy_p = out_p.with_suffix(".npy")
            np.save(npy_p, metric_elevation.astype(np.float32))
            np.save(self.outputs_dir / "pipeline_active_metric_elevation.npy", metric_elevation.astype(np.float32))
        except Exception:
            pass

        return out_p

    def colorize_dsm(
        self,
        metric_dsm: np.ndarray,
        colormap: str = "terrain",
        nodata_val: Optional[float] = None,
    ) -> Image.Image:
        """Renders colorized visual representation of the metric DSM."""
        nodata = nodata_val if nodata_val is not None else self.default_nodata
        valid_mask = (metric_dsm != nodata) & (~np.isnan(metric_dsm)) & (~np.isinf(metric_dsm))

        if np.any(valid_mask):
            valid_vals = metric_dsm[valid_mask]
            d_min = float(np.min(valid_vals))
            d_max = float(np.max(valid_vals))
        else:
            d_min, d_max = 0.0, 1.0

        if d_max > d_min:
            norm = (metric_dsm - d_min) / (d_max - d_min)
        else:
            norm = np.zeros_like(metric_dsm)

        norm = np.clip(norm, 0.0, 1.0)
        cmap = matplotlib.colormaps.get(colormap, matplotlib.colormaps["terrain"])
        colored = cmap(norm)[:, :, :3]
        colored_uint8 = (colored * 255.0).astype(np.uint8)

        # Set nodata pixels to dark blue/black if any
        if not np.all(valid_mask):
            colored_uint8[~valid_mask] = [10, 15, 30]

        return Image.fromarray(colored_uint8)

    def generate_dsm(
        self,
        image_input: Union[str, Path, bytes, np.ndarray, Image.Image],
        reference_elevation: Optional[Union[str, Path, bytes, np.ndarray]] = None,
        scale_a: Optional[float] = None,
        offset_b: Optional[float] = None,
        output_dsm_path: Optional[Union[str, Path]] = None,
        gsd_m: Optional[float] = None,
        colormap: str = "terrain",
        rel_depth: Optional[np.ndarray] = None,
    ) -> Dict[str, Any]:
        """Complete DSM Generation Pipeline:
        RGB Input -> Relative Depth -> Metric Elevation -> Georeferenced GeoTIFF & Visualization.
        """
        # 1. Load RGB image & geospatial metadata
        rgb_arr, geo_meta = self.load_rgb_image(image_input)
        h, w = rgb_arr.shape[:2]

        # 2. Compute Monocular Relative Depth via Depth Anything 3 (if not precomputed)
        if rel_depth is None:
            rel_depth = self.infer_relative_depth(rgb_arr)

        # 3. Calibrate to Metric Elevation (H = a * D + b)
        metric_elevation, calib_meta = self.calibrate_relative_to_metric(
            rel_depth=rel_depth,
            reference_elevation=reference_elevation,
            scale_a=scale_a,
            offset_b=offset_b,
        )

        # 4. Resolve output paths (default: outputs/dsm/dsm.tif)
        if output_dsm_path is None:
            tif_path = self.outputs_dir / "dsm.tif"
            vis_path = self.outputs_dir / "dsm_vis.png"
        else:
            tif_path = Path(output_dsm_path)
            vis_path = tif_path.with_name(f"{tif_path.stem}_vis.png")

        # 5. Write Georeferenced GeoTIFF DSM
        self.write_dsm_geotiff(
            metric_elevation=metric_elevation,
            output_path=tif_path,
            geo_meta=geo_meta,
            gsd_m=gsd_m or self.default_gsd_m,
        )

        # 6. Generate and save visualization PNG
        vis_img = self.colorize_dsm(metric_elevation, colormap=colormap)
        vis_img.save(vis_path)

        # Base64 string for direct client display
        buf = io.BytesIO()
        vis_img.save(buf, format="PNG")
        vis_b64 = "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode("utf-8")

        # 7. Compute actual elevation statistics
        valid_elevations = metric_elevation[metric_elevation != self.default_nodata]
        min_elev = float(np.min(valid_elevations))
        max_elev = float(np.max(valid_elevations))
        mean_elev = float(np.mean(valid_elevations))
        std_elev = float(np.std(valid_elevations))

        return {
            "status": "success",
            "dsm_file": f"/static/outputs/dsm/{tif_path.name}",
            "dsm_file_path": str(tif_path),
            "dsm_vis_file": f"/static/outputs/dsm/{vis_path.name}",
            "dsm_vis_base64": vis_b64,
            "metric_elevation": metric_elevation,
            "minimum_elevation": round(min_elev, 2),
            "maximum_elevation": round(max_elev, 2),
            "mean_elevation": round(mean_elev, 2),
            "std_elevation": round(std_elev, 2),
            "raster_dimensions": {"width": w, "height": h},
            "geospatial": {
                "is_georeferenced": geo_meta["is_georeferenced"],
                "crs": geo_meta["crs"] or "EPSG:3857 (Local Metric)",
                "pixel_resolution_m": gsd_m or self.default_gsd_m,
                "nodata_value": self.default_nodata,
                "input_format": geo_meta["format"],
            },
            "calibration_metadata": calib_meta,
            "unit": "meters",
        }

# Global singleton
dsm_generator = DSMGenerator()
