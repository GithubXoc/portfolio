/** Section ids linked from the navbar, in order. Labels live in src/i18n/ui.ts (nav.*). */
export const navIds = ['about', 'skills', 'projects', 'contact'] as const;

export type NavId = (typeof navIds)[number];
export type SectionId = 'home' | NavId;
