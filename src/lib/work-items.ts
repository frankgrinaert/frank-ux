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
    title: "Design system for Sitecore",
    summary:
      "After 6 acquisitions, Sitecore’s portfolio was fragmented. Blok became the shared foundation adopted by 12+ product teams, to ship faster with better UX.",
    image: "/work/blok-thumb.png",
    imageAlt: "Fragmented product portfolio after acquisitions",
    tags: ["Design systems", "Enterprise UX", "Platform"],
  },
  {
    id: "wfp-design-system",
    href: WFP_DESIGN_SYSTEM_PATH,
    title: "Design System for the World Food Programme",
    summary:
      "Rebooted WFP’s corporate design system so IT solutions ship accessible UI faster — code-first, AI-ready, built for adoption across external dev teams.",
    image: "/work/wfp-ds-thumb.png",
    imageAlt: "WFP Design System — accessible colour tokens",
    tags: ["Design systems", "Design engineering", "Accessibility"],
  },
  {
    id: "cloud-portal",
    href: CLOUD_PORTAL_PATH,
    title: "Sitecore Cloud Portal & App\u00A0switcher",
    summary:
      "Designed and helped build the single entry point and app\u00A0switcher for Sitecore’s multi-product cloud suite — one front door into a fragmented portfolio.",
    image: "/work/portal-hero.png",
    imageAlt: "Sitecore Cloud Portal — unified entry to the suite",
    tags: ["Platform UX", "Enterprise UX"],
  },
  {
    id: "cloud-portal-redesign",
    href: CLOUD_PORTAL_REDESIGN_PATH,
    title: "Cloud Portal homepage redesign",
    summary:
      "Used early-access research to challenge homepage bloat on Sitecore’s Cloud Portal, secure PM buy-in, and ship a portal scoped to jobs-to-be-done.",
    image: "/work/portal-bloated.png",
    imageAlt:
      "Early Cloud Portal homepage before research-driven simplification",
    tags: ["User research", "Platform UX", "Enterprise UX"],
  },
  {
    id: "accessible-colour-system",
    href: WFP_COLOUR_SYSTEM_URL,
    external: true,
    title: "Accessible colour system",
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
