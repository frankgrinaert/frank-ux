import type { ReactNode } from "react"
import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type CaseStudyShellProps = {
  title: string
  summary: string
  tags: string[]
  accentTag?: string
  children: ReactNode
  next?: { href: string; label: string }
}

export function CaseStudyShell({
  title,
  summary,
  tags,
  accentTag,
  children,
  next,
}: CaseStudyShellProps) {
  return (
    <main>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
          <Link
            to="/work"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            ← All work
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-primary">
            Case study
          </p>
          <h1 className="mt-2 max-w-3xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
            {accentTag ? (
              <Badge className="bg-primary/10 text-primary hover:bg-primary/15">{accentTag}</Badge>
            ) : null}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-prose px-6 py-12 lg:px-8 lg:py-16">{children}</div>

      {next ? (
        <nav className="mx-auto max-w-6xl border-t border-border px-6 py-12 lg:px-8">
          <p className="text-sm font-medium text-muted-foreground">Next case study</p>
          <Link to={next.href} className="mt-2 inline-block font-heading text-lg font-semibold text-primary hover:underline">
            {next.label} →
          </Link>
        </nav>
      ) : null}
    </main>
  )
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-wider text-primary">{children}</p>
  )
}

export function CaseSection({
  label,
  title,
  children,
  className,
}: {
  label: string
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={cn("mt-12 first:mt-0", className)}>
      <SectionLabel>{label}</SectionLabel>
      <h2 className="mt-2 font-heading text-xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-4 text-muted-foreground [&_a]:font-medium [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline [&_strong]:font-medium [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  )
}

export function EvidenceGrid({
  items,
}: {
  items: { term: string; detail: ReactNode }[]
}) {
  return (
    <dl className="not-prose mt-6 grid gap-4 rounded-2xl border border-border bg-muted/40 p-5 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.term}>
          <dt className="text-sm font-semibold text-foreground">{item.term}</dt>
          <dd className="mt-1 text-sm text-muted-foreground">{item.detail}</dd>
        </div>
      ))}
    </dl>
  )
}

export function Figure({
  src,
  alt,
  caption,
  children,
}: {
  src?: string
  alt?: string
  caption?: ReactNode
  children?: ReactNode
}) {
  return (
    <figure className="not-prose mt-8">
      {children ??
        (src ? (
          <img
            src={src}
            alt={alt ?? ""}
            className="w-full rounded-2xl border border-border bg-muted/30"
            loading="lazy"
          />
        ) : null)}
      {caption ? <figcaption className="mt-2 text-sm text-muted-foreground">{caption}</figcaption> : null}
    </figure>
  )
}

export function QuoteList({ quotes }: { quotes: string[] }) {
  return (
    <ul className="mt-6 space-y-2 border-l-2 border-primary/30 pl-4 text-sm italic text-muted-foreground">
      {quotes.map((q) => (
        <li key={q}>{q}</li>
      ))}
    </ul>
  )
}
