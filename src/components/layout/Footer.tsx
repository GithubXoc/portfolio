import { ArrowUp } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../i18n/useLanguage';
import SocialLinks from '../ui/SocialLinks';

export default function Footer() {
  const { t, ui } = useLanguage();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 sm:flex-row sm:justify-between sm:px-8">
        <p className="text-center text-sm text-muted sm:text-left">
          © {new Date().getFullYear()} {t(profile.name)}. {ui.footer.builtWith}
        </p>
        <div className="flex items-center gap-4">
          <SocialLinks />
          <a
            href="#home"
            aria-label={ui.footer.backToTop}
            title={ui.footer.backToTop}
            className="grid size-10 place-items-center rounded-lg border border-border text-muted transition-colors hover:border-accent/60 hover:text-accent"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
