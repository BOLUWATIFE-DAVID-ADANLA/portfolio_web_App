import React from 'react';

const Hero = () => {
const roles = ["Software Engineer", "Mobile Engineer", "Occasional Designer", "Technical Writer"];
  return (
    <section className="w-full  flex items-center bg-background">
      <div className="w-full px-4 md:px-6 md:max-w-6xl md:mx-auto py-10 md:py-20">

        <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-ink-muted border-t-2 border-ink inline-block pt-2 mb-6">
          Est. Lagos, Nigeria
        </p>

        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-7xl text-ink leading-none tracking-tight mb-4">
          Boluwatife <br />
          David Adanla
        </h1>

        <div className="flex items-center gap-2 flex-wrap mb-8">
          {roles.map((role, i) => (
            <React.Fragment key={role}>
              <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-ink-muted">
                {role}
              </span>
              {i < roles.length - 1 && (
                <span className="text-rule font-mono text-xs">·</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="w-16 border-t-2 border-ink mb-8"></div>

        <div className="max-w-xl space-y-4">
          <p className="font-body text-sm md:text-base text-ink-soft leading-relaxed">
           I build software across mobile and backend systems, with a focus on clean interfaces, thoughtful interactions, and systems that hold up under real-world conditions. Based in Lagos, I work across the stack with a bias toward product and user-facing experiences.

          </p>
          <p className="font-body text-sm md:text-base text-ink-soft leading-relaxed">

Away from the screen, I write. About systems, about trade-offs, about the decisions that never make it into the commit message. This is where the thinking behind the code gets documented — clearly, deliberately, and without the noise.

          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;