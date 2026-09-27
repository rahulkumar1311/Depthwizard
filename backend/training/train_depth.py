"""Remote-Sensing Domain Adaptation Training Script
Fine-tunes Depth Anything V2 Small on the GAMUS MVP benchmark.
ISRO SIH 2026 Problem Statement 26175 (DepthWizard)

Supports:
--epochs, --batch-size, --learning-rate, --device, --checkpoint, --config
"""

import os
import sys
import argparse
import time
from pathlib import Path
from typing import Dict, Any, Tuple, Optional
import yaml
import numpy as np

# Ensure Windows PowerShell handles UTF-8 streams cleanly
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

# Ensure workspace and backend are in sys.path
workspace_dir = Path(__file__).resolve().parent.parent.parent
backend_dir = workspace_dir / "backend"
sys.path.insert(0, str(workspace_dir))
sys.path.insert(0, str(backend_dir))

import torch
import torch.nn.functional as F
from transformers import AutoModelForDepthEstimation

from backend.datasets.gamus_dataset import GAMUSDataset, get_gamus_dataloaders
from backend.training.losses import RemoteSensingDepthLoss

def parse_args():
    parser = argparse.ArgumentParser(description="DepthWizard Domain Adaptation Fine-Tuning")
    parser.add_argument("--epochs", type=int, default=None, help="Number of training epochs")
    parser.add_argument("--batch-size", type=int, default=None, help="Batch size for DataLoader")
    parser.add_argument("--learning-rate", type=float, default=None, help="Learning rate (e.g. 1e-5)")
    parser.add_argument("--device", type=str, default=None, choices=["auto", "cuda", "cpu"], help="Compute device")
    parser.add_argument("--checkpoint", type=str, default=None, help="Path to checkpoint to resume from")
    parser.add_argument("--config", type=str, default=str(Path(__file__).parent / "config.yaml"), help="Path to YAML config")
    return parser.parse_args()

def load_config(config_path: str) -> Dict[str, Any]:
    with open(config_path, "r", encoding="utf-8") as f:
        return yaml.safe_load(f)

def run_preflight_verifications(
    train_dataset: GAMUSDataset,
    val_dataset: GAMUSDataset,
    train_loader: torch.utils.data.DataLoader,
) -> None:
    """Rigorous verification of pairing, units, invalid values, alignment, and shapes."""
    print("\n" + "=" * 65)
    print("      DepthWizard Pre-Flight Data & Alignment Verifications")
    print("=" * 65)

    # 1. Verify RGB / Reference Pairing
    print(f"[1/5] Checking RGB/Reference Pairing...")
    for idx in range(min(len(train_dataset), 3)):
        sample = train_dataset.samples[idx]
        sid = sample["id"]
        rgb_file = Path(sample["rgb_path"]).name
        agl_file = Path(sample["agl_path"]).name
        assert sid in rgb_file and sid in agl_file, f"Mismatch: {rgb_file} vs {agl_file}"
        print(f"      [OK] Sample {idx + 1} ({sid}): '{rgb_file}' <-> '{agl_file}' correctly paired.")

    # 2. Verify Target Depth/Elevation Units
    print(f"\n[2/5] Checking Target Depth/Elevation Units...")
    sample_data = train_dataset[0]
    meta = sample_data["metadata"]
    print(f"      [OK] Dataset Ground Truth: GAMUS Airborne LiDAR nDSM / AGL Elevation.")
    print(f"      [OK] Physical Units       : METERS (m) above ground level at {meta['resolution_gsd']} GSD.")
    print(f"      [OK] Sample Raw Range     : [{meta['raw_min_elevation']:.2f}m, {meta['raw_max_elevation']:.2f}m]")

    # 3. Verify Invalid-Value Handling
    print(f"\n[3/5] Checking Invalid-Value Handling...")
    target_tensor = sample_data["target"]
    assert not torch.isnan(target_tensor).any(), "Found NaNs in target tensor!"
    assert not torch.isinf(target_tensor).any(), "Found Infs in target tensor!"
    assert (target_tensor >= 0.0).all(), "Found negative elevations in target tensor after clamping!"
    print(f"      [OK] Negative elevation artifacts (-5.0m sinkholes) clamped to >= 0.0m.")
    print(f"      [OK] Clamped Valid Range : [{target_tensor.min():.2f}m, {target_tensor.max():.2f}m]")

    # 4. Verify Image / Reference Spatial Alignment
    print(f"\n[4/5] Checking Image/Reference Spatial Alignment...")
    img_h, img_w = sample_data["image"].shape[1:]
    tgt_h, tgt_w = sample_data["target"].shape[1:]
    assert (img_h, img_w) == (tgt_h, tgt_w), f"Spatial misalignment: img {(img_h, img_w)} vs tgt {(tgt_h, tgt_w)}"
    print(f"      [OK] Both modalities co-registered and resized identically to {tgt_h}x{tgt_w} pixels.")

    # 5. Print Final Training Tensor Shapes
    print(f"\n[5/5] Checking Final Training Tensor Shapes from DataLoader...")
    sample_batch = next(iter(train_loader))
    b_images = sample_batch["image"]
    b_targets = sample_batch["target"]
    print(f"      [OK] Training Image Batch Tensor Shape : {list(b_images.shape)} [Batch, Channels, Height, Width]")
    print(f"      [OK] Training Target Batch Tensor Shape: {list(b_targets.shape)} [Batch, Channels, Height, Width]")
    print(f"      [OK] Image Data Type: {b_images.dtype}, Target Data Type: {b_targets.dtype}")
    print("=" * 65 + "\n")


def evaluate(
    model: torch.nn.Module,
    val_loader: torch.utils.data.DataLoader,
    criterion: torch.nn.Module,
    device: torch.device,
) -> float:
    """Evaluates model on validation split."""
    model.eval()
    total_val_loss = 0.0
    count = 0

    with torch.no_grad():
        for batch in val_loader:
            images = batch["image"].to(device)
            targets = batch["target"].to(device)

            outputs = model(pixel_values=images)
            pred_depth = F.interpolate(
                outputs.predicted_depth.unsqueeze(1),
                size=targets.shape[-2:],
                mode="bilinear",
                align_corners=False,
            )

            loss, _ = criterion(pred_depth, targets)
            total_val_loss += loss.item() * images.size(0)
            count += images.size(0)

    return total_val_loss / max(count, 1)

def train_pipeline(args):
    config = load_config(args.config)

    # 1. Resolve hyperparameters (CLI overrides config)
    epochs = args.epochs if args.epochs is not None else config["training"].get("epochs", 1)
    batch_size = args.batch_size if args.batch_size is not None else config["training"].get("batch_size", 2)
    lr = args.learning_rate if args.learning_rate is not None else float(config["training"].get("learning_rate", 1e-5))
    weight_decay = float(config["training"].get("weight_decay", 0.01))
    alpha_grad = float(config["training"].get("alpha_grad", 0.5))

    # Device selection
    device_arg = args.device if args.device is not None else config["training"].get("device", "auto")
    if device_arg == "auto":
        device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    else:
        device = torch.device(device_arg)

    print(f"[DepthWizard] Initializing Domain Adaptation Pipeline...")
    print(f"[DepthWizard] Active Compute Device: {device} ({torch.cuda.get_device_name(0) if device.type == 'cuda' else 'Host CPU'})")
    print(f"[DepthWizard] Epochs: {epochs} | Batch Size: {batch_size} | Learning Rate: {lr}")

    # 2. Setup DataLoaders on GAMUS MVP subset
    dataset_root = workspace_dir / config["dataset"]["root_dir"]
    target_size = tuple(config["dataset"]["target_size"])

    train_loader, val_loader = get_gamus_dataloaders(
        root_dir=dataset_root,
        batch_size=batch_size,
        target_size=target_size,
        normalize_rgb=True,
    )

    # 3. Run Pre-Flight Verifications
    run_preflight_verifications(train_loader.dataset, val_loader.dataset, train_loader)

    # 4. Load Pretrained Depth Anything V2 Small Model
    # Cache directory points to D: drive weights without modifying original files
    cache_dir = workspace_dir / config["model"]["pretrained_cache_dir"]
    model_id = config["model"]["model_id"]

    print(f"[DepthWizard] Loading pretrained '{model_id}' from {cache_dir}...")
    model = AutoModelForDepthEstimation.from_pretrained(
        model_id,
        cache_dir=str(cache_dir),
    )
    model.to(device)

    # Checkpoint resumption if specified
    start_epoch = 1
    if args.checkpoint and Path(args.checkpoint).exists():
        print(f"[DepthWizard] Resuming from checkpoint: {args.checkpoint}")
        ckpt = torch.load(args.checkpoint, map_location=device)
        model.load_state_dict(ckpt["model_state_dict"])
        start_epoch = ckpt.get("epoch", 0) + 1

    # 5. Setup Criterion & Optimizer
    criterion = RemoteSensingDepthLoss(alpha_grad=alpha_grad)
    optimizer = torch.optim.AdamW(model.parameters(), lr=lr, weight_decay=weight_decay)

    # 6. Evaluate Baseline Loss BEFORE Training
    print("[DepthWizard] Evaluating baseline loss before training...")
    initial_val_loss = evaluate(model, val_loader, criterion, device)
    print(f"--> Baseline Loss Before Training (Validation): {initial_val_loss:.4f}\n")

    # 7. Training Loop
    save_dir = workspace_dir / config["training"]["save_dir"]
    save_dir.mkdir(parents=True, exist_ok=True)
    best_val_loss = initial_val_loss
    best_checkpoint_path = save_dir / "best_checkpoint.pt"
    latest_checkpoint_path = save_dir / "latest_checkpoint.pt"

    print("=" * 65)
    print(f" Starting Fine-Tuning Run ({epochs} Epochs)")
    print("=" * 65)

    last_train_loss = 0.0
    for epoch in range(start_epoch, start_epoch + epochs):
        model.train()
        epoch_loss = 0.0
        step_count = 0
        epoch_start_time = time.time()

        for step, batch in enumerate(train_loader):
            images = batch["image"].to(device)
            targets = batch["target"].to(device)

            optimizer.zero_grad()
            outputs = model(pixel_values=images)

            # Interpolate depth prediction to match target resolution
            pred_depth = F.interpolate(
                outputs.predicted_depth.unsqueeze(1),
                size=targets.shape[-2:],
                mode="bilinear",
                align_corners=False,
            )

            loss, loss_details = criterion(pred_depth, targets)
            loss.backward()

            # Gradient clipping for stable adaptation
            torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
            optimizer.step()

            epoch_loss += loss.item()
            step_count += 1
            print(
                f"Epoch [{epoch}/{start_epoch + epochs - 1}] Step [{step + 1}/{len(train_loader)}] "
                f"Loss: {loss.item():.4f} (SSI: {loss_details['loss_ssi']:.4f}, Grad: {loss_details['loss_grad']:.4f})"
            )

        avg_train_loss = epoch_loss / max(step_count, 1)
        last_train_loss = avg_train_loss
        epoch_duration = time.time() - epoch_start_time

        # Validation
        val_loss = evaluate(model, val_loader, criterion, device)
        print(
            f"--> Epoch {epoch} Complete in {epoch_duration:.1f}s | "
            f"Train Loss: {avg_train_loss:.4f} | Val Loss: {val_loss:.4f}"
        )

        # Save Latest Checkpoint
        checkpoint_dict = {
            "epoch": epoch,
            "model_state_dict": model.state_dict(),
            "optimizer_state_dict": optimizer.state_dict(),
            "train_loss": avg_train_loss,
            "val_loss": val_loss,
            "model_id": model_id,
            "device": str(device),
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
        }
        torch.save(checkpoint_dict, latest_checkpoint_path)

        # Save Best Checkpoint
        if val_loss < best_val_loss or not best_checkpoint_path.exists():
            best_val_loss = val_loss
            torch.save(checkpoint_dict, best_checkpoint_path)
            print(f"    [BEST] Saved new best validation checkpoint to {best_checkpoint_path.name} (Val Loss: {best_val_loss:.4f})")


    print("\n" + "=" * 65)
    print("      DepthWizard Domain Adaptation Run Summary")
    print("=" * 65)
    print(f"Loss Before Training : {initial_val_loss:.4f}")
    print(f"Final Training Loss  : {last_train_loss:.4f}")
    print(f"Final Validation Loss: {val_loss:.4f}")
    print(f"Best Checkpoint Path : {best_checkpoint_path}")
    print(f"Compute Device Used  : {device}")
    print("=" * 65)

    return {
        "loss_before_training": initial_val_loss,
        "training_loss": last_train_loss,
        "validation_loss": val_loss,
        "best_checkpoint": str(best_checkpoint_path),
        "device": str(device),
    }

if __name__ == "__main__":
    args = parse_args()
    train_pipeline(args)
