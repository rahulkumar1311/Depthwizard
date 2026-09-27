"""Test Depth Inference Utility with Depth Anything 3 (DA3)
Runs Depth Anything 3 monocular relative depth estimation on a sample remote-sensing RGB image,
verifies input/output dimensions, saves visual and numerical representations, and inspects statistics.
ISRO SIH 2026 Problem Statement 26175 (DepthWizard)
"""

import os
import sys
import time
from pathlib import Path
import numpy as np
from PIL import Image

# Add project root and backend to sys.path
PROJECT_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(PROJECT_ROOT / "backend"))

from models.depth_anything import DepthAnything3, get_default_device


def test_inference(
    sample_rgb_path: Path = PROJECT_ROOT / "data" / "sample" / "sample_gamus_optical.png",
    output_png: Path = PROJECT_ROOT / "outputs" / "depth" / "sample_relative_depth.png",
    output_npy: Path = PROJECT_ROOT / "outputs" / "depth" / "sample_relative_depth.npy",
):
    print("=" * 75)
    print("         DEPTH ANYTHING 3 (DA3) - MONOCULAR DEPTH INFERENCE TEST")
    print("  ISRO SIH 2026 Problem Statement 26175 - Single-View Height Estimation")
    print("=" * 75)
    print(f"Sample Input : {sample_rgb_path}")
    print(f"Target Device: {get_default_device()}")
    print("-" * 75)

    if not sample_rgb_path.exists():
        sample_rgb_path = PROJECT_ROOT / "data" / "GAMUS_mvp" / "val" / "DC_02_26_RGB.h5"

    if not sample_rgb_path.exists():
        raise FileNotFoundError(f"Sample file not found at: {sample_rgb_path}")

    # Initialize Depth Anything 3 model
    model = DepthAnything3()
    model_info = model.get_model_info()

    # Load input image to inspect input dimensions
    pil_img = model._prepare_pil_image(sample_rgb_path)
    in_w, in_h = pil_img.size
    print(f"\n[1] Input Image Verified:")
    print(f"    Dimensions   : {in_h} x {in_w} x 3 (H x W x C)")
    print(f"    Format/Source: {sample_rgb_path.suffix} ({sample_rgb_path.name})")

    # Run relative depth inference with timing
    print("\n[2] Executing Monocular Relative Depth Inference with Depth Anything 3...")
    t_start = time.perf_counter()
    relative_depth = model.predict_depth(sample_rgb_path, return_normalized=False)
    t_end = time.perf_counter()
    inference_time_sec = t_end - t_start
    inference_time_ms = inference_time_sec * 1000.0

    out_h, out_w = relative_depth.shape
    d_min = float(np.min(relative_depth))
    d_max = float(np.max(relative_depth))
    d_mean = float(np.mean(relative_depth))
    d_std = float(np.std(relative_depth))

    print("\n[3] Depth Anything 3 Inference Report:")
    print("-" * 55)
    print(f"    * Model Name        : {model_info['model_name']}")
    print(f"    * Architecture      : {model_info['architecture']}")
    print(f"    * Device Used       : {model_info['device']}")
    print(f"    * Input Dimensions  : {in_w} x {in_h} x 3")
    print(f"    * Output Dimensions : {out_w} x {out_h}")
    print(f"    * Minimum Value     : {d_min:.4f}")
    print(f"    * Maximum Value     : {d_max:.4f}")
    print(f"    * Mean Value        : {d_mean:.4f} (Std: {d_std:.4f})")
    print(f"    * Inference Time    : {inference_time_sec:.3f} s ({inference_time_ms:.1f} ms)")
    print(f"    * Depth Convention  : {model_info['depth_convention']}")
    print("    * NOTE              : Output is RELATIVE DEPTH. Downstream affine calibration (H = a*D + b)")
    print("                          is required to produce metric elevation in meters.")
    print("-" * 55)

    # Dimension consistency check
    assert (in_h, in_w) == (out_h, out_w), f"Dimension mismatch: input {(in_h, in_w)} vs output {(out_h, out_w)}"
    print("    Dimension Match: [VERIFIED] Output spatial dimensions perfectly match input image.")

    # Save raw numerical representation (.npy) for metric calibration
    output_npy.parent.mkdir(parents=True, exist_ok=True)
    np.save(output_npy, relative_depth)
    print(f"\n[4] Saved Numerical Representation:")
    print(f"    Path: {output_npy} ({output_npy.stat().st_size / (1024*1024):.2f} MB)")

    # Normalize relative depth [0.0, 1.0] for visualization
    norm_depth = (relative_depth - d_min) / (d_max - d_min + 1e-8)

    # Save visual color-mapped representation (.png)
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    fig, axes = plt.subplots(1, 2, figsize=(14, 6), dpi=150)

    # Left: Input RGB
    axes[0].imshow(pil_img)
    axes[0].set_title(
        f"Input Optical Remote-Sensing RGB\n[{sample_rgb_path.name}] ({in_w}x{in_h})",
        fontsize=11,
        fontweight="bold",
    )
    axes[0].axis("off")

    # Right: Relative Depth Map
    im = axes[1].imshow(norm_depth, cmap="inferno")
    axes[1].set_title(
        f"Depth Anything 3 Relative Depth Map\nRange: [{d_min:.2f}, {d_max:.2f}] (Relative / Unitless)",
        fontsize=11,
        fontweight="bold",
    )
    axes[1].axis("off")
    cbar = fig.colorbar(im, ax=axes[1], fraction=0.046, pad=0.04)
    cbar.set_label("Relative Depth (Ray Z)", fontsize=9)

    plt.tight_layout()
    output_png.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(output_png, bbox_inches="tight")
    plt.close(fig)

    print(f"\n[5] Saved Visual Representation:")
    print(f"    Path: {output_png} ({output_png.stat().st_size / 1024:.1f} KB)")

    print("\n" + "=" * 75)
    print("SUCCESS: Depth Anything 3 relative depth inference fully verified!")
    print("=" * 75)

    return {
        "model_name": model_info["model_name"],
        "device": model_info["device"],
        "input_dimensions": (in_h, in_w, 3),
        "output_dimensions": (out_h, out_w),
        "min_depth": d_min,
        "max_depth": d_max,
        "mean_depth": d_mean,
        "inference_time_sec": inference_time_sec,
        "inference_time_ms": inference_time_ms,
    }


if __name__ == "__main__":
    test_inference()
