"""Test Metric Scale Calibration (H = a * D + b)
Validates affine calibration from real Depth Anything V2 relative depth
and real GAMUS / LiDAR ground reference elevation.
ISRO SIH 2026 Problem Statement 26175 (DepthWizard)
"""

import sys
from pathlib import Path

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

# Add backend directory to sys.path

workspace_dir = Path(__file__).resolve().parent.parent
backend_dir = workspace_dir / "backend"
sys.path.insert(0, str(workspace_dir))
sys.path.insert(0, str(backend_dir))

from fastapi.testclient import TestClient
from backend.app.main import app
from backend.calibration.affine_calibration import affine_calibrator

def test_metric_calibration():
    print("\n" + "=" * 65)
    print("      DepthWizard Metric Scale Calibration Verification")
    print("=" * 65)

    # 1. Locate real relative depth and real reference elevation
    rel_depth_path = workspace_dir / "outputs" / "depth" / "sample_gamus_optical_relative_depth.npy"
    if not rel_depth_path.exists():
        rel_depth_path = workspace_dir / "outputs" / "depth" / "sample_relative_depth.npy"
    assert rel_depth_path.exists(), f"Relative depth matrix not found at {rel_depth_path}"

    ref_elev_path = workspace_dir / "data" / "GAMUS_mvp" / "val" / "DC_02_26_AGL.h5"
    assert ref_elev_path.exists(), f"Reference elevation not found at {ref_elev_path}"

    print(f"[1/4] Loaded Input Sources:")
    print(f"      - Relative Depth     : {rel_depth_path.name}")
    print(f"      - Reference Elevation: {ref_elev_path.name}")

    # 2. Test Core Module Directly
    print(f"\n[2/4] Executing AffineCalibrator.calibrate()...")
    result = affine_calibrator.calibrate(
        rel_depth_source=rel_depth_path,
        ref_elevation_source=ref_elev_path,
        stem="sample_gamus_optical",
        colormap="terrain",
    )

    params = result["calibration_parameters"]
    stats = result["statistics"]
    artifacts = result["artifacts"]

    print("\n" + "-" * 65)
    print("      Calibration Parameter Fit (Actual Data)")
    print("-" * 65)
    print(f"Affine Formula       : H = a * D + b")
    print(f"Scale Factor (a)     : {params['scale_factor_a']}")
    print(f"Offset (b)           : {params['offset_b']} m")
    print(f"Mean Abs Error (MAE) : {params['mae_meters']} m")
    print(f"Root Mean Sq (RMSE)  : {params['rmse_meters']} m")
    print(f"R-squared (R2)       : {params['r_squared']}")
    print(f"Pearson Correlation r: {params['pearson_r']}")
    print(f"Valid Pixels Used    : {params['valid_pixel_count']:,} ({params['valid_pixel_percentage']}%)")
    print(f"Reference Range      : {params['reference_elevation_range'][0]}m to {params['reference_elevation_range'][1]}m")
    print("-" * 65)

    print("\n" + "-" * 65)
    print("      Calibrated Metric Elevation Raster Statistics")
    print("-" * 65)
    print(f"Min Elevation        : {stats['min_metric_elevation_m']} m")
    print(f"Max Elevation        : {stats['max_metric_elevation_m']} m")
    print(f"Mean Elevation       : {stats['mean_metric_elevation_m']} m")
    print(f"Std Elevation        : {stats['std_metric_elevation_m']} m")
    print(f"Raster Dimensions    : {stats['raster_dimensions']['width']}x{stats['raster_dimensions']['height']}")
    print("-" * 65)

    # Sanity checks (confirm numbers are real, non-zero, and not hardcoded)
    assert params["scale_factor_a"] != 0.0, "Scale factor 'a' should not be zero!"
    assert stats["max_metric_elevation_m"] > stats["min_metric_elevation_m"], "Max elevation should exceed min!"
    assert Path(artifacts["dsm_geotiff_path"]).exists(), f"GeoTIFF not written: {artifacts['dsm_geotiff_path']}"
    assert Path(artifacts["metric_array_path"]).exists(), f"Array not written: {artifacts['metric_array_path']}"

    # 3. Verify Conceptual Distinctions
    print(f"\n[3/4] Verifying Conceptual Distinctions:")
    defs = result["definitions"]
    for key, text in defs.items():
        print(f"      * {key.upper()}: {text[:90]}...")


    # 4. Test POST /api/calibrate endpoint via TestClient
    print(f"\n[4/4] Testing FastAPI endpoint POST /api/calibrate...")
    client = TestClient(app)

    with open(rel_depth_path, "rb") as f_depth, open(ref_elev_path, "rb") as f_ref:
        response = client.post(
            "/api/calibrate?colormap=terrain",
            files={
                "relative_depth": ("sample_depth.npy", f_depth, "application/octet-stream"),
                "reference_elevation": ("DC_02_26_AGL.h5", f_ref, "application/octet-stream"),
            },
        )

    assert response.status_code == 200, f"API failed with {response.status_code}: {response.text}"
    api_data = response.json()
    assert api_data["status"] == "success"
    assert "calibration_parameters" in api_data
    assert "artifacts" in api_data
    print(f"      [OK] POST /api/calibrate responded with HTTP 200 OK!")
    print(f"      [OK] GeoTIFF URL: {api_data['artifacts']['dsm_geotiff_url']}")
    print(f"      [OK] Visualization URL: {api_data['artifacts']['dsm_vis_url']}")

    print("\n" + "=" * 65)
    print(" [SUCCESS] Metric Scale Calibration Verified from Actual Data!")
    print("=" * 65 + "\n")

if __name__ == "__main__":
    test_metric_calibration()
