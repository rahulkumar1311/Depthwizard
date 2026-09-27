"""Test DA3 output with affine calibration."""
import sys
from pathlib import Path
import numpy as np
from PIL import Image
import h5py

workspace_dir = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(workspace_dir))
sys.path.insert(0, str(workspace_dir / "backend" / "models" / "da3_repo" / "src"))
sys.path.insert(0, str(workspace_dir / "backend"))

from backend.calibration.affine_calibration import affine_calibrator
from depth_anything_3.api import DepthAnything3

def main():
    img_path = workspace_dir / "data" / "sample" / "sample_gamus_optical.png"
    img = Image.open(img_path).convert("RGB")
    orig_w, orig_h = img.size
    print(f"Loaded image: {img_path.name}, size: {orig_w}x{orig_h}")

    model_path = workspace_dir / "models" / "weights" / "da3_small"
    model = DepthAnything3.from_pretrained(str(model_path))

    pred = model.inference([np.array(img)])
    d_raw = pred.depth[0] # shape (504, 504)
    print(f"Raw DA3 depth shape: {d_raw.shape}, min: {np.min(d_raw):.4f}, max: {np.max(d_raw):.4f}, mean: {np.mean(d_raw):.4f}")

    ref_path = workspace_dir / "data" / "GAMUS_mvp" / "val" / "DC_02_26_AGL.h5"
    with h5py.File(ref_path, "r") as f:
        ds_name = "image" if "image" in f else list(f.keys())[0]
        h_ref = f[ds_name][:].astype(np.float32)
    print(f"Loaded reference elevation: {ref_path.name}, shape: {h_ref.shape}, min: {np.min(h_ref):.2f}, max: {np.max(h_ref):.2f}")

    # Resize d_raw to reference resolution
    d_resized, h_aligned = affine_calibrator.align_rasters(d_raw, h_ref)

    # 1. Direct depth D
    fit_raw = affine_calibrator.estimate_affine_parameters(d_resized, h_aligned)
    print("\n--- Fit 1: Direct Depth D ---")
    print(f"  a: {fit_raw['scale_factor_a']}, b: {fit_raw['offset_b']}")
    print(f"  Pearson r: {fit_raw['pearson_r']}, RMSE: {fit_raw['rmse_meters']}m, R2: {fit_raw['r_squared']}")

    # 2. Inverse depth (1 / D)
    d_inv = 1.0 / (d_resized + 1e-6)
    fit_inv = affine_calibrator.estimate_affine_parameters(d_inv, h_aligned)
    print("\n--- Fit 2: Inverse Depth (1 / D) ---")
    print(f"  a: {fit_inv['scale_factor_a']}, b: {fit_inv['offset_b']}")
    print(f"  Pearson r: {fit_inv['pearson_r']}, RMSE: {fit_inv['rmse_meters']}m, R2: {fit_inv['r_squared']}")

    # 3. Inverted normalized depth
    d_norm_inv = (np.max(d_resized) - d_resized) / (np.max(d_resized) - np.min(d_resized) + 1e-6)
    fit_norm_inv = affine_calibrator.estimate_affine_parameters(d_norm_inv, h_aligned)
    print("\n--- Fit 3: Inverted Normalized Depth ---")
    print(f"  a: {fit_norm_inv['scale_factor_a']}, b: {fit_norm_inv['offset_b']}")
    print(f"  Pearson r: {fit_norm_inv['pearson_r']}, RMSE: {fit_norm_inv['rmse_meters']}m, R2: {fit_norm_inv['r_squared']}")

if __name__ == "__main__":
    main()
