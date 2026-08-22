import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://tysonbarnes.co.uk',
  output: 'static',
  integrations: [svelte(), sitemap()],
  trailingSlash: 'always',
  build: { format: 'directory' }
});
