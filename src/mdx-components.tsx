import type { MDXComponents } from "mdx/types"

import { CaseSection } from "@/components/case-study/case-section"
import { CaseStudyLayout } from "@/components/case-study/case-study-layout"
import { CaseSubsection } from "@/components/case-study/case-subsection"
import { FigmaEmbed } from "@/components/case-study/figma-embed"
import { YouTubeEmbed } from "@/components/case-study/youtube-embed"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    CaseStudyLayout,
    CaseSection,
    CaseSubsection,
    FigmaEmbed,
    YouTubeEmbed,
    ...components,
  }
}
