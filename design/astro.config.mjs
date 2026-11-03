import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://design.tysonbarnes.co.uk',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
