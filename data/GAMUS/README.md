# GAMUS Dataset (Remote Sensing Domain Adaptation)

This directory is designated for the **GAMUS** dataset used in fine-tuning and domain adapting monocular relative depth estimation models (such as Depth Anything V2 Small) to satellite and aerial remote-sensing imagery.

> **Note**: Per MVP setup instructions, the full GAMUS dataset is **not** pre-downloaded.

## Expected Directory Structure
```text
GAMUS/
├── train/
│   ├── rgb/           # Optical aerial / satellite imagery (e.g., GeoTIFF / PNG / JPG)
│   ├── dsm/           # High-resolution reference DSM / LiDAR heights
│   └── masks/         # Optional valid data / shadow / cloud masks
├── val/
│   ├── rgb/
│   └── dsm/
├── test/
│   ├── rgb/
│   └── dsm/
└── metadata.csv       # Metadata with geographic coordinates, resolution (GSD), and camera params
```

## Dataset Preprocessing
When dataset files are placed here, run:
```bash
python scripts/prepare_gamus.py
```
This script validates image channels, crops tiles to consistent dimensions, normalizes elevation ranges, and generates paired data splits.
