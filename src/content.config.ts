import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bi = z.object({ zh: z.string(), en: z.string() });
const biList = z.object({ zh: z.array(z.string()), en: z.array(z.string()) });

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: bi,
    summary: bi,
    // 1 = 主打、2 = 作品、3 = 課程與練習
    tier: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    date: bi,
    sortDate: z.coerce.date(),
    status: bi.optional(),
    role: biList,
    stack: z.array(z.string()),
    highlights: biList.optional(),
    challenges: z.array(
      z.object({
        problem: bi,
        solution: bi,
      }),
    ),
    links: z
      .array(z.object({ label: bi, url: z.string().url() }))
      .default([]),
    cover: z.string(),
    isPrivate: z.boolean(),
  }),
});

export const collections = { projects };
