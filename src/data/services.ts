/**
 * Contenido SEO de las páginas de servicio (estáticas, optimizadas por keyword).
 * Cada entrada alimenta /servicios/[slug] y el JSON-LD de Service.
 * Volúmenes de la auditoría DataForSEO (Fase 1).
 */

export interface FAQ {
  q: string;
  a: string;
}

export interface ServiceContent {
  slug: string;
  /** Nombre corto (nav, tarjetas) */
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  volume: number;
  /** Resumen para tarjetas y listados */
  short: string;
  /** Foto REAL de un trabajo de este servicio (opcional hasta tener foto
   *  del material correcto — nunca poner la foto de otro material). */
  image?: string;
  imageAlt?: string;
  intro: string[];
  benefits: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
  surfaces?: string[];
  faqs: FAQ[];
}

export const servicesContent: ServiceContent[] = [
  {
    slug: "pavimentos-epoxi",
    name: "Pavimentos de resina epoxi",
    h1: "Pavimentos de resina epoxi",
    metaTitle: "Pavimentos de resina epoxi | Suelos industriales — Pulimentos Jiménez",
    metaDescription:
      "Aplicación de pavimentos de resina epoxi para naves, garajes e industria. Suelos resistentes, impermeables y fáciles de limpiar. Pida presupuesto.",
    keyword: "resina epoxi",
    volume: 6600,
    short:
      "Suelos de resina epoxi resistentes para naves, garajes e industria.",
    image: "/proyectos/resina-suelo.webp",
    imageAlt: "Pavimento continuo de resina aplicado en vivienda — trabajo real de Pulimentos Jiménez",
    intro: [
      "Los pavimentos de resina epoxi son la solución ideal para naves industriales, locales comerciales, garajes y zonas de alto tránsito. Crean una superficie continua, sin juntas, impermeable y de altísima resistencia mecánica y química.",
      "En Pulimentos Jiménez aplicamos sistemas epoxi adaptados a cada uso: desde acabados autonivelantes decorativos hasta multicapa antideslizante para zonas húmedas o de paso de maquinaria.",
    ],
    benefits: [
      {
        title: "Alta resistencia",
        desc: "Soporta tránsito intenso, impactos, abrasión y el paso de carretillas y maquinaria pesada.",
      },
      {
        title: "Impermeable e higiénico",
        desc: "Superficie continua sin juntas donde no penetra la suciedad: perfecto para industria alimentaria y sanitaria.",
      },
      {
        title: "Fácil limpieza",
        desc: "Se limpia con un simple fregado; resiste aceites, grasas y la mayoría de productos químicos.",
      },
      {
        title: "Personalizable",
        desc: "Color, nivel de brillo, antideslizamiento y señalización a medida de tu actividad.",
      },
    ],
    process: [
      { title: "Preparación del soporte", desc: "Desbastado/granallado del hormigón para abrir el poro y garantizar el anclaje." },
      { title: "Imprimación", desc: "Sellado del soporte con imprimación epoxi para consolidar la superficie." },
      { title: "Aplicación de capas", desc: "Resina epoxi en una o varias capas según el sistema elegido." },
      { title: "Acabado y curado", desc: "Acabado antideslizante opcional y curado hasta su puesta en servicio." },
    ],
    faqs: [
      {
        q: "¿Cuánto tarda en secar un pavimento de epoxi?",
        a: "Suele ser transitable a pie en 24 horas y soporta tránsito pesado a los 7 días, según temperatura y sistema aplicado.",
      },
      {
        q: "¿Se puede aplicar epoxi sobre hormigón antiguo?",
        a: "Sí, siempre que el soporte esté sano. Preparamos la superficie mediante desbastado o granallado para asegurar la adherencia.",
      },
      {
        q: "¿El epoxi es antideslizante?",
        a: "Podemos darle el grado de antideslizamiento que necesites añadiendo áridos en el acabado, ideal para rampas y zonas húmedas.",
      },
    ],
  },
  {
    slug: "pulido-de-hormigon",
    name: "Pulido de hormigón",
    h1: "Pulido de hormigón",
    metaTitle: "Pulido de hormigón con nano-litio | Suelos industriales — Pulimentos Jiménez",
    metaDescription:
      "Pulido de hormigón con nano-litio: más resistencia, brillo y cero polvo. Para naves, garajes y locales. Acabado satinado o alto brillo. Pida presupuesto.",
    keyword: "hormigón pulido",
    volume: 1900,
    short:
      "Hormigón pulido con nano-litio: más resistencia, brillo y cero polvo.",
    image: "/proyectos/hormigon-nave.webp",
    imageAlt: "Hormigón pulido con acabado espejo en nave industrial — trabajo real de Pulimentos Jiménez",
    intro: [
      "El hormigón pulido es la solución más demandada para naves industriales, locales, garajes y viviendas: económico, de alta resistencia, personalizable y de fácil limpieza.",
      "Con el pulido endurecemos y densificamos el poro del hormigón mediante nano-partículas de litio, aumentando su resistencia al desgaste, la abrasión y el impacto, y eliminando por completo la generación de polvo.",
    ],
    benefits: [
      {
        title: "Mayor resistencia",
        desc: "El sellador de litio densifica el poro: más dureza frente a desgaste, abrasión e impacto.",
      },
      {
        title: "Cero polvo y fácil mantenimiento",
        desc: "Sellamos el poro por completo, eliminando la generación de polvo y la suciedad incrustada.",
      },
      {
        title: "Brillo a tu gusto",
        desc: "Elige el nivel de brillo, desde el acabado satinado hasta el alto brillo.",
      },
      {
        title: "Más luminosidad",
        desc: "La superficie reflectante aumenta la luminosidad del espacio y reduce el consumo de iluminación.",
      },
    ],
    process: [
      { title: "Desbastado", desc: "Eliminamos imperfecciones y nivelamos con herramienta diamantada." },
      { title: "Pulido diamantado", desc: "Pulido progresivo hasta el grano que define el nivel de brillo." },
      { title: "Densificado con nano-litio", desc: "Endurecemos y sellamos el poro con litio." },
      { title: "Abrillantado final", desc: "Acabado satinado o alto brillo según tus necesidades." },
    ],
    faqs: [
      {
        q: "¿Se puede pulir un hormigón ya existente?",
        a: "Sí. Tanto pavimentos nuevos como antiguos se pueden pulir; valoramos el estado del soporte en una visita y reparamos coqueras y juntas si es necesario.",
      },
      {
        q: "¿Cuánto dura el hormigón pulido?",
        a: "Es un acabado de larga duración. Con el sellado de litio aumenta su resistencia y solo requiere un mantenimiento mínimo de limpieza.",
      },
      {
        q: "¿Ofrecéis prueba gratuita?",
        a: "Sí, para naves industriales realizamos una prueba gratuita in situ para que veas el resultado antes de decidir.",
      },
    ],
  },
  {
    slug: "pulir-marmol",
    name: "Pulido y cristalizado de mármol",
    h1: "Pulido y cristalizado de mármol",
    metaTitle: "Pulir mármol: pulido y cristalizado de suelos — Pulimentos Jiménez",
    metaDescription:
      "Pulido y cristalizado de mármol para recuperar el brillo y color original de tus suelos. Eliminamos rayas, manchas y desgaste. Pida presupuesto sin compromiso.",
    keyword: "pulir mármol",
    volume: 720,
    short: "Recuperamos el brillo y color original de tus suelos de mármol.",
    image: "/proyectos/marmol-salon.webp",
    imageAlt: "Mármol blanco pulido con brillo espejo reflejando los balcones — trabajo real de Pulimentos Jiménez",
    intro: [
      "Con el paso del tiempo el mármol pierde brillo y se llena de rayas y manchas. Con nuestro servicio de pulido y cristalizado devolvemos a tus suelos su brillo y color originales.",
      "El pulido elimina cualquier imperfección (rayaduras, desgaste, manchas) y el cristalizado crea una capa protectora que realza el brillo y facilita el mantenimiento.",
    ],
    benefits: [
      { title: "Brillo original", desc: "Recuperamos el brillo y el color natural del mármol." },
      { title: "Eliminamos imperfecciones", desc: "Quitamos rayas, manchas y zonas desgastadas." },
      { title: "Más fácil de limpiar", desc: "El cristalizado protege la piedra y simplifica el mantenimiento." },
      { title: "Acabado duradero", desc: "Tratamiento de larga duración con productos profesionales." },
    ],
    process: [
      { title: "Diagnóstico", desc: "Valoramos el estado del mármol y el tipo de acabado deseado." },
      { title: "Pulido diamantado", desc: "Eliminamos rayas y desgaste con grano progresivo." },
      { title: "Cristalizado", desc: "Aplicamos el cristalizador para realzar y proteger el brillo." },
      { title: "Acabado", desc: "Resultado brillante, uniforme y de fácil mantenimiento." },
    ],
    surfaces: ["Mármol", "Granito", "Terrazo"],
    faqs: [
      {
        q: "¿Qué diferencia hay entre pulir y cristalizar?",
        a: "El pulido elimina las imperfecciones de la superficie; el cristalizado aporta una capa protectora que realza el brillo y prolonga el resultado.",
      },
      {
        q: "¿Puedo seguir usando la estancia tras el tratamiento?",
        a: "Sí, el suelo es transitable poco después del cristalizado. Te indicamos los tiempos según el trabajo realizado.",
      },
    ],
  },
  {
    slug: "pulido-de-terrazo",
    name: "Pulido de terrazo",
    h1: "Pulido de terrazo",
    metaTitle: "Pulido de terrazo: recupera tus suelos — Pulimentos Jiménez",
    metaDescription:
      "Pulido de terrazo para devolver vida a suelos desgastados y rayados. Acabado brillante, uniforme y antideslizante. Pida presupuesto sin compromiso.",
    keyword: "pulir terrazo",
    volume: 590,
    short: "Devolvemos vida a suelos de terrazo desgastados y rayados.",
    image: "/proyectos/terrazo-rojo.webp",
    imageAlt: "Terrazo rojo de marmolina cristalizado con brillo espejo — trabajo real de Pulimentos Jiménez",
    intro: [
      "El terrazo es un pavimento muy resistente, pero con los años pierde brillo y muestra rayas y desgaste. Con el pulido recuperamos su aspecto original y uniformidad.",
      "Trabajamos con herramienta diamantada de última generación para conseguir un acabado brillante, antideslizante y de larga duración.",
    ],
    benefits: [
      { title: "Aspecto como nuevo", desc: "Eliminamos el desgaste y unificamos el color del terrazo." },
      { title: "Antideslizante", desc: "Acabados seguros y duraderos." },
      { title: "Fácil mantenimiento", desc: "Una superficie pulida se limpia mucho mejor." },
      { title: "Reparación de juntas", desc: "Reparamos juntas abiertas, coqueras y zonas dañadas." },
    ],
    process: [
      { title: "Desbastado", desc: "Nivelamos y eliminamos el desgaste superficial." },
      { title: "Pulido", desc: "Pulido progresivo hasta el brillo deseado." },
      { title: "Reparaciones", desc: "Tratamos juntas, coqueras y desperfectos." },
      { title: "Abrillantado", desc: "Acabado final brillante y antideslizante." },
    ],
    surfaces: ["Terrazo", "Mármol", "Granito"],
    faqs: [
      {
        q: "¿Se puede recuperar un terrazo muy antiguo?",
        a: "En la mayoría de casos sí. El terrazo admite varios pulidos a lo largo de su vida; lo valoramos en una visita.",
      },
    ],
  },
  {
    slug: "abrillantado-de-suelos",
    name: "Abrillantado de suelos",
    h1: "Abrillantado de suelos",
    metaTitle: "Abrillantado de suelos: brillo duradero — Pulimentos Jiménez",
    metaDescription:
      "Abrillantado de suelos para un acabado brillante, antideslizante y de larga duración. Mármol, terrazo y más. Pida presupuesto sin compromiso.",
    keyword: "abrillantado de suelos",
    volume: 480,
    short: "Acabado brillante y antideslizante de larga duración.",
    image: "/proyectos/equipo-hospital.webp",
    imageAlt: "Abrillantando el suelo de un hospital con máquina rotativa — equipo de Pulimentos Jiménez",
    intro: [
      "El abrillantado devuelve el brillo a tus suelos y facilita su mantenimiento, prolongando la vida del pavimento.",
      "Usamos los mejores productos para conseguir acabados de calidad, de larga duración y antideslizantes.",
    ],
    benefits: [
      { title: "Brillo intenso", desc: "Recupera el aspecto original de tu suelo." },
      { title: "Antideslizante", desc: "Seguridad sin renunciar al brillo." },
      { title: "Larga duración", desc: "Tratamientos profesionales que perduran." },
      { title: "Fácil mantenimiento", desc: "Un suelo abrillantado se limpia con menos esfuerzo." },
    ],
    process: [
      { title: "Limpieza profunda", desc: "Preparamos la superficie eliminando suciedad incrustada." },
      { title: "Abrillantado", desc: "Aplicamos el tratamiento adecuado a cada tipo de suelo." },
      { title: "Acabado", desc: "Brillo uniforme y duradero." },
    ],
    faqs: [
      {
        q: "¿Para qué suelos sirve el abrillantado?",
        a: "Principalmente para mármol, terrazo y piedras naturales. Valoramos cada caso para recomendar el mejor tratamiento.",
      },
    ],
  },
  {
    slug: "vitrificado",
    name: "Vitrificado de suelos",
    h1: "Vitrificado de suelos",
    metaTitle: "Vitrificado de suelos: máxima protección — Pulimentos Jiménez",
    metaDescription:
      "Vitrificado de suelos para un sellado de máxima protección y durabilidad. Ideal para suelos sometidos a desgaste. Pida presupuesto sin compromiso.",
    keyword: "vitrificado de suelos",
    volume: 0,
    short: "Sellado vitrificado para máxima protección y durabilidad.",
    image: "/proyectos/hero-chalet.webp",
    imageAlt: "Suelo sellado con acabado brillo espejo en el salón de un chalet — trabajo real de Pulimentos Jiménez",
    intro: [
      "El vitrificado crea una capa protectora de alta resistencia sobre el suelo, ideal para pavimentos sometidos a un uso intenso.",
      "Es un tratamiento que aporta durabilidad, protege frente al desgaste y mantiene el aspecto del pavimento durante más tiempo.",
    ],
    benefits: [
      { title: "Máxima protección", desc: "Capa resistente frente a rozaduras y desgaste." },
      { title: "Durabilidad", desc: "Prolonga la vida útil del pavimento." },
      { title: "Fácil limpieza", desc: "Superficie sellada que se mantiene mejor." },
    ],
    process: [
      { title: "Preparación", desc: "Limpieza y acondicionamiento del soporte." },
      { title: "Vitrificado", desc: "Aplicación del sellado vitrificado." },
      { title: "Acabado", desc: "Protección uniforme y resistente." },
    ],
    faqs: [],
  },
  {
    slug: "abujardado-hormigon",
    name: "Abujardado de hormigón",
    h1: "Abujardado de hormigón",
    metaTitle: "Abujardado de hormigón: suelos antideslizantes — Pulimentos Jiménez",
    metaDescription:
      "Abujardado de hormigón para superficies antideslizantes en exteriores, rampas y zonas húmedas. Tratamiento seguro y duradero. Pida presupuesto.",
    keyword: "abujardado hormigón",
    volume: 0,
    short: "Tratamiento antideslizante para exteriores y rampas.",
    intro: [
      "El abujardado aporta textura al hormigón para conseguir una superficie antideslizante, ideal para exteriores, rampas y zonas húmedas.",
      "Es un tratamiento mecánico que mejora la seguridad sin renunciar a la resistencia del pavimento.",
    ],
    benefits: [
      { title: "Antideslizante", desc: "Textura segura para zonas de paso y agua." },
      { title: "Resistente", desc: "Mantiene la dureza del hormigón." },
      { title: "Exteriores", desc: "Perfecto para rampas, accesos y patios." },
    ],
    process: [
      { title: "Valoración", desc: "Analizamos la superficie y el grado de textura necesario." },
      { title: "Abujardado", desc: "Tratamiento mecánico para crear la textura antideslizante." },
      { title: "Acabado", desc: "Superficie segura y duradera." },
    ],
    faqs: [],
  },
];

export function getService(slug: string): ServiceContent | undefined {
  return servicesContent.find((s) => s.slug === slug);
}
