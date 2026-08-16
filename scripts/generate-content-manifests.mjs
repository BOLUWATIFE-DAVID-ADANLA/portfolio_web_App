// Cloudflare Workers has no real filesystem at request time, so content/*.mdx
// can't be listed via fs.readdirSync in the deployed Worker. This script runs
// in real Node.js at build time and bakes each directory's slugs + frontmatter
// into a JSON manifest that gets statically imported instead, for listing and
// metadata. The MDX bodies themselves are compiled at build time and loaded
// via dynamic import() directly from content/, not through this manifest.

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

function buildManifest(dir) {
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(dir, f), 'utf-8')
      const { data } = matter(raw)
      return { slug, data }
    })
}

const root = path.join(import.meta.dirname, '..')

const targets = [
  { dir: path.join(root, 'content/work'), out: path.join(root, 'src/lib/work/work.generated.json') },
  { dir: path.join(root, 'content/posts'), out: path.join(root, 'src/lib/posts/post.generated.json') },
]

for (const { dir, out } of targets) {
  const manifest = buildManifest(dir)
  fs.writeFileSync(out, JSON.stringify(manifest, null, 2) + '\n')
  console.log(`Wrote ${manifest.length} entries to ${path.relative(root, out)}`)
}
