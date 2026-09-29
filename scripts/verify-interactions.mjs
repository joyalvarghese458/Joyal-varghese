import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { stripTypeScriptTypes } from 'node:module';

// Run the blog page script against small DOM stand-ins. The contact form uses
// native HTML POST and its built markup is checked by verify-site.mjs.
function loadPageScript(file, document, globals = {}) {
  const script = fs.readFileSync(file, 'utf8').match(/<script>([\s\S]*?)<\/script>/)?.[1];
  assert.ok(script, `${file}: client script missing`);
  const listeners = {};
  document.addEventListener = (name, callback) => { listeners[name] = callback; };
  vm.runInNewContext(stripTypeScriptTypes(script), { document, ...globals });
  assert.ok(listeners['astro:page-load'], `${file}: must initialize after client navigation`);
  listeners['astro:page-load']();
  return listeners;
}
const makeButton = (tag) => ({
  dataset: { blogFilter: tag }, attributes: {}, listeners: {},
  classList: { toggle() {} },
  setAttribute(name, value) { this.attributes[name] = value; },
  addEventListener(name, callback) { this.listeners[name] = callback; },
});
const buttons = ['all', 'react', 'erp', 'empty'].map(makeButton);
const posts = ['react', 'erp', 'react'].map((tag) => ({ dataset: { blogPost: tag }, hidden: false, classList: { add() {} } }));
const filters = { dataset: {}, hidden: true, querySelectorAll: () => buttons };
const count = { hidden: true, textContent: '' };
const blogEvents = loadPageScript('src/pages/blogs.astro', {
  querySelector: (selector) => selector === '[data-blog-filters]' ? filters : count,
  querySelectorAll: () => posts,
});
assert.equal(filters.hidden, false);
buttons[1].listeners.click();
assert.deepEqual(posts.map((post) => post.hidden), [false, true, false]);
assert.equal(buttons[1].attributes['aria-pressed'], 'true');
assert.match(count.textContent, /^2 posts/);
buttons[2].listeners.click();
assert.deepEqual(posts.map((post) => post.hidden), [true, false, true]);
assert.match(count.textContent, /^1 post/);
buttons[3].listeners.click();
assert.ok(posts.every((post) => post.hidden));
buttons[0].listeners.click();
assert.ok(posts.every((post) => !post.hidden));
assert.equal(buttons[1].attributes['aria-pressed'], 'false');
const firstListener = buttons[0].listeners.click;
blogEvents['astro:page-load']();
assert.equal(buttons[0].listeners.click, firstListener, 'Repeated page events must not duplicate filter handlers');

console.log('Verified blog filtering, accessible state/counts, and repeat navigation initialization. Browser layout checks remain separate.');
