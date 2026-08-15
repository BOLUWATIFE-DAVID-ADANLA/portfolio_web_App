import React from 'react';

const Hero = () => {
  const roles = ["Backend Engineer", "AI Integration", "Mobile Engineer"];

  const bio = [
    "I'm a software engineer with three years building backend and mobile systems — Java, Spring Boot, and Dart — with production experience across fintech and logistics products. I care about turning ambiguous, real-world problems into working software that delivers measurable value.",
    "Lately that same discipline has extended into AI implementation: RAG pipelines, MCP tooling, and agent harnesses wired into real infrastructure, so LLM output is something a business can trust and act on, not just a demo.",
    "I'm tool-agnostic — languages, frameworks, and models are means to an end. I thrive close to the business, hearing a problem directly from a stakeholder and owning the system end to end.",
  ];

  const now = [
    { label: "Based in", value: "Lagos, Nigeria" },
    { label: "Timezone", value: "WAT · UTC+1" },
    { label: "Currently", value: "Open to work" },
    { label: "Focus", value: "Backend + AI integration" },
  ];

  return (
    <section className="md:grid md:grid-cols-[1fr_200px] md:gap-12 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-sm text-muted leading-none mb-3">I&apos;m</p>
          <h1 className="text-4xl md:text-5xl font-light tracking-[-0.02em] leading-none text-foreground">
            Boluwatife
          </h1>
          <p className="text-sm text-muted mt-3">
            {roles.join(" · ")}
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-prose text-sm leading-[1.7] text-foreground">
          {bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <aside className="md:pt-1">
        <h2 className="font-semibold text-sm text-foreground mb-4">Now</h2>
        <div className="flex flex-col gap-3">
          {now.map((f) => (
            <div key={f.label} className="flex flex-col gap-0.5">
              <span className="text-xs text-muted">{f.label}</span>
              <span className="text-sm text-foreground">{f.value}</span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
};

export default Hero;
