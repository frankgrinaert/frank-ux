import type { ReactNode } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { LinkedInIcon } from "@/components/icons/linkedin-icon"
import { Check, Copy, FileUser, Mail } from "lucide-react"
import { CV_URL, LINKEDIN_URL } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { copyEmailAddress, getEmailAddress } from "@/lib/email"

type HeaderNavButtonProps = {
  label: string
  icon: ReactNode
  /** Desktop tooltip (optional). Mobile always uses `label` unless `mobileTooltip` is set. */
  tooltip?: string
  mobileTooltip?: string
  onClick?: () => void
  render?: React.ComponentProps<typeof Button>["render"]
  buttonClassName?: string
}

function HeaderNavButton({
  label,
  icon,
  tooltip,
  mobileTooltip,
  onClick,
  render,
  buttonClassName,
}: HeaderNavButtonProps) {
  const mobileTip = mobileTooltip ?? label

  return (
    <>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="secondary"
              size="icon-sm"
              className={cn("sm:hidden", buttonClassName)}
              render={render}
              onClick={onClick}
              aria-label={label}
            />
          }
        >
          {icon}
        </TooltipTrigger>
        <TooltipContent side="bottom">{mobileTip}</TooltipContent>
      </Tooltip>
      {tooltip ? (
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="secondary"
                className={cn("hidden sm:inline-flex", buttonClassName)}
                render={render}
                onClick={onClick}
              />
            }
          >
            {icon}
            {label}
          </TooltipTrigger>
          <TooltipContent side="bottom">{tooltip}</TooltipContent>
        </Tooltip>
      ) : (
        <Button
          variant="secondary"
          className={cn("hidden sm:inline-flex", buttonClassName)}
          render={render}
          onClick={onClick}
        >
          {icon}
          {label}
        </Button>
      )}
    </>
  )
}

export function SiteHeader() {
  const [emailCopied, setEmailCopied] = useState(false)

  async function handleCopyEmail() {
    const ok = await copyEmailAddress()
    if (!ok) return
    setEmailCopied(true)
    window.setTimeout(() => setEmailCopied(false), 2000)
  }

  const emailLabel = emailCopied ? "Copied!" : "Email"
  const emailTooltip = emailCopied ? "Copied!" : `Copy ${getEmailAddress()}`

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
            <HeaderNavButton
              label={emailLabel}
              buttonClassName="group/email"
              icon={
                emailCopied ? (
                  <Check />
                ) : (
                  <span className="relative inline-flex size-4 shrink-0">
                    <Mail className="size-4 transition-opacity group-hover/email:opacity-0" />
                    <Copy className="absolute inset-0 size-4 opacity-0 transition-opacity group-hover/email:opacity-100" />
                  </span>
                )
              }
              tooltip={emailTooltip}
              mobileTooltip={emailTooltip}
              onClick={handleCopyEmail}
            />
            <HeaderNavButton
              label="CV"
              icon={<FileUser />}
              render={
                <a href={CV_URL} target="_blank" rel="noopener noreferrer" />
              }
            />
            <HeaderNavButton
              label="LinkedIn"
              icon={<LinkedInIcon />}
              render={
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            />
          </nav>
        </div>
      </header>
    </TooltipProvider>
  )
}
