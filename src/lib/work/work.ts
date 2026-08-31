import manifest from './work.generated.json'

export type CaseStudy = {
  slug: string
  title: string
  summary: string
  category: string
  stack: string[]
  status: 'in-progress' | 'planned' | 'shipped'
  order: number
  draft?: boolean
  repo?: string
}

type ManifestEntry = {
  slug: string
  data: Record<string, unknown>
}

function toMeta(entry: ManifestEntry): CaseStudy {
  const data = entry.data
  return {
    slug: entry.slug,
    title: data.title as string,
    summary: (data.summary as string) || '',
    category: (data.category as string) || 'Project',
    stack: Array.isArray(data.stack) ? (data.stack as string[]) : [],
    status: (data.status as CaseStudy['status']) || 'planned',
    order: (data.order as number) ?? 999,
    draft: (data.draft as boolean) ?? false,
    repo: data.repo as string | undefined,
  }
}

export function getAllCaseStudies(): CaseStudy[] {
  return (manifest as ManifestEntry[])
    .map(toMeta)
    .filter((study) => !study.draft)
    .sort((a, b) => a.order - b.order)
}

export function getCaseStudyMeta(slug: string): CaseStudy {
  const entry = (manifest as ManifestEntry[]).find((e) => e.slug === slug)
  if (!entry) throw new Error(`Case study not found: ${slug}`)
  return toMeta(entry)
}
