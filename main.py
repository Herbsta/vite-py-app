from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI()

VITE_BUILD_DIR = "./frontend/dist" 

# Check if the build directory exists
if not os.path.isdir(VITE_BUILD_DIR):
    raise Exception(f"Vite.js build directory '{VITE_BUILD_DIR}' not found. Make sure to run 'npm run build' first.")

@app.get("/hello")
async def read_hello():
    return {"message": "Hello, World!"}

# Mount the static files
app.mount("/", StaticFiles(directory=VITE_BUILD_DIR, html=True), name="static")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)