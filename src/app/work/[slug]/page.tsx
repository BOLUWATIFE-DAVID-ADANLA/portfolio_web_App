import Link from 'next/link'
import { getAllCaseStudies, getCaseStudyMeta } from '@/lib/work/work'

const statusLabel: Record<string, string> = {
  'in-progress': 'In progress',
  planned: 'Planned',
  shipped: 'Shipped',
}

const components = {
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <span className="block my-8">
      <img
        src={src}
        alt={alt || ''}
        className="w-full h-auto rounded-md"
      />
      {alt && (
        <span className="block text-xs text-muted mt-2">
          {alt}
        </span>
      )}
    </span>
  ),
}

export async function generateStaticParams() {
  const studies = getAllCaseStudies()
  return studies.map(s => ({ slug: s.slug }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const meta = getCaseStudyMeta(slug)
  const { default: Content } = await import(`../../../../content/work/${slug}.mdx`)

  return (
    <div className="max-w-2xl mx-auto px-6 md:px-10 py-10 md:py-16">

      <Link
        href="/work"
        className="link-underline text-xs text-muted inline-block mb-10"
      >
        ← Back to Work
      </Link>

      <div className="mb-10 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-xs text-muted">
          <span>{meta.category}</span>
          <span>·</span>
          <span>{statusLabel[meta.status]}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-light tracking-[-0.02em] leading-tight text-foreground">
          {meta.title}
        </h1>
        {meta.summary && (
          <p className="text-sm text-muted leading-relaxed">
            {meta.summary}
          </p>
        )}
        {meta.stack.length > 0 && (
          <p className="text-xs text-muted-2">
            {meta.stack.join(" · ")}
          </p>
        )}
        {meta.repo && (
          <a
            href={meta.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-xs text-muted inline-block w-fit"
          >
            View source on GitHub →
          </a>
        )}
      </div>

      <div className="prose-minimal">
        <Content components={components} />
      </div>

      <div className="border-t border-border mt-16 pt-8 flex items-center justify-between">
        <span className="text-xs text-muted">Boluwatife David Adanla</span>
        <Link href="/work" className="link-underline text-xs text-muted">
          ← All work
        </Link>
      </div>

    </div>
  )
}
