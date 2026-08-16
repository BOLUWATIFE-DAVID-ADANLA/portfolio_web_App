import React from 'react';

const links = [
  { label: "GitHub", href: "https://github.com/BOLUWATIFE-DAVID-ADANLA" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/boluwatife-adanla/" },
];

const FindMe = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold text-sm text-foreground">Find me</h2>
      <div className="flex flex-col gap-1">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-baseline w-fit text-sm text-foreground"
          >
            {link.label}
          </a>
        ))}
        <a
          href="mailto:adanlaboluwatife@gmail.com"
          className="link-underline inline-flex items-baseline w-fit text-sm text-foreground"
        >
          adanlaboluwatife@gmail.com
        </a>
      </div>
    </section>
  );
};

export default FindMe;
