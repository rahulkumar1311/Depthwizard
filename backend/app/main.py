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

# CORS configuration for React + Vite frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount outputs and data directories as static files (if directories exist)
if settings.OUTPUTS_DIR.exists():
    app.mount("/static/outputs", StaticFiles(directory=settings.OUTPUTS_DIR), name="outputs")
if settings.DATA_DIR.exists():
    app.mount("/static/data", StaticFiles(directory=settings.DATA_DIR), name="data")


# Include API routes
app.include_router(api_router)

@app.get("/")
def root():
    return {
        "title": settings.PROJECT_NAME,
        "description": settings.DESCRIPTION,
        "docs_url": "/docs",
        "api_health": "/api/health"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host=settings.HOST, port=settings.PORT, reload=True)
