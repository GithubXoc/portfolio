import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navIds } from '../../data/navigation';
import { profile } from '../../data/profile';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useLanguage } from '../../i18n/useLanguage';
import LanguageSwitcher from './LanguageSwitcher';

const sectionIds = ['home', ...navIds];

export default function Navbar() {
  const { ui } = useLanguage();
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/40 bg-bg/85 backdrop-blur-md xl:inset-x-5 xl:top-5">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-8 place-items-center border border-line/70 font-display text-lg font-bold">
            {profile.nickname[0]}
          </span>
          <span className="annot hidden text-fg sm:inline">{profile.nickname.toLowerCase()}.dev</span>
        </a>

        <div className="flex items-center gap-2 md:gap-6">
          {/* Desktop links */}
          <ul className="hidden items-center gap-5 md:flex">
            {navIds.map((id, i) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'page' : undefined}
                  className={`group flex items-center gap-2 font-mono text-xs tracking-wider whitespace-nowrap uppercase transition-colors ${
                    active === id ? 'text-accent' : 'text-muted hover:text-fg'
                  }`}
                >
                  <span className={`size-1.5 ${active === id ? 'bg-accent' : 'border border-current'}`} />
                  <span className="opacity-60">0{i + 1}</span>
                  {ui.nav[id]}
                </a>
              </li>
            ))}
          </ul>

          <LanguageSwitcher />

          {/* Mobile toggle */}
          <button
            type="button"
            className="grid size-9 place-items-center border border-line/50 text-muted hover:text-fg md:hidden"
            aria-label={open ? ui.nav.closeMenu : ui.nav.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            className="overflow-hidden border-t border-line/40 px-5 md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navIds.map((id, i) => (
              <li key={id} className="border-b border-line/20 last:border-b-0">
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-4 py-4 font-mono text-sm tracking-wider uppercase ${
                    active === id ? 'text-accent' : 'text-fg'
                  }`}
                >
                  <span className="text-xs text-muted">0{i + 1}</span>
                  {ui.nav[id]}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
