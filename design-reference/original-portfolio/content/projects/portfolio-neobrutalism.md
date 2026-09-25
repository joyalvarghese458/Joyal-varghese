---
order: 10
title: "Neo-Brutalist Portfolio"
tag: "Personal site · 2024"
year: "2024"
logoColor: "yellow"
summary: "A portfolio in hard borders and offset shadows: React + TypeScript, with a self-hosted admin panel that commits content straight to GitHub."
stack: ["React", "TypeScript", "TailwindCSS", "Vite", "bolt.new", "Cursor"]
featured: false
subtitle: "The previous portfolio: neo-brutalist, and it edits itself."
heroImage: "https://i.ibb.co/Prmk04j/Screenshot-2024-11-24-at-2-23-11-PM.png"
links:
  live: "https://ashwinkv.vercel.app"
  github: "https://github.com/dreamographer/Portfolio-NEOBRUTALISM"
features:
  - "Neo-brutalist design: hard black borders, no radius, bold offset shadows"
  - "Bento-grid home page composed from section components"
  - "Built-in admin panel that rewrites site content"
  - "Content commits to GitHub via the Contents API, triggering a redeploy"
  - "Fully responsive"
caseStudy:
  role: "Solo · design + code"
  stackLabel: "React · TypeScript · Tailwind · Vite"
  time: "4 days"
  status: "Live · superseded by this site"
  overview: "A personal portfolio built in a neo-brutalist idiom, hard black borders, zero border-radius, bold offset shadows, with the home page laid out as a bento grid. Content lives as typed arrays in the repo, and an admin panel writes to them directly. Built fast and largely vibe-coded with bolt.new and Cursor — four days from idea to deployed."
  problem: "Most portfolios need a redeploy or a CMS subscription to change a sentence. I wanted to edit content from the browser without either, and without a database."
  approach:
    - "Kept all content as typed arrays in the repo: content as code, no database."
    - "Built a gated admin panel that serialises edits back to the data file."
    - "In production, saves commit to GitHub via the Contents API; Vercel redeploys on the commit."
    - "In dev, a Vite middleware writes the same file locally."
  outcome: "Ran as the live portfolio at ashwinkv.vercel.app. Superseded by this notebook-style site, which moved content into Astro collections and TinaCMS."
  stats: []
  processShots: 4
---
