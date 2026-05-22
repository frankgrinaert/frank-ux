import type { CaseStudyMeta } from "@/lib/case-study"

/** Single source of truth for case study frontmatter (titles, summaries, tags). */
export const blokMeta: CaseStudyMeta = {
  slug: "blok",
  title: "Design system for Sitecore",
  summary:
    "After 6 acquisitions, Sitecore’s portfolio was fragmented. Blok became the shared foundation adopted by 12+ product teams, to ship faster with better UX.",
  tags: ["Design systems", "Enterprise UX", "Platform"],
}

export const wfpDesignSystemMeta: CaseStudyMeta = {
  slug: "wfp-design-system",
  title: "Design system for the World Food Programme",
  summary:
    "Rebooting the UN World Food Programme’s corporate design system so dozens of IT solutions can ship accessible UI faster — with a developer experience that drives adoption, not avoidance.",
  tags: ["Design systems", "Design engineering", "Accessibility"],
}

export const cloudPortalMeta: CaseStudyMeta = {
  slug: "cloud-portal",
  title: "Sitecore Cloud Portal & app\u00A0switcher",
  summary:
    "Designed and helped build the single entry point and app\u00A0switcher for Sitecore’s multi-product cloud suite — one front door into a fragmented portfolio.",
  tags: ["Platform UX", "Enterprise UX"],
}

export const cloudPortalRedesignMeta: CaseStudyMeta = {
  slug: "cloud-portal-redesign",
  title: "Cloud Portal homepage redesign",
  summary:
    "Used early-access research to challenge homepage bloat on Sitecore’s Cloud Portal, secure PM buy-in, and ship a portal scoped to jobs-to-be-done.",
  tags: ["User research", "Platform UX", "Enterprise UX"],
}

/** Figma-only artefact; no case study page. */
export const accessibleColourSystemTitle = "Accessible colour system"
