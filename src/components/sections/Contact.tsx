import { Check, Copy, Mail } from 'lucide-react';
import { useState } from 'react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../i18n/useLanguage';
import ButtonLink from '../ui/ButtonLink';
import Corners from '../ui/Corners';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SocialLinks from '../ui/SocialLinks';

export default function Contact() {
  const { t, ui } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be unavailable (e.g. insecure context); the mailto button still works.
    }
  };

  return (
    <Section id="contact" index="04" title={ui.contact.title}>
      <Reveal className="relative">
        <Corners />
        <div className="grid gap-10 border border-line/50 bg-panel/70 p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="max-w-xl text-lg leading-relaxed text-fg/85">{ui.contact.text}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href={`mailto:${profile.email}`}>
                <Mail size={14} /> {ui.contact.sayHello}
              </ButtonLink>
              <SocialLinks />
            </div>
          </div>

          <div className="space-y-6">
            {/* E-mail field, like a filled-in form box */}
            <div className="border border-line/60">
              <div className="annot border-b border-line/60 px-4 py-1.5 text-[10px]">{ui.contact.emailLabel}</div>
              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="min-w-0 truncate font-mono text-sm text-fg hover:text-accent sm:text-base"
                >
                  {profile.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex shrink-0 items-center gap-1.5 border border-line/50 px-2.5 py-1.5 font-mono text-[11px] tracking-wider text-muted uppercase transition-colors hover:border-accent hover:text-accent"
                >
                  {copied ? <Check size={13} className="text-accent" /> : <Copy size={13} />}
                  {copied ? ui.contact.copied : ui.contact.copy}
                </button>
              </div>
            </div>

            {profile.availability && (
              <div className="text-right">
                <span className="stamp inline-block -rotate-6">{t(profile.availability)}</span>
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
