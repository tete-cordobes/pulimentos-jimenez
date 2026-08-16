// @ts-check
import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  // Dominio canónico: NO-WWW (es donde resuelve el DNS; www está muerto).
  site: 'https://pulimentosjimenez.es',
  // Las URLs llevan barra final (coincide con el output de directorios y el
  // sitemap), para que canonical = sitemap = URL real sin redirecciones 301.
  trailingSlash: 'always',
  // Sitio 100% estático: se sirve desde hosting cPanel propio (LucusHost).
  // El contenido de Storyblok se congela en cada build; el formulario de
  // presupuesto se envía con un script PHP (public/enviar-presupuesto.php).
  output: 'static',
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_DELIVERY_API_TOKEN,
      // Sitio estático: sin livePreview (requiere SSR). El contenido se lee
      // en build; para refrescar tras publicar en Storyblok, se relanza el build.
      // Región EU (empresa española → dato en la UE).
      apiOptions: { region: 'eu' },
      // Mapa de bloques: nombre en Storyblok -> ruta del componente .astro.
      // Se irá completando en la Fase 4 conforme se creen los bloques.
      components: {
        page: 'storyblok/Page',
        hero: 'storyblok/Hero',
      },
    }),
    // Sitemap con prioridades orientadas al SEO: la home y las páginas de
    // captación (location pages + servicios + guía de precios) pesan más que
    // los proyectos o las páginas legales.
    sitemap({
      changefreq: 'monthly',
      // /borradores es una vista interna para revisar artículos sin publicar
      // (noindex): nunca entra en el sitemap.
      filter: (page) => !page.includes('/borradores'),
      serialize(item) {
        const path = new URL(item.url).pathname;
        let priority = 0.7;
        const capitales = ['cordoba', 'malaga', 'sevilla', 'jaen', 'granada'];
        if (path === '/') priority = 1.0;
        else if (path.startsWith('/pulido-de-suelos-en-')) {
          const slug = path.replace('/pulido-de-suelos-en-', '').replace(/\/$/, '');
          priority = capitales.includes(slug) ? 0.9 : 0.6; // capital vs municipio
        }
        else if (path === '/servicios/' || path.startsWith('/servicios/')) priority = 0.8;
        else if (path === '/precio-pulido-hormigon/') priority = 0.85;
        else if (path === '/calculadora-precio/') priority = 0.5;
        else if (path === '/contacto/' || path === '/sobre-nosotros/') priority = 0.7;
        else if (path.startsWith('/proyectos')) priority = 0.6;
        else if (path === '/blog/') priority = 0.6;
        else if (path.startsWith('/blog/')) priority = 0.5;
        else if (path === '/aviso-legal/' || path === '/privacidad/') priority = 0.3;
        item.priority = priority;
        item.changefreq = 'monthly';
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
