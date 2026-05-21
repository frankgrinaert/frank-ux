import type { ReactNode } from "react"

import type { CaseStudyMeta } from "@/lib/case-study"

import { CaseHeader } from "./case-header"

type CaseStudyLayoutProps = Pick<
  CaseStudyMeta,
  "title" | "summary" | "tags"
> & {
  children: ReactNode
}

export function CaseStudyLayout({
  title,
  summary,
  tags,
  children,
}: CaseStudyLayoutProps) {
  return (
    <main className="min-h-svh">
      <CaseHeader title={title} summary={summary} tags={tags} />
      <article className="mx-auto max-w-6xl space-y-16 px-6 pt-16 pb-12 lg:space-y-20 lg:px-8 lg:pt-20 lg:pb-16">
        {children}
      </article>
    </main>
  )
}
