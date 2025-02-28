import { Link as TanstackLink } from "@tanstack/react-router";
import React from "react";
import { cn } from "@/lib/utils";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children?: React.ReactNode;
  to: string;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, to, children, ...props }, ref) => {
    const isInternal = 
      to.toString().startsWith("/") || to.toString().startsWith("#");
    
    const commonClassNames = cn(
      "text-foreground no-underline hover:underline underline-offset-4",
      "decoration-border hover:decoration-foreground",
      "ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md",
      className
    );
    
    if (isInternal) {
      return (
        <TanstackLink
          className={commonClassNames}
          to={to}
          {...props}
          ref={ref as any}
          preload="intent"
        >
          <span className={commonClassNames}>{children}</span>
        </TanstackLink>
      );
    } else {
      // For external links, use a regular anchor tag
      return (
        <a
          className={commonClassNames}
          href={to}
          target="_blank"
          rel="noreferrer"
          {...props}
          ref={ref}
        >
          <span className={commonClassNames}>{children}</span>
          </a>
      );
    }
  }
);

Link.displayName = "Link";

export { Link };