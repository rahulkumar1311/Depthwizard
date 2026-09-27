@echo off
echo ========================================================
echo Starting DepthWizard Backend and Frontend Servers...
echo ========================================================

start "DepthWizard FastAPI Backend" cmd /k "call .venv\Scripts\activate && python -m uvicorn app.main:app --app-dir backend --host 127.0.0.1 --port 8000 --reload"

timeout /t 2 >nul

start "DepthWizard Frontend" cmd /k "cd frontend && npm run dev -- --host 127.0.0.1 --port 5173"

echo.
echo Servers started!
echo Frontend: http://localhost:5173/
echo Backend:  http://localhost:8000/
echo Swagger:  http://localhost:8000/docs
echo ========================================================
