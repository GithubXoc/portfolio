import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { LanguageContext } from './context';
import { defaultLang, isLang, type Lang } from './languages';
import { ui } from './ui';

const STORAGE_KEY = 'lang';

/** Saved choice first, then the browser language, then English. */
function detectLanguage(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    // Storage can be unavailable (private mode, blocked cookies).
  }
  const browser = navigator.language.slice(0, 2).toLowerCase();
  return isLang(browser) ? browser : defaultLang;
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = ui[lang].meta.title;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore — the choice just won't persist.
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
