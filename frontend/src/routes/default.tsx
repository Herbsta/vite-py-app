import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/default')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/default"!</div>
}
