# frank-ux

Static site for [frank-ux.com](https://frank-ux.com), developed in this repo and served by **GitHub Pages**.

## Develop locally

Clone the repo, edit files (start with `index.html`), and open the file in a browser, or run a tiny static server from the repo root:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Publish (GitHub Pages)

1. Push this repo to GitHub: [frankgrinaert/frank-ux](https://github.com/frankgrinaert/frank-ux).
2. On GitHub: **Settings → Pages**.
3. Under **Build and deployment**:
   - **Source**: *Deploy from a branch*.
   - **Branch**: `main` (or your default branch), folder **/** (root).
4. Under **Custom domain**, enter `frank-ux.com` and save.  
   Leave **Enforce HTTPS** enabled once DNS has propagated and the certificate is ready.

The `CNAME` file in this repo tells Pages which hostname to use; it should stay in sync with the custom domain you set in Settings.

## DNS (Squarespace)

Squarespace: **Domains** → your domain → **DNS settings** (or use linked DNS / advanced DNS, depending on your Squarespace UI).

Point the domain at GitHub Pages:

| Type | Host / Name | Data / Value |
|------|-------------|----------------|
| **A** | `@` | `185.199.108.153` |
| **A** | `@` | `185.199.109.153` |
| **A** | `@` | `185.199.110.153` |
| **A** | `@` | `185.199.111.153` |

Optional **www**:

| Type | Host / Name | Data / Value |
|------|-------------|----------------|
| **CNAME** | `www` | `frankgrinaert.github.io` |

If Squarespace already has conflicting **A** or **CNAME** records for `@` or `www`, remove or adjust them so only the records above apply for GitHub.

DNS can take up to 48 hours (often much less). GitHub’s **Pages** settings will show when the domain is verified.

## Repo URL vs site URL

After setup, the project Pages URL `https://frankgrinaert.github.io/frank-ux/` may still work, but your canonical site is **https://frank-ux.com** once the custom domain is active.

If GitHub’s documented IPs change, use the latest values from [GitHub Pages: Configuring a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
