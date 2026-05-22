import type { CaseStudyMeta } from "@/lib/case-study"
import {
  BLOK_PATH,
  CLOUD_PORTAL_PATH,
  CLOUD_PORTAL_REDESIGN_PATH,
  WFP_COLOUR_SYSTEM_URL,
  WFP_DESIGN_SYSTEM_PATH,
} from "@/lib/constants"

/** Case study + homepage card fields in one place. */
export type WorkEntry = CaseStudyMeta & {
  href: string
  image: string
  imageAlt: string
  external?: boolean
}

const workEntries = {
  blok: {
    slug: "blok",
    title: "Design system for Sitecore",
    summary:
      "Blok Design System became the shared foundation adopted by 12+ product teams, to ship faster with better UX.",
    tags: ["Design systems", "Platform UX"],
    href: BLOK_PATH,
    image: "/work/blok-thumb.png",
    imageAlt: "Fragmented product portfolio after acquisitions",
  },
  "wfp-design-system": {
    slug: "wfp-design-system",
    title: "Design system for the World Food Programme",
    summary:
      "Rebooted the corporate design system, so dozens of IT solutions can ship accessible UI faster.",
    tags: ["Design systems", "Accessibility"],
    href: WFP_DESIGN_SYSTEM_PATH,
    image: "/work/wfp-ds-thumb.png",
    imageAlt: "WFP Design System — accessible colour tokens",
  },
  "cloud-portal": {
    slug: "cloud-portal",
    title: "Sitecore Cloud Portal & app\u00A0switcher",
    summary:
      "Designed and helped build the single entry point and app\u00A0switcher for Sitecore’s multi-product cloud suite.",
    tags: ["Platform UX"],
    href: CLOUD_PORTAL_PATH,
    image: "/work/portal-thumb.png",
    imageAlt: "Sitecore Cloud Portal — unified entry to the suite",
  },
  "cloud-portal-redesign": {
    slug: "cloud-portal-redesign",
    title: "Sitecore Cloud Portal redesign",
    summary:
      "Used early-access research to challenge homepage bloat on Sitecore’s Cloud Portal.",
    tags: ["User research", "Platform UX"],
    href: CLOUD_PORTAL_REDESIGN_PATH,
    image: "/work/portal-redesign-thumb.png",
    imageAlt:
      "Early Cloud Portal homepage before research-driven simplification",
  },
  "accessible-colour-system": {
    slug: "accessible-colour-system",
    title: "Accessible colour system",
    summary:
      "Enabled accessible contrast by default, without one-off fixes per screen.",
    tags: ["Design systems", "Accessibility"],
    href: WFP_COLOUR_SYSTEM_URL,
    external: true,
    image: "/work/a11y-colours-thumb.png",
    imageAlt: "WFP design system — accessible colour system",
  },
} as const satisfies Record<string, WorkEntry>

export type WorkEntryId = keyof typeof workEntries

/** Homepage card order. */
const HOME_WORK_ORDER = [
  "blok",
  "wfp-design-system",
  "cloud-portal",
  "cloud-portal-redesign",
  "accessible-colour-system",
] as const satisfies readonly WorkEntryId[]

export type WorkItem = WorkEntry & { id: WorkEntryId }

export const WORK_ITEMS: WorkItem[] = HOME_WORK_ORDER.map((id) => ({
  id,
  ...workEntries[id],
}))

export type WorkItemId = WorkEntryId

const workItemsById = Object.fromEntries(
  WORK_ITEMS.map((item) => [item.id, item])
) as Record<WorkItemId, WorkItem>

export function getWorkItem(id: WorkItemId): WorkItem {
  const item = workItemsById[id]
  if (!item) {
    throw new Error(`Unknown work item: ${id}`)
  }
  return item
}

/** MDX case study layouts — same objects as cards, without card-only fields in the type. */
export const blokMeta = workEntries.blok
export const wfpDesignSystemMeta = workEntries["wfp-design-system"]
export const cloudPortalMeta = workEntries["cloud-portal"]
export const cloudPortalRedesignMeta = workEntries["cloud-portal-redesign"]
