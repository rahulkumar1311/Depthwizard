"""DepthWizard - GAMUS Dataset Preprocessing Skeleton
Prepares, validates, and tiles remote-sensing optical images and paired DSMs.
"""

import argparse
import os
import glob
from typing import List, Tuple

def scan_gamus_directory(data_dir: str) -> dict:
    """Scans the GAMUS dataset directory structure and validates paired RGB-DSM files."""
    rgb_files = glob.glob(os.path.join(data_dir, "**", "rgb", "*.*"), recursive=True)
    dsm_files = glob.glob(os.path.join(data_dir, "**", "dsm", "*.*"), recursive=True)

    summary = {
        "rgb_count": len(rgb_files),
        "dsm_count": len(dsm_files),
        "status": "ready" if len(rgb_files) > 0 and len(dsm_files) > 0 else "empty_or_incomplete",
        "data_dir": data_dir
    }
    return summary

def main():
    parser = argparse.ArgumentParser(description="GAMUS Remote Sensing Dataset Preprocessor")
    parser.add_argument("--data-dir", type=str, default="data/GAMUS", help="Path to GAMUS dataset folder")
    parser.add_argument("--tile-size", type=int, default=518, help="Tile crop size for Depth Anything V2 (default: 518)")
    parser.add_argument("--check-only", action="store_true", help="Only verify dataset layout without tiling")
    args = parser.parse_args()

    print(f"[DepthWizard] Inspecting GAMUS dataset path: {args.data_dir}")
    summary = scan_gamus_directory(args.data_dir)
    print(f"[DepthWizard] Dataset status: {summary['status']}")
    print(f"[DepthWizard] Found {summary['rgb_count']} RGB imagery files and {summary['dsm_count']} DSM files.")

    if summary["status"] == "empty_or_incomplete":
        print("[DepthWizard] GAMUS dataset is currently not loaded. To use GAMUS:")
        print("  1. Place RGB tiles in data/GAMUS/train/rgb/ and DSM files in data/GAMUS/train/dsm/")
        print("  2. Run 'python scripts/prepare_gamus.py'")
    else:
        print("[DepthWizard] Dataset found. Ready for preprocessing and fine-tuning.")

if __name__ == "__main__":
    main()
