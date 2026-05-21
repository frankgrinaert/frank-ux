import { CASE_SECTION_TITLES, type CaseSection } from "@/lib/case-study"

import { CaseSubsection } from "./case-subsection"

type CaseSectionProps = CaseSection

export function CaseSection({ id, subsections }: CaseSectionProps) {
  return (
    <section className="space-y-10" aria-labelledby={`case-section-${id}`}>
      <h2
        id={`case-section-${id}`}
        className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl"
      >
        {CASE_SECTION_TITLES[id]}
      </h2>
      <div className="space-y-12">
        {subsections.map((subsection) => (
          <CaseSubsection
            key={subsection.subtitle}
            subtitle={subsection.subtitle}
            content={subsection.content}
          />
        ))}
      </div>
    </section>
  )
}
