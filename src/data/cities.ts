/**
 * Contenido de las páginas de ciudad (local pack).
 * URL: /pulido-de-suelos-en-[slug]. Apoyan el posicionamiento local + ficha
 * de Google Business. Integran todos los servicios (no se trocea por servicio).
 */

import type { FAQ } from "./services";

export interface CityContent {
  slug: string;
  name: string;
  /** true si es la sede principal */
  hq?: boolean;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  /** Zonas/poblaciones cercanas donde también se trabaja */
  nearby: string[];
  faqs: FAQ[];
  /** Solo para páginas de MUNICIPIO (no capital): provincia y capital madre,
   *  para el enlazado interno capital <-> pueblo. */
  province?: string;
  parentSlug?: string;
  parentName?: string;
}

export const citiesContent: CityContent[] = [
  {
    slug: "cordoba",
    name: "Córdoba",
    hq: true,
    h1: "Pulidor de suelos en Córdoba",
    metaTitle: "Pulidor de suelos en Córdoba | Pulimentos Jiménez",
    metaDescription:
      "Pulidor de suelos en Córdoba y provincia. Pulido y abrillantado de terrazo, mármol y hormigón, restauración y resina epoxi. Solicita presupuesto.",
    intro: [
      "¿Buscas un pulidor de suelos en Córdoba? En Pulimentos y Aplicaciones Jiménez realizamos pulido, restauración y abrillantado de pavimentos de terrazo, mármol y hormigón para viviendas, comunidades, comercios, colegios y naves industriales. Tenemos nuestra base en La Carlota y trabajamos en Córdoba capital y toda la provincia. Valoramos el estado del suelo y proponemos el tratamiento más adecuado.",
      "En Córdoba capital hemos restaurado aproximadamente 500 m² de mármol crema marfil en el edificio de los Ministerios: reparación de coqueras con resina epoxi bicomponente, afinado, pulido y cristalizado. Para viviendas y comunidades realizamos abrillantado de suelos de mármol y terrazo, y para talleres y naves industriales recuperamos soleras de hormigón mediante pulido diamantado, densificación y sellado según su estado y uso.",
      "Entre nuestros trabajos en la provincia están la restauración y abrillantado de terrazo antiguo en el CEIP Beato Juan de Ávila de Montilla, con una superficie prevista de 2.400 m², y la recuperación de un pavimento de hormigón en una nave de Fuente Palmera: retirada diamantada de una antigua resina epoxi deteriorada, pulido, densificación y sellado. También realizamos pulido de escaleras, tratamiento de barro cocido y aplicaciones de resina epoxi. Pide presupuesto sin compromiso en el 622 13 52 93.",
    ],
    nearby: ["Córdoba capital", "La Carlota", "Lucena", "Montilla", "Puente Genil", "Baena", "Fuente Palmera", "Posadas", "Palma del Río", "Almodóvar del Río"],
    faqs: [
      {
        q: "¿Cuánto cuesta pulir un suelo en Córdoba?",
        a: "El precio depende del material, los metros cuadrados, el estado del pavimento y el tratamiento necesario. Valoramos cada trabajo antes de presupuestar.",
      },
      {
        q: "¿Qué diferencia hay entre pulir y abrillantar un suelo?",
        a: "El pulido elimina desgaste superficial y marcas mediante abrasivos; el abrillantado recupera el brillo con un tratamiento adecuado al material. En mármol y terrazo podemos combinar ambos procesos cuando el estado del suelo lo requiere.",
      },
      {
        q: "¿Trabajáis para comunidades y constructoras en Córdoba capital?",
        a: "Sí, realizamos trabajos en viviendas, portales, escaleras, edificios y pavimentos industriales, adaptando la maquinaria y el tratamiento a cada obra.",
      },
      {
        q: "¿Trabajáis en toda la provincia de Córdoba?",
        a: "Sí. Tenemos la base en La Carlota y nos desplazamos por toda la provincia de Córdoba (y el resto de Andalucía). Cuéntanos dónde está el suelo y te damos presupuesto sin compromiso.",
      },
      {
        q: "¿Hacéis presupuestos a domicilio en Córdoba?",
        a: "Sí, valoramos el suelo in situ para darte un presupuesto ajustado. Para naves industriales ofrecemos prueba gratuita.",
      },
    ],
  },
  {
    slug: "malaga",
    name: "Málaga",
    h1: "Pulidor de suelos en Málaga",
    metaTitle: "Pulidor de suelos en Málaga | Pulimentos Jiménez",
    metaDescription:
      "Pulido de suelos en Málaga para constructoras, naves industriales, viviendas y comunidades. Hormigón, mármol, terrazo y abrillantado. Pide presupuesto.",
    intro: [
      "En Pulimentos y Aplicaciones Jiménez ofrecemos pulido y tratamiento de suelos en Málaga para constructoras, naves industriales, locales comerciales, viviendas y comunidades de propietarios. Trabajamos con hormigón, mármol y terrazo y nos desplazamos a Málaga capital, Marbella y otras localidades de la Costa del Sol.",
      "Realizamos pulido diamantado y densificación de hormigón para soleras industriales, restauración y cristalizado de mármol, pulido de terrazo y aplicaciones de resina epoxi. Valoramos cada pavimento según su estado, superficie y uso para proponer un tratamiento adecuado. Solicita presupuesto sin compromiso.",
    ],
    nearby: ["Málaga capital", "Antequera", "Marbella", "Mijas", "Fuengirola", "Benalmádena", "Estepona", "Torremolinos", "Vélez-Málaga"],
    faqs: [
      {
        q: "¿Os desplazáis a Málaga desde Córdoba?",
        a: "Sí, trabajamos habitualmente en la provincia de Málaga. El desplazamiento se valora dentro del presupuesto.",
      },
    ],
  },
  {
    slug: "sevilla",
    name: "Sevilla",
    h1: "Pulido de suelos en Sevilla",
    metaTitle: "Hormigón pulido en Sevilla | Pulimentos Jiménez",
    metaDescription:
      "Hormigón pulido en Sevilla para naves y logística: soleras resistentes sin polvo. También epoxi, cristalizado de mármol y terrazo. Presupuesto sin compromiso.",
    intro: [
      "Realizamos hormigón pulido en Sevilla y su área metropolitana, con un fuerte enfoque industrial y logístico: soleras para naves de los grandes polígonos (Carretera Amarilla, Store, PISA-Mairena, Alcalá de Guadaíra) que aguantan carretillas y tránsito pesado sin soltar polvo.",
      "También pulimos garajes de comunidades del área metropolitana y recuperamos el mármol de viviendas del Aljarafe con pulido y cristalizado. Hormigón pulido, epoxi, mármol y terrazo, con acabados de alta resistencia y larga duración.",
    ],
    nearby: ["Sevilla capital", "Écija", "Dos Hermanas", "Alcalá de Guadaíra", "Utrera", "La Rinconada", "Mairena del Aljarafe"],
    faqs: [
      {
        q: "¿Qué tipos de suelo pulís en Sevilla?",
        a: "Hormigón, mármol, terrazo, granito, barro cocido y más. Valoramos cada suelo para recomendar el mejor tratamiento.",
      },
    ],
  },
  {
    slug: "jaen",
    name: "Jaén",
    h1: "Pulido de suelos en Jaén",
    metaTitle: "Hormigón pulido en Jaén | Pulimentos Jiménez",
    metaDescription:
      "Hormigón pulido en Jaén para almazaras, cooperativas y naves: soleras resistentes al tránsito de carga. También mármol, epoxi y terrazo. Presupuesto sin compromiso.",
    intro: [
      "Ofrecemos hormigón pulido en Jaén y su provincia, con especial experiencia en la agroindustria oleícola: soleras para almazaras y cooperativas de aceite que exigen resistencia al tránsito de carga y una limpieza intensiva sin que el suelo suelte polvo.",
      "Trabajamos también naves industriales del entorno de Linares y recuperamos suelos nobles de mármol en el turismo renacentista de Úbeda y Baeza. Hormigón pulido, epoxi, cristalizado de mármol y terrazo, con maquinaria propia y acabados duraderos.",
    ],
    nearby: ["Jaén capital", "Linares", "Andújar", "Úbeda", "Alcalá la Real", "Alcaudete", "Bailén", "La Carolina", "Baeza", "Martos"],
    faqs: [
      {
        q: "¿Trabajáis para naves industriales en Jaén?",
        a: "Sí, somos especialistas en pavimentos industriales (hormigón pulido y epoxi). Para naves ofrecemos prueba gratuita in situ.",
      },
    ],
  },
  {
    slug: "granada",
    name: "Granada",
    h1: "Pulido de suelos en Granada",
    metaTitle: "Hormigón pulido en Granada | Pulimentos Jiménez",
    metaDescription:
      "Hormigón pulido en Granada y provincia: naves de la Vega y polígonos, epoxi, y cristalizado de mármol para hoteles del entorno de la Alhambra. Presupuesto sin compromiso.",
    intro: [
      "Damos servicio de hormigón pulido en Granada y su provincia, un mercado mixto: suelo industrial para la agroindustria de la Vega y los polígonos de Juncaril y Asegra (Atarfe, Peligros), naves de la Costa Tropical en Motril y cristalizado de mármol para el sector hotelero del entorno de la Alhambra.",
      "Adaptamos el tratamiento al uso y al clima, con los contrastes de la sierra y la vega. Hormigón pulido, epoxi, cristalizado de mármol y pulido de terrazo, con acabados brillantes, resistentes y de larga duración.",
    ],
    nearby: ["Granada capital", "Motril", "Armilla", "Maracena", "Loja", "Baza", "Guadix"],
    faqs: [
      {
        q: "¿Trabajáis en la Costa Tropical y en el interior de Granada?",
        a: "Sí, damos servicio tanto en Granada capital y su área metropolitana (Armilla, Maracena) como en la Costa Tropical (Motril) y las comarcas del interior (Loja, Baza, Guadix). Cuéntanos dónde está el suelo y te presupuestamos sin compromiso.",
      },
      {
        q: "¿Qué suelos soléis tratar en Granada?",
        a: "En viviendas y comunidades sobre todo mármol y terrazo; en locales, naves y garajes, hormigón pulido y resina epoxi. Valoramos cada suelo para recomendar el mejor tratamiento.",
      },
    ],
  },
];

export function getCity(slug: string): CityContent | undefined {
  return citiesContent.find((c) => c.slug === slug);
}
