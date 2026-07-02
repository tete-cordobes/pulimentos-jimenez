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
}

export const citiesContent: CityContent[] = [
  {
    slug: "cordoba",
    name: "Córdoba",
    hq: true,
    h1: "Pulido de suelos en Córdoba",
    metaTitle: "Pulido de suelos en Córdoba | Hormigón, mármol, terrazo — Pulimentos Jiménez",
    metaDescription:
      "Empresa de pulido y tratamiento de suelos en Córdoba: hormigón pulido, cristalizado de mármol, terrazo y epoxi. Maquinaria diamantada profesional. Presupuesto sin compromiso.",
    intro: [
      "Pulimentos y Aplicaciones Jiménez tiene su base en La Carlota (Córdoba), desde donde nos desplazamos a toda la provincia y a Andalucía para dar servicio de pulido y tratamiento de pavimentos a viviendas, locales, naves y comunidades.",
      "Pulimos y recuperamos hormigón, mármol, terrazo, granito y todo tipo de suelos con maquinaria diamantada de última generación, con acabados de alta resistencia y larga duración.",
    ],
    nearby: ["La Carlota", "Córdoba capital", "Posadas", "Palma del Río", "Fuente Palmera", "La Victoria", "Écija", "Almodóvar del Río"],
    faqs: [
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
    h1: "Pulido de suelos en Málaga",
    metaTitle: "Pulido de suelos en Málaga | Hormigón, mármol, terrazo — Pulimentos Jiménez",
    metaDescription:
      "Pulido y tratamiento de suelos en Málaga: hormigón pulido, epoxi, cristalizado de mármol y terrazo. Acabados duraderos. Pida presupuesto sin compromiso.",
    intro: [
      "Damos servicio de pulido y tratamiento de pavimentos en Málaga y su provincia, tanto para particulares como para empresas, naves industriales y locales comerciales.",
      "Recuperamos suelos antiguos y tratamos pavimentos nuevos con hormigón pulido, epoxi, cristalizado de mármol y pulido de terrazo.",
    ],
    nearby: ["Málaga capital", "Marbella", "Vélez-Málaga", "Fuengirola", "Antequera", "Estepona"],
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
    metaTitle: "Pulido de suelos en Sevilla | Hormigón, mármol, terrazo — Pulimentos Jiménez",
    metaDescription:
      "Pulido y tratamiento de suelos en Sevilla: hormigón pulido, epoxi, cristalizado de mármol y terrazo. Acabados de alta resistencia y larga duración. Pida presupuesto.",
    intro: [
      "Realizamos trabajos de pulido y tratamiento de pavimentos en Sevilla y provincia, con soluciones de alta calidad para suelos antiguos y nuevos.",
      "Desde el hormigón pulido para naves hasta el cristalizado de mármol en viviendas, conseguimos acabados resistentes, brillantes y antideslizantes.",
    ],
    nearby: ["Sevilla capital", "Dos Hermanas", "Alcalá de Guadaíra", "Utrera", "Écija", "Mairena del Aljarafe"],
    faqs: [
      {
        q: "¿Qué tipos de suelo puláis en Sevilla?",
        a: "Hormigón, mármol, terrazo, granito, barro cocido y más. Valoramos cada suelo para recomendar el mejor tratamiento.",
      },
    ],
  },
  {
    slug: "jaen",
    name: "Jaén",
    h1: "Pulido de suelos en Jaén",
    metaTitle: "Pulido de suelos en Jaén | Hormigón, mármol, terrazo — Pulimentos Jiménez",
    metaDescription:
      "Pulido y tratamiento de suelos en Jaén: hormigón pulido, epoxi, cristalizado de mármol y terrazo. Acabados de alta resistencia. Pida presupuesto sin compromiso.",
    intro: [
      "Ofrecemos servicios de pulido y tratamiento de pavimentos en Jaén y su provincia para particulares, empresas y naves industriales.",
      "Pulimos y recuperamos todo tipo de suelos con maquinaria diamantada, garantizando durabilidad, calidad y un acabado profesional.",
    ],
    nearby: ["Jaén capital", "Linares", "Úbeda", "Baeza", "Andújar", "Martos"],
    faqs: [
      {
        q: "¿Trabajáis para naves industriales en Jaén?",
        a: "Sí, somos especialistas en pavimentos industriales (hormigón pulido y epoxi). Para naves ofrecemos prueba gratuita in situ.",
      },
    ],
  },
];

export function getCity(slug: string): CityContent | undefined {
  return citiesContent.find((c) => c.slug === slug);
}
