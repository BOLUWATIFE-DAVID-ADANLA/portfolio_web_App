import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/boluwatife-adanla/" },
    { label: "GitHub",   href: "https://github.com/BOLUWATIFE-DAVID-ADANLA" },
    { label: "Twitter",  href: "#" },
  ];

  const year = new Date().getFullYear();
  const time = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Africa/Lagos',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date());

  return (
    <footer className="bg-paper-cream border-t-2 border-ink w-full overflow-hidden">

      <div className="border-t border-border-subtle py-6" />

      <div className="w-full px-4 md:px-6 md:max-w-6xl md:mx-auto py-8 flex flex-col items-center md:items-stretch gap-6">

        {/* main row */}
        <div className="flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left gap-4">

          {/* name + timezone */}
          <div>
            <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-ink-muted mb-1">
              Est. {year} · WAT (UTC+1) · {time}
            </p>
            <h2 className="font-display font-black text-2xl md:text-3xl text-ink leading-none tracking-tight">
              Boluwatife David Adanla
            </h2>
          </div>

          {/* socials */}
          <ul className="flex items-center justify-center md:justify-end gap-1 flex-wrap">
            {socials.map((s, i) => (
              <React.Fragment key={s.label}>
                <li>
                  <Link
                    href={s.href}
                    className="
                      font-mono text-[0.65rem] tracking-[0.2em] uppercase
                      text-ink px-3 py-2
                      border border-transparent
                      hover:border-ink hover:bg-paper
                      transition-colors duration-150
                    "
                  >
                    {s.label}
                  </Link>
                </li>
                {i < socials.length - 1 && (
                  <li className="text-rule font-mono text-xs select-none">·</li>
                )}
              </React.Fragment>
            ))}
          </ul>

        </div>

        {/* bottom rule + copyright */}
        <div className="border-t border-ink pt-4 flex flex-col items-center text-center md:flex-row md:justify-between md:items-center md:text-left gap-2">
          <p className="font-mono text-[0.58rem] tracking-[0.15em] uppercase text-ink-muted">
            © {year} Boluwatife David Adanla · All Rights Reserved
          </p>
          <p className="font-mono text-[0.58rem] tracking-[0.15em] uppercase text-rule">
            Built with precision · Lagos, Nigeria
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer