import type { Localized } from './languages';

/** Interface strings: navigation, headings, buttons and labels. */
const en = {
  meta: {
    title: 'Khosbayar — Full-Stack Developer',
  },
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
  },
  hero: {
    greeting: 'Hi, my name is',
    viewWork: 'View my work',
    getInTouch: 'Get in touch',
    scrollDown: 'Scroll to About',
  },
  about: {
    title: 'About me',
  },
  skills: {
    title: 'Skills & tools',
    subtitle: 'The technologies I use day to day to design, build and ship applications.',
  },
  projects: {
    title: 'Projects',
    subtitle: "Work I've delivered professionally and things I build on my own time.",
    typeLabel: 'Project type',
    sourceCode: 'source code',
    liveDemo: 'live demo',
    screenshot: 'screenshot',
  },
  contact: {
    eyebrow: "What's next?",
    title: "Let's work together",
    text: "Have a project in mind, a role you think I'd fit, or just want to say hi? My inbox is always open — I'll get back to you as soon as I can.",
    sayHello: 'Say hello',
    copied: 'Copied!',
  },
  footer: {
    builtWith: 'Built with React, TypeScript & Tailwind CSS.',
    backToTop: 'Back to top',
  },
};

export type UIStrings = typeof en;

const ja: UIStrings = {
  meta: {
    title: 'Khosbayar — フルスタックエンジニア',
  },
  nav: {
    about: '自己紹介',
    skills: 'スキル',
    projects: 'プロジェクト',
    contact: 'お問い合わせ',
    openMenu: 'メニューを開く',
    closeMenu: 'メニューを閉じる',
    language: '言語',
  },
  hero: {
    greeting: 'はじめまして、',
    viewWork: 'プロジェクトを見る',
    getInTouch: 'お問い合わせ',
    scrollDown: '自己紹介へスクロール',
  },
  about: {
    title: '自己紹介',
  },
  skills: {
    title: 'スキル・ツール',
    subtitle: 'アプリケーションの設計・開発・リリースに日々使用している技術です。',
  },
  projects: {
    title: 'プロジェクト',
    subtitle: '業務で手がけたプロジェクトと、個人で開発しているものです。',
    typeLabel: 'プロジェクトの種類',
    sourceCode: 'ソースコード',
    liveDemo: 'デモ',
    screenshot: 'スクリーンショット',
  },
  contact: {
    eyebrow: '次のステップ',
    title: '一緒に働きませんか',
    text: 'プロジェクトのご相談、お仕事のお誘い、ちょっとしたご挨拶など、お気軽にご連絡ください。できるだけ早くお返事いたします。',
    sayHello: 'メールを送る',
    copied: 'コピーしました!',
  },
  footer: {
    builtWith: 'React、TypeScript、Tailwind CSS で制作。',
    backToTop: 'トップへ戻る',
  },
};

const mn: UIStrings = {
  meta: {
    title: 'Хосбаяр — Full-Stack хөгжүүлэгч',
  },
  nav: {
    about: 'Миний тухай',
    skills: 'Ур чадвар',
    projects: 'Төслүүд',
    contact: 'Холбоо барих',
    openMenu: 'Цэс нээх',
    closeMenu: 'Цэс хаах',
    language: 'Хэл',
  },
  hero: {
    greeting: 'Сайн байна уу, би',
    viewWork: 'Төслүүдийг үзэх',
    getInTouch: 'Холбогдох',
    scrollDown: 'Миний тухай хэсэг рүү гүйлгэх',
  },
  about: {
    title: 'Миний тухай',
  },
  skills: {
    title: 'Ур чадвар ба хэрэгсэл',
    subtitle: 'Аппликейшн зохиох, хөгжүүлэх, нийтлэхэд өдөр бүр ашигладаг технологиуд.',
  },
  projects: {
    title: 'Төслүүд',
    subtitle: 'Ажлын хүрээнд хийсэн болон чөлөөт цагаараа хөгжүүлсэн төслүүд.',
    typeLabel: 'Төслийн төрөл',
    sourceCode: 'эх код',
    liveDemo: 'демо',
    screenshot: 'дэлгэцийн зураг',
  },
  contact: {
    eyebrow: 'Дараагийн алхам?',
    title: 'Хамтран ажиллацгаая',
    text: 'Төслийн санаа байна уу, надад тохирох ажлын байр байна уу, эсвэл зүгээр л мэндлэхийг хүсвэл надад бичээрэй — аль болох хурдан хариу өгөх болно.',
    sayHello: 'Имэйл илгээх',
    copied: 'Хуулагдлаа!',
  },
  footer: {
    builtWith: 'React, TypeScript, Tailwind CSS ашиглан бүтээв.',
    backToTop: 'Дээш буцах',
  },
};

export const ui: Localized<UIStrings> = { en, ja, mn };
