import React from 'react';
import {
  BarChart3,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
  Download,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react';

export default function DsmAnalysisSection({
  pipelineResult = null,
  dsmMesh = null,
  onExportDSM = null,
}) {
  const dsmStage = pipelineResult?.stages?.dsm;
  const calibStage = pipelineResult?.stages?.metric_calibration;

  // Real DSM statistics
  const minElev = dsmStage ? `${dsmStage.minimum_elevation.toFixed(2)} m` : dsmMesh ? `${dsmMesh.min_height.toFixed(2)} m` : '--';
  const maxElev = dsmStage ? `${dsmStage.maximum_elevation.toFixed(2)} m` : dsmMesh ? `${dsmMesh.max_height.toFixed(2)} m` : '--';
  const meanElev = dsmStage ? `${dsmStage.mean_elevation.toFixed(2)} m` : dsmMesh ? `${dsmMesh.mean_height.toFixed(2)} m` : '--';
  const rasterRes = dsmStage ? `${dsmStage.raster_dimensions.width} × ${dsmStage.raster_dimensions.height} px` : '--';
  const crs = dsmStage ? dsmStage.crs : (dsmMesh ? 'EPSG:3857 (Local Metric)' : '--');
  const dsmFile = dsmStage ? dsmStage.dsm_file : '/static/outputs/dsm/dsm.tif';

  // Real Validation metrics
  const rmse = calibStage?.rmse_meters !== undefined ? `${calibStage.rmse_meters.toFixed(2)} m` : '--';
  const mae = calibStage?.mae_meters !== undefined ? `${calibStage.mae_meters.toFixed(2)} m` : '--';
  const rSquared = calibStage?.r_squared !== undefined ? `${calibStage.r_squared.toFixed(3)}` : '--';
  const validPixels = calibStage?.valid_pixel_percentage !== undefined ? `${calibStage.valid_pixel_percentage.toFixed(1)}%` : '--';
  const formula = calibStage?.formula ? `${calibStage.formula} (a = ${calibStage.scale_factor_a.toFixed(4)}, b = ${calibStage.offset_b.toFixed(2)}m)` : 'H = a·D + b';

  return (
    <section className="dsm-analysis-section" id="dsm-analysis-section">
      <div className="section-header-block">
        <div className="section-title-wrap">
          <BarChart3 className="text-cyan" size={22} />
          <div>
            <h3 className="section-title-text">DSM Analysis &amp; Accuracy Validation</h3>
            <p className="section-subtitle-text">
              Real geospatial surface metrics and physical ground truth validation extracted from the actual calibrated DSM.
            </p>
          </div>
        </div>

        <button className="btn-dsm-download" onClick={onExportDSM}>
          <Download size={15} />
          <span>Download GeoTIFF (dsm.tif)</span>
        </button>
      </div>

      <div className="dsm-cards-container">
        {/* DSM Statistics Card */}
        <div className="dsm-card-box">
          <div className="dsm-card-title-bar">
            <FileCheck2 size={18} className="text-emerald" />
            <h4>DSM Statistics</h4>
          </div>

          <div className="dsm-stat-grid">
            <div className="dsm-stat-item">
              <span className="stat-label">Minimum Elevation</span>
              <span className="stat-value font-mono">{minElev}</span>
              <span className="stat-desc">Base ground datum</span>
            </div>

            <div className="dsm-stat-item">
              <span className="stat-label">Maximum Elevation</span>
              <span className="stat-value font-mono">{maxElev}</span>
              <span className="stat-desc">Highest peak / roofline</span>
            </div>

            <div className="dsm-stat-item">
              <span className="stat-label">Mean Elevation</span>
              <span className="stat-value font-mono">{meanElev}</span>
              <span className="stat-desc">Terrain surface average</span>
            </div>

            <div className="dsm-stat-item">
              <span className="stat-label">Raster Resolution</span>
              <span className="stat-value font-mono">{rasterRes}</span>
              <span className="stat-desc">Ground GSD: 0.50 m/px</span>
            </div>

            <div className="dsm-stat-item full-width">
              <span className="stat-label">Coordinate Reference System</span>
              <span className="stat-value font-mono crs-badge">{crs}</span>
              <span className="stat-desc">Geospatial projection standard</span>
            </div>
          </div>
        </div>

        {/* Validation & Error Metrics Card */}
        <div className="dsm-card-box">
          <div className="dsm-card-title-bar">
            <ShieldCheck size={18} className="text-blue" />
            <h4>Elevation Validation &amp; Calibration</h4>
          </div>

          <div className="dsm-stat-grid">
            <div className="dsm-stat-item">
              <span className="stat-label">Root Mean Square Error (RMSE)</span>
              <span className="stat-value font-mono text-cyan">{rmse}</span>
              <span className="stat-desc">Against reference elevation</span>
            </div>

            <div className="dsm-stat-item">
              <span className="stat-label">Mean Absolute Error (MAE)</span>
              <span className="stat-value font-mono text-emerald">{mae}</span>
              <span className="stat-desc">Average absolute deviation</span>
            </div>

            <div className="dsm-stat-item">
              <span className="stat-label">Correlation (R²)</span>
              <span className="stat-value font-mono">{rSquared}</span>
              <span className="stat-desc">Linear correlation goodness</span>
            </div>

            <div className="dsm-stat-item">
              <span className="stat-label">Valid Overlap</span>
              <span className="stat-value font-mono">{validPixels}</span>
              <span className="stat-desc">NoData-filtered pixels</span>
            </div>

            <div className="dsm-stat-item full-width">
              <span className="stat-label">Metric Calibration Formula</span>
              <span className="stat-value font-mono formula-badge">{formula}</span>
              <span className="stat-desc">Least-squares affine model</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
