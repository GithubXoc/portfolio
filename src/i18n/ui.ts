import type { Localized } from './languages';

/** Interface strings: navigation, headings, buttons and drawing labels. */
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
  section: {
    sheet: 'Sheet',
  },
  hero: {
    drawing: 'Dwg. no. KH-2026 — General arrangement',
    viewWork: 'View projects',
    getInTouch: 'Get in touch',
    detail: 'Detail A — Site plan',
    spec: 'Specification',
  },
  about: {
    title: 'About me',
    notes: 'General notes',
    legend: 'Legend',
  },
  skills: {
    title: 'Skills & tools',
    subtitle: 'The technologies I use day to day to design, build and ship applications.',
    bom: 'Bill of materials',
    colItem: 'Item',
    colCategory: 'Category',
    colComponents: 'Components',
    colQty: 'Qty',
  },
  projects: {
    title: 'Projects',
    subtitle: "Work I've delivered professionally and things I build on my own time.",
    typeLabel: 'Project type',
    spec: 'Spec',
    sourceCode: 'source code',
    liveDemo: 'live demo',
    screenshot: 'screenshot',
  },
  contact: {
    title: "Let's work together",
    text: "Have a project in mind, a role you think I'd fit, or just want to say hi? My inbox is always open — I'll get back to you as soon as I can.",
    emailLabel: 'E-mail',
    sayHello: 'Say hello',
    copy: 'Copy',
    copied: 'Copied!',
  },
  footer: {
    drawnBy: 'Drawn by',
    titleLabel: 'Title',
    titleValue: 'Portfolio',
    sheetLabel: 'Sheet',
    revision: 'Rev.',
    scale: 'Scale',
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
  section: {
    sheet: 'シート',
  },
  hero: {
    drawing: '図面番号 KH-2026 — 全体配置図',
    viewWork: 'プロジェクトを見る',
    getInTouch: 'お問い合わせ',
    detail: '詳細図 A — 配置図',
    spec: '仕様',
  },
  about: {
    title: '自己紹介',
    notes: '一般注記',
    legend: '凡例',
  },
  skills: {
    title: 'スキル・ツール',
    subtitle: 'アプリケーションの設計・開発・リリースに日々使用している技術です。',
    bom: '部品表',
    colItem: '番号',
    colCategory: '分類',
    colComponents: '構成要素',
    colQty: '数量',
  },
  projects: {
    title: 'プロジェクト',
    subtitle: '業務で手がけたプロジェクトと、個人で開発しているものです。',
    typeLabel: 'プロジェクトの種類',
    spec: '仕様',
    sourceCode: 'ソースコード',
    liveDemo: 'デモ',
    screenshot: 'スクリーンショット',
  },
  contact: {
    title: '一緒に働きませんか',
    text: 'プロジェクトのご相談、お仕事のお誘い、ちょっとしたご挨拶など、お気軽にご連絡ください。できるだけ早くお返事いたします。',
    emailLabel: 'メール',
    sayHello: 'メールを送る',
    copy: 'コピー',
    copied: 'コピーしました!',
  },
  footer: {
    drawnBy: '作成者',
    titleLabel: '表題',
    titleValue: 'ポートフォリオ',
    sheetLabel: 'シート',
    revision: '改訂',
    scale: '縮尺',
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
  section: {
    sheet: 'Хуудас',
  },
  hero: {
    drawing: 'Зураг № KH-2026 — Ерөнхий зохион байгуулалт',
    viewWork: 'Төслүүдийг үзэх',
    getInTouch: 'Холбогдох',
    detail: 'Дэлгэрэнгүй A — Байршлын зураг',
    spec: 'Үзүүлэлт',
  },
  about: {
    title: 'Миний тухай',
    notes: 'Ерөнхий тэмдэглэл',
    legend: 'Тайлбар',
  },
  skills: {
    title: 'Ур чадвар ба хэрэгсэл',
    subtitle: 'Аппликейшн зохиох, хөгжүүлэх, нийтлэхэд өдөр бүр ашигладаг технологиуд.',
    bom: 'Материалын жагсаалт',
    colItem: 'Д/д',
    colCategory: 'Ангилал',
    colComponents: 'Бүрэлдэхүүн',
    colQty: 'Тоо',
  },
  projects: {
    title: 'Төслүүд',
    subtitle: 'Ажлын хүрээнд хийсэн болон чөлөөт цагаараа хөгжүүлсэн төслүүд.',
    typeLabel: 'Төслийн төрөл',
    spec: 'Үзүүлэлт',
    sourceCode: 'эх код',
    liveDemo: 'демо',
    screenshot: 'дэлгэцийн зураг',
  },
  contact: {
    title: 'Хамтран ажиллацгаая',
    text: 'Төслийн санаа байна уу, надад тохирох ажлын байр байна уу, эсвэл зүгээр л мэндлэхийг хүсвэл надад бичээрэй — аль болох хурдан хариу өгөх болно.',
    emailLabel: 'Имэйл',
    sayHello: 'Имэйл илгээх',
    copy: 'Хуулах',
    copied: 'Хуулагдлаа!',
  },
  footer: {
    drawnBy: 'Зурсан',
    titleLabel: 'Гарчиг',
    titleValue: 'Портфолио',
    sheetLabel: 'Хуудас',
    revision: 'Хувилбар',
    scale: 'Масштаб',
    builtWith: 'React, TypeScript, Tailwind CSS ашиглан бүтээв.',
    backToTop: 'Дээш буцах',
  },
};

export const ui: Localized<UIStrings> = { en, ja, mn };
