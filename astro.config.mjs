// @ts-check
import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import netlify from '@astrojs/netlify';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()], },
  integrations: [mdx()],
  adapter: netlify(),
});