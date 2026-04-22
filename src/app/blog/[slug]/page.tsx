import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts, getPost } from '@/lib/posts/post'
import { MDXRemote } from 'next-mdx-remote/rsc'

const components = {
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <span className="block my-8">
      <img
        src={src}
        alt={alt || ''}
        className="w-full h-auto border border-border-subtle"
      />
      {alt && (
        <span className="block font-mono text-[0.55rem] tracking-[0.15em] uppercase text-ink-muted mt-2 border-t border-border-subtle pt-1">
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
  const { meta, content } = getPost(slug)

  return (
    <div className="w-full bg-background">
      <div className="w-full px-4 md:px-6 md:max-w-2xl md:mx-auto py-12 md:py-20">

        <Link
          href="/blog"
          className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-ink-muted hover:text-ink transition-colors duration-150 inline-block mb-10"
        >
          ← Back to Dispatches
        </Link>

        <div className="border-b-2 border-ink pb-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[0.5rem] tracking-[0.2em] uppercase bg-ink text-paper px-2 py-1">
              {meta.tag}
            </span>
            <span className="font-mono text-[0.5rem] tracking-[0.15em] uppercase text-ink-muted">
              {new Date(meta.date).toLocaleDateString('en-GB', {
                day: 'numeric', month: 'long', year: 'numeric',
              })}
            </span>
          </div>
          <h1 className="font-display font-black text-3xl md:text-5xl text-ink leading-tight tracking-tight mb-4">
            {meta.title}
          </h1>
          <p className="font-body italic text-sm md:text-base text-ink-muted leading-relaxed">
            {meta.excerpt}
          </p>
        </div>

        <div className="prose-retro">
          <MDXRemote source={content} components={components} />
        </div>

        <div className="border-t border-ink mt-16 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-[0.5rem] tracking-[0.3em] uppercase text-ink-muted">
            · End of Dispatch ·
          </span>
          <Link
            href="/blog"
            className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-ink border border-ink px-4 py-2 hover:bg-paper-cream transition-colors duration-150"
          >
            ← All Posts
          </Link>
        </div>

      </div>
    </div>
  )
}