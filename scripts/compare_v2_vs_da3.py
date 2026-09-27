"""Regression Test: Depth Anything V2 Small vs Depth Anything 3 (DA3)
Evaluates on the exact same remote-sensing image and ground-truth elevation reference.
ISRO SIH 2026 Problem Statement 26175 (DepthWizard)
"""

import sys
import time
from pathlib import Path
import numpy as np
from PIL import Image
import h5py

WORKSPACE_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(WORKSPACE_DIR))
sys.path.insert(0, str(WORKSPACE_DIR / "backend"))

from backend.models.depth_anything import DepthAnything3
from backend.calibration.affine_calibration import affine_calibrator


def run_v2_inference(image_path: Path):
    """Loads and runs Depth Anything V2 Small from cache."""
    from transformers import AutoImageProcessor, AutoModelForDepthEstimation
    import torch
    import torch.nn.functional as F

    cache_dir = WORKSPACE_DIR / "models" / "weights" / "hf_cache"
    v2_id = "depth-anything/Depth-Anything-V2-Small-hf"

    processor = AutoImageProcessor.from_pretrained(v2_id, cache_dir=str(cache_dir))
    model = AutoModelForDepthEstimation.from_pretrained(v2_id, cache_dir=str(cache_dir))
    model.eval()

    pil_img = Image.open(image_path).convert("RGB")
    orig_w, orig_h = pil_img.size

    t0 = time.perf_counter()
    inputs = processor(images=pil_img, return_tensors="pt")
    with torch.no_grad():
        outputs = model(**inputs)
        pred = outputs.predicted_depth
        interpolated = F.interpolate(
            pred.unsqueeze(1),
            size=(orig_h, orig_w),
            mode="bilinear",
            align_corners=False,
        )
        depth_v2 = interpolated.squeeze().cpu().numpy().astype(np.float32)
    t_v2 = (time.perf_counter() - t0) * 1000.0

    return depth_v2, t_v2, (orig_h, orig_w)


def run_da3_inference(image_path: Path):
    """Loads and runs Depth Anything 3."""
    da3 = DepthAnything3()
    pil_img = Image.open(image_path).convert("RGB")
    orig_w, orig_h = pil_img.size

    t0 = time.perf_counter()
    depth_da3 = da3.predict_depth(image_path, return_normalized=False)
    t_da3 = (time.perf_counter() - t0) * 1000.0

    return depth_da3, t_da3, (orig_h, orig_w)


def main():
    print("=" * 80)
    print("      REGRESSION BENCHMARK: Depth Anything V2 vs Depth Anything 3")
    print("=" * 80)

    image_path = WORKSPACE_DIR / "data" / "sample" / "sample_gamus_optical.png"
    ref_path = WORKSPACE_DIR / "data" / "GAMUS_mvp" / "val" / "DC_02_26_AGL.h5"

    print(f"Test Image           : {image_path.name}")
    print(f"Ground-Truth Reference: {ref_path.name}")

    with h5py.File(ref_path, "r") as f:
        ds_name = "image" if "image" in f else list(f.keys())[0]
        h_gt = f[ds_name][:].astype(np.float32)

    # 1. Run V2
    print("\n[1/3] Running Depth Anything V2 Small...")
    depth_v2, time_v2, dim_v2 = run_v2_inference(image_path)
    d_v2_resized, h_v2_aligned = affine_calibrator.align_rasters(depth_v2, h_gt)
    fit_v2 = affine_calibrator.estimate_affine_parameters(d_v2_resized, h_v2_aligned)

    # 2. Run DA3
    print("[2/3] Running Depth Anything 3 (DA3)...")
    depth_da3, time_da3, dim_da3 = run_da3_inference(image_path)
    d_da3_resized, h_da3_aligned = affine_calibrator.align_rasters(depth_da3, h_gt)
    fit_da3 = affine_calibrator.estimate_affine_parameters(d_da3_resized, h_da3_aligned)

    # 3. Print Comparison Report
    print("\n" + "=" * 80)
    print("                     MODEL COMPARISON & REGRESSION REPORT")
    print("=" * 80)
    print(f"{'Metric':<30} {'Depth Anything V2 Small':<25} {'Depth Anything 3':<25}")
    print("-" * 80)
    print(f"{'Model Architecture':<30} {'ViT-S (DINOv2 backbone)':<25} {'DepthAnything3Net (ViT-S)':<25}")
    print(f"{'Parameters':<30} {'~24.8 Million':<25} {'~34.3 Million':<25}")
    print(f"{'Device':<30} {'CPU':<25} {'CPU':<25}")
    print(f"{'Inference Latency':<30} {f'{time_v2:.1f} ms':<25} {f'{time_da3:.1f} ms':<25}")
    print(f"{'Output Dimensions':<30} {f'{dim_v2[1]}x{dim_v2[0]}':<25} {f'{dim_da3[1]}x{dim_da3[0]}':<25}")
    print(f"{'Depth Convention':<30} {'Disparity (Inverse Depth)':<25} {'Ray Distance (Z Depth)':<25}")
    print(f"{'Raw Min Depth':<30} {f'{np.min(depth_v2):.4f}':<25} {f'{np.min(depth_da3):.4f}':<25}")
    print(f"{'Raw Max Depth':<30} {f'{np.max(depth_v2):.4f}':<25} {f'{np.max(depth_da3):.4f}':<25}")
    print(f"{'Raw Mean Depth':<30} {f'{np.mean(depth_v2):.4f}':<25} {f'{np.mean(depth_da3):.4f}':<25}")
    print(f"{'Raw Std Depth':<30} {f'{np.std(depth_v2):.4f}':<25} {f'{np.std(depth_da3):.4f}':<25}")
    print("-" * 80)
    a_v2_str = f"{fit_v2['scale_factor_a']:.4f}"
    a_da3_str = f"{fit_da3['scale_factor_a']:.4f}"
    b_v2_str = f"{fit_v2['offset_b']:.4f} m"
    b_da3_str = f"{fit_da3['offset_b']:.4f} m"
    r_v2_str = f"{abs(fit_v2['pearson_r']):.4f}"
    r_da3_str = f"{abs(fit_da3['pearson_r']):.4f}"
    r2_v2_str = f"{fit_v2['r_squared']:.4f}"
    r2_da3_str = f"{fit_da3['r_squared']:.4f}"
    mae_v2_str = f"{fit_v2['mae_meters']:.2f} m"
    mae_da3_str = f"{fit_da3['mae_meters']:.2f} m"
    rmse_v2_str = f"{fit_v2['rmse_meters']:.2f} m"
    rmse_da3_str = f"{fit_da3['rmse_meters']:.2f} m"

    print("GROUND-TRUTH CALIBRATION ACCURACY (vs GAMUS LiDAR nDSM):")
    print(f"{'Affine Scale (a)':<30} {a_v2_str:<25} {a_da3_str:<25}")
    print(f"{'Affine Offset (b)':<30} {b_v2_str:<25} {b_da3_str:<25}")
    print(f"{'Pearson Correlation |r|':<30} {r_v2_str:<25} {r_da3_str:<25}")
    print(f"{'R-squared (R2)':<30} {r2_v2_str:<25} {r2_da3_str:<25}")
    print(f"{'Mean Abs Error (MAE)':<30} {mae_v2_str:<25} {mae_da3_str:<25}")
    print(f"{'Root Mean Sq Error (RMSE)':<30} {rmse_v2_str:<25} {rmse_da3_str:<25}")
    print("=" * 80)


if __name__ == "__main__":
    main()
