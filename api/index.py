import sys
from pathlib import Path

# Resolve workspace root and backend directory for serverless environments (Vercel, AWS Lambda)
_current_file = Path(__file__).resolve()
_root_dir = _current_file.parent.parent
_backend_dir = _root_dir / "backend"

for _p in [str(_root_dir), str(_backend_dir)]:
    if _p not in sys.path:
        sys.path.insert(0, _p)

from app.main import app

# Vercel entrypoint ASGI handler
handler = app
