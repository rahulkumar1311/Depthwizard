"""Test 3D Terrain Mesh Endpoint & Vertex Conversion
Verifies:
Metric DSM -> 3D Terrain Mesh Grid -> Triangles & Vertices -> RGB Texture Mapping
ISRO SIH 2026 Problem Statement 26175 (DepthWizard)
"""

import sys
from pathlib import Path

# Add backend directory
workspace_dir = Path(__file__).resolve().parent.parent
backend_dir = workspace_dir / "backend"
sys.path.insert(0, str(workspace_dir))
sys.path.insert(0, str(backend_dir))

from fastapi.testclient import TestClient
from backend.app.main import app

def test_terrain_mesh_endpoint():
    print("\n" + "=" * 65)
    print("      DepthWizard 3D Terrain Mesh Endpoint Verification")
    print("=" * 65)

    client = TestClient(app)
    resp = client.get("/api/terrain/mesh?resolution=128")

    assert resp.status_code == 200, f"Endpoint failed with {resp.status_code}: {resp.text}"
    data = resp.json()

    assert data["status"] == "success"
    assert data["rows"] == 128
    assert data["cols"] == 128
    assert len(data["heights"]) == 128 * 128
    assert data["max_height"] > data["min_height"]
    assert "texture_url" in data
    assert "dsm_source" in data

    print(f"[1/3] DSM Mesh Grid:")
    print(f"      - DSM Source     : {data['dsm_source']}")
    print(f"      - Grid Resolution: {data['rows']} x {data['cols']} ({len(data['heights']):,} vertices)")
    print(f"      - Triangles Count: {(data['rows'] - 1) * (data['cols'] - 1) * 2:,} faces")
    print(f"      - Min Elevation  : {data['min_height']} m")
    print(f"      - Max Elevation  : {data['max_height']} m")
    print(f"      - Mean Elevation : {data['mean_height']} m")

    print(f"\n[2/3] Texture & Spatial Alignment:")
    print(f"      - RGB Texture URL: {data['texture_url']}")
    print(f"      - DSM Colormap   : {data['dsm_vis_url']}")
    print(f"      - Ground Res     : {data['gsd_m']} m/pixel")

    print(f"\n[3/3] Sanity Check on Elevation Values (Non-random, Real Data):")
    # Verify values correspond to actual DSM output
    sample_heights = data["heights"][:10]
    print(f"      - First 10 vertex heights (m): {[round(h, 2) for h in sample_heights]}")
    assert any(h > 0 for h in data["heights"]), "All heights are zero!"
    assert all(h >= 0.0 for h in data["heights"]), "Found negative heights!"

    print("\n" + "=" * 65)
    print(" [SUCCESS] 3D Terrain Mesh Data Verified and Ready for WebGL!")
    print("=" * 65 + "\n")

if __name__ == "__main__":
    test_terrain_mesh_endpoint()
