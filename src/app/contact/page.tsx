import type { Metadata } from 'next'
import Link from 'next/link'
import CalBooking from '@/components/cal-booking'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a call with Boluwatife David Adanla or get in touch.',
}

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 md:px-10 py-10 md:py-16 flex flex-col gap-14">
      <div className="flex flex-col gap-3">
        <Link href="/" className="link-underline w-fit text-xs text-muted">
          ← Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-light tracking-[-0.02em] text-foreground">
          Contact
        </h1>
        <p className="text-sm text-muted leading-[1.7] max-w-prose">
          Have a project, a role, or a question? Book a 30-minute call below, or
          reach me at{' '}
          <a
            href="mailto:adanlaboluwatife@gmail.com"
            className="link-underline text-foreground"
          >
            adanlaboluwatife@gmail.com
          </a>
          .
        </p>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="font-semibold text-sm text-foreground">Résumé</h2>
        <button
          type="button"
          disabled
          aria-disabled="true"
          title="Coming soon"
          className="w-fit rounded-full border border-border px-4 py-2 text-sm text-muted opacity-60 cursor-not-allowed"
        >
          Check out my CV
        </button>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-semibold text-sm text-foreground">Book a call</h2>
        <CalBooking />
      </section>
    </div>
  )
}
