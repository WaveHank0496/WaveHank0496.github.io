// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wavehank0496.github.io',
  base: '/',
  trailingSlash: 'ignore',
  vite: {
    build: { sourcemap: false },
  },
});
