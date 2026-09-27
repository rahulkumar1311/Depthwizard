"""GAMUS Subset Preparation Utility
Downloads and stages a lightweight, reproducible subset of the GAMUS remote-sensing benchmark
for MVP development, pipeline testing, and validation prior to full-scale training.
"""

import os
import sys
import csv
import shutil
from pathlib import Path
from typing import List, Dict, Tuple
import numpy as np

# Ensure project root is available
PROJECT_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(PROJECT_ROOT / "backend"))

try:
    from huggingface_hub import hf_hub_download
except ImportError:
    hf_hub_download = None

try:
    import h5py
except ImportError:
    h5py = None

REPO_ID = "earthflow/GAMUS"

# Selected representative sample IDs from Washington D.C. urban/suburban coverage
DEFAULT_TRAIN_SAMPLES = [
    "DC_01_25",
    "DC_02_24",
    "DC_02_25",
    "DC_02_27",
]

DEFAULT_VAL_SAMPLES = [
    "DC_02_26",
    "DC_04_23",
]

def fetch_file(repo_id: str, repo_path: str, local_dest: Path) -> Path:
    """Copies from existing local cache or downloads from Hugging Face Hub."""
    if local_dest.exists() and local_dest.stat().st_size > 0:
        return local_dest

    # Check if file was previously downloaded in data/GAMUS/
    existing_alt = PROJECT_ROOT / "data" / "GAMUS" / repo_path
    if existing_alt.exists() and existing_alt.stat().st_size > 0:
        local_dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(existing_alt, local_dest)
        return local_dest

    if hf_hub_download is None:
        raise ImportError("huggingface_hub is required to download GAMUS files. Install via 'pip install huggingface_hub'.")

    local_dest.parent.mkdir(parents=True, exist_ok=True)
    temp_download = hf_hub_download(
        repo_id=repo_id,
        repo_type="dataset",
        filename=repo_path,
        local_dir=str(PROJECT_ROOT / "data" / ".hf_cache"),
    )
    shutil.copy2(temp_download, local_dest)
    return local_dest

def inspect_h5_file(file_path: Path) -> Dict[str, Any]:
    """Reads HDF5 dataset dimensions, dtype, and elevation bounds."""
    if not h5py:
        raise ImportError("h5py is required to inspect GAMUS subset.")

    with h5py.File(file_path, "r") as f:
        ds_name = "image" if "image" in f else list(f.keys())[0]
        ds = f[ds_name]
        shape = tuple(ds.shape)
        dtype = str(ds.dtype)
        arr = ds[:]
        min_v = float(np.min(arr))
        max_v = float(np.max(arr))
        attrs = dict(f.attrs)

    return {
        "shape": str(shape),
        "dtype": dtype,
        "min": min_v,
        "max": max_v,
        "attrs": str(attrs) if attrs else "None",
        "file_size": file_path.stat().st_size,
    }

def prepare_subset(
    output_dir: Path = PROJECT_ROOT / "data" / "GAMUS_mvp",
    train_ids: List[str] = DEFAULT_TRAIN_SAMPLES,
    val_ids: List[str] = DEFAULT_VAL_SAMPLES,
) -> Path:
    output_dir = Path(output_dir)
    train_dir = output_dir / "train"
    val_dir = output_dir / "val"
    train_dir.mkdir(parents=True, exist_ok=True)
    val_dir.mkdir(parents=True, exist_ok=True)

    manifest_rows = []
    print("=" * 70)
    print("       PREPARING SMALL GAMUS DATASET SUBSET FOR MVP")
    print("=" * 70)
    print(f"Target Directory : {output_dir}")
    print(f"Train Samples    : {len(train_ids)} pairs ({train_ids})")
    print(f"Val Samples      : {len(val_ids)} pairs ({val_ids})")
    print("-" * 70)

    # Process Train split
    print("[1/2] Processing Training Split...")
    for sid in train_ids:
        rgb_rel = f"images/train/{sid}_RGB.h5"
        agl_rel = f"heights/train/{sid}_AGL.h5"

        rgb_target = train_dir / f"{sid}_RGB.h5"
        agl_target = train_dir / f"{sid}_AGL.h5"

        print(f"  -> Fetching pair: {sid}")
        fetch_file(REPO_ID, rgb_rel, rgb_target)
        fetch_file(REPO_ID, agl_rel, agl_target)

        rgb_info = inspect_h5_file(rgb_target)
        agl_info = inspect_h5_file(agl_target)

        manifest_rows.append({
            "split": "train",
            "sample_id": sid,
            "rgb_path": str(rgb_target.relative_to(PROJECT_ROOT)).replace("\\", "/"),
            "reference_depth_path": str(agl_target.relative_to(PROJECT_ROOT)).replace("\\", "/"),
            "image_dimensions": rgb_info["shape"],
            "reference_dimensions": agl_info["shape"],
            "image_dtype": rgb_info["dtype"],
            "reference_dtype": agl_info["dtype"],
            "min_elevation_m": round(agl_info["min"], 3),
            "max_elevation_m": round(agl_info["max"], 3),
            "resolution_gsd": "0.5m/pixel",
            "rgb_size_bytes": rgb_info["file_size"],
            "reference_size_bytes": agl_info["file_size"],
            "source_repo": REPO_ID,
        })

    # Process Validation split
    print("\n[2/2] Processing Validation Split...")
    for sid in val_ids:
        rgb_rel = f"images/val/{sid}_RGB.h5"
        agl_rel = f"heights/val/{sid}_AGL.h5"

        rgb_target = val_dir / f"{sid}_RGB.h5"
        agl_target = val_dir / f"{sid}_AGL.h5"

        print(f"  -> Fetching pair: {sid}")
        fetch_file(REPO_ID, rgb_rel, rgb_target)
        fetch_file(REPO_ID, agl_rel, agl_target)

        rgb_info = inspect_h5_file(rgb_target)
        agl_info = inspect_h5_file(agl_target)

        manifest_rows.append({
            "split": "val",
            "sample_id": sid,
            "rgb_path": str(rgb_target.relative_to(PROJECT_ROOT)).replace("\\", "/"),
            "reference_depth_path": str(agl_target.relative_to(PROJECT_ROOT)).replace("\\", "/"),
            "image_dimensions": rgb_info["shape"],
            "reference_dimensions": agl_info["shape"],
            "image_dtype": rgb_info["dtype"],
            "reference_dtype": agl_info["dtype"],
            "min_elevation_m": round(agl_info["min"], 3),
            "max_elevation_m": round(agl_info["max"], 3),
            "resolution_gsd": "0.5m/pixel",
            "rgb_size_bytes": rgb_info["file_size"],
            "reference_size_bytes": agl_info["file_size"],
            "source_repo": REPO_ID,
        })

    # Write manifest.csv
    manifest_path = output_dir / "manifest.csv"
    fieldnames = [
        "split",
        "sample_id",
        "rgb_path",
        "reference_depth_path",
        "image_dimensions",
        "reference_dimensions",
        "image_dtype",
        "reference_dtype",
        "min_elevation_m",
        "max_elevation_m",
        "resolution_gsd",
        "rgb_size_bytes",
        "reference_size_bytes",
        "source_repo",
    ]

    with open(manifest_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(manifest_rows)

    print("\n" + "=" * 70)
    print("SUCCESS: GAMUS MVP subset preparation complete!")
    print(f"Manifest written to: {manifest_path}")
    print("=" * 70)

    return manifest_path

if __name__ == "__main__":
    prepare_subset()
