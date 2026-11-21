import { Code2, Rocket, Sparkles } from 'lucide-react';
import { profile } from '../../data/profile';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';

const principles = [
  {
    icon: Code2,
    title: 'Clean, maintainable code',
    text: 'Readable structure and sensible abstractions that keep projects easy to change.',
  },
  {
    icon: Sparkles,
    title: 'Thoughtful UI',
    text: 'Interfaces that are responsive, accessible and pleasant to use.',
  },
  {
    icon: Rocket,
    title: 'End-to-end delivery',
    text: 'From database schema to API to deployment — I can own the whole feature.',
  },
];

export default function About() {
  return (
    <Section id="about" index="01" title="About me">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>

        <ul className="space-y-4">
          {principles.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={0.1 * i} className="flex gap-4 rounded-xl border border-border bg-surface/60 p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-muted">{text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
