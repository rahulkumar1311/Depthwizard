"""Metric Scale Calibration Module (Affine Calibration)
Calibrates monocular relative depth to physical metric elevation (Digital Surface Model - DSM)
using ground reference elevation data (SRTM / GLO-30 / LiDAR nDSM).
Formula: H = a * D + b
ISRO SIH 2026 Problem Statement 26175 (DepthWizard)

Concepts:
- Relative Depth (D): Dimensionless, affine-invariant neural network output indicating topological variations.
- Metric Elevation (H): Calibrated physical height in metres (m) above ground level (AGL) or mean sea level (MSL).
- Digital Surface Model (DSM): Continuous 2.5D georeferenced surface capturing bare-earth topography + above-ground features.
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

try:
    import rasterio
    from rasterio.transform import from_origin
    RASTERIO_AVAILABLE = True
except ImportError:
    RASTERIO_AVAILABLE = False

try:
    import h5py
    H5PY_AVAILABLE = True
except ImportError:
    H5PY_AVAILABLE = False


class AffineCalibrator:
    """Estimates and applies affine scale calibration: H = a * D + b."""

    def __init__(self, outputs_dir: Optional[Union[str, Path]] = None):
        if outputs_dir is None:
            self.outputs_dir = Path(__file__).resolve().parent.parent.parent / "outputs" / "dsm"
        else:
            self.outputs_dir = Path(outputs_dir)
        self.outputs_dir.mkdir(parents=True, exist_ok=True)

    def load_relative_depth(
        self, depth_source: Union[str, Path, bytes, np.ndarray, Image.Image]
    ) -> np.ndarray:
        """Loads relative depth into a 2D float32 numpy array."""
        if isinstance(depth_source, np.ndarray):
            arr = depth_source.astype(np.float32)
            if arr.ndim == 3:
                arr = arr[:, :, 0]
            return arr

        if isinstance(depth_source, (str, Path)):
            p = Path(depth_source)
            if not p.exists():
                raise FileNotFoundError(f"Relative depth file not found: {p}")
            if p.suffix.lower() == ".npy":
                arr = np.load(p).astype(np.float32)
                if arr.ndim == 3:
                    arr = arr[:, :, 0]
                return arr
            elif p.suffix.lower() in [".png", ".jpg", ".jpeg"]:
                img = Image.open(p).convert("L")
                return np.array(img, dtype=np.float32) / 255.0
            else:
                raise ValueError(f"Unsupported relative depth format: {p.suffix}")

        if isinstance(depth_source, bytes):
            # Try reading as npy or image bytes
            try:
                buf = io.BytesIO(depth_source)
                arr = np.load(buf).astype(np.float32)
                if arr.ndim == 3:
                    arr = arr[:, :, 0]
                return arr
            except Exception:
                img = Image.open(io.BytesIO(depth_source)).convert("L")
                return np.array(img, dtype=np.float32) / 255.0

        if isinstance(depth_source, Image.Image):
            img = depth_source.convert("L")
            return np.array(img, dtype=np.float32) / 255.0

        raise TypeError(f"Unsupported depth source type: {type(depth_source)}")

    def load_reference_elevation(
        self, ref_source: Union[str, Path, bytes, np.ndarray]
    ) -> Tuple[np.ndarray, Dict[str, Any]]:
        """Loads reference elevation raster and associated geospatial metadata."""
        geo_meta = {
            "crs": None,
            "transform": None,
            "nodata": None,
            "is_geotiff": False,
            "source_type": type(ref_source).__name__,
        }

        if isinstance(ref_source, np.ndarray):
            arr = ref_source.astype(np.float32)
            if arr.ndim == 3:
                arr = arr[:, :, 0]
            return arr, geo_meta

        if isinstance(ref_source, (str, Path)):
            p = Path(ref_source)
            if not p.exists():
                raise FileNotFoundError(f"Reference elevation file not found: {p}")

            suffix = p.suffix.lower()

            if suffix in [".tif", ".tiff"]:
                if not RASTERIO_AVAILABLE:
                    raise ImportError("rasterio is required to read GeoTIFF elevation references.")
                with rasterio.open(p) as src:
                    arr = src.read(1).astype(np.float32)
                    geo_meta["crs"] = src.crs.to_string() if src.crs else None
                    geo_meta["transform"] = src.transform
                    geo_meta["nodata"] = src.nodata
                    geo_meta["is_geotiff"] = True
                return arr, geo_meta

            elif suffix == ".h5":
                if not H5PY_AVAILABLE:
                    raise ImportError("h5py is required to read HDF5 elevation files.")
                with h5py.File(p, "r") as f:
                    ds_name = "image" if "image" in f else list(f.keys())[0]
                    arr = f[ds_name][:].astype(np.float32)
                if arr.ndim == 3:
                    arr = arr[:, :, 0]
                return arr, geo_meta

            elif suffix == ".npy":
                arr = np.load(p).astype(np.float32)
                if arr.ndim == 3:
                    arr = arr[:, :, 0]
                return arr, geo_meta

            elif suffix in [".png", ".jpg"]:
                img = Image.open(p).convert("F")
                return np.array(img, dtype=np.float32), geo_meta

        if isinstance(ref_source, bytes):
            # Check if HDF5 format (Magic bytes \x89HDF\r\n\x1a\n)
            if ref_source.startswith(b"\x89HDF") or b"HDF" in ref_source[:16]:
                if not H5PY_AVAILABLE:
                    raise ImportError("h5py is required to read HDF5 elevation files.")
                import tempfile
                with tempfile.NamedTemporaryFile(suffix=".h5", delete=False) as tmp:
                    tmp.write(ref_source)
                    tmp_path = tmp.name
                try:
                    with h5py.File(tmp_path, "r") as f:
                        ds_name = "image" if "image" in f else list(f.keys())[0]
                        arr = f[ds_name][:].astype(np.float32)
                    if arr.ndim == 3:
                        arr = arr[:, :, 0]
                    return arr, geo_meta
                finally:
                    try:
                        os.remove(tmp_path)
                    except OSError:
                        pass

            # Check if GeoTIFF bytes
            if ref_source.startswith(b"II*\x00") or ref_source.startswith(b"MM\x00*"):
                if RASTERIO_AVAILABLE:
                    import rasterio.io
                    with rasterio.io.MemoryFile(ref_source) as memfile:
                        with memfile.open() as src:
                            arr = src.read(1).astype(np.float32)
                            geo_meta["crs"] = src.crs.to_string() if src.crs else None
                            geo_meta["transform"] = src.transform
                            geo_meta["nodata"] = src.nodata
                            geo_meta["is_geotiff"] = True
                    return arr, geo_meta

            # Try numpy or PIL
            try:
                buf = io.BytesIO(ref_source)
                arr = np.load(buf).astype(np.float32)
                if arr.ndim == 3:
                    arr = arr[:, :, 0]
                return arr, geo_meta
            except Exception:
                img = Image.open(io.BytesIO(ref_source)).convert("F")
                return np.array(img, dtype=np.float32), geo_meta

        raise TypeError(f"Unsupported reference elevation type: {type(ref_source)}")


    def align_rasters(
        self, rel_depth: np.ndarray, ref_elevation: np.ndarray
    ) -> Tuple[np.ndarray, np.ndarray]:
        """Aligns reference elevation spatial grid to match relative depth map dimensions."""
        rel_h, rel_w = rel_depth.shape[:2]
        ref_h, ref_w = ref_elevation.shape[:2]

        if (rel_h, rel_w) == (ref_h, ref_w):
            return rel_depth, ref_elevation

        # Bilinear interpolation of continuous floating-point reference elevation
        ref_pil = Image.fromarray(ref_elevation.astype(np.float32), mode="F")
        ref_resized = np.array(
            ref_pil.resize((rel_w, rel_h), resample=Image.BILINEAR), dtype=np.float32
        )
        return rel_depth, ref_resized

    def estimate_affine_parameters(
        self,
        rel_depth: np.ndarray,
        ref_elevation: np.ndarray,
        nodata_val: Optional[float] = None,
    ) -> Dict[str, Any]:
        """Estimates affine calibration parameters (H = a * D + b) via least-squares regression.

        Rejects invalid / void / nodata pixels and clamps unphysical artifacts.
        """
        # 1. Mask invalid pixels
        valid_mask = (
            (~np.isnan(rel_depth))
            & (~np.isinf(rel_depth))
            & (~np.isnan(ref_elevation))
            & (~np.isinf(ref_elevation))
        )

        if nodata_val is not None:
            valid_mask &= (ref_elevation != nodata_val)

        # Standard elevation bounds: filter out SRTM / GLO-30 no-data void markers (e.g. -32768, -9999)
        # and negative elevation artifacts
        valid_mask &= (ref_elevation >= 0.0) & (ref_elevation <= 9000.0)

        total_pixels = rel_depth.size
        valid_pixels = int(np.count_nonzero(valid_mask))

        if valid_pixels < 32:
            raise ValueError(
                f"Insufficient valid overlapping pixels ({valid_pixels}/{total_pixels}) "
                f"for affine calibration between relative depth and elevation reference."
            )

        d_valid = rel_depth[valid_mask].astype(np.float64)
        h_valid = ref_elevation[valid_mask].astype(np.float64)

        # 2. Ordinary Least Squares: H = a * D + b
        d_mean = np.mean(d_valid)
        h_mean = np.mean(h_valid)

        d_diff = d_valid - d_mean
        h_diff = h_valid - h_mean

        var_d = np.mean(d_diff ** 2)
        cov_dh = np.mean(d_diff * h_diff)

        if var_d < 1e-12:
            # Degenerate case (constant relative depth)
            scale_a = 1.0
            offset_b = float(h_mean)
        else:
            scale_a = float(cov_dh / var_d)
            offset_b = float(h_mean - scale_a * d_mean)

        # 3. Fit quality metrics
        h_pred = scale_a * d_valid + offset_b
        residuals = h_pred - h_valid
        mae = float(np.mean(np.abs(residuals)))
        rmse = float(np.sqrt(np.mean(residuals ** 2)))

        var_h = np.mean(h_diff ** 2)
        if var_h > 1e-12 and var_d > 1e-12:
            pearson_r = float(cov_dh / (np.sqrt(var_d * var_h) + 1e-12))
            ss_tot = np.sum(h_diff ** 2)
            ss_res = np.sum(residuals ** 2)
            r2 = float(1.0 - (ss_res / (ss_tot + 1e-12)))
        else:
            pearson_r = 0.0
            r2 = 0.0

        return {
            "scale_factor_a": round(scale_a, 6),
            "offset_b": round(offset_b, 4),
            "mae_meters": round(mae, 4),
            "rmse_meters": round(rmse, 4),
            "r_squared": round(r2, 4),
            "pearson_r": round(pearson_r, 4),
            "valid_pixel_count": valid_pixels,
            "total_pixel_count": total_pixels,
            "valid_pixel_percentage": round((valid_pixels / total_pixels) * 100.0, 2),
            "reference_elevation_range": [round(float(np.min(h_valid)), 2), round(float(np.max(h_valid)), 2)],
        }

    def apply_calibration(
        self, rel_depth: np.ndarray, scale_a: float, offset_b: float, clamp_min_zero: bool = True
    ) -> np.ndarray:
        """Computes metric elevation raster: H = a * D + b."""
        metric_h = scale_a * rel_depth + offset_b
        if clamp_min_zero:
            metric_h = np.maximum(metric_h, 0.0)
        return metric_h.astype(np.float32)

    def colorize_dsm(self, dsm: np.ndarray, colormap: str = "terrain") -> Image.Image:
        """Creates a visual colormapped image of the metric Digital Surface Model."""
        d_min = float(np.nanmin(dsm))
        d_max = float(np.nanmax(dsm))
        if d_max > d_min:
            norm = (dsm - d_min) / (d_max - d_min)
        else:
            norm = np.zeros_like(dsm)
        norm = np.clip(norm, 0.0, 1.0)
        cmap = matplotlib.colormaps.get(colormap, matplotlib.colormaps["terrain"])
        colored = cmap(norm)[:, :, :3]
        colored_uint8 = (colored * 255.0).astype(np.uint8)
        return Image.fromarray(colored_uint8)

    def save_metric_dsm(
        self,
        metric_elevation: np.ndarray,
        stem: str,
        geo_meta: Optional[Dict[str, Any]] = None,
        colormap: str = "terrain",
    ) -> Dict[str, str]:
        """Saves calibrated metric elevation as GeoTIFF, numpy array, and visualization PNG."""
        tif_filename = f"{stem}_metric_dsm.tif"
        npy_filename = f"{stem}_metric_elevation.npy"
        vis_filename = f"{stem}_dsm_vis.png"

        tif_path = self.outputs_dir / tif_filename
        npy_path = self.outputs_dir / npy_filename
        vis_path = self.outputs_dir / vis_filename

        # 1. Save .npy matrix
        np.save(npy_path, metric_elevation)

        # 2. Save GeoTIFF
        h, w = metric_elevation.shape[:2]
        crs = geo_meta.get("crs") if geo_meta else None
        transform = geo_meta.get("transform") if geo_meta else None

        if RASTERIO_AVAILABLE:
            if transform is None:
                # Default 0.5m/pixel local metric transform if no CRS provided
                transform = from_origin(0.0, float(h) * 0.5, 0.5, 0.5)

            with rasterio.open(
                tif_path,
                "w",
                driver="GTiff",
                height=h,
                width=w,
                count=1,
                dtype="float32",
                crs=crs or "EPSG:3857",
                transform=transform,
                nodata=-9999.0,
            ) as dst:
                dst.write(metric_elevation, 1)

        # 3. Save Visual PNG & generate Base64
        colored_img = self.colorize_dsm(metric_elevation, colormap=colormap)
        colored_img.save(vis_path)

        buf = io.BytesIO()
        colored_img.save(buf, format="PNG")
        vis_b64 = "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode("utf-8")

        return {
            "dsm_geotiff_path": str(tif_path),
            "dsm_geotiff_url": f"/static/outputs/dsm/{tif_filename}",
            "metric_array_path": str(npy_path),
            "metric_array_url": f"/static/outputs/dsm/{npy_filename}",
            "dsm_vis_path": str(vis_path),
            "dsm_vis_url": f"/static/outputs/dsm/{vis_filename}",
            "dsm_vis_base64": vis_b64,
        }

    def calibrate(
        self,
        rel_depth_source: Union[str, Path, bytes, np.ndarray],
        ref_elevation_source: Union[str, Path, bytes, np.ndarray],
        stem: str = "sample",
        colormap: str = "terrain",
    ) -> Dict[str, Any]:
        """End-to-End Metric Calibration Pipeline:
        Relative Depth -> Align with Reference -> Least-Squares H = aD + b -> Metric DSM.
        """
        # Step 1: Load inputs
        rel_depth = self.load_relative_depth(rel_depth_source)
        ref_elevation, geo_meta = self.load_reference_elevation(ref_elevation_source)

        # Step 2: Spatial grid alignment
        rel_depth_aligned, ref_elevation_aligned = self.align_rasters(rel_depth, ref_elevation)

        # Step 3: Parameter estimation
        calib_params = self.estimate_affine_parameters(
            rel_depth_aligned, ref_elevation_aligned, nodata_val=geo_meta.get("nodata")
        )

        # Step 4: Calibrate full raster: H = a * D + b
        metric_dsm = self.apply_calibration(
            rel_depth_aligned,
            scale_a=calib_params["scale_factor_a"],
            offset_b=calib_params["offset_b"],
        )

        # Step 5: Save outputs and GeoTIFF
        artifacts = self.save_metric_dsm(
            metric_dsm, stem=stem, geo_meta=geo_meta, colormap=colormap
        )

        # Step 6: Statistics
        stats = {
            "min_metric_elevation_m": round(float(np.min(metric_dsm)), 2),
            "max_metric_elevation_m": round(float(np.max(metric_dsm)), 2),
            "mean_metric_elevation_m": round(float(np.mean(metric_dsm)), 2),
            "std_metric_elevation_m": round(float(np.std(metric_dsm)), 2),
            "raster_dimensions": {"width": int(metric_dsm.shape[1]), "height": int(metric_dsm.shape[0])},
        }

        # Step 7: Clear distinctions definition dictionary
        definitions = {
            "relative_depth": (
                "Dimensionless, affine-invariant inverse depth from neural network (Depth Anything V2). "
                "Captures relative surface topography without physical scale or elevation datum."
            ),
            "metric_elevation": (
                "Absolute physical height in metres (m) above ground level (AGL) or mean sea level (MSL), "
                "calibrated via affine formula H = a * D + b."
            ),
            "digital_surface_model_dsm": (
                "Continuous 2.5D georeferenced metric elevation surface capturing bare-earth topography "
                "plus all above-ground vertical structures (buildings, canopy, towers) in real-world spatial coordinates."
            ),
        }

        return {
            "status": "success",
            "formula": "H = a * D + b",
            "calibration_parameters": calib_params,
            "statistics": stats,
            "artifacts": artifacts,
            "geospatial_metadata": {
                "crs": geo_meta.get("crs"),
                "is_geotiff": geo_meta.get("is_geotiff", False),
            },
            "definitions": definitions,
        }

# Global singleton
affine_calibrator = AffineCalibrator()
