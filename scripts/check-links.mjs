import { readFile, readdir, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const root = resolve('dist');
const files = [];
async function walk(dir) {
  for (const name of await readdir(dir)) {
    const path = join(dir, name);
    (await stat(path)).isDirectory() ? await walk(path) : files.push(path);
  }
}
await walk(root);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const missing = [];
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const href = match[1].split(/[?#]/)[0];
    if (!href || href.startsWith('//')) continue;
    const target = href.endsWith('/') ? join(root, href, 'index.html') : join(root, href);
    const fallback = href.endsWith('/') ? target : join(root, href, 'index.html');
    try { await stat(target); } catch { try { await stat(fallback); } catch { missing.push(`${file}: ${href}`); } }
  }
}
if (missing.length) {
  console.error(`Broken internal links:\n${missing.join('\n')}`);
  process.exit(1);
}
console.log(`Internal link audit passed (${htmlFiles.length} HTML files).`);
