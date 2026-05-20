import { CaseSection, CaseStudyShell } from "@/components/case-study/case-study-shell"

export function LayoutSystemPage() {
  return (
    <CaseStudyShell
      title="Revised web layout system"
      summary="Replaced an over-engineered column grid in XMC Pages with a simpler layout model — easier authoring, faster responsive builds."
      tags={["Sitecore", "XMC Pages", "Feature design"]}
    >
      <CaseSection label="1 · Business problem" title="Complexity was blocking content teams">
        <p>
          XMC Pages’ legacy grid was hard to learn and too rigid — responsive authoring was tedious. That
          friction slows campaigns and increases training cost.
        </p>
      </CaseSection>

      <CaseSection label="2 · Approach" title="New layout model + clear specs">
        <p>
          I designed a simplified system and presented implementation-ready specs to the squad.
        </p>
        <p>
          <a
            href="https://www.figma.com/proto/2sssoMkbk2KReV7swmi94q?node-id=2215-1151&scaling=scale-down-width"
            target="_blank"
            rel="noopener noreferrer"
          >
            Layout system prototype (Figma) →
          </a>
        </p>
      </CaseSection>

      <CaseSection label="3 · Outcomes" title="Expected impact">
        <p>
          Reduced authoring time for responsive pages, fewer “why can’t I build this layout?” escalations, and
          a cleaner contract for engineering — measured in <strong>velocity and author satisfaction</strong>.
        </p>
      </CaseSection>
    </CaseStudyShell>
  )
}
