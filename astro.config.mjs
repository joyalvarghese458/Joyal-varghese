// @ts-check
import { defineConfig } from 'astro/config';

// Default is the portfolio subdomain.
// Override SITE_URL when deploying on a different domain.
export default defineConfig({
  site: process.env.SITE_URL || 'https://joyalvarghese.myportfoliowebsite.com',
  trailingSlash: 'ignore',
});
