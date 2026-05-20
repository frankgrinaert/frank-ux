import { Link } from "react-router-dom"

import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CV_URL, LINKEDIN_URL } from "@/lib/constants"
import { getEmailAddress } from "@/lib/email"

export function HomePage() {
  const email = getEmailAddress()

  return (
    <main>
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <h1 className="max-w-5xl font-heading text-5xl font-semibold tracking-tight sm:text-5xl lg:text-[4rem] lg:leading-[1.15]">
            <span className="text-primary">Frank Grinaert,</span> product
            designer specialised in enterprise software, design systems, and
            platform UX
          </h1>
          <p className="mt-6 max-w-[60ch] text-xl leading-relaxed text-muted-foreground">
            I work at the intersection of design and engineering: building
            code-based systems, delivering with cross-functional teams, and
            driving coherence across complex product portfolios.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" render={<Link to="/work" />}>
              View work
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={
                <a href={CV_URL} target="_blank" rel="noopener noreferrer" />
              }
            >
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
              LinkedIn
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<a href={`mailto:${email}`} />}
            >
              Email
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-wider text-primary uppercase">
              Selected work
            </p>
            <h2 className="mt-2 font-heading text-2xl font-semibold">
              Case studies
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Each story starts with the business problem, then traces how
              product and design decisions connected to what shipped.
            </p>
          </div>
          <Link
            to="/work"
            className="text-sm font-medium text-primary hover:underline"
          >
            All projects →
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <ProjectCard
            to="/work/wfp-design-system"
            eyebrow="Hero · Design system"
            title="WFP Design System"
            description="Rebuilt the UN World Food Programme’s corporate design system as code-first and AI-ready — because adoption across dozens of IT solutions is the real metric."
            placeholder="WFP Design System"
            featured
          />
          <ProjectCard
            to="/work/blok"
            eyebrow="Hero · Design system"
            title="Blok @ Sitecore"
            description="Zero-to-one design system after five acquisitions. Onboarded 12+ product teams and became the shared language between design and engineering."
            imageSrc="/images/image-20241103-152044.png"
            featured
          />
          <ProjectCard
            to="/work/cloud-portal"
            eyebrow="Hero · Platform UX"
            title="Sitecore Cloud Portal"
            description="One front door for a fragmented SaaS portfolio. Research proved the first version failed users; we simplified and shipped what customers actually needed."
            imageSrc="/images/image-20241103-152024.png"
            featured
          />
        </div>
      </section>

      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="text-xs font-semibold tracking-wider text-primary uppercase">
            How I work
          </p>
          <h2 className="mt-2 font-heading text-2xl font-semibold">
            Design engineering, not handoffs
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            I sit closest to problems where design must survive contact with
            production: design tokens in code, component APIs, migration plans,
            and the operational glue between design, product, and engineering.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>What I optimise for</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">
                    Adoption over artefacts
                  </strong>{" "}
                  — a design system only exists when product teams ship with it.
                </p>
                <p>
                  <strong className="text-foreground">
                    Velocity with quality
                  </strong>{" "}
                  — reusable components so engineering spends less time
                  reinventing UI.
                </p>
                <p>
                  <strong className="text-foreground">
                    Business context first
                  </strong>{" "}
                  — I want to know why a project was prioritised before I open
                  Figma.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What I care about</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  I do my best work with people who are excellent at what they
                  do and generous with what they know. I value craft, curiosity,
                  humility, and transparency.
                </p>
                <p>
                  Continuous learning matters to me, as a designer and as a
                  lead. I mentor, run communities of practice, and treat design
                  ops as a product: tooling and rituals that help everyone move
                  faster without lowering the bar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
