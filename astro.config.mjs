// @ts-check
import { defineConfig } from 'astro/config';

// Default is the portfolio address supplied in Joyal's resume.
// Override SITE_URL when deploying on a different domain.
export default defineConfig({
  site: process.env.SITE_URL || 'https://joyal.myportfoliowebsite.com',
  trailingSlash: 'ignore',
});
