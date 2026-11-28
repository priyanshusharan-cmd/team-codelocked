// @ts-check
import { defineConfig } from 'astro/config';

// One static build for Vercel, Render and GitHub Pages.
// For GitHub Pages under /team-codelocked, build with:
//   SITE_URL=https://<user>.github.io BASE_PATH=/team-codelocked npm run build
export default defineConfig({
  site: process.env.SITE_URL || 'https://teamcodelocked.example',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'ignore',
});
