import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_404')({
  component: NotFoundPage,
})

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-medium text-gray-600">Page Not Found</h2>
      <p className="text-gray-500 max-w-md text-center">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
      >
        Go Home
      </Link>
    </div>
  )
}