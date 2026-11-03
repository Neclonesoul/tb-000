import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://design.tysonbarnes.co.uk',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  vite: {
    tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url))
  }
});
