import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://euphonious-dusk-88c5e3.netlify.app/',
  markdown: {
    drafts: true,
  },
  integrations: [mdx(), sitemap(), tailwind(), image()]
});