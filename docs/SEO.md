# Search and publishing setup

The primary keyword is **software developer**. Page titles and visible introductions use it where relevant, with Sharjah/UAE context and specific services such as ERP, React web applications, and APIs. The portfolio does not claim unverified rankings, testimonials, awards, or results.

## Routes and metadata

The six main routes are `/`, `/about/`, `/services/`, `/case-studies/`, `/blogs/`, and `/contact/`. Five case studies and four local articles have their own URLs. Each indexable page has a unique title and description, an absolute canonical URL, Open Graph and Twitter metadata, and structured data. The shared schema connects a WebSite, Person, WebPage/ProfilePage/ContactPage, and breadcrumbs; specific pages add services, project collections, creative works, or BlogPosting data.

The sitemap includes only current indexable routes. Empty gallery and 404 pages are noindex. robots.txt references the sitemap and excludes the optional admin dashboard. Content is available without client-side rendering.

Legacy `/projects/` and `/blog/` pages and detail routes redirect to `/case-studies/` and `/blogs/`. `public/_redirects` supplies 301 rules for Netlify and Cloudflare Pages. Astro also emits static redirect HTML for those known old URLs. Other hosts need equivalent server rules if HTTP 301 responses are required. Keep article filenames stable unless another redirect is added.

## Content

Articles live in `src/content/blog/*.md`, with title, description, publication date, topic, and Markdown body. Reading time is calculated from the body. The blog-links collection optionally adds external posts. Services are edited in `src/lib/services.ts` and shared by Home and Services.

The initial four articles were drafted with AI assistance using supplied project information. Their dates reflect creation, not fabricated historical publication. Review article wording before publication and update dates only when publication or a substantive edit warrants it.

## Before publishing

1. Set `SITE_URL` to the production origin when it differs from `https://joyalvarghese.myportfoliowebsite.com` (the domain supplied in the resume).
2. Run `npm run build` and `npm run verify`. Review pages at phone and desktop widths in a real browser.
3. Check deployed canonical URLs, robots.txt, sitemap.xml, legacy HTTP redirects, the resume download, and contact links.
4. Verify the domain in Google Search Console and submit `/sitemap.xml`. Inspect an article and a case study URL; test article schema in Google's Rich Results Test.
5. Keep private previews behind hosting access controls or configure preview-wide noindex headers. Do not submit preview domains for indexing.

The implementation supports crawling and indexing; local checks cannot confirm search-engine indexing or rankings. The contact form posts to Formspree and does not require an Astro server endpoint.
