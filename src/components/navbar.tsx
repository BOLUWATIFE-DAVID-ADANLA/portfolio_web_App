import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  const navItems = [
    { label: "Home",  href: "/" },
    { label: "Blog",  href: "/blog" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav className="bg-paper-cream border-b-2 border-ink w-full">
      <div className="border-t-4 border-ink" />

      <div className="w-full px-4 md:px-6 md:max-w-6xl md:mx-auto flex items-center justify-between py-3">

        <Link
          href="/"
          className="font-display font-black text-xl text-ink tracking-tight leading-none select-none shrink-0"
        >
          BA
        </Link>

        <ul className="flex items-center gap-0">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="
                  font-mono text-[0.77rem] tracking-[0.12em] uppercase
                  text-ink px-2 py-2
                  border border-transparent
                  hover:border-ink hover:bg-paper
                  transition-colors duration-150
                "
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li className="ml-2">
            <Link
              href="#"
              className="
                font-mono text-[0.77rem] tracking-[0.12em] uppercase
                bg-ink text-paper px-3 py-2
                hover:bg-ink-soft
                transition-colors duration-150 whitespace-nowrap
              "
            >
              Subscribe
            </Link>
          </li>
        </ul>

      </div>

      <div className="border-t border-border-subtle" />
    </nav>
  )
}

export default Navbar