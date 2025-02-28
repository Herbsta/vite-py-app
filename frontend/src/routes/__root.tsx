import { createRootRoute, Outlet, Link } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ErrorBoundary } from 'react-error-boundary'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex gap-4">
          <Link
            to="/"
            className="hover:underline"
            activeProps={{ className: 'font-bold' }}
          >
            Home
          </Link>
          
          
        </nav>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <ErrorBoundary
          fallback={<div className="text-red-500">Something went wrong!</div>}
        >
          <Outlet />
        </ErrorBoundary>
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <p>&copy; 2025 My TanStack Router App</p>
        </div>
      </footer>

      {process.env.NODE_ENV === 'development' && <TanStackRouterDevtools />}
    </div>
  )
}