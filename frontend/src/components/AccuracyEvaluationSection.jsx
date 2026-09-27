import React, { useState, useEffect } from 'react';
import {
  Award,
  CheckCircle2,
  TrendingDown,
  TrendingUp,
  FileText,
  Download,
  RefreshCw,
  Layers,
  Sparkles,
  Info,
  Maximize2,
  Database,
  BarChart3,
} from 'lucide-react';

export default function AccuracyEvaluationSection({ API_BASE = '' }) {
  const [evalData, setEvalData] = useState(null);
  const [selectedMode, setSelectedMode] = useState('dataset'); // 'dataset' | 'sample'
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch initial pre-calculated evaluation summary
  const fetchSummary = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/api/evaluate/summary`);
      if (!res.ok) throw new Error('Could not fetch accuracy evaluation report');
      const data = await res.json();
      setEvalData(data);
    } catch (err) {
      console.warn('Evaluation summary fetch error:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSummary();
  }, [API_BASE]);

  // Execute live single-sample or dataset evaluation
  const handleRunEvaluation = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/api/evaluate`, { method: 'POST' });
      if (!res.ok) throw new Error('Accuracy evaluation run failed');
      const data = await res.json();
      // Re-fetch summary so both views have latest real data
      await fetchSummary();
    } catch (err) {
      console.error('Run evaluation error:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Determine active view data
  const isDataset = selectedMode === 'dataset';
  const primarySample = evalData?.sample_results?.[0];

  const beforeRMSE = isDataset ? evalData?.baseline?.mean_rmse : primarySample?.baseline?.rmse;
  const afterRMSE = isDataset ? evalData?.after?.mean_rmse : primarySample?.after?.rmse;
  const rmseImp = isDataset ? evalData?.improvement?.rmse_percent : primarySample?.improvement?.rmse_percent;

  const beforeMAE = isDataset ? evalData?.baseline?.mean_mae : primarySample?.baseline?.mae;
  const afterMAE = isDataset ? evalData?.after?.mean_mae : primarySample?.after?.mae;
  const maeImp = isDataset ? evalData?.improvement?.mae_percent : primarySample?.improvement?.mae_percent;

  const beforeCorr = isDataset ? evalData?.baseline?.mean_correlation : primarySample?.baseline?.correlation;
  const afterCorr = isDataset ? evalData?.after?.mean_correlation : primarySample?.after?.correlation;
  const corrChange = isDataset ? evalData?.improvement?.correlation_change : primarySample?.improvement?.correlation_change;

  // Safe numerical formatter
  const fmt = (val, digits = 2, showPlus = false) => {
    if (typeof val === 'number' && !isNaN(val)) {
      const prefix = showPlus && val > 0 ? '+' : '';
      return `${prefix}${val.toFixed(digits)}`;
    }
    return '--';
  };

  return (
    <section className="accuracy-evaluation-section" id="accuracy-section">
      {/* Header Bar */}
      <div className="eval-header-bar">
        <div className="eval-title-group">
          <div className="eval-header-icon-box">
            <Award size={22} className="text-emerald-500" />
          </div>
          <div>
            <div className="eval-badge-pill">
              <span className="eval-badge-dot" />
              <span>REAL BENCHMARK EVALUATION</span>
            </div>
            <h3 className="eval-main-title">Accuracy Improvement</h3>
            <p className="eval-subtitle">
              Measured against ground-truth LiDAR reference elevation data (GAMUS Benchmark Split).
            </p>
          </div>
        </div>

        {/* Action Controls & Mode Switcher */}
        <div className="eval-controls-group">
          <div className="eval-mode-toggle">
            <button
              className={`mode-btn ${selectedMode === 'dataset' ? 'active' : ''}`}
              onClick={() => setSelectedMode('dataset')}
            >
              <span>Dataset Split (N=2)</span>
            </button>
            <button
              className={`mode-btn ${selectedMode === 'sample' ? 'active' : ''}`}
              onClick={() => setSelectedMode('sample')}
            >
              <span>Held-Out Sample (DC_02_26)</span>
            </button>
          </div>

          <button
            className="btn-run-eval"
            onClick={handleRunEvaluation}
            disabled={isLoading}
            title="Compute real Before vs After metrics against ground-truth reference rasters"
          >
            <RefreshCw size={14} className={isLoading ? 'spin-icon' : ''} />
            <span>{isLoading ? 'Calculating Metrics...' : 'Re-Run Evaluation'}</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="eval-error-banner">
          <Info size={16} />
          <span>Notice: {error}. Click "Re-Run Evaluation" to calculate from validation HDF5 files.</span>
        </div>
      )}

      {/* Before / After Metric Cards Grid */}
      <div className="eval-metrics-grid">
        {/* RMSE CARD */}
        <div className="eval-metric-card">
          <div className="metric-card-header">
            <span className="metric-tag-label">ROOT MEAN SQUARE ERROR (RMSE)</span>
            <span className="metric-direction-tag lower">Lower is better ↓</span>
          </div>

          <div className="metric-comparison-row">
            <div className="metric-column before">
              <span className="comp-label">BEFORE (Baseline DA3)</span>
              <div className="comp-value-row">
                <strong className="comp-number">{fmt(beforeRMSE, 2)}</strong>
                <span className="comp-unit">m</span>
              </div>
              <span className="comp-subtext">Pretrained relative depth</span>
            </div>

            <div className="comp-arrow-divider">→</div>

            <div className="metric-column after">
              <span className="comp-label">AFTER (DepthWizard)</span>
              <div className="comp-value-row">
                <strong className="comp-number text-emerald">{fmt(afterRMSE, 2)}</strong>
                <span className="comp-unit">m</span>
              </div>
              <span className="comp-subtext">Metric calibrated DSM</span>
            </div>
          </div>

          <div className="metric-delta-footer positive">
            <TrendingDown size={16} />
            <span className="delta-text">
              <strong>{typeof rmseImp === 'number' ? `${rmseImp.toFixed(1)}%` : '--%'}</strong> Error Reduction
            </span>
          </div>
        </div>

        {/* MAE CARD */}
        <div className="eval-metric-card">
          <div className="metric-card-header">
            <span className="metric-tag-label">MEAN ABSOLUTE ERROR (MAE)</span>
            <span className="metric-direction-tag lower">Lower is better ↓</span>
          </div>

          <div className="metric-comparison-row">
            <div className="metric-column before">
              <span className="comp-label">BEFORE (Baseline DA3)</span>
              <div className="comp-value-row">
                <strong className="comp-number">{fmt(beforeMAE, 2)}</strong>
                <span className="comp-unit">m</span>
              </div>
              <span className="comp-subtext">Pretrained relative depth</span>
            </div>

            <div className="comp-arrow-divider">→</div>

            <div className="metric-column after">
              <span className="comp-label">AFTER (DepthWizard)</span>
              <div className="comp-value-row">
                <strong className="comp-number text-emerald">{fmt(afterMAE, 2)}</strong>
                <span className="comp-unit">m</span>
              </div>
              <span className="comp-subtext">Metric calibrated DSM</span>
            </div>
          </div>

          <div className="metric-delta-footer positive">
            <TrendingDown size={16} />
            <span className="delta-text">
              <strong>{typeof maeImp === 'number' ? `${maeImp.toFixed(1)}%` : '--%'}</strong> Error Reduction
            </span>
          </div>
        </div>

        {/* PEARSON CORRELATION CARD */}
        <div className="eval-metric-card">
          <div className="metric-card-header">
            <span className="metric-tag-label">PEARSON CORRELATION (r)</span>
            <span className="metric-direction-tag higher">Higher is better ↑</span>
          </div>

          <div className="metric-comparison-row">
            <div className="metric-column before">
              <span className="comp-label">BEFORE (Baseline DA3)</span>
              <div className="comp-value-row">
                <strong className="comp-number">{fmt(beforeCorr, 2, true)}</strong>
              </div>
              <span className="comp-subtext">Raw inverse disparity</span>
            </div>

            <div className="comp-arrow-divider">→</div>

            <div className="metric-column after">
              <span className="comp-label">AFTER (DepthWizard)</span>
              <div className="comp-value-row">
                <strong className="comp-number text-emerald">{fmt(afterCorr, 2, true)}</strong>
              </div>
              <span className="comp-subtext">True elevation gradient</span>
            </div>
          </div>

          <div className="metric-delta-footer positive">
            <TrendingUp size={16} />
            <span className="delta-text">
              <strong>{fmt(corrChange, 3, true)}</strong> Positive Alignment
            </span>
          </div>
        </div>
      </div>

      {/* Visual Comparison Figure & Bar Chart Preview */}
      <div className="eval-visual-comparison-box">
        <div className="visual-box-header">
          <div className="visual-box-title">
            <BarChart3 size={17} className="text-cyan" />
            <h4>Before vs. After Reference Inspection</h4>
          </div>
          <span className="scientific-notice">
            Lower RMSE &amp; MAE indicate reduced metric height error. Higher correlation indicates stronger topological agreement.
          </span>
        </div>

        <div className="visual-figure-frame">
          <img
            src={`${API_BASE}/static/outputs/evaluation/comparison.png?t=${Date.now()}`}
            alt="DepthWizard Accuracy Evaluation Comparison"
            className="comparison-figure-img"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Technical Methodology & Provenance Table */}
      <div className="eval-provenance-box">
        <div className="provenance-grid">
          <div className="prov-item">
            <span className="prov-label">BENCHMARK DATASET</span>
            <strong className="prov-value">GAMUS (Urban Surface)</strong>
            <span className="prov-sub">ISRO SIH 2026 Test Suite</span>
          </div>

          <div className="prov-item">
            <span className="prov-label">EVALUATION SPLIT</span>
            <strong className="prov-value">Validation (Held-Out)</strong>
            <span className="prov-sub">Strictly zero training overlap</span>
          </div>

          <div className="prov-item">
            <span className="prov-label">REFERENCE GROUND TRUTH</span>
            <strong className="prov-value">LiDAR AGL Elevation</strong>
            <span className="prov-sub">Physical meters datum</span>
          </div>

          <div className="prov-item">
            <span className="prov-label">PIPELINE ADAPTATION</span>
            <strong className="prov-value">Affine Scale Calibration</strong>
            <span className="prov-sub">H = a·D + b (Least-Squares)</span>
          </div>
        </div>

        {/* Downloadable Artifacts */}
        <div className="provenance-actions-bar">
          <div className="prov-notice-text">
            <span>All values calculated mathematically from real prediction arrays and LiDAR ground truth.</span>
          </div>

          <div className="prov-download-links">
            <a
              href={`${API_BASE}/static/outputs/evaluation/accuracy_report.json`}
              target="_blank"
              rel="noreferrer"
              className="btn-prov-link"
            >
              <Download size={13} />
              <span>accuracy_report.json</span>
            </a>
            <a
              href={`${API_BASE}/static/outputs/evaluation/accuracy_report.csv`}
              target="_blank"
              rel="noreferrer"
              className="btn-prov-link"
            >
              <FileText size={13} />
              <span>accuracy_report.csv</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
