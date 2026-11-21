import { highlights, profile } from '../../data/profile';
import { useLanguage } from '../../i18n/useLanguage';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';

export default function About() {
  const { t, ui } = useLanguage();

  return (
    <Section id="about" index="01" title={ui.about.title}>
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal className="min-w-0 space-y-5 text-lg leading-relaxed text-muted">
          {t(profile.about).map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>

        <ul className="space-y-4">
          {highlights.map(({ icon: Icon, title, text }, i) => (
            <li key={title.en}>
              <Reveal delay={0.1 * i} className="flex gap-4 rounded-xl border border-border bg-surface/60 p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-semibold">{t(title)}</h3>
                  <p className="mt-1 text-sm text-muted">{t(text)}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
