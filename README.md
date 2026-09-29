# Joyal Varghese Portfolio

A mobile-first, multipage software developer portfolio built with Astro. The existing notebook design is preserved: grid paper, Kalam handwriting, Permanent Marker headings, sticky notes, hand-drawn borders, a taped portrait, and page-turn transitions.

## Pages

| Page | URL | Content |
| --- | --- | --- |
| Home | `/` | Introduction, services, featured work, latest writing, contact invitation |
| About | `/about/` | Biography, experience, education, skills, resume |
| Services | `/services/` | ERP, web applications, APIs/databases, e-commerce, project process |
| Case studies | `/case-studies/` | Five projects with individual case-study pages |
| Blogs | `/blogs/` | Four local articles, optional external posts, working topic filters |
| Contact | `/contact/` | Formspree contact form, email, phone, WhatsApp, social profiles, resume |

Old `/projects/` and `/blog/` URLs, including detail pages, redirect to the new routes. `public/_redirects` provides HTTP 301 rules for Netlify and Cloudflare Pages. Static HTML redirect pages support other hosts; configure equivalent HTTP redirects on those hosts for best migration behavior.

The optional `/gallery/` route remains available for future photos. It is hidden from main navigation and excluded from indexing and the sitemap while empty. Archived reference media is never published.

## Develop and verify

Use Node 22.13+ (Node 24 is used locally).

```sh
npm ci --omit=dev
npm run dev
npm run build
npm run verify
npm run preview
```

Verification checks generated pages, internal links and fragments, assets, headings, shared navigation, metadata, structured data, redirects, sitemap, robots.txt, responsive portrait output, blog filters, and the contact form markup. Blog interaction checks use lightweight DOM stand-ins and do not replace real browser layout testing. Node may emit an experimental warning for its TypeScript stripping API.

If Astro telemetry cannot write to a restricted user directory, set `ASTRO_TELEMETRY_DISABLED=1` for the process. The static site does not need TinaCMS to build.

## Edit content

- `src/content/profile/main.json`: identity, homepage tagline, full biography, portrait, contacts, footer.
- `src/content/experience/`, `education/`, `skills/`: About page content.
- `src/content/projects/*.md`: case studies and homepage featured work.
- `src/content/blog/*.md`: local articles; filenames define their URLs.
- `src/content/blog-links/*.json`: optional external writing.
- `src/content/gallery/*.json`: optional gallery entries.
- `src/lib/services.ts`: service summaries, technologies, inclusions, related case studies. Edited in code and shared by Home and Services.
- `src/lib/navigation.ts`: the six shared navigation destinations.
- `src/pages/`: introductions, Formspree contact form, and services process copy.

The supplied portraits are optimized by Astro into responsive WebP images. The hero loads eagerly; images further down the site may load lazily. Replace the profile photo or resume in `public/` as needed.

The contact form sends a native HTML POST to the supplied Formspree endpoint (`mvkgdwwo`) on Vercel and also works without JavaScript. Formspree's optional `_gotcha` honeypot was removed after a real test was incorrectly sent to Spam because the field had a value. Keep CAPTCHA enabled in the form's Formspree **Settings → Spam protection**; [Formspree documents CAPTCHA as its built-in protection](https://help.formspree.io/articles/building-your-form/honeypot-spam-filtering). After deployment, you may set **Restrict to Domain** in the Formspree project settings to the production hostname, without `https://`; this can block Vercel preview and localhost submissions. Formspree receives and processes submitted messages. The direct email and WhatsApp links remain available.

## Optional TinaCMS

The existing Tina schema covers profile, experience, education, skills, projects, articles, external writing, and gallery content. Install development dependencies with `npm ci`, then run `npm run tina:dev` for the local dashboard at `/admin/`.

Production editing requires a Tina Cloud project and `TINA_CLIENT_ID`, `TINA_TOKEN`, and `TINA_BRANCH`. Build with `npm run tina:build`. On this Windows machine, a previous full installation needed native C++ build tools for `better-sqlite3`; TinaCMS editing has not been verified. Services copy is code-managed.

## Deployment and search

Build with `npm run build` and publish `dist/`. The default production origin is `https://joyalvarghese.myportfoliowebsite.com`, from the supplied resume. Set `SITE_URL` before building for a different domain.

Every indexable page has a unique title, description, canonical URL, social metadata, and JSON-LD. The main keyword is **software developer**, used naturally in visible content. Read [docs/SEO.md](docs/SEO.md) for deployment checks and [docs/PERSONALIZATION.md](docs/PERSONALIZATION.md) for resource provenance.
