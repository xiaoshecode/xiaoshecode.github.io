// 全站唯一的交互脚本：主题切换、语言切换、滚动淡入、导航 scrollspy、头部滚动态。
// 刻意保持小巧（< 1KB gzip）；初始化逻辑（防闪烁）在 Base.astro 的内联脚本里。
const root = document.documentElement;

/* ---------- 标题随语言切换 ---------- */
function applyTitle() {
  const key = root.lang.toLowerCase().startsWith('zh') ? 'titleZh' : 'titleEn';
  const t = root.dataset[key];
  if (t) document.title = t;
}
applyTitle();

/* ---------- 主题切换 ---------- */
document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch { /* 隐私模式忽略 */ }
});

/* ---------- 语言切换 ---------- */
document.querySelector('[data-lang-toggle]')?.addEventListener('click', () => {
  const next = root.lang.toLowerCase().startsWith('zh') ? 'en' : 'zh';
  root.lang = next;
  try { localStorage.setItem('lang', next); } catch { /* 隐私模式忽略 */ }
  applyTitle();
});

/* ---------- 头部滚动态（显示细分隔线） ---------- */
const header = document.querySelector('[data-header]');
const onScroll = () => header?.toggleAttribute('data-scrolled', window.scrollY > 8);
onScroll();
addEventListener('scroll', onScroll, { passive: true });

/* ---------- 滚动淡入 ---------- */
const revealEls = document.querySelectorAll('.reveal');
if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.08 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}

/* ---------- 导航 scrollspy ---------- */
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.site-nav a[href^="#"]'));
const sections = navLinks
  .map((a) => document.getElementById(a.hash.slice(1)))
  .filter((el): el is HTMLElement => el !== null);

if (sections.length > 0 && 'IntersectionObserver' in window) {
  const spy = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      navLinks.forEach((a) => {
        const on = a.hash === `#${e.target.id}`;
        a.classList.toggle('current', on);
        if (on) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-25% 0px -65% 0px' });
  sections.forEach((s) => spy.observe(s));
}
