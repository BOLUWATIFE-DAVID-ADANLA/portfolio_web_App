import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type CaseStudy = {
  slug: string
  title: string
  summary: string
  category: string
  stack: string[]
  status: 'in-progress' | 'planned' | 'shipped'
  order: number
  draft?: boolean
}

const workDir = path.join(process.cwd(), 'content/work')

export function getAllCaseStudies(): CaseStudy[] {
  const files = fs.readdirSync(workDir)

  return files
    .filter(f => f.endsWith('.mdx'))
    .map(f => {
      const slug = f.replace('.mdx', '')
      const raw = fs.readFileSync(path.join(workDir, f), 'utf-8')
      const { data } = matter(raw)
      return {
        slug,
        title: data.title,
        summary: data.summary || '',
        category: data.category || 'Project',
        stack: Array.isArray(data.stack) ? data.stack : [],
        status: data.status || 'planned',
        order: data.order ?? 999,
        draft: data.draft ?? false,
      }
    })
    .filter(study => !study.draft)
    .sort((a, b) => a.order - b.order)
}

export function getCaseStudy(slug: string) {
  const filePath = path.join(workDir, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    meta: {
      title: data.title,
      summary: data.summary || '',
      category: data.category || 'Project',
      stack: Array.isArray(data.stack) ? data.stack : [],
      status: data.status || 'planned',
      order: data.order ?? 999,
      draft: data.draft ?? false,
    } as Omit<CaseStudy, 'slug'>,
    content,
  }
}
