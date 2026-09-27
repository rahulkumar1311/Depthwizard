"""Metric Elevation Calibration Service
Transforms relative monocular depth to metric Digital Surface Models (DSMs)
and computes topographic slope/aspect metrics.
"""

from typing import List, Dict, Any, Optional
import numpy as np

class CalibrationService:
    @staticmethod
    def linear_calibrate(
        relative_depth: np.ndarray,
        min_elevation: float,
        max_elevation: float,
        invert: bool = False
    ) -> np.ndarray:
        """Calibrates relative depth array [0, 1] to metric elevation [min_elevation, max_elevation] in meters.
        Args:
            relative_depth: 2D array normalized between 0 and 1.
            min_elevation: Minimum ground elevation in meters.
            max_elevation: Maximum ground elevation in meters.
            invert: Invert depth if higher values represent distance from camera rather than height.
        Returns:
            np.ndarray: Metric elevation array in meters.
        """
        depth = relative_depth.astype(np.float32)
        if invert:
            depth = 1.0 - depth

        elevation_dsm = min_elevation + depth * (max_elevation - min_elevation)
        return elevation_dsm

    @staticmethod
    def gcp_calibrate(
        relative_depth: np.ndarray,
        gcps: List[Dict[str, float]]
    ) -> np.ndarray:
        """Calibrates relative depth using Ground Control Points (GCPs) via affine least-squares regression:
        Z_metric = scale * d_rel + shift.
        Args:
            relative_depth: 2D array of relative depth.
            gcps: List of dicts with 'x', 'y' (pixel coordinates) and 'elevation' (meters).
        """
        if len(gcps) < 2:
            raise ValueError("At least 2 Ground Control Points (GCPs) are required for affine calibration.")

        x_coords = [int(p["x"]) for p in gcps]
        y_coords = [int(p["y"]) for p in gcps]
        z_target = np.array([p["elevation"] for p in gcps], dtype=np.float32)

        d_samples = relative_depth[y_coords, x_coords]

        # Fit Z = scale * d + shift
        A = np.vstack([d_samples, np.ones(len(d_samples))]).T
        scale, shift = np.linalg.lstsq(A, z_target, rcond=None)[0]

        calibrated_dsm = scale * relative_depth + shift
        return calibrated_dsm

    @staticmethod
    def compute_slope_map(dsm: np.ndarray, cell_size_meters: float = 0.5) -> np.ndarray:
        """Computes topographic slope in degrees using 2nd-order central finite differences.
        Args:
            dsm: 2D metric elevation array (meters).
            cell_size_meters: Spatial resolution (Ground Sampling Distance - GSD) in meters.
        Returns:
            np.ndarray: Slope map in degrees [0, 90].
        """
        dz_dy, dz_dx = np.gradient(dsm, cell_size_meters, cell_size_meters)
        rise = np.sqrt(dz_dx**2 + dz_dy**2)
        slope_rad = np.arctan(rise)
        slope_deg = np.degrees(slope_rad)
        return slope_deg.astype(np.float32)

    @staticmethod
    def affine_calibrate(
        relative_depth_source: Any,
        reference_elevation_source: Any,
        stem: str = "sample",
        colormap: str = "terrain",
    ) -> Dict[str, Any]:
        """Runs the modular AffineCalibrator pipeline: H = a * D + b."""
        from calibration.affine_calibration import affine_calibrator
        return affine_calibrator.calibrate(
            rel_depth_source=relative_depth_source,
            ref_elevation_source=reference_elevation_source,
            stem=stem,
            colormap=colormap,
        )

calibration_service = CalibrationService()

