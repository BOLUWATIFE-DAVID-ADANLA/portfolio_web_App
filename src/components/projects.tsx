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
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold text-sm text-foreground">Work</h2>

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="md:grid md:grid-cols-[1fr_200px] md:gap-12 flex flex-col gap-1"
          >
            <div className="flex flex-col gap-1 min-w-0">
              <a
                href={project.href}
                className="link-underline inline-flex items-baseline w-fit text-sm text-foreground"
              >
                {project.title}
              </a>
              <p className="text-muted text-xs leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="text-foreground text-xs md:pt-[3px]">
              {project.tag}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
