import type { ReactNode } from 'react';
import type { SectionId } from '../../data/navigation';
import { useLanguage } from '../../i18n/useLanguage';
import Reveal from './Reveal';

export const SHEET_COUNT = 4;

interface SectionProps {
  id: SectionId;
  /** Sheet number, e.g. "01". */
  index: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

/** A page section styled as one sheet of a drawing set. */
export default function Section({ id, index, title, subtitle, children }: SectionProps) {
  const { ui } = useLanguage();

  return (
    <section id={id} className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 md:mb-16">
          <div className="flex items-center gap-3">
            <span className="annot border border-accent/70 px-2 py-0.5 text-accent">
              {ui.section.sheet} {index} / 0{SHEET_COUNT}
            </span>
            <span className="h-px flex-1 bg-line/30" />
            <span className="annot">KH-{index}</span>
          </div>
          <h2 className="mt-6 font-display text-5xl font-semibold tracking-tight uppercase md:text-7xl">
            {title}
          </h2>
          {subtitle && <p className="mt-4 max-w-2xl text-muted">{subtitle}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
