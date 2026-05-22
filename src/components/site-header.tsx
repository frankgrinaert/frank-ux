import { useState } from "react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Check, ExternalLink, FileUser, Mail } from "lucide-react"
import { CV_URL, LINKEDIN_URL } from "@/lib/constants"
import { copyEmailAddress, getEmailAddress } from "@/lib/email"

export function SiteHeader() {
  const [emailCopied, setEmailCopied] = useState(false)

  async function handleCopyEmail() {
    const ok = await copyEmailAddress()
    if (!ok) return
    setEmailCopied(true)
    window.setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <TooltipProvider>
      <header className="sticky top-0 z-50 border-b border-border bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <Link
            to="/"
            className="font-heading text-sm font-semibold text-primary transition-colors hover:text-foreground sm:text-lg"
          >
            frank-ux.com
          </Link>
          <nav
            className="flex flex-wrap items-center justify-end gap-1"
            aria-label="Site"
          >
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="secondary" onClick={handleCopyEmail} />
                }
              >
                {emailCopied ? <Check /> : <Mail />}
                {emailCopied ? "Copied!" : "Email"}
              </TooltipTrigger>
              <TooltipContent side="bottom">{getEmailAddress()}</TooltipContent>
            </Tooltip>
            <Button
              variant="secondary"
              render={
                <a href={CV_URL} target="_blank" rel="noopener noreferrer" />
              }
            >
              <FileUser />
              CV
            </Button>
            <Button
              variant="secondary"
              render={
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <ExternalLink />
              LinkedIn
            </Button>
          </nav>
        </div>
      </header>
    </TooltipProvider>
  )
}
