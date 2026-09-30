// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Default is the portfolio subdomain.
// Override SITE_URL when deploying on a different domain.
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: process.env.SITE_URL || 'https://joyalvarghese.myportfoliowebsite.com',
  trailingSlash: 'ignore',
});
