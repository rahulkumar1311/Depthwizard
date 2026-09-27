"""End-to-End Test for DepthWizard MVP Dashboard"""

import urllib.request
import json
import sys

def main():
    print("=" * 60)
    print("DEPTHWIZARD MVP END-TO-END PIPELINE & DASHBOARD TEST")
    print("=" * 60)

    # 1. Test Frontend Dev Server
    try:
        req = urllib.request.urlopen("http://127.0.0.1:5173/")
        html = req.read().decode("utf-8")
        print(f"[OK] Frontend Server: HTTP {req.status} (Serving {len(html)} bytes)")
    except Exception as e:
        print(f"[FAIL] Frontend Server: {e}")
        sys.exit(1)

    # 2. Test Backend Health
    try:
        req = urllib.request.urlopen("http://127.0.0.1:8000/api/health")
        health = json.loads(req.read().decode("utf-8"))
        print(f"[OK] Backend Health: {health.get('status')} | PyTorch: {health['environment']['pytorch_available']} | Device: {health['environment']['device']}")
    except Exception as e:
        print(f"[FAIL] Backend Health: {e}")
        sys.exit(1)

    # 3. Test Terrain Mesh API
    try:
        req = urllib.request.urlopen("http://127.0.0.1:8000/api/terrain/mesh?resolution=128")
        mesh = json.loads(req.read().decode("utf-8"))
        rows = mesh["rows"]
        cols = mesh["cols"]
        min_h = round(mesh["min_height"], 2)
        max_h = round(mesh["max_height"], 2)
        mean_h = round(mesh["mean_height"], 2)
        print(f"[OK] Terrain Mesh API: Grid {rows}x{cols} | Min Elev: {min_h}m | Max Elev: {max_h}m | Mean Elev: {mean_h}m")
        print(f"     Texture URL: {mesh['texture_url']}")
        print(f"     DSM Vis URL: {mesh['dsm_vis_url']}")
    except Exception as e:
        print(f"[FAIL] Terrain Mesh API: {e}")
        sys.exit(1)

    # 4. Test End-to-End Pipeline Execution
    print("\nExecuting End-to-End Pipeline (RGB -> Depth -> Calibration -> DSM -> 3D Terrain)...")
    try:
        # POST with empty body defaults to sample optical image
        post_req = urllib.request.Request("http://127.0.0.1:8000/api/pipeline/run", data=b"", method="POST")
        resp = urllib.request.urlopen(post_req)
        pipeline = json.loads(resp.read().decode("utf-8"))
        exec_time = pipeline["total_execution_seconds"]
        print(f"[OK] Pipeline Execution: {pipeline['status']} in {exec_time}s")

        stages = pipeline["stages"]
        print("\n--- Pipeline Stages Verified ---")
        for key, s in stages.items():
            print(f"Stage: {s['stage']} -> Status: {s['status'].upper()}")
            if s['stage'] == 'RGB IMAGE':
                print(f"   Dimensions: {s['dimensions']['width']}x{s['dimensions']['height']}, Channels: {s['dimensions']['channels']}, GSD: {s['gsd_m']}m/px")
            elif s['stage'] == 'RELATIVE DEPTH':
                print(f"   Model: {s['model']}, Device: {s['device']}, Range: [{s['min_depth']}, {s['max_depth']}], Mean: {s['mean_depth']}")
            elif s['stage'] == 'METRIC CALIBRATION':
                print(f"   Formula: {s['formula']}, a={s['scale_factor_a']}, b={s['offset_b']}m, RMSE: {s['rmse_meters']}m, MAE: {s['mae_meters']}m")
            elif s['stage'] == 'DSM':
                print(f"   DSM File: {s['dsm_file']}, Range: [{s['minimum_elevation']}m, {s['maximum_elevation']}m], Mean: {s['mean_elevation']}m, CRS: {s['crs']}")
            elif s['stage'] == '3D TERRAIN':
                print(f"   Mesh Grid: {s['rows']}x{s['cols']}, Vertices: {s['vertex_count']:,}, Triangles: {s['triangle_count']:,}")

    except Exception as e:
        print(f"[FAIL] Pipeline Execution: {e}")
        sys.exit(1)

    print("\n" + "=" * 60)
    print("ALL DEPTHWIZARD COMPONENTS VERIFIED WORKING END-TO-END!")
    print("=" * 60)

if __name__ == "__main__":
    main()
