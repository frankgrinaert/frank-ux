declare module "*.mdx" {
  import type { MDXProps } from "mdx/types"

  export const meta: {
    slug: string
    title: string
    summary: string
    tags: string[]
  }

  export default function MDXContent(props: MDXProps): React.JSX.Element
}
