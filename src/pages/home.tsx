import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  BLOK_PATH,
  CLOUD_PORTAL_PATH,
  CLOUD_PORTAL_REDESIGN_PATH,
  WFP_COLOUR_SYSTEM_URL,
  WFP_DESIGN_SYSTEM_PATH,
} from "@/lib/constants"

type WorkItem = {
  title: string
  summary: string
  href: string
  image: string
  imageAlt: string
  external?: boolean
  tags?: readonly string[]
}

const WORK_ITEMS: WorkItem[] = [
  {
    href: BLOK_PATH,
    title: "Design system for Sitecore",
    summary:
      "After 6 acquisitions, Sitecore’s portfolio was fragmented. Blok became the shared foundation adopted by 12+ product teams, to ship faster with better UX.",
    image: "/work/blok-thumb.png",
    imageAlt: "Fragmented product portfolio after acquisitions",
    tags: ["Design systems", "Enterprise UX", "Platform"],
  },
  {
    href: WFP_DESIGN_SYSTEM_PATH,
    title: "WFP Design System",
    summary:
      "Rebooted WFP’s corporate design system so IT solutions ship accessible UI faster — code-first, AI-ready, built for adoption across external dev teams.",
    image: "/work/wfp-ds-thumb.png",
    imageAlt: "WFP Design System — accessible colour tokens",
    tags: ["Design systems", "Design engineering", "Accessibility"],
  },
  {
    href: CLOUD_PORTAL_PATH,
    title: "Sitecore Cloud Portal & App\u00A0switcher",
    summary:
      "Designed and helped build the single entry point and app\u00A0switcher for Sitecore’s multi-product cloud suite — one front door into a fragmented portfolio.",
    image: "/work/portal-hero.png",
    imageAlt: "Sitecore Cloud Portal — unified entry to the suite",
    tags: ["Platform UX", "Enterprise UX"],
  },
  {
    href: CLOUD_PORTAL_REDESIGN_PATH,
    title: "Cloud Portal homepage redesign",
    summary:
      "Used early-access research to challenge homepage bloat on Sitecore’s Cloud Portal, secure PM buy-in, and ship a portal scoped to jobs-to-be-done.",
    image: "/work/portal-bloated.png",
    imageAlt:
      "Early Cloud Portal homepage before research-driven simplification",
    tags: ["User research", "Platform UX", "Enterprise UX"],
  },
  {
    href: WFP_COLOUR_SYSTEM_URL,
    external: true,
    title: "Accessible colour system",
    summary:
      "Enabled accessible contrast by default, without one-off fixes per screen.",
    image: "/work/a11y-colours-thumb.png",
    imageAlt: "WFP design system — accessible colour system",
    tags: ["Design systems", "Accessibility"],
  },
]

const workCardClassName =
  "group block rounded-4xl outline-none focus-visible:ring-3 focus-visible:ring-ring/30"

function WorkCard({ item }: { item: WorkItem }) {
  const card = (
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
          <ul className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <li key={tag}>
                <Badge variant="secondary">{tag}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      ) : null}
    </Card>
  )

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={workCardClassName}
      >
        {card}
      </a>
    )
  }

  return (
    <Link to={item.href} className={workCardClassName}>
      {card}
    </Link>
  )
}

export function HomePage() {
  return (
    <main className="min-h-svh bg-muted">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <h1 className="max-w-5xl font-heading text-3xl font-semibold sm:text-4xl lg:text-5xl">
          I’m <span className="text-primary">Frank,</span> a product designer
          specialised in enterprise software, design systems and platform UX
        </h1>
        <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
          I work at the intersection of design and engineering: building
          code-based systems, delivering with cross-functional teams, and
          driving coherence across complex product portfolios.
        </p>
      </section>

      <section
        className="bg-background py-20 lg:py-28"
        aria-labelledby="work-heading"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2
            id="work-heading"
            className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Highlighted work
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {WORK_ITEMS.map((item) => (
              <li key={item.href}>
                <WorkCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
