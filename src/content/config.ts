import { defineCollection, reference, z } from "astro:content";
const blogCollection = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        title: z.string(),
        draft: z.boolean(),
        pubDate: z.string(),
        description: z.string(),
        cover: image(),
        coverAlt: z.string(),
        tags: z.array(z.string())
    }),
});

export const collections = {
  blog: blogCollection,
};
