import Link from 'next/link'
import { getAllCaseStudies } from '@/lib/work/work'

const statusLabel: Record<string, string> = {
  'in-progress': 'In progress',
  planned: 'Planned',
  shipped: 'Shipped',
}

export default function WorkPage() {
  const studies = getAllCaseStudies()

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-10 py-10 md:py-16 flex flex-col gap-10">

      <div className="flex flex-col gap-3">
        <Link href="/" className="link-underline w-fit text-xs text-muted">
          ← Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-light tracking-[-0.02em] text-foreground">
          Work
        </h1>
        <p className="text-sm text-muted max-w-prose leading-relaxed">
          Case studies of what I&apos;m building — backend systems, AI/agent integration work,
          and the automation and mobile projects that round out the rest. Most of these are
          being written up as I ship, this month and beyond.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {studies.map((study) => (
          <div
            key={study.slug}
            className="md:grid md:grid-cols-[1fr_200px] md:gap-12 flex flex-col gap-1"
          >
            <div className="flex flex-col gap-1 min-w-0">
              <Link
                href={`/work/${study.slug}`}
                className="link-underline inline-flex items-baseline w-fit text-sm text-foreground"
              >
                {study.title}
              </Link>
              <p className="text-muted text-xs leading-relaxed">
                {study.summary}
              </p>
              <p className="text-muted-2 text-xs mt-0.5">
                {study.stack.join(" · ")}
              </p>
            </div>
            <div className="flex md:flex-col md:items-end gap-2 md:gap-0.5 text-xs md:pt-[3px]">
              <span className="text-foreground">{study.category}</span>
              <span className="text-muted-2">{statusLabel[study.status]}</span>
            </div>
          </div>
        ))}

        {studies.length === 0 && (
          <p className="text-muted text-xs">
            No case studies yet — drop an MDX file in content/work/ to get started.
          </p>
        )}
      </div>

    </div>
  )
}
