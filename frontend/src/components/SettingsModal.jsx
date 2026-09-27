import React from 'react';
import { X, Settings, Cpu, HardDrive, Database, Globe, Sliders } from 'lucide-react';

export default function SettingsModal({
  isOpen = false,
  onClose = null,
  systemStatus = null,
  colorRamp = 'terrain',
  onColorRampChange = null,
  verticalExaggeration = 1.0,
  onVerticalExaggerationChange = null,
}) {
  if (!isOpen) return null;

  const device = systemStatus?.environment?.device_name || 'CPU';
  const pythonVer = systemStatus?.environment?.python_version || '3.12+';
  const weightsReady = systemStatus?.model?.weights_ready ? 'Cached & Ready' : 'Auto-Downloading';

  return (
    <div className="modal-backdrop-blur" onClick={onClose}>
      <div className="settings-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-row">
          <div className="modal-title-wrap">
            <Settings size={20} className="text-cyan" />
            <h3 className="modal-heading-text">DepthWizard Settings &amp; Diagnostics</h3>
          </div>
          <button className="modal-close-icon-btn" onClick={onClose} aria-label="Close dialog">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body-scrollable">
          {/* Section 1: System & Compute Diagnostics */}
          <div className="settings-section-card">
            <h4 className="settings-section-title">
              <Cpu size={16} />
              <span>Compute &amp; Hardware Diagnostics</span>
            </h4>
            <div className="settings-details-table">
              <div className="setting-row">
                <span className="setting-key">Active Compute Device</span>
                <span className="setting-val font-mono">{device}</span>
              </div>
              <div className="setting-row">
                <span className="setting-key">PyTorch Acceleration</span>
                <span className="setting-val font-mono">
                  {systemStatus?.environment?.cuda_available ? 'CUDA Active' : 'CPU Optimization (AVX2)'}
                </span>
              </div>
              <div className="setting-row">
                <span className="setting-key">Python Runtime</span>
                <span className="setting-val font-mono">v{pythonVer}</span>
              </div>
              <div className="setting-row">
                <span className="setting-key">Model Weights Status</span>
                <span className="setting-val font-mono">{weightsReady}</span>
              </div>
            </div>
          </div>

          {/* Section 2: Visual & Display Preferences */}
          <div className="settings-section-card">
            <h4 className="settings-section-title">
              <Sliders size={16} />
              <span>Display &amp; Topographic Preferences</span>
            </h4>
            <div className="settings-details-table">
              <div className="setting-row">
                <span className="setting-key">Elevation Colormap</span>
                <select
                  value={colorRamp}
                  onChange={(e) => onColorRampChange && onColorRampChange(e.target.value)}
                  className="settings-dropdown"
                >
                  <option value="terrain">Natural Terrain (Hypsometric)</option>
                  <option value="viridis">Viridis Spectral</option>
                </select>
              </div>
              <div className="setting-row">
                <span className="setting-key">Default Vertical Exaggeration</span>
                <span className="setting-val font-mono">{verticalExaggeration.toFixed(1)}x</span>
              </div>
            </div>
          </div>

          {/* Section 3: API & Endpoints */}
          <div className="settings-section-card">
            <h4 className="settings-section-title">
              <Globe size={16} />
              <span>API Gateway &amp; Service Health</span>
            </h4>
            <div className="settings-details-table">
              <div className="setting-row">
                <span className="setting-key">Backend Endpoint</span>
                <span className="setting-val font-mono">http://127.0.0.1:8000</span>
              </div>
              <div className="setting-row">
                <span className="setting-key">Swagger Documentation</span>
                <a
                  href="http://127.0.0.1:8000/docs"
                  target="_blank"
                  rel="noreferrer"
                  className="setting-link font-mono"
                >
                  /docs ↗
                </a>
              </div>
              <div className="setting-row">
                <span className="setting-key">ISRO Problem Statement</span>
                <span className="setting-val font-mono">SIH 2026 #26175</span>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer-row">
          <button className="btn-modal-done" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
