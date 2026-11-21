import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { useState } from 'react';
import { projectCategories, projects, type Project, type ProjectCategory } from '../../data/projects';
import { useLanguage } from '../../i18n/useLanguage';
import Corners from '../ui/Corners';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import Tag from '../ui/Tag';

const codePrefix: Record<ProjectCategory, string> = { work: 'W', personal: 'P' };

export default function Projects() {
  const { t, ui } = useLanguage();
  const [active, setActive] = useState<ProjectCategory>('work');
  const visible = projects.filter((p) => p.category === active);
  const activeCategory = projectCategories.find((c) => c.id === active)!;

  return (
    <Section id="projects" index="03" title={ui.projects.title} subtitle={ui.projects.subtitle}>
      <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div role="tablist" aria-label={ui.projects.typeLabel} className="flex border border-line/50">
          {projectCategories.map(({ id, label }) => {
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
                className={`flex flex-1 items-center justify-center gap-3 border-r border-line/50 px-5 py-2.5 font-mono text-xs tracking-wider uppercase transition-colors last:border-r-0 sm:flex-none ${
                  selected ? 'bg-accent text-bg' : 'text-muted hover:bg-line/10 hover:text-fg'
                }`}
              >
                <span className="opacity-70">{codePrefix[id]}</span>
                {t(label)}
                <span className="opacity-70">[{String(count).padStart(2, '0')}]</span>
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
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {visible.map((project, i) => (
              <motion.div
                key={project.title.en}
                className="h-full min-w-0"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
              >
                <ProjectCard project={project} code={`${codePrefix[active]}-${String(i + 1).padStart(2, '0')}`} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}

function ProjectCard({ project, code }: { project: Project; code: string }) {
  const { t, ui } = useLanguage();
  const { tech, icon: Icon, image, github, demo } = project;
  const title = t(project.title);
  const meta = [project.role, project.company, project.period]
    .filter((v) => v !== undefined)
    .map(t)
    .join(' · ');

  return (
    <article className="group relative flex h-full flex-col border border-line/50 bg-panel/70 transition-colors hover:bg-panel">
      <Corners className="border-transparent group-hover:border-accent" />

      {/* Drawing-number strip */}
      <div className="flex items-stretch border-b border-line/50">
        <span className="grid place-items-center border-r border-line/50 px-3 font-mono text-xs text-accent">
          {code}
        </span>
        <span className="annot flex-1 px-3 py-2 text-[10px] leading-relaxed">{meta || '—'}</span>
        <span className="grid place-items-center border-l border-line/50 px-3 text-muted group-hover:text-accent">
          <Icon size={16} strokeWidth={1.5} />
        </span>
      </div>

      {image ? (
        <img
          src={image}
          alt={`${title} ${ui.projects.screenshot}`}
          loading="lazy"
          className="aspect-[16/9] w-full border-b border-line/50 object-cover"
        />
      ) : (
        <div aria-hidden className="hatch grid h-24 place-items-center border-b border-line/50">
          <span className="grid size-14 place-items-center rounded-full border border-line/70 bg-bg text-fg/90">
            <Icon size={24} strokeWidth={1.25} />
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl leading-tight font-semibold tracking-wide uppercase">{title}</h3>
          <div className="-mt-1 flex shrink-0 gap-1">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} — ${ui.projects.sourceCode}`}
                className="grid size-8 place-items-center border border-line/40 text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Github size={15} strokeWidth={1.5} />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} — ${ui.projects.liveDemo}`}
                className="grid size-8 place-items-center border border-line/40 text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </a>
            )}
          </div>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{t(project.description)}</p>
        <div className="mt-5 border-t border-dashed border-line/30 pt-4">
          <span className="annot text-[10px]">{ui.projects.spec}</span>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tech.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
