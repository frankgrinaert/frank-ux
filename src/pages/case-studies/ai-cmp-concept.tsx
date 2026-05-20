import { Link } from "react-router-dom"

import { CaseSection, CaseStudyShell } from "@/components/case-study/case-study-shell"

export function AiCmpConceptPage() {
  return (
    <CaseStudyShell
      title="AI-first CMP concept"
      summary="Exploratory prototype for AI-powered content planning — alignment artefact before committing engineering orgs."
      tags={["Sitecore", "AI", "Discovery"]}
    >
      <CaseSection label="1 · Business problem" title="From AI features to AI-shaped products">
        <p>
          Incremental AI buttons inside legacy workflows may not change how teams plan content. Leadership
          needed a tangible vision for a <strong>net-new experience</strong> to stress-test strategy.
        </p>
      </CaseSection>

      <CaseSection label="2 · Approach" title="Demo to facilitate decisions">
        <p>
          <a
            href="https://www.figma.com/proto/9a94HJM5ACUh7nurIkICNO?scaling=scale-down-width"
            target="_blank"
            rel="noopener noreferrer"
          >
            AI-first CMP prototype (Figma) →
          </a>
        </p>
      </CaseSection>

      <CaseSection label="3 · Outcomes" title="Clarity before build">
        <p>
          The deliverable was alignment — avoiding expensive wrong bets. Related:{" "}
          <Link to="/work/ai-authoring">AI authoring in headless CMS →</Link>
        </p>
      </CaseSection>
    </CaseStudyShell>
  )
}
