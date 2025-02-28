import { Link } from '@/components/custom/Link'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="container mx-auto flex-col gap-4 p-4 sm:p-16">
      <div className="flex flex-col gap-4 sm:gap-8 w-full max-w-7xl mx-auto relative min-h-full h-full rounded-lg border border-border/50 bg-background/50 p-4 backdrop-blur-[2px] sm:p-8">
        <div className="grid gap-1">
          <h1 className="text-3xl font-semibold text-foreground">
            Landing Page
          </h1>
          <h2 className="text-lg text-muted-foreground">
            Welcome to the landing page!
          </h2>
        </div>
        <Separator />
        <Badge
          variant="outline"
          className="absolute -top-2.5 left-4 bg-background sm:left-8"
        >
          Work in progress
        </Badge>
        <Link to="/test/" className="text-primary">
          Go to test page
        </Link>
      </div>
      
    </div>
  )
}