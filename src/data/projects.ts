import type { LucideIcon } from 'lucide-react';
import { BarChart3, LayoutTemplate, MessageSquare } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  /** Optional screenshot. Without one, a styled cover with the icon is shown. */
  image?: string;
  /** Links are hidden when omitted. */
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'Sales Report Analysis',
    description:
      'An analytics tool that turns raw sales data into clear reports and dashboards, with an MCP integration so an AI assistant can query the data directly.',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'MCP'],
    icon: BarChart3,
  },
  {
    title: 'Chat App',
    description:
      'A real-time messaging application with conversations, user accounts and persistent message history.',
    tech: ['Java', 'React', 'PostgreSQL'],
    icon: MessageSquare,
  },
  {
    title: 'Personal Portfolio',
    description:
      'This site — a fast, responsive single-page portfolio with scroll-aware navigation and subtle motion.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    icon: LayoutTemplate,
    github: 'https://github.com/GithubXoc/portfolio',
  },
];
