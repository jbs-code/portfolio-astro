import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const proyectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/proyects" }),
  // type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      name: z.string(),
      urlSite: z.string(),
      urlCode: z.string(),
      image: image(),
      tools: z.array(z.string()),
    }),
});

export const collections = {
  proyects: proyectsCollection,
};
