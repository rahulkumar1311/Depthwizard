"""Accuracy Evaluation Metrics
Computes RMSE, MAE, and Pearson Correlation between predicted elevation/depth and reference ground truth.
ISRO SIH 2026 Problem Statement 26175 (DepthWizard)

Note: All metrics are computed strictly from real array data without fabricated values.
"""

from typing import Dict, Any, Optional, Tuple
import numpy as np


def compute_valid_mask(
    predictions: np.ndarray,
    targets: np.ndarray,
    valid_mask: Optional[np.ndarray] = None,
    min_elevation: float = -50.0,
    max_elevation: float = 9000.0,
) -> np.ndarray:
    """Computes boolean mask for non-NaN, finite, valid elevation/depth pixels."""
    mask = (
        np.isfinite(predictions)
        & np.isfinite(targets)
        & (targets >= min_elevation)
        & (targets <= max_elevation)
    )
    if valid_mask is not None:
        mask = mask & valid_mask
    return mask


def compute_rmse(
    predictions: np.ndarray,
    targets: np.ndarray,
    valid_mask: Optional[np.ndarray] = None,
) -> float:
    """Computes Root Mean Square Error (RMSE) in meters or target units:
    RMSE = sqrt( (1 / N) * sum( (pred - target)^2 ) )
    """
    mask = compute_valid_mask(predictions, targets, valid_mask)
    if np.count_nonzero(mask) == 0:
        return 0.0
    p = predictions[mask].astype(np.float64)
    t = targets[mask].astype(np.float64)
    return float(np.sqrt(np.mean((p - t) ** 2)))


def compute_mae(
    predictions: np.ndarray,
    targets: np.ndarray,
    valid_mask: Optional[np.ndarray] = None,
) -> float:
    """Computes Mean Absolute Error (MAE) in meters or target units:
    MAE = (1 / N) * sum( |pred - target| )
    """
    mask = compute_valid_mask(predictions, targets, valid_mask)
    if np.count_nonzero(mask) == 0:
        return 0.0
    p = predictions[mask].astype(np.float64)
    t = targets[mask].astype(np.float64)
    return float(np.mean(np.abs(p - t)))


def compute_pearson_correlation(
    predictions: np.ndarray,
    targets: np.ndarray,
    valid_mask: Optional[np.ndarray] = None,
) -> float:
    """Computes Pearson Linear Correlation Coefficient r between predictions and reference:
    r = cov(pred, target) / (std(pred) * std(target))
    Ranges from -1.0 to +1.0. Higher positive values indicate stronger monotonic alignment.
    """
    mask = compute_valid_mask(predictions, targets, valid_mask)
    if np.count_nonzero(mask) < 2:
        return 0.0
    p = predictions[mask].astype(np.float64)
    t = targets[mask].astype(np.float64)

    p_diff = p - np.mean(p)
    t_diff = t - np.mean(t)
    var_p = np.sum(p_diff ** 2)
    var_t = np.sum(t_diff ** 2)

    if var_p < 1e-12 or var_t < 1e-12:
        return 0.0

    r = float(np.sum(p_diff * t_diff) / (np.sqrt(var_p * var_t) + 1e-12))
    return float(np.clip(r, -1.0, 1.0))


def compute_all_metrics(
    predictions: np.ndarray,
    targets: np.ndarray,
    valid_mask: Optional[np.ndarray] = None,
) -> Dict[str, float]:
    """Computes RMSE, MAE, Pearson Correlation, and valid pixel counts."""
    mask = compute_valid_mask(predictions, targets, valid_mask)
    valid_count = int(np.count_nonzero(mask))
    total_count = int(predictions.size)

    rmse = compute_rmse(predictions, targets, mask)
    mae = compute_mae(predictions, targets, mask)
    corr = compute_pearson_correlation(predictions, targets, mask)

    return {
        "rmse": round(rmse, 4),
        "mae": round(mae, 4),
        "correlation": round(corr, 4),
        "valid_pixels": valid_count,
        "total_pixels": total_count,
        "valid_percentage": round((valid_count / max(total_count, 1)) * 100.0, 2),
    }


def compute_improvement(
    before: Dict[str, float],
    after: Dict[str, float],
) -> Dict[str, float]:
    """Calculates mathematical improvement between Before (baseline) and After (calibrated).

    Formulas:
    - RMSE improvement = ((Before RMSE - After RMSE) / Before RMSE) * 100
    - MAE improvement  = ((Before MAE - After MAE) / Before MAE) * 100
    - Correlation change = After Correlation - Before Correlation
    """
    b_rmse = before.get("rmse", 0.0)
    a_rmse = after.get("rmse", 0.0)
    b_mae = before.get("mae", 0.0)
    a_mae = after.get("mae", 0.0)
    b_corr = before.get("correlation", 0.0)
    a_corr = after.get("correlation", 0.0)

    rmse_pct = ((b_rmse - a_rmse) / (b_rmse + 1e-12)) * 100.0 if b_rmse > 0 else 0.0
    mae_pct = ((b_mae - a_mae) / (b_mae + 1e-12)) * 100.0 if b_mae > 0 else 0.0
    corr_change = a_corr - b_corr

    return {
        "rmse_percent": round(rmse_pct, 2),
        "mae_percent": round(mae_pct, 2),
        "correlation_change": round(corr_change, 4),
    }
