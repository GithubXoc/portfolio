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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const elevated = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        elevated ? 'border-b border-border/70 bg-bg/80 backdrop-blur-lg' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#home" className="font-mono text-lg font-semibold tracking-tight" onClick={() => setOpen(false)}>
          {profile.nickname.toLowerCase()}
          <span className="text-accent">.dev</span>
        </a>

        <div className="flex items-center gap-2 md:gap-4">
          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'page' : undefined}
                  className={`relative rounded-md px-3 py-2 text-sm whitespace-nowrap transition-colors ${
                    active === id ? 'text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {ui.nav[id]}
                  {active === id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <LanguageSwitcher />

          {/* Mobile toggle */}
          <button
            type="button"
            className="grid size-10 place-items-center rounded-lg text-muted hover:text-fg md:hidden"
            aria-label={open ? ui.nav.closeMenu : ui.nav.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            className="overflow-hidden border-t border-border/70 px-5 md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navIds.map((id, i) => (
              <li key={id} className={i === 0 ? 'pt-2' : i === navIds.length - 1 ? 'pb-4' : ''}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 py-3 text-base ${active === id ? 'text-accent' : 'text-muted'}`}
                >
                  <span className="font-mono text-xs text-accent/70">0{i + 1}.</span>
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
