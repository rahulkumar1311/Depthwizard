"""Geospatial Service
Handles GeoTIFF raster I/O, DSM export, and coordinate reference system (CRS) metadata.
"""

from pathlib import Path
from typing import Optional, Dict, Any
import numpy as np

class GeospatialService:
    @staticmethod
    def is_rasterio_available() -> bool:
        try:
            import rasterio
            return True
        except ImportError:
            return False

    @classmethod
    def save_dsm_geotiff(
        cls,
        dsm: np.ndarray,
        output_path: Path,
        crs: str = "EPSG:4326",
        transform: Optional[Any] = None,
        nodata: float = -9999.0
    ) -> bool:
        """Saves metric DSM array as a 32-bit floating point GeoTIFF using Rasterio."""
        if not cls.is_rasterio_available():
            # If rasterio is not installed, save as raw numpy array for fallback
            np.save(output_path.with_suffix(".npy"), dsm)
            return False

        import rasterio
        from rasterio.transform import from_origin

        height, width = dsm.shape
        if transform is None:
            # Default arbitrary transform if input image has no geo-coordinates
            transform = from_origin(0.0, 0.0, 0.5, 0.5)

        with rasterio.open(
            output_path,
            "w",
            driver="GTiff",
            height=height,
            width=width,
            count=1,
            dtype=rasterio.float32,
            crs=crs,
            transform=transform,
            nodata=nodata,
        ) as dst:
            dst.write(dsm.astype(np.float32), 1)

        return True

geospatial_service = GeospatialService()
