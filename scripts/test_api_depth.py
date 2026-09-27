"""Test API Depth Endpoint (POST /api/depth)
Verifies the complete pipeline flow:
RGB Image -> Preprocessing -> Depth Anything 3 -> Relative Depth Map -> Visualization & Stats
ISRO SIH 2026 Problem Statement 26175 (DepthWizard)
"""

import sys
from pathlib import Path

# Add backend directory to sys.path
backend_dir = Path(__file__).resolve().parent.parent / "backend"
sys.path.insert(0, str(backend_dir))

from fastapi.testclient import TestClient
from app.main import app


def test_depth_endpoint():
    print("[Test] Initializing FastAPI TestClient for DepthWizard...")
    client = TestClient(app)

    # 1. Verify health endpoint first
    health_resp = client.get("/api/health")
    assert health_resp.status_code == 200, f"Health check failed: {health_resp.text}"
    print("[Test] Health check passed:", health_resp.json()["status"])

    # 2. Test POST /api/depth with real GAMUS RGB optical sample
    sample_img_path = Path(__file__).resolve().parent.parent / "data" / "sample" / "sample_gamus_optical.png"
    assert sample_img_path.exists(), f"Sample image not found at {sample_img_path}"

    print(f"[Test] Submitting image {sample_img_path.name} to POST /api/depth...")
    with open(sample_img_path, "rb") as f:
        response = client.post(
            "/api/depth?colormap=plasma",
            files={"file": ("sample_gamus_optical.png", f, "image/png")},
        )

    print(f"[Test] Response Status Code: {response.status_code}")
    assert response.status_code == 200, f"Inference request failed: {response.text}"

    data = response.json()
    assert data["status"] == "success", f"Unexpected status: {data.get('status')}"
    assert data["model"] == "Depth Anything 3", f"Expected Depth Anything 3, got {data.get('model')}"
    assert "depth_image_base64" in data and data["depth_image_base64"].startswith("data:image/png;base64,")
    assert "statistics" in data
    assert "inference_time_ms" in data

    stats = data["statistics"]
    print("\n" + "=" * 60)
    print("         Depth Anything 3 API Verification Report")
    print("=" * 60)
    print(f"Model ID          : {data['model']}")
    print(f"Compute Device    : {data['device']}")
    print(f"Inference Time    : {data['inference_time_ms']} ms")
    print(f"Input Dimensions  : {stats['input_dimensions']['width']}x{stats['input_dimensions']['height']}x{stats['input_dimensions']['channels']}")
    print(f"Output Dimensions : {data['width']}x{data['height']}")
    print(f"Min Relative Depth: {data['min_depth']}")
    print(f"Max Relative Depth: {data['max_depth']}")
    print(f"Mean Rel. Depth   : {data['mean_depth']}")
    print(f"Std Rel. Depth    : {stats['std_depth']}")
    print(f"Static Image URL  : {data['depth_image_url']}")
    print(f"Static Array URL  : {data['depth_array_url']}")
    print(f"Disclaimer Note   : {data['note']}")
    print("=" * 60)

    # Sanity checks
    assert stats["input_dimensions"]["width"] == 1024
    assert stats["input_dimensions"]["height"] == 1024
    assert data["width"] == 1024
    assert data["height"] == 1024
    assert data["min_depth"] < data["max_depth"]
    assert data["max_depth"] > 0
    assert data["inference_time_ms"] > 0

    print("\n[Test] Depth Anything 3 /api/depth endpoint PASSED successfully!")


if __name__ == "__main__":
    test_depth_endpoint()
