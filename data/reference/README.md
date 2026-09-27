# Reference Ground Truth & Calibration Data

This directory stores ground-truth elevation references used to calibrate monocular relative depth maps into metric Digital Surface Models (DSMs).

## Calibration References Supported:
1. **Ground Control Points (GCPs)**: CSV containing `(x, y, elevation_meters)` or `(lat, lon, elevation_meters)` coordinates.
2. **Coarse Digital Elevation Models (DEMs)**: SRTM / ALOS AW3D30 / Copernicus DEM GeoTIFFs used for scale-and-shift polynomial calibration.
3. **Reference DSMs**: High-resolution LiDAR DSMs for precision accuracy assessment (RMSE, MAE, δ < 1.25).
