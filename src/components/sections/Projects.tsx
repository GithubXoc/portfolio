import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, Github, User } from 'lucide-react';
import { useState } from 'react';
import { projectCategories, projects, type Project, type ProjectCategory } from '../../data/projects';
import { useLanguage } from '../../i18n/useLanguage';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import Tag from '../ui/Tag';

const categoryIcons = { work: Briefcase, personal: User } as const;

export default function Projects() {
  const { t, ui } = useLanguage();
  const [active, setActive] = useState<ProjectCategory>('work');
  const visible = projects.filter((p) => p.category === active);
  const activeCategory = projectCategories.find((c) => c.id === active)!;

  return (
    <Section id="projects" index="03" title={ui.projects.title} subtitle={ui.projects.subtitle}>
      <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          role="tablist"
          aria-label={ui.projects.typeLabel}
          className="inline-flex w-full rounded-xl border border-border bg-surface/70 p-1 sm:w-auto"
        >
          {projectCategories.map(({ id, label }) => {
            const Icon = categoryIcons[id];
            const count = projects.filter((p) => p.category === id).length;
            const selected = active === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                id={`tab-${id}`}
                aria-selected={selected}
                aria-controls="projects-panel"
                onClick={() => setActive(id)}
                className={`relative flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors sm:flex-none ${
                  selected ? 'text-bg' : 'text-muted hover:text-fg'
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="project-tab"
                    className="absolute inset-0 rounded-lg bg-accent"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <Icon size={16} className="relative" />
                <span className="relative">{t(label)}</span>
                <span
                  className={`relative rounded-md px-1.5 font-mono text-xs ${
                    selected ? 'bg-bg/15' : 'bg-surface-2'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
        <p className="text-sm text-muted">{t(activeCategory.description)}</p>
      </Reveal>

      <div id="projects-panel" role="tabpanel" aria-labelledby={`tab-${active}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {visible.map((project, i) => (
              <motion.div
                key={project.title.en}
                className="h-full min-w-0"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.06 * i }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { t, ui } = useLanguage();
  const { tech, icon: Icon, image, github, demo } = project;
  const title = t(project.title);
  const description = t(project.description);
  const meta = [project.role, project.company, project.period]
    .filter((v) => v !== undefined)
    .map(t)
    .join(' · ');

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-surface-2">
        {image ? (
          <img
            src={image}
            alt={`${title} ${ui.projects.screenshot}`}
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
        {meta && <p className="mb-2 font-mono text-xs text-accent">{meta}</p>}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex shrink-0 items-center gap-1">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} — ${ui.projects.sourceCode}`}
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
                aria-label={`${title} — ${ui.projects.liveDemo}`}
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
