import React from 'react';
import Link from 'next/link';
import { getAllCaseStudies } from '@/lib/work/work';

const statusLabel: Record<string, string> = {
  'in-progress': 'In progress',
  planned: 'Planned',
  shipped: 'Shipped',
};

const Projects = () => {
  const allStudies = getAllCaseStudies();
  const studies = allStudies.slice(0, 5);

  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold text-sm text-foreground">Work</h2>

      <div className="flex flex-col gap-4">
        {studies.map((study) => (
          <div
            key={study.slug}
            className="md:grid md:grid-cols-[1fr_200px] md:gap-12 flex flex-col gap-1"
          >
            <div className="flex flex-col gap-1 min-w-0">
              <Link
                href={`/work/${study.slug}`}
                className="link-underline inline-flex items-baseline w-fit text-sm text-foreground"
              >
                {study.title}
              </Link>
              <p className="text-muted text-xs leading-relaxed">
                {study.summary}
              </p>
            </div>
            <div className="flex md:flex-col md:items-end gap-2 md:gap-0.5 text-xs md:pt-[3px]">
              <span className="text-foreground">{study.category}</span>
              <span className="text-muted-2">{statusLabel[study.status]}</span>
            </div>
          </div>
        ))}

        {studies.length > 0 && (
          <Link href="/work" className="link-underline w-fit text-xs text-muted mt-1">
            All work →
          </Link>
        )}
      </div>
    </section>
  );
};

export default Projects;
