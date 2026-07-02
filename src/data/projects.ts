/**
 * Modelo de un Proyecto / trabajo realizado.
 *
 * IMPORTANTE: esta es la MISMA forma que tendrá el content-type "proyecto" en
 * Storyblok. Cuando conectemos Storyblok, el listado vendrá del CMS (editable
 * por el cliente) y `ProjectCard` se reutiliza tal cual.
 *
 * Los proyectos de abajo son TRABAJOS REALES de Pulimentos Jiménez (fotos del
 * propio Carlos, clasificadas en _media-inbox/whatsapp-jimenez/MANIFEST.md).
 * Las descripciones cuentan SOLO lo que se ve en la foto — nada inventado.
 * La localidad se omite hasta que Carlos confirme dónde fue cada trabajo.
 */
export interface Project {
  slug: string;
  title: string;
  /** Localidad del trabajo (opcional: solo cuando esté confirmada) */
  city?: string;
  /** Tipo de suelo tratado (sirve para filtrar la galería) */
  surface: "Hormigón" | "Mármol" | "Terrazo" | "Epoxi" | "Otros";
  /** URL foto ANTES (vacío => placeholder hasta tener foto real) */
  before?: string;
  /** URL foto DESPUÉS */
  after?: string;
  /** Enlace de YouTube/Vimeo (opcional) */
  videoUrl?: string;
  description: string;
}

/** Tipos de suelo disponibles para los chips de filtro. */
export const surfaceFilters = [
  "Todos",
  "Hormigón",
  "Mármol",
  "Terrazo",
  "Epoxi",
] as const;

/**
 * Trabajos reales (fotos propias de Pulimentos Jiménez). Cuando el cliente
 * publique sus proyectos en Storyblok, estos pasan a ser el fallback.
 */
export const projects: Project[] = [
  {
    slug: "pulido-hormigon-nave-industrial",
    title: "Pulido de hormigón en nave industrial",
    surface: "Hormigón",
    after: "/proyectos/hormigon-nave.webp",
    description:
      "Pulido y densificado de la solera de hormigón de una nave. Acabado brillo espejo, sin polvo y de alta resistencia al tránsito.",
  },
  {
    slug: "hormigon-pulido-garaje-privado",
    title: "Hormigón pulido en garaje privado",
    surface: "Hormigón",
    after: "/proyectos/garaje-hexagonal.webp",
    description:
      "Garaje particular con acabado espejo: el suelo refleja hasta la iluminación LED del techo.",
  },
  {
    slug: "cristalizado-marmol-vivienda",
    title: "Pulido y cristalizado de mármol en vivienda",
    surface: "Mármol",
    after: "/proyectos/marmol-salon.webp",
    description:
      "Mármol blanco pulido y cristalizado. El brillo espejo devuelve al suelo su color y refleja los balcones de la estancia.",
  },
  {
    slug: "pulido-terrazo-marmolina",
    title: "Cristalizado de terrazo rojo de marmolina",
    surface: "Terrazo",
    after: "/proyectos/terrazo-rojo.webp",
    description:
      "Terrazo rojo de marmolina recuperado con pulido y cristalizado: brillo espejo y aspecto como recién puesto.",
  },
  {
    slug: "tratamiento-barro-cocido-hotel",
    title: "Tratamiento de barro cocido en hotel",
    surface: "Otros",
    after: "/proyectos/barro-hotel-mitad.webp",
    description:
      "Decapado y tratamiento de suelo de barro cocido en el hall de un hotel. En la foto, la zona ya tratada junto a la zona sin tratar: el antes y el después en una sola imagen.",
  },
  {
    slug: "pavimento-resina-vivienda",
    title: "Pavimento continuo de resina",
    surface: "Epoxi",
    after: "/proyectos/resina-suelo.webp",
    description:
      "Aplicación de pavimento continuo de resina en vivienda: superficie uniforme, impermeable y fácil de limpiar.",
  },
];
