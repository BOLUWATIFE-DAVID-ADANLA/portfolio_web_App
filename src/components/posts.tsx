import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts/post';

const Posts = () => {
  const allPosts = getAllPosts();
  const posts = allPosts.slice(0, 5); // show 5 most recent

  return (
    <section className="w-full bg-background border-t border-border-subtle">
      <div className="w-full px-4 md:px-6 md:max-w-6xl md:mx-auto py-4 md:py-15">

        {/* section header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="font-mono text-[0.55rem] tracking-[0.25em] uppercase text-ink-muted mb-1">
              Writing
            </p>
            <h2 className="font-display font-black text-2xl md:text-3xl text-ink leading-none">
              Latest Posts
            </h2>
          </div>
          <Link
            href="/blog"
            className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-ink border-b border-ink hover:text-ink-muted hover:border-ink-muted transition-colors duration-150"
          >
            All Posts ↗
          </Link>
        </div>

        {/* post list */}
        <div className="flex flex-col">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 py-4 border-t border-border-subtle hover:bg-surface transition-colors duration-150 px-2 -mx-2"
            >
              <span className="font-mono text-[0.6rem] tracking-widest uppercase text-ink-muted shrink-0 w-28">
                {new Date(post.date).toLocaleDateString('en-GB', {
                  day: 'numeric', month: 'short', year: 'numeric',
                })}
              </span>
              <div className="flex items-baseline justify-between w-full gap-4">
                <span className="font-body text-sm md:text-base text-ink group-hover:text-ink-muted transition-colors duration-150 leading-snug">
                  {post.title}
                </span>
                <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-ink-muted border border-border-subtle px-1.5 py-0.5 shrink-0 hidden sm:block">
                  {post.tag}
                </span>
              </div>
            </Link>
          ))}
          <div className="border-t border-border-subtle" />
        </div>

      </div>
    </section>
  );
};

export default Posts;