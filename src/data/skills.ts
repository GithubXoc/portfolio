import type { LucideIcon } from 'lucide-react';
import { Cloud, Cpu, Database, Layout, Plug, Server } from 'lucide-react';
import type { Localized } from '../i18n/languages';

export interface SkillGroup {
  title: Localized;
  description: Localized;
  icon: LucideIcon;
  /** Technology names stay the same in every language. */
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: { en: 'Frontend & Mobile', ja: 'フロントエンド・モバイル', mn: 'Фронтенд ба мобайл' },
    description: {
      en: 'Interactive web apps, 3D map views and cross-platform mobile apps.',
      ja: 'インタラクティブなWebアプリ、3D地図表示、クロスプラットフォームのモバイルアプリ。',
      mn: 'Интерактив веб апп, 3D газрын зураг, кросс-платформ мобайл аппууд.',
    },
    icon: Layout,
    items: ['TypeScript', 'React', 'JavaScript', 'Vue.js', 'Three.js', 'Tailwind CSS', 'Flutter'],
  },
  {
    title: { en: 'Backend', ja: 'バックエンド', mn: 'Бэкенд' },
    description: {
      en: 'APIs, SDKs and event-driven services that are structured and reliable.',
      ja: '構造化された信頼性の高いAPI、SDK、イベント駆動型サービス。',
      mn: 'Бүтэцтэй, найдвартай API, SDK болон үйл явдалд суурилсан сервисүүд.',
    },
    icon: Server,
    items: ['Python', 'FastAPI', 'Django', 'PHP', 'Laravel', 'Rust', 'Java'],
  },
  {
    title: { en: 'Data & AI', ja: 'データ・AI', mn: 'Өгөгдөл ба AI' },
    description: {
      en: 'Relational databases, data platforms and AI-powered retrieval.',
      ja: 'リレーショナルデータベース、データ基盤、AIを活用した検索拡張。',
      mn: 'Харилцан хамааралт өгөгдлийн сан, өгөгдлийн платформ, AI-д суурилсан хайлт.',
    },
    icon: Database,
    items: ['PostgreSQL', 'MySQL', 'Aurora RDS', 'Databricks', 'Vector DB', 'RAG', 'MCP'],
  },
  {
    title: { en: 'Cloud & DevOps', ja: 'クラウド・DevOps', mn: 'Клауд ба DevOps' },
    description: {
      en: 'Containerized deployments, CI/CD pipelines and server operations.',
      ja: 'コンテナによるデプロイ、CI/CDパイプライン、サーバー運用。',
      mn: 'Контейнержсэн deployment, CI/CD pipeline, серверийн засвар үйлчилгээ.',
    },
    icon: Cloud,
    items: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Linux', 'Vercel'],
  },
  {
    title: { en: 'Systems & IoT', ja: 'システム・IoT', mn: 'Систем ба IoT' },
    description: {
      en: 'Embedded software, physical devices and real-time communication.',
      ja: '組み込みソフトウェア、物理デバイス、リアルタイム通信。',
      mn: 'Суулгагдсан програм хангамж, физик төхөөрөмж, бодит цагийн холболт.',
    },
    icon: Cpu,
    items: ['C', 'Embedded Systems', 'IoT', 'WebRTC', 'Network Diagnostics', 'Memory Debugging'],
  },
  {
    title: { en: 'Integrations & Tools', ja: '連携・ツール', mn: 'Интеграци ба хэрэгсэл' },
    description: {
      en: 'Third-party platforms, browser extensions and analytics.',
      ja: '外部プラットフォーム連携、ブラウザ拡張機能、アクセス解析。',
      mn: 'Гуравдагч талын платформ, браузерын өргөтгөл, аналитик.',
    },
    icon: Plug,
    items: ['Messenger API', 'Telegram API', 'Chrome Extensions', 'Google Analytics'],
  },
];
