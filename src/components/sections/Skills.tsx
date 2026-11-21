import { skillGroups } from '../../data/skills';
import { useLanguage } from '../../i18n/useLanguage';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import Tag from '../ui/Tag';

export default function Skills() {
  const { t, ui } = useLanguage();

  return (
    <Section id="skills" index="02" title={ui.skills.title} subtitle={ui.skills.subtitle}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ title, description, icon: Icon, items }, i) => (
          <Reveal
            key={title.en}
            delay={0.08 * i}
            className="group h-full rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-accent/40"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-accent/10 text-accent">
                <Icon size={20} />
              </span>
              <h3 className="text-lg font-semibold">{t(title)}</h3>
            </div>
            <p className="mt-3 text-sm text-muted">{t(description)}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
