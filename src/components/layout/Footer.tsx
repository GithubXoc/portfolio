import { ArrowUp } from 'lucide-react';
import type { ReactNode } from 'react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../i18n/useLanguage';
import { SHEET_COUNT } from '../ui/Section';
import SocialLinks from '../ui/SocialLinks';

function Cell({ label, children, className = '' }: { label: string; children: ReactNode; className?: string }) {
  return (
    <div className={`border-line/50 px-4 py-3 ${className}`}>
      <div className="annot text-[10px]">{label}</div>
      <div className="mt-1 font-display text-lg font-semibold tracking-wide uppercase">{children}</div>
    </div>
  );
}

/** The drawing's title block. */
export default function Footer() {
  const { t, ui } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-6xl px-5 pt-8 pb-12 sm:px-8 xl:pb-16">
      <div className="grid border border-line/50 bg-panel/70 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.3fr_0.8fr_0.8fr_0.7fr_auto]">
        <Cell label={ui.footer.drawnBy} className="border-b lg:border-r lg:border-b-0">
          {t(profile.name)}
        </Cell>
        <Cell label={ui.footer.titleLabel} className="border-b sm:border-l lg:border-r lg:border-b-0 lg:border-l-0">
          {ui.footer.titleValue}
        </Cell>
        <Cell label={ui.footer.sheetLabel} className="border-b lg:border-r lg:border-b-0">
          0{SHEET_COUNT} / 0{SHEET_COUNT}
        </Cell>
        <Cell label={ui.footer.revision} className="border-b sm:border-l lg:border-r lg:border-b-0 lg:border-l-0">
          {year}
        </Cell>
        <Cell label={ui.footer.scale} className="border-b sm:border-b-0 lg:border-r">
          1 : 1
        </Cell>
        <div className="flex items-center justify-center gap-2 px-4 py-3 sm:border-l sm:border-line/50 lg:border-l-0">
          <SocialLinks />
          <a
            href="#home"
            aria-label={ui.footer.backToTop}
            title={ui.footer.backToTop}
            className="grid size-10 place-items-center border border-accent/70 text-accent transition-colors hover:bg-accent hover:text-bg"
          >
            <ArrowUp size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
      <p className="annot mt-4 text-center text-[10px] normal-case sm:text-left">
        © {year} {t(profile.name)}. {ui.footer.builtWith}
      </p>
    </footer>
  );
}
