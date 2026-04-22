import React from 'react';

const projects = [
  {
    title: "Project One",
    description: "A short description of what this project does and why it matters.",
    tag: "Web App",
    href: "#",
  },
  {
    title: "Project Two",
    description: "A short description of what this project does and why it matters.",
    tag: "Tool",
    href: "#",
  },
  {
    title: "Project Three",
    description: "A short description of what this project does and why it matters.",
    tag: "Open Source",
    href: "#",
  },
  {
    title: "Project Four",
    description: "A short description of what this project does and why it matters.",
    tag: "Design",
    href: "#",
  },
];

const Projects = () => {
  return (
    <section className="w-full bg-background ">
      <div className="w-full px-4 md:px-6 md:max-w-6xl md:mx-auto py-4 md:py-15">

        {/* section header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="font-mono text-[0.55rem] tracking-[0.25em] uppercase text-ink-muted mb-1">
              Work
            </p>
            <h2 className="font-display font-black text-2xl md:text-3xl text-ink leading-none">
              Selected Projects
            </h2>
          </div>

          <a
            href="#"
            className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-ink border-b border-ink hover:text-ink-muted hover:border-ink-muted transition-colors duration-150"
          >
            All Projects ↗
          </a>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border-subtle border border-border-subtle">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group bg-background hover:bg-surface transition-colors duration-150 p-6 flex flex-col justify-between gap-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-ink-muted block mb-2">
                    {project.tag}
                  </span>
                  <h3 className="font-display font-bold text-lg text-ink leading-snug group-hover:text-ink-muted transition-colors duration-150">
                    {project.title}
                  </h3>
                </div>
                <span className="font-mono text-ink-muted text-xs shrink-0 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150">
                  ↗
                </span>
              </div>

              <p className="font-body text-sm text-ink-muted leading-relaxed">
                {project.description}
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;