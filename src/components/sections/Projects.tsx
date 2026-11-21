import { ArrowUpRight, Github } from 'lucide-react';
import { projects, type Project } from '../../data/projects';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import Tag from '../ui/Tag';

export default function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      title="Selected projects"
      subtitle="A few things I've built recently."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={0.08 * i} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { title, description, tech, icon: Icon, image, github, demo } = project;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-surface-2">
        {image ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            loading="lazy"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid size-full place-items-center bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--color-accent)_18%,transparent),transparent_60%)]">
            <Icon
              size={48}
              strokeWidth={1.5}
              className="text-accent/80 transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex shrink-0 items-center gap-1">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} source code`}
                className="grid size-8 place-items-center rounded-md text-muted transition-colors hover:text-accent"
              >
                <Github size={18} />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live demo`}
                className="grid size-8 place-items-center rounded-md text-muted transition-colors hover:text-accent"
              >
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}
