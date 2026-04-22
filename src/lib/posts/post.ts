import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  tag: string
  draft?: boolean
}

const postsDir = path.join(process.cwd(), 'content/posts')

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDir)

  return files
    .filter(f => f.endsWith('.mdx'))
    .map(f => {
      const slug = f.replace('.mdx', '')
      const raw = fs.readFileSync(path.join(postsDir, f), 'utf-8')
      const { data } = matter(raw)
      return {
        slug,
        title: data.title,
        excerpt: data.summary || data.excerpt || '',   // supports both
        date: data.date,
        tag: Array.isArray(data.tags) ? data.tags[0] : (data.tag || 'Essay'), // supports both
        draft: data.draft ?? false,
      }
    })
    .filter(post => !post.draft)  // hide drafts automatically
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string) {
  const filePath = path.join(process.cwd(), 'content/posts', `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    meta: {
      title: data.title,
      excerpt: data.summary || data.excerpt || '',
      date: data.date,
      tag: Array.isArray(data.tags) ? data.tags[0] : (data.tag || 'Essay'),
      draft: data.draft ?? false,
    } as Omit<Post, 'slug'>,
    content,
  }
}