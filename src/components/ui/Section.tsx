import type { ReactNode } from 'react';
import type { SectionId } from '../../data/navigation';
import Reveal from './Reveal';

interface SectionProps {
  id: SectionId;
  /** Small mono label above the title, e.g. "01". */
  index?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Section({ id, index, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {title && (
          <Reveal className="mb-12 md:mb-16">
            <div className="flex items-center gap-4">
              {index && <span className="font-mono text-sm text-accent">{index}.</span>}
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
              <span className="hidden h-px flex-1 bg-border sm:block" />
            </div>
            {subtitle && <p className="mt-4 max-w-2xl text-muted">{subtitle}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
