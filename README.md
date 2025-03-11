# Vite + FastAPI Template

A template for building static Vite applications served through FastAPI, with shadcn/ui components and zustand for state management.

## Prerequisites

- Python 3.8+
- Node.js 18+
- npm/yarn/pnpm

## Tech Stack

### Frontend
- [Vite](https://vitejs.dev/) - Frontend build tool
- [Tanstack Router](https://tanstack.com/router) - Router library
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [zustand](https://zustand-demo.pmnd.rs/) - State management
- [TailwindCSS](https://tailwindcss.com/) - CSS framework

### Backend
- [FastAPI](https://fastapi.tiangolo.com/) - Python web framework

## Project Structure

```
.
├── frontend/         # Vite frontend
│   ├── src/          # Source code
│   ├── public/       # Static files
│   └── dist/         # Production build output (must be created)
└── main.py            # FastAPI server
```

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd vite-py-app
```

2. Setup Python environment:
```bash
python -m venv venv
.\venv\Scripts\activate
pip install fastapi uvicorn
```

3. Install frontend dependencies:
```bash
cd frontend
npm install
```

## Development

### Frontend Development
Run the Vite development server:
```bash
cd frontend
npm run dev
```
The development server will be available at `http://localhost:5173`

### Backend Development
Run the FastAPI server:
```bash
uvicorn main:app --reload
```
The API will be available at `http://localhost:8000`

## Production

1. Build the frontend:
```bash
cd frontend
npm run build
```
This will create a static export in `frontend/dist`

2. Run the production server:
```bash
uvicorn main:app
```
The application will be served at `http://localhost:8000`

## Features

- 🌓 Dark/Light mode support
- 🎨 Customizable UI components with shadcn/ui
- 📱 Responsive design
- 🔧 Type-safe development with TypeScript
- 🎯 State management with zustand
- 🚀 Fast static page serving
- ⚡ API endpoints with FastAPI
