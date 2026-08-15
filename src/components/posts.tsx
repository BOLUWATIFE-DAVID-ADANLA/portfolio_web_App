import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts/post';

const Posts = () => {
  const allPosts = getAllPosts();
  const posts = allPosts.slice(0, 5); // show 5 most recent

  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold text-sm text-foreground">Writing</h2>

      <div className="flex flex-col gap-4">
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

        {posts.length > 0 && (
          <Link href="/blog" className="link-underline w-fit text-xs text-muted mt-1">
            All posts →
          </Link>
        )}
      </div>
    </section>
  );
};

export default Posts;
