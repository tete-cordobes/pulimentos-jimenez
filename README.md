# Sumyrec — Web corporativa

Web de **Sumyrec** (pulido y tratamiento de pavimentos en Córdoba, Málaga, Sevilla y Jaén) construida con **Astro 6 + Storyblok (CMS visual) + Tailwind 4 + Resend**, desplegada en **Vercel**.

## Stack

| Pieza | Versión | Rol |
| :---- | :------ | :-- |
| [Astro](https://astro.build) | 6.x | Framework (output `server`, SSR para preview de Storyblok) |
| [@storyblok/astro](https://www.storyblok.com/docs/guides/astro) | 10.x | CMS visual por bloques con preview en vivo |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Estilos (vía `@tailwindcss/vite`) |
| [Resend](https://resend.com) | 6.x | Envío de emails de presupuesto |
| [@astrojs/vercel](https://docs.astro.build/en/guides/integrations-guide/vercel/) | 10.x | Adapter de despliegue |

> ⚠️ **Compatibilidad de versiones**: `@storyblok/astro@10` soporta Astro hasta la **v6** (no v7 todavía), y `@astrojs/vercel@10` es el adapter compatible con Astro 6. No subir Astro a 7 hasta que Storyblok lo soporte.

## Variables de entorno

Crea un fichero `.env` en la raíz con:

```bash
# Storyblok — Content Delivery API token (Settings > Access Tokens).
# Usa el token "preview" para ver borradores en el Visual Editor.
STORYBLOK_DELIVERY_API_TOKEN=

# Resend — envío de presupuestos (https://resend.com/api-keys)
RESEND_API_KEY=
LEADS_TO_EMAIL=info@sumyrec.com      # recibe los presupuestos
LEADS_FROM_EMAIL=web@sumyrec.com     # remitente verificado en Resend

# Contacto (header, footer, WhatsApp flotante, schema LocalBusiness)
PUBLIC_PHONE=+34000000000
PUBLIC_WHATSAPP=34000000000
```

## Comandos

| Comando | Acción |
| :------ | :----- |
| `npm install` | Instala dependencias |
| `npm run dev` | Dev server en `localhost:4321` |
| `npm run build` | Build de producción a `./dist/` |
| `npm run preview` | Preview del build |
| `npm run astro sync` | Genera tipos / valida config |

## Estructura

```text
src/
├── layouts/Layout.astro       # HTML base + <head> SEO + global.css
├── pages/                     # Rutas (index, [...slug], blog, location pages)
├── storyblok/                 # Un componente .astro por bloque de Storyblok
│   ├── Page.astro             # Content type "page" (renderiza body de bloks)
│   └── Hero.astro             # Bloque hero
├── lib/cn.ts                  # Helper de clases Tailwind (clsx + tailwind-merge)
└── styles/global.css          # @import tailwindcss + @theme (tokens de marca)
```

El mapa de bloques (nombre en Storyblok → componente) vive en `astro.config.mjs`.
