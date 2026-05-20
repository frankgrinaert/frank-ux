import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type ProjectCardProps = {
  to: string
  eyebrow: string
  title: string
  description: string
  imageSrc?: string
  placeholder?: string
  featured?: boolean
}

export function ProjectCard({
  to,
  eyebrow,
  title,
  description,
  imageSrc,
  placeholder,
  featured,
}: ProjectCardProps) {
  return (
    <Link to={to} className="group block h-full">
      <Card
        className={cn(
          "h-full transition hover:border-primary/30 hover:shadow-lg",
          featured && "ring-primary/20"
        )}
      >
        <div className="aspect-[16/10] overflow-hidden bg-muted">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt=""
              className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-muted">
              <span className="text-sm font-medium text-primary/60">{placeholder}</span>
            </div>
          )}
        </div>
        <CardHeader className="pb-2">
          <Badge variant="outline" className="w-fit text-primary">
            {eyebrow}
          </Badge>
          <CardTitle className="text-lg group-hover:text-primary">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="pt-0">
          <span className="text-sm font-medium text-primary">Read case study →</span>
        </CardFooter>
      </Card>
    </Link>
  )
}
