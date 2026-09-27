"""Test Metric DSM Generation Pipeline
Verifies end-to-end flow:
RGB -> Depth Anything V2 Small -> Metric Calibration -> DSM GeoTIFF (outputs/dsm/dsm.tif)
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

# Add workspace and backend directories
workspace_dir = Path(__file__).resolve().parent.parent
backend_dir = workspace_dir / "backend"
sys.path.insert(0, str(workspace_dir))
sys.path.insert(0, str(backend_dir))

from fastapi.testclient import TestClient
import rasterio

from backend.app.main import app
from backend.dsm.dsm_generator import dsm_generator

def test_dsm_generation():
    print("\n" + "=" * 65)
    print("      DepthWizard Metric DSM Generation Verification")
    print("=" * 65)

    # 1. Inputs
    sample_rgb_path = workspace_dir / "data" / "sample" / "sample_gamus_optical.png"
    sample_ref_path = workspace_dir / "data" / "GAMUS_mvp" / "val" / "DC_02_26_AGL.h5"

    assert sample_rgb_path.exists(), f"Sample RGB image missing at {sample_rgb_path}"
    assert sample_ref_path.exists(), f"Reference elevation missing at {sample_ref_path}"

    print(f"[1/4] Input Assets Verified:")
    print(f"      - Optical RGB Image   : {sample_rgb_path.name}")
    print(f"      - Reference Elevation : {sample_ref_path.name}")

    # 2. Test DSM Generator Core
    print(f"\n[2/4] Executing DSMGenerator.generate_dsm()...")
    result = dsm_generator.generate_dsm(
        image_input=sample_rgb_path,
        reference_elevation=sample_ref_path,
        output_dsm_path=workspace_dir / "outputs" / "dsm" / "dsm.tif",
        gsd_m=0.5,
        colormap="terrain",
    )

    expected_tif = workspace_dir / "outputs" / "dsm" / "dsm.tif"
    expected_vis = workspace_dir / "outputs" / "dsm" / "dsm_vis.png"

    assert expected_tif.exists(), f"Expected DSM GeoTIFF not found: {expected_tif}"
    assert expected_vis.exists(), f"Expected DSM visualization not found: {expected_vis}"

    print("\n" + "-" * 65)
    print("      Generated Metric DSM Statistics (Actual Values)")
    print("-" * 65)
    print(f"DSM GeoTIFF Path     : {result['dsm_file_path']}")
    print(f"DSM Web URL          : {result['dsm_file']}")
    print(f"Visualization URL    : {result['dsm_vis_file']}")
    print(f"Minimum Elevation    : {result['minimum_elevation']} m")
    print(f"Maximum Elevation    : {result['maximum_elevation']} m")
    print(f"Mean Elevation       : {result['mean_elevation']} m")
    print(f"Standard Deviation   : {result['std_elevation']} m")
    print(f"Raster Dimensions    : {result['raster_dimensions']['width']}x{result['raster_dimensions']['height']}")
    print(f"Coordinate Ref System: {result['geospatial']['crs']}")
    print(f"Pixel Resolution     : {result['geospatial']['pixel_resolution_m']} m/pixel")
    print(f"NoData Value         : {result['geospatial']['nodata_value']}")
    print("-" * 65)

    # Sanity checks
    assert result["raster_dimensions"]["width"] == 1024
    assert result["raster_dimensions"]["height"] == 1024
    assert result["maximum_elevation"] > result["minimum_elevation"]
    assert result["minimum_elevation"] >= 0.0

    # 3. Verify GeoTIFF with Rasterio
    print(f"\n[3/4] Inspecting output GeoTIFF with Rasterio...")
    with rasterio.open(expected_tif) as src:
        print(f"      - Driver   : {src.driver}")
        print(f"      - Width    : {src.width}")
        print(f"      - Height   : {src.height}")
        print(f"      - Bands    : {src.count}")
        print(f"      - CRS      : {src.crs}")
        print(f"      - Transform: {src.transform[0]} dx, {src.transform[4]} dy")
        print(f"      - NoData   : {src.nodata}")
        data = src.read(1)
        print(f"      - GeoTIFF Min/Max: {data.min():.2f}m / {data.max():.2f}m")
        assert src.width == 1024
        assert src.height == 1024

    # 4. Test POST /api/dsm endpoint via TestClient
    print(f"\n[4/4] Testing FastAPI endpoint POST /api/dsm...")
    client = TestClient(app)

    with open(sample_rgb_path, "rb") as f_rgb, open(sample_ref_path, "rb") as f_ref:
        resp = client.post(
            "/api/dsm?gsd_m=0.5&colormap=terrain",
            files={
                "file": ("sample_rgb.png", f_rgb, "image/png"),
                "reference_elevation": ("ref_agl.h5", f_ref, "application/octet-stream"),
            },
        )

    assert resp.status_code == 200, f"Endpoint failed with {resp.status_code}: {resp.text}"
    api_res = resp.json()
    assert api_res["status"] == "success"
    assert "dsm_file" in api_res
    assert "minimum_elevation" in api_res
    assert "maximum_elevation" in api_res
    assert "mean_elevation" in api_res
    assert "raster_dimensions" in api_res

    print(f"      [OK] POST /api/dsm responded with HTTP 200 OK!")
    print(f"      [OK] DSM File Link : {api_res['dsm_file']}")
    print(f"      [OK] Min Elevation : {api_res['minimum_elevation']} m")
    print(f"      [OK] Max Elevation : {api_res['maximum_elevation']} m")
    print(f"      [OK] Mean Elevation: {api_res['mean_elevation']} m")
    print(f"      [OK] Dimensions    : {api_res['raster_dimensions']['width']}x{api_res['raster_dimensions']['height']}")

    print("\n" + "=" * 65)
    print(" [SUCCESS] Metric DSM Generated and Verified Successfully!")
    print("=" * 65 + "\n")

if __name__ == "__main__":
    test_dsm_generation()
