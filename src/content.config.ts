import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ── profile ────────────────────────────────────────────────────────────────
const profile = defineCollection({
  loader: glob({ pattern: '*.json', base: 'src/content/profile' }),
  schema: z.object({
    name: z.string(),
    firstName: z.string(),
    greeting: z.string(),
    tagline: z.array(
      z.object({
        text: z.string(),
        highlight: z.enum(['', 'yellow', 'pink', 'green']).default(''),
      })
    ),
    status: z.string(),
    photo: z.string().nullable(),
    photoCaption: z.string(),
    tags: z.array(z.string()),
    bio: z.string(),
    contacts: z.array(
      z.object({
        icon: z.string(),
        label: z.string(),
        url: z.string(),
        sub: z.string(),
        color: z.enum(['yellow', 'pink', 'blue', 'green']),
      })
    ),
    footerNote: z.string(),
  }),
});

// ── experience ─────────────────────────────────────────────────────────────
const experience = defineCollection({
  loader: glob({ pattern: '*.json', base: 'src/content/experience' }),
  schema: z.object({
    order: z.number(),
    year: z.string(),
    role: z.string(),
    place: z.string(),
    desc: z.string(),
    url: z.string().optional(),
  }),
});

// ── education ──────────────────────────────────────────────────────────────
const education = defineCollection({
  loader: glob({ pattern: '*.json', base: 'src/content/education' }),
  schema: z.object({
    order: z.number(),
    year: z.string(),
    role: z.string(),
    place: z.string(),
    desc: z.string(),
  }),
});

// ── skills ─────────────────────────────────────────────────────────────────
const skills = defineCollection({
  loader: glob({ pattern: '*.json', base: 'src/content/skills' }),
  schema: z.object({
    order: z.number(),
    label: z.string(),
  }),
});

// ── projects ───────────────────────────────────────────────────────────────
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/projects' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    tag: z.string(),
    year: z.string(),
    logoColor: z.enum(['yellow', 'pink', 'blue', 'green']),
    summary: z.string(),
    stack: z.array(z.string()),
    featured: z.boolean().default(false),
    subtitle: z.string(),
    heroImage: z.string().nullable().default(null),
    links: z
      .object({
        live: z.string().optional(),
        github: z.string().optional(),
        linkedin: z.string().optional(),
        playStore: z.string().optional(),
      })
      .default({}),
    features: z.array(z.string()).default([]),
    caseStudy: z.object({
      role: z.string(),
      stackLabel: z.string(),
      time: z.string(),
      status: z.string(),
      overview: z.string(),
      problem: z.string(),
      outcome: z.string(),
      approach: z.array(z.string()),
      stats: z.array(
        z.object({
          n: z.string(),
          label: z.string(),
        })
      ),
      processShots: z.number().default(4),
    }),
  }),
});

// ── blogLinks ──────────────────────────────────────────────────────────────
const blogLinks = defineCollection({
  loader: glob({ pattern: '*.json', base: 'src/content/blog-links' }),
  schema: z.object({
    date: z.string(),
    title: z.string(),
    url: z.string(),
    tag: z.string(),
    readMinutes: z.number(),
    excerpt: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

// ── gallery ────────────────────────────────────────────────────────────────
const gallery = defineCollection({
  loader: glob({ pattern: '*.json', base: 'src/content/gallery' }),
  schema: z.object({
    order: z.number(),
    image: z.string().nullable(),
    label: z.string(),
    rotate: z.number().optional(),
    height: z.number().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    tag: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  profile,
  experience,
  education,
  skills,
  projects,
  blogLinks,
  gallery,
};
