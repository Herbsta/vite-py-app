import Footer from '@/components/layout/footer'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ErrorBoundary } from 'react-error-boundary'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return <p>Not found!</p>
  },
})

function RootComponent() {
  return (
    <main>
      <ErrorBoundary
        fallback={<div className="text-red-500">Something went wrong!</div>}
      >
        <Outlet />
      </ErrorBoundary>
      <Footer/>
      {process.env.NODE_ENV === 'development' && <TanStackRouterDevtools />}
    </main>
  )
}