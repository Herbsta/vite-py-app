import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Welcome to TanStack Router</h1>
      <p>
        This is a demo app using Vite and TanStack Router with file-based routing.
      </p>
    </div>
  )
}