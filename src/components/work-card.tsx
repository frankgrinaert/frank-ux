import type { ReactNode } from "react"
import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getWorkItem, type WorkItem, type WorkItemId } from "@/lib/work-items"
import { cn } from "@/lib/utils"

const linkClassName =
  "group block rounded-4xl outline-none focus-visible:ring-3 focus-visible:ring-ring/30"

type WorkCardProps = {
  item: WorkItem
  layout?: "vertical" | "horizontal"
  className?: string
}

function WorkCardLink({
  item,
  className,
  children,
}: {
  item: WorkItem
  className?: string
  children: ReactNode
}) {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(linkClassName, className)}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={item.href} className={cn(linkClassName, className)}>
      {children}
    </Link>
  )
}

function WorkCardTags({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag}>
          <Badge variant="secondary">{tag}</Badge>
        </li>
      ))}
    </ul>
  )
}

function WorkCardVertical({ item }: { item: WorkItem }) {
  return (
    <WorkCardLink item={item} className="h-full">
      <Card className="h-full transition-shadow group-hover:shadow-lg">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="aspect-video w-full object-cover object-top"
        />
        <CardHeader>
          <CardTitle className="text-lg font-semibold sm:text-xl">
            {item.title}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {item.summary}
          </CardDescription>
        </CardHeader>
        {item.tags && item.tags.length > 0 ? (
          <CardContent>
            <WorkCardTags tags={item.tags} />
          </CardContent>
        ) : null}
      </Card>
    </WorkCardLink>
  )
}

function WorkCardHorizontal({ item }: { item: WorkItem }) {
  return (
    <WorkCardLink item={item} className="w-full">
      <article className="flex w-full flex-row items-stretch overflow-hidden rounded-4xl bg-card text-card-foreground shadow-md ring-1 ring-foreground/5 transition-shadow group-hover:shadow-lg dark:ring-foreground/10">
        <div className="w-28 shrink-0 sm:w-36">
          <img
            src={item.image}
            alt={item.imageAlt}
            className="work-card-embed__image size-full object-cover object-center"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 p-4 sm:gap-2.5 sm:p-5">
          <h4 className="font-heading text-base font-semibold leading-snug sm:text-lg">
            {item.title}
          </h4>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {item.summary}
          </p>
          {item.tags && item.tags.length > 0 ? (
            <WorkCardTags tags={item.tags} />
          ) : null}
        </div>
      </article>
    </WorkCardLink>
  )
}

export function WorkCard({ item, layout = "vertical" }: WorkCardProps) {
  if (layout === "horizontal") {
    return <WorkCardHorizontal item={item} />
  }
  return <WorkCardVertical item={item} />
}

type WorkCardEmbedProps = {
  id: WorkItemId
}

/** Horizontal work card for embedding inside case study prose. */
export function WorkCardEmbed({ id }: WorkCardEmbedProps) {
  const item = getWorkItem(id)
  return (
    <div className="work-card-embed not-prose my-6 w-full max-w-none">
      <WorkCard item={item} layout="horizontal" />
    </div>
  )
}
