import { WorkCard } from "@/components/work-card"
import { WORK_ITEMS } from "@/content/work/case-meta"

export function HomePage() {
  return (
    <main className="min-h-svh bg-muted">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <h1 className="max-w-5xl font-heading text-3xl font-semibold sm:text-4xl lg:text-5xl">
          I’m <span className="text-primary">Frank,</span> a product designer
          specialised in enterprise software, design systems and platform UX
        </h1>
        <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
          I work at the intersection of design and engineering: building
          code-based systems, delivering with cross-functional teams, and
          driving coherence across complex product portfolios.
        </p>
      </section>

      <section
        className="bg-background py-20 lg:py-28"
        aria-labelledby="work-heading"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2
            id="work-heading"
            className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Highlighted work
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {WORK_ITEMS.map((item) => (
              <li key={item.href}>
                <WorkCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
