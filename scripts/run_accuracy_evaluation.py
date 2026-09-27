"""Run DepthWizard Accuracy Evaluation on Real Ground-Truth Data
Evaluates Baseline (Pretrained DA3) vs After (Calibrated DepthWizard) on GAMUS validation data.
ISRO SIH 2026 Problem Statement 26175
"""

import sys
import os
import json
from pathlib import Path

# Ensure backend root is on sys.path
_script_dir = Path(__file__).resolve().parent
_workspace_dir = _script_dir.parent
_backend_dir = _workspace_dir / "backend"

sys.path.insert(0, str(_workspace_dir))
sys.path.insert(0, str(_backend_dir))

from backend.evaluation.evaluator import DepthWizardEvaluator
from backend.evaluation.comparison import export_accuracy_reports, generate_comparison_figure


def main():
    print("=" * 65)
    print("      DepthWizard Real Accuracy Evaluation Pipeline")
    print("=" * 65)

    evaluator = DepthWizardEvaluator(device="cpu")

    # 1. Single sample evaluation (Primary held-out validation sample: DC_02_26)
    rgb_path = _workspace_dir / "data" / "GAMUS_mvp" / "val" / "DC_02_26_RGB.h5"
    ref_path = _workspace_dir / "data" / "GAMUS_mvp" / "val" / "DC_02_26_AGL.h5"

    print(f"\n[1/4] Evaluating Primary Held-Out Validation Sample: {rgb_path.stem}...")
    sample_eval = evaluator.evaluate_sample(rgb_path, ref_path, sample_name="DC_02_26")

    print("\n--- SAMPLE LEVEL METRICS (DC_02_26) ---")
    b = sample_eval["baseline"]
    a = sample_eval["after"]
    imp = sample_eval["improvement"]

    print(f"BASELINE: Pretrained DA3")
    print(f"  RMSE:        {b['rmse']:.4f} m")
    print(f"  MAE:         {b['mae']:.4f} m")
    print(f"  Pearson r:   {b['correlation']:.4f}")

    print(f"AFTER: Calibrated DepthWizard (H = {a['scale_factor_a']}*D + {a['offset_b']}m)")
    print(f"  RMSE:        {a['rmse']:.4f} m (Improvement: {imp['rmse_percent']}% reduction)")
    print(f"  MAE:         {a['mae']:.4f} m (Improvement: {imp['mae_percent']}% reduction)")
    print(f"  Pearson r:   {a['correlation']:.4f} (Change: {imp['correlation_change']:+.4f})")

    # 2. Dataset-wide evaluation on all validation samples
    manifest_path = _workspace_dir / "data" / "GAMUS_mvp" / "manifest.csv"
    print(f"\n[2/4] Evaluating Entire Validation Split from {manifest_path.name}...")
    dataset_eval = evaluator.evaluate_dataset(manifest_path, split="val")

    print("\n--- DATASET EVALUATION SUMMARY ---")
    print(f"Dataset:       {dataset_eval['dataset']}")
    print(f"Split:         {dataset_eval['split']}")
    print(f"Sample Count:  {dataset_eval['sample_count']}")

    d_b = dataset_eval["baseline"]
    d_a = dataset_eval["after"]
    d_imp = dataset_eval["improvement"]

    print(f"\nBaseline Mean Metrics:")
    print(f"  Mean RMSE:   {d_b['mean_rmse']:.4f} m")
    print(f"  Mean MAE:    {d_b['mean_mae']:.4f} m")
    print(f"  Mean Corr:   {d_b['mean_correlation']:.4f}")

    print(f"\nAfter (DepthWizard) Mean Metrics:")
    print(f"  Mean RMSE:   {d_a['mean_rmse']:.4f} m")
    print(f"  Mean MAE:    {d_a['mean_mae']:.4f} m")
    print(f"  Mean Corr:   {d_a['mean_correlation']:.4f}")

    print(f"\nAggregate Improvements:")
    print(f"  RMSE Improvement:       {d_imp['rmse_percent']}% (Lower error)")
    print(f"  MAE Improvement:        {d_imp['mae_percent']}% (Lower error)")
    print(f"  Correlation Change:     {d_imp['correlation_change']:+.4f}")

    # 3. Save JSON and CSV reports
    output_dir = _workspace_dir / "outputs" / "evaluation"
    print(f"\n[3/4] Exporting Reports to {output_dir}...")
    reports = export_accuracy_reports(dataset_eval, output_dir=output_dir)
    print(f"  - JSON Report: {reports['json_path']}")
    print(f"  - CSV Report:  {reports['csv_path']}")

    # Also save single sample report
    single_dir = output_dir / "samples"
    single_dir.mkdir(parents=True, exist_ok=True)
    with open(single_dir / "DC_02_26_evaluation.json", "w", encoding="utf-8") as f:
        clean_s = {k: v for k, v in sample_eval.items() if k != "predictions"}
        json.dump(clean_s, f, indent=2)

    # 4. Generate visual comparison figure
    print("\n[4/4] Generating Visual Comparison Figure (comparison.png)...")
    rgb_arr = evaluator.load_rgb(rgb_path)
    fig_path = generate_comparison_figure(sample_eval, rgb_arr, output_dir=output_dir, filename="comparison.png")
    print(f"  - Comparison Figure: {fig_path}")

    print("\n" + "=" * 65)
    print(" [SUCCESS] Real Accuracy Evaluation Completed and Verified!")
    print("=" * 65)


if __name__ == "__main__":
    main()
