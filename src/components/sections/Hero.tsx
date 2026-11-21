import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../i18n/useLanguage';
import ButtonLink from '../ui/ButtonLink';
import SocialLinks from '../ui/SocialLinks';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const { t, ui } = useLanguage();

  return (
    <section id="home" className="relative flex min-h-svh items-center pt-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-5 py-16 sm:px-8 lg:grid-cols-[1.25fr_1fr]">
        <div>
          {profile.availability && (
            <motion.div
              {...fadeUp(0)}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs text-muted"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {t(profile.availability)}
            </motion.div>
          )}

          <motion.p {...fadeUp(0.05)} className="font-mono text-sm text-accent">
            {ui.hero.greeting}
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
          >
            {t(profile.name)}.
          </motion.h1>

          <motion.p
            {...fadeUp(0.15)}
            className="mt-3 text-3xl font-bold tracking-tight text-muted sm:text-4xl lg:text-5xl"
          >
            {t(profile.role)}
          </motion.p>

          <motion.p {...fadeUp(0.2)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {t(profile.tagline)}
          </motion.p>

          <motion.div {...fadeUp(0.25)} className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="#projects">
              {ui.hero.viewWork} <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              {ui.hero.getInTouch}
            </ButtonLink>
            <SocialLinks className="ml-1" />
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.3)} className="hidden lg:block">
          <CodeCard />
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label={ui.hero.scrollDown}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-accent md:block"
      >
        <ChevronDown className="animate-bounce" />
      </a>
    </section>
  );
}

/** A small editor-style card that introduces the developer as code. */
function CodeCard() {
  const { stack } = profile;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface/80 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted">profile.ts</span>
      </div>
      <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-7">
        <code>
          <span className="text-[#c792ea]">const</span> <span className="text-fg">{profile.nickname.toLowerCase()}</span>{' '}
          <span className="text-muted">=</span> {'{'}
          {'\n'}  <span className="text-[#82aaff]">name</span>: <S>{profile.name.en}</S>,
          {'\n'}  <span className="text-[#82aaff]">role</span>: <S>{profile.role.en}</S>,
          {'\n'}  <span className="text-[#82aaff]">stack</span>: [
          {stack.map((s, i) => (
            <span key={s}>
              <S>{s}</S>
              {i < stack.length - 1 && ', '}
            </span>
          ))}
          ],
          {'\n'}  <span className="text-[#82aaff]">loves</span>: <S>clean code</S>,
          {'\n'}  <span className="text-[#82aaff]">gaming</span>: <span className="text-[#f78c6c]">true</span>,
          {'\n'}
          {'}'};
        </code>
      </pre>
    </div>
  );
}

function S({ children }: { children: string }) {
  return <span className="text-accent">'{children}'</span>;
}
