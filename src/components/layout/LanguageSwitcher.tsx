import { languages } from '../../i18n/languages';
import { useLanguage } from '../../i18n/useLanguage';

export default function LanguageSwitcher() {
  const { lang, setLang, ui } = useLanguage();

  return (
    <div role="group" aria-label={ui.nav.language} className="flex border border-line/50">
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
            className={`border-r border-line/50 px-2.5 py-1.5 font-mono text-[11px] font-medium tracking-wider transition-colors last:border-r-0 ${
              selected ? 'bg-accent text-bg' : 'text-muted hover:bg-line/10 hover:text-fg'
            }`}
          >
            {short}
          </button>
        );
      })}
    </div>
  );
}
