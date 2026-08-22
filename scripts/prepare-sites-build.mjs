import { cp, mkdir, writeFile } from 'node:fs/promises';

await mkdir('dist/.openai', { recursive: true });
await mkdir('dist/server', { recursive: true });
await cp('.openai/hosting.json', 'dist/.openai/hosting.json');
await writeFile('dist/server/index.js', `export default { async fetch(request, env) { return env?.ASSETS ? env.ASSETS.fetch(request) : new Response('TB–000 / Tyson Barnes', { headers: { 'content-type': 'text/plain; charset=utf-8' } }); } };\n`);
