import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Check, ExternalLink, Mail } from "lucide-react"
import { CV_URL, LINKEDIN_URL } from "@/lib/constants"
import { copyEmailAddress } from "@/lib/email"

export function HomePage() {
  const [emailCopied, setEmailCopied] = useState(false)

  async function handleCopyEmail() {
    const ok = await copyEmailAddress()
    if (!ok) return
    setEmailCopied(true)
    window.setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <main className="min-h-svh bg-muted">
      <section className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 py-20 lg:px-8 lg:py-28">
        <h1 className="max-w-5xl font-heading text-3xl font-semibold sm:text-4xl lg:text-5xl">
          <span className="text-primary">Frank Grinaert,</span> product designer
          specialised in enterprise software, design systems, and platform UX
        </h1>
        <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
          I work at the intersection of design and engineering: building
          code-based systems, delivering with cross-functional teams, and
          driving coherence across complex product portfolios.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button
            size="lg"
            variant="outline"
            render={
              <a href={CV_URL} target="_blank" rel="noopener noreferrer" />
            }
          >
            <ExternalLink />
            CV
          </Button>
          <Button
            size="lg"
            variant="outline"
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
          <Button size="lg" variant="outline" onClick={handleCopyEmail}>
            {emailCopied ? <Check /> : <Mail />}
            {emailCopied ? "Email copied to clipboard" : "Email"}
          </Button>
        </div>
      </section>
    </main>
  )
}
