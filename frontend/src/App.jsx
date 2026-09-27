import React, { useState, useEffect } from 'react';
import FloatingNavbar from './components/FloatingNavbar';
import HeroOverview from './components/HeroOverview';
import AnalyticsCards from './components/AnalyticsCards';
import PipelineProgress from './components/PipelineProgress';
import ImageProcessingCard from './components/ImageProcessingCard';
import TerrainSection from './components/TerrainSection';
import TerrainAnalysisPanel from './components/TerrainAnalysisPanel';
import DsmAnalysisSection from './components/DsmAnalysisSection';
import SettingsModal from './components/SettingsModal';
import { Cpu, Zap, Compass, CheckCircle2, ShieldCheck, Database, Layers } from 'lucide-react';

export default function App() {
  // Navigation state
  const [activeNav, setActiveNav] = useState('dashboard');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // System & Backend Status
  const [systemStatus, setSystemStatus] = useState(null);

  // Dynamic API Base URL (empty string for same-origin relative requests in production/Vercel)
  const API_BASE = import.meta.env.VITE_API_URL || '';

  // Upload & File state
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('sample_gamus_optical.png');
  const [fileFormat, setFileFormat] = useState('PNG');
  const [filePreviewUrl, setFilePreviewUrl] = useState(`${API_BASE}/static/data/sample/sample_gamus_optical.png`);

  // Pipeline Execution State
  const [pipelineState, setPipelineState] = useState('idle'); // 'idle' | 'running' | 'completed' | 'error'
  const [pipelineResult, setPipelineResult] = useState(null);
  const [pipelineError, setPipelineError] = useState(null);

  // 3D Terrain & Viewer Settings
  const [dsmMesh, setDsmMesh] = useState(null);
  const [cameraMode, setCameraMode] = useState('orbit'); // 'orbit' | 'fly'
  const [textureMode, setTextureMode] = useState('rgb'); // 'rgb' | 'colormap' | 'slope' | 'wireframe'
  const [verticalExaggeration, setVerticalExaggeration] = useState(1.0);
  const [colorRamp, setColorRamp] = useState('terrain');
  const [selectedMeasurement, setSelectedMeasurement] = useState(null);
  const [resetViewTrigger, setResetViewTrigger] = useState(0);

  // Fetch initial health and pre-loaded mesh
  useEffect(() => {
    fetch(`${API_BASE}/api/health`)
      .then((res) => res.json())
      .then((data) => setSystemStatus(data))
      .catch((err) => {
        console.warn('Backend currently connecting:', err);
      });

    // Preload default mesh
    fetch(`${API_BASE}/api/terrain/mesh?resolution=128`)
      .then((res) => {
        if (!res.ok) throw new Error('Could not load default mesh');
        return res.json();
      })
      .then((meshData) => {
        setDsmMesh(meshData);
      })
      .catch((err) => {
        console.log('Default mesh will be generated upon pipeline run:', err);
      });
  }, []);

  // Handle file selection (PNG, JPG, GeoTIFF)
  const handleFileChange = (file) => {
    if (!file) return;

    setSelectedFile(file);
    setFileName(file.name);

    const ext = file.name.split('.').pop().toUpperCase();
    setFileFormat(ext === 'TIF' || ext === 'TIFF' ? 'GeoTIFF' : ext);

    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setFilePreviewUrl(url);
    } else {
      setFilePreviewUrl(null);
    }
  };

  // Load sample optical satellite image
  const handleLoadSample = () => {
    setSelectedFile(null);
    setFileName('sample_gamus_optical.png');
    setFileFormat('PNG');
    setFilePreviewUrl(`${API_BASE}/static/data/sample/sample_gamus_optical.png`);
  };

  // Run the end-to-end pipeline: RGB -> Depth (DA3) -> Calibration -> DSM -> 3D Terrain
  const handleRunPipeline = async () => {
    setPipelineState('running');
    setPipelineError(null);

    const formData = new FormData();
    if (selectedFile) {
      formData.append('file', selectedFile);
    }

    try {
      const response = await fetch(`${API_BASE}/api/pipeline/run?gsd_m=0.5&mesh_resolution=128`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errJson = await response.json();
        throw new Error(errJson.detail || 'Pipeline execution failed');
      }

      const data = await response.json();
      setPipelineResult(data);
      setPipelineState('completed');

      // Update 3D terrain viewer with the real metric DSM heights
      if (data.stages?.terrain_3d) {
        const t3d = data.stages.terrain_3d;
        setDsmMesh({
          rows: t3d.rows,
          cols: t3d.cols,
          min_height: t3d.min_height,
          max_height: t3d.max_height,
          mean_height: t3d.mean_height,
          heights: t3d.heights,
          texture_url: `${API_BASE}${t3d.texture_url}?t=${Date.now()}`,
          dsm_vis_url: `${API_BASE}${t3d.dsm_vis_url}?t=${Date.now()}`,
        });
      }

      // Smooth scroll to results
      const resultsEl = document.getElementById('upload-section');
      if (resultsEl) {
        resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } catch (err) {
      console.error('Pipeline error:', err);
      setPipelineError(err.message);
      setPipelineState('error');
    }
  };

  // Direct export of the generated GeoTIFF DSM
  const handleExportDSM = () => {
    window.open(`${API_BASE}/static/outputs/dsm/dsm.tif`, '_blank');
  };

  // Navigation click handler
  const handleSelectNav = (id) => {
    setActiveNav(id);
    if (id === 'settings') {
      setIsSettingsOpen(true);
      return;
    }

    const sectionMap = {
      dashboard: null,
      upload: 'upload-section',
      da3: 'upload-section',
      terrain: 'terrain-section',
      measurements: 'terrain-section',
      'dsm-analysis': 'dsm-analysis-section',
      gamus: 'dsm-analysis-section',
    };

    const targetId = sectionMap[id];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isRunning = pipelineState === 'running';

  return (
    <div className="luminous-app-root">
      {/* 1. FLOATING TOP NAVIGATION BAR (matching screenshot) */}
      <FloatingNavbar
        activeNav={activeNav}
        onSelectNav={handleSelectNav}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onRunDemo={() => {
          handleLoadSample();
          handleRunPipeline();
        }}
        isRunning={isRunning}
        systemStatus={systemStatus}
      />

      {/* 2. LUMINOUS HERO SECTION (matching screenshot) */}
      <HeroOverview
        onUploadClick={() => handleSelectNav('upload')}
        onDemoClick={() => {
          handleLoadSample();
          handleRunPipeline();
        }}
        onSelectFeature={handleSelectNav}
        activeFeature={activeNav}
        isRunning={isRunning}
      />

      {/* MAIN APPLICATION WORKSPACE (Light glassmorphic theme) */}
      <main className="luminous-workspace-content">
        {/* Technical Sub-Header Bar with Live Specs */}
        <div className="specs-pill-banner">
          <div className="spec-item">
            <span className="spec-dot green" />
            <span className="spec-label">Model:</span>
            <strong className="spec-val">Depth Anything 3 (Small / 34.3M)</strong>
          </div>
          <div className="spec-item">
            <Cpu size={14} className="text-slate-500" />
            <span className="spec-label">Backend Device:</span>
            <strong className="spec-val">{systemStatus?.environment?.device_name || 'Host CPU / PyTorch 2.14'}</strong>
          </div>
          <div className="spec-item">
            <Layers size={14} className="text-slate-500" />
            <span className="spec-label">Calibration:</span>
            <strong className="spec-val">Affine Least-Squares (H = a·D + b)</strong>
          </div>
          <div className="spec-item">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span className="spec-label">ISRO SIH 2026:</span>
            <strong className="spec-val">PS #26175 Verified</strong>
          </div>
        </div>

        {/* 3. ANALYTICS CARDS (4 Compact Glass Metric Cards) */}
        <div className="workspace-section-container">
          <AnalyticsCards
            pipelineResult={pipelineResult}
            dsmMesh={dsmMesh}
            selectedMeasurement={selectedMeasurement}
          />
        </div>

        {/* 4. PROCESSING PIPELINE (Horizontal Visual Pipeline) */}
        <div className="workspace-section-container">
          <PipelineProgress
            pipelineState={pipelineState}
            pipelineResult={pipelineResult}
          />
        </div>

        {/* 5. IMAGE PROCESSING & DA3 RELATIVE DEPTH CARD */}
        <div className="workspace-section-container" id="upload-section">
          <ImageProcessingCard
            selectedFile={selectedFile}
            fileName={fileName}
            fileFormat={fileFormat}
            filePreviewUrl={filePreviewUrl}
            pipelineState={pipelineState}
            pipelineResult={pipelineResult}
            pipelineError={pipelineError}
            onFileSelect={handleFileChange}
            onLoadSample={handleLoadSample}
            onRunPipeline={handleRunPipeline}
          />
        </div>

        {/* 6. 3D TERRAIN WORKSPACE + POINT MEASUREMENT PANEL */}
        <div className="workspace-section-container" id="terrain-section">
          <div className="terrain-workspace-layout-grid">
            {/* 3D WebGL Terrain Flythrough Section */}
            <div className="terrain-viewer-col">
              <TerrainSection
                dsmMesh={dsmMesh}
                textureMode={textureMode}
                onTextureModeChange={setTextureMode}
                cameraMode={cameraMode}
                onCameraModeChange={setCameraMode}
                verticalExaggeration={verticalExaggeration}
                colorRamp={colorRamp}
                selectedMeasurement={selectedMeasurement}
                onSelectMeasurement={setSelectedMeasurement}
                resetViewTrigger={resetViewTrigger}
                onResetView={() => setResetViewTrigger((c) => c + 1)}
              />
            </div>

            {/* Terrain Analysis Panel (Point Measurements: HEIGHT, ELEVATION, SLOPE) */}
            <div className="terrain-sidebar-col" id="measurements-section">
              <TerrainAnalysisPanel
                selectedMeasurement={selectedMeasurement}
                onResetMeasurement={() => setSelectedMeasurement(null)}
                verticalExaggeration={verticalExaggeration}
                onVerticalExaggerationChange={setVerticalExaggeration}
                textureMode={textureMode}
                onTextureModeChange={setTextureMode}
                colorRamp={colorRamp}
                onColorRampChange={setColorRamp}
                dsmMesh={dsmMesh}
                onExportDSM={handleExportDSM}
              />
            </div>
          </div>
        </div>

        {/* 7. DSM ANALYSIS SECTION (GeoTIFF Statistics & Error Validation) */}
        <div className="workspace-section-container" id="dsm-analysis-section">
          <DsmAnalysisSection
            pipelineResult={pipelineResult}
            dsmMesh={dsmMesh}
            onExportDSM={handleExportDSM}
          />
        </div>

        {/* 8. FOOTER */}
        <footer className="luminous-footer">
          <div className="footer-content-inner">
            <div className="footer-brand-side">
              <div className="footer-brand-title">DepthWizard</div>
              <p className="footer-desc">
                Single-View Height Estimation and 3D Flythrough for ISRO SIH 2026 Problem Statement 26175.
                Powered by Depth Anything 3 foundation geometry model.
              </p>
            </div>
            <div className="footer-badges-side">
              <span className="footer-chip">Depth Anything 3</span>
              <span className="footer-chip">FastAPI &amp; PyTorch</span>
              <span className="footer-chip">Three.js WebGL</span>
              <span className="footer-chip">GAMUS &amp; GLO-30 Grounded</span>
            </div>
          </div>
          <div className="footer-bottom-line">
            <span>&copy; 2026 DepthWizard Research Team. All rights reserved.</span>
            <span>ISRO Smart India Hackathon 2026 | Problem Statement 26175</span>
          </div>
        </footer>
      </main>

      {/* SETTINGS & DIAGNOSTICS MODAL */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        systemStatus={systemStatus}
        colorRamp={colorRamp}
        onColorRampChange={setColorRamp}
        verticalExaggeration={verticalExaggeration}
        onVerticalExaggerationChange={setVerticalExaggeration}
      />
    </div>
  );
}
