import type { Metadata } from 'next'
import CalBooking from '@/components/cal-booking'
import Reveal from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a call with Boluwatife David Adanla or get in touch.',
}

const channels = [
  { label: 'Email', value: 'adanlaboluwatife@gmail.com', href: 'mailto:adanlaboluwatife@gmail.com' },
  { label: 'LinkedIn', value: 'boluwatife-adanla', href: 'https://www.linkedin.com/in/boluwatife-adanla/' },
  { label: 'GitHub', value: 'BOLUWATIFE-DAVID-ADANLA', href: 'https://github.com/BOLUWATIFE-DAVID-ADANLA' },
]

const buttonBase =
  'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors'

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="relative border-y border-border bg-surface/50 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        />
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 flex flex-col items-center text-center gap-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              Open to new opportunities
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-4xl md:text-6xl font-light tracking-[-0.03em] text-foreground leading-[1.05]">
              Let&apos;s build something <span className="text-muted-2">together</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-xl text-base text-muted leading-[1.7]">
              Have a project, a role, or a question about automation and backend
              systems? Pick a time that suits you, or grab my CV first.
            </p>
          </Reveal>
          <Reveal delay={240} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              disabled
              aria-disabled="true"
              title="Coming soon"
              className={`${buttonBase} border border-border bg-background text-muted opacity-60 cursor-not-allowed`}
            >
              Check out my CV
            </button>
            <a
              href="#book"
              className={`${buttonBase} bg-foreground text-background hover:opacity-85`}
            >
              Book a call
            </a>
          </Reveal>
        </div>
      </section>

      <section id="book" className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20 scroll-mt-6 flex flex-col gap-10">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between pb-8 border-b border-border">
          <h2 className="text-3xl md:text-5xl font-light tracking-[-0.03em] text-foreground leading-[1.1] max-w-md">
            Book a 30-minute call
          </h2>
          <p className="text-sm text-muted leading-[1.7] max-w-xs">
            Tell me what you&apos;re working on and we&apos;ll figure out if I can help. Times are shown in your timezone.
          </p>
        </Reveal>

        <Reveal>
          <CalBooking />
        </Reveal>

        <Reveal className="grid grid-cols-1 sm:grid-cols-3 gap-px rounded-2xl border border-border bg-border overflow-hidden">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex flex-col gap-1 bg-background px-5 py-5 transition-colors hover:bg-surface"
            >
              <span className="text-xs text-muted-2">{c.label}</span>
              <span className="text-sm text-foreground break-all">{c.value}</span>
            </a>
          ))}
        </Reveal>
      </section>
    </div>
  )
}
