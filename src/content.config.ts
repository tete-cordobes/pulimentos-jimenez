import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Blog. Los posts son ficheros Markdown en src/content/blog/.
 *
 * El plan inicial (ver comentario en pages/blog/index.astro) los ponía en
 * Storyblok. Se optó por Markdown en el repo: quedan versionados en git y
 * revisables en el diff, sin depender del CMS. El contenido de las páginas
 * (hero, home) sigue en Storyblok.
 */
const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    /** Meta description y entradilla del listado. */
    description: z.string(),
    pubDate: z.coerce.date(),
    /** Un borrador no se construye ni aparece en el listado. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
