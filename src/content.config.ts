import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

// ---------------------------------------------------------------------------
// 所有内容的类型契约：数据文件字段写错会在 build 期直接报错，而不是线上静默坏掉。
// 新增板块 = 在这里加一条 collection + 一个 YAML + 一个组件。
// ---------------------------------------------------------------------------

const news = defineCollection({
  loader: file('src/data/news.yaml'),
  schema: z.object({
    date: z.string(),
    en: z.string(),
    zh: z.string(),
    link: z.object({ url: z.string(), en: z.string(), zh: z.string() }).optional(),
  }),
});

const publications = defineCollection({
  loader: file('src/data/publications.yaml'),
  schema: z.object({
    title: z.string(),
    authors: z.string(), // 允许内嵌 <strong> 标出自己的名字
    venue: z.string(),
    image: z.string().optional(),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
  }),
});

const projects = defineCollection({
  loader: file('src/data/projects.yaml'),
  schema: z.object({
    name: z.string(),
    url: z.string(),
    tag: z.string().optional(),
    en: z.string(),
    zh: z.string(),
  }),
});

const profile = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/data/profile' }),
});

export const collections = { news, publications, projects, profile };
