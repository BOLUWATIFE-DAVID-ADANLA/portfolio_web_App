import React from 'react'

export default function AboutPage() {
  const facts = [
    { number: "01", label: "Based in", value: "Lagos, Nigeria" },
    { number: "02", label: "Timezone", value: "WAT · UTC+1" },
    { number: "03", label: "Currently", value: "Open to work" },
    { number: "04", label: "Writing since", value: "2021" },
  ];

  const stack = [
    "Flutter", "Dart", "TypeScript", "React", "React Native", "Next.js", "Jetpack Compose", "Java",
    "Node.js", "Spring Boot", "PostgreSQL", "MongoDB",
    "Redis", "Kafka", "RabbitMQ", "Firebase", "Supabase",
    "Git", "Linux", "Figma", "AWS", "Docker",
  ];

  const principles = [
    {
      kicker: "I.",
      heading: "Design is a decision, not decoration.",
      body: "Every system choice has consequences. I think in trade-offs such as performance, scalability, and maintainability, and optimize for systems that hold under real-world conditions.",
    },
    {
      kicker: "II.",
      heading: "Code should read like good prose.",
      body: "Clever code is a liability. I write for clarity first, for the next engineer and for myself months later. Readability is part of the design.",
    },
    {
      kicker: "III.",
      heading: "Ship, learn, iterate.",
      body: "Shipping creates feedback. Feedback drives better decisions. I focus on getting working software into the hands of users early, then improving it based on real usage.",
    },
  ];

  return (
    <div className="w-full bg-background">
      <div className="w-full px-4 md:px-6 md:max-w-6xl md:mx-auto">

        {/* ── MASTHEAD ── */}
        <div className="border-b-4 border-ink pt-12 pb-6">
          <p className="font-mono text-[0.55rem] tracking-[0.3em] uppercase text-ink-muted mb-3">
            Profile · Vol. I
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="font-display font-black text-5xl md:text-8xl text-ink leading-none tracking-tight">
              The Man<br />Behind the<br />Keyboard.
            </h1>

            <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
              <div className="w-36 h-44 md:w-44 md:h-56 bg-ink-soft border border-ink overflow-hidden relative flex items-center justify-center">
                <img
                  src="/images/posts/1690108212760.jpg"
                  alt="Boluwatife David Adanla"
                  className="w-full h-full object-cover grayscale"
                />
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #0a0a0a 1px, transparent 1px)',
                    backgroundSize: '4px 4px',
                  }}
                />
              </div>
              <p className="font-mono text-[0.5rem] tracking-[0.15em] uppercase text-ink-muted border-t border-rule pt-1">
                Boluwatife David Adanla · Lagos, 2026
              </p>
            </div>
          </div>

          <p className="font-body italic text-sm text-ink-muted mt-4 leading-relaxed max-w-lg">
            Software Engineer focused on mobile and backend systems, building scalable, product-driven applications.
          </p>
        </div>

        {/* ── ROW 1: BIO + FACTS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-ink">

          <div className="md:col-span-2 p-6 md:p-8 border-b md:border-b-0 md:border-r border-ink">
            <p className="font-mono text-[0.55rem] tracking-[0.25em] uppercase text-ink-muted border-t-2 border-ink inline-block pt-2 mb-6">
              In his own words
            </p>

            <p className="font-body text-base md:text-lg text-ink-soft leading-relaxed mb-5 first-letter:font-display first-letter:font-black first-letter:text-6xl first-letter:float-left first-letter:leading-none first-letter:mr-2 first-letter:mt-1 first-letter:text-ink">
              I am Boluwatife David Adanla, a Software Engineer focused on building and refining product-led, scalable mobile solutions that drive business growth and operational efficiency. I care about turning real problems into working software that delivers measurable value.
            </p>

            <p className="font-body text-sm md:text-base text-ink-soft leading-relaxed mb-5">
              I am a tool-agnostic engineer. I see programming languages and frameworks as means to an end. While I primarily build with Dart and Java, I am comfortable adapting to any stack where the goal is clear: ship reliable software into the hands of users.
            </p>

            <p className="font-body text-sm md:text-base text-ink-soft leading-relaxed">
              I thrive in product-driven environments where engineers collaborate closely with product and design, take ownership end-to-end, and continuously improve both the system and the process behind it.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-border-subtle">
            {facts.map((f) => (
              <div key={f.number} className="p-5 flex flex-col justify-between gap-1">
                <span className="font-mono text-[0.48rem] tracking-[0.2em] uppercase text-ink-muted">
                  {f.number} · {f.label}
                </span>
                <span className="font-display font-bold text-xl text-ink">
                  {f.value}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* ── PRINCIPLES ── */}
        <div className="bg-ink px-6 py-2 flex items-center justify-between">
          <span className="font-mono text-[0.55rem] tracking-[0.3em] uppercase text-paper">
            Principles
          </span>
          <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-paper opacity-50">
            How I work
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-ink">
          {principles.map((p, i) => (
            <div
              key={p.kicker}
              className={`p-6 ${i < principles.length - 1 ? 'border-b md:border-b-0 md:border-r border-ink' : ''}`}
            >
              <span className="font-display font-black text-4xl text-ink-muted block mb-4">
                {p.kicker}
              </span>
              <h3 className="font-display font-bold text-lg text-ink leading-snug mb-3">
                {p.heading}
              </h3>
              <p className="font-body text-sm text-ink-muted leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── STACK ── */}
        <div className="bg-ink px-6 py-2 flex items-center justify-between">
          <span className="font-mono text-[0.55rem] tracking-[0.3em] uppercase text-paper">
            Stack
          </span>
          <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-paper opacity-50">
            Tools of the trade
          </span>
        </div>

        <div className="border-b border-ink p-6 md:p-8">
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-ink border border-ink px-3 py-2 hover:bg-ink hover:text-paper transition-colors duration-150"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-ink">
          <div>
            <p className="font-mono text-[0.55rem] tracking-[0.25em] uppercase text-ink-muted mb-1">
              Want to work together?
            </p>
            <p className="font-display font-bold text-xl md:text-2xl text-ink">
              The inbox is always open.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="font-mono text-[0.65rem] tracking-[0.2em] uppercase bg-ink text-paper px-6 py-3 hover:bg-ink-soft transition-colors duration-150 whitespace-nowrap"
            >
              Get in Touch ↗
            </a>
            <a
              href="/blog"
              className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-ink border border-ink px-6 py-3 hover:bg-paper-cream transition-colors duration-150 whitespace-nowrap"
            >
              Read the Blog
            </a>
          </div>
        </div>

        {/* ── END ── */}
        <div className="py-6 flex items-center justify-center">
          <span className="font-mono text-[0.5rem] tracking-[0.3em] uppercase text-ink-muted">
            · End of Profile ·
          </span>
        </div>

      </div>
    </div>
  )
}