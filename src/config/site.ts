/**
 * Configuración central del sitio Pulimentos y Aplicaciones Jiménez.
 * Datos reutilizados en Header, Footer, WhatsApp, schema JSON-LD y sitemap.
 * Los datos de contacto salen de variables de entorno (PUBLIC_*) con fallback.
 */

export const site = {
  name: "Pulimentos y Aplicaciones Jiménez",
  legalName: "Pulimentos y Aplicaciones Jiménez",
  // ⚠️ INDEXACIÓN: false = la web NO sale en Google (meta noindex en todas las
  // páginas). Mientras se prepara el contenido. Cambiar a TRUE para lanzar.
  indexable: false,
  // TODO: confirmar dominio real con el cliente
  url: "https://www.pulimentosjimenez.es",
  description:
    "Especialistas en pulido, cristalizado y tratamiento de suelos. Pida presupuesto sin compromiso.",
  // Contacto. Teléfono real confirmado (logo de la camiseta de la empresa).
  phone: import.meta.env.PUBLIC_PHONE || "+34 609 24 58 50",
  whatsapp: import.meta.env.PUBLIC_WHATSAPP || "34609245850",
  // TODO: confirmar email real con el cliente
  email: "info@pulimentosjimenez.es",
  // Sede real: La Carlota (Córdoba). Se desplaza por toda Andalucía.
  baseCity: "La Carlota",
  // Zonas de servicio (para el local pack + schema areaServed)
  cities: [
    { name: "Córdoba", slug: "cordoba" },
    { name: "Málaga", slug: "malaga" },
    { name: "Sevilla", slug: "sevilla" },
    { name: "Jaén", slug: "jaen" },
  ],
} as const;

/**
 * Servicios priorizados por la auditoría SEO (heads nacionales con volumen).
 * `volume` es el volumen mensual estimado de búsqueda (referencia interna).
 */
export const services = [
  {
    slug: "pavimentos-epoxi",
    name: "Pavimentos de resina epoxi",
    short: "Suelos de resina epoxi resistentes para naves, garajes e industria.",
    volume: 6600,
  },
  {
    slug: "pulido-de-hormigon",
    name: "Pulido de hormigón",
    short:
      "Hormigón pulido con nano-litio: más resistencia, brillo y cero polvo.",
    volume: 1900,
  },
  {
    slug: "pulir-marmol",
    name: "Pulido y cristalizado de mármol",
    short: "Recuperamos el brillo y color original de tus suelos de mármol.",
    volume: 720,
  },
  {
    slug: "pulido-de-terrazo",
    name: "Pulido de terrazo",
    short: "Devolvemos vida a suelos de terrazo desgastados y rayados.",
    volume: 590,
  },
  {
    slug: "abrillantado-de-suelos",
    name: "Abrillantado de suelos",
    short: "Acabado brillante y antideslizante de larga duración.",
    volume: 480,
  },
  {
    slug: "vitrificado",
    name: "Vitrificado de suelos",
    short: "Sellado vitrificado para máxima protección y durabilidad.",
    volume: 0,
  },
  {
    slug: "abujardado-hormigon",
    name: "Abujardado de hormigón",
    short: "Tratamiento antideslizante para exteriores y rampas.",
    volume: 0,
  },
] as const;

/** Superficies que tratamos (se listan dentro de las páginas, no son URLs). */
export const surfaces = [
  "Mármol",
  "Terrazo",
  "Hormigón",
  "Mosaico hidráulico",
  "Barro cocido",
  "Terracota",
  "Suelos porcelánicos",
  "Granito",
] as const;

/**
 * Clientes reales de Pulimentos y Aplicaciones Jiménez (carrusel de confianza).
 * Lista CONFIRMADA por el cliente (2026-07-13): son empresas con las que se
 * ha trabajado de verdad. Los logos viven en public/clientes/ (mismo tamaño,
 * normalizados). Si un cliente no tiene logo, el carrusel muestra su nombre.
 */
export interface ClientRef {
  name: string;
  logo?: string;
}

export const clients: ClientRef[] = [
  { name: "Ilunion", logo: "/clientes/ilunion.png" },
  { name: "Talasur", logo: "/clientes/talasur.png" },
  { name: "Eventos San Cristóbal", logo: "/clientes/eventos-san-cristobal.png" },
  // Tonelería del Sur opera como "Casknolia" (su marca comercial actual)
  { name: "Tonelería del Sur", logo: "/clientes/toneleria-del-sur.png" },
  { name: "Innoauto", logo: "/clientes/innoauto.png" },
  { name: "Revestimientos Ruiz", logo: "/clientes/revestimientos-ruiz.png" },
  { name: "Hospes Hotels", logo: "/clientes/hospes-hotels.png" },
  { name: "Probisa", logo: "/clientes/probisa.png" },
  // TODO: confirmar con Carlos que es Servimar Pintura y Limpieza (Córdoba)
  { name: "Servimar", logo: "/clientes/servimar.png" },
  { name: "Junta de Andalucía", logo: "/clientes/junta-de-andalucia.png" },
  { name: "Cruz Roja", logo: "/clientes/cruz-roja.png" },
  { name: "Sumyrec", logo: "/clientes/sumyrec.png" },
];

/** Mensaje prerellenado del botón de WhatsApp. */
export const whatsappMessage =
  "Hola, me gustaría pedir un presupuesto para el tratamiento de mi suelo.";

export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

/** Teléfono normalizado para el atributo href="tel:". */
export const telHref = `tel:${site.phone.replace(/\s+/g, "")}`;
