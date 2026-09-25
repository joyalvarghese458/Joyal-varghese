# Blog and search setup

Mini blogs live in `src/content/blog/*.md` and can be edited through TinaCMS's Mini Blog Articles collection. Each has a title, description, publication date, topic and Markdown body. The homepage preview and blog index include local articles and optional external blog links. Reading time is calculated from the article body.

The default public address is `https://joyal.myportfoliowebsite.com`, from the supplied resume. Set the `SITE_URL` build environment variable to the actual production origin before deploying elsewhere. Canonicals, social URLs, structured data, robots.txt and sitemap.xml use that origin. Preview builds should not be submitted for indexing.

The four initial articles were drafted with AI assistance from the supplied project information. Review the wording before publication, especially first-person advice. They share their actual creation date rather than fabricated historical dates. Update a post's date only when publishing it, not on every build.

After deployment, verify the production domain in Google Search Console, submit `/sitemap.xml`, and inspect the homepage and an article URL. Test the live article's structured data with Google's Rich Results Test. Local build checks cannot confirm Google indexing or search rankings.

The target phrases are used in relevant content, including a guide to choosing the best full stack developer in UAE for a project. The site does not claim an unverified award or ranking. No keyword stuffing, fabricated ratings, or hidden search text is used.

References:
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/appearance/structured-data/article
- https://developers.google.com/search/docs/appearance/title-link
