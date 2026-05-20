import { CV_URL, LINKEDIN_URL, SITE_NAME, SITE_TAGLINE } from "@/lib/constants"
import { getEmailAddress } from "@/lib/email"

export function SiteFooter() {
  const email = getEmailAddress()

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-heading text-sm font-semibold">{SITE_NAME}</p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">{SITE_TAGLINE}</p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href={LINKEDIN_URL}
              className="font-medium text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href={`mailto:${email}`} className="font-medium text-primary hover:underline">
              {email}
            </a>
            <a
              href={CV_URL}
              className="text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV (Figma)
            </a>
          </div>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {SITE_NAME}
        </p>
      </div>
    </footer>
  )
}
