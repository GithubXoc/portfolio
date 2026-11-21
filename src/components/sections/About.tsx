import { highlights, profile } from '../../data/profile';
import { useLanguage } from '../../i18n/useLanguage';
import Panel from '../ui/Panel';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';

export default function About() {
  const { t, ui } = useLanguage();

  return (
    <Section id="about" index="01" title={ui.about.title}>
      <div className="grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:gap-14">
        {/* General notes — numbered like the notes block on a drawing */}
        <Reveal className="min-w-0">
          <p className="annot mb-6 text-fg">{ui.about.notes}</p>
          <ol className="space-y-6">
            {t(profile.about).map((paragraph, i) => (
              <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-3">
                <span className="grid size-8 place-items-center border border-line/50 font-mono text-xs text-accent">
                  {i + 1}
                </span>
                <p className="text-[17px] leading-relaxed text-fg/85">{paragraph}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* Legend */}
        <Reveal delay={0.1} className="min-w-0">
          <Panel label={ui.about.legend}>
            <ul className="divide-y divide-line/25">
              {highlights.map(({ icon: Icon, title, text }) => (
                <li key={title.en} className="flex gap-4 p-4">
                  <span className="grid size-11 shrink-0 place-items-center border border-line/60 text-accent">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-wide uppercase">{t(title)}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{t(text)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        </Reveal>
      </div>
    </Section>
  );
}
