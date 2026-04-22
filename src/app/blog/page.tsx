import Link from 'next/link'
import { getAllPosts } from '@/lib/posts/post'

export default function BlogPage() {
  const posts = getAllPosts()
  const [lead, second, third, ...rest] = posts

  return (
    <div className="w-full bg-background">
      <div className="w-full px-4 md:px-6 md:max-w-6xl md:mx-auto">

        {/* ── MASTHEAD ── */}
        <div className="border-b-4 border-ink py-6 mb-0">
          <p className="font-mono text-[0.55rem] tracking-[0.3em] uppercase text-ink-muted text-center mb-2">
            The Broadsheet · Personal Edition ·{' '}
            {new Date().toLocaleDateString('en-GB', {
              weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            })}
          </p>
          <h1 className="font-display font-black text-5xl md:text-8xl text-ink leading-none text-center tracking-tight">
            Dispatches
          </h1>
          <p className="font-body italic text-xs md:text-sm text-ink-muted text-center mt-2">
            "Writing is thinking made visible — Boluwatife David Adanla"
          </p>
          <div className="border-t border-ink mt-4" />
        </div>

        {/* ── LEAD + SIDEBAR ── */}
        {lead && (
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-ink">

            <Link
              href={`/blog/${lead.slug}`}
              className="group md:col-span-2 p-6 md:p-8 border-b md:border-b-0 md:border-r border-ink hover:bg-surface transition-colors duration-150"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[0.5rem] tracking-[0.2em] uppercase bg-ink text-paper px-2 py-1">
                  {lead.tag}
                </span>
                <span className="font-mono text-[0.5rem] tracking-[0.15em] uppercase text-ink-muted">
                  {new Date(lead.date).toLocaleDateString('en-GB', {
                    day: 'numeric', month: 'long', year: 'numeric',
                  })}
                </span>
              </div>
              <h2 className="font-display font-black text-3xl md:text-5xl text-ink leading-tight mb-5 group-hover:text-ink-muted transition-colors duration-150">
                {lead.title}
              </h2>
              <div className="w-10 border-t-2 border-ink mb-5"></div>
              <p className="font-body text-sm md:text-base text-ink-soft leading-relaxed mb-6">
                {lead.excerpt}
              </p>
              <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-ink border-b border-ink group-hover:text-ink-muted transition-colors duration-150">
                Continue Reading ↗
              </span>
            </Link>

            <div className="flex flex-col divide-y divide-border-subtle">
              {[second, third].filter(Boolean).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group p-5 hover:bg-surface transition-colors duration-150 flex-1"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[0.48rem] tracking-[0.2em] uppercase text-ink-muted border border-border-subtle px-1.5 py-0.5">
                      {post.tag}
                    </span>
                    <span className="font-mono text-[0.48rem] tracking-[0.1em] uppercase text-ink-muted">
                      {new Date(post.date).toLocaleDateString('en-GB', {
                        day: 'numeric', month: 'short', year: 'numeric',
                      })}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base md:text-lg text-ink leading-snug group-hover:text-ink-muted transition-colors duration-150 mb-2">
                    {post.title}
                  </h3>
                  <p className="font-body text-xs text-ink-muted leading-relaxed">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>

          </div>
        )}

        {/* ── ARCHIVE ── */}
        {rest.length > 0 && (
          <>
            <div className="bg-ink px-6 py-2 flex items-center justify-between">
              <span className="font-mono text-[0.55rem] tracking-[0.3em] uppercase text-paper">
                More from the archive
              </span>
              <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-paper opacity-50">
                {rest.length} dispatches
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-ink">
              {rest.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`group p-5 hover:bg-surface transition-colors duration-150
                    ${i < rest.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-ink' : ''}
                  `}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-[0.48rem] tracking-[0.2em] uppercase text-ink-muted border border-border-subtle px-1.5 py-0.5">
                      {post.tag}
                    </span>
                    <span className="font-mono text-[0.48rem] tracking-[0.1em] uppercase text-ink-muted">
                      {new Date(post.date).toLocaleDateString('en-GB', {
                        day: 'numeric', month: 'short', year: 'numeric',
                      })}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base md:text-lg text-ink leading-snug group-hover:text-ink-muted transition-colors duration-150 mb-2">
                    {post.title}
                  </h3>
                  <p className="font-body text-xs text-ink-muted leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* empty state — no posts yet */}
        {!lead && (
          <div className="py-20 text-center">
            <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-ink-muted">
              No dispatches yet — drop an MDX file in content/posts/ to get started.
            </p>
          </div>
        )}

        <div className="py-6 flex items-center justify-center">
          <span className="font-mono text-[0.5rem] tracking-[0.3em] uppercase text-ink-muted">
            · End of Edition ·
          </span>
        </div>

      </div>
    </div>
  )
}