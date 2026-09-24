// ---------------------------------------------------------------------------
// 站点全局配置：姓名、单位、邮箱、社交链接。日常维护最常改的文件之一。
// ---------------------------------------------------------------------------
import type { Bi } from '../i18n';

export const site = {
  // TODO: 换成你的中/英文姓名
  name: { en: 'Xiaoshe', zh: 'Xiaoshe' } as Bi,

  tagline: {
    en: 'Researcher in quantum information science',
    zh: '量子信息科学研究者',
  } as Bi,

  affiliation: { en: 'Tsinghua University', zh: '清华大学' } as Bi,
  affiliationUrl: 'https://www.tsinghua.edu.cn',

  location: { en: 'Beijing, China', zh: '中国 · 北京' } as Bi,

  // TODO: 填入邮箱后 Contact 板块会自动显示；留空则隐藏
  email: '',

  // 换成自己的照片：把文件放进 public/（如 avatar.jpg），这里改成 '/avatar.jpg'
  avatar: '/avatar.svg',

  // 社交链接：取消注释并填入你的主页即可显示
  social: [
    { label: 'GitHub', url: 'https://github.com/xiaoshecode' },
    // { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=XXX' },
    // { label: 'ORCID', url: 'https://orcid.org/0000-0000-0000-0000' },
    // { label: 'CV', url: '/cv.pdf' },
  ],
};
