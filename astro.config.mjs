// @ts-check
import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  // TODO: confirmar dominio real con el cliente
  site: 'https://www.pulimentosjimenez.es',
  // SSR para que el Visual Editor de Storyblok (livePreview) funcione en vivo.
  // Las páginas públicas se marcan con `export const prerender = true` para servir estático.
  output: 'server',
  adapter: vercel(),
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_DELIVERY_API_TOKEN,
      // Preview en tiempo real dentro del Visual Editor.
      livePreview: true,
      // Región EU (empresa española → dato en la UE).
      apiOptions: { region: 'eu' },
      // Mapa de bloques: nombre en Storyblok -> ruta del componente .astro.
      // Se irá completando en la Fase 4 conforme se creen los bloques.
      components: {
        page: 'storyblok/Page',
        hero: 'storyblok/Hero',
      },
    }),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
