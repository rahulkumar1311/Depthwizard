"""3D Terrain Mesh Service
Generates terrain heightfields, 3D meshes (OBJ), and transect elevation profiles.
"""

from typing import Dict, Any, List, Tuple
import numpy as np

class MeshService:
    @staticmethod
    def generate_heightfield(
        dsm: np.ndarray,
        target_resolution: int = 128
    ) -> Dict[str, Any]:
        """Downsamples DSM to target grid resolution for real-time 60fps WebGL/Three.js rendering.
        Returns:
            Dict containing:
                - heights: 1D flat list of float elevation values
                - rows, cols: grid dimensions
                - min_height, max_height: elevation bounds in meters
        """
        from PIL import Image

        orig_h, orig_w = dsm.shape
        img = Image.fromarray(dsm.astype(np.float32), mode="F")
        resampled = np.array(
            img.resize((target_resolution, target_resolution), resample=Image.BILINEAR),
            dtype=np.float32,
        )

        return {
            "rows": target_resolution,
            "cols": target_resolution,
            "min_height": round(float(np.min(resampled)), 2),
            "max_height": round(float(np.max(resampled)), 2),
            "mean_height": round(float(np.mean(resampled)), 2),
            "heights": resampled.flatten().tolist(),
        }


    @staticmethod
    def extract_elevation_profile(
        dsm: np.ndarray,
        start_pt: Tuple[int, int],
        end_pt: Tuple[int, int],
        num_samples: int = 100,
        pixel_scale_m: float = 0.5
    ) -> Dict[str, Any]:
        """Extracts continuous elevation transect and slope between two pixel points."""
        x0, y0 = start_pt
        x1, y1 = end_pt

        x_coords = np.linspace(x0, x1, num_samples)
        y_coords = np.linspace(y0, y1, num_samples)

        h, w = dsm.shape
        x_indices = np.clip(np.round(x_coords).astype(int), 0, w - 1)
        y_indices = np.clip(np.round(y_coords).astype(int), 0, h - 1)

        elevations = dsm[y_indices, x_indices].tolist()

        # Cumulative distance along transect
        pixel_distances = np.hypot(x_coords - x0, y_coords - y0)
        metric_distances = (pixel_distances * pixel_scale_m).tolist()

        # Local slope between adjacent transect samples
        elev_arr = np.array(elevations)
        dist_arr = np.array(metric_distances)
        d_dist = np.diff(dist_arr)
        d_elev = np.diff(elev_arr)
        # Avoid division by zero
        d_dist[d_dist == 0] = 1e-4
        slopes = np.degrees(np.arctan(np.abs(d_elev / d_dist))).tolist()

        return {
            "distances": metric_distances,
            "elevations": elevations,
            "slopes": slopes,
            "start": {"x": x0, "y": y0},
            "end": {"x": x1, "y": y1},
            "total_distance_m": float(metric_distances[-1]) if metric_distances else 0.0,
            "max_slope_deg": float(np.max(slopes)) if slopes else 0.0,
            "avg_slope_deg": float(np.mean(slopes)) if slopes else 0.0,
        }

mesh_service = MeshService()
