> Historical design reference: identity examples and route instructions below describe the original handoff. Current Joyal Varghese content lives in src/content/. See README.md for the implemented six-page structure; the current font is Kalam.

# Implementation Contract: Ashwin KV Portfolio (Astro + TinaCMS)

This is the shared contract every implementation agent builds against. Do not
deviate from the component APIs, content field names, or file paths below;
other agents depend on them.

## Source of truth

The visual design is the Claude Design handoff in `design-reference/project/`.
Recreate it **pixel-faithfully** in Astro. Key files:

- `notebook.jsx`: primitive components + the design system (colors/fonts).
- `home-a.jsx`: mobile home (390 wide).
- `desktop.jsx`: desktop home + desktop detail pages (1280 wide).
- `details.jsx`: mobile detail pages (Projects, Gallery, Blog, Case study).

Each page must be **one responsive page** that looks like the mobile design on
narrow screens and the desktop design on wide screens. Do NOT ship two separate
artboards.

## Design system

- Paper `#fbfaf5`, warm. Page background is a blue 5mm-ish grid (GridPaper).
- Ink `#1a1a1a`; soft ink `#2a2a2a`; pencil grey `#5a5a5a`.
- Accents: yellow `#ffe45c` (primary highlight/sticky), pink `#ffc9d4`,
  blue `#bcdfff`, green `#c6efb0`. Red marker `oklch(0.58 0.19 25)` / red ink
  `oklch(0.48 0.18 25)` for arrows, asterisks, "see all" links, big stats only.
- Fonts (loaded in `Base.astro`): **Permanent Marker** (big headings),
  **Caveat** (body handwriting), **JetBrains Mono** (tiny labels/dates/tags).
- Tokens live in `src/lib/notebook.ts` (`NB`, `SWATCHES`, `swatch()`).

## Responsive rules

- Mobile-first. Breakpoint: **880px** (`@media (min-width: 880px)`).
- Page shell: centered, `max-width: 1280px`, horizontal padding `var(--nb-pad)`
  (22px mobile → 60px desktop, already set in `global.css`).
- Use `clamp(mobilePx, vw, desktopPx)` for fluid type so headings scale between
  the mobile and desktop design sizes. Example hero name:
  `clamp(58px, 12vw, 132px)`.
- Layout differences (column counts, top nav, hero proportions) → CSS media
  queries / Astro scoped `<style>`. The desktop top nav is hidden below 880px.

## File layout

```
src/
  lib/notebook.ts            (done: tokens)
  styles/global.css          (done: shared CSS)
  layouts/Base.astro         (done: head/fonts/transitions; props: title, description)
  components/                (AGENT: components)
  content.config.ts          (AGENT: content)
  content/                   (AGENT: content: sample entries)
  pages/
    index.astro              (AGENT: home)
    projects.astro           (AGENT: projects)
    projects/[slug].astro    (AGENT: projects)
    gallery.astro            (AGENT: gallery+blog)
    blog.astro               (AGENT: gallery+blog)
tina/config.ts               (AGENT: content)
```

## Component API: `src/components/*.astro`

Every component: accept an optional `class` prop and spread any extra
attributes onto the root element. `size` props accept a **number** (→ `px`) or
a **string** (used verbatim, e.g. a `clamp(...)` expression).

| Component | Props (defaults) | Notes |
|---|---|---|
| `GridPaper.astro` | `size=22`, `strong=false`, `class` | Renders a `<div>` with the blue grid + paper background. Has a `<slot/>`. Pages put one GridPaper as their outer wrapper. |
| `StickyNote.astro` | `color=NB.yellow`, `rotate=-2`, `peel=true`, `inline=false`, `class` | `<span class="nb-sticky nb-sticky-peel">` (peel class only if `peel`). Background=color, `transform:rotate()`. Slot wrapped in `<span class="nb-sticky-inner">`. |
| `Highlight.astro` | `color=NB.yellow`, `height='0.7em'`, `y='0.15em'` | Inline highlighter swipe behind slotted text (linear-gradient background trick). |
| `HandUnderline.astro` | `width=120`, `color=NB.ink`, `strokeWidth=2.5`, `class` | Wavy SVG underline. Pick one of the 3 paths in `notebook.jsx`. |
| `HandArrow.astro` | `direction='down'`, `length=80`, `color=NB.ink`, `strokeWidth=2.2`, `curve=0.5`, `class` | 8 directions per `notebook.jsx` (`down,up,left,right,down-left,down-right,up-left,up-right`). |
| `HandBox.astro` | `width=200`, `height=100`, `color=NB.ink`, `strokeWidth=2`, `rounded=false`, `dashed=false`, `class` | Hand-drawn rectangle outline. **Renders position:absolute, inset:0, width/height 100%** with `viewBox="0 0 width height"` + `preserveAspectRatio="none"`. Usage: parent is `position:relative`, drop `<HandBox/>` as the card border, content sits above in a `position:relative` div. |
| `PhotoCutout.astro` | `width=130`, `height=170`, `rotate=-3`, `label='drop photo'`, `src=null`, `alt=''`, `class` | White-bordered photo frame. `src` → `<img>`; else striped placeholder + person icon + `label`. |
| `Marker.astro` | `size=48`, `color=NB.ink`, `as='span'`, `class` | Permanent Marker font. `letter-spacing:.5px`, `line-height:1.05`. Slot. |
| `Hand.astro` | `size=18`, `color=NB.ink`, `weight=500`, `as='span'`, `class` | Caveat font, `line-height:1.35`. Slot. |
| `Mono.astro` | `size=10`, `color=NB.pencil`, `as='span'`, `class` | JetBrains Mono, `text-transform:uppercase`, `letter-spacing:1.5px`. Slot. |
| `Doodle.astro` | `kind='star'`, `size=18`, `color=NB.red`, `class` | Kinds: `star,asterisk,plus,spark,check,heart,arrow,squiggle` (paths in `notebook.jsx`). |
| `HandLink.astro` | `href='#'`, `color=NB.ink`, `class` + rest attrs | `<a class="nb-link">`; CSS draws the underline on hover. Spread `target`/`rel` etc. |
| `ProjectLogo.astro` | `color=NB.yellow`, `letter='?'`, `size=56`, `rot=-3`, `class` | Tilted rounded colored square with a marker initial. |

The components agent ports these 1:1 from `notebook.jsx` / `details.jsx`
(`ProjectLogo`). Inline-style React → Astro `<style>` or inline `style` attr,
whichever is cleaner. Hover/animation behavior already lives in `global.css`
(`.nb-sticky`, `.nb-photo`, `.nb-link`, `.nb-page-enter`).

## Content collections: `src/content.config.ts`

Astro 5 content layer. Use `glob` from `astro/loaders`. All content lives under
`src/content/`. Field names below are FINAL; page agents code against them.

### `profile`: glob `src/content/profile/*.json` (singleton: one file `main.json`)
- `name` string: "Ashwin KV"
- `firstName` string: "Ashwin"
- `greeting` string: "hi, I'm"
- `tagline` array of `{ text: string, highlight: '' | 'yellow' | 'pink' | 'green' }`
rendered as flowing text; segments with a highlight get `<Highlight>`.
- `status` string: "open to work"
- `photo` string | null: image path; null → placeholder
- `photoCaption` string: "that's me, says hi"
- `tags` string[]: pill words (self-taught, curious, fast, …)
- `bio` string: long paragraph
- `contacts` array of `{ icon: string, label: string, url: string, sub: string, color: 'yellow'|'pink'|'blue'|'green' }`
- `footerNote` string

### `experience`: glob `src/content/experience/*.json`
- `order` number · `year` string ("2023 / NOW") · `role` string · `place` string · `desc` string

### `education`: glob `src/content/education/*.json`
- same shape as `experience`

### `skills`: glob `src/content/skills/*.json`
- `order` number · `label` string

### `projects`: glob `src/content/projects/*.md` (markdown frontmatter)
- `order` number
- `title` string · `tag` string ("Web app · 2024") · `year` string ("2024")
- `logoColor` enum `yellow|pink|blue|green`
- `summary` string: short card description
- `stack` string[]
- `featured` boolean: featured ones surface on the home "Featured Work" section
- `subtitle` string: case-study one-liner
- `caseStudy` object:
  - `role` string · `stackLabel` string · `time` string · `status` string  (the meta strip)
  - `overview` string · `problem` string · `outcome` string
  - `approach` string[]: numbered approach list
  - `stats` array of `{ n: string, label: string }`
  - `processShots` number (default 4): count of placeholder process images
- markdown body: optional, unused by templates for now.

### `blogLinks`: glob `src/content/blog-links/*.json`
- `date` string: ISO date "2026-05-12"
- `title` string
- `url` string: **external** link (Medium/dev.to/etc); opens in new tab
- `tag` string: single tag ("css", "react", "meta"…)
- `readMinutes` number
- `excerpt` string optional: shown on the featured post
- `featured` boolean: the one featured post on /blog

### `gallery`: glob `src/content/gallery/*.json`
- `order` number
- `image` string | null: null → striped placeholder
- `label` string
- `rotate` number optional: tilt in deg
- `height` number optional: masonry tile height

The content agent also creates **sample entries** matching the design
placeholders (3 experience, 2 education, ~6 skills, 6 projects with full case
studies, ~8 blog links, ~12 gallery items, 1 profile).

## TinaCMS: `tina/config.ts`

Configure TinaCMS schema mirroring the collections above (md for `projects`,
json for the rest). Use env vars `TINA_CLIENT_ID`, `TINA_TOKEN`,
`TINA_BRANCH`. Build output folder `admin`, public folder `public`. Add npm
scripts `dev`/`build` that wrap Astro with `tinacms dev`/`tinacms build`. Local
editing works without Tina Cloud; production admin needs the cloud client id;
note that in `README.md`.

## Pages: behavior

All pages wrap content in `Base.astro` → one `GridPaper`.

- **`index.astro`**: single scrolling home. Sections in order: Hero, Bio,
  Experience, Education, Good At (skills), Featured Work (featured projects, or
  first 3), Gallery preview (first 4), Mini Blog (latest 4 blogLinks), Contact +
  footer. Desktop shows a top nav (work/gallery/writing/contact). "see all
  projects →" → `/projects`, "open gallery →" → `/gallery`, "all posts →" →
  `/blog`, contact → `#contact`.
- **`projects.astro`**: header ("Projects.", "← back to home" → `/`), intro
  line, responsive grid of all projects (1-col cards on mobile, 3-col on
  desktop), each card → `/projects/<slug>`.
- **`projects/[slug].astro`**: `getStaticPaths` over `projects`. Case study:
  title block, hero image, meta strip, overview/problem/approach/outcome blocks,
  process shots, stats, "← back to projects" → `/projects`.
- **`gallery.astro`**: header, intro, masonry photo grid (2-col mobile, 4-col
  desktop) from `gallery`.
- **`blog.astro`**: header, intro, tag chips, one featured post (with excerpt),
  then the rest as a dated list. Every post title links to its external `url`
  (`target="_blank" rel="noopener noreferrer"`).

Slugs come from the project filename (e.g. `lumen.md` → `/projects/lumen`).
