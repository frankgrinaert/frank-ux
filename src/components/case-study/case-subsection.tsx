import type { ReactNode } from "react"

type CaseSubsectionProps = {
  title: string
  children: ReactNode
}

export function CaseSubsection({ title, children }: CaseSubsectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
        {title}
      </h3>
      <div className="case-content max-w-[65ch] space-y-4 text-base leading-relaxed text-foreground [&_.work-card-embed_a]:text-inherit [&_.work-card-embed_a]:no-underline [&_.work-card-embed_a]:hover:no-underline [&_.work-card-embed_img]:m-0 [&_.work-card-embed_img]:block [&_.work-card-embed_img]:h-28 [&_.work-card-embed_img]:w-28 [&_.work-card-embed_img]:max-w-none [&_.work-card-embed_img]:rounded-xl sm:[&_.work-card-embed_img]:h-32 sm:[&_.work-card-embed_img]:w-32 [&_.work-card-embed_p]:text-inherit [&_a]:text-primary [&_a]:underline-offset-4 [&_a]:hover:underline [&_iframe]:aspect-video [&_iframe]:w-full [&_iframe]:rounded-lg [&_iframe]:border [&_iframe]:border-border [&_img]:w-full [&_img]:rounded-lg [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-muted-foreground">
        {children}
      </div>
    </div>
  )
}
