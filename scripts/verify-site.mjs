import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
assert.ok(fs.existsSync(root), 'Run npm run build first.');
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)(?:="([^"]*)"|='([^']*)')?/g)].map((match) => [match[1], match[2] ?? match[3] ?? true]));
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map((match) => attrs(match[0]));
const pages = walk(root).filter((file) => file.endsWith('.html')).map((file) => {
  const html = fs.readFileSync(file, 'utf8');
  const relative = path.relative(root, file).replaceAll('\\', '/');
  const route = relative === 'index.html' ? '/' : `/${relative.replace(/index\.html$/, '')}`;
  return { file, html, route, meta: tags(html, 'meta'), ids: tags(html, '[a-z][a-z0-9-]*').map((tag) => tag.id).filter(Boolean) };
});
const byRoute = new Map(pages.map((page) => [page.route, page]));
const primary = ['/', '/about/', '/services/', '/case-studies/', '/blogs/', '/contact/'];
const origin = new URL(tags(byRoute.get('/').html, 'link').find((link) => link.rel === 'canonical').href).origin;
let checkedLinks = 0;
const resolveLocal = (value, base) => {
  if (!value || /^(mailto:|tel:|data:|javascript:)/.test(value)) return;
  const url = new URL(value.replaceAll('&amp;', '&'), origin + base);
  if (url.origin !== origin) return;
  const pathname = decodeURIComponent(url.pathname);
  const target = path.join(root, pathname);
  const file = fs.existsSync(target) && fs.statSync(target).isDirectory() ? path.join(target, 'index.html') : fs.existsSync(target) ? target : path.join(target, 'index.html');
  assert.ok(fs.existsSync(file), `${base}: missing target ${value}`);
  if (url.hash && file.endsWith('.html')) {
    const targetPage = pages.find((page) => page.file === file);
    assert.ok(targetPage?.ids.includes(decodeURIComponent(url.hash.slice(1))), `${base}: missing fragment ${value}`);
  }
  checkedLinks++;
};
const titles = new Set();
const descriptions = new Set();
let indexed = 0;
let redirects = 0;
for (const page of pages) {
  const refresh = page.meta.find((meta) => meta['http-equiv']?.toLowerCase() === 'refresh');
  if (refresh) {
    const destination = refresh.content.match(/url=(.*)/i)?.[1];
    assert.ok(destination, `${page.route}: redirect destination missing`);
    resolveLocal(destination, page.route);
    redirects++;
    continue;
  }
  assert.equal((page.html.match(/<h1\b/g) ?? []).length, 1, `${page.route}: needs exactly one h1`);
  assert.equal((page.html.match(/<main\b/g) ?? []).length, 1, `${page.route}: needs one main landmark`);
  assert.equal(page.ids.length, new Set(page.ids).size, `${page.route}: duplicate IDs`);
  assert.ok(page.html.includes('href="#main-content"'), `${page.route}: missing skip link`);
  for (const image of tags(page.html, 'img')) assert.ok(typeof image.alt === 'string', `${page.route}: image missing alt`);
  const noindex = page.meta.some((meta) => meta.name === 'robots' && meta.content.includes('noindex'));
  const title = page.html.match(/<title>(.*?)<\/title>/s)?.[1];
  const description = page.meta.find((meta) => meta.name === 'description')?.content;
  assert.ok(title && description, `${page.route}: metadata missing`);
  if (!noindex) {
    const canonical = tags(page.html, 'link').filter((link) => link.rel === 'canonical');
    assert.equal(canonical.length, 1, `${page.route}: missing or duplicate canonical`);
    assert.equal(canonical[0].href, origin + page.route, `${page.route}: wrong canonical`);
    assert.ok(!titles.has(title), `${page.route}: duplicate title`);
    assert.ok(!descriptions.has(description), `${page.route}: duplicate description`);
    titles.add(title); descriptions.add(description); indexed++;
  }
  const header = page.html.match(/<header\b[^>]*class="site-header[^>]*>(.*?)<\/header>/s)?.[1];
  assert.ok(header, `${page.route}: missing shared navigation`);
  for (const href of primary) assert.ok(tags(header, 'a').some((link) => link.href === href), `${page.route}: navigation missing ${href}`);
  if (primary.includes(page.route)) assert.equal(tags(header, 'a').find((link) => link['aria-current'] === 'page')?.href, page.route, `${page.route}: wrong active navigation`);
  for (const tag of tags(page.html, '(?:a|img|script|link)')) {
    if (tag.href) resolveLocal(tag.href, page.route);
    if (tag.src) resolveLocal(tag.src, page.route);
    if (tag.srcset) for (const item of tag.srcset.split(',')) resolveLocal(item.trim().split(/\s+/)[0], page.route);
  }
  for (const match of page.html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)) {
    const schema = JSON.parse(match[1]);
    assert.equal(schema['@context'], 'https://schema.org');
    assert.ok(!JSON.stringify(schema).match(new RegExp(`${origin.replaceAll('.', '\\.')}\/(blog|projects)\/`)), `${page.route}: legacy URL in schema`);
  }
  if (!noindex) assert.ok(page.html.includes('application/ld+json'), `${page.route}: missing structured data`);
}
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.equal(urls.length, new Set(urls).size, 'Duplicate sitemap entries');
for (const page of pages.filter((page) => !page.meta.some((meta) => meta['http-equiv'] || (meta.name === 'robots' && meta.content.includes('noindex'))))) assert.ok(urls.includes(origin + page.route), `Sitemap missing ${page.route}`);
for (const url of urls) { assert.ok(!/\/(blog|projects|404)(\/|\.)/.test(new URL(url).pathname)); resolveLocal(url, '/'); }
assert.ok(fs.readFileSync(path.join(root, 'robots.txt'), 'utf8').includes(`Sitemap: ${origin}/sitemap.xml`));
assert.ok(fs.readFileSync(path.join(root, '_redirects'), 'utf8').includes('/blog/* /blogs/:splat 301'));
const hero = tags(byRoute.get('/').html, 'img')[0];
assert.equal(hero.loading, 'eager');
assert.equal(hero.fetchpriority, 'high');
assert.ok(hero.src.endsWith('.webp') && hero.srcset, 'Hero needs responsive optimized images');
const contact = byRoute.get('/contact/').html;
const contactForm = tags(contact, 'form').find((form) => form.action === 'https://formspree.io/f/mvkgdwwo');
assert.ok(contactForm, 'Contact form must post to the supplied Formspree endpoint');
assert.equal(contactForm.method, 'POST', 'Contact form must use POST');
const fields = [...tags(contact, 'input'), ...tags(contact, 'select'), ...tags(contact, 'textarea')];
for (const name of ['name', 'email', 'topic', 'message']) assert.ok(fields.some((field) => field.name === name), `Contact form missing ${name}`);
for (const name of ['name', 'email', 'message']) assert.ok(fields.find((field) => field.name === name)?.required !== undefined, `Contact field ${name} must be required`);
assert.ok(!fields.some((field) => field.name === '_gotcha'), 'Do not submit the honeypot that falsely flagged real messages');
assert.ok(!contact.includes('data-email-draft') && !contact.includes('Open email draft'), 'Remove obsolete mailto form behavior');
assert.equal(indexed, urls.length, 'Sitemap must match indexable pages');
console.log(`Verified ${indexed} indexable pages, ${redirects} legacy redirects, ${checkedLinks} local links/assets, SEO metadata, and the Formspree contact markup.`);
