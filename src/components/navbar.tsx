import React from 'react'
import Link from 'next/link'
import ThemeToggle from './theme-toggle'

const Navbar = () => {
  return (
    <header className="w-full max-w-3xl mx-auto px-6 md:px-10 flex items-center justify-between py-6 md:py-8">
      <Link href="/" className="link-underline w-fit text-sm font-medium text-foreground">
        Boluwatife
      </Link>

      <div className="flex items-center gap-5">
        <Link href="/work" className="link-underline w-fit text-sm text-muted hover:text-foreground transition-colors">
          Work
        </Link>
        <Link href="/blog" className="link-underline w-fit text-sm text-muted hover:text-foreground transition-colors">
          Blog
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Navbar
