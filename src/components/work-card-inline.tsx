import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { getWorkItem, type WorkItemId } from "@/content/work/case-meta"
import { cn } from "@/lib/utils"

const cardClassName =
  "grid w-full grid-cols-[7rem_minmax(0,1fr)] items-start gap-4 rounded-4xl bg-card p-4 text-card-foreground shadow-md ring-1 ring-foreground/5 transition-shadow hover:shadow-lg sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-5 sm:p-5 dark:ring-foreground/10"

const linkClassName =
  "block rounded-4xl outline-none focus-visible:ring-3 focus-visible:ring-ring/30"

type WorkCardInlineProps = {
  id: WorkItemId
}

/** Horizontal work card for embedding in case study prose. */
export function WorkCardInline({ id }: WorkCardInlineProps) {
  const item = getWorkItem(id)

  const content = (
    <>
      <img
        src={item.image}
        alt={item.imageAlt}
        width={128}
        height={128}
        className="block h-28 w-28 rounded-xl object-cover object-center sm:h-32 sm:w-32"
      />
      <div className="min-w-0">
        <p className="m-0 font-heading text-base font-semibold leading-snug text-foreground sm:text-lg">
          {item.title}
        </p>
        <p className="m-0 mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {item.summary}
        </p>
        {item.tags && item.tags.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="h-6 px-2.5 text-xs font-normal"
              >
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}
      </div>
    </>
  )

  if (item.external) {
    return (
      <div className="work-card-embed my-6 w-full">
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(linkClassName, cardClassName)}
        >
          {content}
        </a>
      </div>
    )
  }

  return (
    <div className="work-card-embed my-6 w-full">
      <Link to={item.href} className={cn(linkClassName, cardClassName)}>
        {content}
      </Link>
    </div>
  )
}
