import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { remarkReadingTime } from './src/scripts/remark-reading-time.mjs';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: "https://blog.pabsy.dev",

  integrations: [
    mdx(), sitemap()
  ],

  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
})