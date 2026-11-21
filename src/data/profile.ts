import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Mail } from 'lucide-react';

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const profile = {
  name: 'Khosbayar',
  nickname: 'Khos',
  role: 'Full-Stack Developer',
  tagline:
    'I build fast, reliable web applications — from polished React interfaces to well-structured Python and PHP backends running on AWS.',
  // Set to null to hide the status badge in the hero.
  availability: 'Open to new opportunities' as string | null,
  // TODO: replace with your real address before deploying.
  email: 'hello@example.com',
  about: [
    "Hi, I'm Khosbayar — most people call me Khos. I'm a full-stack developer who enjoys turning ideas into products that are simple to use and easy to maintain.",
    'On the frontend I work mostly with React, TypeScript and Tailwind CSS. On the backend I build APIs with FastAPI, Django and Laravel, backed by PostgreSQL or MySQL, and deploy them to AWS or Vercel.',
    "I care about clean architecture, readable code and the small details that make an interface feel right. Lately I've been exploring how AI tooling such as MCP can make data more accessible inside everyday applications.",
  ],
};

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/GithubXoc', icon: Github },
  // TODO: replace with your LinkedIn profile URL.
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
];
