// ---------------------------------------------------------------------------
// 站点全局配置：姓名、单位、邮箱、社交链接。日常维护最常改的文件之一。
// ---------------------------------------------------------------------------
import type { Bi } from '../i18n';

export const site = {
  name: { en: 'Junpeng She', zh: '厍俊鹏' } as Bi,

  tagline: {
    en: 'I am a researcher, I study quantum.',
    zh: '我研究量子。',
  } as Bi,

  affiliation: { en: 'Tsinghua University', zh: '清华大学' } as Bi,
  affiliationUrl: 'https://www.tsinghua.edu.cn',

  location: { en: 'Beijing, China', zh: '中国 · 北京' } as Bi,

  // 留空则 Contact 板块自动隐藏邮箱行
  email: 'sjp24@mails.tsinghua.edu.cn',

  // 换成自己的照片：把文件放进 public/ 并更新此路径
  avatar: '/avatar.jpg',

  // 社交链接：取消注释并填入你的主页即可显示
  social: [
    { label: 'GitHub', url: 'https://github.com/xiaoshecode' },
    // { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=XXX' },
    // { label: 'ORCID', url: 'https://orcid.org/0000-0000-0000-0000' },
    // { label: 'CV', url: '/cv.pdf' },
  ],
};
