import { defineConfig } from 'tinacms';

export default defineConfig({
  // Tina Cloud credentials: set these in .env for production.
  // Local editing works without them (uses local filesystem bridge).
  clientId: process.env.TINA_CLIENT_ID ?? '',
  token: process.env.TINA_TOKEN ?? '',
  branch: process.env.TINA_BRANCH ?? 'main',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'media',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [

      // ── profile ──────────────────────────────────────────────────────────
      {
        name: 'profile',
        label: 'Profile',
        path: 'src/content/profile',
        format: 'json',
        fields: [
          { type: 'string', name: 'name', label: 'Full name' },
          { type: 'string', name: 'firstName', label: 'First name' },
          { type: 'string', name: 'greeting', label: 'Greeting' },
          {
            type: 'object',
            name: 'tagline',
            label: 'Tagline segments',
            list: true,
            fields: [
              { type: 'string', name: 'text', label: 'Text' },
              {
                type: 'string',
                name: 'highlight',
                label: 'Highlight color',
                options: ['', 'yellow', 'pink', 'green'],
              },
            ],
          },
          { type: 'string', name: 'status', label: 'Status badge' },
          { type: 'image', name: 'photo', label: 'Photo' },
          { type: 'string', name: 'photoCaption', label: 'Photo caption' },
          {
            type: 'string',
            name: 'tags',
            label: 'Hero tag pills',
            list: true,
          },
          { type: 'string', name: 'bio', label: 'Bio paragraph', ui: { component: 'textarea' } },
          {
            type: 'object',
            name: 'contacts',
            label: 'Contact stickies',
            list: true,
            fields: [
              { type: 'string', name: 'icon', label: 'Icon glyph' },
              { type: 'string', name: 'label', label: 'Display label' },
              { type: 'string', name: 'url', label: 'URL (mailto or https)' },
              { type: 'string', name: 'sub', label: 'Sub-label' },
              {
                type: 'string',
                name: 'color',
                label: 'Sticky color',
                options: ['yellow', 'pink', 'blue', 'green'],
              },
            ],
          },
          { type: 'string', name: 'footerNote', label: 'Footer note' },
        ],
      },

      // ── experience ───────────────────────────────────────────────────────
      {
        name: 'experience',
        label: 'Experience',
        path: 'src/content/experience',
        format: 'json',
        fields: [
          { type: 'number', name: 'order', label: 'Display order' },
          { type: 'string', name: 'year', label: 'Year range (e.g. 2023 / NOW)' },
          { type: 'string', name: 'role', label: 'Role / title' },
          { type: 'string', name: 'place', label: 'Place / company' },
          { type: 'string', name: 'desc', label: 'Description', ui: { component: 'textarea' } },
          { type: 'string', name: 'url', label: 'Company website (optional)' },
        ],
      },

      // ── education ────────────────────────────────────────────────────────
      {
        name: 'education',
        label: 'Education',
        path: 'src/content/education',
        format: 'json',
        fields: [
          { type: 'number', name: 'order', label: 'Display order' },
          { type: 'string', name: 'year', label: 'Year' },
          { type: 'string', name: 'role', label: 'Degree / credential' },
          { type: 'string', name: 'place', label: 'Institution' },
          { type: 'string', name: 'desc', label: 'Description', ui: { component: 'textarea' } },
        ],
      },

      // ── skills ───────────────────────────────────────────────────────────
      {
        name: 'skills',
        label: 'Skills',
        path: 'src/content/skills',
        format: 'json',
        fields: [
          { type: 'number', name: 'order', label: 'Display order' },
          { type: 'string', name: 'label', label: 'Skill label' },
        ],
      },

      // ── projects ─────────────────────────────────────────────────────────
      {
        name: 'projects',
        label: 'Projects',
        path: 'src/content/projects',
        format: 'md',
        fields: [
          { type: 'number', name: 'order', label: 'Display order' },
          { type: 'string', name: 'title', label: 'Project title' },
          { type: 'string', name: 'tag', label: 'Tag line (e.g. Web app · 2024)' },
          { type: 'string', name: 'year', label: 'Year' },
          {
            type: 'string',
            name: 'logoColor',
            label: 'Logo color',
            options: ['yellow', 'pink', 'blue', 'green'],
          },
          { type: 'string', name: 'summary', label: 'Card summary', ui: { component: 'textarea' } },
          {
            type: 'string',
            name: 'stack',
            label: 'Tech stack',
            list: true,
          },
          { type: 'boolean', name: 'featured', label: 'Featured on home page' },
          { type: 'string', name: 'subtitle', label: 'Case study one-liner' },
          { type: 'string', name: 'heroImage', label: 'Hero screenshot (URL or /media path)' },
          {
            type: 'object',
            name: 'links',
            label: 'Links',
            fields: [
              { type: 'string', name: 'live', label: 'Live site' },
              { type: 'string', name: 'github', label: 'GitHub repo' },
              { type: 'string', name: 'linkedin', label: 'LinkedIn post' },
              { type: 'string', name: 'playStore', label: 'Google Play listing' },
            ],
          },
          {
            type: 'string',
            name: 'features',
            label: 'Feature list',
            list: true,
          },
          {
            type: 'object',
            name: 'caseStudy',
            label: 'Case Study',
            fields: [
              { type: 'string', name: 'role', label: 'Role' },
              { type: 'string', name: 'stackLabel', label: 'Stack label' },
              { type: 'string', name: 'time', label: 'Time' },
              { type: 'string', name: 'status', label: 'Status' },
              { type: 'string', name: 'overview', label: 'Overview', ui: { component: 'textarea' } },
              { type: 'string', name: 'problem', label: 'The problem', ui: { component: 'textarea' } },
              { type: 'string', name: 'outcome', label: 'Outcome', ui: { component: 'textarea' } },
              {
                type: 'string',
                name: 'approach',
                label: 'Approach steps',
                list: true,
              },
              {
                type: 'object',
                name: 'stats',
                label: 'Stats',
                list: true,
                fields: [
                  { type: 'string', name: 'n', label: 'Number / value' },
                  { type: 'string', name: 'label', label: 'Stat label' },
                ],
              },
              { type: 'number', name: 'processShots', label: 'Process shot count' },
            ],
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },

      // ── blogLinks ────────────────────────────────────────────────────────
      {
        name: 'blogLinks',
        label: 'External Blog Links',
        path: 'src/content/blog-links',
        format: 'json',
        fields: [
          { type: 'string', name: 'date', label: 'Date (ISO: YYYY-MM-DD)' },
          { type: 'string', name: 'title', label: 'Post title' },
          { type: 'string', name: 'url', label: 'External URL' },
          { type: 'string', name: 'tag', label: 'Tag' },
          { type: 'number', name: 'readMinutes', label: 'Read time (minutes)' },
          { type: 'string', name: 'excerpt', label: 'Excerpt (featured post only)', ui: { component: 'textarea' } },
          { type: 'boolean', name: 'featured', label: 'Featured post' },
        ],
      },

      // ── gallery ──────────────────────────────────────────────────────────
      {
        name: 'blog',
        label: 'Mini Blog Articles',
        path: 'src/content/blog',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', required: true },
          { type: 'string', name: 'description', label: 'SEO description / excerpt', required: true, ui: { component: 'textarea' } },
          { type: 'string', name: 'date', label: 'Publish date (YYYY-MM-DD)', required: true },
          { type: 'string', name: 'tag', label: 'Topic', required: true },
          { type: 'boolean', name: 'featured', label: 'Featured article' },
          { type: 'rich-text', name: 'body', label: 'Article', isBody: true },
        ],
      },
      {
        name: 'gallery',
        label: 'Gallery',
        path: 'src/content/gallery',
        format: 'json',
        fields: [
          { type: 'number', name: 'order', label: 'Display order' },
          { type: 'image', name: 'image', label: 'Photo (leave empty for placeholder)' },
          { type: 'string', name: 'label', label: 'Caption label' },
          { type: 'number', name: 'rotate', label: 'Tilt (degrees)' },
          { type: 'number', name: 'height', label: 'Tile height (px)' },
        ],
      },

    ],
  },
});
