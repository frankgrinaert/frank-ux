import type { ReactNode } from "react"

export const CASE_SECTION_TITLES = {
  context: "Context",
  problem: "Problem",
  approach: "Approach",
  outcome: "Outcome",
  reflections: "Reflections",
} as const

export type CaseSectionId = keyof typeof CASE_SECTION_TITLES

export type CaseSubsection = {
  subtitle: string
  content: ReactNode
}

export type CaseSection = {
  id: CaseSectionId
  subsections: CaseSubsection[]
}

export type CaseStudy = {
  slug: string
  title: string
  summary: string
  tags: string[]
  sections: CaseSection[]
}
