"""Evaluation Comparison & Artifact Generator
Generates side-by-side visual comparisons, bar charts, JSON reports, and CSV exports
comparing Baseline (Pretrained DA3) against After (DepthWizard Calibrated).
ISRO SIH 2026 Problem Statement 26175 (DepthWizard)
"""

import os
import json
import csv
from pathlib import Path
from typing import Dict, Any, Optional, Union
import numpy as np
from PIL import Image
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec


def export_accuracy_reports(
    eval_result: Dict[str, Any],
    output_dir: Union[str, Path] = "outputs/evaluation",
) -> Dict[str, str]:
    """Saves accuracy_report.json and accuracy_report.csv to output_dir."""
    out_p = Path(output_dir)
    try:
        out_p.mkdir(parents=True, exist_ok=True)
    except (OSError, PermissionError):
        import tempfile
        out_p = Path(tempfile.gettempdir()) / "depthwizard_outputs" / "evaluation"
        out_p.mkdir(parents=True, exist_ok=True)

    json_path = out_p / "accuracy_report.json"
    csv_path = out_p / "accuracy_report.csv"

    # 1. Clean JSON export (strip raw numpy arrays if present)
    clean_dict = {}
    for k, v in eval_result.items():
        if k != "predictions":
            clean_dict[k] = v

    with open(json_path, mode="w", encoding="utf-8") as f:
        json.dump(clean_dict, f, indent=2)

    # 2. CSV tabular export
    with open(csv_path, mode="w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["DepthWizard Accuracy Evaluation Report"])
        writer.writerow([])
        writer.writerow(["Condition", "Model / Pipeline", "RMSE (m)", "MAE (m)", "Pearson Correlation (r)"])

        if "sample_results" in eval_result:
            # Dataset evaluation
            b = eval_result["baseline"]
            a = eval_result["after"]
            writer.writerow(["Before (Baseline)", b["label"], b["mean_rmse"], b["mean_mae"], b["mean_correlation"]])
            writer.writerow(["After (DepthWizard)", a["label"], a["mean_rmse"], a["mean_mae"], a["mean_correlation"]])
            writer.writerow([])
            imp = eval_result["improvement"]
            writer.writerow(["Metric", "Improvement", "Direction"])
            writer.writerow(["RMSE Reduction", f"{imp['rmse_percent']}%", "Lower is better (↓)"])
            writer.writerow(["MAE Reduction", f"{imp['mae_percent']}%", "Lower is better (↓)"])
            writer.writerow(["Correlation Change", f"{imp['correlation_change']:+.4f}", "Higher is better (↑)"])
            writer.writerow([])
            writer.writerow(["Sample Breakdown"])
            writer.writerow(["Sample ID", "Baseline RMSE", "After RMSE", "RMSE Imp %", "Baseline MAE", "After MAE", "MAE Imp %"])
            for s in eval_result["sample_results"]:
                s_b = s["baseline"]
                s_a = s["after"]
                s_imp = s["improvement"]
                writer.writerow([s["sample_name"], s_b["rmse"], s_a["rmse"], f"{s_imp['rmse_percent']}%", s_b["mae"], s_a["mae"], f"{s_imp['mae_percent']}%"])
        else:
            # Single sample evaluation
            b = eval_result["baseline"]
            a = eval_result["after"]
            writer.writerow(["Before (Baseline)", b["label"], b["rmse"], b["mae"], b["correlation"]])
            writer.writerow(["After (DepthWizard)", a["label"], a["rmse"], a["mae"], a["correlation"]])
            writer.writerow([])
            imp = eval_result["improvement"]
            writer.writerow(["Metric", "Improvement", "Direction"])
            writer.writerow(["RMSE Reduction", f"{imp['rmse_percent']}%", "Lower is better (↓)"])
            writer.writerow(["MAE Reduction", f"{imp['mae_percent']}%", "Lower is better (↓)"])
            writer.writerow(["Correlation Change", f"{imp['correlation_change']:+.4f}", "Higher is better (↑)"])

    return {
        "json_path": str(json_path),
        "csv_path": str(csv_path),
    }


def generate_comparison_figure(
    sample_eval: Dict[str, Any],
    rgb_image: np.ndarray,
    output_dir: Union[str, Path] = "outputs/evaluation",
    filename: str = "comparison.png",
) -> str:
    """Creates publication-grade visual comparison figure:
    Top Row: [Original RGB] | [Baseline DA3] | [After DepthWizard] | [Reference Ground Truth]
    Bottom Row: Metric Error Comparison Bar Charts (RMSE, MAE, Pearson r).
    """
    out_p = Path(output_dir)
    try:
        out_p.mkdir(parents=True, exist_ok=True)
    except (OSError, PermissionError):
        import tempfile
        out_p = Path(tempfile.gettempdir()) / "depthwizard_outputs" / "evaluation"
        out_p.mkdir(parents=True, exist_ok=True)
    fig_path = out_p / filename

    preds = sample_eval.get("predictions", {})
    base_arr = preds.get("baseline_array")
    after_arr = preds.get("after_array")
    ref_arr = preds.get("reference_array")

    b_meta = sample_eval["baseline"]
    a_meta = sample_eval["after"]
    imp = sample_eval["improvement"]

    fig = plt.figure(figsize=(16, 10), facecolor="#f8fafc")
    gs = gridspec.GridSpec(2, 4, height_ratios=[1.3, 1.0], hspace=0.35, wspace=0.25)

    # 1. Top Panel: Visual Rasters
    # Panel A: Original Optical RGB
    ax_rgb = fig.add_subplot(gs[0, 0])
    ax_rgb.imshow(rgb_image)
    ax_rgb.set_title("Input Optical RGB\n(Single-View Satellite)", fontsize=11, fontweight="bold", pad=8)
    ax_rgb.axis("off")

    # Panel B: Baseline Pretrained DA3
    ax_base = fig.add_subplot(gs[0, 1])
    if base_arr is not None:
        im_b = ax_base.imshow(base_arr, cmap="terrain")
        plt.colorbar(im_b, ax=ax_base, fraction=0.046, pad=0.04, label="Meters (m)")
    ax_base.set_title(
        f"BEFORE: Pretrained DA3\nRMSE: {b_meta['rmse']}m | MAE: {b_meta['mae']}m\nPearson r: {b_meta['correlation']:.2f}",
        fontsize=10.5,
        fontweight="bold",
        pad=8,
        color="#b91c1c",
    )
    ax_base.axis("off")

    # Panel C: After DepthWizard Calibrated
    ax_after = fig.add_subplot(gs[0, 2])
    if after_arr is not None:
        im_a = ax_after.imshow(after_arr, cmap="terrain")
        plt.colorbar(im_a, ax=ax_after, fraction=0.046, pad=0.04, label="Meters (m)")
    ax_after.set_title(
        f"AFTER: DepthWizard Calibrated\nRMSE: {a_meta['rmse']}m ({imp['rmse_percent']}% ↓)\nMAE: {a_meta['mae']}m ({imp['mae_percent']}% ↓) | r: {a_meta['correlation']:.2f}",
        fontsize=10.5,
        fontweight="bold",
        pad=8,
        color="#047857",
    )
    ax_after.axis("off")

    # Panel D: Ground Truth Reference Elevation
    ax_ref = fig.add_subplot(gs[0, 3])
    if ref_arr is not None:
        im_r = ax_ref.imshow(ref_arr, cmap="terrain")
        plt.colorbar(im_r, ax=ax_ref, fraction=0.046, pad=0.04, label="Meters (m)")
    ax_ref.set_title("REFERENCE: GAMUS Ground Truth\n(LiDAR AGL Elevation Surface)", fontsize=10.5, fontweight="bold", pad=8)
    ax_ref.axis("off")

    # 2. Bottom Panel: Metric Bar Charts
    # Chart 1: RMSE
    ax_rmse = fig.add_subplot(gs[1, 0:2])
    metrics_labels = ["RMSE (m)\n[Lower is better ↓]", "MAE (m)\n[Lower is better ↓]"]
    before_vals = [b_meta["rmse"], b_meta["mae"]]
    after_vals = [a_meta["rmse"], a_meta["mae"]]

    x = np.arange(len(metrics_labels))
    width = 0.32

    rects1 = ax_rmse.bar(x - width/2, before_vals, width, label="Before: Pretrained DA3", color="#ef4444", alpha=0.85, edgecolor="#b91c1c")
    rects2 = ax_rmse.bar(x + width/2, after_vals, width, label="After: DepthWizard", color="#10b981", alpha=0.85, edgecolor="#047857")

    ax_rmse.set_ylabel("Error in Meters (m)", fontsize=11, fontweight="bold")
    ax_rmse.set_title("Elevation Error Comparison (RMSE & MAE in Meters)", fontsize=12, fontweight="bold")
    ax_rmse.set_xticks(x)
    ax_rmse.set_xticklabels(metrics_labels, fontsize=10.5, fontweight="bold")
    ax_rmse.legend(frameon=True, facecolor="#ffffff", edgecolor="#cbd5e1")
    ax_rmse.grid(axis="y", linestyle="--", alpha=0.4)

    # Bar label annotations
    for rect in rects1:
        h = rect.get_height()
        ax_rmse.annotate(f"{h:.2f}m", xy=(rect.get_x() + rect.get_width() / 2, h), xytext=(0, 3), textcoords="offset points", ha="center", va="bottom", fontsize=10, fontweight="bold")
    for rect in rects2:
        h = rect.get_height()
        ax_rmse.annotate(f"{h:.2f}m", xy=(rect.get_x() + rect.get_width() / 2, h), xytext=(0, 3), textcoords="offset points", ha="center", va="bottom", fontsize=10, fontweight="bold", color="#047857")

    # Chart 2: Pearson Correlation
    ax_corr = fig.add_subplot(gs[1, 2:4])
    corr_labels = ["Pearson Correlation (r)\n[Higher is better ↑]"]
    before_corr = [b_meta["correlation"]]
    after_corr = [a_meta["correlation"]]
    x_c = np.arange(len(corr_labels))

    rects_c1 = ax_corr.bar(x_c - width/2, before_corr, width, label="Before: Pretrained DA3", color="#f87171", alpha=0.85, edgecolor="#b91c1c")
    rects_c2 = ax_corr.bar(x_c + width/2, after_corr, width, label="After: DepthWizard", color="#059669", alpha=0.85, edgecolor="#065f46")

    ax_corr.set_ylabel("Correlation Coefficient r", fontsize=11, fontweight="bold")
    ax_corr.set_title("Surface Topology Alignment (Pearson Correlation)", fontsize=12, fontweight="bold")
    ax_corr.set_xticks(x_c)
    ax_corr.set_xticklabels(corr_labels, fontsize=10.5, fontweight="bold")
    ax_corr.set_ylim(-1.0, 1.0)
    ax_corr.axhline(0, color="#94a3b8", linewidth=0.8, linestyle="--")
    ax_corr.legend(frameon=True, facecolor="#ffffff", edgecolor="#cbd5e1")
    ax_corr.grid(axis="y", linestyle="--", alpha=0.4)

    for rect in rects_c1:
        h = rect.get_height()
        ax_corr.annotate(f"{h:+.2f}", xy=(rect.get_x() + rect.get_width() / 2, max(h, 0)), xytext=(0, 3), textcoords="offset points", ha="center", va="bottom", fontsize=10, fontweight="bold")
    for rect in rects_c2:
        h = rect.get_height()
        ax_corr.annotate(f"{h:+.2f}", xy=(rect.get_x() + rect.get_width() / 2, max(h, 0)), xytext=(0, 3), textcoords="offset points", ha="center", va="bottom", fontsize=10, fontweight="bold", color="#047857")

    plt.suptitle("DepthWizard Accuracy Improvement — Reference-Based Evaluation\nISRO SIH 2026 Problem Statement 26175 (Benchmark: GAMUS Validation Split)", fontsize=14, fontweight="bold", y=0.98)
    plt.savefig(fig_path, dpi=200, bbox_inches="tight")
    plt.close(fig)

    return str(fig_path)
