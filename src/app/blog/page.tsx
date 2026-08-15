import Link from 'next/link'
import { getAllPosts } from '@/lib/posts/post'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-10 py-10 md:py-16 flex flex-col gap-10">

      <div className="flex flex-col gap-3">
        <Link href="/" className="link-underline w-fit text-xs text-muted">
          ← Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-light tracking-[-0.02em] text-foreground">
          Blog
        </h1>
      </div>

      <div className="flex flex-col gap-5">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="md:grid md:grid-cols-[1fr_200px] md:gap-12 flex flex-col gap-1"
          >
            <div className="flex flex-col gap-1 min-w-0">
              <Link
                href={`/blog/${post.slug}`}
                className="link-underline inline-flex items-baseline w-fit text-sm text-foreground"
              >
                {post.title}
              </Link>
              <p className="text-muted text-xs leading-relaxed">
                {post.excerpt}
              </p>
            </div>
            <div className="text-foreground text-xs tabular-nums md:pt-[3px]">
              {new Date(post.date).toLocaleDateString('en-GB', {
                day: 'numeric', month: 'short', year: 'numeric',
              })}
            </div>
          </div>
        ))}

        {posts.length === 0 && (
          <p className="text-muted text-xs">
            No dispatches yet — drop an MDX file in content/posts/ to get started.
          </p>
        )}
      </div>

    </div>
  )
}
