import React from 'react';

const Hero = () => {
  const roles = ["Software Engineer", "Mobile Engineer", "Technical Writer"];

  const bio = [
    "I build software across mobile and backend systems, with a focus on clean interfaces, thoughtful interactions, and systems that hold up under real-world conditions. Based in Lagos, I work across the stack with a bias toward product and user-facing experiences.",
    "I'm a tool-agnostic engineer — I see languages and frameworks as means to an end. I care most about turning ambiguous product ideas into working software that delivers measurable value.",
    "Away from the screen, I write — about systems, about trade-offs, about the decisions that never make it into the commit message.",
  ];

  const now = [
    { label: "Based in", value: "Lagos, Nigeria" },
    { label: "Timezone", value: "WAT · UTC+1" },
    { label: "Currently", value: "Open to work" },
    { label: "Writing since", value: "2021" },
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
