import type { ReactNode } from "react"

import { CASE_SECTION_TITLES, type CaseSectionId } from "@/lib/case-study"

type CaseSectionProps = {
  id: CaseSectionId
  children: ReactNode
}

export function CaseSection({ id, children }: CaseSectionProps) {
  return (
    <section className="space-y-10" aria-labelledby={`case-section-${id}`}>
      <h2
        id={`case-section-${id}`}
        className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl"
      >
        {CASE_SECTION_TITLES[id]}
      </h2>
      <div className="space-y-12">{children}</div>
    </section>
  )
}
