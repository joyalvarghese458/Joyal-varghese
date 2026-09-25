import { getCollection } from 'astro:content';

export const readingMinutes = (body = '') => Math.max(1, Math.ceil(body.trim().split(/\s+/).length / 200));

// Keep the original list design and support existing external blog links.
export async function getBlogPosts() {
  const [articles, links] = await Promise.all([getCollection('blog'), getCollection('blogLinks')]);
  return [
    ...articles.map((entry) => ({
      id: `article-${entry.id}`,
      data: { ...entry.data, url: `/blog/${entry.id}/`, excerpt: entry.data.description, readMinutes: readingMinutes(entry.body) },
    })),
    ...links.map((entry) => ({ id: `link-${entry.id}`, data: entry.data })),
  ].sort((a, b) => b.data.date.localeCompare(a.data.date) || a.id.localeCompare(b.id));
}
