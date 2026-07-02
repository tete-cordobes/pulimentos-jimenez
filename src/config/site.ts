/**
 * Configuración central del sitio Pulimentos y Aplicaciones Jiménez.
 * Datos reutilizados en Header, Footer, WhatsApp, schema JSON-LD y sitemap.
 * Los datos de contacto salen de variables de entorno (PUBLIC_*) con fallback.
 */

export const site = {
  name: "Pulimentos y Aplicaciones Jiménez",
  legalName: "Pulimentos y Aplicaciones Jiménez",
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
 * Clientes reales de Pulimentos y Aplicaciones Jiménez (sección de confianza).
 * VACÍO a propósito: los anteriores eran placeholders y NO se pueden publicar
 * sin confirmar (poner clientes falsos es un problema legal/de credibilidad).
 * TODO: pedir al cliente la lista REAL. Antiguos placeholders (verificar si
 * alguno es real): Ilunion, Talasur, Eventos San Cristóbal, Tonelería del Sur,
 * Innoauto, Revestimientos Ruiz, Hospes Hotels, Probisa, Servimar,
 * Junta de Andalucía, Cruz Roja.
 */
export const clients = [] as const;

/** Mensaje prerellenado del botón de WhatsApp. */
export const whatsappMessage =
  "Hola, me gustaría pedir un presupuesto para el tratamiento de mi suelo.";

export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

/** Teléfono normalizado para el atributo href="tel:". */
export const telHref = `tel:${site.phone.replace(/\s+/g, "")}`;
