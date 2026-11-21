export const languages = [
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'ja', short: 'JA', label: '日本語' },
  { code: 'mn', short: 'MN', label: 'Монгол' },
] as const;

export type Lang = (typeof languages)[number]['code'];

/** A value translated into every supported language. */
export type Localized<T = string> = Record<Lang, T>;

export const defaultLang: Lang = 'en';

export function isLang(value: unknown): value is Lang {
  return languages.some((l) => l.code === value);
}

/** For values that are identical in every language (names, brands). */
export function same<T>(value: T): Localized<T> {
  return { en: value, ja: value, mn: value };
}
