# DepthWizard Research & Prototyping Notebooks

This directory contains Jupyter notebooks for dataset exploration, model evaluation, metric calibration experiments, and elevation error analysis.

## Planned Notebooks:
1. `01_gamus_exploration.ipynb`: Inspect GAMUS paired RGB optical images, LiDAR/DSM ground truths, distribution of terrain heights, and pixel coverage.
2. `02_depth_anything_v2_benchmarking.ipynb`: Evaluate zero-shot monocular relative depth on satellite/aerial scenes vs ground truth DSM.
3. `03_metric_calibration_experiments.ipynb`: Prototype affine alignment (scale $s$ and shift $t$), polynomial calibration, and GCP regression.
4. `04_slope_and_roughness_analysis.ipynb`: Compute terrain aspect, slope gradients ($\nabla z$), and surface roughness metrics.
