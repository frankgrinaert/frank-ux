import { Link, NavLink } from "react-router-dom"

import { CV_URL, SITE_NAME } from "@/lib/constants"
import { cn } from "@/lib/utils"

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "text-sm transition-colors",
    isActive ? "font-medium text-primary" : "text-muted-foreground hover:text-foreground"
  )

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link
          to="/"
          className="font-heading text-sm font-semibold tracking-tight text-foreground hover:text-primary"
        >
          {SITE_NAME}
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2" aria-label="Primary">
          <NavLink to="/work" className={navLinkClass}>
            Work
          </NavLink>
          <span className="text-border" aria-hidden="true">
            ·
          </span>
          <a
            href={CV_URL}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  )
}
