# DepthWizard Models Directory

This directory houses model weights, configuration files, and adapter checkpoints for monocular depth estimation and metric elevation calibration.

## Primary Model: Depth Anything V2 (Small)
- **Architecture**: Vision Transformer Small (`vits`) backbone with Dense Prediction Transformer (DPT) decoder.
- **Parameters**: ~24.8M parameters (optimal balance between real-time inference latency and fine geometric precision).
- **Default Checkpoint**: `depth_anything_v2_vits.pth`
- **Official Weights URL**: `https://huggingface.co/depth-anything/Depth-Anything-V2-Small/resolve/main/depth_anything_v2_vits.pth`

## Directory Layout
```text
models/
├── weights/
│   └── depth_anything_v2_vits.pth   # Place base weights here
├── checkpoints/
│   └── depth_anything_v2_gamus.pth  # Fine-tuned weights on GAMUS dataset
├── config.json                      # Inference and preprocessing configuration
└── README.md
```

## Downloading Base Model Weights
To download the base pretrained weights into `models/weights/`:
```bash
python scripts/download_weights.py --model small
```

## Remote-Sensing Domain Adaptation (GAMUS)
The Depth Anything V2 backbone produces affine-invariant relative inverse depth.
When fine-tuning on GAMUS:
1. Backbone weights can be frozen or fine-tuned with a low learning rate (LoRA / adapter layer).
2. The decoder is trained with scale-and-shift invariant loss ($L_{ssi}$) combined with gradient smoothness loss ($L_{grad}$) on paired optical RGB and DSM elevation tiles.
