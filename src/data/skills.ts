import type { LucideIcon } from 'lucide-react';
import { Cloud, Database, Layout, Server } from 'lucide-react';

export interface SkillGroup {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Responsive, accessible interfaces with a focus on detail.',
    icon: Layout,
    items: ['React', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'Backend',
    description: 'APIs and services that are structured, tested and fast.',
    icon: Server,
    items: ['Python', 'FastAPI', 'Django', 'PHP', 'Laravel', 'C'],
  },
  {
    title: 'Databases',
    description: 'Relational data modeling, queries and migrations.',
    icon: Database,
    items: ['PostgreSQL', 'MySQL', 'Aurora RDS'],
  },
  {
    title: 'Cloud & Deployment',
    description: 'Shipping and running applications in production.',
    icon: Cloud,
    items: ['AWS', 'Vercel'],
  },
];
