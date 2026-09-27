import sys
from pathlib import Path

# Ensure backend and project root directories are in sys.path for root entrypoint execution
_current_dir = Path(__file__).resolve().parent
_backend_dir = _current_dir.parent
_project_root = _backend_dir.parent

for _p in [str(_backend_dir), str(_project_root)]:
    if _p not in sys.path:
        sys.path.insert(0, _p)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.config import settings
from app.api.routes import router as api_router

app = FastAPI(
    title=settings.PROJECT_NAME,
    description=settings.DESCRIPTION,
    version=settings.VERSION,
)

# CORS configuration for React + Vite frontend and Vercel cloud deployments
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ensure outputs directory exists and mount static routes
try:
    settings.OUTPUTS_DIR.mkdir(parents=True, exist_ok=True)
except Exception:
    pass

if settings.OUTPUTS_DIR.exists():
    app.mount("/static/outputs", StaticFiles(directory=settings.OUTPUTS_DIR), name="outputs")
if settings.DATA_DIR.exists():
    app.mount("/static/data", StaticFiles(directory=settings.DATA_DIR), name="data")


# Include API routes
app.include_router(api_router)

@app.get("/api")
def api_meta():
    """Returns API metadata and documentation links."""
    return {
        "title": settings.PROJECT_NAME,
        "description": settings.DESCRIPTION,
        "docs_url": "/docs",
        "api_health": "/api/health"
    }

# Mount frontend compiled static assets and SPA routes
_frontend_dist = _project_root / "frontend" / "dist"
_assets_dir = _frontend_dist / "assets"

if _assets_dir.exists():
    app.mount("/assets", StaticFiles(directory=_assets_dir), name="frontend_assets")

@app.get("/")
def serve_index():
    """Serves the visual DepthWizard React + Three.js MVP web application."""
    index_file = _frontend_dist / "index.html"
    if index_file.exists():
        from fastapi.responses import FileResponse
        return FileResponse(index_file)
    return {
        "title": settings.PROJECT_NAME,
        "description": settings.DESCRIPTION,
        "docs_url": "/docs",
        "api_health": "/api/health"
    }

@app.get("/{full_path:path}")
def serve_spa_fallback(full_path: str):
    """Fallback handler for SPA client routing and root assets (e.g. favicon.svg)."""
    candidate = _frontend_dist / full_path
    if candidate.exists() and candidate.is_file():
        from fastapi.responses import FileResponse
        return FileResponse(candidate)
    index_file = _frontend_dist / "index.html"
    if index_file.exists():
        from fastapi.responses import FileResponse
        return FileResponse(index_file)
    from fastapi.responses import JSONResponse
    return JSONResponse(status_code=404, content={"detail": f"Path '{full_path}' not found"})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host=settings.HOST, port=settings.PORT, reload=True)
