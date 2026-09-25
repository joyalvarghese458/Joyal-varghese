# Joyal Varghese Portfolio

A notebook-style personal portfolio. Built with **Astro** (static site) and
content editable through **TinaCMS** (no-code web dashboard, git-backed).

Implemented from the Claude Design handoff in `design-reference/`.

## Stack

- **Astro 6**: static site generator. Near-zero JS, fast, free to host.
- **Content collections**: all content lives as Markdown/JSON in `src/content/`.
- **TinaCMS**: web dashboard for editing that content with no code.

## Develop

```bash
npm install
npm run dev          # Astro dev server  → http://localhost:4321
npm run build        # static build      → dist/
npm run preview      # preview the build
```

## Project layout

```
src/
  components/      notebook UI primitives (sticky notes, hand-drawn boxes, …)
  content/         the editable content (this is what the CMS edits)
  content.config.ts  content collection schemas
  layouts/Base.astro  <head>, fonts, page transitions
  lib/notebook.ts  design tokens (colors)
  pages/           index, projects, projects/[slug], gallery, blog
  styles/global.css
tina/config.ts     TinaCMS schema (mirrors content.config.ts)
design-reference/  original Claude Design handoff (kept for reference)
```

## Editing content

### Option A: edit files directly
Content is plain Markdown/JSON under `src/content/`:

- `profile/main.json`: name, tagline, bio, photo, contacts, footer
- `experience/*.json`, `education/*.json`: timeline rows
- `skills/*.json`: "Good At" list
- `projects/*.md`: projects + their case studies (frontmatter)
- `blog-links/*.json`: external blog links (title + URL)
- `gallery/*.json`: gallery tiles

Edit, save, rebuild.

### Option B: TinaCMS dashboard (no-code)
TinaCMS gives a web form UI for everything above. Local editing:

```bash
npm run tina:dev     # runs Tina + Astro; dashboard at /admin
```

For the **production** dashboard you need a free Tina Cloud project
(https://app.tina.io) connected to this repo's git remote, then set:

```
TINA_CLIENT_ID=...   # from Tina Cloud
TINA_TOKEN=...       # from Tina Cloud
TINA_BRANCH=main
```

Build for production with `npm run tina:build`. Saving in the dashboard commits
the changed content file to git, which triggers a redeploy.

## Deploy (free)

Connect the git repo to **Cloudflare Pages** or **Netlify**:

- Build command: `npm run build` (or `npm run tina:build` if using Tina Cloud)
- Output directory: `dist`

Each push, or each save in the Tina dashboard, auto-rebuilds and redeploys.

## Notes

- Content is personalized from Joyal's resume and LinkedIn details. See
  `docs/PERSONALIZATION.md` for remaining photos and links to add.
- `photo` fields are `null` → striped placeholder shown. Add an image path
  (file in `public/`) to replace.
- Mini blogs are hosted as Markdown articles in `src/content/blog/`, alongside
  optional external links. See `docs/SEO.md` for publishing and domain setup.
