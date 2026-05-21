import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { CaseStudy } from "@/lib/case-study"

type CaseHeaderProps = Pick<CaseStudy, "title" | "summary" | "tags">

export function CaseHeader({ title, summary, tags }: CaseHeaderProps) {
  return (
    <header className="w-full bg-primary text-white">
      <div className="mx-auto max-w-6xl space-y-6 px-6 py-12 lg:px-8 lg:py-16">
        <Button
          variant="ghost"
          size="sm"
          className="-ml-2 text-white hover:bg-white/10 hover:text-white"
          render={<Link to="/" />}
        >
          <ArrowLeft />
          Home
        </Button>
        <h1 className="max-w-4xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="max-w-[60ch] text-base leading-relaxed text-white/90 sm:text-lg">
          {summary}
        </p>
        {tags.length > 0 ? (
          <ul className="flex flex-wrap gap-2" aria-label="Project tags">
            {tags.map((tag) => (
              <li key={tag}>
                <Badge className="h-6 bg-white/20 text-sm font-normal text-white">
                  {tag}
                </Badge>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </header>
  )
}
