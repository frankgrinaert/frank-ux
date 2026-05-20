import {
  CaseSection,
  CaseStudyShell,
  EvidenceGrid,
  Figure,
} from "@/components/case-study/case-study-shell"

export function WfpDesignSystemPage() {
  return (
    <CaseStudyShell
      title="WFP Design System"
      summary="Rebuilt the UN World Food Programme’s corporate design system so dozens of IT solutions can ship consistent, accessible UI — with a developer experience that actually drives adoption."
      tags={["World Food Programme", "Design system", "Design engineering"]}
      accentTag="2025–present"
      next={{ href: "/work/blok", label: "Blok @ Sitecore" }}
    >
      <CaseSection label="1 · Business problem" title="Why this project exists">
        <p>
          WFP operates a large portfolio of internal IT solutions — each with its own interfaces, teams,
          and delivery pressure. Without a design system that teams <em>want</em> to use, every product
          reinvents UI, accessibility suffers, and engineering time disappears into one-off styling.
        </p>
        <p>
          The previous system failed the adoption test: audits showed it did not give developers the
          experience they needed, and the technology stack was not maintainable or future-proof enough
          for where WFP’s architecture is heading — including AI-assisted workflows.
        </p>
        <p>
          The business stake is straightforward:{" "}
          <strong>one credible foundation for UX quality and delivery speed across the IT portfolio</strong>
          , not another Figma library that only designers see.
        </p>
        <EvidenceGrid
          items={[
            {
              term: "What success looks like",
              detail:
                "Interface designers and front-end developers default to the system; product managers can find guidance without chasing designers.",
            },
            {
              term: "My role",
              detail:
                "Design System Lead — evolution of the system, UX coordination across solutions, DesignersHub community, mentoring.",
            },
          ]}
        />
      </CaseSection>

      <CaseSection label="2 · Product gap" title="What was broken before design">
        <p>
          Developers could not adopt the old system efficiently. Documentation and components did not match
          how teams build today. Solution Architects and I aligned on a hard call:{" "}
          <strong>start fresh</strong> rather than patch a foundation that would keep leaking time.
        </p>
        <p>
          The product gap was both <strong>experience</strong> (hard to use, inconsistent outcomes) and{" "}
          <strong>platform</strong> (not ready for code-first, AI-ready delivery).
        </p>
      </CaseSection>

      <CaseSection label="3 · Approach" title="Code-first, AI-ready foundation">
        <p>
          Since late 2025 I have been leading development of a new system — documented publicly at{" "}
          <a href="https://designsystem.wfp.org/" target="_blank" rel="noopener noreferrer">
            designsystem.wfp.org
          </a>{" "}
          — with accessible patterns, tokens, and components aimed at real implementation, not slide decks.
        </p>
        <ul>
          <li>Partnering with Solution Architects on technical direction</li>
          <li>Full revision of the colour system for accessible contrast by default</li>
          <li>Internal socialisation — aligning product, design, and engineering communities</li>
          <li>DesignersHub — design ops, feedback, and showcasing work across WFP</li>
        </ul>
        <Figure>
          <a
            href="https://designsystem.wfp.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center rounded-2xl border border-border bg-muted/40 p-8 hover:border-primary/30"
          >
            <span className="font-medium text-primary">designsystem.wfp.org →</span>
            <span className="mt-2 text-xs text-muted-foreground">Live documentation (actively in development)</span>
          </a>
        </Figure>
        <p>
          <a
            href="https://www.figma.com/proto/suBu11QCvNmOqmQiiKEcIl?scaling=scale-down-width"
            target="_blank"
            rel="noopener noreferrer"
          >
            Colour system prototype (Figma) →
          </a>
        </p>
        <p>
          <a
            href="https://www.figma.com/proto/XjIDpiEMK667J8VGvrrr9y?scaling=scale-down-width"
            target="_blank"
            rel="noopener noreferrer"
          >
            Initiative presentation (Figma) →
          </a>
        </p>
      </CaseSection>

      <CaseSection label="4 · Outcomes" title="Evidence so far">
        <p>
          This programme is in active delivery. The outcome metric I am optimising for is the same one I
          used at Sitecore: <strong>number of products and teams actually building on the system</strong>,
          plus observable acceleration of product development once components and docs are trusted.
        </p>
        <EvidenceGrid
          items={[
            {
              term: "Adoption (in progress)",
              detail:
                "Rolling the system across WFP’s IT solution portfolio — designers and developers held to shared guidelines.",
            },
            { term: "Velocity", detail: "Less bespoke UI work per release, faster path from spec to accessible production UI." },
            {
              term: "Organisational",
              detail: "DesignersHub and cross-team rituals to keep design ops visible — not a side project in one squad.",
            },
          ]}
        />
      </CaseSection>

      <CaseSection label="5 · Reflection" title="Design engineering at humanitarian scale">
        <p>
          The lesson from Sitecore still applies:{" "}
          <strong>you do not have a design system unless you have reusable code and documentation developers trust.</strong>{" "}
          At WFP the stakes are different — public mission, global teams — but the operating model is the
          same: stay close to architects, ship incrementally, measure adoption not deliverables.
        </p>
      </CaseSection>
    </CaseStudyShell>
  )
}
