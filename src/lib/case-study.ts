export const CASE_SECTION_TITLES = {
  context: "Context",
  problem: "Problem",
  approach: "Approach",
  outcome: "Outcome",
  reflections: "Reflections",
} as const

export type CaseSectionId = keyof typeof CASE_SECTION_TITLES

export type CaseStudyMeta = {
  slug: string
  title: string
  summary: string
  tags: string[]
}
