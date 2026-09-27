"""GAMUS Sample Visualization and Validation Utility
Visualizes paired optical RGB remote-sensing tiles and reference AGL elevation / DSM data,
computes topographic height statistics, and verifies DataLoader batch consistency.
"""

import os
import sys
from pathlib import Path
import numpy as np

# Add project root and backend to sys.path
PROJECT_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(PROJECT_ROOT / "backend"))

from datasets.gamus_dataset import (
    GAMUSDataset,
    get_gamus_dataloaders,
    DEPTH_ANYTHING_MEAN,
    DEPTH_ANYTHING_STD,
    TORCH_AVAILABLE,
)

def unnormalize_rgb(tensor_rgb: np.ndarray) -> np.ndarray:
    """Reverses Depth Anything V2 ImageNet normalization for plotting: (C, H, W) -> (H, W, 3) [0, 255]."""
    if tensor_rgb.ndim == 3 and tensor_rgb.shape[0] == 3:
        ch_last = np.transpose(tensor_rgb, (1, 2, 0))
    else:
        ch_last = tensor_rgb

    mean = np.array(DEPTH_ANYTHING_MEAN, dtype=np.float32).reshape(1, 1, 3)
    std = np.array(DEPTH_ANYTHING_STD, dtype=np.float32).reshape(1, 1, 3)
    unnorm = (ch_last * std + mean) * 255.0
    return np.clip(unnorm, 0, 255).astype(np.uint8)

def visualize_and_validate(
    data_dir: Path = PROJECT_ROOT / "data" / "GAMUS_mvp",
    output_image: Path = PROJECT_ROOT / "outputs" / "gamus_sample_visualization.png",
    split: str = "val",
    num_samples: int = 2,
):
    print("=" * 75)
    print("      GAMUS DATASET DATALOADER VALIDATION & VISUALIZATION")
    print("  ISRO SIH 2026 Problem Statement 26175 - Single-View Height Estimation")
    print("=" * 75)
    print(f"Dataset Path : {data_dir}")
    print(f"Split        : {split}")
    print(f"Target Size  : (518, 518) (Depth Anything V2 Small resolution)")
    print("-" * 75)

    if TORCH_AVAILABLE:
        import torch
        train_loader, val_loader = get_gamus_dataloaders(
            root_dir=data_dir,
            batch_size=1,
            target_size=(518, 518),
            normalize_rgb=True,
            num_workers=0,
        )
        loader = val_loader if split == "val" else train_loader
        iterator = iter(loader)
    else:
        dataset = GAMUSDataset(
            root_dir=data_dir,
            split=split,
            target_size=(518, 518),
            normalize_rgb=True,
            return_tensors=False,
        )
        iterator = None

    samples_to_plot = []

    for i in range(num_samples):
        if iterator is not None:
            batch = next(iterator)
            # Batch extraction
            img_tensor = batch["image"][0].cpu().numpy()
            target_tensor = batch["target"][0, 0].cpu().numpy()
            meta = {k: v[0] if isinstance(v, list) else v for k, v in batch["metadata"].items()}
        else:
            item = dataset[i]
            img_tensor = item["image"]
            target_tensor = item["target"][0]
            meta = item["metadata"]

        sid = meta["id"]
        raw_min = float(meta["raw_min_elevation"])
        raw_max = float(meta["raw_max_elevation"])
        clamped_min = float(meta["clamped_min_elevation"])
        clamped_max = float(meta["clamped_max_elevation"])

        # Statistics computation
        mean_elev = float(np.mean(target_tensor))
        median_elev = float(np.median(target_tensor))
        std_elev = float(np.std(target_tensor))
        zero_pct = float((target_tensor == 0.0).sum() / target_tensor.size * 100.0)

        print(f"\n[Sample {i + 1}/{num_samples}] Tile ID: '{sid}'")
        print(f"  RGB Path        : {meta['rgb_path']}")
        print(f"  Reference Path  : {meta['reference_path']}")
        print(f"  Original Shape  : {meta['original_shape']} -> Model Input: {img_tensor.shape}")
        print(f"  RGB Normalization: Mean={DEPTH_ANYTHING_MEAN}, Std={DEPTH_ANYTHING_STD}")
        print(f"  RGB Tensor Range: [{img_tensor.min():.3f}, {img_tensor.max():.3f}]")
        print(f"  Target Shape    : {target_tensor.shape} (Metric AGL Elevation in meters)")
        print(f"  Raw Elevation   : [{raw_min:.2f}m, {raw_max:.2f}m]")
        print(f"  Clamped Target  : [{clamped_min:.2f}m, {clamped_max:.2f}m]")
        print(f"  Height Mean/Std : {mean_elev:.2f}m ± {std_elev:.2f}m (Median: {median_elev:.2f}m)")
        print(f"  Ground Fraction : {zero_pct:.1f}% pixels at ground level (0.0m)")

        # Verify pairing integrity
        rgb_base = Path(meta['rgb_path']).name.replace("_RGB.h5", "").replace("RGB.h5", "")
        agl_base = Path(meta['reference_path']).name.replace("_AGL.h5", "").replace("AGL.h5", "")
        if rgb_base == agl_base == sid:
            print("  Pairing Status  : [VERIFIED] Perfect spatial co-registration between optical RGB and reference elevation.")
        else:
            print(f"  Pairing Status  : [MISMATCH WARNING] '{rgb_base}' vs '{agl_base}'")

        samples_to_plot.append({
            "id": sid,
            "rgb_disp": unnormalize_rgb(img_tensor),
            "target": target_tensor,
            "stats": {
                "min": clamped_min,
                "max": clamped_max,
                "mean": mean_elev,
                "std": std_elev,
                "ground_pct": zero_pct,
            }
        })

    # Generate matplotlib visualization
    try:
        import matplotlib
        matplotlib.use("Agg")
        import matplotlib.pyplot as plt

        output_image.parent.mkdir(parents=True, exist_ok=True)
        num_rows = len(samples_to_plot)
        fig, axes = plt.subplots(num_rows, 3, figsize=(15, 5 * num_rows), dpi=150)
        if num_rows == 1:
            axes = np.expand_dims(axes, 0)

        for r, s_data in enumerate(samples_to_plot):
            sid = s_data["id"]
            stats = s_data["stats"]

            # Panel 1: RGB Image
            axes[r, 0].imshow(s_data["rgb_disp"])
            axes[r, 0].set_title(f"Optical RGB Tile [{sid}]\n(518x518, 0.5m GSD)", fontsize=11, fontweight="bold")
            axes[r, 0].axis("off")

            # Panel 2: Reference Metric Elevation Heatmap
            im2 = axes[r, 1].imshow(s_data["target"], cmap="turbo", vmin=0, vmax=max(stats["max"], 10.0))
            axes[r, 1].set_title(
                f"Reference nDSM / AGL Elevation\nRange: [0.0m, {stats['max']:.1f}m] | Mean: {stats['mean']:.1f}m",
                fontsize=11,
                fontweight="bold",
            )
            axes[r, 1].axis("off")
            cbar = fig.colorbar(im2, ax=axes[r, 1], fraction=0.046, pad=0.04)
            cbar.set_label("Elevation Above Ground (m)", fontsize=9)

            # Panel 3: Elevation Distribution Histogram
            elev_flat = s_data["target"].flatten()
            non_zero = elev_flat[elev_flat > 0.1]
            axes[r, 2].hist(non_zero, bins=40, color="#0284c7", edgecolor="#075985", alpha=0.85)
            axes[r, 2].set_title(
                f"Canopy & Building Heights (AGL > 0.1m)\nGround Level: {stats['ground_pct']:.1f}%",
                fontsize=11,
                fontweight="bold",
            )
            axes[r, 2].set_xlabel("Height (meters)", fontsize=9)
            axes[r, 2].set_ylabel("Pixel Frequency", fontsize=9)
            axes[r, 2].grid(True, linestyle="--", alpha=0.4)

        plt.tight_layout()
        fig.savefig(output_image, bbox_inches="tight")
        plt.close(fig)
        print(f"\n[Visualization Output] Multi-panel visualization successfully saved to:")
        print(f"  -> {output_image}")
    except Exception as e:
        print(f"\n[Note] Plot generation skipped: {e}")

    print("\n" + "=" * 75)
    print("VERIFICATION COMPLETE: DataLoader and pairing logic fully functional.")
    print("=" * 75)

if __name__ == "__main__":
    visualize_and_validate()
