import Link from 'next/link'
import { getAllPosts, getPostMeta } from '@/lib/posts/post'

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
  const posts = getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const meta = getPostMeta(slug)
  const { default: Content } = await import(`../../../../content/posts/${slug}.mdx`)

  return (
    <div className="max-w-2xl mx-auto px-6 md:px-10 py-10 md:py-16">

      <Link
        href="/blog"
        className="link-underline text-xs text-muted inline-block mb-10"
      >
        ← Back to Blog
      </Link>

      <div className="mb-10 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-xs text-muted">
          <span>{meta.tag}</span>
          <span>·</span>
          <span>
            {new Date(meta.date).toLocaleDateString('en-GB', {
              day: 'numeric', month: 'long', year: 'numeric',
            })}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-light tracking-[-0.02em] leading-tight text-foreground">
          {meta.title}
        </h1>
        {meta.excerpt && (
          <p className="text-sm text-muted leading-relaxed">
            {meta.excerpt}
          </p>
        )}
      </div>

      <div className="prose-minimal">
        <Content components={components} />
      </div>

      <div className="border-t border-border mt-16 pt-8 flex items-center justify-between">
        <span className="text-xs text-muted">Boluwatife David Adanla</span>
        <Link href="/blog" className="link-underline text-xs text-muted">
          ← All posts
        </Link>
      </div>

    </div>
  )
}
