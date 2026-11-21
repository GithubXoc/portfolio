import { useContext } from 'react';
import { LanguageContext } from './context';
import type { Localized } from './languages';
import { ui } from './ui';

/**
 * Current language plus helpers:
 * - `t(value)` picks the current translation of a Localized value from src/data
 * - `ui` holds the interface strings (buttons, headings, labels)
 */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  const { lang, setLang } = ctx;

  return {
    lang,
    setLang,
    ui: ui[lang],
    t: <T,>(value: Localized<T>): T => value[lang],
  };
}
