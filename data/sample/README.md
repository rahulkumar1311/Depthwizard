# Sample Remote-Sensing Imagery

Place test satellite or aerial optical RGB images here for single-view height estimation and 3D reconstruction pipeline validation.

## Supported Formats
- Standard RGB: `.jpg`, `.png`, `.webp`
- Geospatial Geotiff: `.tif`, `.tiff` (with projection and geospatial metadata)

## Pipeline Workflow
Images placed here can be processed via the Web UI (`http://localhost:5173`) or the CLI pipeline script:
```bash
python scripts/run_pipeline.py --input data/sample/sample_satellite.png
```
