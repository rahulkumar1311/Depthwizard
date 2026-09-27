import React, { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class RootErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("DepthWizard UI Render Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f172a',
          color: '#f8fafc',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '30px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '26px', color: '#f87171', marginBottom: '14px', fontWeight: 700 }}>
            DepthWizard UI Render Exception
          </h2>
          <p style={{ maxWidth: '640px', color: '#cbd5e1', marginBottom: '20px', fontSize: '15px' }}>
            {this.state.error?.message || 'A render error occurred.'}
          </p>
          <pre style={{
            background: '#1e293b',
            border: '1px solid #334155',
            padding: '16px 20px',
            borderRadius: '10px',
            textAlign: 'left',
            maxWidth: '850px',
            overflowX: 'auto',
            fontSize: '12.5px',
            color: '#38bdf8'
          }}>
            {this.state.error?.stack}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '24px',
              padding: '12px 28px',
              background: '#0284c7',
              color: '#ffffff',
              border: 'none',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            Reload DepthWizard
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </StrictMode>,
)

