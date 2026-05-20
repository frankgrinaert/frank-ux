# frank-ux

Portfolio site for [frank-ux.com](https://frank-ux.com), built with **Vite** and **Tailwind CSS**, deployed via **GitHub Actions** to GitHub Pages.

## Develop locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # optional: preview production build
```

Output is written to `dist/`.

## Publish (GitHub Pages)

1. Push to GitHub: [frankgrinaert/frank-ux](https://github.com/frankgrinaert/frank-ux).
2. **Settings → Pages → Build and deployment → Source**: select **GitHub Actions**.
3. The workflow `.github/workflows/deploy.yml` runs on push to `main` or `portfolio` and deploys `dist/`.
4. **Custom domain**: `frank-ux.com` — configured via `public/CNAME` and Pages settings. Keep **Enforce HTTPS** enabled once DNS is ready.

## Project structure

| Path | Purpose |
|------|---------|
| `index.html` | Homepage |
| `work/*.html` | Case study pages |
| `src/` | Shared CSS, layout, email obfuscation |
| `public/images/` | Screenshots and videos |
| `notion-export.html` | Archived Notion export (reference only) |

## DNS (Squarespace)

| Type | Host | Value |
|------|------|--------|
| **A** | `@` | `185.199.108.153` |
| **A** | `@` | `185.199.109.153` |
| **A** | `@` | `185.199.110.153` |
| **A** | `@` | `185.199.111.153` |
| **CNAME** | `www` | `frankgrinaert.github.io` |

Latest GitHub Pages IP addresses: [GitHub Docs — custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Adding images

Place assets in `public/images/` and reference them as `/images/your-file.png` in HTML.
