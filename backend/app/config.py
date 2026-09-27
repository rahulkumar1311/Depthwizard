"""DepthWizard Configuration and Environment Settings"""

import os
import tempfile
from pathlib import Path

# Paths
BASE_DIR = Path(__file__).resolve().parent.parent.parent
BACKEND_DIR = BASE_DIR / "backend"
DATA_DIR = BASE_DIR / "data"
GAMUS_DIR = DATA_DIR / "GAMUS"
SAMPLE_DIR = DATA_DIR / "sample"
REFERENCE_DIR = DATA_DIR / "reference"
MODELS_DIR = BASE_DIR / "models"
WEIGHTS_DIR = MODELS_DIR / "weights"

def get_writable_dir(preferred_path: Path, fallback_name: str) -> Path:
    """Verifies that a directory is writable. On read-only serverless filesystems
    (such as Vercel / AWS Lambda /var/task), automatically falls back to /tmp."""
    try:
        preferred_path.mkdir(parents=True, exist_ok=True)
        test_file = preferred_path / ".perm_check"
        test_file.touch()
        test_file.unlink()
        return preferred_path
    except (OSError, PermissionError):
        tmp_dir = Path(tempfile.gettempdir()) / fallback_name
        tmp_dir.mkdir(parents=True, exist_ok=True)
        return tmp_dir

OUTPUTS_DIR = get_writable_dir(BASE_DIR / "outputs", "depthwizard_outputs")
DEPTH_OUTPUTS = OUTPUTS_DIR / "depth"
DSM_OUTPUTS = OUTPUTS_DIR / "dsm"
MESH_OUTPUTS = OUTPUTS_DIR / "meshes"
EVALUATION_OUTPUTS = OUTPUTS_DIR / "evaluation"

for p in [DEPTH_OUTPUTS, DSM_OUTPUTS, MESH_OUTPUTS, EVALUATION_OUTPUTS]:
    try:
        p.mkdir(parents=True, exist_ok=True)
    except OSError:
        pass

# Hardware Detection
def detect_device() -> str:
    """Detects available computing device (CUDA GPU, Apple MPS, or CPU)."""
    try:
        import torch
        if torch.cuda.is_available():
            return "cuda"
        elif hasattr(torch.backends, "mps") and torch.backends.mps.is_available():
            return "mps"
        return "cpu"
    except ImportError:
        return "cpu"

class Settings:
    PROJECT_NAME: str = "DepthWizard"
    DESCRIPTION: str = "Single-View Height Estimation and 3D Flythrough (ISRO SIH 2026)"
    VERSION: str = "0.1.0"
    HOST: str = os.getenv("HOST", "0.0.0.0")
    PORT: int = int(os.getenv("PORT", "8000"))
    CORS_ORIGINS: list = ["http://localhost:5173", "http://127.0.0.1:5173"]

    # Paths
    BASE_DIR: Path = BASE_DIR
    BACKEND_DIR: Path = BACKEND_DIR
    DATA_DIR: Path = DATA_DIR
    GAMUS_DIR: Path = GAMUS_DIR
    SAMPLE_DIR: Path = SAMPLE_DIR
    REFERENCE_DIR: Path = REFERENCE_DIR
    MODELS_DIR: Path = MODELS_DIR
    WEIGHTS_DIR: Path = WEIGHTS_DIR
    OUTPUTS_DIR: Path = OUTPUTS_DIR
    DEPTH_OUTPUTS: Path = DEPTH_OUTPUTS
    DSM_OUTPUTS: Path = DSM_OUTPUTS
    MESH_OUTPUTS: Path = MESH_OUTPUTS

    # Model configuration
    MODEL_NAME: str = "Depth Anything 3"
    MODEL_TYPE: str = "da3-small"  # Depth Anything 3 (ViT-S Backbone)
    WEIGHTS_PATH: Path = WEIGHTS_DIR / "da3_small"
    DEVICE: str = detect_device()

    # Elevation calibration defaults (meters)
    DEFAULT_MIN_ELEVATION: float = 0.0
    DEFAULT_MAX_ELEVATION: float = 120.0
    DEFAULT_PIXEL_SCALE_M: float = 0.5  # Ground Sampling Distance (GSD) in meters

settings = Settings()
