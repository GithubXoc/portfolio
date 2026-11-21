import { motion } from 'framer-motion';
import { languages } from '../../i18n/languages';
import { useLanguage } from '../../i18n/useLanguage';

export default function LanguageSwitcher() {
  const { lang, setLang, ui } = useLanguage();

  return (
    <div
      role="group"
      aria-label={ui.nav.language}
      className="flex items-center rounded-lg border border-border bg-surface/70 p-0.5"
    >
      {languages.map(({ code, short, label }) => {
        const selected = lang === code;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            title={label}
            aria-label={label}
            aria-pressed={selected}
            onClick={() => setLang(code)}
            className={`relative rounded-md px-2 py-1 font-mono text-xs font-medium transition-colors ${
              selected ? 'text-bg' : 'text-muted hover:text-fg'
            }`}
          >
            {selected && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-md bg-accent"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">{short}</span>
          </button>
        );
      })}
    </div>
  );
}
