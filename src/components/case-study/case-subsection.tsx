import type { ReactNode } from "react"

type CaseSubsectionProps = {
  title: string
  children: ReactNode
}

export function CaseSubsection({ title, children }: CaseSubsectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h3>
      <div className="case-content max-w-[65ch] space-y-4 text-base leading-relaxed text-foreground [&_a]:text-primary [&_a]:underline-offset-4 [&_a]:hover:underline [&_iframe]:aspect-video [&_iframe]:w-full [&_iframe]:rounded-lg [&_iframe]:border [&_iframe]:border-border [&_img]:w-full [&_img]:rounded-lg [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-muted-foreground">
        {children}
      </div>
    </div>
  )
}
