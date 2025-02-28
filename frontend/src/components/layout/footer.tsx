import { Link } from '@/components/custom/Link'
import { ModeToggle } from '@/components/theme/theme-toggle'
import { Button } from '@/components/ui/button'
import { Github, Globe, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <div className="flex flex-col gap-1">
    <div className="flex justify-center items-center gap-2 p-1">
      <ModeToggle />
      <Button variant="ghost" size="sm" className="w-9 px-0" asChild>
        <Link to="https://github.com/Herbsta">
          <Github className="h-4 w-4" />
        </Link>
      </Button>
      <Button variant="ghost" size="sm" className="w-9 px-0" asChild>
        <Link to="https://www.linkedin.com/in/herbiebingham/">
          <Linkedin className="h-4 w-4" />
        </Link>
      </Button>
      <Button variant="ghost" size="sm" className="w-9 px-0" asChild>
        <Link to="https://herbiebingham.co.uk/">
          <Globe className="h-4 w-4" />
        </Link>
      </Button>
    </div>
    <p className="text-muted-foreground text-center text-sm">
      Powered by <Link to="">Herbie Bingham</Link>
    </p>
  </div>
  )
}

export default Footer