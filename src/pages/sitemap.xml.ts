import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const escapeXml = (text: string) => text.replace(/[<>&"']/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[character]!);

export const GET: APIRoute = async ({ site }) => {
  if (!site) throw new Error('Set site in astro.config.mjs before generating the sitemap.');
  const [articles, projects, gallery] = await Promise.all([getCollection('blog'), getCollection('projects'), getCollection('gallery')]);
  const paths = ['/', '/projects/', '/blog/', ...articles.map((entry) => `/blog/${entry.id}/`), ...projects.map((entry) => `/projects/${entry.id}/`), ...(gallery.length ? ['/gallery/'] : [])];
  const urls = paths.map((path) => `<url><loc>${escapeXml(new URL(path, site).href)}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
