import { Check, Copy, Mail } from 'lucide-react';
import { useState } from 'react';
import { profile } from '../../data/profile';
import ButtonLink from '../ui/ButtonLink';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SocialLinks from '../ui/SocialLinks';

export default function Contact() {
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
    <Section id="contact">
      <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-surface/70 px-6 py-16 text-center sm:px-12 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[600px] max-w-full -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
        />
        <p className="relative font-mono text-sm text-accent">04. What's next?</p>
        <h2 className="relative mt-4 text-4xl font-bold tracking-tight md:text-5xl">Let's work together</h2>
        <p className="relative mx-auto mt-5 max-w-xl text-lg text-muted">
          Have a project in mind, a role you think I'd fit, or just want to say hi? My inbox is always
          open — I'll get back to you as soon as I can.
        </p>

        <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={`mailto:${profile.email}`}>
            <Mail size={16} /> Say hello
          </ButtonLink>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 font-mono text-sm text-muted transition-colors hover:border-accent/60 hover:text-accent"
          >
            {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
            {copied ? 'Copied!' : profile.email}
          </button>
        </div>

        <SocialLinks className="relative mt-8 justify-center" />
      </Reveal>
    </Section>
  );
}
