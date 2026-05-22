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
import type { WorkItem } from "@/lib/work-items"
import { cn } from "@/lib/utils"

const linkClassName =
  "group block rounded-4xl outline-none focus-visible:ring-3 focus-visible:ring-ring/30"

type WorkCardProps = {
  item: WorkItem
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
          <Badge variant="secondary" className="font-normal">
            {tag}
          </Badge>
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

export function WorkCard({ item }: WorkCardProps) {
  return <WorkCardVertical item={item} />
}
