import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../i18n/useLanguage';
import ButtonLink from '../ui/ButtonLink';
import Corners from '../ui/Corners';
import Dimension from '../ui/Dimension';
import Panel from '../ui/Panel';
import SitePlan from '../ui/SitePlan';
import SocialLinks from '../ui/SocialLinks';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const { t, ui } = useLanguage();

  return (
    <section id="home" className="relative flex min-h-svh items-center pt-14 xl:pt-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        <div className="@container min-w-0">
          <motion.p {...fadeUp(0)} className="annot">
            {ui.hero.drawing}
          </motion.p>

          <motion.div {...fadeUp(0.05)} className="mt-10 max-w-xl">
            <Dimension label={profile.nickname} />
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-2 font-display text-[clamp(2.75rem,17.5cqi,7.5rem)] leading-[0.9] font-bold tracking-tight uppercase"
          >
            {t(profile.name)}
          </motion.h1>

          <motion.div {...fadeUp(0.15)} className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="h-px w-10 bg-accent" />
            <p className="font-display text-2xl font-medium tracking-wide text-accent uppercase sm:text-3xl">
              {t(profile.role)}
            </p>
          </motion.div>

          <motion.p {...fadeUp(0.2)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {t(profile.tagline)}
          </motion.p>

          <motion.div {...fadeUp(0.25)} className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="#projects">
              {ui.hero.viewWork} <ArrowRight size={14} />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              {ui.hero.getInTouch}
            </ButtonLink>
            <SocialLinks className="sm:ml-2" />
          </motion.div>

          {profile.availability && (
            <motion.div
              initial={{ opacity: 0, scale: 1.4, rotate: -14 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ duration: 0.35, delay: 0.9, ease: 'easeOut' }}
              className="mt-12 inline-block origin-left"
            >
              <span className="stamp">{t(profile.availability)}</span>
            </motion.div>
          )}
        </div>

        <motion.div {...fadeUp(0.2)} className="min-w-0 space-y-6">
          <div className="relative">
            <Corners />
            <Panel
              label={ui.hero.detail}
              aside={<span className="annot text-[10px]">1 : 500</span>}
              bodyClassName="p-4"
            >
              <SitePlan />
              <div className="mt-3 flex items-center justify-between">
                <ScaleBar />
                <NorthArrow />
              </div>
            </Panel>
          </div>
          <SpecTable />
        </motion.div>
      </div>
    </section>
  );
}

function ScaleBar() {
  return (
    <div aria-hidden className="flex items-end gap-2">
      <div className="flex h-2 border border-line/70">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`w-6 ${i % 2 === 0 ? 'bg-line/70' : ''}`} />
        ))}
      </div>
      <span className="annot text-[9px] leading-none">0 — 50 m</span>
    </div>
  );
}

function NorthArrow() {
  return (
    <svg aria-hidden viewBox="0 0 20 28" className="h-7 w-5 text-line">
      <path d="M10 2 16 22 10 17 4 22Z" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <path d="M10 2 10 17 4 22Z" fill="currentColor" />
      <text x="10" y="28" fontSize="6" textAnchor="middle" fill="currentColor" fontFamily="IBM Plex Mono, monospace">
        N
      </text>
    </svg>
  );
}

/** The developer "spec sheet" — a title-block style table (kept in English, like code). */
function SpecTable() {
  const { ui } = useLanguage();
  const rows: [string, string][] = [
    ['name', profile.name.en],
    ['role', profile.role.en],
    ['stack', profile.stack.join(' / ')],
    ['loves', 'clean code'],
    ['gaming', 'true'],
  ];

  return (
    <Panel label={ui.hero.spec} aside={<span className="annot text-[10px]">profile.ts</span>}>
      <dl className="divide-y divide-line/25 font-mono text-[13px]">
        {rows.map(([key, value]) => (
          <div key={key} className="grid grid-cols-[88px_1fr]">
            <dt className="border-r border-line/25 px-4 py-2 text-muted uppercase">{key}</dt>
            <dd className={`px-4 py-2 ${value === 'true' ? 'text-accent' : 'text-fg'}`}>{value}</dd>
          </div>
        ))}
      </dl>
    </Panel>
  );
}
