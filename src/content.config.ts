import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    id: z.string().regex(/^TB–\d{3}$/),
    title: z.string(),
    slug: z.string(),
    year: z.number().int().min(2000).max(2100),
    type: z.string(),
    status: z.enum(['RELEASED', 'LIVE', 'PUBLIC', 'IN DEVELOPMENT']),
    featured: z.boolean().default(false),
    summary: z.string(),
    description: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageCaption: z.string().optional(),
    technologies: z.array(z.string()).default([]),
    disciplines: z.array(z.string()).min(1),
    sourceUrl: z.url().optional(),
    liveUrl: z.url().optional(),
    demoUrl: z.url().optional(),
    releaseUrl: z.url().optional(),
    relationships: z.array(reference('projects')).default([]),
    systemNodes: z.array(z.string()).default([]),
    order: z.number().int()
  })
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    topic: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    location: z.string().optional(),
    category: z.string().optional(),
    scientificName: z.string().optional(),
    legacyId: z.string().optional(),
    relatedProjects: z.array(reference('projects')).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = { projects, notes };
