# xiaoshecode.github.io

极简双语（中/EN）学术主页。Astro 静态构建，GitHub Actions 自动部署，零 JS 框架、零 webfont。

## 日常维护（只改 `src/data/`，不用碰组件）

| 想改什么 | 改哪里 |
|---|---|
| 姓名 / 单位 / 邮箱 / 社交链接 / 头像 | `src/data/site.ts` |
| 个人简介 | `src/data/profile/zh.md` 与 `en.md` |
| 加一条动态 | `src/data/news.yaml` 顶部加一段 |
| 加一篇论文 | `src/data/publications.yaml` 顶部加一段（缩略图放 `public/papers/`，可省略 `image`） |
| 加一个项目 | `src/data/projects.yaml` 顶部加一段 |
| 板块标题等固定文案 | `src/i18n.ts` |

数据字段有 zod 类型校验（`src/content.config.ts`），写错字段 `npm run build` 会直接报错并指出位置。

## 加一个新板块

1. `src/data/` 加一个 YAML + `src/content.config.ts` 加一条 collection（照着 news 抄）
2. `src/components/` 加一个组件（照着 `NewsList.astro` 抄）
3. `src/pages/index.astro` 加两行：import + `<Section>`，在 `src/i18n.ts` 加板块标题

## 本地开发

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # 构建到 dist/（上线前自检）
npm run preview   # 预览构建产物
```

push 到 `main` 后 GitHub Actions 自动构建部署。

## 设计说明

- 单栏排版（max-width 42rem），系统字体栈（零下载），纸白/墨黑 + 单一紫色点缀，暗色模式跟随系统可手动切换
- 双语：两种语言都渲染进 DOM，右上角切换瞬时完成（改 `<html lang>`，状态存 localStorage）
- 动效全部克制：链接下划线生长、板块滚动淡入、导航 scrollspy；`prefers-reduced-motion` 下全部关闭
- 全站样式只有一个文件：`src/styles/global.css`；全站交互只有一个文件：`src/scripts/main.ts`
