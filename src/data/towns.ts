/**
 * Páginas de MUNICIPIO (localidades donde trabaja Pulimentos Jiménez, además
 * de las 5 capitales de cities.ts). Contenido ÚNICO por pueblo (sector local
 * real), no plantilla, para no ser "thin/doorway". URL /pulido-de-suelos-en-[slug].
 * Cada uno enlaza con su capital (parentSlug) para el enlazado interno.
 */
import type { CityContent } from "./cities";

export const townsContent: CityContent[] = [
  // ---- CÓRDOBA ----
  {
    slug: "lucena",
    name: "Lucena",
    province: "Córdoba",
    parentSlug: "cordoba",
    parentName: "Córdoba",
    h1: "Pulido de suelos en Lucena",
    metaTitle: "Pulido de suelos en Lucena | Pulimentos Jiménez",
    metaDescription:
      "Hormigón pulido en Lucena para naves del mueble y el frío industrial: soleras sin polvo que aguantan el tránsito. Epoxi, mármol y terrazo. Presupuesto gratis.",
    intro: [
      "Lucena es la capital industrial de la Subbética cordobesa, con una potente tradición en la fabricación de mueble y en el sector del frío industrial. Sus polígonos concentran naves de carpintería, almacenes y talleres donde el suelo trabaja duro: carretillas, cargas y limpiezas constantes. Para ese uso, el hormigón pulido es la solución que mejor rinde, porque se compacta, deja de soltar polvo y resiste el tránsito diario sin agrietarse.",
      "Desde nuestra base en La Carlota llegamos a Lucena y toda la comarca sin que el desplazamiento encarezca el trabajo. Pulimos y sellamos soleras de nave, aplicamos resina epoxi en zonas de producción y almacén, y en viviendas y comercios del centro recuperamos el mármol y el terrazo con pulido y cristalizado. Maquinaria propia y acabados pensados para durar.",
    ],
    nearby: ["Cabra", "Rute", "Aguilar de la Frontera", "Encinas Reales", "Benamejí", "Montilla"],
    faqs: [
      {
        q: "¿Podéis pulir el suelo de una nave del mueble sin parar la producción?",
        a: "Sí. Organizamos el trabajo por zonas o por fases para que la actividad no se detenga del todo, y ajustamos horarios cuando hace falta. Para naves industriales en Lucena hacemos una prueba gratuita in situ antes de presupuestar.",
      },
      {
        q: "¿El hormigón pulido aguanta el paso de carretillas y cargas pesadas?",
        a: "Para eso está pensado. Al pulir y densificar la solera, la superficie gana dureza y resistencia a la abrasión, deja de soltar polvo y soporta el tránsito de carretillas y transpaletas propio de un almacén o taller.",
      },
    ],
  },
  {
    slug: "montilla",
    name: "Montilla",
    province: "Córdoba",
    parentSlug: "cordoba",
    parentName: "Córdoba",
    h1: "Pulido de suelos en Montilla",
    metaTitle: "Pulido de suelos en Montilla | Pulimentos Jiménez",
    metaDescription:
      "Hormigón pulido en Montilla para bodegas y naves de Montilla-Moriles: soleras que aguantan lavados y humedad. Mármol, epoxi y terrazo. Presupuesto sin compromiso.",
    intro: [
      "Montilla es el corazón de la Denominación de Origen Montilla-Moriles, tierra de bodegas, lagares y cooperativas donde nacen el fino y el Pedro Ximénez. En ese entorno el suelo vive entre humedad, lavados frecuentes y trasiego de barricas y carga, así que necesita una superficie que no se degrade con el agua ni suelte polvo sobre el producto. El hormigón pulido y la resina epoxi encajan de lleno con las exigencias de higiene de una bodega o una nave de embotellado.",
      "Trabajamos en Montilla y toda la campiña vitivinícola con la ventaja de la cercanía desde La Carlota: valoramos el suelo in situ y respondemos rápido. Pulimos y sellamos soleras de bodega y almacén, aplicamos epoxi en salas de elaboración y embotellado, y en cortijos, casas señoriales y patios recuperamos el mármol y el barro cocido con pulido, cristalizado y abrillantado.",
    ],
    nearby: ["Aguilar de la Frontera", "Montalbán de Córdoba", "La Rambla", "Fernán Núñez", "Montemayor", "Puente Genil"],
    faqs: [
      {
        q: "¿Qué tratamiento va mejor para el suelo de una bodega?",
        a: "Depende del uso de cada zona. En naves y salas con lavados constantes solemos recomendar hormigón pulido y sellado, o resina epoxi cuando se busca una superficie continua e higiénica fácil de limpiar. Valoramos la bodega y proponemos la mejor opción para cada sala.",
      },
    ],
  },
  {
    slug: "puente-genil",
    name: "Puente Genil",
    province: "Córdoba",
    parentSlug: "cordoba",
    parentName: "Córdoba",
    h1: "Pulido de suelos en Puente Genil",
    metaTitle: "Pulido de suelos en Puente Genil | Pulimentos Jiménez",
    metaDescription:
      "Hormigón pulido y epoxi en Puente Genil para la agroindustria del dulce y las cooperativas: suelos higiénicos y sin polvo. También mármol y terrazo. Presupuesto gratis.",
    intro: [
      "Puente Genil vive de su agroindustria alimentaria: es tierra del dulce de membrillo, con fábricas y obradores de renombre, además de cooperativas del aceite y de la campiña del Genil. En la industria de la alimentación el suelo es una pieza más de la higiene: tiene que ser continuo, fácil de limpiar y no soltar partículas sobre el producto. Por eso la resina epoxi y el hormigón pulido y sellado son los acabados que mejor responden en obradores, almacenes y salas de producción.",
      "Damos servicio en Puente Genil y su entorno desde La Carlota, cerca y sin desplazamientos que disparen el presupuesto. Aplicamos epoxi en zonas de elaboración y envasado, pulimos soleras de nave y cooperativa para que aguanten carga y limpiezas intensivas, y en viviendas, locales y comunidades recuperamos el mármol y el terrazo con pulido y cristalizado.",
    ],
    nearby: ["Aguilar de la Frontera", "Santaella", "La Rambla", "Herrera", "Estepa", "Montilla"],
    faqs: [
      {
        q: "¿La resina epoxi es apta para industria alimentaria?",
        a: "Sí. El epoxi forma una superficie continua, sin juntas ni poros, que se limpia y desinfecta con facilidad y no suelta polvo, por lo que es una de las soluciones habituales en obradores, envasado y salas de producción de alimentación.",
      },
    ],
  },
  {
    slug: "baena",
    name: "Baena",
    province: "Córdoba",
    parentSlug: "cordoba",
    parentName: "Córdoba",
    h1: "Pulido de suelos en Baena",
    metaTitle: "Pulido de suelos en Baena | Pulimentos Jiménez",
    metaDescription:
      "Hormigón pulido en Baena para almazaras y cooperativas del olivar: soleras resistentes a la limpieza y al aceite. Epoxi, mármol y terrazo. Presupuesto sin compromiso.",
    intro: [
      "Baena es tierra de olivar y de aceite con Denominación de Origen propia, con un tejido de almazaras y cooperativas que marcan el pulso de la comarca. En una almazara el suelo se enfrenta a un uso muy exigente: paso de carga en campaña, agua a presión, humedad y contacto con aceite. Necesita una superficie compacta, antideslizante y fácil de limpiar, y ahí el hormigón pulido y sellado y la resina epoxi son los tratamientos que mejor aguantan temporada tras temporada.",
      "Trabajamos en Baena y toda la comarca de la Subbética desde nuestra base en La Carlota, con la cercanía como ventaja para responder en campaña sin encarecer el trabajo. Pulimos y sellamos soleras de almazara y nave, aplicamos epoxi en zonas de proceso y envasado, y en viviendas, cortijos y locales recuperamos el mármol y el terrazo con pulido, cristalizado y abrillantado.",
    ],
    nearby: ["Cabra", "Doña Mencía", "Zuheros", "Luque", "Castro del Río", "Nueva Carteya"],
    faqs: [
      {
        q: "¿Qué suelo aguanta mejor la humedad y el aceite de una almazara?",
        a: "Para zonas con agua y aceite recomendamos hormigón pulido bien sellado o resina epoxi, que crean una superficie compacta y poco porosa, más fácil de limpiar y menos deslizante. Valoramos cada nave en campaña o fuera de ella para elegir el acabado idóneo.",
      },
    ],
  },
  {
    slug: "fuente-palmera",
    name: "Fuente Palmera",
    province: "Córdoba",
    parentSlug: "cordoba",
    parentName: "Córdoba",
    h1: "Pulido de suelos en Fuente Palmera",
    metaTitle: "Pulido de suelos en Fuente Palmera | Pulimentos Jiménez",
    metaDescription:
      "Hormigón pulido en Fuente Palmera para naves agrícolas y almacenes de la campiña: soleras sin polvo y resistentes. Epoxi, mármol y terrazo. Presupuesto sin compromiso.",
    intro: [
      "Fuente Palmera, La Colonia, nació como colonia agrícola en plena campiña cordobesa y conserva ese carácter: explotaciones de campo, cooperativas, almacenes de aperos y naves de manipulado repartidos por sus aldeas. Para ese tipo de suelo —el de un almacén agrícola o una nave de guardado de maquinaria— lo que hace falta es una solera que no se levante con el uso, que no genere polvo y que se barra y se lave sin problema. El hormigón pulido y sellado responde justo a eso.",
      "Estamos prácticamente al lado, en La Carlota, así que Fuente Palmera y todas sus aldeas nos quedan a un paso: valoramos el suelo enseguida y sin que el desplazamiento pese en el presupuesto. Pulimos y sellamos soleras de nave y almacén, aplicamos resina epoxi donde se busca una superficie continua y limpia, y en viviendas y locales de la colonia recuperamos el terrazo y el mármol con pulido y cristalizado.",
    ],
    nearby: ["La Carlota", "Écija", "Palma del Río", "Guadalcázar", "La Victoria", "Almodóvar del Río"],
    faqs: [
      {
        q: "¿Merece la pena pulir el suelo de un almacén o nave agrícola?",
        a: "Sí. Pulir y sellar la solera de hormigón evita que suelte polvo, la endurece frente al paso de maquinaria y facilita mucho la limpieza, con un mantenimiento mínimo. Es una inversión que se nota desde el primer día en un almacén de campo.",
      },
    ],
  },
  // ---- MÁLAGA ----
  {
    slug: "antequera",
    name: "Antequera",
    province: "Málaga",
    parentSlug: "malaga",
    parentName: "Málaga",
    h1: "Pulido de suelos en Antequera",
    metaTitle: "Pulido de suelos en Antequera | Pulimentos Jiménez",
    metaDescription:
      "Hormigón pulido y tratamiento de suelos en Antequera. Naves, polígonos y locales del centro de Andalucía. Nos desplazamos a toda la comarca. Presupuesto.",
    intro: [
      "Antequera es el gran nudo logístico de Andalucía, y eso se nota en el suelo: naves industriales, centros de distribución y talleres que necesitan un pavimento capaz de aguantar carretillas, tráfico rodado y cargas constantes sin levantarse. Ahí el hormigón pulido es el rey, porque da una superficie dura, sin juntas problemáticas y fácil de limpiar. También trabajamos el abujardado antideslizante en rampas y zonas de acceso, y el tratamiento de solería en el comercio y la hostelería del casco histórico, donde conviven el barro cocido y el terrazo de toda la vida.",
      "Ofrecemos hormigón pulido para naves y polígonos, cristalizado de mármol, pulido de terrazo, resina epoxi para suelos técnicos, tratamiento de barro cocido y abrillantado. Estamos en La Carlota, a un paso de Antequera por la A-45, así que desplazarnos a la comarca no es ningún problema: vamos, vemos el suelo en persona y te damos un presupuesto ajustado sin compromiso.",
    ],
    nearby: ["Mollina", "Fuente de Piedra", "Humilladero", "Casabermeja", "Archidona", "Campillos"],
    faqs: [
      {
        q: "¿Podéis pulir el suelo de una nave sin parar la actividad?",
        a: "Sí. En naves y polígonos organizamos el trabajo por zonas o en horario de menor actividad para que sigáis operando. El hormigón pulido genera poco polvo con nuestro sistema y se puede pisar en poco tiempo según el acabado.",
      },
      {
        q: "¿Trabajáis suelos de barro cocido en cortijos y casas del casco antiguo?",
        a: "Por supuesto. En Antequera hay mucho barro y terrazo antiguo. Lo limpiamos a fondo, tratamos y sellamos para que recupere el color y quede protegido, respetando el carácter original del suelo.",
      },
    ],
  },
  {
    slug: "marbella",
    name: "Marbella",
    province: "Málaga",
    parentSlug: "malaga",
    parentName: "Málaga",
    h1: "Pulido de suelos en Marbella",
    metaTitle: "Pulido de suelos en Marbella | Pulimentos Jiménez",
    metaDescription:
      "Cristalizado de mármol y pulido de suelos en Marbella. Villas, hoteles y comercios de alto standing. Acabado impecable. Nos desplazamos. Pide presupuesto.",
    intro: [
      "Marbella es sinónimo de mármol y de alto standing, y ese nivel de exigencia se refleja en cada suelo: halls de hotel, villas en la Milla de Oro, áticos, clínicas y comercios de lujo donde el mármol tiene que estar impecable, con ese brillo espejo que solo da un buen cristalizado. Aquí el trabajo fino manda: recuperar mármoles blancos rayados o apagados, tratar solerías de villa que han perdido vida y devolverle a una recepción ese acabado que impresiona nada más entrar. También pulimos terrazo en comunidades y aplicamos resina en garajes y zonas comunes.",
      "Trabajamos cristalizado y abrillantado de mármol, pulido de terrazo, hormigón pulido, resina epoxi y tratamiento de suelos naturales. Somos de La Carlota (Córdoba) pero nos desplazamos habitualmente a toda la Costa del Sol; en Marbella entendemos que aquí se busca un acabado de alto nivel y sin prisas mal llevadas. Nos pasamos, valoramos el estado del mármol y te damos un presupuesto claro.",
    ],
    nearby: ["San Pedro de Alcántara", "Puerto Banús", "Nueva Andalucía", "Las Chapas", "Elviria", "Ojén"],
    faqs: [
      {
        q: "Mi suelo de mármol está apagado y con rayas, ¿tiene arreglo?",
        a: "Casi siempre sí. Con un pulido y cristalizado eliminamos rayas superficiales, marcas de agua y zonas mate, y devolvemos al mármol el brillo espejo. En villas y hoteles es el trabajo que más nos piden en Marbella.",
      },
      {
        q: "¿Trabajáis en hoteles y comercios sin cerrar al público?",
        a: "Sí. Nos adaptamos a los horarios del establecimiento, trabajamos por zonas y dejamos cada tramo listo para pisar. En hostelería y retail de la zona es lo habitual para no perder actividad.",
      },
    ],
  },
  {
    slug: "fuengirola",
    name: "Fuengirola",
    province: "Málaga",
    parentSlug: "malaga",
    parentName: "Málaga",
    h1: "Pulido de suelos en Fuengirola",
    metaTitle: "Pulido de suelos en Fuengirola | Pulimentos Jiménez",
    metaDescription:
      "Pulido y cristalizado de suelos en Fuengirola. Hostelería, comercios y comunidades de la costa. Recuperamos terrazo y mármol. Presupuesto sin compromiso.",
    intro: [
      "Fuengirola vive del turismo y de la hostelería, y sus suelos lo sufren: bares, restaurantes, comercios del paseo marítimo y portales de comunidades donde pasa muchísima gente todo el año. Ese trasiego constante desluce el terrazo y el mármol, deja el suelo apagado y con desgaste en las zonas de más paso. Ahí entramos nosotros, recuperando terrazo de portal, cristalizando mármol de recepción y devolviéndole el brillo a solerías que llevan años aguantando el ir y venir de vecinos y turistas.",
      "Hacemos cristalizado de mármol, pulido de terrazo, hormigón pulido, resina epoxi, abrillantado y tratamiento de suelos. Estamos en La Carlota pero trabajamos de continuo en la Costa del Sol, así que Fuengirola nos pilla dentro de la ruta habitual. Nos acercamos, vemos el estado real del suelo y te pasamos un presupuesto honesto, sin sorpresas.",
    ],
    nearby: ["Mijas", "Los Boliches", "Torreblanca", "Las Lagunas", "La Cala de Mijas", "Benalmádena"],
    faqs: [
      {
        q: "El terrazo del portal está muy desgastado por el paso de vecinos, ¿se puede recuperar?",
        a: "Sí. El terrazo se pule y se abrillanta hasta recuperar el color y el brillo original, incluso en portales muy transitados. Es de los trabajos más agradecidos porque el cambio se ve enseguida.",
      },
      {
        q: "¿Podéis trabajar en un bar o restaurante sin cerrar varios días?",
        a: "Nos amoldamos al horario del negocio, muchas veces por la mañana o en día de cierre. El objetivo es que la hostelería no pierda jornadas y el suelo quede listo para abrir.",
      },
    ],
  },
  {
    slug: "benalmadena",
    name: "Benalmádena",
    province: "Málaga",
    parentSlug: "malaga",
    parentName: "Málaga",
    h1: "Pulido de suelos en Benalmádena",
    metaTitle: "Pulido de suelos en Benalmádena | Pulimentos Jiménez",
    metaDescription:
      "Pulido de suelos en Benalmádena: urbanizaciones, hoteles y apartamentos turísticos. Cristalizado, terrazo y resina. Nos desplazamos a la costa. Presupuesto.",
    intro: [
      "Benalmádena es un mosaico de urbanizaciones, apartamentos turísticos y hoteles repartidos entre la costa y el pueblo, y cada uno tiene su suelo: zonas comunes de comunidad en terrazo, halls de hotel en mármol, garajes comunitarios que piden una resina resistente y solados de apartamento que se alquilan todo el año y necesitan estar siempre presentables. El alto nivel de rotación turística desgasta rápido, y por eso aquí lo que más se pide es recuperar zonas comunes y dejar mármol y terrazo con buen aspecto para la temporada.",
      "Aplicamos cristalizado de mármol, pulido de terrazo, resina epoxi en garajes y trasteros, hormigón pulido, abrillantado y tratamiento de suelos. Desde La Carlota nos desplazamos con regularidad a toda la Costa del Sol, y Benalmádena entra de lleno en nuestra zona de trabajo. Concertamos una visita, valoramos las zonas comunes o el suelo del que se trate y te damos presupuesto sin compromiso.",
    ],
    nearby: ["Arroyo de la Miel", "Benalmádena Pueblo", "Torremolinos", "Fuengirola", "Torremuelle", "Mijas Costa"],
    faqs: [
      {
        q: "¿Tratáis suelos de garajes comunitarios en urbanizaciones?",
        a: "Sí. Para garajes y trasteros aplicamos resina epoxi, que da un suelo resistente al tráfico de coches, fácil de limpiar y con buen aspecto. Es muy demandado en comunidades y urbanizaciones de la zona.",
      },
      {
        q: "Gestiono apartamentos turísticos, ¿podéis dejar el suelo listo entre temporadas?",
        a: "Perfectamente. Coordinamos el trabajo en periodos de baja ocupación para que el suelo esté impecable antes de la siguiente temporada, sin afectar a las reservas.",
      },
    ],
  },
  {
    slug: "estepona",
    name: "Estepona",
    province: "Málaga",
    parentSlug: "malaga",
    parentName: "Málaga",
    h1: "Pulido de suelos en Estepona",
    metaTitle: "Pulido de suelos en Estepona | Pulimentos Jiménez",
    metaDescription:
      "Pulido y cristalizado de suelos en Estepona. Residencial de costa, hoteles y resorts. Recuperamos mármol y terrazo. Nos desplazamos. Pide tu presupuesto.",
    intro: [
      "Estepona ha crecido mucho como residencial de costa, con nuevas promociones, resorts y hoteles junto a todo el residencial de siempre. Eso deja un abanico de suelos muy variado: mármol y porcelánico en viviendas nuevas, halls y zonas comunes de resort en mármol que hay que mantener con brillo, terrazo en comunidades más veteranas y garajes de urbanización donde la resina epoxi es la mejor solución. Aquí conviven la casa recién entregada que quiere sacarle partido al mármol y la comunidad de años que necesita recuperar el terrazo del portal.",
      "Ofrecemos cristalizado de mármol, pulido de terrazo, hormigón pulido, resina epoxi, abrillantado y tratamiento de suelos naturales. Somos de La Carlota (Córdoba) y trabajamos de forma habitual en toda la Costa del Sol, así que llegar a Estepona forma parte de nuestro día a día. Nos desplazamos, revisamos el suelo sobre el terreno y te damos un presupuesto claro y ajustado.",
    ],
    nearby: ["San Pedro de Alcántara", "Manilva", "Casares", "Sabinillas", "Cancelada", "Marbella"],
    faqs: [
      {
        q: "Acabo de comprar una vivienda en la costa, ¿merece la pena tratar el mármol nuevo?",
        a: "Sí. Un cristalizado inicial sella y protege el mármol desde el principio, le da brillo y hace que aguante mejor el desgaste y las manchas. Es la mejor forma de mantenerlo bien a largo plazo.",
      },
      {
        q: "¿Trabajáis para comunidades y administradores de fincas en Estepona?",
        a: "Sí, es habitual. Tratamos con comunidades y administradores para recuperar zonas comunes, portales y garajes, con presupuesto detallado por partidas para que la junta lo tenga todo claro.",
      },
    ],
  },
  // ---- JAÉN ----
  {
    slug: "linares",
    name: "Linares",
    province: "Jaén",
    parentSlug: "jaen",
    parentName: "Jaén",
    h1: "Pulido de suelos en Linares",
    metaTitle: "Pulido de suelos en Linares | Pulimentos Jiménez",
    metaDescription:
      "Pulido y tratamiento de suelos en Linares: hormigón pulido para naves y polígonos, resina epoxi, cristalizado y abrillantado. Nos desplazamos desde Córdoba.",
    intro: [
      "Linares arrastra un ADN industrial y minero que se nota en sus suelos: naves de los polígonos de Los Jarales o Los Rubiales, talleres metalúrgicos y almacenes que necesitan un pavimento que aguante carretillas, cargas y tránsito constante. Para eso el hormigón pulido es la solución que mejor rinde: una superficie densa, sin juntas donde se acumule la suciedad y resistente al desgaste diario. Y donde hace falta impermeabilidad química o acabado sanitario, la resina epoxi da ese plus que un suelo industrial de verdad pide.",
      "Trabajamos tanto la parte industrial como la doméstica y comercial de Linares: cristalizado de mármol en portales y viviendas, pulido de terrazo en comunidades antiguas y abrillantado que devuelve el brillo a suelos apagados por los años. Nos desplazamos desde La Carlota sin problema; el trayecto por la A-4 y luego hacia Bailén es directo, así que valoramos la obra sin coste y organizamos el trabajo para molestar lo mínimo a tu actividad.",
    ],
    nearby: ["Bailén", "La Carolina", "Baeza", "Vilches", "Guarromán", "Torreblascopedro"],
    faqs: [
      {
        q: "¿Podéis pulir el suelo de una nave en un polígono de Linares?",
        a: "Sí. El hormigón pulido es justo lo que mejor funciona en naves de los polígonos de Linares: aguanta carretillas y tránsito pesado, no tiene juntas y se limpia fácil. Vemos la nave, medimos y te pasamos presupuesto cerrado.",
      },
      {
        q: "¿Es mejor epoxi u hormigón pulido para un taller?",
        a: "Depende del uso. Si hay ataque químico, aceites o quieres acabado tipo sanitario, la resina epoxi gana. Si buscas dureza y bajo mantenimiento sin más, el hormigón pulido sale más a cuenta. Lo valoramos in situ y te asesoramos honestamente.",
      },
    ],
  },
  {
    slug: "ubeda",
    name: "Úbeda",
    province: "Jaén",
    parentSlug: "jaen",
    parentName: "Jaén",
    h1: "Pulido de suelos en Úbeda",
    metaTitle: "Pulido de suelos en Úbeda | Pulimentos Jiménez",
    metaDescription:
      "Cristalizado de mármol y pulido de suelos en Úbeda: cascos históricos, hoteles con encanto y viviendas. Recuperamos el brillo de tu piedra. Desde Córdoba.",
    intro: [
      "Úbeda es patrimonio renacentista de la UNESCO, y eso se traduce en suelos con historia: mármol, piedra natural y solados nobles en el casco histórico, en casas señoriales y en los muchos hoteles con encanto que ocupan edificios antiguos. Esos pavimentos piden un tratamiento que respete el material y le devuelva vida sin agredirlo. El cristalizado de mármol es aquí el rey: sella y endurece la superficie, saca un brillo profundo y natural, y prepara el suelo para aguantar el paso constante de visitantes sin perder el carácter de la piedra original.",
      "Además del cristalizado trabajamos el pulido de terrazo, el abrillantado y el tratamiento de piedra natural, tanto en establecimientos hosteleros como en viviendas particulares de Úbeda. Sabemos que en un hotel o en un restaurante del casco cada día cuenta, así que planificamos por zonas o en horario reducido para no cortar tu actividad. Nos desplazamos desde La Carlota valorando la obra antes, sin sorpresas en el presupuesto.",
    ],
    nearby: ["Baeza", "Torreperogil", "Sabiote", "Villacarrillo", "Jódar", "Begíjar"],
    faqs: [
      {
        q: "¿El cristalizado sirve para el mármol antiguo de un edificio histórico?",
        a: "Sí, y es precisamente donde más brilla. El cristalizado endurece y protege el mármol antiguo devolviéndole el brillo natural sin dañarlo. En cascos históricos como el de Úbeda es el tratamiento que mejor conserva el material original.",
      },
      {
        q: "¿Trabajáis en hoteles sin cerrar el establecimiento?",
        a: "Sí. Organizamos el trabajo por zonas o en horarios de baja ocupación para que el hotel siga funcionando. Lo hablamos antes y adaptamos el ritmo a tu operativa.",
      },
    ],
  },
  {
    slug: "andujar",
    name: "Andújar",
    province: "Jaén",
    parentSlug: "jaen",
    parentName: "Jaén",
    h1: "Pulido de suelos en Andújar",
    metaTitle: "Pulido de suelos en Andújar | Pulimentos Jiménez",
    metaDescription:
      "Pulido de suelos en Andújar: hormigón pulido y epoxi para almazaras y naves agroindustriales, cristalizado de mármol y abrillantado. Desde Córdoba.",
    intro: [
      "Andújar vive de la agroindustria: almazaras, cooperativas del aceite, industria cerámica y naves de manipulado y logística marcan buena parte de su tejido productivo. Esos suelos sufren de lo lindo, entre el trasiego de maquinaria, los derrames propios del sector oleícola y los productos de limpieza agresivos. Ahí el hormigón pulido y sobre todo la resina epoxi son la respuesta: pavimentos continuos, sin juntas, impermeables y fáciles de higienizar, que aguantan tanto la carga mecánica como el ataque químico del día a día en una almazara o una planta de envasado.",
      "Pero Andújar no es solo industria. En el casco urbano tratamos mármol y terrazo en comunidades, comercios y viviendas con cristalizado y abrillantado, recuperando suelos que el tiempo ha ido apagando. Trabajemos lo industrial o lo doméstico, nos desplazamos desde La Carlota; la A-4 nos deja a tiro y valoramos cada obra en persona para darte un precio cerrado y realista.",
    ],
    nearby: ["Marmolejo", "Villanueva de la Reina", "Arjona", "Lopera", "Cazalilla", "Espeluy"],
    faqs: [
      {
        q: "¿Qué suelo recomendáis para una almazara o planta de aceite?",
        a: "La resina epoxi suele ser lo ideal: es impermeable, resiste los derrames y aceites del proceso y se higieniza fácil, algo clave en el sector alimentario. Según el uso y la carga, a veces combinamos con hormigón pulido. Lo valoramos in situ.",
      },
      {
        q: "¿Hacéis también trabajos pequeños en viviendas de Andújar?",
        a: "Claro. Cristalizamos mármol, pulimos terrazo y abrillantamos suelos en pisos, comercios y comunidades. No hay obra demasiado pequeña; te pasamos presupuesto sin compromiso.",
      },
    ],
  },
  {
    slug: "alcala-la-real",
    name: "Alcalá la Real",
    province: "Jaén",
    parentSlug: "jaen",
    parentName: "Jaén",
    h1: "Pulido de suelos en Alcalá la Real",
    metaTitle: "Pulido de suelos en Alcalá la Real | P. Jiménez",
    metaDescription:
      "Pulido y cristalizado de suelos en Alcalá la Real: mármol y terrazo en viviendas, naves del olivar y cooperativas. Nos desplazamos desde Córdoba.",
    intro: [
      "Alcalá la Real está en plena frontera entre Jaén y Granada, en tierra de olivar hasta donde alcanza la vista. Esa economía olivarera se refleja en sus suelos: cooperativas, almazaras y naves agrícolas que necesitan pavimentos resistentes y fáciles de limpiar, donde el hormigón pulido y la resina epoxi dan el mejor resultado frente a la maquinaria y los residuos del aceite. Su situación de paso entre dos provincias también le da un tejido comercial activo, con locales y establecimientos cuyos suelos de mármol o terrazo agradecen un buen cristalizado.",
      "En las viviendas y comunidades del municipio trabajamos el cristalizado de mármol, el pulido de terrazo y el abrillantado, recuperando el brillo original de suelos desgastados por el uso. Estemos hablando de una nave del olivar o del portal de una finca, nos desplazamos desde La Carlota sin problema y valoramos la obra antes de dar precio, para que sepas exactamente a qué atenerte.",
    ],
    nearby: ["Castillo de Locubín", "Alcaudete", "Priego de Córdoba", "Frailes", "Valdepeñas de Jaén", "Montefrío"],
    faqs: [
      {
        q: "¿Os desplazáis hasta Alcalá la Real desde Córdoba?",
        a: "Sí, sin problema. Alcalá la Real está a un trayecto cómodo desde La Carlota y trabajamos toda esa franja fronteriza entre Jaén, Córdoba y Granada. Valoramos la obra en persona y te damos presupuesto cerrado.",
      },
      {
        q: "¿Qué tratamiento va mejor para el suelo de una cooperativa del olivar?",
        a: "El hormigón pulido o la resina epoxi, según el uso. Ambos aguantan bien la maquinaria y se limpian fácil frente a los residuos del aceite. Lo vemos in situ y te recomendamos lo que más te compensa.",
      },
    ],
  },
  {
    slug: "alcaudete",
    name: "Alcaudete",
    province: "Jaén",
    parentSlug: "jaen",
    parentName: "Jaén",
    h1: "Pulido de suelos en Alcaudete",
    metaTitle: "Pulido de suelos en Alcaudete | Pulimentos Jiménez",
    metaDescription:
      "Pulido de suelos en Alcaudete: hormigón y epoxi para almazaras y naves del olivar, cristalizado de mármol y terrazo en viviendas. Desde Córdoba.",
    intro: [
      "Alcaudete es olivar y aceite en estado puro, uno de esos municipios donde la campaña marca el ritmo de casi todo. Sus almazaras y naves de manipulado necesitan suelos que aguanten sin rendirse: el hormigón pulido aporta dureza y bajo mantenimiento, y la resina epoxi añade impermeabilidad y resistencia química para las zonas donde el aceite, el agua de la aceituna y los productos de limpieza lo ponen difícil a cualquier pavimento. Un suelo bien tratado en una almazara no es un lujo, es lo que evita paradas y problemas en plena campaña.",
      "Fuera del entorno industrial, en el casco de Alcaudete tratamos el mármol y el terrazo de viviendas, comercios y comunidades con cristalizado y abrillantado, devolviendo el brillo a suelos que el tiempo ha dejado mate. Nos desplazamos desde La Carlota, que queda cerca por la zona sur de Córdoba, y valoramos cada trabajo en persona antes de dar un presupuesto cerrado y sin sorpresas.",
    ],
    nearby: ["Alcalá la Real", "Baena", "Luque", "Martos", "Castillo de Locubín", "Villardompardo"],
    faqs: [
      {
        q: "¿Conviene tratar el suelo de la almazara antes de la campaña?",
        a: "Sí, es el mejor momento. Aplicar hormigón pulido o epoxi fuera de campaña deja el pavimento listo y curado para cuando llega el trabajo fuerte, sin interferir en la producción. Planifícalo con tiempo y lo cuadramos.",
      },
      {
        q: "¿Alcaudete os pilla lejos desde La Carlota?",
        a: "Para nada. Estamos en la zona sur de Córdoba y Alcaudete queda a un trayecto corto. Nos desplazamos sin recargo y valoramos la obra antes de darte precio.",
      },
    ],
  },
  {
    slug: "bailen",
    name: "Bailén",
    province: "Jaén",
    parentSlug: "jaen",
    parentName: "Jaén",
    h1: "Pulido de suelos en Bailén",
    metaTitle: "Pulido de suelos en Bailén | Pulimentos Jiménez",
    metaDescription:
      "Pulido de suelos en Bailén: hormigón pulido y epoxi para naves e industria cerámica, cristalizado de mármol y abrillantado. Nos desplazamos desde Córdoba.",
    intro: [
      "Bailén es industria y cruce de caminos: nudo de carreteras donde se juntan la A-4 y la A-44, con una tradición cerámica y azulejera muy arraigada y numerosas naves y almacenes logísticos aprovechando esa posición estratégica. En un entorno así, el suelo trabaja duro. El hormigón pulido responde de maravilla en naves cerámicas, fábricas y almacenes, aguantando carretillas, palés y tránsito pesado sin fisurarse, y la resina epoxi cubre las zonas que piden impermeabilidad o un acabado técnico más exigente.",
      "También damos servicio a la parte residencial y comercial de Bailén: cristalizado de mármol en portales y viviendas, pulido de terrazo en comunidades y abrillantado para suelos que han perdido el brillo con los años. Al estar Bailén justo en el nudo de la A-4, nos desplazamos desde La Carlota con toda comodidad; valoramos la obra sobre el terreno y te damos un presupuesto cerrado, sin letra pequeña.",
    ],
    nearby: ["Linares", "La Carolina", "Guarromán", "Mengíbar", "Baños de la Encina", "Andújar"],
    faqs: [
      {
        q: "¿El hormigón pulido aguanta el tránsito de una nave cerámica o logística?",
        a: "Perfectamente. Es de los pavimentos más resistentes para naves con carretillas, palés y carga pesada como las de Bailén: superficie dura, continua y sin juntas donde se acumule suciedad. Lo valoramos y te presupuestamos cerrado.",
      },
      {
        q: "¿Estáis lejos de Bailén?",
        a: "Bailén está justo en el nudo de la A-4, así que el desplazamiento desde La Carlota es directo y cómodo. Nos movemos por toda la zona sin recargos raros; valoramos la obra antes de dar precio.",
      },
    ],
  },
  {
    slug: "la-carolina",
    name: "La Carolina",
    province: "Jaén",
    parentSlug: "jaen",
    parentName: "Jaén",
    h1: "Pulido de suelos en La Carolina",
    metaTitle: "Pulido de suelos en La Carolina | P. Jiménez",
    metaDescription:
      "Pulido de suelos en La Carolina: hormigón y epoxi para naves e industria de Sierra Morena, cristalizado de mármol y terrazo. Nos desplazamos desde Córdoba.",
    intro: [
      "La Carolina nació como capital de las Nuevas Poblaciones de Sierra Morena y arrastra un pasado minero e industrial que todavía marca su carácter, con polígonos y naves a pie de la A-4 en plena puerta norte de Andalucía. Esos espacios industriales y logísticos necesitan suelos a la altura: el hormigón pulido ofrece la dureza y la continuidad que piden las naves con tránsito de maquinaria, y la resina epoxi aporta impermeabilidad y resistencia química allí donde el uso es más exigente. Un pavimento bien resuelto ahorra mantenimiento y da imagen de seriedad a cualquier instalación.",
      "En el casco urbano de La Carolina, con su trazado ordenado de villa ilustrada, trabajamos el cristalizado de mármol, el pulido de terrazo y el abrillantado en viviendas, comercios y comunidades, recuperando el brillo de suelos apagados por el paso del tiempo. Nos desplazamos desde La Carlota por la A-4 sin complicación, valoramos la obra en persona y te pasamos un presupuesto cerrado y honesto.",
    ],
    nearby: ["Bailén", "Linares", "Guarromán", "Santa Elena", "Carboneros", "Vilches"],
    faqs: [
      {
        q: "¿Trabajáis en las naves de los polígonos de La Carolina?",
        a: "Sí. El hormigón pulido y el epoxi son ideales para las naves industriales y logísticas de La Carolina, a pie de la A-4: resistentes, continuos y de fácil limpieza. Vemos la nave, medimos y te damos precio cerrado.",
      },
      {
        q: "¿Cuánto tarda un cristalizado de mármol en una vivienda?",
        a: "Depende de los metros y del estado del suelo, pero muchos trabajos domésticos se resuelven en una jornada. Al valorar la obra te damos un plazo concreto para que puedas organizarte.",
      },
    ],
  },
  // ---- SEVILLA ----
  {
    slug: "ecija",
    name: "Écija",
    province: "Sevilla",
    parentSlug: "sevilla",
    parentName: "Sevilla",
    h1: "Pulido de suelos en Écija",
    metaTitle: "Pulido de suelos en Écija | Pulimentos Jiménez",
    metaDescription:
      "Hormigón pulido en Écija para naves y agroindustria, más cristalizado de mármol y barro en patios. Base en La Carlota, a un paso. Presupuesto sin compromiso.",
    intro: [
      "Écija está justo en el corredor entre Córdoba y Sevilla, y para nosotros eso es una ventaja: desde nuestra base en La Carlota nos plantamos en la «sartén de Andalucía» en nada, así que el desplazamiento no te encarece el presupuesto. En una tierra de agroindustria y campiña, trabajamos sobre todo soleras de hormigón para naves, almacenes agrícolas y cooperativas que necesitan un suelo que aguante carga, limpieza a presión y calor sin soltar polvo.",
      "Y luego está la otra Écija, la de los patios, zaguanes y casas señoriales del casco: ahí recuperamos el mármol y el barro cocido con pulido, cristalizado y sellado para que vuelvan a lucir. Hacemos hormigón pulido, resina epoxi, cristalizado de mármol y pulido de terrazo, con maquinaria propia y acabados pensados para durar. Nos acercamos, valoramos el suelo in situ y te damos un precio ajustado.",
    ],
    nearby: ["Fuentes de Andalucía", "Cañada Rosal", "La Luisiana", "Marchena", "Osuna", "Palma del Río"],
    faqs: [
      {
        q: "¿Os pilla lejos Écija desde La Carlota?",
        a: "Al contrario. Écija queda muy cerca de nuestra base en La Carlota, en el mismo corredor Córdoba-Sevilla, así que respondemos rápido y el desplazamiento apenas influye en el presupuesto.",
      },
      {
        q: "¿Podéis recuperar el mármol o el barro de una casa antigua en el casco de Écija?",
        a: "Sí. En viviendas y patios del casco histórico pulimos y cristalizamos el mármol y tratamos el barro cocido para devolverle el brillo y protegerlo. Valoramos el estado del suelo y te recomendamos el tratamiento adecuado.",
      },
    ],
  },
  {
    slug: "dos-hermanas",
    name: "Dos Hermanas",
    province: "Sevilla",
    parentSlug: "sevilla",
    parentName: "Sevilla",
    h1: "Pulido de suelos en Dos Hermanas",
    metaTitle: "Pulido de suelos en Dos Hermanas | P. Jiménez",
    metaDescription:
      "Hormigón pulido industrial en Dos Hermanas: soleras para naves de polígono sin polvo. También epoxi, mármol y terrazo. Presupuesto sin compromiso.",
    intro: [
      "Dos Hermanas es uno de los grandes motores industriales y logísticos del área metropolitana de Sevilla, con polígonos como Carretera de la Isla o La Isla llenos de naves, almacenes y centros de distribución. Ese es nuestro terreno: soleras de hormigón pulido preparadas para el trasiego de carretillas, estanterías de altura y tránsito pesado, con un acabado que no genera polvo y facilita la limpieza diaria.",
      "Pero Dos Hermanas también es una ciudad grande con muchísima vivienda y comunidad de propietarios, así que pulimos garajes comunitarios y recuperamos el mármol y el terrazo de portales y viviendas. Hormigón pulido, resina epoxi para industria y locales, cristalizado de mármol y pulido de terrazo. Nos desplazamos desde Córdoba, valoramos el suelo y, en naves, te ofrecemos prueba gratuita antes de decidir.",
    ],
    nearby: ["Montequinto", "Los Palacios y Villafranca", "Bellavista", "Coria del Río", "Sevilla capital", "Alcalá de Guadaíra"],
    faqs: [
      {
        q: "¿Trabajáis para naves de los polígonos de Dos Hermanas?",
        a: "Sí, es una de nuestras especialidades. Hacemos hormigón pulido y epoxi para naves de polígono, con soleras resistentes al tránsito pesado y sin polvo. Para naves industriales ofrecemos prueba gratuita in situ.",
      },
    ],
  },
  {
    slug: "alcala-de-guadaira",
    name: "Alcalá de Guadaíra",
    province: "Sevilla",
    parentSlug: "sevilla",
    parentName: "Sevilla",
    h1: "Pulido de suelos en Alcalá de Guadaíra",
    metaTitle: "Pulido de suelos en Alcalá de Guadaíra | P. Jiménez",
    metaDescription:
      "Hormigón pulido en Alcalá de Guadaíra para naves, obradores e industria. También epoxi, mármol y terrazo. Acabados sin polvo. Presupuesto sin compromiso.",
    intro: [
      "Alcalá de Guadaíra, la de toda la vida «Alcalá de los Panaderos», mantiene esa doble alma de tradición agroalimentaria e industria: obradores y panificadoras junto a grandes polígonos logísticos como La Red, Fridex o PIBO. En ese entorno pulimos soleras de hormigón para naves, obradores y almacenes que exigen higiene, resistencia a la carga y un suelo que se limpie fácil y no suelte polvo.",
      "Para la industria alimentaria y los locales aplicamos también resina epoxi, que aporta una superficie continua, impermeable y fácil de higienizar. Y en viviendas y comunidades del pueblo recuperamos mármol y terrazo con pulido y cristalizado. Hormigón pulido, epoxi, cristalizado de mármol y pulido de terrazo, con maquinaria propia. Nos acercamos desde Córdoba y te valoramos el suelo sin compromiso.",
    ],
    nearby: ["Mairena del Alcor", "El Viso del Alcor", "Dos Hermanas", "Utrera", "Sevilla capital", "Carmona"],
    faqs: [
      {
        q: "¿Qué acabado recomendáis para un obrador o nave alimentaria en Alcalá?",
        a: "Depende del uso, pero para industria alimentaria solemos recomendar hormigón pulido o resina epoxi: superficies resistentes, continuas y fáciles de higienizar, sin juntas donde se acumule suciedad. Valoramos la nave y te proponemos la mejor opción.",
      },
    ],
  },
  {
    slug: "utrera",
    name: "Utrera",
    province: "Sevilla",
    parentSlug: "sevilla",
    parentName: "Sevilla",
    h1: "Pulido de suelos en Utrera",
    metaTitle: "Pulido de suelos en Utrera | Pulimentos Jiménez",
    metaDescription:
      "Hormigón pulido en Utrera para agroindustria, obradores de mantecados y naves. También mármol, epoxi y terrazo. Presupuesto sin compromiso.",
    intro: [
      "Utrera es campiña y agroindustria en estado puro, con una tradición dulcera muy conocida —los mantecados y polvorones— y un tejido de obradores, cooperativas y almacenes agrícolas alrededor. Ahí trabajamos soleras de hormigón pulido que aguantan el tránsito de carga, la limpieza intensiva y el uso continuo, con un acabado que no genera polvo, algo clave cuando se manipula producto alimentario.",
      "Además de la parte industrial, en el pueblo pulimos garajes de comunidades y recuperamos el mármol y el terrazo de viviendas y portales. Ofrecemos hormigón pulido, resina epoxi, cristalizado de mármol y pulido de terrazo, con acabados de larga duración. Nos desplazamos desde nuestra base en Córdoba, valoramos el suelo in situ y, para naves, hacemos prueba gratuita.",
    ],
    nearby: ["Los Palacios y Villafranca", "El Arahal", "Los Molares", "El Coronil", "Alcalá de Guadaíra", "Morón de la Frontera"],
    faqs: [
      {
        q: "¿Os desplazáis a Utrera desde Córdoba?",
        a: "Sí, trabajamos habitualmente en la provincia de Sevilla, Utrera incluida. El desplazamiento se valora dentro del presupuesto y no dispara el precio. Cuéntanos dónde está el suelo y te presupuestamos sin compromiso.",
      },
    ],
  },
  {
    slug: "la-rinconada",
    name: "La Rinconada",
    province: "Sevilla",
    parentSlug: "sevilla",
    parentName: "Sevilla",
    h1: "Pulido de suelos en La Rinconada",
    metaTitle: "Pulido de suelos en La Rinconada | P. Jiménez",
    metaDescription:
      "Hormigón pulido en La Rinconada para naves y logística junto al aeropuerto de Sevilla. También epoxi, mármol y terrazo. Presupuesto sin compromiso.",
    intro: [
      "La Rinconada es logística y suelo industrial: su situación junto al aeropuerto de Sevilla y los grandes ejes de la vega la han convertido en zona de polígonos, naves de distribución y centros logísticos como los del entorno de El Cáñamo. Para ese uso hacemos hormigón pulido de alta resistencia, soleras que soportan carretillas, estanterías cargadas y tránsito constante sin desgastarse ni soltar polvo.",
      "También damos servicio a la parte residencial de La Rinconada y San José, puliendo garajes de comunidades y recuperando mármol y terrazo en viviendas. Hormigón pulido, resina epoxi para naves y locales, cristalizado de mármol y pulido de terrazo, con maquinaria propia y acabados duraderos. Nos acercamos desde Córdoba y, en pavimentos industriales, te ofrecemos prueba gratuita antes de contratar.",
    ],
    nearby: ["San José de la Rinconada", "La Algaba", "Alcalá del Río", "Brenes", "Sevilla capital", "La Rinconada"],
    faqs: [
      {
        q: "¿Hacéis soleras para naves logísticas en La Rinconada?",
        a: "Sí. El hormigón pulido es ideal para naves de logística: resiste el tránsito de carretillas y carga pesada, se limpia con facilidad y no suelta polvo. Valoramos la nave in situ y ofrecemos prueba gratuita para que veas el acabado.",
      },
    ],
  },
];
