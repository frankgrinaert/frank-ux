import {
  CaseSection,
  CaseStudyShell,
  EvidenceGrid,
  Figure,
  QuoteList,
} from "@/components/case-study/case-study-shell"

export function BlokPage() {
  return (
    <CaseStudyShell
      title="Blok Design System"
      summary="After five acquisitions, Sitecore’s portfolio was a patchwork of UIs. Blok became the shared foundation — code, docs, and standards — that 12+ product teams adopted to ship faster with better UX."
      tags={["Sitecore", "Design system", "React · NPM"]}
      accentTag="Principal Designer · DS Lead"
      next={{ href: "/work/cloud-portal", label: "Sitecore Cloud Portal" }}
    >
      <CaseSection label="1 · Business problem" title="Fragmentation was slowing the whole company">
        <p>
          Sitecore had acquired multiple products with different visual languages, tech stacks, and quality
          bars. Customers experienced a disjointed platform; internally, every team paid a tax on custom UI
          and repeated accessibility mistakes.
        </p>
        <p>
          Leadership needed <strong>cohesive UX at scale</strong> and <strong>engineering efficiency</strong>{" "}
          — not another PDF style guide. The design system had to be the lever: one implementation path,
          one quality baseline for usability, accessibility, and responsiveness.
        </p>
        <EvidenceGrid
          items={[
            {
              term: "Primary metric",
              detail: <strong className="text-foreground">12+ products</strong>,
            },
            {
              term: "Secondary signal",
              detail: (
                <>
                  Product development <strong className="text-foreground">accelerated</strong> — less UI
                  rework, faster feature delivery
                </>
              ),
            },
            {
              term: "My role",
              detail: "Owner from reboot through evangelisation, migration support, and hands-on code",
            },
          ]}
        />
        <Figure
          src="/images/image-20241103-152044.png"
          alt="Blok design system marketing site"
          caption={
            <>
              <a href="https://blok.sitecore.com/" target="_blank" rel="noopener noreferrer">
                blok.sitecore.com
              </a>{" "}
              — public design system site
            </>
          }
        />
      </CaseSection>

      <CaseSection label="2 · Product gap" title="The old system was not adopted">
        <p>
          I inherited a fledgling system: a thin Figma library and a handful of code components, no dedicated
          team. Developer interviews were clear — <strong>the tools were hard to use</strong>, so teams
          skipped them. We were not getting quality or speed gains on paper or in production.
        </p>
      </CaseSection>

      <CaseSection label="3 · Approach" title="Reboot, build, ship in code">
        <p>
          I rebooted the programme with volunteer developers from across R&D, then learned enough React to
          finish the foundation myself. Blok shipped as a React library on NPM, documentation site, and
          standards engineering could enforce in review.
        </p>
        <p>
          Launches included R&amp;D Town Hall and a user conference —{" "}
          <a href="https://youtu.be/0TZIF8FvsNM" target="_blank" rel="noopener noreferrer">
            talk on YouTube
          </a>
          ,{" "}
          <a
            href="https://www.figma.com/proto/TKdfHvEfinvG1mdhr7AtpD/Presentations%3A-Design-System?page-id=2055%3A1211&node-id=2055-1273&node-type=canvas&viewport=187%2C427%2C0.09&t=TnL7t7WUKhUJcYDq-8&scaling=scale-down&content-scaling=fixed&hide-ui=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            slides
          </a>
          . Roll-out meant pairing with PMs and engineers on migration — not throwing Figma over the wall.
        </p>
        <Figure
          src="/images/Blok-one-year-later-Product-Design-Confluence-11-03-2024_04_13_PM.png"
          alt="Internal blog post marking Blok roll-out"
          caption="Internal milestone — one year after launch"
        />
      </CaseSection>

      <CaseSection label="4 · Outcomes" title="What changed for the business">
        <p>
          Blok became the <strong>shared language between Design and Engineering</strong>. The measurable
          headline is adoption across <strong>12+ teams</strong>. Engineers reported faster delivery with
          cleaner code and fewer UI defects.
        </p>
        <QuoteList
          quotes={[
            "“It saved us tons of time.”",
            "“We were able to close a lot of QA tickets.”",
            "“We can focus more on building functionality and providing value.”",
            "“It's cool how quickly you can get results.”",
            "“Much cleaner and more maintainable code.”",
          ]}
        />
      </CaseSection>

      <CaseSection label="5 · Reflection" title="Zero-to-one without a budget line">
        <p>
          I proved I could run a zero-to-one initiative by generating internal momentum and attracting
          contributors. I solidified my design-engineering practice: React, NPM publishing, and the belief
          that <strong>design systems are production systems</strong>, not decoration.
        </p>
      </CaseSection>
    </CaseStudyShell>
  )
}
