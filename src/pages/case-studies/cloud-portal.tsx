import { Link } from "react-router-dom"

import {
  CaseSection,
  CaseStudyShell,
  EvidenceGrid,
  Figure,
} from "@/components/case-study/case-study-shell"

export function CloudPortalPage() {
  return (
    <CaseStudyShell
      title="Sitecore Cloud Portal"
      summary="Designed and helped build the single entry point for Sitecore’s multi-product cloud suite — then used research to cut through homepage bloat and deliver what customers actually needed."
      tags={["Sitecore", "Platform UX", "User research"]}
      accentTag="Design Lead"
      next={{ href: "/work/cloud-portal-mobile", label: "Cloud Portal mobile" }}
    >
      <CaseSection label="1 · Business problem" title="Customers could not navigate the platform we sold">
        <p>
          After acquisitions, Sitecore’s value was a <strong>suite</strong> — but the experience was separate
          products. Customers needed one place to enter the ecosystem and switch between apps.
        </p>
        <p>
          Without that layer, expansion and retention suffer. The Cloud Portal was the strategic answer — a{" "}
          <strong>unified front door</strong> for the DXP.
        </p>
        <Figure src="/images/image-20241103-152024.png" alt="Sitecore Cloud Portal homepage" caption="Cloud Portal — unified entry to the suite" />
      </CaseSection>

      <CaseSection label="2 · Product gap" title="Stakeholders wanted everything on the homepage">
        <p>
          Early versions fell into “homepage syndrome.” My interview programme showed users felt{" "}
          <strong>disoriented and overloaded</strong>. The portal failed its job as the operating layer for
          the suite.
        </p>
      </CaseSection>

      <CaseSection label="3 · Approach" title="Secure the mandate, then simplify with evidence">
        <p>
          I pitched the CPO with a{" "}
          <a
            href="https://xd.adobe.com/view/e0049868-f3ea-42c6-8794-59fa8af7f184-b557/screen/392fe56a-aef2-45a9-a10d-c9e37b52d3fa"
            target="_blank"
            rel="noopener noreferrer"
          >
            rapid concept
          </a>{" "}
          and became Design Lead. Research secured PM buy-in; I paired with Engineering on the fix.
        </p>
        <p>
          <a href="https://www.figma.com/proto/t0NCQfaEOmsZQrmmjCGZaO?scaling=scale-down-width" target="_blank" rel="noopener noreferrer">
            Research readout (Figma) →
          </a>
        </p>
        <Figure
          src="/images/image-20241103-141733.png"
          alt="Revised Cloud Portal"
          caption="Shipped portal after research-driven simplification"
        />
      </CaseSection>

      <CaseSection label="4 · Outcomes" title="What we shipped">
        <p>
          A live{" "}
          <a href="https://portal.sitecorecloud.io/" target="_blank" rel="noopener noreferrer">
            Cloud Portal
          </a>{" "}
          customers use as the suite entry — aligned with Blok for consistency.
        </p>
        <EvidenceGrid
          items={[
            { term: "Business", detail: "Platform story matches product reality — one brand, one door." },
            { term: "Product", detail: "Homepage scope tied to jobs-to-be-done, not stakeholder count." },
            { term: "Process", detail: "Research used to challenge leadership decisions — not only validate them." },
          ]}
        />
      </CaseSection>

      <CaseSection label="5 · Reflection" title="Stakeholder management as a design skill">
        <p>
          I learned to make ambiguous platform work tangible through prototypes, and to use customer evidence
          when opinions diverge. See also{" "}
          <Link to="/work/cloud-portal-mobile">mobile optimisation</Link> for design-system-driven velocity.
        </p>
      </CaseSection>
    </CaseStudyShell>
  )
}
