# Joyal Varghese portfolio

Personalized from the supplied resume and LinkedIn text. The original content and media are preserved in `design-reference/original-portfolio/` and are excluded from the published site.

Still needed: optional gallery photos, project screenshots, and public project URLs. The profile now uses an AI-generated portrait based on Joyal's supplied photo. No GitHub profile URL was supplied. Project dates and status are omitted where not supplied. The empty gallery stays hidden on the homepage. Four local mini blog articles now appear in the writing section.

The resume is available at `/Joyal_Varghese_Resume.pdf`. SEO URLs now default to the portfolio address in the resume. Set `SITE_URL` at build time if deploying on a different domain; see `docs/SEO.md`.

Local setup: `npm ci --omit=dev` installs the dependencies needed for `npm run dev` and `npm run build`. A full install for TinaCMS failed on this machine with Node 24 because its `better-sqlite3` dependency required unavailable Visual Studio C++ build tools. TinaCMS editing has not been verified.
