import { Link } from "react-router-dom"

import { CaseSection, CaseStudyShell, Figure } from "@/components/case-study/case-study-shell"

export function CloudPortalMobilePage() {
  return (
    <CaseStudyShell
      title="Cloud Portal — mobile optimisation"
      summary="Made the portal usable on small screens by fixing components in the design system — not redrawing every screen one by one."
      tags={["Sitecore", "Responsive design", "Design specs"]}
    >
      <CaseSection label="1 · Business problem" title="Mobile usage was real; the UI was not">
        <p>
          Enterprise buyers still open portals on phones. A desktop-only Cloud Portal undermined the platform
          promise. Screen-by-screen redesign would never keep pace — the business needed{" "}
          <strong>leverage</strong>: fix once in the system, improve many surfaces.
        </p>
        <Figure src="/images/image-20241103-173627.png" alt="Cloud Portal on mobile" caption="Portal usable on mobile after component-level work" />
      </CaseSection>

      <CaseSection label="2 · Approach" title="Atomic responsiveness in Blok">
        <p>
          I specified responsive behaviour per <strong>component</strong> — homepage layout, tile grids,
          banners — so engineering could roll fixes across Blok consumers.
        </p>
        <div className="not-prose grid gap-4 sm:grid-cols-2">
          <Figure src="/images/image-20241103-185248.png" alt="Homepage layout spec" />
          <Figure src="/images/image-20241103-184630.png" alt="Homepage layout mobile" />
        </div>
        <div className="not-prose grid gap-4 sm:grid-cols-2">
          <Figure src="/images/image-20241103-154823.png" alt="Tiles grid desktop" />
          <Figure src="/images/image-20241103-185605.png" alt="Tiles grid spec" />
        </div>
        <figure className="not-prose mt-8">
          <video controls preload="metadata" className="w-full rounded-2xl border border-border">
            <source src="/images/Portal_homepage_tiles_20221126.webm" type="video/webm" />
          </video>
          <figcaption className="mt-2 text-sm text-muted-foreground">Interaction spec — homepage tiles</figcaption>
        </figure>
        <div className="not-prose grid gap-4 sm:grid-cols-2">
          <Figure src="/images/image-20241103-155712.png" alt="Banner desktop" />
          <Figure src="/images/image-20241103-155353.png" alt="Banner mobile" />
        </div>
        <figure className="not-prose mt-8">
          <video controls preload="metadata" className="w-full rounded-2xl border border-border">
            <source src="/images/Banner_component_-_Responsive_specs.mp4" type="video/mp4" />
          </video>
          <figcaption className="mt-2 text-sm text-muted-foreground">Responsive banner specification</figcaption>
        </figure>
      </CaseSection>

      <CaseSection label="3 · Outcomes" title="Velocity at scale">
        <p>
          Outcome is operational: <strong>faster remediation of mobile defects</strong> across the suite and
          fewer one-off CSS hacks per product team — compound interest from the Blok investment.
        </p>
        <p>
          <Link to="/work/cloud-portal">Cloud Portal case study →</Link> · <Link to="/work/blok">Blok case study →</Link>
        </p>
      </CaseSection>
    </CaseStudyShell>
  )
}
