import type { ReactNode } from "react"

import { CASE_SECTION_TITLES, type CaseSectionId } from "@/lib/case-study"
import { cn } from "@/lib/utils"

type CaseSectionProps = {
  id: CaseSectionId
  children: ReactNode
}

export function CaseSection({ id, children }: CaseSectionProps) {
  const isReflections = id === "reflections"

  return (
    <section
      className={cn("relative", isReflections && "py-16 lg:py-20")}
      aria-labelledby={`case-section-${id}`}
    >
      {isReflections ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-1/2 z-0 h-full w-screen -translate-x-1/2 bg-muted"
        />
      ) : null}
      <div className="relative z-10 space-y-10">
        <h2
          id={`case-section-${id}`}
          className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl"
        >
          {CASE_SECTION_TITLES[id]}
        </h2>
        <div className="space-y-12">{children}</div>
      </div>
    </section>
  )
}
