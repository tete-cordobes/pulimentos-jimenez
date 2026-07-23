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
    image: "/proyectos/epoxi-pasillo.webp",
    imageAlt: "Pavimento continuo de resina epoxi en el pasillo de un edificio, con acabado brillante y sin juntas — trabajo real de Pulimentos Jiménez",
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
    metaTitle: "Hormigón pulido: precio y acabado con nano-litio — Pulimentos Jiménez",
    metaDescription:
      "Hormigón pulido para naves, garajes, locales y exterior. Tratamiento con nano-litio: más resistencia, brillo y cero polvo. Pide presupuesto sin compromiso.",
    keyword: "hormigón pulido",
    volume: 1900,
    short:
      "Hormigón pulido con nano-litio: más resistencia, brillo y cero polvo.",
    image: "/proyectos/hormigon-nave.webp",
    imageAlt: "Hormigón pulido con acabado espejo en nave industrial — trabajo real de Pulimentos Jiménez",
    intro: [
      "El hormigón pulido se ha convertido en el pavimento más demandado para naves industriales, garajes, locales comerciales y viviendas, y hay una razón de peso: es de los acabados más resistentes y rentables del mercado. Partimos del propio hormigón de tu suelo, así que te ahorras material nuevo y obtienes un pavimento continuo, sin juntas donde se acumule la suciedad, que aguanta el paso constante de carretillas, coches y maquinaria durante años.",
      "El secreto está en el tratamiento con nano-partículas de litio. Con el pulido diamantado abrimos el poro del hormigón y lo densificamos con litio: la superficie se endurece por dentro, gana resistencia al desgaste, la abrasión y el impacto, y deja de soltar polvo por completo. El resultado es un suelo de hormigón pulido más limpio, más luminoso (la superficie refleja la luz y reduce el gasto en iluminación) y con un mantenimiento mínimo: agua y poco más.",
      "Trabajamos tanto hormigón pulido en interior como en exterior, y adaptamos el nivel de brillo a lo que necesites, desde un acabado satinado y discreto hasta el alto brillo tipo espejo. Antes de darte precio vamos a ver tu suelo: valoramos el estado del soporte, los metros y el uso que le vas a dar para pasarte un presupuesto real, sin sorpresas. Y si es una nave industrial, te hacemos una prueba gratuita in situ para que veas el acabado antes de decidir.",
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
        q: "¿Cuánto cuesta el hormigón pulido por metro cuadrado?",
        a: "El precio del hormigón pulido depende del estado del soporte, los metros totales, el nivel de brillo y el uso que le vayas a dar (no es lo mismo un garaje que una nave con tránsito de maquinaria). Por eso no damos una tarifa cerrada por teléfono: vamos a ver el suelo, lo medimos y te pasamos un presupuesto cerrado y sin compromiso. A más superficie, mejor precio por metro.",
      },
      {
        q: "¿Se puede hacer hormigón pulido en exterior?",
        a: "Sí. El hormigón pulido en exterior es una opción muy resistente para patios, entradas, porches y zonas de paso. En exterior ajustamos el acabado para que sea antideslizante y aguante la intemperie y los cambios de temperatura. Lo valoramos en la visita según la ubicación y el uso.",
      },
      {
        q: "¿Es bueno el hormigón pulido para naves industriales?",
        a: "Es la mejor opción para naves. El densificado con litio prepara el suelo para soportar carretillas elevadoras, transpaletas y carga pesada sin agrietarse ni levantar polvo, algo clave en almacenes y zonas de producción. Para naves hacemos una prueba gratuita in situ antes de que decidas.",
      },
      {
        q: "¿Sirve el hormigón pulido para el suelo de un garaje?",
        a: "Perfecto para garajes, tanto de vivienda como de comunidad. Aguanta el peso y el giro de los coches, no suelta polvo, no se mancha con facilidad y se limpia en un momento. Además gana luminosidad, que en un garaje siempre se agradece.",
      },
      {
        q: "¿Se puede pulir un hormigón ya existente?",
        a: "Sí. Tanto pavimentos nuevos como antiguos se pueden pulir; valoramos el estado del soporte en una visita y reparamos coqueras y juntas si es necesario.",
      },
      {
        q: "¿Cuánto dura el hormigón pulido?",
        a: "Es un acabado de larga duración. Con el sellado de litio aumenta su resistencia y solo requiere un mantenimiento mínimo de limpieza.",
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
    image: "/proyectos/hospital-brillo.webp",
    imageAlt: "Suelo de un hospital abrillantado, con acabado brillante y uniforme — trabajo real de Pulimentos Jiménez",
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
    image: "/proyectos/vitrificado-marmol-hotel.webp",
    imageAlt: "Cristalizado y vitrificado de un suelo de mármol blanco con cenefa negra en el hall de un hotel, con acabado brillo espejo — trabajo real de Pulimentos Jiménez",
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
    faqs: [
      {
        q: "¿En qué se diferencia el vitrificado del cristalizado?",
        a: "El cristalizado actúa sobre todo en mármol y terrazo, creando una capa de brillo mediante reacción química. El vitrificado sella la superficie con una capa protectora de alta resistencia, pensada para pavimentos sometidos a un uso intenso. Valoramos tu suelo para recomendar el tratamiento adecuado.",
      },
      {
        q: "¿Cuánto dura el vitrificado de un suelo?",
        a: "Es un tratamiento de larga duración. La capa protectora resiste el desgaste diario y mantiene el aspecto del pavimento durante años, con un mantenimiento sencillo de limpieza.",
      },
    ],
  },
  {
    slug: "abujardado-de-suelos",
    name: "Abujardado de suelos",
    h1: "Abujardado de suelos",
    metaTitle: "Abujardado de suelos: mármol y piedra antideslizante — Pulimentos Jiménez",
    metaDescription:
      "Abujardado de suelos de mármol y piedra para un acabado antideslizante y rústico. Ideal para exteriores, escaleras y zonas húmedas. Pida presupuesto.",
    keyword: "abujardado de suelos",
    volume: 0,
    short: "Acabado antideslizante y rústico para mármol y piedra.",
    intro: [
      "El abujardado es un tratamiento mecánico que aporta textura a la superficie del suelo para conseguir un acabado antideslizante y de aspecto rústico o envejecido. Trabajamos principalmente mármol y piedra natural.",
      "Es la solución ideal para escaleras, exteriores, porches y zonas húmedas donde la seguridad frente a resbalones es prioritaria, sin renunciar a la belleza de la piedra.",
    ],
    benefits: [
      { title: "Antideslizante", desc: "Textura segura para escaleras, exteriores y zonas de agua." },
      { title: "Acabado rústico", desc: "Aspecto envejecido y natural que realza la piedra." },
      { title: "Sobre mármol y piedra", desc: "Especialistas en abujardar mármol y piedra natural." },
      { title: "Duradero", desc: "Un acabado mecánico que se mantiene con el tiempo." },
    ],
    process: [
      { title: "Valoración", desc: "Analizamos la piedra y el grado de textura necesario." },
      { title: "Abujardado", desc: "Tratamiento mecánico para crear la textura antideslizante." },
      { title: "Acabado", desc: "Superficie segura, rústica y duradera." },
    ],
    surfaces: ["Mármol", "Granito", "Piedra natural"],
    faqs: [
      {
        q: "¿Sobre qué suelos hacéis el abujardado?",
        a: "Trabajamos sobre todo mármol y piedra natural, ideales para conseguir un acabado antideslizante en escaleras y exteriores. Valoramos cada caso en una visita.",
      },
    ],
  },
  {
    slug: "pintado-parkings-naves",
    name: "Pintado de parkings y naves",
    h1: "Pintado y señalización de parkings y naves industriales",
    metaTitle: "Pintado de parkings y naves industriales — Pulimentos Jiménez",
    metaDescription:
      "Pintado y señalización de aparcamientos y naves industriales: marcado de plazas, líneas, sentidos y suelos. Acabados resistentes al tránsito. Pida presupuesto.",
    keyword: "pintado de parkings",
    volume: 0,
    short: "Marcado y pintado de plazas, líneas y suelos de parkings y naves.",
    image: "/proyectos/parking-marcado.webp",
    imageAlt: "Parking pintado en gris con plazas y líneas blancas recién marcadas — trabajo real de Pulimentos Jiménez",
    intro: [
      "Pintamos y señalizamos aparcamientos y naves industriales: marcado de plazas, líneas de circulación, sentidos, pasos de peatones, numeración y señalización de seguridad, con pinturas específicas de alta resistencia al tránsito.",
      "Además del marcado, aplicamos y renovamos el pintado de suelos de naves y garajes para conseguir espacios más limpios, ordenados y seguros.",
    ],
    benefits: [
      { title: "Espacios ordenados", desc: "Plazas, sentidos y zonas bien delimitadas y visibles." },
      { title: "Alta resistencia", desc: "Pinturas que aguantan el paso de coches y maquinaria." },
      { title: "Más seguridad", desc: "Señalización de pasos, sentidos y zonas de riesgo." },
      { title: "Naves y garajes", desc: "Marcado y pintado de suelos industriales y comunitarios." },
    ],
    process: [
      { title: "Planificación", desc: "Definimos el marcado de plazas, sentidos y señalización." },
      { title: "Preparación", desc: "Limpieza y preparación del soporte para que la pintura agarre." },
      { title: "Pintado y marcado", desc: "Aplicación de pinturas de alta resistencia al tránsito." },
      { title: "Acabado", desc: "Espacio señalizado, ordenado y seguro." },
    ],
    faqs: [
      {
        q: "¿Podéis repintar un parking que ya está marcado?",
        a: "Sí. Renovamos el marcado de plazas y la señalización de parkings y naves que ya están en uso, adaptándonos a los horarios para no interrumpir la actividad.",
      },
    ],
  },
  {
    slug: "pavimentos-deportivos",
    name: "Pavimentos deportivos",
    h1: "Pavimentos y pistas deportivas",
    metaTitle: "Pavimentos deportivos y pistas — Pulimentos Jiménez",
    metaDescription:
      "Ejecución y tratamiento de pavimentos deportivos: pistas polideportivas, colegios y clubes. Superficies resistentes, seguras y de larga duración. Pida presupuesto.",
    keyword: "pavimentos deportivos",
    volume: 0,
    short: "Pistas y pavimentos deportivos resistentes para colegios y clubes.",
    image: "/proyectos/pista-deportiva.webp",
    imageAlt: "Pista deportiva azul con líneas blancas recién pintada al aire libre — trabajo real de Pulimentos Jiménez",
    intro: [
      "Ejecutamos y tratamos pavimentos deportivos para pistas polideportivas, colegios, clubes y comunidades. Superficies pensadas para el juego: resistentes al desgaste, seguras y de larga duración.",
      "Trabajamos pistas de gran superficie, adaptando el acabado al deporte y al uso, con materiales preparados para aguantar el tránsito intenso y la intemperie.",
    ],
    benefits: [
      { title: "Alta resistencia", desc: "Pavimentos que aguantan el uso deportivo intenso y la intemperie." },
      { title: "Seguros", desc: "Acabados pensados para el juego y para evitar resbalones." },
      { title: "Gran superficie", desc: "Ejecutamos pistas completas de cientos o miles de m²." },
      { title: "Larga duración", desc: "Materiales y acabados preparados para durar años." },
    ],
    process: [
      { title: "Valoración", desc: "Analizamos la pista, el deporte y el uso previsto." },
      { title: "Preparación", desc: "Acondicionamos el soporte para garantizar el resultado." },
      { title: "Ejecución", desc: "Aplicamos el pavimento deportivo adecuado a cada caso." },
      { title: "Acabado", desc: "Marcado y líneas de juego según el deporte." },
    ],
    faqs: [
      {
        q: "¿Qué tipo de pistas y superficies deportivas hacéis?",
        a: "Ejecutamos y tratamos pavimentos deportivos para pistas polideportivas, de pádel y de tenis, en colegios, clubes y comunidades. Adaptamos el acabado y el marcado al deporte y al uso previsto.",
      },
      {
        q: "¿Trabajáis pistas deportivas en exterior?",
        a: "Sí. Preparamos el pavimento para que aguante la intemperie y el uso intensivo al aire libre, con acabados resistentes, seguros y antideslizantes. Valoramos cada pista en una visita.",
      },
    ],
  },
  {
    slug: "pulido-de-escaleras",
    name: "Pulido de escaleras",
    h1: "Pulido de escaleras",
    metaTitle: "Pulido de escaleras: mármol, terrazo y granito — Pulimentos Jiménez",
    metaDescription:
      "Pulido y cristalizado de escaleras de mármol, terrazo y granito. Recuperamos el brillo de peldaños, mesetas y zócalos. Pida presupuesto sin compromiso.",
    keyword: "pulido de escaleras",
    volume: 0,
    short: "Recuperamos el brillo de escaleras de mármol, terrazo y granito.",
    image: "/proyectos/escalera-pulida.webp",
    imageAlt: "Escalera de terrazo claro pulida con brillo espejo, reflejando la luz en los peldaños — trabajo real de Pulimentos Jiménez",
    intro: [
      "Las escaleras son una de las zonas de más tránsito de cualquier edificio, y por eso son las primeras en perder brillo y mostrar desgaste en peldaños y mesetas. Con nuestro servicio de pulido de escaleras recuperamos su aspecto original.",
      "Trabajamos peldaños, tabicas, mesetas y zócalos de mármol, terrazo y granito con herramienta diamantada específica para escaleras, consiguiendo un acabado uniforme, brillante y antideslizante.",
    ],
    benefits: [
      { title: "Brillo recuperado", desc: "Devolvemos a la escalera el color y el brillo originales." },
      { title: "Acabado seguro", desc: "Pulido antideslizante para evitar resbalones en los peldaños." },
      { title: "Trabajo cuidado", desc: "Tratamos peldaños, mesetas y zócalos con herramienta específica." },
      { title: "Fácil mantenimiento", desc: "Una escalera pulida se limpia mucho mejor y aguanta más." },
    ],
    process: [
      { title: "Diagnóstico", desc: "Valoramos el material y el estado de peldaños y mesetas." },
      { title: "Pulido diamantado", desc: "Eliminamos desgaste y rayas con grano progresivo." },
      { title: "Cristalizado", desc: "Realzamos y protegemos el brillo del peldaño." },
      { title: "Acabado antideslizante", desc: "Resultado brillante y seguro para el tránsito." },
    ],
    surfaces: ["Mármol", "Terrazo", "Granito"],
    faqs: [
      {
        q: "¿Podéis pulir escaleras sin cerrar la comunidad?",
        a: "Sí. Trabajamos por tramos y señalizamos las zonas para que los vecinos puedan seguir usando la escalera durante el trabajo.",
      },
    ],
  },
  {
    slug: "suelos-vinilicos-termoplasticos",
    name: "Suelos vinílicos y termoplásticos",
    h1: "Limpieza y tratamiento de suelos vinílicos y termoplásticos",
    metaTitle: "Limpieza y tratamiento de suelos vinílicos y termoplásticos — Pulimentos Jiménez",
    metaDescription:
      "Limpieza a fondo y tratamiento de suelos vinílicos y termoplásticos (PVC, linóleo). Decapado, sellado y abrillantado. Ideal para locales y colegios. Pida presupuesto.",
    keyword: "tratamiento suelos vinílicos",
    volume: 0,
    short: "Decapado, sellado y abrillantado de suelos vinílicos y termoplásticos.",
    image: "/proyectos/vinilico-hospital.webp",
    imageAlt: "Suelo vinílico de un hospital abrillantado, con acabado brillante y uniforme en el pasillo — trabajo real de Pulimentos Jiménez",
    intro: [
      "Los suelos vinílicos y termoplásticos (PVC, linóleo) son muy habituales en colegios, clínicas, locales comerciales y oficinas. Con el uso pierden brillo, se manchan y acumulan capas de cera vieja que los apagan.",
      "Realizamos una limpieza a fondo con decapado de restos antiguos y aplicamos un tratamiento de sellado y abrillantado que protege el suelo, le devuelve el brillo y facilita enormemente su mantenimiento diario.",
    ],
    benefits: [
      { title: "Limpieza profunda", desc: "Decapamos la cera vieja y la suciedad incrustada." },
      { title: "Brillo protegido", desc: "Sellamos y abrillantamos para un acabado uniforme y duradero." },
      { title: "Más higiénico", desc: "Una superficie sellada se limpia mejor: ideal para colegios y clínicas." },
      { title: "Antideslizante", desc: "Acabado seguro adaptado a zonas de paso." },
    ],
    process: [
      { title: "Decapado", desc: "Retiramos tratamientos antiguos y suciedad incrustada." },
      { title: "Limpieza a fondo", desc: "Dejamos el suelo limpio y preparado." },
      { title: "Sellado", desc: "Aplicamos el tratamiento protector adaptado al material." },
      { title: "Abrillantado", desc: "Acabado brillante, uniforme y fácil de mantener." },
    ],
    surfaces: ["Vinílico / PVC", "Linóleo", "Termoplástico", "Goma"],
    faqs: [
      {
        q: "¿Qué diferencia hay entre un suelo vinílico y uno termoplástico?",
        a: "Son familias de pavimentos sintéticos (PVC, linóleo y similares) muy usados en zonas de mucho tránsito. Ambos se tratan con decapado, sellado y abrillantado para recuperarlos y protegerlos.",
      },
    ],
  },
  {
    slug: "barro-cocido-terracota",
    name: "Barro cocido y terracota",
    h1: "Limpieza y tratamiento de barro cocido y terracota",
    metaTitle: "Tratamiento de barro cocido y terracota — Pulimentos Jiménez",
    metaDescription:
      "Decapado, limpieza y tratamiento de suelos de barro cocido y terracota. Recuperamos el color y aplicamos un acabado protector satinado. Pida presupuesto.",
    keyword: "tratamiento barro cocido",
    volume: 0,
    short: "Recuperamos el color del barro cocido y la terracota con acabado protector.",
    image: "/proyectos/barro-hotel-tratado.webp",
    imageAlt: "Suelo de barro cocido tratado con el color recuperado y acabado protector satinado — trabajo real de Pulimentos Jiménez",
    intro: [
      "El barro cocido y la terracota son suelos con mucho encanto, pero también muy porosos: absorben la suciedad, pierden el color y se quedan mate y apagados con el paso del tiempo.",
      "Realizamos un decapado a fondo para retirar la suciedad y los tratamientos antiguos, y aplicamos a mano un tratamiento que hidrata el barro, recupera su color y crea una capa protectora satinada, uniforme y fácil de mantener.",
    ],
    benefits: [
      { title: "Color recuperado", desc: "Devolvemos al barro su tono cálido original." },
      { title: "Protección duradera", desc: "Sellamos el poro para que no vuelva a absorber suciedad." },
      { title: "Aplicación a mano", desc: "Metro a metro, para que el producto penetre de forma uniforme." },
      { title: "Fácil mantenimiento", desc: "Un barro tratado se limpia mejor y aguanta años." },
    ],
    process: [
      { title: "Decapado", desc: "Retiramos suciedad incrustada y tratamientos viejos." },
      { title: "Limpieza a fondo", desc: "Dejamos el barro limpio y con el poro abierto." },
      { title: "Tratamiento a mano", desc: "Aplicamos el producto protector metro a metro." },
      { title: "Acabado satinado", desc: "Color recuperado y superficie protegida y uniforme." },
    ],
    surfaces: ["Barro cocido", "Terracota"],
    faqs: [
      {
        q: "¿Se puede recuperar un barro muy viejo y manchado?",
        a: "En la mayoría de casos sí. El decapado retira años de suciedad y tratamientos antiguos, y el tratamiento posterior devuelve el color y protege el suelo. Lo valoramos in situ.",
      },
    ],
  },
];

export function getService(slug: string): ServiceContent | undefined {
  return servicesContent.find((s) => s.slug === slug);
}
