import { skillGroups } from '../../data/skills';
import { useLanguage } from '../../i18n/useLanguage';
import Panel from '../ui/Panel';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import Tag from '../ui/Tag';

const totalItems = skillGroups.reduce((sum, group) => sum + group.items.length, 0);

/** Skills presented as a drawing's bill of materials. */
export default function Skills() {
  const { t, ui } = useLanguage();
  const cols = 'md:grid-cols-[4rem_minmax(0,1.1fr)_minmax(0,1.6fr)_4rem]';

  return (
    <Section id="skills" index="02" title={ui.skills.title} subtitle={ui.skills.subtitle}>
      <Reveal>
        <Panel label={ui.skills.bom} aside={<span className="annot text-[10px]">Σ {totalItems}</span>}>
          {/* Column headers (desktop) */}
          <div aria-hidden className={`hidden border-b border-line/50 md:grid ${cols}`}>
            {[ui.skills.colItem, ui.skills.colCategory, ui.skills.colComponents, ui.skills.colQty].map((label, i) => (
              <span
                key={label}
                className={`annot px-4 py-2 text-[10px] ${i < 3 ? 'border-r border-line/25' : ''} ${
                  i === 0 || i === 3 ? 'text-center' : ''
                }`}
              >
                {label}
              </span>
            ))}
          </div>

          <ul className="divide-y divide-line/25">
            {skillGroups.map(({ title, description, icon: Icon, items }, i) => (
              <li key={title.en} className={`grid gap-y-3 p-4 md:p-0 ${cols} md:items-stretch`}>
                <span className="font-mono text-sm text-accent md:grid md:place-items-center md:border-r md:border-line/25 md:py-5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex gap-3 md:border-r md:border-line/25 md:px-4 md:py-5">
                  <Icon size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-muted" />
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-wide uppercase">{t(title)}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{t(description)}</p>
                  </div>
                </div>
                <div className="flex flex-wrap content-start gap-2 md:border-r md:border-line/25 md:px-4 md:py-5">
                  {items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
                <span className="hidden font-mono text-sm text-muted md:grid md:place-items-center md:py-5">
                  ×{items.length}
                </span>
              </li>
            ))}
          </ul>
        </Panel>
      </Reveal>
    </Section>
  );
}
