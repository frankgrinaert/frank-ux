import type { CaseStudy } from "@/lib/case-study"

import { CaseHeader } from "./case-header"
import { CaseSection } from "./case-section"

type CasePageProps = {
  study: CaseStudy
}

export function CasePage({ study }: CasePageProps) {
  return (
    <main className="min-h-svh bg-muted">
      <CaseHeader
        title={study.title}
        summary={study.summary}
        tags={study.tags}
      />

      <article className="mx-auto max-w-6xl space-y-16 px-6 pt-16 pb-12 lg:space-y-20 lg:px-8 lg:pt-20 lg:pb-16">
        {study.sections.map((section) => (
          <CaseSection
            key={section.id}
            id={section.id}
            subsections={section.subsections}
          />
        ))}
      </article>
    </main>
  )
}
