import { Link } from "react-router-dom"

import { CaseSection, CaseStudyShell } from "@/components/case-study/case-study-shell"

export function AiAuthoringPage() {
  return (
    <CaseStudyShell
      title="AI authoring interaction design"
      summary="Brought AI-assisted workflows into Sitecore’s headless CMS — where authors already work — instead of bolting on a disconnected feature."
      tags={["Sitecore", "AI", "CMS"]}
    >
      <CaseSection label="1 · Business problem" title="AI as table stakes for content platforms">
        <p>
          Buyers expect generative assistance in content tools. Sitecore needed credible AI authoring in
          production — flows that respect governance, brand, and component models.
        </p>
      </CaseSection>

      <CaseSection label="2 · Approach" title="Prototype in context">
        <p>
          I designed AI-assisted authoring inside realistic CMS screens — tied to components and tasks authors
          already perform.
        </p>
        <p>
          <a
            href="https://www.figma.com/proto/shnixDWk6C97wPRQ7Ntxog?scaling=scale-down-width&page-id=2215%3A1150"
            target="_blank"
            rel="noopener noreferrer"
          >
            AI authoring prototype (Figma) →
          </a>
        </p>
      </CaseSection>

      <CaseSection label="3 · Outcomes" title="Shipped direction for product">
        <p>
          Delivered an interaction model PM and Engineering could estimate and build. See also{" "}
          <Link to="/work/ai-cmp-concept">AI-first CMP concept</Link>.
        </p>
      </CaseSection>
    </CaseStudyShell>
  )
}
