---
order: 3
title: "Triple i Blog"
tag: "SEO-optimised CMS · 2026"
year: "2026"
logoColor: "pink"
summary: "An SEO-first blog platform for Triple i Commerce Academy, running on Strapi so the marketing team publishes exam guides without touching a developer."
subtitle: "A headless-CMS blog built to rank: structured data, clean metadata, and a publishing flow non-technical people can drive."
stack: ["Next.js", "Strapi", "TypeScript", "TailwindCSS", "Schema.org JSON-LD"]
featured: false
heroImage: "/media/projects/tripleica-blog.jpg"
links:
  live: "https://www.tripleica.com/blog"
features:
  - "Headless Strapi CMS: marketing publishes without a deploy or a developer"
  - "Per-post metadata, canonical URLs and Open Graph handled at the template level"
  - "Structured data (JSON-LD) so posts are eligible for rich results"
  - "Performance tuning on a mostly-image content type: lazy loading, sized media"
  - "Card grid with cover art, title and date, responsive to phone width"
  - "Feeds the wider ELT Global funnel: exam guides that route readers to courses"
caseStudy:
  role: "Solo · frontend and CMS integration"
  stackLabel: "Next.js · Strapi · TypeScript"
  time: "Dec 2024 – Jul 2026"
  status: "Live · production"
  overview: "Triple i Commerce Academy sells commerce qualifications, and the people searching for them are searching for the exam, not the academy: CMA articleship rules, CSEET dates, ACCA SBL format. The blog is the front door for that traffic. I built the platform it runs on, with SEO treated as an architectural requirement rather than a plugin bolted on afterwards."
  problem: "Content marketing was blocked on engineering. Every post meant a developer, and posts that did ship had inconsistent metadata, no structured data, and no reliable path into search results. Meanwhile the search intent the academy needed to own was going to competitors."
  approach:
    - "Chose a headless architecture: Strapi for authoring, a separate frontend for rendering, so the publishing team ships on their own schedule."
    - "Modelled content so SEO fields are part of the post rather than an afterthought: title, description, canonical, social image."
    - "Emitted Schema.org JSON-LD per article so posts are eligible for rich results."
    - "Tuned performance on an image-heavy content type, since Core Web Vitals are a ranking input and every post leads with cover art."
    - "Built the index as a responsive card grid that stays legible from desktop down to phone."
  outcome: "It runs as a real content channel now: over 150 posts published and still growing, with the marketing team shipping 10+ a month on their own — no developer, no deploy, no ticket. The section pulls more than 30,000 views a month."
  stats:
    - { n: "150+", label: "posts published" }
    - { n: "10+", label: "posts a month" }
    - { n: "30k+", label: "monthly views" }
  processShots: 4
---
