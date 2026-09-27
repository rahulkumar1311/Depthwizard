"""DepthWizard - Model Weights Download Utility
Downloads pretrained Depth Anything V2 Small weights.
"""

import argparse
import os
import sys
import urllib.request

WEIGHTS_URLS = {
    "vits": "https://huggingface.co/depth-anything/Depth-Anything-V2-Small/resolve/main/depth_anything_v2_vits.pth"
}

def download_weights(model_type: str = "vits", output_dir: str = "models/weights") -> str:
    if model_type not in WEIGHTS_URLS:
        raise ValueError(f"Unknown model type '{model_type}'. Available: {list(WEIGHTS_URLS.keys())}")

    os.makedirs(output_dir, exist_ok=True)
    target_path = os.path.join(output_dir, f"depth_anything_v2_{model_type}.pth")

    if os.path.exists(target_path):
        print(f"[DepthWizard] Weights already exist at: {target_path}")
        return target_path

    url = WEIGHTS_URLS[model_type]
    print(f"[DepthWizard] Downloading {model_type} weights from: {url}")
    print(f"[DepthWizard] Target destination: {target_path}")

    def progress_hook(block_num, block_size, total_size):
        if total_size > 0:
            downloaded = block_num * block_size
            percent = min(100.0, downloaded * 100.0 / total_size)
            mb_downloaded = downloaded / (1024 * 1024)
            mb_total = total_size / (1024 * 1024)
            sys.stdout.write(f"\rDownloading: {percent:.1f}% ({mb_downloaded:.1f}/{mb_total:.1f} MB)")
            sys.stdout.flush()

    try:
        urllib.request.urlretrieve(url, target_path, reporthook=progress_hook)
        print("\n[DepthWizard] Download completed successfully.")
        return target_path
    except Exception as e:
        if os.path.exists(target_path):
            os.remove(target_path)
        print(f"\n[DepthWizard] Download failed: {e}")
        raise

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Download Depth Anything V2 weights")
    parser.add_argument("--model", type=str, default="vits", choices=["vits"], help="Model variant (default: vits)")
    parser.add_argument("--output-dir", type=str, default="models/weights", help="Directory to save weights")
    args = parser.parse_args()

    download_weights(model_type=args.model, output_dir=args.output_dir)
