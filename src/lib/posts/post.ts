import manifest from './post.generated.json'

export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  tag: string
  draft?: boolean
  readingMinutes: number
}

type ManifestEntry = {
  slug: string
  data: Record<string, unknown>
}

function toMeta(entry: ManifestEntry): Post {
  const data = entry.data
  return {
    slug: entry.slug,
    title: data.title as string,
    excerpt: (data.summary as string) || (data.excerpt as string) || '',
    date: data.date as string,
    tag: Array.isArray(data.tags) ? (data.tags[0] as string) : ((data.tag as string) || 'Essay'),
    draft: (data.draft as boolean) ?? false,
    readingMinutes: Math.max(1, Math.round((data.wordCount as number ?? 0) / 200)),
  }
}

export function getAllPosts(): Post[] {
  return (manifest as ManifestEntry[])
    .map(toMeta)
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostMeta(slug: string): Post {
  const entry = (manifest as ManifestEntry[]).find((e) => e.slug === slug)
  if (!entry) throw new Error(`Post not found: ${slug}`)
  return toMeta(entry)
}
