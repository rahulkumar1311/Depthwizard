"""Test Depth Anything 3 on Three Image Types:
1. Normal perspective RGB image
2. Remote-sensing / satellite RGB image
3. GAMUS MVP subset tile (.h5 format)

ISRO SIH 2026 Problem Statement 26175 (DepthWizard)
"""

import sys
import time
from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw

WORKSPACE_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(WORKSPACE_DIR))
sys.path.insert(0, str(WORKSPACE_DIR / "backend"))

from backend.models.depth_anything import DepthAnything3


def create_normal_rgb_scene(output_path: Path):
    """Creates a synthetic standard perspective scene (ground plane, buildings, sky)."""
    w, h = 640, 480
    img = Image.new("RGB", (w, h), color=(135, 206, 235))  # Sky blue
    draw = ImageDraw.Draw(img)

    # Ground plane with perspective gradient
    for y in range(h // 2, h):
        factor = (y - h // 2) / (h // 2)
        r = int(34 + factor * 40)
        g = int(139 + factor * 20)
        b = int(34 - factor * 20)
        draw.line([(0, y), (w, y)], fill=(r, g, b))

    # Foreground buildings/blocks
    draw.rectangle([100, 160, 240, 360], fill=(180, 80, 80), outline=(50, 50, 50))
    draw.rectangle([350, 120, 520, 380], fill=(100, 140, 180), outline=(50, 50, 50))
    draw.polygon([(100, 160), (170, 100), (240, 160)], fill=(120, 40, 40))

    img.save(output_path)
    return output_path


def main():
    print("=" * 80)
    print("      Depth Anything 3 (Pretrained) Multi-Domain Image Testing (Step 7)")
    print("=" * 80)

    # 1. Setup test images
    normal_img_path = WORKSPACE_DIR / "data" / "sample" / "normal_perspective_rgb.png"
    if not normal_img_path.exists():
        create_normal_rgb_scene(normal_img_path)

    satellite_img_path = WORKSPACE_DIR / "data" / "sample" / "sample_gamus_optical.png"
    gamus_h5_path = WORKSPACE_DIR / "data" / "GAMUS_mvp" / "val" / "DC_04_23_RGB.h5"

    test_cases = [
        ("1. Normal Perspective RGB Image", normal_img_path),
        ("2. Remote-Sensing / Satellite RGB Image", satellite_img_path),
        ("3. GAMUS MVP Subset Sample (Val DC_04_23)", gamus_h5_path),
    ]

    # 2. Initialize pretrained DA3
    print("\n[Init] Initializing Pretrained Depth Anything 3 Adapter...")
    da3 = DepthAnything3()
    info = da3.get_model_info()
    print(f"       Model: {info['model_name']} ({info['architecture']})")
    print(f"       Device: {info['device']}, Params: {info['parameters']:,}")
    print("-" * 80)

    results = []

    for name, path in test_cases:
        print(f"\n--- Testing {name} ---")
        print(f"File: {path.name}")

        pil_in = da3._prepare_pil_image(path)
        in_w, in_h = pil_in.size

        t0 = time.perf_counter()
        depth_map = da3.predict_depth(path, return_normalized=False)
        t_ms = (time.perf_counter() - t0) * 1000.0

        out_h, out_w = depth_map.shape
        d_min = float(np.min(depth_map))
        d_max = float(np.max(depth_map))
        d_mean = float(np.mean(depth_map))
        d_std = float(np.std(depth_map))

        print(f"  Input Dimensions : {in_w} x {in_h} x 3")
        print(f"  Output Dimensions: {out_w} x {out_h}")
        print(f"  Inference Time   : {t_ms:.1f} ms")
        print(f"  Min Depth (Z)    : {d_min:.4f}")
        print(f"  Max Depth (Z)    : {d_max:.4f}")
        print(f"  Mean Depth (Z)   : {d_mean:.4f}")
        print(f"  Std Depth (Z)    : {d_std:.4f}")

        # Dimension integrity check
        assert (in_h, in_w) == (out_h, out_w), f"Dimension mismatch: {(in_h, in_w)} vs {(out_h, out_w)}"

        results.append({
            "name": name,
            "filename": path.name,
            "in_dim": f"{in_w}x{in_h}",
            "out_dim": f"{out_w}x{out_h}",
            "time_ms": round(t_ms, 1),
            "min": round(d_min, 4),
            "max": round(d_max, 4),
            "mean": round(d_mean, 4),
            "std": round(d_std, 4),
        })

    print("\n" + "=" * 80)
    print("                     Multi-Domain Test Summary Table")
    print("=" * 80)
    print(f"{'Image Type':<40} {'In Dim':<10} {'Out Dim':<10} {'Time(ms)':<10} {'[Min, Max]':<18} {'Mean (Std)'}")
    print("-" * 100)
    for r in results:
        depth_range = f"[{r['min']:.2f}, {r['max']:.2f}]"
        mean_std = f"{r['mean']:.2f} ({r['std']:.2f})"
        print(f"{r['name']:<40} {r['in_dim']:<10} {r['out_dim']:<10} {r['time_ms']:<10} {depth_range:<18} {mean_std}")
    print("-" * 100)
    print("NOTE: All tests used the pretrained DA3 model without fine-tuning.")
    print("=" * 80)


if __name__ == "__main__":
    main()
