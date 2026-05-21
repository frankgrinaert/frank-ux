import { useState } from "react"
import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowRight, Check, ExternalLink, Mail } from "lucide-react"
import { BLOK_PATH, CV_URL, LINKEDIN_URL } from "@/lib/constants"
import { copyEmailAddress } from "@/lib/email"

const BLOK_WORK = {
  path: BLOK_PATH,
  title: "Design system for Sitecore",
  summary:
    "After 6 acquisitions, Sitecore’s portfolio was fragmented. Blok became the shared foundation adopted by 12+ product teams, to ship faster with better UX.",
  image: "/work/blok/blok-site.png",
  imageAlt: "Blok design system — documentation site and component library",
  tags: ["Design systems", "Enterprise UX", "Platform"],
} as const

export function HomePage() {
  const [emailCopied, setEmailCopied] = useState(false)

  async function handleCopyEmail() {
    const ok = await copyEmailAddress()
    if (!ok) return
    setEmailCopied(true)
    window.setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <main className="min-h-svh bg-muted">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <h1 className="max-w-5xl font-heading text-3xl font-semibold sm:text-4xl lg:text-5xl">
          <span className="text-primary">Frank Grinaert,</span> product designer
          specialised in enterprise software, design systems, and platform UX
        </h1>
        <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
          I work at the intersection of design and engineering: building
          code-based systems, delivering with cross-functional teams, and
          driving coherence across complex product portfolios.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button
            size="lg"
            variant="outline"
            render={
              <a href={CV_URL} target="_blank" rel="noopener noreferrer" />
            }
          >
            <ExternalLink />
            CV
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <ExternalLink />
            LinkedIn
          </Button>
          <Button size="lg" variant="outline" onClick={handleCopyEmail}>
            {emailCopied ? <Check /> : <Mail />}
            {emailCopied ? "Email copied to clipboard" : "Email"}
          </Button>
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 lg:pb-28"
        aria-labelledby="work-heading"
      >
        <h2
          id="work-heading"
          className="font-heading text-2xl font-semibold tracking-tight text-primary sm:text-3xl"
        >
          Work
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          <li>
            <Link
              to={BLOK_WORK.path}
              className="group block rounded-4xl outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
            >
              <Card className="h-full transition-shadow group-hover:shadow-lg">
                <img
                  src={BLOK_WORK.image}
                  alt={BLOK_WORK.imageAlt}
                  className="aspect-video w-full object-cover object-top"
                />
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">
                    {BLOK_WORK.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {BLOK_WORK.summary}
                  </CardDescription>
                  <CardAction>
                    <ArrowRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-wrap gap-2">
                    {BLOK_WORK.tags.map((tag) => (
                      <li key={tag}>
                        <Badge variant="secondary">{tag}</Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  )
}
