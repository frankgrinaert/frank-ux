import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const featured = [
  {
    href: "/work/wfp-design-system",
    title: "WFP Design System",
    meta: "UN World Food Programme · Design system · 2025–present",
  },
  {
    href: "/work/blok",
    title: "Blok Design System",
    meta: "Sitecore · Design system · 12+ products adopted",
  },
  {
    href: "/work/cloud-portal",
    title: "Sitecore Cloud Portal",
    meta: "Sitecore · Platform unification · User research",
  },
]

const more = [
  {
    href: "/work/cloud-portal-mobile",
    title: "Cloud Portal — mobile optimisation",
    meta: "Atomic responsive components across the platform",
  },
  {
    href: "/work/layout-system",
    title: "Revised web layout system",
    meta: "XMC Pages · Simpler authoring, faster responsive builds",
  },
  {
    href: "/work/ai-authoring",
    title: "AI authoring interaction design",
    meta: "Headless CMS · AI-assisted content workflows",
  },
  {
    href: "/work/ai-cmp-concept",
    title: "AI-first CMP concept",
    meta: "Discovery prototype for content planning",
  },
]

export function WorkPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
      <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary">
        ← Home
      </Link>
      <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-primary">Work</p>
      <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">All projects</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Enterprise design systems, platform unification, and product features — framed around business
        problems and what actually shipped.
      </p>

      <Card className="mt-14 border-primary/20 bg-primary/5">
        <CardHeader>
          <Badge className="w-fit bg-primary/10 text-primary">Featured</Badge>
          <CardTitle className="sr-only">Featured case studies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-0 pt-0">
          {featured.map((item, i) => (
            <div key={item.href}>
              {i > 0 ? <Separator className="my-5" /> : null}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <Link to={item.href} className="font-heading text-lg font-semibold hover:text-primary">
                    {item.title}
                  </Link>
                  <p className="mt-1 text-sm text-muted-foreground">{item.meta}</p>
                </div>
                <Link to={item.href} className="shrink-0 text-sm font-medium text-primary hover:underline">
                  Case study →
                </Link>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <h2 className="mt-14 text-sm font-semibold uppercase tracking-wider text-muted-foreground">More work</h2>
      <Card className="mt-6">
        <CardContent className="divide-y divide-border p-0">
          {more.map((item) => (
            <div
              key={item.href}
              className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <Link to={item.href} className="font-semibold hover:text-primary">
                  {item.title}
                </Link>
                <p className="mt-1 text-sm text-muted-foreground">{item.meta}</p>
              </div>
              <Link to={item.href} className="shrink-0 text-sm font-medium text-primary hover:underline">
                Case study →
              </Link>
            </div>
          ))}
        </CardContent>
      </Card>
    </main>
  )
}
