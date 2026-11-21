import type { LucideIcon } from 'lucide-react';
import { Bot, Cpu, Github, Layers, Linkedin, Mail, Radio } from 'lucide-react';
import type { Localized } from '../i18n/languages';

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface Highlight {
  icon: LucideIcon;
  title: Localized;
  text: Localized;
}

export const profile = {
  name: { en: 'Khosbayar', ja: 'Khosbayar', mn: 'Хосбаяр' } as Localized,
  nickname: 'Khos',
  email: 'bhosoo0523@gmail.com',
  // Shown in the hero's code card (always English, since it's code) — keep it to about four items.
  stack: ['TypeScript', 'React', 'Python', 'AWS'],
  role: {
    en: 'Full-Stack Developer',
    ja: 'フルスタックエンジニア',
    mn: 'Full-Stack хөгжүүлэгч',
  } as Localized,
  tagline: {
    en: 'I build reliable software end to end — from map SDKs for a smart city and real-time IoT platforms to embedded POS systems and AI-powered automation.',
    ja: 'スマートシティ向けの地図SDKやリアルタイムIoTプラットフォームから、組み込みPOSシステム、AIによる業務自動化まで、信頼性の高いソフトウェアを一貫して開発しています。',
    mn: 'Ухаалаг хотын газрын зургийн SDK, бодит цагийн IoT платформоос эхлээд суулгагдсан POS систем, хиймэл оюунд суурилсан автоматжуулалт хүртэл найдвартай програм хангамжийг эхнээс нь дуустал хөгжүүлдэг.',
  } as Localized,
  // Set to null to hide the status badge in the hero.
  availability: {
    en: 'Open to new opportunities',
    ja: '新しい機会を探しています',
    mn: 'Шинэ боломжид нээлттэй',
  } as Localized | null,
  about: {
    en: [
      "Hi, I'm Khosbayar — most people call me Khos. I'm a full-stack developer who has built software across a wide range of industries: smart cities, construction, retail, pharmacies and banking.",
      "Right now I'm on the map team of a smart city project, developing and maintaining the map service SDK that enterprise developers use to build map-related features. Before that, I built real-time, event-driven platforms for construction sites — tracking the locations and working rates of workers and vehicles, and remotely controlling physical electrical switches through AWS.",
      "I'm comfortable across the whole stack and close to the hardware: React and TypeScript frontends, Python, PHP and Rust backends, and low-level C on embedded POS machines, where I diagnosed network traffic and memory issues. Earlier, as an IT auditor at Khan Bank in Mongolia, I developed internal systems on top of the bank's database and data lake and automated day-to-day processes.",
      'Outside of work I build AI-powered tools — like a Messenger assistant that takes furniture orders using RAG — and small utilities such as a Chrome extension that brings disappearing messages to Telegram Web.',
    ],
    ja: [
      'こんにちは、Khosbayar(ホスバヤル)です。「Khos(ホス)」と呼んでください。スマートシティ、建設、小売、薬局、銀行など、幅広い業界でソフトウェア開発に携わってきたフルスタックエンジニアです。',
      '現在はスマートシティプロジェクトの地図チームに所属し、企業の開発者が地図関連機能を構築するための地図サービスSDKの開発・保守を担当しています。それ以前は、建設現場向けのリアルタイム・イベント駆動型プラットフォームを開発し、作業員や車両の位置情報・稼働率の可視化や、AWSを利用した電源スイッチの遠隔制御などを手がけました。',
      'フロントエンドからバックエンド、さらにハードウェアに近い領域まで幅広く対応できます。React・TypeScriptによるフロントエンド、Python・PHP・Rustによるバックエンド、そして組み込みPOS端末でのC言語開発ではネットワーク通信やメモリに関する問題の調査・解決を行いました。また、モンゴルのKhan BankではITオーディターとして、銀行のデータベースやデータレイクと連携する社内システムの開発や業務の自動化に取り組みました。',
      '業務外では、RAGを活用して家具の注文を受け付けるMessengerアシスタントなどのAIツールや、Telegram Webで「消えるメッセージ」を送れるChrome拡張機能のような便利ツールを開発しています。',
    ],
    mn: [
      'Сайн байна уу, намайг Хосбаяр гэдэг — ихэнх хүмүүс Хос гэж дууддаг. Би ухаалаг хот, барилга, жижиглэн худалдаа, эмийн сан, банк зэрэг олон салбарт програм хангамж хөгжүүлж ирсэн full-stack хөгжүүлэгч.',
      'Одоогоор ухаалаг хотын төслийн газрын зургийн багт ажиллаж, байгууллагын хөгжүүлэгчдийн газрын зурагтай холбоотой функц бүтээхэд ашигладаг газрын зургийн үйлчилгээний SDK-г хөгжүүлж, хариуцан ажиллаж байна. Үүнээс өмнө барилгын талбайд зориулсан бодит цагийн, үйл явдалд суурилсан платформ хөгжүүлж, ажилчид болон тээврийн хэрэгслийн байршил, ажлын гүйцэтгэлийг хянах, AWS ашиглан цахилгаан унтраалгыг алсаас удирдах системүүд дээр ажилласан.',
      'Би фронтендээс бэкенд, тоног төхөөрөмжид ойр түвшин хүртэл ажиллах чадвартай: React, TypeScript дээр фронтенд, Python, PHP, Rust дээр бэкенд, мөн суулгагдсан POS төхөөрөмж дээр C хэлээр хөгжүүлэлт хийж, сүлжээний урсгал болон санах ойн асуудлыг оношилж байсан. Өмнө нь Хаан банкинд IT аудитороор ажиллаж, банкны өгөгдлийн сан болон data lake-тэй холбогдсон дотоод системүүдийг хөгжүүлж, өдөр тутмын процессуудыг автоматжуулсан.',
      'Ажлаас гадуур RAG ашиглан тавилгын захиалга авдаг Messenger туслах зэрэг хиймэл оюунд суурилсан хэрэгслүүд, мөн Telegram Web-ээс устдаг мессеж илгээх боломж олгодог Chrome өргөтгөл зэрэг жижиг хэрэгслүүд хийдэг.',
    ],
  } as Localized<string[]>,
};

/** Cards shown next to the About text. */
export const highlights: Highlight[] = [
  {
    icon: Layers,
    title: { en: 'SDKs & full-stack apps', ja: 'SDK・フルスタック開発', mn: 'SDK ба full-stack апп' },
    text: {
      en: 'Developer-facing SDKs and web apps built with React, TypeScript, Python, PHP and Rust.',
      ja: 'React、TypeScript、Python、PHP、Rustを用いた開発者向けSDKやWebアプリケーション。',
      mn: 'React, TypeScript, Python, PHP, Rust ашигласан хөгжүүлэгчдэд зориулсан SDK болон веб аппууд.',
    },
  },
  {
    icon: Radio,
    title: { en: 'Real-time & IoT systems', ja: 'リアルタイム・IoTシステム', mn: 'Бодит цагийн ба IoT систем' },
    text: {
      en: 'Event-driven platforms that track people and vehicles and control physical devices.',
      ja: '人や車両の位置を追跡し、物理デバイスを制御するイベント駆動型プラットフォーム。',
      mn: 'Хүн, тээврийн хэрэгслийг хянаж, физик төхөөрөмжийг удирддаг үйл явдалд суурилсан платформууд.',
    },
  },
  {
    icon: Cpu,
    title: { en: 'Low-level when it matters', ja: '低レイヤー開発', mn: 'Доод түвшний хөгжүүлэлт' },
    text: {
      en: 'Embedded C on POS hardware, with network-traffic and memory debugging.',
      ja: 'POS端末での組み込みC開発、ネットワーク通信やメモリのデバッグ。',
      mn: 'POS төхөөрөмж дээрх суулгагдсан C, сүлжээний урсгал болон санах ойн дибаг.',
    },
  },
  {
    icon: Bot,
    title: { en: 'AI automation', ja: 'AIによる自動化', mn: 'AI автоматжуулалт' },
    text: {
      en: 'RAG-powered assistants that take repetitive work off people’s hands.',
      ja: '繰り返し作業を代行する、RAGを活用したAIアシスタント。',
      mn: 'Давтагдах ажлыг хүний оронд гүйцэтгэдэг RAG-д суурилсан туслахууд.',
    },
  },
];

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/GithubXoc', icon: Github },
  // TODO: replace with your LinkedIn profile URL.
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
];
