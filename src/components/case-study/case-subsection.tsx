import type { CaseSubsection as CaseSubsectionData } from "@/lib/case-study"

type CaseSubsectionProps = CaseSubsectionData

export function CaseSubsection({ subtitle, content }: CaseSubsectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
        {subtitle}
      </h3>
      <div className="case-content max-w-[65ch] space-y-4 text-base leading-relaxed text-foreground [&_iframe]:aspect-video [&_iframe]:w-full [&_iframe]:rounded-lg [&_iframe]:border [&_iframe]:border-border [&_img]:w-full [&_img]:rounded-lg">
        {content}
      </div>
    </div>
  )
}
