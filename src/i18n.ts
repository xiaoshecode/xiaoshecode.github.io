// 语言与固定 UI 文案。板块标题等"非数据"文字都集中在这里。
export type Lang = 'en' | 'zh';

export interface Bi {
  en: string;
  zh: string;
}

export const defaultLang: Lang = 'en';

export const ui = {
  about: { en: 'About', zh: '关于' },
  news: { en: 'News', zh: '动态' },
  publications: { en: 'Publications', zh: '论文' },
  projects: { en: 'Projects', zh: '项目' },
  contact: { en: 'Contact', zh: '联系' },
  builtWith: { en: 'Built with', zh: '由 Astro 构建' },
  lastUpdated: { en: 'Last updated', zh: '最近更新' },
} satisfies Record<string, Bi>;
