import fs from "fs"
import path from "path"
import mdx from "@mdx-js/rollup"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import remarkFrontmatter from "remark-frontmatter"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"
import { defineConfig } from "vite"

/** GitHub Pages SPA: serve index.html for unknown routes */
function spaFallback() {
  return {
    name: "spa-fallback",
    closeBundle() {
      const dist = path.resolve(__dirname, "dist")
      const index = path.join(dist, "index.html")
      const fallback = path.join(dist, "404.html")
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, fallback)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [
          remarkFrontmatter,
          [remarkMdxFrontmatter, { name: "meta" }],
        ],
        providerImportSource: "mdx-components",
      }),
    },
    react(),
    tailwindcss(),
    spaFallback(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "mdx-components": path.resolve(__dirname, "./src/mdx-components.tsx"),
    },
  },
})
