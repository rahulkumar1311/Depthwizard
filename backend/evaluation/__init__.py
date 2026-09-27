"""DepthWizard Accuracy Evaluation Module
Rigorous, reference-grounded accuracy evaluation between Pretrained DA3 and DepthWizard.
ISRO SIH 2026 Problem Statement 26175
"""

from .metrics import (
    compute_rmse,
    compute_mae,
    compute_pearson_correlation,
    compute_all_metrics,
    compute_improvement,
)
from .evaluator import DepthWizardEvaluator
from .comparison import export_accuracy_reports, generate_comparison_figure

__all__ = [
    "compute_rmse",
    "compute_mae",
    "compute_pearson_correlation",
    "compute_all_metrics",
    "compute_improvement",
    "DepthWizardEvaluator",
    "export_accuracy_reports",
    "generate_comparison_figure",
]
