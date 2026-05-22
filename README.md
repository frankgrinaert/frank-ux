# frank-ux

Portfolio site for [frank-ux.com](https://frank-ux.com) — **Vite**, **React**, **shadcn/ui**, and **Tailwind CSS v4**, deployed via GitHub Actions to GitHub Pages.

## Develop locally

```bash
pnpm install
pnpm dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
pnpm build
pnpm preview
```

Output is written to `dist/`. The build also copies `index.html` to `404.html` for SPA routing on GitHub Pages.

## Add shadcn components

```bash
pnpm dlx shadcn@latest add <component>
```

## Publish (GitHub Pages)

1. Push to GitHub: [frankgrinaert/frank-ux](https://github.com/frankgrinaert/frank-ux).
2. **Settings → Pages → Build and deployment → Source**: **GitHub Actions**.
3. Workflow `.github/workflows/deploy.yml` runs on push to `main` or `portfolio`.
4. Custom domain `frank-ux.com` via `public/CNAME`.

## Case studies (MDX)

Each case lives in `src/content/work/<slug>.mdx`. YAML frontmatter holds `slug`, `title`, `summary`, and `tags` (exported as `meta`). Structure the body with:

- `<CaseSection id="context">` (and `problem`, `approach`, `outcome`, `reflections`)
- `<CaseSubsection title="…">` — write Markdown inside; add React components such as `<FigmaEmbed src="…" />` for Figma prototypes

Wire a new case by adding the `.mdx` file, re-exporting it from `src/pages/work/`, and adding a route in `App.tsx` (e.g. `/work/<slug>`).

## Project structure

| Path | Purpose |
|------|---------|
| `src/pages/home.tsx` | Homepage |
| `src/content/work/*.mdx` | Case study copy (MDX + YAML frontmatter) |
| `public/work/` | Work and case study images |
| `src/components/ui/` | shadcn UI used on the homepage |
| `public/CNAME` | Custom domain for GitHub Pages |

## DNS (Squarespace)

| Type | Host | Value |
|------|------|--------|
| **A** | `@` | `185.199.108.153` |
| **A** | `@` | `185.199.109.153` |
| **A** | `@` | `185.199.110.153` |
| **A** | `@` | `185.199.111.153` |
| **CNAME** | `www` | `frankgrinaert.github.io` |
