import type { LucideIcon } from 'lucide-react';
import {
  BarChart3,
  Bot,
  HardHat,
  Landmark,
  Map as MapIcon,
  MessageSquare,
  Pill,
  Store,
  Timer,
  Zap,
} from 'lucide-react';
import { same, type Localized } from '../i18n/languages';

export type ProjectCategory = 'work' | 'personal';

export interface Project {
  title: Localized;
  description: Localized;
  category: ProjectCategory;
  /** Technology names stay the same in every language. */
  tech: string[];
  icon: LucideIcon;
  /** Work projects: shown as "Role · Company · Period" above the title. All optional. */
  role?: Localized;
  company?: Localized;
  period?: Localized;
  /** Optional screenshot. Without one, a styled cover with the icon is shown. */
  image?: string;
  /** Links are hidden when omitted (e.g. for confidential client work). */
  github?: string;
  demo?: string;
}

export const projectCategories: { id: ProjectCategory; label: Localized; description: Localized }[] = [
  {
    id: 'work',
    label: { en: 'Work', ja: '業務', mn: 'Ажлын' },
    description: {
      en: 'Projects I built professionally as part of a team.',
      ja: 'チームの一員として業務で開発したプロジェクトです。',
      mn: 'Багийн бүрэлдэхүүнд мэргэжлийн түвшинд хөгжүүлсэн төслүүд.',
    },
  },
  {
    id: 'personal',
    label: { en: 'Personal', ja: '個人', mn: 'Хувийн' },
    description: {
      en: 'Side projects I build to learn and experiment.',
      ja: '学びや実験のために開発している個人プロジェクトです。',
      mn: 'Суралцах, туршиж үзэх зорилгоор хийсэн хувийн төслүүд.',
    },
  },
];

const developer: Localized = { en: 'Developer', ja: '開発者', mn: 'Хөгжүүлэгч' };

export const projects: Project[] = [
  // ── Work projects ──────────────────────────────────────────────
  {
    title: {
      en: 'Woven City Map Service',
      ja: 'Woven City 地図サービス',
      mn: 'Woven City газрын зургийн үйлчилгээ',
    },
    category: 'work',
    description: {
      en: "A dedicated map service for Woven City, Toyota's futuristic smart city. As part of the map team, I develop and maintain the map service SDK that enterprise developers use to build map-related features.",
      ja: 'トヨタが手がける未来型スマートシティ「Woven City」向けの専用地図サービス。地図チームの一員として、企業の開発者が地図関連機能を構築するために利用する地図サービスSDKの開発・保守を担当しています。',
      mn: 'Toyota-гийн ирээдүйн ухаалаг хот болох Woven City-д зориулсан газрын зургийн тусгай үйлчилгээ. Газрын зургийн багийн гишүүний хувьд байгууллагын хөгжүүлэгчдийн газрын зурагтай холбоотой функц бүтээхэд ашигладаг SDK-г хөгжүүлж, хариуцан ажилладаг.',
    },
    tech: ['TypeScript', 'React', 'Three.js', 'Python', 'Databricks', 'AWS', 'Kubernetes', 'GitHub Actions'],
    icon: MapIcon,
    role: { en: 'SDK Developer (Contract)', ja: 'SDK開発者(業務委託)', mn: 'SDK хөгжүүлэгч (гэрээт)' },
    company: same('Toyota Woven City'),
  },
  {
    title: {
      en: 'Real-Time Construction Field Management',
      ja: 'リアルタイム建設現場管理',
      mn: 'Барилгын талбайн бодит цагийн удирдлага',
    },
    category: 'work',
    description: {
      en: 'A platform that visualizes the working rates and locations of workers and vehicles on construction sites in real time. Built on real-time tracking and an event-driven architecture, and connected to the iOS and Android apps developed by the team.',
      ja: '建設現場の作業員や車両の稼働率・位置情報をリアルタイムでWeb上に可視化するプラットフォーム。リアルタイム追跡とイベント駆動型アーキテクチャを採用し、チームが開発したiOS・Androidアプリと連携しています。',
      mn: 'Барилгын талбай дээрх ажилчид болон тээврийн хэрэгслийн байршил, ажлын гүйцэтгэлийг бодит цагт вэб дээр дүрсэлдэг платформ. Бодит цагийн хяналт, үйл явдалд суурилсан архитектуртай бөгөөд багийн хөгжүүлсэн iOS, Android аппуудтай холбогддог.',
    },
    tech: ['PHP', 'Laravel', 'React', 'Three.js', 'Flutter', 'AWS', 'Docker', 'GitHub Actions', 'Google Analytics'],
    icon: HardHat,
    role: {
      en: 'Developer → Systems Engineer',
      ja: '開発者 → システムエンジニア',
      mn: 'Хөгжүүлэгч → Системийн инженер',
    },
  },
  {
    title: {
      en: 'Remote Electrical Switch Control',
      ja: '電源スイッチ遠隔制御システム',
      mn: 'Цахилгаан унтраалгын алсын удирдлага',
    },
    category: 'work',
    description: {
      en: 'A web application for remotely controlling electrical switches on construction sites, connected to the physical devices through AWS. Supports scheduling switch operating hours and makes managing large, complex networks of switches much easier.',
      ja: '建設現場の電源スイッチを遠隔操作するWebアプリケーション。AWSを介して実際の物理デバイスと接続し、スイッチの稼働時間のスケジュール設定や、大規模で複雑なスイッチ群の管理を効率化しました。',
      mn: 'Барилгын талбайн цахилгаан унтраалгыг алсаас удирдах вэб аппликейшн. AWS ашиглан бодит физик төхөөрөмжүүдтэй холбогдож, унтраалгын ажиллах цагийг төлөвлөх, олон тооны нарийн төвөгтэй унтраалгын удирдлагыг хялбарчилсан.',
    },
    tech: ['Python', 'React', 'AWS', 'Docker', 'IoT'],
    icon: Zap,
    role: developer,
  },
  {
    title: {
      en: 'Retail POS System Software',
      ja: '小売向けPOSシステム開発',
      mn: 'Жижиглэн худалдааны POS систем',
    },
    category: 'work',
    description: {
      en: 'Software for POS machines used by supermarkets and retail companies, written in C. I built client-specific features, solved low-level problems, diagnosed network traffic and memory issues, and worked on embedded software that interfaces with physical devices.',
      ja: 'スーパーマーケットや小売企業で使用されるPOS端末のソフトウェアをC言語で開発。顧客ごとの機能開発、低レイヤーの問題解決、ネットワーク通信やメモリ関連の調査に加え、物理デバイスと連携する組み込みソフトウェアの開発に携わりました。',
      mn: 'Супермаркет, жижиглэн худалдааны компаниудад ашиглагддаг POS төхөөрөмжийн програм хангамжийг C хэл дээр хөгжүүлсэн. Захиалагч бүрт зориулсан функц хөгжүүлж, доод түвшний асуудлуудыг шийдвэрлэх, сүлжээний урсгал болон санах ойн асуудлыг оношлох, физик төхөөрөмжтэй ажилладаг суулгагдсан програм хангамж дээр ажилласан.',
    },
    tech: ['C', 'Embedded Systems', 'Networking', 'Memory Debugging'],
    icon: Store,
    role: developer,
  },
  {
    title: {
      en: 'Pharmacy POS System',
      ja: '薬局向けPOSシステム',
      mn: 'Эмийн сангийн POS систем',
    },
    category: 'work',
    description: {
      en: 'POS software for pharmacies that streamlines reception work, with a real-time support feature built on WebRTC. I mainly worked on the frontend.',
      ja: '薬局の受付業務を効率化するPOSソフトウェア。WebRTCを活用したリアルタイムサポート機能を備えています。主にフロントエンドを担当しました。',
      mn: 'Эмийн сангийн хүлээн авах ажлыг хялбарчлах POS програм хангамж. WebRTC ашигласан бодит цагийн дэмжлэгийн функцтэй. Би голчлон фронтенд хэсэг дээр ажилласан.',
    },
    tech: ['TypeScript', 'React', 'Rust', 'WebRTC'],
    icon: Pill,
    role: { en: 'Frontend Developer', ja: 'フロントエンドエンジニア', mn: 'Фронтенд хөгжүүлэгч' },
  },
  {
    title: {
      en: 'Internal Banking Systems & IT Audit',
      ja: '銀行社内システム開発・IT監査',
      mn: 'Банкны дотоод систем ба IT аудит',
    },
    category: 'work',
    description: {
      en: "Maintained and developed internal systems connected to the bank's database and data lake. Automated business processes, built internal web applications, maintained servers, and supported senior auditors with IT audits of the bank's technology departments.",
      ja: '銀行のデータベースやデータレイクと連携する社内システムの開発・保守を担当。業務プロセスの自動化、社内Webアプリケーションの開発、サーバー保守に加え、シニア監査人とともにIT部門の監査業務も行いました。',
      mn: 'Банкны өгөгдлийн сан болон data lake-тэй холбогдсон дотоод системүүдийг хөгжүүлж, хариуцан ажилласан. Бизнес процессыг автоматжуулах, дотоод веб аппликейшн хөгжүүлэх, серверийн засвар үйлчилгээ хийхээс гадна ахлах аудиторуудтай хамт мэдээллийн технологийн хэлтсүүдэд IT аудит хийсэн.',
    },
    tech: ['Python', 'Vue.js', 'Linux', 'Docker'],
    icon: Landmark,
    role: { en: 'IT Auditor', ja: 'ITオーディター', mn: 'IT аудитор' },
    company: { en: 'Khan Bank', ja: 'Khan Bank', mn: 'Хаан банк' },
  },

  // ── Personal projects ──────────────────────────────────────────
  {
    title: {
      en: 'Sales Report Analysis',
      ja: '売上レポート分析ツール',
      mn: 'Борлуулалтын тайлангийн шинжилгээ',
    },
    category: 'personal',
    description: {
      en: 'An analytics tool that turns raw sales data into clear reports and dashboards, with an MCP integration so an AI assistant can query the data directly.',
      ja: '生の売上データをわかりやすいレポートやダッシュボードに変換する分析ツール。MCP連携により、AIアシスタントがデータに直接問い合わせできます。',
      mn: 'Борлуулалтын түүхий өгөгдлийг ойлгомжтой тайлан, хяналтын самбар болгон хувиргадаг шинжилгээний хэрэгсэл. MCP интеграцийн тусламжтайгаар AI туслах өгөгдлөөс шууд асуулга хийх боломжтой.',
    },
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'MCP'],
    icon: BarChart3,
  },
  {
    title: { en: 'Chat App', ja: 'チャットアプリ', mn: 'Чат апп' },
    category: 'personal',
    description: {
      en: 'A real-time messaging application with conversations, user accounts and persistent message history.',
      ja: '会話機能、ユーザーアカウント、メッセージ履歴の保存を備えたリアルタイムメッセージングアプリ。',
      mn: 'Харилцан яриа, хэрэглэгчийн бүртгэл, мессежийн түүх хадгалах боломжтой бодит цагийн мессежийн аппликейшн.',
    },
    tech: ['Java', 'React', 'PostgreSQL'],
    icon: MessageSquare,
  },
  {
    title: {
      en: 'AI Order Automation for a Furniture Store',
      ja: '家具店向けAI注文自動化',
      mn: 'Тавилгын дэлгүүрийн AI захиалгын автоматжуулалт',
    },
    category: 'personal',
    description: {
      en: 'An AI-powered assistant that automates ordering for a furniture store. Triggered by Messenger webhooks, it asks customers for their order details and places the order on behalf of staff, using RAG over a vector database for product knowledge.',
      ja: '家具店の注文業務を自動化するAIアシスタント。Messengerのwebhookをトリガーにお客様から注文内容をヒアリングし、スタッフに代わって注文を処理します。商品知識にはベクトルDBを用いたRAGを活用しています。',
      mn: 'Тавилгын дэлгүүрийн захиалгын процессыг автоматжуулдаг AI туслах. Messenger webhook-оор идэвхжиж, үйлчлүүлэгчээс захиалгын мэдээллийг асууж, ажилтны өмнөөс захиалгыг гүйцэтгэдэг. Бүтээгдэхүүний мэдээлэлд вектор өгөгдлийн сан дээрх RAG ашигладаг.',
    },
    tech: ['Python', 'React', 'TypeScript', 'RAG', 'Vector DB', 'Messenger API'],
    icon: Bot,
  },
  {
    title: {
      en: 'Disappearing Messages for Telegram Web',
      ja: 'Telegram Web 消えるメッセージ拡張機能',
      mn: 'Telegram Web-д устдаг мессеж',
    },
    category: 'personal',
    description: {
      en: "A Chrome extension that lets you send disappearing (self-destructing) messages from Telegram Web — a feature Telegram's web version doesn't support natively.",
      ja: 'Telegramのブラウザ版では標準でサポートされていない「消えるメッセージ」を、Telegram Webから送信できるようにするChrome拡張機能。',
      mn: 'Telegram-ийн веб хувилбарт дэмжигддэггүй устдаг (өөрөө устах) мессежийг Telegram Web-ээс илгээх боломж олгодог Chrome өргөтгөл.',
    },
    tech: ['JavaScript', 'Telegram API', 'Chrome Extension'],
    icon: Timer,
  },
];
