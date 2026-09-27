"""DepthWizard Accuracy Evaluator
Evaluates Pretrained Depth Anything 3 (Baseline) versus Calibrated DepthWizard (After)
against real ground-truth elevation reference data from GAMUS validation splits.
ISRO SIH 2026 Problem Statement 26175 (DepthWizard)
"""

import os
import sys
import time
from pathlib import Path
from typing import Dict, Any, Optional, Union, List, Tuple
import numpy as np
from PIL import Image

# Ensure backend root is on sys.path
_current_dir = Path(__file__).resolve().parent
_backend_dir = _current_dir.parent
_project_root = _backend_dir.parent

for _p in [str(_backend_dir), str(_project_root)]:
    if _p not in sys.path:
        sys.path.insert(0, _p)

from evaluation.metrics import compute_all_metrics, compute_improvement
from calibration.affine_calibration import AffineCalibrator


class DepthWizardEvaluator:
    """Rigorous evaluation pipeline comparing Baseline vs Calibrated DepthWizard on real reference data."""

    def __init__(self, device: Optional[str] = None):
        self.device = device or "cpu"
        self._da3_model = None
        self.calibrator = AffineCalibrator()

    @property
    def da3_model(self):
        if self._da3_model is None:
            from models.depth_anything import get_depth_model
            self._da3_model = get_depth_model(device=self.device)
        return self._da3_model

    def load_rgb(self, source: Union[str, Path, np.ndarray, Image.Image]) -> np.ndarray:
        """Loads RGB image into uint8 numpy array (H, W, 3)."""
        if isinstance(source, np.ndarray):
            if source.ndim == 2:
                source = np.stack([source] * 3, axis=-1)
            elif source.shape[2] == 4:
                source = source[:, :, :3]
            return source.astype(np.uint8)

        if isinstance(source, (str, Path)):
            p = Path(source)
            if not p.exists():
                raise FileNotFoundError(f"RGB file not found: {p}")
            if p.suffix.lower() == ".h5":
                import h5py
                with h5py.File(p, "r") as f:
                    ds = "image" if "image" in f else list(f.keys())[0]
                    arr = f[ds][()]
                return arr.astype(np.uint8)
            img = Image.open(p).convert("RGB")
            return np.array(img, dtype=np.uint8)

        if isinstance(source, Image.Image):
            return np.array(source.convert("RGB"), dtype=np.uint8)

        raise TypeError(f"Unsupported RGB source type: {type(source)}")

    def load_reference(self, source: Union[str, Path, np.ndarray]) -> np.ndarray:
        """Loads reference ground-truth elevation into float32 numpy array (H, W)."""
        ref_arr, _ = self.calibrator.load_reference_elevation(source)
        return ref_arr

    def evaluate_sample(
        self,
        rgb_source: Union[str, Path, np.ndarray, Image.Image],
        reference_source: Union[str, Path, np.ndarray],
        sample_name: str = "validation_sample",
        baseline_pred_override: Optional[np.ndarray] = None,
        after_pred_override: Optional[np.ndarray] = None,
    ) -> Dict[str, Any]:
        """Evaluates single sample on Baseline (Pretrained DA3) vs After (DepthWizard Calibrated).

        Baseline Definition:
        Pretrained Depth Anything 3 outputs relative inverse depth. For a valid comparison against
        physical meters, the prediction is normalized to [min, max] of reference elevation.

        After Definition:
        Pretrained Depth Anything 3 + DepthWizard Metric Scale Affine Calibration (H = a·D + b).
        """
        # 1. Load inputs
        rgb = self.load_rgb(rgb_source)
        ref = self.load_reference(reference_source)

        # 2. Get relative depth prediction from foundation model
        if baseline_pred_override is not None:
            pred_rel = baseline_pred_override.astype(np.float32)
        else:
            pred_rel = self.da3_model.predict(rgb)

        # Spatial grid alignment
        pred_rel_aligned, ref_aligned = self.calibrator.align_rasters(pred_rel, ref)

        # 3. BASELINE: Pretrained DA3 with standard range mapping to reference bounds
        ref_min = float(np.nanmin(ref_aligned[ref_aligned >= 0.0])) if np.any(ref_aligned >= 0.0) else float(np.nanmin(ref_aligned))
        ref_max = float(np.nanmax(ref_aligned))
        p_min = float(np.nanmin(pred_rel_aligned))
        p_max = float(np.nanmax(pred_rel_aligned))

        if p_max > p_min:
            norm_rel = (pred_rel_aligned - p_min) / (p_max - p_min + 1e-8)
        else:
            norm_rel = np.zeros_like(pred_rel_aligned)

        baseline_metric_estimate = ref_min + norm_rel * (ref_max - ref_min)

        metrics_baseline = compute_all_metrics(baseline_metric_estimate, ref_aligned)

        # 4. AFTER: DepthWizard Metric Scale Affine Calibration (H = a * D + b)
        if after_pred_override is not None:
            after_metric = after_pred_override.astype(np.float32)
            calib_res = {"scale_factor_a": 1.0, "offset_b": 0.0}
        else:
            calib_res = self.calibrator.estimate_affine_parameters(pred_rel_aligned, ref_aligned)
            a = calib_res["scale_factor_a"]
            b = calib_res["offset_b"]
            after_metric = self.calibrator.apply_calibration(pred_rel_aligned, a, b)

        metrics_after = compute_all_metrics(after_metric, ref_aligned)

        # 5. Calculate Mathematical Improvement
        improvement = compute_improvement(metrics_baseline, metrics_after)

        return {
            "sample_name": sample_name,
            "dimensions": {"width": int(ref_aligned.shape[1]), "height": int(ref_aligned.shape[0])},
            "baseline": {
                "label": "Baseline — Pretrained Depth Anything 3",
                "method": "Pretrained DA3 relative depth mapped to reference elevation range",
                "rmse": metrics_baseline["rmse"],
                "mae": metrics_baseline["mae"],
                "correlation": metrics_baseline["correlation"],
                "valid_pixels": metrics_baseline["valid_pixels"],
            },
            "after": {
                "label": "After — Calibrated DepthWizard",
                "method": "Depth Anything 3 + Affine Scale Calibration (H = a·D + b)",
                "rmse": metrics_after["rmse"],
                "mae": metrics_after["mae"],
                "correlation": metrics_after["correlation"],
                "scale_factor_a": calib_res.get("scale_factor_a"),
                "offset_b": calib_res.get("offset_b"),
                "valid_pixels": metrics_after["valid_pixels"],
            },
            "improvement": {
                "rmse_percent": improvement["rmse_percent"],
                "mae_percent": improvement["mae_percent"],
                "correlation_change": improvement["correlation_change"],
            },
            "reference_statistics": {
                "min_elevation_m": round(float(np.min(ref_aligned)), 2),
                "max_elevation_m": round(float(np.max(ref_aligned)), 2),
                "mean_elevation_m": round(float(np.mean(ref_aligned)), 2),
            },
            "predictions": {
                "baseline_array": baseline_metric_estimate,
                "after_array": after_metric,
                "reference_array": ref_aligned,
                "relative_depth_raw": pred_rel_aligned,
            }
        }

    def evaluate_dataset(
        self,
        dataset_manifest_path: Union[str, Path] = "data/GAMUS_mvp/manifest.csv",
        split: str = "val",
    ) -> Dict[str, Any]:
        """Evaluates all samples in the held-out validation or test split."""
        manifest_p = Path(dataset_manifest_path)
        if not manifest_p.is_absolute():
            manifest_p = _project_root / manifest_p

        if not manifest_p.exists():
            raise FileNotFoundError(f"Manifest not found: {manifest_p}")

        import csv
        sample_results = []
        with open(manifest_p, mode="r", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            for row in reader:
                if row.get("split") == split:
                    rgb_p = _project_root / row["rgb_path"]
                    ref_p = _project_root / row["reference_depth_path"]
                    s_id = row.get("sample_id", Path(rgb_p).stem)
                    if rgb_p.exists() and ref_p.exists():
                        res = self.evaluate_sample(rgb_p, ref_p, sample_name=s_id)
                        # Remove heavy raw arrays from summary list
                        summary_res = {k: v for k, v in res.items() if k != "predictions"}
                        sample_results.append(summary_res)

        if not sample_results:
            raise ValueError(f"No valid evaluation samples found for split '{split}' in {manifest_p}")

        n = len(sample_results)
        mean_base_rmse = float(np.mean([s["baseline"]["rmse"] for s in sample_results]))
        mean_base_mae = float(np.mean([s["baseline"]["mae"] for s in sample_results]))
        mean_base_corr = float(np.mean([s["baseline"]["correlation"] for s in sample_results]))

        mean_after_rmse = float(np.mean([s["after"]["rmse"] for s in sample_results]))
        mean_after_mae = float(np.mean([s["after"]["mae"] for s in sample_results]))
        mean_after_corr = float(np.mean([s["after"]["correlation"] for s in sample_results]))

        agg_improvement = compute_improvement(
            {"rmse": mean_base_rmse, "mae": mean_base_mae, "correlation": mean_base_corr},
            {"rmse": mean_after_rmse, "mae": mean_after_mae, "correlation": mean_after_corr},
        )

        return {
            "dataset": "GAMUS (Global Aerial Multi-View Urban Surface)",
            "split": split,
            "sample_count": n,
            "baseline": {
                "label": "Baseline — Pretrained Depth Anything 3",
                "mean_rmse": round(mean_base_rmse, 4),
                "mean_mae": round(mean_base_mae, 4),
                "mean_correlation": round(mean_base_corr, 4),
            },
            "after": {
                "label": "After — Calibrated DepthWizard",
                "mean_rmse": round(mean_after_rmse, 4),
                "mean_mae": round(mean_after_mae, 4),
                "mean_correlation": round(mean_after_corr, 4),
            },
            "improvement": {
                "rmse_percent": agg_improvement["rmse_percent"],
                "mae_percent": agg_improvement["mae_percent"],
                "correlation_change": agg_improvement["correlation_change"],
            },
            "sample_results": sample_results,
        }
