import { CasePage } from "@/components/case-study/case-page"
import type { CaseStudy } from "@/lib/case-study"

const case1: CaseStudy = {
  slug: "case-1",
  title: "Design system for Sitecore",
  summary:
    "Short summary of the project. Replace with a one- or two-sentence overview of the work, scope, and your role.",
  tags: ["Design systems", "Enterprise UX", "Platform"],
  sections: [
    {
      id: "context",
      subsections: [
        {
          subtitle: "A fragmented product and organisation",
          content: (
            <>
              <p>
                Sitecore, a legacy enterprise CMS vendor, wanted to expand its
                offering to a full digital experience platform — a category
                dominated by Adobe. To fill out its product suite, Sitecore
                acquired 6 companies, and started numerous zero-to-one products,
                all in under three years.
              </p>
              <p>
                The result: Sitecore was a patchwork of smaller companies,
                distributed teams, on different tech stacks, working in
                isolation from each other.
              </p>
            </>
          ),
        },
      ],
    },
    {
      id: "problem",
      subsections: [
        {
          subtitle: "The challenge",
          content: (
            <p>Describe the user and business problem you set out to solve.</p>
          ),
        },
      ],
    },
    {
      id: "approach",
      subsections: [
        {
          subtitle: "Process",
          content: (
            <p>
              How you explored, aligned, and iterated — research, workshops,
              prototypes, system work, etc.
            </p>
          ),
        },
        {
          subtitle: "Key decisions",
          content: (
            <p>
              Call out important trade-offs and why you chose a given direction.
            </p>
          ),
        },
      ],
    },
    {
      id: "outcome",
      subsections: [
        {
          subtitle: "Results",
          content: (
            <p>
              What shipped, what improved, and any metrics or qualitative
              signals you can share.
            </p>
          ),
        },
      ],
    },
    {
      id: "reflections",
      subsections: [
        {
          subtitle: "Learnings",
          content: (
            <p>
              What you would do again, what you would change, and what this
              project taught you.
            </p>
          ),
        },
      ],
    },
  ],
}

export function Case1Page() {
  return <CasePage study={case1} />
}
