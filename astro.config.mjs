import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './src/scripts/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://pabman11.github.io',
  base: '/pabs_blog',
  markdown: {
    drafts: true
  },
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
})
