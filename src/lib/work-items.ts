import {
  accessibleColourSystemTitle,
  blokMeta,
  cloudPortalMeta,
  cloudPortalRedesignMeta,
  wfpDesignSystemMeta,
} from "@/content/work/case-meta"
import {
  BLOK_PATH,
  CLOUD_PORTAL_PATH,
  CLOUD_PORTAL_REDESIGN_PATH,
  WFP_COLOUR_SYSTEM_URL,
  WFP_DESIGN_SYSTEM_PATH,
} from "@/lib/constants"

export type WorkItem = {
  id: string
  title: string
  summary: string
  href: string
  image: string
  imageAlt: string
  external?: boolean
  tags?: readonly string[]
}

export const WORK_ITEMS: WorkItem[] = [
  {
    id: "blok",
    href: BLOK_PATH,
    title: blokMeta.title,
    summary: blokMeta.summary,
    image: "/work/blok-thumb.png",
    imageAlt: "Fragmented product portfolio after acquisitions",
    tags: ["Design systems", "Enterprise UX", "Platform"],
  },
  {
    id: "wfp-design-system",
    href: WFP_DESIGN_SYSTEM_PATH,
    title: wfpDesignSystemMeta.title,
    summary: wfpDesignSystemMeta.summary,
    image: "/work/wfp-ds-thumb.png",
    imageAlt: "WFP Design System — accessible colour tokens",
    tags: ["Design systems", "Design engineering", "Accessibility"],
  },
  {
    id: "cloud-portal",
    href: CLOUD_PORTAL_PATH,
    title: cloudPortalMeta.title,
    summary: cloudPortalMeta.summary,
    image: "/work/portal-hero.png",
    imageAlt: "Sitecore Cloud Portal — unified entry to the suite",
    tags: ["Platform UX", "Enterprise UX"],
  },
  {
    id: "cloud-portal-redesign",
    href: CLOUD_PORTAL_REDESIGN_PATH,
    title: cloudPortalRedesignMeta.title,
    summary: cloudPortalRedesignMeta.summary,
    image: "/work/portal-bloated.png",
    imageAlt:
      "Early Cloud Portal homepage before research-driven simplification",
    tags: ["User research", "Platform UX", "Enterprise UX"],
  },
  {
    id: "accessible-colour-system",
    href: WFP_COLOUR_SYSTEM_URL,
    external: true,
    title: accessibleColourSystemTitle,
    summary:
      "Enabled accessible contrast by default, without one-off fixes per screen.",
    image: "/work/a11y-colours-thumb.png",
    imageAlt: "WFP design system — accessible colour system",
    tags: ["Design systems", "Accessibility"],
  },
]

export type WorkItemId = (typeof WORK_ITEMS)[number]["id"]

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
