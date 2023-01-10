const spain = "Spain";
const portugal = "Portugal";
const japan = "Japan";
const scotland = "Scotland";
const england = "England";
const suecia = "Suecia";
const irland = "Irland";
const USA = "USA";
const cuba = "Cuba";
const italy = "Italy";
const Dom = "Dominican Republic";
const france = "France";
const polonia = "Polonia";
const mexico = "Mexico";
const india = "India";
const russian = "Russian";
const drinks = [
  {
    id: 1,
    name: "La Montesa 2018",
    description: `Álvaro Palacios deja su
      impronta enológica en este tinto que tan bien refleja todas las características de 
      su lugar de country, las laderas de suelo arcillo-calcáreo del Monte Yerga, en Alfaro. 
      La Montesa 2018 culmina el proceso natural, iniciado años atrás, hacia una identidad clásica.
      En esta añada ha habido un cambio de imagen definitivo. La etiqueta sigue el modelo de Quiñón de Valmira
      y cierra la línea definitiva de los vinos de la bodega: equilibrio de elementos, claridad en la jerarquía de contenidos
      , vocación informativa, proyección de un estilo limpio, veraz y atemporal.`,
    stock: 52,
    price: 14.65,
    image: "https://media.drinksandco.com/wines/la-montesa-1750981_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "Red Wine",
  },
  {
    id: 2,
    name: "Pruno 2019",
    description: `Las 64 hectáreas donde se cultivan el Tinto Fino y el Cabernet Sauvignon 
      para elaborar Pruno han dado y siguen dando mucho de sí. Porque este es el vino más universal de Finca Villacreces,
      lo que podríamos llamar una rock star vinícola que ha dado la vuelta al mundo sobre todo desde que Parker lo encumbrara como el mejor vino español de la historia 
      por menos de 20 dólares. La fruta roja y la fruta madura tan propias de él,
      envueltas de una agradable suavidad, son marca de la casa, igual como una calidad irrefutable añada tras añada.`,
    stock: 52,
    price: 10.5,
    image: "https://media.drinksandco.com/wines/pruno-1724979_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "Red Wine",
  },
  {
    id: 3,
    name: "Pétalos del Bierzo 2019",
    description: `Seguramente estamos ante el vino más famoso de Álvaro Palacios, considerado uno de los 
      mejores enólogos de España. Pétalos del Bierzo es un vino jovial y pleno de aromas embriagadores que 
      transmite con claridad todos los matices del Bierzo. Procedente de viñas viejas cultivadas en tierras de pizarra escarpadas
       y rocosas de las que se extrae lo mejor de la Mencía y el resto de variedades que componen el coupage de este tinto amable,
        elegido por Robert Parker en 2015 como el vino con mejor relación calidad-precio del mundo.`,
    stock: 52,
    price: 15.63,
    image:
      "https://media.drinksandco.com/wines/petalos-del-bierzo-1707355_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "Red Wine",
  },
  {
    id: 4,
    name: "Pruno 2019",
    description: `Las 64 hectáreas donde se cultivan el Tinto Fino y el Cabernet Sauvignon 
      para elaborar Pruno han dado y siguen dando mucho de sí. Porque este es el vino más universal de Finca Villacreces,
      lo que podríamos llamar una rock star vinícola que ha dado la vuelta al mundo sobre todo desde que Parker lo encumbrara como el mejor vino español de la historia 
      por menos de 20 dólares. La fruta roja y la fruta madura tan propias de él,
      envueltas de una agradable suavidad, son marca de la casa, igual como una calidad irrefutable añada tras añada.`,
    stock: 52,
    price: 10.5,
    image: "https://media.drinksandco.com/wines/pruno-1724979_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "Red Wine",
  },
  {
    id: 5,
    name: "Ramon Bilbao Reserva 2015",
    description: `El Reserva de las Bodegas Ramón Bilbao ha sido premiado por su altísima calidad en competencias como Bacchus Awards, Mundus Vini y
       Decanter WWA, entre otros, en los que obtuvo la codiciada Medalla de Plata. El Ramon Bilbao Reserva 2015 es un coupage de tres variedades de uva que se desarrolla óptimamente en las tierras
       riojanas de las que proviene. Este tinto lleva a quien lo bebe a vivir un instante único, a detenerse en el tiempo, a viajar a través de la historia, de la tradición y
       los paisajes de una de las zonas vinícolas más importantes de España. Como sus creadores lo han descrito, "es un vino que refleja el saber y el sabor de la Rioja Alta.`,
    stock: 52,
    price: 13.82,
    image:
      "https://media.drinksandco.com/wines/ramon-bilbao-reserva-1417664_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "Red Wine",
  },
  {
    id: 6,
    name: "Malleolus 2019",
    description: `La palabra Malleolus proviene del latín y significa majuelo, una forma habitual de denominar a los viñedos en la zona de Pesquera de Duero. Para elaborar 
      este vino se han seleccionado uvas de majuelos de entre 25 y 75 años conducidos en vaso y en espaldera. Destaca por una elegancia sublime y 
      por unos aromas expresivos y unos taninos pulidos.`,
    stock: 52,
    price: 13.82,
    image: "https://media.drinksandco.com/wines/malleolus-1780021_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "Red Wine",
  },
  {
    id: 7,
    name: "Anselmo Mendes Dão 2015",
    description: `Anselmo Mendes Winemaker descubrió su vocación siendo aún un niño. Aunque de casta le viene al galgo, ya que creció en el seno de una familia viticultora 
      de Monçao, un pequeño pueblo entre Galicia y Portugal. Hoy es uno de los elaboradores con más reputación del país y asesora bodegas de dentro y fuera de Portugal.
      Anselmo Mendes Dão 2015, 93 Wine Enthusiast, es un delicado y sedoso tinto que procede de Quinta de Silvares, en la subzona denominada Besteiros, un lugar de
      mañanas húmedas y temperaturas moderadas que imprime en los vinos una elegancia muy particular.
      Elaborado con las uvas Touriga Nacional, Alfrocheiro, Tinta Roriz y Jaén, este coupage de variedades ofrece un vino fresco con recuerdos de fruta madura.`,
    stock: 52,
    price: 10.9,
    image:
      "https://media.drinksandco.com/wines/anselmo-mendes-dao-1322902_e.jpg",
    country: portugal,
    rating: 0,
    category: "Wine",
    subCategory: "Red Wine",
  },
  {
    id: 8,
    name: "Papa Figos Douro 2019",
    description: `Anselmo Mendes Winemaker descubrió su vocación siendo aún un niño. Aunque de casta le viene al galgo, ya que creció en el seno de una familia viticultora 
      de Monçao, un pequeño pueblo entre Galicia y Portugal. Hoy es uno de los elaboradores con más reputación del país y asesora bodegas de dentro y fuera de Portugal.
      Anselmo Mendes Dão 2015, 93 Wine Enthusiast, es un delicado y sedoso tinto que procede de Quinta de Silvares, en la subzona denominada Besteiros, un lugar de
      mañanas húmedas y temperaturas moderadas que imprime en los vinos una elegancia muy particular.
      Elaborado con las uvas Touriga Nacional, Alfrocheiro, Tinta Roriz y Jaén, este coupage de variedades ofrece un vino fresco con recuerdos de fruta madura.`,
    stock: 32,
    price: 8.48,
    image: "https://media.drinksandco.com/wines/papa-figos-douro-1726791_e.jpg",
    country: portugal,
    rating: 0,
    category: "Wine",
    subCategory: "Red Wine",
  },
  {
    id: 9,
    name: "Meandro 2018",
    description: `Anselmo Mendes Winemaker descubrió su vocación siendo aún un niño. Aunque de casta le viene al galgo, ya que creció en el seno de una familia viticultora 
      de Monçao, un pequeño pueblo entre Galicia y Portugal. Hoy es uno de los elaboradores con más reputación del país y asesora bodegas de dentro y fuera de Portugal.
      Anselmo Mendes Dão 2015, 93 Wine Enthusiast, es un delicado y sedoso tinto que procede de Quinta de Silvares, en la subzona denominada Besteiros, un lugar de
      mañanas húmedas y temperaturas moderadas que imprime en los vinos una elegancia muy particular.
      Elaborado con las uvas Touriga Nacional, Alfrocheiro, Tinta Roriz y Jaén, este coupage de variedades ofrece un vino fresco con recuerdos de fruta madura.`,
    stock: 32,
    price: 17.01,
    image: "https://media.drinksandco.com/wines/meandro-1691397_e.jpg",
    country: portugal,
    rating: 0,
    category: "Wine",
    subCategory: "Red Wine",
  },
  {
    id: 10,
    name: "Pousio Reserva 2015",
    description: `Anselmo Mendes Winemaker descubrió su vocación siendo aún un niño. Aunque de casta le viene al galgo, ya que creció en el seno de una familia viticultora 
      de Monçao, un pequeño pueblo entre Galicia y Portugal. Hoy es uno de los elaboradores con más reputación del país y asesora bodegas de dentro y fuera de Portugal.
      Anselmo Mendes Dão 2015, 93 Wine Enthusiast, es un delicado y sedoso tinto que procede de Quinta de Silvares, en la subzona denominada Besteiros, un lugar de
      mañanas húmedas y temperaturas moderadas que imprime en los vinos una elegancia muy particular.
      Elaborado con las uvas Touriga Nacional, Alfrocheiro, Tinta Roriz y Jaén, este coupage de variedades ofrece un vino fresco con recuerdos de fruta madura.`,
    stock: 32,
    price: 13.5,
    image: "https://media.drinksandco.com/wines/pousio-reserva-1433806_e.jpg",
    country: portugal,
    rating: 0,
    category: "Wine",
    subCategory: "Red Wine",
  },
  {
    id: 11,
    name: "Anselmo Mendes Douro Não Convencional 2012",
    description: `Anselmo Mendes Winemaker descubrió su vocación siendo aún un niño. Aunque de casta le viene al galgo, ya que creció en el seno de una familia viticultora 
      de Monçao, un pequeño pueblo entre Galicia y Portugal. Hoy es uno de los elaboradores con más reputación del país y asesora bodegas de dentro y fuera de Portugal.
      Anselmo Mendes Dão 2015, 93 Wine Enthusiast, es un delicado y sedoso tinto que procede de Quinta de Silvares, en la subzona denominada Besteiros, un lugar de
      mañanas húmedas y temperaturas moderadas que imprime en los vinos una elegancia muy particular.
      Elaborado con las uvas Touriga Nacional, Alfrocheiro, Tinta Roriz y Jaén, este coupage de variedades ofrece un vino fresco con recuerdos de fruta madura.`,
    stock: 32,
    price: 17.9,
    image:
      "https://media.drinksandco.com/wines/anselmo-mendes-douro-nao-convencional-1761694_e.jpg",
    country: portugal,
    rating: 0,
    category: "Wine",
    subCategory: "Red Wine",
  },
  {
    id: 11,
    name: "Anselmo Mendes Douro Não Convencional 2012",
    description: `Anselmo Mendes Winemaker descubrió su vocación siendo aún un niño. Aunque de casta le viene al galgo, ya que creció en el seno de una familia viticultora 
      de Monçao, un pequeño pueblo entre Galicia y Portugal. Hoy es uno de los elaboradores con más reputación del país y asesora bodegas de dentro y fuera de Portugal.
      Anselmo Mendes Dão 2015, 93 Wine Enthusiast, es un delicado y sedoso tinto que procede de Quinta de Silvares, en la subzona denominada Besteiros, un lugar de
      mañanas húmedas y temperaturas moderadas que imprime en los vinos una elegancia muy particular.
      Elaborado con las uvas Touriga Nacional, Alfrocheiro, Tinta Roriz y Jaén, este coupage de variedades ofrece un vino fresco con recuerdos de fruta madura.`,
    stock: 32,
    price: 17.9,
    image:
      "https://media.drinksandco.com/wines/anselmo-mendes-douro-nao-convencional-1761694_e.jpg",
    country: portugal,
    rating: 0,
    category: "Wine",
    subCategory: "Red Wine",
  },
  {
    id: 12,
    name: "Blanc Pescador",
    description: `Anselmo Mendes Winemaker descubrió su vocación siendo aún un niño. Aunque de casta le viene al galgo, ya que creció en el seno de una familia viticultora 
      de Monçao, un pequeño pueblo entre Galicia y Portugal. Hoy es uno de los elaboradores con más reputación del país y asesora bodegas de dentro y fuera de Portugal.
      Anselmo Mendes Dão 2015, 93 Wine Enthusiast, es un delicado y sedoso tinto que procede de Quinta de Silvares, en la subzona denominada Besteiros, un lugar de
      mañanas húmedas y temperaturas moderadas que imprime en los vinos una elegancia muy particular.
      Elaborado con las uvas Touriga Nacional, Alfrocheiro, Tinta Roriz y Jaén, este coupage de variedades ofrece un vino fresco con recuerdos de fruta madura.`,
    stock: 32,
    price: 4.25,
    image: "https://media.drinksandco.com/wines/blanc-pescador-661493_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "White Wine",
  },
  {
    id: 13,
    name: "Gazela Vinho Verde",
    description: `El Gazela Vinho Verde es un vino emblemático de Gazela con un coupage de las variedades trajadura, pedernã, loureiro y azal branco.
      Es ideal para acompañar momentos de amigos y ocasiones especiales. Su color verde amarillento, sus sabores cítricos y sus aromas a frutos y flores tropicales lograrán
      cautivar los sentidos de quienes lo beban. Es un vino versátil, muy seductor, con equilibrio, concentración y, tal y como sus creadores han dicho, es un vino que brinda
      por la simplicidad de la vida. Cada sorbo del Gazela Vinho Verde es un respiro de aire fresco y de juventud.
      Además, Gazela Vinho Verde representa lo mejor de lo que la vida tiene por ofrecer. Autenticidad, elegancia, innovación e irreverencia definen
      el universo de la marca. Con sus vinos ligeros, refrescantes y afrutados, la bodega Gazela ha conquistado un territorio exclusivo en el mercado y la preferencia de los consumidores.
      Todo ello se complementa con una audaz identidad visual que es a la vez contemporánea y jovial, acompañada de una estimulante estrategia de comunicación que promueve la convivencia
      y hace de Gazela Vinho Verde la opción obvia para cualquier ocasión.`,
    stock: 32,
    price: 5.3,
    image:
      "https://media.drinksandco.com/wines/gazela-vinho-verde-722954_e.jpg",
    country: portugal,
    rating: 0,
    category: "Wine",
    subCategory: "White Wine",
  },
  {
    id: 14,
    name: "Infinitus Moscatel",
    description: `En el Infinitus Moscatel brillan las características propias de las uvas Moscatel de grano menudo y de la región de Tierra de Castilla. Es producido en las Bodegas
      de la Familia Martínez Bujanda y se caracteriza por su dulzura y por la sensación de frescura y juventud que transmite a quien lo bebe.
      En el Infinitus Moscatel se destacan los aromas florales y frutales y la suavidad y la dulzura que se sienten en el paladar. Es un vino 
      joven pero muy bien logrado que se ha convertido en una de las apuestas de la casa productora por la creación de vinos ecológicos que llevan el alto el
      nombre de la marca y de las bodegas en las que se produce.`,
    stock: 32,
    price: 3.97,
    image:
      "https://media.drinksandco.com/wines/gazela-vinho-verde-722954_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "White Wine",
  },
  {
    id: 15,
    name: "Aimery Blanquette Limoux Brut",
    description: `En el Infinitus Moscatel brillan las características propias de las uvas Moscatel de grano menudo y de la región de Tierra de Castilla. Es producido en las Bodegas
      de la Familia Martínez Bujanda y se caracteriza por su dulzura y por la sensación de frescura y juventud que transmite a quien lo bebe.
      En el Infinitus Moscatel se destacan los aromas florales y frutales y la suavidad y la dulzura que se sienten en el paladar. Es un vino 
      joven pero muy bien logrado que se ha convertido en una de las apuestas de la casa productora por la creación de vinos ecológicos que llevan el alto el
      nombre de la marca y de las bodegas en las que se produce.`,
    stock: 32,
    price: 11.76,
    image:
      "https://media.drinksandco.com/wines/aimery-blanquette-limoux-brut-1042747-s10_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "White Wine",
  },
  {
    id: 16,
    name: "E. Guigal Crozes-Hermitage Blanc 2018",
    description: `En el Infinitus Moscatel brillan las características propias de las uvas Moscatel de grano menudo y de la región de Tierra de Castilla. Es producido en las Bodegas
      de la Familia Martínez Bujanda y se caracteriza por su dulzura y por la sensación de frescura y juventud que transmite a quien lo bebe.
      En el Infinitus Moscatel se destacan los aromas florales y frutales y la suavidad y la dulzura que se sienten en el paladar. Es un vino 
      joven pero muy bien logrado que se ha convertido en una de las apuestas de la casa productora por la creación de vinos ecológicos que llevan el alto el
      nombre de la marca y de las bodegas en las que se produce.`,
    stock: 32,
    price: 21.9,
    image:
      "https://media.drinksandco.com/wines/e-guigal-crozes-hermitage-blanc-1618323_e.jpg",
    country: france,
    rating: 0,
    category: "Wine",
    subCategory: "White Wine",
  },
  {
    id: 16,
    name: "Santero Dilé D. Rosso",
    description: `Si algo tienen los vinos italianos es sabor y color, por ello son unos de los más conocidos y
      venerados del mundo. Elaborado con uva Nebbiolo es el tinto ideal para combinar con quesos y carnes.
      Vino tinto potente y soberbio, que gusta por tener una fragancia exuberante, esencialmente rica en notas de frutos rojos.
      ¡Sorprende a todo el mundo! Pues si te presentas con este vino no solamente descubrimos sabores distintos sino que es puro diseño,
      solo hay que ver la original estructura de la botella que es prácticamente única. Pensado y preferido para todo.`,
    stock: 32,
    price: 9.17,
    image:
      "https://media.drinksandco.com/wines/santero-dile-d-rosso-1120448_e.png",
    country: italy,
    rating: 0,
    category: "Wine",
    subCategory: "Red Wine",
  },
  {
    id: 17,
    name: "Asti Diama Dolce",
    description: `Si algo tienen los vinos italianos es sabor y color, por ello son unos de los más conocidos y
      venerados del mundo. Elaborado con uva Nebbiolo es el tinto ideal para combinar con quesos y carnes.
      Vino tinto potente y soberbio, que gusta por tener una fragancia exuberante, esencialmente rica en notas de frutos rojos.
      ¡Sorprende a todo el mundo! Pues si te presentas con este vino no solamente descubrimos sabores distintos sino que es puro diseño,
      solo hay que ver la original estructura de la botella que es prácticamente única. Pensado y preferido para todo.`,
    stock: 32,
    price: 13.98,
    image: "https://media.drinksandco.com/wines/asti-diama-dolce-1122639_e.png",
    country: italy,
    rating: 0,
    category: "Wine",
    subCategory: "White Wine",
  },
  {
    id: 18,
    name: "Anno Domini Moscato Veneto",
    description: `Si algo tienen los vinos italianos es sabor y color, por ello son unos de los más conocidos y
      venerados del mundo. Elaborado con uva Nebbiolo es el tinto ideal para combinar con quesos y carnes.
      Vino tinto potente y soberbio, que gusta por tener una fragancia exuberante, esencialmente rica en notas de frutos rojos.
      ¡Sorprende a todo el mundo! Pues si te presentas con este vino no solamente descubrimos sabores distintos sino que es puro diseño,
      solo hay que ver la original estructura de la botella que es prácticamente única. Pensado y preferido para todo.`,
    stock: 32,
    price: 6.95,
    image:
      "https://media.drinksandco.com/wines/anno-domini-moscato-veneto-1471615-s10_e.jpg",
    country: italy,
    rating: 0,
    category: "Wine",
    subCategory: "White Wine",
  },
  {
    id: 19,
    name: "Parxet Brut",
    description: `Parxet Brut representa lo esencial y propio del mediterráneo catalán. Un cava caracterizado por la Pansa Blanca, variedad de uva típica de la zona de Alella. Posee finura y elegancia, 
      característica esencial en un buen espumoso de segunda fermentación en botella. El acompañante perfecto cuando lo que se busca es frescor y una marcada presencia de fruta.`,
    stock: 32,
    price: 12.5,
    image: "https://media.drinksandco.com/wines/parxet-brut-159848_e.jpg",
    country: italy,
    rating: 0,
    category: "Wine",
    subCategory: "sparkling Wine",
  },
  {
    id: 20,
    name: "Segura Viudas Reserva Heredad",
    description: `Segura Viudas Reserva Heredad fue creado para marcar estilo y tendencia en la línea 
      de espumosos premium, pensando en conseguir un cava elegante, versátil y gastronómico, y solo se elabora en las mejoras añadas.
      Para ello, Segura Viudas apuesta firmemente por un proceso de creación muy metódico, en el que se utiliza únicamente el llamado mosto flor, 
      por ser el más aromático y delicado, y con un coupage con 9 vinos diferentes, cada uno vinificado por separado para conservar al máximos su 
      características y aportar al conjunto su propio toque. El resultado final es un coupage con magia donde la crianza está presente en aromas y 
      sensaciones sin que esconda el aporte frutal de la variedad Macabeo, que permite conservar un grado de juventud a la larga crianza. Es por todo ello una opción muy
      recomendable para brindis especiales que, además, cuenta con un precio muy atractivo, características que le hacen destacar por encima de la media.`,
    stock: 32,
    price: 14.95,
    image:
      "https://media.drinksandco.com/wines/segura-viudas-reserva-heredad-264481_e.jpg",
    country: italy,
    rating: 0,
    category: "Wine",
    subCategory: "sparkling Wine",
  },
  {
    id: 21,
    name: "Aria Brut Nature",
    description: `Aria Brut Nature es un cava elaborado por la bodega Segura Viudas.
      Se trata de un cava joven, muy bien conseguido, muy honesto y muy fácil de beber. Es un cava para tenerlo listo para el momento menos esperado.
      La Guía Peñín le ha otorgado una nota de 88/100.
      Estamos ante un vino tinto que armoniza de maravilla con aperitivos, arroces de carne, arroces de pescado, asados,
      entrantes suaves, marisco cocido, pastas con salsa de carne, pasteles ligeros (mousses) y postres de frutas.`,
    stock: 32,
    price: 5.95,
    image:
      "https://media.drinksandco.com/wines/segura-viudas-reserva-heredad-264481_e.jpg",
    country: italy,
    rating: 0,
    category: "Wine",
    subCategory: "sparkling Wine",
  },
  {
    id: 21,
    name: "Roger de Flor Brut Nature",
    description: `Hace más de cinco siglos, en el año 1551, comenzó la historia de la familia Codorniú como viñateros. En ese año se encuentra fechado el primer documento existente que deja constancia de la actividad vitícola de Jaume Codorniu. Pero no fue hasta el año 1872 que Josep Raventós, descendiente de Jaume, se convirtió en el pionero creador de la cava. En ese año Josep produjo la primera partida de botellas de vino cava español elaborado con el método tradicional.
      Codorníu es la bodega española más antigua y ocupa el puesto 17 en el mismo ranking mundial. Sus viñedos se extienden por más de tres mil hectáreas, reconocido como el más grande en Europa. Siendo esta bodega la que inició la historia del cava en España y teniendo más de 500 años de experiencia, no queremos que te pierdas la oportunidad de probar una de sus creaciones. Es por eso que te invitamos a probar el Roger de Flor Brut Nature .
      Elaborado con uvas parellada, macabeo y Xarel-lo, este cava es ideal para servir con aperitivos y entrantes o, por qué no, para ser el cierre perfecto de la reunión acompañando los postres. Su elegante color amarillo pajizo pálido cobra vida con el movimiento de las finas burbujas. Los frescos aromas varietales a cítricos, manzana y flor de almendro se complementan perfecto con la suavidad del perfume de la miel, típico de la crianza. Una copa de esta cava garantiza una reunión agradable y con sabor a festejo.`,
    stock: 32,
    price: 5.95,
    image:
      "https://media.drinksandco.com/wines/roger-de-flor-brut-nature-165313_e.jpg",
    country: italy,
    rating: 0,
    category: "Wine",
    subCategory: "sparkling Wine",
  },
  {
    id: 22,
    name: "Moët & Chandon Ice Impérial",
    description: `El primero y uno de los pocos champagnes del mundo creado para ser disfrutado con hielo. Una experiencia novedosa que combina sensaciones divertidas y frescas sin perder el estilo que caracteriza a la prestigiosa firma Moët & Chandon. La Pinot noir aporta estructura y un amplio sabor frutal, 
      la Meunier entrega carnosidad y una sensación fundente en el paladar, mientras que la Chardonnay da el gran toque de frescura.
      Entre el 20 y el 30% de los vinos que se utilizan para la elaboración de este espumoso son reserva, con el fin de potenciar su intensidad, riqueza y constancia.
      Se recomienda servir con tres cubitos de hielo en una copa grande estilo Cabernet junto con ingredientes que acentúen su frescura como hojas de menta, ralladura de uva blanca o lima, mondadura de pepino, jengibre, cardamomo o frutos rojos.`,
    stock: 32,
    price: 61.85,
    image:
      "https://media.drinksandco.com/wines/moet-chandon-ice-imperial-536985_e.jpg",
    country: france,
    rating: 0,
    category: "Wine",
    subCategory: "sparkling Wine",
  },
  {
    id: 23,
    name: "Campolargo Espumante Bruto Rosé 2017",
    description: `Moet & Chandon Ice Impérial Rosé es el primer y único champagne rosado especialmente creado para ser disfrutado con hielo, 
      y en esta versión entrega una dosis extra de placer, frescura y complejidad. Este rosé entrega una multitud de aromas de frutas rojas en cata,
      marcando un estilo que se caracteriza por un deslumbrante y delicioso sabor afrutado, ideal para refrescar cualquier velada.
      Se recomienda servir con tres cubitos de hielo en una copa grande estilo Cabernet junto con ingredientes que acentúen su frescura.`,
    stock: 32,
    price: 73.5,
    image:
      "https://media.drinksandco.com/wines/campolargo-espumante-bruto-rose-1736736_e.jpg",
    country: portugal,
    rating: 0,
    category: "Wine",
    subCategory: "sparkling Wine",
  },
  {
    id: 24,
    name: "Graham's Fine Tawny",
    description: `El Graham's Fine Tawny es un vino Oporto que se produce en las Bodegas Graham's, una compañía que lleva más de 200 años perpetuando los métodos tradicionales y siendo parte fundamental de la industria de los vinos. 
      Su nombre se debe a la ciudad en la que Graham's se asentó al momento de su country, Oporto, en Portugal.
      Este exquisito vino debe su sabor único al contacto del mosto con el oxígeno de los barriles de madera.
      Así, se conservan los sabores del fruto y se combinan con sabores acaramelados y maderosos. La particularidad del Graham's Fine Tawny es que durante su elaboración se interrumpe la 
      fermentación para añadir un aguardiente claro de uva.`,
    stock: 32,
    price: 73.5,
    image:
      "https://media.drinksandco.com/wines/grahams-fine-tawny-165926_e.jpg",
    country: portugal,
    rating: 0,
    category: "Wine",
    subCategory: "Generous Wine",
  },
  {
    id: 25,
    name: "Ferreira Dona Antonia Reserva Tawny",
    description: `El Ferreira Dona Antonia Reserva Tawny que se produce en las Bodegas de Carlos Ferreira, en Portugal, fue calificado con 92 puntos por la prestigiosa publicación Wine Spectator. Es un coupage de seis
      variedades de uvas que se mezclan a la perfección para dar lugar a un vino exquisito y rico en contrastes. Para la vinificación del Ferreira Dona Antonia Reserva Tawny se usa el método tradicional de los vinos Oporto.
      En este método se interrumpe la fermentación, en el momento elegido por el enólogo, para agregar una cantidad de licor vínico que logra conservar la dulzura de las frutas. Finalmente se mezclan vinos de diferentes edades (entre los 4 y los 12 años) y es el producto de la mezcla el que recibe el nombre de Ferreira Dona Antonia Reserva Tawny .`,
    stock: 32,
    price: 14.53,
    image:
      "https://media.drinksandco.com/wines/grahams-fine-tawny-165926_e.jpg",
    country: portugal,
    rating: 0,
    category: "Wine",
    subCategory: "Generous Wine",
  },
  {
    id: 26,
    name: "Ferreira Tawny",
    description: `Beber un vino de Oporto siempre es un placer, y cuando se trata de un oporto de tan buena relación calidad-precio como Ferreira Tawny lo es aún más.
      Su elaboración se basa en el método tradicional de Oporto y siempre bajo la supervisión del enólogo, quien cuida cada uno de los momentos de producción antes de llegar a la botella.
      Disfruta de este Ferreira Tawny durante la sobremesa, acompañando cafés o postres, o bien con quesos de sabor fuerte como el roquefort. Un placer sin igual que, además, Ferreira Tawny te permite obtener por un precio muy razonable.`,
    stock: 23,
    price: 8.36,
    image: "https://media.drinksandco.com/wines/ferreira-tawny-946453_e.jpg",
    country: portugal,
    rating: 0,
    category: "Wine",
    subCategory: "Generous Wine",
  },
  {
    id: 27,
    name: "Tío Pepe",
    description: `"El Sol de Andalucía embotellado. TIO PEPE es más que un vino. Es un estado de ánimo, una actitud frente a la vida, es el sol de Andalucía iluminando los rincones más recónditos del planeta"
      Procede únicamente de uva de la variedad Palomino Fino de pagos históricos que posee Gonzalez Byass desde mas de 100 años.
      Tio Pepe envejece en botas de roble americano y con el particular y único sistema denominado de criaderas y solera. Su crianza biológica, bajo "velo de Flor", le otorga su inconfundible carácter.
      Se recomienda conservar siempre en frío y una vez abierto, consumir lo antes posible.`,
    stock: 23,
    price: 7.25,
    image: "https://media.drinksandco.com/wines/tio-pepe-160674_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "Generous Wine",
  },
  {
    id: 28,
    name: "Fino la Ina",
    description: `La historia de Bodegas Lustau inicia en 1896, en los viñedos de la finca Nuestra Señora de la Esperanza, donde Don José Ruiz Berdejo, secretario judicial y almacenista de vinos, produce sus primeras botellas, las cuales vendía a las grandes bodegas. En 1931, María Ruiz Berdejo Alberti, hija de Don José, adquiere una bodega en el Callejón de Asta, trasladando la producción de los vinos a los terruños del jerez. En los años 40, Don Emilio Lustau Ortega, esposo de María Ruiz, reubica la bodega en el casco antiguo de Jerez de la Frontera, iniciando la comercialización y exportación de sus propias marcas de vinos y brandies. En 1990, la compañía Luis Caballero,
      asume las riendas de la bodega, proyectándola como un referente a nivel mundial. Fino la Ina, es un vino clásico de la Denominación de country Jerez-Xérès-Sherry,
      elaborado a partir del método tradicional de Solera y Criadera, y añejado hasta 5 años en barricas de roble americano. De color amarillo intenso,
      pajizo, deleita con sus fragancias elegantes de almendras y notas minerales. En boca, se degusta seco, estructurado, redondo y armónico, con un final largo y persistente.
      Sirve una copa del distinguido vino Fino la Ina, y brinda con lo más selecto de las variedades Palomino y Palomino Fino, el sabor clásico del jerez que conquistará tu paladar.`,
    stock: 23,
    price: 6.25,
    image: "https://media.drinksandco.com/wines/fino-la-ina-165073_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "Generous Wine",
  },
  {
    id: 29,
    name: "Croft Original 1L",
    description: `El Croft Original es un Pale Cream embotellado en una botella muy diferente a las de los jereces y con etiquetado
       en ingles en honor a la gran afición de los ingleses para estos vinos. El Croft Original es un equilibro entre un vino seco y otro cremoso.`,
    stock: 23,
    price: 9.35,
    image: "https://media.drinksandco.com/wines/croft-original-1l-564318_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "Generous Wine",
  },
  {
    id: 30,
    name: "Néctar Pedro Ximénez",
    description: `El Néctar Pedro Ximénez es un vino de jerez elaborado por González Byass. El viñedo de la uva Pedro Ximénez se encuentra 
      en Jerez en la rotonda 20-70 m sobre el nivel del mar. Sin embargo, la variedad de uva PX sólo ocupa el 5% del sitio de cultivo, mientras que
      los restantes se dedican tradicionalmente a la variedad Palomino. Esta cuestión de hecho convierte a González Byass en la única bodega que cultiva a Pedro Ximénez en Jerez.
      Antes de la vinificación, la uva subyace en un proceso especial. Después de la cosecha, las uvas se colocan en el suelo para que se sequen al sol. El agua en la uva se evapora 
      y la concentración de azúcar aumenta. De esta manera, el PX ofrece una deliciosa base para un jerez encantador, dulce y lleno de cuerpo como este Néctar Pedro Ximénez .`,
    stock: 23,
    price: 8.9,
    image:
      "https://media.drinksandco.com/wines/nectar-pedro-ximenez-1459129_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "Generous Wine",
  },
  {
    id: 31,
    name: "Banyuls Grand Cru Descossy 2017",
    description: `El Néctar Pedro Ximénez es un vino de jerez elaborado por González Byass. El viñedo de la uva Pedro Ximénez se encuentra 
      en Jerez en la rotonda 20-70 m sobre el nivel del mar. Sin embargo, la variedad de uva PX sólo ocupa el 5% del sitio de cultivo, mientras que
      los restantes se dedican tradicionalmente a la variedad Palomino. Esta cuestión de hecho convierte a González Byass en la única bodega que cultiva a Pedro Ximénez en Jerez.
      Antes de la vinificación, la uva subyace en un proceso especial. Después de la cosecha, las uvas se colocan en el suelo para que se sequen al sol. El agua en la uva se evapora 
      y la concentración de azúcar aumenta. De esta manera, el PX ofrece una deliciosa base para un jerez encantador, dulce y lleno de cuerpo como este Néctar Pedro Ximénez .`,
    stock: 23,
    price: 16.35,
    image:
      "https://media.drinksandco.com/wines/banyuls-grand-cru-descossy-1845755-s10_e.jpg",
    country: france,
    rating: 0,
    category: "Wine",
    subCategory: "Generous Wine",
  },
  {
    id: 32,
    name: "Dom Brial Rivesalte Ambre 2011",
    description: `El Néctar Pedro Ximénez es un vino de jerez elaborado por González Byass. El viñedo de la uva Pedro Ximénez se encuentra 
      en Jerez en la rotonda 20-70 m sobre el nivel del mar. Sin embargo, la variedad de uva PX sólo ocupa el 5% del sitio de cultivo, mientras que
      los restantes se dedican tradicionalmente a la variedad Palomino. Esta cuestión de hecho convierte a González Byass en la única bodega que cultiva a Pedro Ximénez en Jerez.
      Antes de la vinificación, la uva subyace en un proceso especial. Después de la cosecha, las uvas se colocan en el suelo para que se sequen al sol. El agua en la uva se evapora 
      y la concentración de azúcar aumenta. De esta manera, el PX ofrece una deliciosa base para un jerez encantador, dulce y lleno de cuerpo como este Néctar Pedro Ximénez .`,
    stock: 23,
    price: 9.17,
    image:
      "https://media.drinksandco.com/wines/dom-brial-rivesalte-ambre-1839347-s10_e.jpg",
    country: france,
    rating: 0,
    category: "Wine",
    subCategory: "Generous Wine",
  },
  {
    id: 33,
    name: "Pascal Labasse Jurançon 2000",
    description: `El Néctar Pedro Ximénez es un vino de jerez elaborado por González Byass. El viñedo de la uva Pedro Ximénez se encuentra 
      en Jerez en la rotonda 20-70 m sobre el nivel del mar. Sin embargo, la variedad de uva PX sólo ocupa el 5% del sitio de cultivo, mientras que
      los restantes se dedican tradicionalmente a la variedad Palomino. Esta cuestión de hecho convierte a González Byass en la única bodega que cultiva a Pedro Ximénez en Jerez.
      Antes de la vinificación, la uva subyace en un proceso especial. Después de la cosecha, las uvas se colocan en el suelo para que se sequen al sol. El agua en la uva se evapora 
      y la concentración de azúcar aumenta. De esta manera, el PX ofrece una deliciosa base para un jerez encantador, dulce y lleno de cuerpo como este Néctar Pedro Ximénez .`,
    stock: 23,
    price: 66.13,
    image:
      "https://media.drinksandco.com/wines/pascal-labasse-jurancon-723003-s10_e.jpg",
    country: france,
    rating: 0,
    category: "Wine",
    subCategory: "Generous Wine",
  },
  {
    id: 34,
    name: "Dom Brial Rivesaltes Tuile 2012",
    description: `El Néctar Pedro Ximénez es un vino de jerez elaborado por González Byass. El viñedo de la uva Pedro Ximénez se encuentra 
      en Jerez en la rotonda 20-70 m sobre el nivel del mar. Sin embargo, la variedad de uva PX sólo ocupa el 5% del sitio de cultivo, mientras que
      los restantes se dedican tradicionalmente a la variedad Palomino. Esta cuestión de hecho convierte a González Byass en la única bodega que cultiva a Pedro Ximénez en Jerez.
      Antes de la vinificación, la uva subyace en un proceso especial. Después de la cosecha, las uvas se colocan en el suelo para que se sequen al sol. El agua en la uva se evapora 
      y la concentración de azúcar aumenta. De esta manera, el PX ofrece una deliciosa base para un jerez encantador, dulce y lleno de cuerpo como este Néctar Pedro Ximénez .`,
    stock: 23,
    price: 10.06,
    image:
      "https://media.drinksandco.com/wines/dom-brial-rivesaltes-tuile-1807070-s10_e.jpg",
    country: france,
    rating: 0,
    category: "Wine",
    subCategory: "Generous Wine",
  },
  {
    id: 35,
    name: "Martinez Marsala Superiore Riserva Secco",
    description: `El Néctar Pedro Ximénez es un vino de jerez elaborado por González Byass. El viñedo de la uva Pedro Ximénez se encuentra 
      en Jerez en la rotonda 20-70 m sobre el nivel del mar. Sin embargo, la variedad de uva PX sólo ocupa el 5% del sitio de cultivo, mientras que
      los restantes se dedican tradicionalmente a la variedad Palomino. Esta cuestión de hecho convierte a González Byass en la única bodega que cultiva a Pedro Ximénez en Jerez.
      Antes de la vinificación, la uva subyace en un proceso especial. Después de la cosecha, las uvas se colocan en el suelo para que se sequen al sol. El agua en la uva se evapora 
      y la concentración de azúcar aumenta. De esta manera, el PX ofrece una deliciosa base para un jerez encantador, dulce y lleno de cuerpo como este Néctar Pedro Ximénez .`,
    stock: 23,
    price: 10.48,
    image:
      "https://media.drinksandco.com/wines/martinez-marsala-superiore-riserva-secco-1502210-s10_e.jpg",
    country: italy,
    rating: 0,
    category: "Wine",
    subCategory: "Generous Wine",
  },
  {
    id: 36,
    name: "Marsala la Canellese Cremovo 1L",
    description: `El Néctar Pedro Ximénez es un vino de jerez elaborado por González Byass. El viñedo de la uva Pedro Ximénez se encuentra 
      en Jerez en la rotonda 20-70 m sobre el nivel del mar. Sin embargo, la variedad de uva PX sólo ocupa el 5% del sitio de cultivo, mientras que
      los restantes se dedican tradicionalmente a la variedad Palomino. Esta cuestión de hecho convierte a González Byass en la única bodega que cultiva a Pedro Ximénez en Jerez.
      Antes de la vinificación, la uva subyace en un proceso especial. Después de la cosecha, las uvas se colocan en el suelo para que se sequen al sol. El agua en la uva se evapora 
      y la concentración de azúcar aumenta. De esta manera, el PX ofrece una deliciosa base para un jerez encantador, dulce y lleno de cuerpo como este Néctar Pedro Ximénez .`,
    stock: 23,
    price: 7.08,
    image:
      "https://media.drinksandco.com/wines/marsala-la-canellese-cremovo-1l-1635353-s10_e.jpg",
    country: italy,
    rating: 0,
    category: "Wine",
    subCategory: "Generous Wine",
  },
  {
    id: 37,
    name: "Astoria Fervo Refrontolo Passito 50cl",
    description: `El Néctar Pedro Ximénez es un vino de jerez elaborado por González Byass. El viñedo de la uva Pedro Ximénez se encuentra 
      en Jerez en la rotonda 20-70 m sobre el nivel del mar. Sin embargo, la variedad de uva PX sólo ocupa el 5% del sitio de cultivo, mientras que
      los restantes se dedican tradicionalmente a la variedad Palomino. Esta cuestión de hecho convierte a González Byass en la única bodega que cultiva a Pedro Ximénez en Jerez.
      Antes de la vinificación, la uva subyace en un proceso especial. Después de la cosecha, las uvas se colocan en el suelo para que se sequen al sol. El agua en la uva se evapora 
      y la concentración de azúcar aumenta. De esta manera, el PX ofrece una deliciosa base para un jerez encantador, dulce y lleno de cuerpo como este Néctar Pedro Ximénez .`,
    stock: 23,
    price: 21.77,
    image:
      "https://media.drinksandco.com/wines/astoria-fervo-refrontolo-passito-50cl-1146583-s10_e.jpg",
    country: italy,
    rating: 0,
    category: "Wine",
    subCategory: "Generous Wine",
  },
  {
    id: 38,
    name: "Cresta Rosa",
    description: `El cantautor Joan Manuel Serrat menciona en su canción "De cuando estuve loco", el paso recio del Tramontana, un viento 
      frío que viene del norte y refresca las tierras graníticas y de pizarra de la comarca del Ampurdán, 
      territorio catalán, para luego fundirse en los Pirineos y la Costa Brava. Este mismo viento mece las ramas de las uvas maduradas del
      tempranillo, merlot y cabernet sauvignon del vino Cresta Rosa , un vino rosado fresco, mediterráneo, chispeante, desenfadado y delirante como las tonadas de Serrat.
      La historia de las bodegas Perelada comienza en 1923, cuando Don Miguel Mateu adquiere el castillo del mismo nombre ubicado
      al norte de Cataluña, dando morada en su interior a una gran colección de arte y una estupenda biblioteca. Haciendo honor al espíritu 
      emprendedor de su padre, decide recuperar las sendas vinícolas de los terrenos colindantes. En los años 60 nace Cresta Rosa , un vino de aguja 
      fresco, espontáneo, vital, con aromas de frutas y flores, excelente para compartir en verano y deleitarse con su sutil cosquilleo.
      Qué delicia beber un Cresta Roja, disfrutando un pescado con los amigos en las playas catalanas, o simplemente en el calor de tu hogar,
       mientras escuchas a Serrat diciendo: "Soy cantor, soy embustero, me gusta el juego y el vino, tengo alma de marinero… qué le voy a hacer si yo, nací en el Mediterráneo".`,
    stock: 23,
    price: 3.98,
    image: "https://media.drinksandco.com/wines/cresta-rosa-661498_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "Pink Wine",
  },
  {
    id: 39,
    name: "Peñascal Rosado",
    description: `Puro éxito! El color rosa brillante de Peñascal Rosado no es sólo un gran ojo-catcher! Este vino espumoso -
      un fabuloso Tempranillo español - convence a los consumidores también a través de su sabor fresco y afrutado, y la acidez distinta que añade un cierto sprightliness. 
      El llamado "Vino de Aguja", en inglés "vino espumoso", es la respuesta española espontánea, fresca y excelente al prosecco italiano y un regalo perfecto para cada partido.
      Para la playa, en vacaciones o una fiesta de primavera en el jardín de su vecino, el Peñascal Rosado es el 
      complemento perfecto para cada ocasión. No dude más y salga de los vinos de cuvée típicos con este Tempranillo puro con una relación precio-valor perfecta. No te arrepentirás!`,
    stock: 23,
    price: 4.5,
    image: "https://media.drinksandco.com/wines/penascal-rosado-371013_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "Pink Wine",
  },
  {
    id: 40,
    name: "Amatista Moscato Rose",
    description: `El Amatista Moscato Rose de las Bodegas Cheste Agraria Cooperativa de la región de Valencia es un vino rosado aguja en el que se
      combinan las variedades Moscatel y Altres, dos de los tipos de uva más dulces y con colores más vivos.
      De un cuidadoso proceso de selección y vinificación se desprende un rosado de la mejor calidad. Un vino que permite disfrutar lo burbujeante del carbónico sin que se pierda la naturalidad de la fruta. 
      El Amatista Moscato Rose se destaca por sus sabores y aromas a bayas rojas y a flores y por el perfecto equilibrio entre la dulzura y la acidez.`,
    stock: 23,
    price: 4.34,
    image: "https://media.drinksandco.com/wines/penascal-rosado-371013_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "Pink Wine",
  },
  {
    id: 41,
    name: "Mateus Rosé The Original",
    description: `La compañía Sogrape Vinhos es el resultado de la valentía y voluntad de un grupo de grandes amigos que decidieron, en el complicado contexto político y económico del año 1942,
      apostar al talento de un hombre visionario, Fernando van Zeller Guedes. Fernando buscaba fundar una empresa de vinos que se diferenciara de las que existían hasta el momento, buscaba una compañía innovadora que pudiera distribuir y posicionar los vinos portugueses en el mundo.
      Actualmente la compañía tiene más de 800 ha de viñas en las principales regiones vinícolas de Portugal y su portafolio incluye las marcas Sandeman y Mateus Rosé, dos de los vinos portugueses más reconocidos en el mundo. Es esta última marca, ampliamente galardonada,
      la que hoy queremos invitarte a descubrir con una copa de Mateus Rosé The Original . Este vino rosado se elabora con un blend de uvas (baga, rufete, bastardo, tinta barroca, touriga nacional y francesa) cultivadas en los viñedos propios de la empresa.
      Su color salmón rosé lo hace sumamente atractivo y fresco a la vista y esta sensación se ve confirmada por el aroma fresco a flores y frutas y las notas a frutos rojos. Una vez en la boca, 
      la frescura del color y el bouquet se complementa perfecto con un sabor ligeramente dulce y una fresca acidez que lo hacen suave y liviano. Un delicioso día de primavera en tu copa.`,
    stock: 23,
    price: 4.95,
    image:
      "https://media.drinksandco.com/wines/mateus-rose-the-original-450288_e.jpg",
    country: portugal,
    rating: 0,
    category: "Wine",
    subCategory: "Pink Wine",
  },
  {
    id: 42,
    name: "Casal Mendes Rosé",
    description: `Como vino de mesa, el Casal Mendes Rosé recorta bastante. Con este frutado rosado, 
      el productor Casal Mendes nos muestra su corazón rosado de Vinho Verde, Portugal. Especialmente recomendable para los amantes de los rosados!`,
    stock: 23,
    price: 4.23,
    image:
      "https://media.drinksandco.com/wines/casal-mendes-rose-1095528_e.png",
    country: portugal,
    rating: 0,
    category: "Wine",
    subCategory: "Pink Wine",
  },
  {
    id: 43,
    name: "Maçanita Touriga Nacional Em Rosé 2021",
    description: `Un rosado elaborado a cuatro manos por los hermanos Maçanita, Joana y António, enólogos, 
      amigos y socios comerciales por más de 10 años y en 14 bodegas. Al fin han cumplido el viejo sueño de crear un vino juntos. Muy varietal, floral y con una gran paleta olfativa.`,
    stock: 23,
    price: 10.9,
    image:
      "https://media.drinksandco.com/wines/macanita-touriga-nacional-em-rose-1905822_e.jpg",
    country: portugal,
    rating: 0,
    category: "Wine",
    subCategory: "Pink Wine",
  },
  {
    id: 44,
    name: "Château Miraval Côtes de Provence Rosé 2020",
    description: `Originario de Correns, el primer pueblo francés cuyos viñedos se reconvirtieron totalmente a ecológico, 
      este rosado cautiva por su perfil extremadamente fresco y afrutado. Aunque su elaboración corre a cargo de la reputada familia vinatera Perrin,
      son los propietarios de la bodega, los actores Angelina Jolie y Brad Pitt,
      quienes acaparan todos los focos y constituyen el perfecto reclamo de un rosé altamente representativo de lo mejor de la Provenza.`,
    stock: 23,
    price: 19.5,
    image:
      "https://media.drinksandco.com/wines/chateau-miraval-cotes-de-provence-rose-1736552_e.jpg",
    country: france,
    rating: 0,
    category: "Wine",
    subCategory: "Pink Wine",
  },
  {
    id: 46,
    name: "Grandin Brut Rose",
    description: `La gran reputación de los vinos franceses se ha construido durante siglos de una tradición que continúa vigente y
      en evolución hasta el día de hoy. Gran ejemplo de ello es el Grandin Brut Rose, un vino que nace en las Bodegas Grandin en la zona de Cremant de Loire.
      Su sabor equilibrado y encantador se debe a una cuidadosa vinificación tradicional en la que se respeta la integridad y la esencia de las Garnacha, Pinot Noir y Gamay Noir que se seleccionan.
      Después de una crianza de un año en botella, se puede disfrutar de un Grandin Brut Rose de color nacarado, un aroma floral y un sabor delicado que cautiva el paladar.`,
    stock: 23,
    price: 17.82,
    image: "https://media.drinksandco.com/wines/grandin-brut-rose-722825_e.png",
    country: france,
    rating: 0,
    category: "Wine",
    subCategory: "Pink Wine",
  },
  {
    id: 47,
    name: "Leduc-Frouin Rosé d'Anjou 2018",
    description: `La gran reputación de los vinos franceses se ha construido durante siglos de una tradición que continúa vigente y
      en evolución hasta el día de hoy. Gran ejemplo de ello es el Grandin Brut Rose, un vino que nace en las Bodegas Grandin en la zona de Cremant de Loire.
      Su sabor equilibrado y encantador se debe a una cuidadosa vinificación tradicional en la que se respeta la integridad y la esencia de las Garnacha, Pinot Noir y Gamay Noir que se seleccionan.
      Después de una crianza de un año en botella, se puede disfrutar de un Grandin Brut Rose de color nacarado, un aroma floral y un sabor delicado que cautiva el paladar.`,
    stock: 23,
    price: 6.99,
    image:
      "https://media.drinksandco.com/wines/leduc-frouin-rose-danjou-1461151-s10_e.jpg",
    country: france,
    rating: 0,
    category: "Wine",
    subCategory: "Pink Wine",
  },
  {
    id: 48,
    name: "Cavicchioli Lambrusco Rosato",
    description: `Cavicchioli Lambrusco Rosato es considerado por la prensa especializada como el mejor rodado del mercado. Está elaborado por Cantine Cavicchili,
      N° 1 en Italia con un 25% del mercado de lambruscos. Utiliza uvas tintas propias de la región que se maceran en frío sólo unas horas para conseguir su particular rosa pálido.
      La Bodega fue fundada en 1928 por Humberto Cavicchioli, en la localidad de San Prospero, próximo a Módena, en el norte de Italia.
      La familia Cavicchioli conserva una vasta experiencia en la elaboración de los vinos Lambrusco de Sorbara, Lambrusco Reggiano, Lambrusco Salamino y Lambrusco Grasparossa.`,
    stock: 23,
    price: 4.59,
    image:
      "https://media.drinksandco.com/wines/cavicchioli-lambrusco-rosato-1357456_e.png",
    country: italy,
    rating: 0,
    category: "Wine",
    subCategory: "Pink Wine",
  },
  {
    id: 49,
    name: "Lambrusco Canti Rosat",
    description: `Canti Estate nos trae este delicioso Lambrusco Canti Rosat, un vino rosado con DO Lambrusco
      elaborado con excelentes castas de lambrusco. Se trata de un rosado fresco, frutal y delicado, perfecto para acompañar
      comidas pero también ideal para beber solo como aperitivo o simplemente por el gusto de beber.
      Lambrusco Canti Rosat es un vino fácil de beber pero no por eso de bajo nivel. Todo lo contrario, 
      sorprende su excelente calidad que lo convierte en una gran elección para compartir un momento inolvidable con amigos. 
      Un vino que sin dudas no puedes dejar de probar.`,
    stock: 23,
    price: 4.66,
    image:
      "https://media.drinksandco.com/wines/lambrusco-canti-rosat-167569-s10_e.jpg",
    country: italy,
    rating: 0,
    category: "Wine",
    subCategory: "Pink Wine",
  },
  {
    id: 50,
    name: "Lambrusco Bellavita Rosado",
    description: `Canti Estate nos trae este delicioso Lambrusco Canti Rosat, un vino rosado con DO Lambrusco
      elaborado con excelentes castas de lambrusco. Se trata de un rosado fresco, frutal y delicado, perfecto para acompañar
      comidas pero también ideal para beber solo como aperitivo o simplemente por el gusto de beber.
      Lambrusco Canti Rosat es un vino fácil de beber pero no por eso de bajo nivel. Todo lo contrario, 
      sorprende su excelente calidad que lo convierte en una gran elección para compartir un momento inolvidable con amigos. 
      Un vino que sin dudas no puedes dejar de probar.`,
    stock: 23,
    price: 3.76,
    image:
      "https://media.drinksandco.com/wines/lambrusco-bellavita-rosado-1288254-s10_e.jpg",
    country: italy,
    rating: 0,
    category: "Wine",
    subCategory: "Pink Wine",
  },
  {
    id: 51,
    name: "Moscatel Iberia",
    description: `El Moscatel Iberia es un homenaje a la apetecida variedad de uvas Moscatel de Alejandría de las Bodegas Málaga Virgen, una empresa fundada en el
      año 1885 en la región de Sierras de Málaga, en España. Es lo que se denomina un Generoso Moscatel, un vino moderno, dulce e intenso.
      La apariencia densa del Moscatel Iberia se consigue después de una crianza de 6 meses en recipientes de roble americano.
      Por sus sabores y aromas se recomienda degustarlo con alimentos de sabor fuerte, especialmente con recetas de repostería a 
      base de chocolate o queso para que resalten sus mejores atributos en el paladar de quien lo bebe.`,
    stock: 23,
    price: 4.3,
    image: "https://media.drinksandco.com/wines/moscatel-iberia-433134_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "Sweet Wine",
  },
  {
    id: 52,
    name: "Moscatel Naranja 50cl",
    description: `Existen muchas posibilidades a la hora de elaborar vinos gracias a todos los ingredientes 
      naturales que se pueden cultivar y manipular. Una prueba de ello es el Moscatel Naranja 50cl , 
      un vino que debe gran parte de su sabor y su aroma a la esencia de las uvas de la variedad Moscatel de Alejandría. Este extracto se utiliza en una infusión de corteza de naranjas amargas.
      Como es de esperarse, el resultado final de este proceso que se lleva a cabo en las Bodegas 
      Málaga Virgen, en la fértil Comarca de La Axarquía, es un Moscatel Naranja 50cl cargado de toques florales y frutales, de sabores dulces y cítricos.`,
    stock: 23,
    price: 9.5,
    image:
      "https://media.drinksandco.com/wines/moscatel-naranja-50cl-1524306_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "Sweet Wine",
  },
  {
    id: 53,
    name: "Malaga Virgen Px",
    description: `Las Bodegas Málaga Virgen iniciaron su recorrido de éxito en la industria vinícola de España a finales del siglo XIX 
      y desde entonces se han empeñado en difundir una tradición centenaria que hace parte fundamental de la identidad de la región.
      Uno de los productos estrella de la casa es el Malaga Virgen Px, un vino con crianza que representa la riqueza y
      la intensidad de las uvas Pedro Ximénez, la cepa por excelencia para elaborar los vinos dulces de Málaga.
      El Malaga Virgen Px es un vino con colores brillantes, con aromas a fruta madura y madera y un sabor aterciopelado, con equilibrio y carácter`,
    stock: 23,
    price: 6.5,
    image: "https://media.drinksandco.com/wines/malaga-virgen-px-651680_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "Sweet Wine",
  },
  {
    id: 54,
    name: "De Muller Moscatel Añejo",
    description: `De Muller Moscatel Añejo, el magistral vino dulce de De Muller, de Terragona,
      conocida mundialmente por sus viñedos y su amplia variedad de vinos de calidad elaborados bajo la Denominación de country de Tarragona y también de Priorat y Terra Alta.
      De Muller Moscatel Añejo está elaborado con uvas seleccionadas de Moscatel de Alejandría, está envejecido
      en roble francés y fue premiado en 2014 con la Medalla de Oro al mejor Moscatel Añejo de Tarragona.`,
    stock: 23,
    price: 7.22,
    image:
      "https://media.drinksandco.com/wines/de-muller-moscatel-anejo-415786_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "Sweet Wine",
  },
  {
    id: 55,
    name: "Sauternes Calvet 50cl 2018",
    description: `De Muller Moscatel Añejo, el magistral vino dulce de De Muller, de Terragona,
      conocida mundialmente por sus viñedos y su amplia variedad de vinos de calidad elaborados bajo la Denominación de country de Tarragona y también de Priorat y Terra Alta.
      De Muller Moscatel Añejo está elaborado con uvas seleccionadas de Moscatel de Alejandría, está envejecido
      en roble francés y fue premiado en 2014 con la Medalla de Oro al mejor Moscatel Añejo de Tarragona.`,
    stock: 23,
    price: 15.58,
    image:
      "https://media.drinksandco.com/wines/sauternes-calvet-50cl-1734577-s10_e.jpg",
    country: france,
    rating: 0,
    category: "Wine",
    subCategory: "Sweet Wine",
  },
  {
    id: 56,
    name: "Domaine de Crabitey 2017",
    description: `Domaine de Crabitey, un coqueto vino dulce de producción limitada obra del vigneron Jacques Berbessou en Premières Côtes de Bordeaux, 
      justo enfrente de Sauternes. Es un vino de carácter artesanal y podríamos decir que familiar: tanto es así que incluso, para la recogida de la uva, Jacques reúne a una quincena de amigos todos los años.
      Destaca además por ser un vino fácil de beber, algo más fresco y menos dulce que su vecino Sauternes, 
      y que combina perfectamente bien con foie, almendras, vieiras o con cocina asiática. Aunque si te apetece beberlo para acompañar un jugoso pollo asado, ¡la combinación te parecerá deliciosa!`,
    stock: 23,
    price: 17.01,
    image:
      "https://media.drinksandco.com/wines/domaine-de-crabitey-1714244_e.jpg",
    country: france,
    rating: 0,
    category: "Wine",
    subCategory: "Sweet Wine",
  },
  {
    id: 57,
    name: "Château Violet Lamothe 2018",
    description: `Domaine de Crabitey, un coqueto vino dulce de producción limitada obra del vigneron Jacques Berbessou en Premières Côtes de Bordeaux, 
      justo enfrente de Sauternes. Es un vino de carácter artesanal y podríamos decir que familiar: tanto es así que incluso, para la recogida de la uva, Jacques reúne a una quincena de amigos todos los años.
      Destaca además por ser un vino fácil de beber, algo más fresco y menos dulce que su vecino Sauternes, 
      y que combina perfectamente bien con foie, almendras, vieiras o con cocina asiática. Aunque si te apetece beberlo para acompañar un jugoso pollo asado, ¡la combinación te parecerá deliciosa!`,
    stock: 23,
    price: 22.0,
    image:
      "https://media.drinksandco.com/wines/chateau-violet-lamothe-1763227-s313_e.jpg",
    country: france,
    rating: 0,
    category: "Wine",
    subCategory: "Sweet Wine",
  },
  {
    id: 58,
    name: "Chantalouette Monbazillac 2017",
    description: `Domaine de Crabitey, un coqueto vino dulce de producción limitada obra del vigneron Jacques Berbessou en Premières Côtes de Bordeaux, 
      justo enfrente de Sauternes. Es un vino de carácter artesanal y podríamos decir que familiar: tanto es así que incluso, para la recogida de la uva, Jacques reúne a una quincena de amigos todos los años.
      Destaca además por ser un vino fácil de beber, algo más fresco y menos dulce que su vecino Sauternes, 
      y que combina perfectamente bien con foie, almendras, vieiras o con cocina asiática. Aunque si te apetece beberlo para acompañar un jugoso pollo asado, ¡la combinación te parecerá deliciosa!`,
    stock: 23,
    price: 22.0,
    image:
      "https://media.drinksandco.com/wines/chantalouette-monbazillac-1627594-s10_e.jpg",
    country: france,
    rating: 0,
    category: "Wine",
    subCategory: "Sweet Wine",
  },
  {
    id: 59,
    name: "Château d'Yquem 2016",
    description: `Domaine de Crabitey, un coqueto vino dulce de producción limitada obra del vigneron Jacques Berbessou en Premières Côtes de Bordeaux, 
      justo enfrente de Sauternes. Es un vino de carácter artesanal y podríamos decir que familiar: tanto es así que incluso, para la recogida de la uva, Jacques reúne a una quincena de amigos todos los años.
      Destaca además por ser un vino fácil de beber, algo más fresco y menos dulce que su vecino Sauternes, 
      y que combina perfectamente bien con foie, almendras, vieiras o con cocina asiática. Aunque si te apetece beberlo para acompañar un jugoso pollo asado, ¡la combinación te parecerá deliciosa!`,
    stock: 23,
    price: 447.1,
    image: "https://media.drinksandco.com/wines/chateau-dyquem-1440635_e.jpg",
    country: france,
    rating: 0,
    category: "Wine",
    subCategory: "Sweet Wine",
  },
  {
    id: 60,
    name: "Moscatel Setubal Alambre 20 Anos 50cl",
    description: `Domaine de Crabitey, un coqueto vino dulce de producción limitada obra del vigneron Jacques Berbessou en Premières Côtes de Bordeaux, 
      justo enfrente de Sauternes. Es un vino de carácter artesanal y podríamos decir que familiar: tanto es así que incluso, para la recogida de la uva, Jacques reúne a una quincena de amigos todos los años.
      Destaca además por ser un vino fácil de beber, algo más fresco y menos dulce que su vecino Sauternes, 
      y que combina perfectamente bien con foie, almendras, vieiras o con cocina asiática. Aunque si te apetece beberlo para acompañar un jugoso pollo asado, ¡la combinación te parecerá deliciosa!`,
    stock: 23,
    price: 39.9,
    image:
      "https://media.drinksandco.com/wines/moscatel-setubal-alambre-20-anos-50cl-1281520_e.jpg",
    country: portugal,
    rating: 0,
    category: "Wine",
    subCategory: "Sweet Wine",
  },
  {
    id: 61,
    name: "Ermelinda Freitas Moscatel de Setubal",
    description: `Domaine de Crabitey, un coqueto vino dulce de producción limitada obra del vigneron Jacques Berbessou en Premières Côtes de Bordeaux, 
      justo enfrente de Sauternes. Es un vino de carácter artesanal y podríamos decir que familiar: tanto es así que incluso, para la recogida de la uva, Jacques reúne a una quincena de amigos todos los años.
      Destaca además por ser un vino fácil de beber, algo más fresco y menos dulce que su vecino Sauternes, 
      y que combina perfectamente bien con foie, almendras, vieiras o con cocina asiática. Aunque si te apetece beberlo para acompañar un jugoso pollo asado, ¡la combinación te parecerá deliciosa!`,
    stock: 23,
    price: 7.33,
    image:
      "https://media.drinksandco.com/wines/ermelinda-freitas-moscatel-de-setubal-1825958-s723_e.jpg",
    country: portugal,
    rating: 0,
    category: "Wine",
    subCategory: "Sweet Wine",
  },
  {
    id: 62,
    name: "Horácio Simões Moscatel Setubal 2017",
    description: `Domaine de Crabitey, un coqueto vino dulce de producción limitada obra del vigneron Jacques Berbessou en Premières Côtes de Bordeaux, 
      justo enfrente de Sauternes. Es un vino de carácter artesanal y podríamos decir que familiar: tanto es así que incluso, para la recogida de la uva, Jacques reúne a una quincena de amigos todos los años.
      Destaca además por ser un vino fácil de beber, algo más fresco y menos dulce que su vecino Sauternes, 
      y que combina perfectamente bien con foie, almendras, vieiras o con cocina asiática. Aunque si te apetece beberlo para acompañar un jugoso pollo asado, ¡la combinación te parecerá deliciosa!`,
    stock: 23,
    price: 6.69,
    image:
      "https://media.drinksandco.com/wines/horacio-simoes-moscatel-setubal-1781406-s723_e.jpg",
    country: portugal,
    rating: 0,
    category: "Wine",
    subCategory: "Sweet Wine",
  },
  {
    id: 63,
    name: "Burmester Sotto Voce Ruby Reserve",
    description: `Domaine de Crabitey, un coqueto vino dulce de producción limitada obra del vigneron Jacques Berbessou en Premières Côtes de Bordeaux, 
      justo enfrente de Sauternes. Es un vino de carácter artesanal y podríamos decir que familiar: tanto es así que incluso, para la recogida de la uva, Jacques reúne a una quincena de amigos todos los años.
      Destaca además por ser un vino fácil de beber, algo más fresco y menos dulce que su vecino Sauternes, 
      y que combina perfectamente bien con foie, almendras, vieiras o con cocina asiática. Aunque si te apetece beberlo para acompañar un jugoso pollo asado, ¡la combinación te parecerá deliciosa!`,
    stock: 23,
    price: 23.0,
    image:
      "https://media.drinksandco.com/wines/burmester-sotto-voce-ruby-reserve-1857436-s251_e.png",
    country: portugal,
    rating: 0,
    category: "Wine",
    subCategory: "Sweet Wine",
  },
  {
    id: 64,
    name: "Taylor's Vargellas Vintage 2015",
    description: `Domaine de Crabitey, un coqueto vino dulce de producción limitada obra del vigneron Jacques Berbessou en Premières Côtes de Bordeaux, 
      justo enfrente de Sauternes. Es un vino de carácter artesanal y podríamos decir que familiar: tanto es así que incluso, para la recogida de la uva, Jacques reúne a una quincena de amigos todos los años.
      Destaca además por ser un vino fácil de beber, algo más fresco y menos dulce que su vecino Sauternes, 
      y que combina perfectamente bien con foie, almendras, vieiras o con cocina asiática. Aunque si te apetece beberlo para acompañar un jugoso pollo asado, ¡la combinación te parecerá deliciosa!`,
    stock: 23,
    price: 103.33,
    image:
      "https://media.drinksandco.com/wines/taylors-vargellas-vintage-1302795-s723_e.jpg",
    country: portugal,
    rating: 0,
    category: "Wine",
    subCategory: "Sweet Wine",
  },
  {
    id: 65,
    name: "Santero 958 Dilé D. Moscato",
    description: `El Santero 958 Dilé D. Moscato está incluido entre el 5% de los mejores vinos de la región de Piamonte, 
      en Italia. Es un monovarietal de uvas Moscatel que se destaca por su aromaticidad y su dulzura.
      Las Bodegas Santero Wine se han encargado de darle personalidad a cada vino y este, sin duda, no es la excepción.
      La botella del Santero 958 Dilé D. Moscato tiene la forma de una mano en relieve, que representa el gesto de calidez 
      y vigorosidad de la gente de la región al compartir una copa de vino y al labrar la tierra y cuidar los cultivos para obtener el apetecido fruto de la vida.`,
    stock: 23,
    price: 7.45,
    image:
      "https://media.drinksandco.com/wines/santero-958-dile-d-moscato-1071905_e.jpg",
    country: italy,
    rating: 0,
    category: "Wine",
    subCategory: "Sweet Wine",
  },
  {
    id: 66,
    name: "Caldirola Fragolino Rosso",
    description: `El Santero 958 Dilé D. Moscato está incluido entre el 5% de los mejores vinos de la región de Piamonte, 
      en Italia. Es un monovarietal de uvas Moscatel que se destaca por su aromaticidad y su dulzura.
      Las Bodegas Santero Wine se han encargado de darle personalidad a cada vino y este, sin duda, no es la excepción.
      La botella del Santero 958 Dilé D. Moscato tiene la forma de una mano en relieve, que representa el gesto de calidez 
      y vigorosidad de la gente de la región al compartir una copa de vino y al labrar la tierra y cuidar los cultivos para obtener el apetecido fruto de la vida.`,
    stock: 23,
    price: 4.45,
    image:
      "https://media.drinksandco.com/wines/caldirola-fragolino-rosso-1442974_e.jpg",
    country: italy,
    rating: 0,
    category: "Wine",
    subCategory: "Sweet Wine",
  },
  {
    id: 67,
    name: "Moscato Santero",
    description: `El Santero 958 Dilé D. Moscato está incluido entre el 5% de los mejores vinos de la región de Piamonte, 
      en Italia. Es un monovarietal de uvas Moscatel que se destaca por su aromaticidad y su dulzura.
      Las Bodegas Santero Wine se han encargado de darle personalidad a cada vino y este, sin duda, no es la excepción.
      La botella del Santero 958 Dilé D. Moscato tiene la forma de una mano en relieve, que representa el gesto de calidez 
      y vigorosidad de la gente de la región al compartir una copa de vino y al labrar la tierra y cuidar los cultivos para obtener el apetecido fruto de la vida.`,
    stock: 23,
    price: 6.99,
    image:
      "https://media.drinksandco.com/wines/moscato-santero-1681773-s313_e.jpg",
    country: italy,
    rating: 0,
    category: "Wine",
    subCategory: "Sweet Wine",
  },
  {
    id: 68,
    name: "Fragolino Santero",
    description: `El Santero 958 Dilé D. Moscato está incluido entre el 5% de los mejores vinos de la región de Piamonte, 
      en Italia. Es un monovarietal de uvas Moscatel que se destaca por su aromaticidad y su dulzura.
      Las Bodegas Santero Wine se han encargado de darle personalidad a cada vino y este, sin duda, no es la excepción.
      La botella del Santero 958 Dilé D. Moscato tiene la forma de una mano en relieve, que representa el gesto de calidez 
      y vigorosidad de la gente de la región al compartir una copa de vino y al labrar la tierra y cuidar los cultivos para obtener el apetecido fruto de la vida.`,
    stock: 23,
    price: 7.5,
    image:
      "https://media.drinksandco.com/wines/fragolino-santero-814751-s313_e.jpg",
    country: italy,
    rating: 0,
    category: "Wine",
    subCategory: "Sweet Wine",
  },
  {
    id: 69,
    name: "Moscato d'Asti Santa Vittoria",
    description: `El Santero 958 Dilé D. Moscato está incluido entre el 5% de los mejores vinos de la región de Piamonte, 
      en Italia. Es un monovarietal de uvas Moscatel que se destaca por su aromaticidad y su dulzura.
      Las Bodegas Santero Wine se han encargado de darle personalidad a cada vino y este, sin duda, no es la excepción.
      La botella del Santero 958 Dilé D. Moscato tiene la forma de una mano en relieve, que representa el gesto de calidez 
      y vigorosidad de la gente de la región al compartir una copa de vino y al labrar la tierra y cuidar los cultivos para obtener el apetecido fruto de la vida.`,
    stock: 47,
    price: 12.5,
    image:
      "https://media.drinksandco.com/wines/moscato-dasti-santa-vittoria-1720935_e.jpg",
    country: italy,
    rating: 0,
    category: "Wine",
    subCategory: "Sweet Wine",
  },
  {
    id: 70,
    name: "Win Tempranillo",
    description: `El Win Tempranillo es un monovarietal de las potentes y concentradas uvas Tempranillo que se cultivan en tierras vallisoletanas.
      Aunque es un vino sin concentración de alcohol, conserva el encanto de las Bodegas Emin Ribera y de los destacados vinos de la Ribera del Duero.
      Luego de someterse a una doble fermentación: alcohólica y maloláctica, se le extrae el alcohol sin alterar sus atractivas cualidades aromáticas y gustativas.
      La crianza del Win Tempranillo tiene una duración de un año al interior de las barricas.
      Es un vino elegante, equilibrado, con sabores dulces a frutos maduros y toques tostados que el Win Tempranillo adquiere durante la crianza.
      `,
    stock: 47,
    price: 7.9,
    image: "https://media.drinksandco.com/wines/win-tempranillo-1334907_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "Non-alcoholic Wine",
  },
  {
    id: 71,
    name: "Freixenet Alcohol Free",
    description: `Freixenet Alcohol Free es un cava sin alcohol elaborado por la bodega Freixenet, que se presenta como un producto comercial después de dos años de investigación, estudios de mercado y desarrollo técnico.
      Se han realizado numerosas pruebas y catas para descubrir el perfil perfecto de un producto innovador para un mercado creciente.
      Un novedoso proceso de elaboración permite desalcoholizar al vino conservando los aromas originales del vino, de manera que obtenemos un producto muy afrutado, con un buen equilibrio entre dulzor y acidez.
      Se trata de un cava ideal para disfrutar con aperitivos.
      `,
    stock: 47,
    price: 6.7,
    image:
      "https://media.drinksandco.com/wines/freixenet-alcohol-free-1239727_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "Non-alcoholic Wine",
  },
  {
    id: 72,
    name: "Natureo 2021",
    description: `Freixenet Alcohol Free es un cava sin alcohol elaborado por la bodega Freixenet, que se presenta como un producto comercial después de dos años de investigación, estudios de mercado y desarrollo técnico.
      Se han realizado numerosas pruebas y catas para descubrir el perfil perfecto de un producto innovador para un mercado creciente.
      Un novedoso proceso de elaboración permite desalcoholizar al vino conservando los aromas originales del vino, de manera que obtenemos un producto muy afrutado, con un buen equilibrio entre dulzor y acidez.
      Se trata de un cava ideal para disfrutar con aperitivos.
      `,
    stock: 47,
    price: 8.5,
    image: "https://media.drinksandco.com/wines/natureo-1886072_e.jpg",
    country: spain,
    rating: 0,
    category: "Wine",
    subCategory: "Non-alcoholic Wine",
  },
  {
    id: 73,
    name: "Lagavulin 16 Years",
    description: `Un gran whisky que todo aficionado debe tener en su colección particular. Se produce desde 1816 en Escocia y ha cosechado numerosos premios en todo
      el mundo gracias a su cuerpo robusto, bien balanceado y ligeramente dulce.
      Lagavulin 16 se añeja durante por lo menos 16 años, algo que sin duda ayuda a construir su carácter. Después de todo, ese sabor intenso no se crea de la noche a la mañana. 
      Su entrada en boca es seca, aunque la intensidad disminuye una vez pasados los primeros segundos, para dar paso a una sensación más suave y aceitosa.
      Recomendamos servir este whisky en un vaso clásico sin más acompañamiento que un poco de agua. Y quienes quieran maridar su copa de Lagavulin, que lo hagan con queso azul,
      anchoas u ostras: ¡es todo un placer!
      `,
    stock: 10,
    price: 89.9,
    image:
      "https://media.drinksandco.com/wines/lagavulin-16-years-556312_e.jpg",
    country: scotland,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 74,
    name: "Talisker 10 Years",
    description: `Desde Escocia tenemos la oportunidad de admirar y deleitarnos con este whisky elaborado por Talisker Distillery. 
      Nace en orillas del oeste de la isla de Skye, siendo el único whisky que se elabora en este lugar. De este whisky podemos destacar que es envejecido durante 10 años. 
      Además de su profundo color ámbar pálido y de los aromas a cítricos, ostras y también a sal de mar.
      La destilería Talisker fue fundada en 1830 por los hermanos MacAskill. Posteriormente, en el año 1925 fue adquirida por Distillers Company y
      actualmente aportan uno de los whiskies con más color y sabor del país.
      `,
    stock: 10,
    price: 38.9,
    image:
      "https://media.drinksandco.com/wines/talisker-10-years-1454687_e.jpg",
    country: scotland,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 75,
    name: "Ardbeg 10 Years",
    description: `Ardbeg 10 Years es uno de los whiskies más apreciados del mundo. No es casualidad, de hecho,
      que ganara el premio a la Mejor Whisky del Año en 2008 de acuerdo con la Biblia de Jim Murray.
      A ello ha contribuido definitivamente a cómo trabaja Ardbeg Distillery: nacida en 1798 y después de varias adversidades,
      cierres temporales y cambios de propiedad, a día de hoy la destilería dispone toda la experiencia acumulada, dos alambiques,
      uno para cada destilación, y el agua de los lagos Arinambeast y Uigedale, clave para conseguir la calidad deseada.
      Por todo ello, Ardbeg 10 Years es venerado en como el whisky más complejo. La turba y sus notas tostadas contribuyen claramente a ese mérito,
      sin que, sin embargo, tengan tanto protagonismo como para no dejar paso a la dulzura natural de la malta. Su equilibrio es perfecto y su volumen de 46º
      de alcohol le da más cuerpo y mayor profundidad. ¡Todas las bondades de un buen whisky en un sola botella!
      `,
    stock: 10,
    price: 50.9,
    image: "https://media.drinksandco.com/wines/ardbeg-10-years-434631_e.png",
    country: scotland,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 76,
    name: "Johnnie Walker Green Label 15 Years",
    description: `Johnnie Walker Green Label o Johnnie Walker etiqueta verde es una mezcla de cuatro maltas individuales: 
      Talisker, Linkwood, Cragganmore y CaoIla. Una mezcla de gran complejidad envejecida 15 años en barricas de roble americano y europeo. 
      Se suspendió la comercialización del Johnnie Walker Green Label en todos los mercados durante 4 años pero ahora está haciendo un retorno global
      como parte de la gama principal de Johnnie Walker. Dentro de la gama de Johnnie Walker Colours, se situa entre el Black Label y el Gold Label Reserve.
      `,
    stock: 10,
    price: 42.0,
    image:
      "https://media.drinksandco.com/wines/johnnie-walker-green-label-15-years-1242435_e.jpg",
    country: scotland,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 77,
    name: "Buchanan's Deluxe Aged 12 Years 1L",
    description: `James Buchanan se mudó a Londres en 1878 para aprovechar una oferta de trabajo en Charles MacKinlay, una empresa de whisky. Usando lo que aprendió como agente, Buchanan creó su propio 
      whisky de mezcla y fundó James Buchanan & Co en 1884 en Glasgow, Escocia. Allí es donde empezó todo. La mezcla única y 
      refinada que ha hecho famoso al whisky de 12 años de Buchanan durante tanto tiempo es el resultado de toda su experiencia. 
      Buchanan's 12 Años 1L es suave y afrutado en el paladar. Su sabor fresco está matizado por notas de naranja y 
      chocolate que lo hacen perfecto para servirlo adornado con una tira de cáscara de naranja. Solo, con hielo o con soda, todas las opciones son perfectas para disfrutar de este icónico whisky.
      `,
    stock: 10,
    price: 38.99,
    image:
      "https://media.drinksandco.com/wines/buchanans-deluxe-aged-12-years-1l-1918908_e.jpg",
    country: scotland,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 78,
    name: "Aberlour 12 Years Double Cask Estuche 1L",
    description: `
      Aberlour 12 años es doblemente envejecido en barricas de Bourbon y Jerez por separado. Los barriles de bourbon aromatizan con vainilla en especial, mientras que los barriles de 
      Jerez proporcionan más fuerza, dulzura y un sabor potente. Los barriles de Jerez, en particular, los de tipo Oloroso proporcionan un color más oscuro al whisky.
      Es un trago liviano pero dulce, con buenos niveles de especias de jerez y muy sabroso. El toque de carbón amargo que reina es bienvenido, ya que llega justo antes de 
      que la experiencia pueda llegar a resultar demasiado dulce, lo que le proporciona un excelente equilibrio.
      Su excelente relación calidad-precio lo convierten en una excelente elección entre los single malts highland/speyside.
      `,
    stock: 10,
    price: 34.86,
    image:
      "https://media.drinksandco.com/wines/aberlour-12-years-double-cask-estuche-1l-1873540_e.jpg",
    country: england,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 79,
    name: "Aberlour 12 Years Double Cask Estuche 1L",
    description: `
      Aberlour 12 años es doblemente envejecido en barricas de Bourbon y Jerez por separado. Los barriles de bourbon aromatizan con vainilla en especial, mientras que los barriles de 
      Jerez proporcionan más fuerza, dulzura y un sabor potente. Los barriles de Jerez, en particular, los de tipo Oloroso proporcionan un color más oscuro al whisky.
      Es un trago liviano pero dulce, con buenos niveles de especias de jerez y muy sabroso. El toque de carbón amargo que reina es bienvenido, ya que llega justo antes de 
      que la experiencia pueda llegar a resultar demasiado dulce, lo que le proporciona un excelente equilibrio.
      Su excelente relación calidad-precio lo convierten en una excelente elección entre los single malts highland/speyside.
      `,
    stock: 10,
    price: 34.86,
    image:
      "https://media.drinksandco.com/wines/aberlour-12-years-double-cask-estuche-1l-1873540_e.jpg",
    country: england,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 80,
    name: "Scapa The Orcadian",
    description: `
      Aberlour 12 años es doblemente envejecido en barricas de Bourbon y Jerez por separado. Los barriles de bourbon aromatizan con vainilla en especial, mientras que los barriles de 
      Jerez proporcionan más fuerza, dulzura y un sabor potente. Los barriles de Jerez, en particular, los de tipo Oloroso proporcionan un color más oscuro al whisky.
      Es un trago liviano pero dulce, con buenos niveles de especias de jerez y muy sabroso. El toque de carbón amargo que reina es bienvenido, ya que llega justo antes de 
      que la experiencia pueda llegar a resultar demasiado dulce, lo que le proporciona un excelente equilibrio.
      Su excelente relación calidad-precio lo convierten en una excelente elección entre los single malts highland/speyside.
      `,
    stock: 10,
    price: 38.03,
    image:
      "https://media.drinksandco.com/wines/scapa-the-orcadian-1290509_e.jpg",
    country: england,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 80,
    name: "The Naked Grouse",
    description: `
      La tradición marca que el whisky de malta blended madure y adquiera su sabor de su crianza en antiguas barricas de bourbon, algo que hizo pensar a los creadores de The Naked Grouse en utilizar, 
      en cambio, barriles de Jerez para añadir otra capa de rico y afrutado sabor a su única mezcla de single malts. Se trata de barriles que nunca han contenido whisky, algo que no solo funciona,
      sino que ofrece una exuberancia de sabores que ha cambiado las perspectivas a la hora de disfrutar del whisky. Este delicioso destilado representa, por lo tanto,
      liberación, ese momento en que puedes ser tú mismo, tu "yo" desnudo, dándote la oportunidad de disfrutar de la vida a tu manera.
      `,
    stock: 10,
    price: 31.3,
    image: "https://media.drinksandco.com/wines/the-naked-grouse-826809_e.jpg",
    country: england,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 80,
    name: "Johnnie Walker 18 Años The Ultimate",
    description: `
      John Walker & Sons no deja de sorprendernos con auténticas obras maestras hechas whisky, cuando pensamos que la originalidad ha terminado nos trae este Johnnie Walker 
      18 Años The Ultimate, la última tentación. Vestido de dorado intenso y profundo, su envolvente aroma a fruta, vainilla y caramelo precede 
      a un sabor suave, dulce y consistente con notas de cereza, almendras y cereal malteado. Johnnie Walker 18 Años The Ultimate es un whisky de 40ª elaborado en Inglaterra a partir de una fina selección 
      de whiskies lentamente madurados a través de numerosos años. Un proceso artesanal y complejo buscando el
       resultado óptimo. Una elección madura, sofisticada y seria para degustar en solitario o en la mejor compañía.
      `,
    stock: 10,
    price: 74.5,
    image:
      "https://media.drinksandco.com/wines/johnnie-walker-18-anos-the-ultimate-1282399-s350_e.jpg",
    country: england,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 81,
    name: "Glen Grant 12 Years 75cl",
    description: `
      John Walker & Sons no deja de sorprendernos con auténticas obras maestras hechas whisky, cuando pensamos que la originalidad ha terminado nos trae este Johnnie Walker 
      18 Años The Ultimate, la última tentación. Vestido de dorado intenso y profundo, su envolvente aroma a fruta, vainilla y caramelo precede 
      a un sabor suave, dulce y consistente con notas de cereza, almendras y cereal malteado. Johnnie Walker 18 Años The Ultimate es un whisky de 40ª elaborado en Inglaterra a partir de una fina selección 
      de whiskies lentamente madurados a través de numerosos años. Un proceso artesanal y complejo buscando el
       resultado óptimo. Una elección madura, sofisticada y seria para degustar en solitario o en la mejor compañía.
      `,
    stock: 10,
    price: 34.46,
    image:
      "https://media.drinksandco.com/wines/glen-grant-12-years-75cl-1215008_e.jpg",
    country: england,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 82,
    name: "Hibiki Harmony",
    description: `
      Para homenajear al primer blend de whisky japonés, Suntory ha lanzado Hibiki Harmony . La nueva expresión se ha creado con más de 12 whiskies de malta y
      de grano de las destilerías de Yamazaki, Hakushu y Chita, y ha sido envejecido en cinco variedades de barriles diferentes.
      Presenta una luminosa harmonía de sabores y aromas tan pura y simultáneamente compleja que más que un whisky es toda una experiencia.
      Destacan considerablemente notas de miel, piel dulce de naranja y chocolate blanco, y viene en una botella de cristal de 24 facetas para simbolizar las 24 estaciones del antiguo calendario lunar japonés.
      ¡Un whisky excepcional que te transportará a otro nivel!
      `,
    stock: 10,
    price: 107.5,
    image:
      "https://media.drinksandco.com/wines/glen-grant-12-years-75cl-1215008_e.jpg",
    country: japan,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 83,
    name: "Nikka From The Barrel 50cl",
    description: `
      El whisky Nikka From The Barrel encarna todo el saber hacer de los maestros mezcladores japoneses. De alta calidad, potente, ambicioso y seductor, esta mezcla combina whisky
      de malta simple y whisky de grano de las destilerías Yoichi y Miyagikyo. Las dos destilerías fueron construidas en 1934 por Masataka Taketsuru, el primer maestro japonés del whisky, en lugares de su país que recordaban a Escocia por sus condiciones ambientales y climáticas.
      Nikka From The Barrel 50cl es un blended whisky creado para ofrecer la riqueza del whisky from the barrel que normalmente sólo los maestros mezcladores pueden disfrutar.
      La icónica botella fue diseñada específicamente para parecerse a un "pequeño ladrillo de whisky", encarnando el rico y fuerte carácter del whisky que contiene.
      `,
    stock: 10,
    price: 49.9,
    image:
      "https://media.drinksandco.com/wines/nikka-from-the-barrel-50cl-881071_e.jpg",
    country: japan,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 84,
    name: "The Yamazaki 12 Years",
    description: `
      Pionero por excelencia de los whiskies de malta japoneses, The Yamazaki 12 años es elegante y sedoso, 
      resultado de la combinación del saber hacer escocés y del refinamiento japonés elaborado en la destilería más antigua de Japón.
      Se trata de un single malt que posee todas las características de la malta delicada e intensa de Speyside,
      rica en aromas obtenidos gracias a los exigentes procesos de destilación y crianza utilizados por Suntory. 
      Hay que considerar que la destilería cuenta con no menos de 12 alambiques de formas diferentes y barricas muy diferentes entre sí para conseguir tal autenticidad.
      El resultado es un whisky que algunos definen como intenso, mientras que otros lo encuentran suave y dulce... 
      Nuestra recomendación es que lo pruebes y puedas forjarte tu propia opinión. Porque lo que es indiscutible es su calidad.
      `,
    stock: 10,
    price: 157.5,
    image:
      "https://media.drinksandco.com/wines/the-yamazaki-12-years-592711_e.jpg",
    country: japan,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 85,
    name: "The Yamazaki Distiller's Reserve",
    description: `
      The Yamazaki Distiller's Reserve es el joven talento de Yamazaki. Un whisky dulce y fácil de beber elaborado a partir de un whisky de menos de 10 años 
      cuyo envejecimiento en barricas de roble francés de Bordeaux y de jerez aportan complejidad. La armonización a todo el conjunto viene de la mano de la madera de mizunara, que aporta el carácter típico japonés de las especias.
      Asimismo, The Yamazaki Distiller's Reserve es una mezcla de varios whiskys Yamazaki premiados y se lanzó en la primavera de 2014, aunque la verdadera 
      diferencia radica en que normalmente las maltas de Suntory obtienen su acabado en barricas de vino de Burdeos y barriles de jerez, y el Distiller's 
      Reserve también contiene Single Malt que madurado en barriles de Mizunara.
      The Yamazaki Distiller's Reserve es ideal para los amantes del whisky japonés. Se puede disfrutar seco o "en las rocas" 
      con cubitos de hielo o con agua con gas, para una experiencia de degustación japonesa.
      `,
    stock: 10,
    price: 127.0,
    image:
      "https://media.drinksandco.com/wines/the-yamazaki-distillers-reserve-1016363_e.jpg",
    country: japan,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 86,
    name: "Nikka Taketsuru Pure Malt",
    description: `
      Masataka Taketsuru fue el pionero de la industria del whisky en Japón. Desde niño, la fragancia del sake rondaba su hogar, y en su adolescencia, aprende el arte de la cerveza 
      en la escuela técnica de Osaka. Inquieto por conocer más del mundo de los licores, viaja a Escocia en 1918, e inicia estudios de química en la Universidad de Glasgow. 
      También experimenta la química del amor, ya que allí conoce a su esposa Rita, de country escocés. El talentoso joven tiene la oportunidad de ser aprendiz en varias destilerías, 
      anotando acuciosamente cada detalle en sus cuadernos de notas, los cuales 
      se convertirían en material de consulta altamente apreciados en la industria del whisky japonés.
      Luego de regresar a Japón, Masataka inicia su propia destilería en Yoichi, Hokkaido, en 1934. En 1940 lanza su whisky Nikka, que también 
      se convertiría en el nombre de la compañía. En la actualidad, el whisky Nikka Taketsuru Pure Malt es una bebida excepcionalmente suave, de color 
      ámbar y visos dorados, fragancias ligeras a cítricos, vainilla, menta, cereal de miel y madera. En la boca, sabores ahumados, tabaco, de gran densidad. Al final, largo, con notas de caramelo y jerez.
      Taketsuru escogió la ciudad de Yoichi, gracias a las similitudes de humedad y clima respecto a Escocia. Con el whisky Nikka Taketsuru Pure Malt ,
       descubrirás los secretos del tradicional whisky escocés, mezclados con la mística y pasión niponas. Ahora sí, a brindar con tus amigos: ¡Kanpai! ¡Salud!
      `,
    stock: 10,
    price: 66.95,
    image:
      "https://media.drinksandco.com/wines/nikka-taketsuru-pure-malt-998526_e.jpg",
    country: japan,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 87,
    name: "Jack Daniel's",
    description: `
      Jack Daniel's proviene de una de las destilerías más grandes del mundo. Sin embargo, todavía se las arreglan para elaborar un Whisky único de Tennessee. ¿Cuál es el secreto? La destilación es similar a la del Bourbon, pero con una diferencia notable: el proceso de filtración.
      De hecho, se filtra a través del carbón de arce. Este proceso se llama "Proceso del Condado de Lincoln" y distingue a Jack Daniel's de Bourbon. También le ofrece un sabor dulce y ahumado.
      En cuanto al country del mito, existen diferentes versiones: una historia cuenta que la receta del Jack Daniel's era la 7ª receta; la otra, que podía tratarse del 7º
      lote de prueba... Quien lo sabía era Mr. Jack, pero sea como sea fue una alegría que no fuera a por la número 8. Porque, desde que en 1866 su creador diera con la fórmula,
      seguimos disfrutando de un fantástico whiskey.
      `,
    stock: 10,
    price: 22.5,
    image: "https://media.drinksandco.com/wines/jack-daniels-1121921_e.jpg",
    country: USA,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 88,
    name: "Jack Daniel's 1L",
    description: `
      Jack Daniel's 1L proviene de una de las destilerías más grandes del mundo. Sin embargo, todavía se las arreglan para elaborar un Whisky único de Tennesse. ¿Cuál es el secreto?
      Jack Daniel's 1L se destila de forma muy similar al bourbon, pero con diferencias notables, como la filtración, que en este caso se realiza a través de carbón de arce sacarino.
      Este proceso se llama "Proceso del Condado de Lincoln" y distingue a Jack Daniel's de Bourbon.
      Además, este proceso le confiere un carácter ligeramente ahumado, suave y una serie de aromas y notas característicos que hacen de Jack Daniel's 1L un destilado único.
      `,
    stock: 10,
    price: 28.5,
    image: "https://media.drinksandco.com/wines/jack-daniels-1l-435889_e.jpg",
    country: USA,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 88,
    name: "Bulleit Bourbon 10 Year Old",
    description: `
      Corría el año 1987 cuando Thomas E. Bulleit Jr. lograba finalmente concretar su sueño de recuperar una vieja receta familiar de bourbon. Con ella nacía Bulleit Distilling Company en homenaje a su tatarabuelo Augustus
      Bulleit que había elaborado high-rye whiskey entre los años 1830-1860 antes de desaparecer sin rastro en el camino de Kentucky a Nueva Orleans. Dejando su exitoso despacho de abogados y arriesgando todo, Thomas recuperó este whisky que casi había desaparecido con su abuelo y conquistó al mundo.
      Hoy queremos invitarte a que tú también conozcas este legendario bourbon de la mano del Bulleit Bourbon 10 Year Old. Para elaborarlo se realiza una mezcla única y perfecta de maíz, 
      centeno y malta de cebada. Estos ingredientes se mezclan con cepas de levaduras excepcionales y agua purísima y filtrada de Kentucky. Para añejarlo por 10 años se usan barricas de roble americano tostado. El resultado es un Bulleit suave, rico y profundo que ha ganado numerosos premios.
      Sírvete un vaso de este elixir de profundo color rojo bermejo que nos regala una puesta de sol de Louisville. Pleno en los aromas de roble que toma de las barricas y con deliciosos sabores a vainilla y frutos secos. Su final es prolongado y rico en notas ahumadas. Sé parte de la leyenda, prueba el whisky que estuvo a punto de desaparecer y que volvió para no irse más.
      `,
    stock: 10,
    price: 38.9,
    image:
      "https://media.drinksandco.com/wines/bulleit-bourbon-10-year-old-1342848_e.jpg",
    country: USA,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 89,
    name: "Sazerac Rye 75cl",
    description: `
      Corría el año 1987 cuando Thomas E. Bulleit Jr. lograba finalmente concretar su sueño de recuperar una vieja receta familiar de bourbon. Con ella nacía Bulleit Distilling Company en homenaje a su tatarabuelo Augustus
      Bulleit que había elaborado high-rye whiskey entre los años 1830-1860 antes de desaparecer sin rastro en el camino de Kentucky a Nueva Orleans. Dejando su exitoso despacho de abogados y arriesgando todo, Thomas recuperó este whisky que casi había desaparecido con su abuelo y conquistó al mundo.
      Hoy queremos invitarte a que tú también conozcas este legendario bourbon de la mano del Bulleit Bourbon 10 Year Old. Para elaborarlo se realiza una mezcla única y perfecta de maíz, 
      centeno y malta de cebada. Estos ingredientes se mezclan con cepas de levaduras excepcionales y agua purísima y filtrada de Kentucky. Para añejarlo por 10 años se usan barricas de roble americano tostado. El resultado es un Bulleit suave, rico y profundo que ha ganado numerosos premios.
      Sírvete un vaso de este elixir de profundo color rojo bermejo que nos regala una puesta de sol de Louisville. Pleno en los aromas de roble que toma de las barricas y con deliciosos sabores a vainilla y frutos secos. Su final es prolongado y rico en notas ahumadas. Sé parte de la leyenda, prueba el whisky que estuvo a punto de desaparecer y que volvió para no irse más.
      `,
    stock: 10,
    price: 41.42,
    image:
      "https://media.drinksandco.com/wines/sazerac-rye-75cl-1344139-s10_e.jpg",
    country: USA,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 90,
    name: "Connemara Original",
    description: `
      Connemara Peated es un single malta irlandés único y actualmente es el único whiskey de turba elaborado en Irlanda. 
      Desde su lanzamiento en 1990, ha ganado muchos fans de otros whiskies de tuba como Laphroaig o Ardbeg. Connemara tiene un
      definido caracter irlandés con agradables notas de miel dulce, cremosa y afrutada que ayudan a equilibrar el ahumado de la turba.
      Es el whiskey irlandés mas premiado, con una gran colección de Medallas de Oro y ha sido honrado como el "Mejor Whiskey Single Malt Irlandés del Mundo".
      `,
    stock: 10,
    price: 25.95,
    image:
      "https://media.drinksandco.com/wines/connemara-original-1272524_e.jpg",
    country: irland,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 91,
    name: "Jameson Black Barrel",
    description: `
      Jameson Black Barrel es un whisky destilado tres veces y después carbonizado dos veces para obtener un sabor intenso y suave. De hecho, este whisky se ha elaborado a modo de tributo a los maestros toneleros de la destilería, quienes -con mucho cuidado y dedicación- dan a los barriles de bourbon una 
      carbonización adicional para así destapar la riqueza y variedad de sabores. El resultado es un perfil de intensos aromas de caramelo cremoso y azúcar 
      y un sabor en el que predomina la dulzura suave de las especias y la vainilla. Tómalo en cócteles como el Whisky Sour clásico (50 ml de Jameson Black Barrel ; 25 ml de jugo de limón recién exprimido; 15 ml de jarabe azucarado; 15 ml de clara de huevo; 3 chorritos de amargo de bayas endrinas Sloe Berry Bitters; una cereza o espiral de limón para decorar) o en otros más novedosos como el Tea Time Express ( 50 ml de Jameson Black Barrel ; 20 ml de jarabe de mermelada de damasco; 10 ml de jugo de limón; 
      50 ml de té Earl Grey helado; 2 chorritos de licor de cardamomo; 2 chorritos de amargo de meloctón). ¡A disfrutar!
      `,
    stock: 10,
    price: 28.84,
    image:
      "https://media.drinksandco.com/wines/jameson-black-barrel-1192793_e.jpg",
    country: irland,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 92,
    name: "Tullamore Dew 1L",
    description: `
      Los terrenos de Tullamore, que significa Gran Colina, son ricos en producción de trigo y generosos en agua pura. Ubicado en el corazón de Irlanda,
      este territorio vio nacer a la tradicional destilería Tullamore en los albores de 1829, gracias al impulso de Michael Molloy. La sigla DEW corresponde a Daniel E.
      Williams, un hombre hecho a pulso y quien junto al Capitán Bernard Daly, tomaron las riendas del negocio en 1887, potenciando su desarrollo y expansión. Conocido como "El legendario whiskey irlandés", Tullamore Dew destaca por su color ambarino, con notas olfativas de vainilla, especias, malta y cítricos.
      Con un ave fénix en su escudo, el poblado de Tullamore resurgió de las cenizas luego de un gran incendio causado por la caída de un globo aerostático. Del mismo modo,
      la destilería Tullamore revive su historia en 2012, después de haber cerrado sus puertas al público por más de seis décadas. Hoy, el público se deleita con un whiskey
      de carácter inigualable, gracias al "Poder del tres": triple destilación en tres tipos de alambiques de cobre; triple mezcla de whiskies irlandeses; triple maduración en barricas
      tradicionales, de jerez y bourbon. Tullamore Dew es un espectáculo de sabores cítricos, con toques sutiles de madera tostada y mantequilla blanda, con un final persistente, suave y balanceado. 
      Saborea la máxima expresión del palpitar del corazón de Irlanda a través del Tullamore Dew: un agasajo de suavidad, exquisitez y finura en todo su esplendor.
      `,
    stock: 10,
    price: 19.05,
    image: "https://media.drinksandco.com/wines/tullamore-dew-1l-437067_e.png",
    country: irland,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 93,
    name: "Jameson",
    description: `
      El whiskey de triple destilación que desde hace más de medio siglo está presente en todo el mundo. El irlandés más conocido, que aúna cuerpo en boca y paso cálido sin perder suavidad.
      `,
    stock: 10,
    price: 18.35,
    image: "https://media.drinksandco.com/wines/jameson-437502_e.jpg",
    country: irland,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 94,
    name: "Kilbeggan Traditional",
    description: `
      La historia de Kilbeggan Distillery volvió a comenzar en el año 1953 cuando la destilería se vio obligada a cerrar sus puertas. 
      Pero la gente de Kilbeggan no estaba dispuesta a aceptar la derrota tan fácil. Si bien entendían que los tiempos habían cambiado y que el destino les había repartido más de lo que podían manejar, no iban a bajar los brazos.
      Así fue que consiguieron la llave y entraron un sábado de 1983 por la mañana, todo estaba lleno de polvo y maderas que se caían, los techos y las ventanas eran un recuerdo.
      Cada uno, con sus herramientas, comenzó a levantar de nuevo la destilería acompañados por el sonido esperanzador del molino de agua. 
      De la destilería renacida surgió el Kilbeggan whiskey que hoy te invitamos a conocer, un blend doblemente destilado y el complemento ideal para cualquier mixer.
      Los aromas a caramelo dulce, vainilla y maderas tostadas nos traen a la memoria las historias nostálgicas de la época en la que la destilería volvió a vivir.
      Es en ese momento en el que la malta delicada y el grano puro van ganado preponderancia. Su sabor, de nougat suave de almendras, melocotón, caramelo y vainilla son los ingredientes 
      perfectos para complementar el momento.
      `,
    stock: 10,
    price: 13.0,
    image:
      "https://media.drinksandco.com/wines/kilbeggan-traditional-1769412_e.jpg",
    country: irland,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 95,
    name: "Redbreast 12 Year Old Estuche",
    description: `
      Con el espíritu tradicional irlandés en su botella, el orgulloso pechi-rojo comenzó su camino en 1857, en Londres. Al principio eran 
      comerciantes de vino bajo el nombre de W & A Gilbey y, para 1874, ya contaban con miles de galones de whisky de famosas destilerías de Dublín.
      Su primera mención oficial como "Redbreast Whisky" fue hacia 1912, en referencia al apodo dado al whisky por el presidente de Gilbey, observador
      aficionado de aves como el Robin Redbreast Whisky. Sus marcas se comercializaban en asociación con JJ, John Jameson & Son. JJ Liqueur "Redbreast Whisky" de 12 años, se convirtió en su estrella.
      Para 1991 fue reintroducida la marca luego de que Gilbey dejó de producir Redbreast Whisky en 1985 pasando a manos de Irish Distillers Limited, en Midleton (Cork), con un cambio de imagen y el 
      perfeccionamiento de su líquido. Su gran ícono ahora alza su vuelo en bellas ilustraciones, simulando el paso del tiempo en sus diferentes rangos, representando la evolución de la marca en el tiempo. 
      Redbreast Whisky procede de una larga tradición, en un excelente Whisky Irlandés Single Pot-Still.
      Redbreast Whisky 12 Años es elaborado con cebada malteada y no malteada, que pasa por triple destilación hasta llegar a sus barricas de roble sazonadas con bourbon y Jerez Oloroso. Su proceso
      lo dota de complejidad aromática y gran suavidad, con notas equilibradas afrutadas y por su puesto ajerezadas, con toques tostados y especiados. Una profundidad de sabores que expresarán 
      en tu paladar toda su historia y tradición.
      `,
    stock: 10,
    price: 52.49,
    image:
      "https://media.drinksandco.com/wines/redbreast-12-year-old-estuche-1547281_e.jpg",
    country: irland,
    rating: 0,
    category: "Whisky",
  },
  {
    id: 96,
    name: "Martin Miller's Gin",
    description: `
      Conocida y aclamada, la Martin Miller's es una ginebra que nace del amor, la obsesión y el poco de locura empleado por su creador cuando, en 1999, relanzaron este gin.
      Su proceso de elaboración es único y respeta al máximo la creación artesanal y la mejora mediante la aplicación de técnicas de destilación de los ingredientes por separado.
      Así, estamos ante una ginebra que ha seducido millones de paladares y que se emplea, cómo no, para elaborar los mejores cócteles. Hoy, Martin Miller's Gin es la ginebra más
      premiada del Mundo en los últimos 10 años gracias a un sabor clásico que ninguna otra ha conseguido superar.
      Porque la herencia de Martin Miller, hombre de una personalidad que aunaba una curiosa combinación de rasgos -tradicionalista de corazón pero a la vez con una intensa atracción
      hacia la aventura y un amor hacia los valores románticos-, le hizo conseguir una ginebra que "tuviera el sabor de una auténtica ginebra", inspirándose en los métodos más tradicionales de elaboración.
      `,
    stock: 10,
    price: 25.9,
    image:
      "https://media.drinksandco.com/wines/martin-millers-gin-437525_e.jpg",
    country: england,
    rating: 0,
    category: "Gin",
  },
  {
    id: 97,
    name: "Brockmans Gin",
    description: `
      Brockmans Gin combina los mejores ingredientes botánicos provenientes de todo el mundo: enebro de la toscana italiana que otorgan aromas
      mediterráneos a pino y lavanda, moras del norte de Europa con un aporte floral único, almendras de España para ofrecer un suave aceite de agradable regusto amargo... Y 
      así hasta completar una lista que incluye corteza de cassia, regaliz, cáscara de limón, cilantro, angélica, cáscara de naranja, y lirio, siempre escogidos pensando en la mezcla perfecta de ingredientes.
      `,
    stock: 10,
    price: 28.5,
    image: "https://media.drinksandco.com/wines/brockmans-gin-850511_e.jpg",
    country: england,
    rating: 0,
    category: "Gin",
  },
  {
    id: 98,
    name: "The London Gin Nº1",
    description: `
      The London Gin Nº1 nace de un concepto de elaboración que cuida al máximo todos los componentes: la elección de los mejores ingredientes; 
      un proceso de producción extremadamente organizado y cuidadoso; un color azul aguamarina que lo hace inmediatamente reconocible; un envase con un diseño moderno, simple y elegante.
      Destilados en pequeños lotes en pleno corazón de Londres, los 12 botánicos que componen la primera ginebra azul producida en Inglaterra provienen de diferentes partes del mundo:
      gracias a ellos los productores aseguran la singularidad y el carácter único de esta ginebra.
      Elegante y suave en el paladar, evoluciona hacia a un largo final marcado por una fresca acidez. Es ideal para tomar con tónica u otros cócteles 
      clásicos, pero también para tomar solo con hielo.
      `,
    stock: 10,
    price: 25.95,
    image: "https://media.drinksandco.com/wines/the-london-gin-n1-837736_e.jpg",
    country: england,
    rating: 0,
    category: "Gin",
  },
  {
    id: 98,
    name: "The London Gin Nº1",
    description: `
      The London Gin Nº1 nace de un concepto de elaboración que cuida al máximo todos los componentes: la elección de los mejores ingredientes; 
      un proceso de producción extremadamente organizado y cuidadoso; un color azul aguamarina que lo hace inmediatamente reconocible; un envase con un diseño moderno, simple y elegante.
      Destilados en pequeños lotes en pleno corazón de Londres, los 12 botánicos que componen la primera ginebra azul producida en Inglaterra provienen de diferentes partes del mundo:
      gracias a ellos los productores aseguran la singularidad y el carácter único de esta ginebra.
      Elegante y suave en el paladar, evoluciona hacia a un largo final marcado por una fresca acidez. Es ideal para tomar con tónica u otros cócteles 
      clásicos, pero también para tomar solo con hielo.
      `,
    stock: 10,
    price: 25.95,
    image: "https://media.drinksandco.com/wines/the-london-gin-n1-837736_e.jpg",
    country: england,
    rating: 0,
    category: "Gin",
  },
  {
    id: 99,
    name: "Mombasa Club Gin",
    description: `
      Mombasa es una ginebra elegante y exclusiva, una ginebra premium con notas cítricas, herbales y de anís. 
      Es del mismo tipo del London Dry, aunque su receta viene de finales del siglo diecinueve. Se destila en lotes,
      utiliza alcohol neutro destilado cuatro veces y añade los botánicos que se describen en una antigua receta de finales del siglo XIX.
      Entre ellos encontramos la raíz de angélica, la corteza de cassia, el clavo, el comino, las bayas de enebro, el limón y muchos otros.
      Así, el resultado es una ginebra que vuelve a los orígenes y nos transporta atrás en el tiempo. Porque, además, Mombasa es un nombre importante en la historia del Reino Unido.
      Mombasa era un punto estratégico muy importante para las rutas comerciales entre el occidente y el oriente. El gran imperio británico construyó una colonia y pronto, en 1885,
      el legendario club de Mombasa para los oficiales de la África Oriental Británica.
      `,
    stock: 10,
    price: 18.3,
    image: "https://media.drinksandco.com/wines/mombasa-club-gin-434478_e.jpg",
    country: england,
    rating: 0,
    category: "Gin",
  },
  {
    id: 100,
    name: "Martin Miller's Westbourne Strength",
    description: `
      La revista internacional The Drinks Report acaba de revelar cuál es la mejor ginebra del Mundo de 2016. Y, os lo aseguramos, 
      vale la pena: se trata de la Martin Miller's Gin Westbourne Strength, una gran ginebra que deja en boca un placentero gusto de enebro y cítricos,
      ideal para cócteles como el Negroni. Destilada en Inglaterra a partir de agua filtrada procedente de Islandia, 
      Martin Miller's Gin Westbourne Strength nos acerca toda la magia de la isla nórdica para que tú la puedas disfrutar en tus cócteles y combinados. ¡Te fascinará!
      `,
    stock: 25,
    price: 45.06,
    image:
      "https://media.drinksandco.com/wines/martin-millers-westbourne-strength-443368_e.jpg",
    country: england,
    rating: 0,
    category: "Gin",
  },
  {
    id: 101,
    name: "Nordés Gin",
    description: `
      La revista internacional The Drinks Report acaba de revelar cuál es la mejor ginebra del Mundo de 2016. Y, os lo aseguramos, 
      vale la pena: se trata de la Martin Miller's Gin Westbourne Strength, una gran ginebra que deja en boca un placentero gusto de enebro y cítricos,
      ideal para cócteles como el Negroni. Destilada en Inglaterra a partir de agua filtrada procedente de Islandia, 
      Martin Miller's Gin Westbourne Strength nos acerca toda la magia de la isla nórdica para que tú la puedas disfrutar en tus cócteles y combinados. ¡Te fascinará!
      `,
    stock: 25,
    price: 23.5,
    image: "https://media.drinksandco.com/wines/nordes-gin-837766_e.jpg",
    country: spain,
    rating: 0,
    category: "Gin",
  },
  {
    id: 102,
    name: "Puerto de Indias Strawberry",
    description: `
      Los ingredientes que le dan el toque de sabor a primavera a este Puerto de Indias Strawberry son definitivamente las fresas de Huelva, 
      no en vano es aquí donde hay la más alta producción de fresas de Europa. Junto al intenso aroma de fresa, encontramos un suave toque de regaliz y una sutil nota cítrica,
      perfectos para harmonizar el sabor de esta ginebra de carácter singular.
      Si quieres difrutar plenamente del sabor de Puerto de Indias Strawberry , puedes tomarlo en forma de cóctel mezclándolo con:
      Cuatro partes de tónica y una parte de ginebra, fresas y hielo. Otra idea aún más dulce es elaborar un combinado con 5cl de Puerto de Indias Strawberry , 
      3cl de puré de fresas y 2cl de licor de arándanos, sin olvidar el hielo, claro.
      ¡Te encantará!
      `,
    stock: 25,
    price: 15.79,
    image: "https://media.drinksandco.com/wines/nordes-gin-837766_e.jpg",
    country: spain,
    rating: 0,
    category: "Gin",
  },
  {
    id: 102,
    name: "Gin Mare",
    description: `
      Gin Mare es quizá una de las marcas españolas de Gin más internacionales. Lanzada en 2010, sus creadores tenían en mente producir una ginebra que 
      reflejara la herencia mediterránea de la marca. Y lo consiguieron gracias a la gama de ingredientes botánicos de country mediterráneo que incluyen albahaca italiana, 
      tomillo griego, romero turco y cítricos españoles. Destilerías M.G elabora Gin Mare
      en un antiguo refugio de monjes en el pequeño pueblo pesquero catalán de Vilanova i la Geltrú. Una ginebra muy refrescante y limpia ideal para gin-tonics herbales con un toque de lima.
      `,
    stock: 25,
    price: 33.9,
    image: "https://media.drinksandco.com/wines/gin-mare-889376_e.jpg",
    country: spain,
    rating: 0,
    category: "Gin",
  },
  {
    id: 103,
    name: "Gin Siderit",
    description: `
      La exquisita delicadeza de la Gin Siderit se debe a la doble maceración y a la triple destilación a la que 
      se someten los elementos florales que le dan country en las instalaciones de las Bodegas Siderit. Esta ginebra es un homenaje a la planta Hibiscus Sabdariffa
      (mejor conocida como hibisco o Flor de Jamaica) originaria y codiciada en tierras africanas por sus propiedades medicinales y por su increíble aromaticidad.
      Son 12 los elementos botánicos, provenientes de tierras europeas, los que se fusionan para dar inigualable riqueza, frescura y complejidad a la Gin Siderit.
      Es una ginebra de Torrelavega que ha ganado reconocimiento gracias a la preferencia de sus consumidores.
      `,
    stock: 25,
    price: 27.5,
    image: "https://media.drinksandco.com/wines/gin-siderit-625710_e.jpg",
    country: spain,
    rating: 0,
    category: "Gin",
  },
  {
    id: 104,
    name: "Gin Bruni Collin's",
    description: `
      Las Destilerías Joaquín Alonso fueron fundadas a mediados de la década de los 40 y 
      en sus comienzos se dedicaron a la destilación de gin y brandy. Es allí donde se produce el Gin Bruni Collin's , una ginebra que nace a partir de licores de cereales que se someten a una
      triple destilación con diferentes hierbas y plantas aromáticas para optimizar los sabores y la concentración del resultado final.
      Por la riqueza que se logra a través del cuidadoso proceso de destilación, el Gin Bruni Collin's es el acompañante ideal para cualquier refresco o zumo de fruta. 
      También se puede disfrutar a plenitud acompañado con un poco de hielo.
      `,
    stock: 15,
    price: 29.75,
    image: "https://media.drinksandco.com/wines/gin-bruni-collins-942677_e.png",
    country: scotland,
    rating: 0,
    category: "Gin",
  },
  {
    id: 105,
    name: "Hendrick's Gin",
    description: `
      La Hendrick's tiene dos retortas únicas y artesanales, la 'Carter-Head' y la 'Bennett'. 
      En 1999 Mr. Gordon y Ms. Gracie calentaron ambas retortas para destilar una rara simfonía de botanicals incluyendo pétalos 
      de rosas y pepino. Crearon así uno de los ginebras más populares del mundo: Hendrick's Gin . Junto con otros 11 productos botánicos,
      la rosa y el pepino se incluyen como un guiño a los jardines británicos tradicionales.
      Además, la botella negra es muy especial también: el color oscuro se inspira de las botellas de la epoca victoriana que usaban los boticarios
      para proteger su contenido de la luz y evitar así que se malmetiera.
      `,
    stock: 15,
    price: 31.9,
    image: "https://media.drinksandco.com/wines/hendricks-gin-434359_e.jpg",
    country: scotland,
    rating: 0,
    category: "Gin",
  },
  {
    id: 106,
    name: "Tanqueray London Dry Gin",
    description: `
      La Ginebra Tanqueray London Dry Gin es uno de las Ginebras más famosas en el mundo. Su sabor es equilibrado y suave con notas de cítricos y enebro. 
      La ginebra favorita de los bartenders para el gintonic perfecto.
      Si bien se originó en Londres, la producción de Tanqueray London Dry Gin se trasladó a Escocia después de la Segunda Guerra Mundial, 
      cuando su destilería de Londres sufrió daños masivos a manos del bombardeo del Eje. Hoy en día, su mercado más grande es Estados Unidos, donde es el gin importado más vendido.
      Si lo quieres probar, inténtalo en una copa balón llena de hielo. Sirve 50ml de Tanqueray London Dry Gin con 150ml de tónica, una rodaja de lima y disfruta.
      `,
    stock: 15,
    price: 16.9,
    image:
      "https://media.drinksandco.com/wines/tanqueray-london-dry-gin-434619_e.jpg",
    country: scotland,
    rating: 0,
    category: "Gin",
  },
  {
    id: 107,
    name: "Tanqueray No. Ten",
    description: `
      En el año 1830 Charles Tanqueray tuvo la suficiente valentía y espíritu innovador para combinar muy buenas ideas con su estilo propio. Así fue que inventó una receta de gin que aún hoy en día es famosa y aplaudida por miles de consumidores. Este típico London Dry Gin es un perfecto reflejo de su proceso de destilación y orígenes en Bloomsbury, 
      Londres. Si bien en sus inicios se elaboraba en Londres, actualmente se produce en Escocia y en el año 2016 desplazó del primer puesto a Beefeater convirtiéndose en la marca líder mundial.
      El London Dry Gin se elabora destilando dos veces el grano y, durante la segunda destilación, se agregan ingredientes botánicos. Si bien la receta del gin Tanqueray se guarda celosamente,
      se sabe que contiene cuatro de los botánicos característicos del gin: enebro, coriandro, raíz de angélica y regaliz.
      Hoy te invitamos a conocer el Tanqueray No. Ten, bautizado así por los alambiques en los que se origina. Este gin se produce en pequeñas partidas
      elaboradas con frutas cítricas frescas. Cada trago es una explosión de sabor que combina perfectamente con agua tónica premium y una rodaja de pomelo rosado.
      Déjate seducir por esta perfecta ginebra nacida de la pasión y la atención al más mínimo detalle.
      `,
    stock: 15,
    price: 29.9,
    image: "https://media.drinksandco.com/wines/tanqueray-no-ten-437461_e.jpg",
    country: scotland,
    rating: 0,
    category: "Gin",
  },
  {
    id: 108,
    name: "Tanqueray Malacca Gin 1L",
    description: `
      En 1769 nació Gordon's, el London Dry Gin número uno en ventas en el mundo, un triple destilado elaborado con bayas de enebro y elementos botánicos. Más tarde, en el siglo siguiente y durante la década de 1830, Charles Tanqueray inventó una receta de gin que continúa siendo la preferida hasta el día de hoy, el Tanqueray London Dry.
      Esta ginebra de estilo único, perfecta inversión y esfuerzo tiene un sabor tan equilibrado que resulta ser el ingrediente insuperable para los gin & tonic y los martini.
      De Tanqueray Gordon & Co, los creadores de estas inconfundibles bebidas, llega a tu vaso el Tanqueray Malacca Gin 1L ,
      una deliciosa ginebra escocesa de 40% vol.alc. y recomendada por todos nuestros clientes que la han probado. Te invitamos a sumarte a la lista de clientes satisfechos y a regalarte una de las mejores ginebras del mundo.
      Disfruta de este elixir escocés transparente con un increíble aroma a frutas y notas cítricas. Degusta el sabor y la calidad de los ingredientes botánicos que se utilizaron 
      para su elaboración. Deleita tu paladar con el gusto del enebro y la suavidad y dulzura que se combinan con un final un tanto amargo.
      Siente lo delicioso de esta receta cuyo secreto se ha protegido por años y cuya fama indiscutida garantiza la perfección.
      `,
    stock: 15,
    price: 23.95,
    image:
      "https://media.drinksandco.com/wines/tanqueray-malacca-gin-1l-649694_e.png",
    country: scotland,
    rating: 0,
    category: "Gin",
  },
  {
    id: 109,
    name: "Tanqueray Flor de Sevilla",
    description: `
      Tanqueray Flor de Sevilla se ha elaborado a base de naranjas de Sevilla agridulces para ofrecer un sabor afrutado y chispeante que se matiza con los 4 extractos de plantas de nuestra clásica ginebra London Dry. 
      Este sabor a Mar Mediterráneo bañado por el sol crea una ginebra increíblemente exquisita y compleja al mismo tiempo.
      Charles Tanqueray fue un innovador y pionero en la búsqueda de la mejor ginebra del mundo. En su búsqueda, hizo acopio de plantas de todo el mundo
      para crear más de 300 recetas. Se cree que sus viajes a los huertos españoles bañados por el sol en la década de 1860 inspiró la creación de una ginebra
      única a base de naranjas de Sevilla.
      `,
    stock: 15,
    price: 18.0,
    image:
      "https://media.drinksandco.com/wines/tanqueray-flor-de-sevilla-1361160_e.jpg",
    country: scotland,
    rating: 0,
    category: "Gin",
  },
  {
    id: 110,
    name: "G'Vine Floraison 1L",
    description: `
      l Gin G'Vine Floraison se elabora a partir de las uvas Ugni Blanc. ¿Por qué Floración? Se llama así debido a 
      que este es el momento de efervescencia de las uvas, cuando -en Junio- las flores de la uva se transforman.
      La Floraison es el momento clave en el ciclo vital de la uva y el nombre perfecto para una ginebra fresco y floral, suave y redondo
      Su carácter y su sabor la han convertido en una ginebra Premium que ha ganado numerosos premios por su calidad.
      `,
    stock: 15,
    price: 18.0,
    image:
      "https://media.drinksandco.com/wines/gvine-floraison-1l-944733_e.png",
    country: france,
    rating: 0,
    category: "Gin",
  },
  {
    id: 111,
    name: "Gin Magellan",
    description: `
      El country de esta ginebra es muy atípico así como sus ingredientes, 
      ya que estamos hablando de una ginebra en la que el enebro no es tan importante como en la mayoría de ginebras.
      Magellan es una ginebra Premium francesa, y como muchos ya habéis intuido, lleva el nombre del comandante español que fue quién inspiró su creación.
      Lamentablemente, este, no consiguió ver el producto acabado ya que murió en una batalla durante el viaje.
      `,
    stock: 15,
    price: 20.75,
    image:
      "https://media.drinksandco.com/wines/gvine-floraison-1l-944733_e.png",
    country: france,
    rating: 0,
    category: "Gin",
  },
  {
    id: 112,
    name: "Citadelle",
    description: `
      Citadelle es la única ginebra del mundo hecha con 19 botánicos provenientes de una receta original que data del año 1771. 
      Con un proceso de destilación complejo, se realizan las infusiones de cada botánico por separado para que éstos conserven todas sus características.
      Perfecto equilibrio entre alcohol y botánicos,
      es la mejor opción para una larga y animada sobremesa. Perfect Serve: Sola con hielo o formando parte de un gin-tonic.
      `,
    stock: 15,
    price: 19.25,
    image: "https://media.drinksandco.com/wines/citadelle-434354_e.jpg",
    country: france,
    rating: 0,
    category: "Gin",
  },
  {
    id: 113,
    name: "G'Vine Nouaison",
    description: `
      La ginebra G'Vine Nouaison , es una ginebra ultra premium más picante e intensa que su hermana G'vine Floraison. 
      Es una ginebra que gracias a la gran concentración de botánicos, amplifica los aromas y las especias.
      `,
    stock: 15,
    price: 35.25,
    image: "https://media.drinksandco.com/wines/gvine-nouaison-434358_e.jpg",
    country: france,
    rating: 0,
    category: "Gin",
  },
  {
    id: 114,
    name: "Ron Barceló Imperial",
    description: `
      Ron Barceló Imperial es un ron de alta gama y de enorme calidad gracias al cuidado y 
      espero puesto tanto en la elección de los ingredientes como en el proceso de elaboración. Se emplea un estricto control
      en la producción de la caña de azúcar, el agua más pura y, para su envejecimiento, se usan las mejores barricas de roble
      americano de primer uso en bourbon. Ello, sumado al bello y óptimo clima de la República Dominicana y a casi un siglo de
      experiencia elaborando rones, convierten a este Ron Barceló Imperial una referencia para los amantes del ron.
      Para disfrutar aún más de su sabor, Servir 50 ml solo o con tres cubitos de hielo, acompañado de una vaina de vainilla 
      natural en una copa tipo Borgoña o vaso corto Imperial. ¡Fantástico!
      `,
    stock: 15,
    price: 31.5,
    image:
      "https://media.drinksandco.com/wines/ron-barcelo-imperial-434531_e.jpg",
    country: Dom,
    rating: 0,
    category: "Ron",
  },
  {
    id: 115,
    name: "Matusalem 15 Años Gran Reserva",
    description: `
      El Matusalem 15 Años Gran Reserva es un Ron Premium de estilo cubano. Envejecido en un sistema de solera, su crianza es de un mínimo de 15 años.
      Es un ron suave y especiado que forma parte de la historia de Cuba desde que en 1872 los hermanos Camp y su socio Evaristo Álvarez 
      comenzaran a producirlo con una fórmula secreta. Hoy en día se elabora en la República Dominicana, fiel al espíritu de sus creadores.
      Matusalem 15 Años Gran Reserva es también conocido como el coñac de los rones, el "apodo" perfecto para este ron complejo, suave y de cálido 
      sabor final a coñac que perdura agradablemente en boca.
      Para disfrutar al máximo de este ron, se recomienda tomarlo solo o con un poco de hielo, pero también es una excelente idea beberlo en cocktails.
      Una propuesta es el clásico Old Fashioned al estilo Matusalem & Co, para cuya elaboración necesitas Matusalem 15 Años Gran Reserva , azúcar de caña, 
      bayas amargas, un poco de zumo de uva y twist de cereza para decorar.
      `,
    stock: 15,
    price: 25.6,
    image:
      "https://media.drinksandco.com/wines/matusalem-15-anos-gran-reserva-434434_e.png",
    country: Dom,
    rating: 0,
    category: "Ron",
  },
  {
    id: 118,
    name: "Ron Barceló Añejo",
    description: `
      El Ron Barceló Añejo es un ron que nació en 1970 caracterizado por ser afrutado con aroma de brandy así que notas de pasas y bayas.
      Gracias a una depurada mezcla de rones superiores añejados pacientemente en barrica de roble, Ron Barceló Añejo es un ron que transmite la filosofía del "Vive ahora", 
      del vive el momento, de aprovechar las oportunidades, de disfrutar de la vida, de los amigos...
      Ideal para tomarlo solo con hielo o combinado, y por supuesto es una fantástica elección como ron para mojito. ¡Ron Barceló Añejo es un ron para disfrutar!
      `,
    stock: 15,
    price: 14.9,
    image:
      "https://media.drinksandco.com/wines/ron-barcelo-anejo-1697844_e.jpg",
    country: Dom,
    rating: 0,
    category: "Ron",
  },
  {
    id: 119,
    name: "Brugal Añejo",
    description: `
      Es el ron emblema más vendido en España y en el Caribe. El único ron creado íntegramente en la República Dominicana, 
      desde el cultivo de caña de azúcar hasta el embotellado, pasando por el proceso de envejecimiento. Ahora nos trae una nueva experiencia 
      con su cambio de imagen que realza el poder de la marca y sus colores emblemáticos. Logo horizontal en lugar de en arco, mejor papel para
      la etiqueta y nueva cápsula metálica. Esta nueva imagen lo postula como un gran ron premium orgullo de un país,
      al que se homenajea con el escudo de la nación aún más visible. La forma de la botella se ha inspirado en la de Brugal 1888.
      `,
    stock: 15,
    price: 14.1,
    image: "https://media.drinksandco.com/wines/brugal-anejo-437577_e.jpg",
    country: Dom,
    rating: 0,
    category: "Ron",
  },
  {
    id: 120,
    name: "Ron Barceló Gran Añejo",
    description: `
      En el año 1930 nació el Ron Barceló. Su creador fue Julian Barceló, un español de Mallorca, fundador de Barceló & Co. en la ciudad dominicana de Santo Domingo.
      La marca se convirtió en muy poco tiempo en referente de los rones de la República Dominicana y la empresa creció hasta convertirse 
      en una de las más prestigiosas del país. Para la década de los ‘80 el Ron Barceló lideraba la lista de los rones elegidos por los dominicanos. 
      Fue entonces que la empresa decidió expandirse más allá de las costas de la isla y conquistar el mundo.
      Pero nada como comprobar lo que te decimos en tu propio vaso, ¿verdad? Es por eso que te invitamos a que pruebes este Ron Barceló Gran Añejo.
      Evocador de la pasión y la sensualidad del pueblo dominicano, la creación de este ron comienza en los cañaverales de la isla, perfectos para la extracción de melaza.
      Regálate el placer de probar este delicioso ron de color ámbar brillante, disfruta ya desde la vista de la sensación de estar viendo una puesta de sol caribeña recostado
      en tu hamaca de playa. Siente en la dulzura del aroma de las especias, el caramelo, la fruta confitada y las pasas, la calidez del atardecer. Saborea la proximidad de la noche con su ataque en la boca y su paso intenso y tostado.
      `,
    stock: 15,
    price: 15.25,
    image:
      "https://media.drinksandco.com/wines/ron-barcelo-gran-anejo-435009_e.jpg",
    country: Dom,
    rating: 0,
    category: "Ron",
  },
  {
    id: 121,
    name: "Dos Maderas 5 + 5",
    description: `
      Dos Maderas 5 + 5 es un ron añejo con triple proceso de crianza. Reposa durante 5 años en tierras
      caribeñas y otros 5 en Jerez de la Frontera, donde el envejecimiento se divide a su vez en dos etapas: 
      3 años de crianza en las botas del Palo Cortado Dos Cortados VOS y 2 años en las de PX Don Guido VOS.
      El resultado es ese color tan especial, ámbar oscuro, y los espectaculares y golosos matices que posee tanto en nariz como en boca:
      delicadas notas a pasas, higos y vainilla. Por su altísima calidad es recomendable su consumo solo o con hielo, pero también se puede
      disfrutar muy bien en combinados premium.
      `,
    stock: 15,
    price: 28.5,
    image: "https://media.drinksandco.com/wines/dos-maderas-5-5-889549_e.jpg",
    country: Dom,
    rating: 0,
    category: "Ron",
  },
  {
    id: 122,
    name: "Arehucas Ron Miel Guanche",
    description: `
      El Arehucas Ron Miel Guanche es un ron fabricado en Gran Canaria. Es gestionado por Destilerías Arehucas, empresa que comenzó a trabajar en 1884.
      compuesto por ron añejado y miel, con lo que se ha conseguido una bebida de buen cuerpo y exquisito sabor ideal para tomarlo solo, en cualquier época del año.
      Se trata de un ron perfecto para tomar frío en chupitos o en vaso largo con hielo.
      `,
    stock: 15,
    price: 8.5,
    image:
      "https://media.drinksandco.com/wines/arehucas-ron-miel-guanche-483772_e.jpg",
    country: Dom,
    rating: 0,
    category: "Ron",
  },
  {
    id: 123,
    name: "Ron Negrita Blanco 1L",
    description: `
      Escuchas la palabra "azúcar" y llegan a tu mente sensaciones, sonidos, fragancias. Recuerdas el trópico, la caña de azúcar, 
      ¡la música de Celia Cruz! Pasa por tu mente su voz melodiosa entonando el estribillo: "Melao de caña, rica su dulzura". Piensas en Cuba, 
      en el caribe, en el mar. Quién creyera que la caña de azúcar ha viajado tanto, desde los países del sudeste asiático y Nueva Guinea. Luego los musulmanes la traen a Occidente, y en su paso por Europa, solo las zonas de Málaga y Motril logran apropiarla.
      Los españoles la traen a América, donde se convierte en su producto estrella. Y quiso la providencia que de la caña naciera el famoso ron, 
      mencionado por primera vez en documentos de la isla de Barbados, con el nombre de kill-devil y rumbullion, que significa "gran tumulto".
      Ahora sabemos que el ron es una bebida que se consume a nivel mundial, y en esta ocasión con un embajador distinguido, notable, aromático y fascinante: el Ron Negrita Blanco. Una bebida transparente, intensa, exótica, con toques de vainilla y frutas. Producida por el grupo Bardinet desde Gelida, Cataluña.
      El Ron Negrita Blanco, así como Celia lo hacía, prende la fiesta con la potencia de sus sabores aromáticos y de largo gusto, ya sea escuchando
       un son cubano o un flamenco andaluz, en cóctel o solo, te trasladará al universo mágico de un auténtico ron de clase mundial.
      `,
    stock: 15,
    price: 9.5,
    image:
      "https://media.drinksandco.com/wines/ron-negrita-blanco-1l-436383_e.jpg",
    country: Dom,
    rating: 0,
    category: "Ron",
  },
  {
    id: 124,
    name: "Legendario Elixir de Cuba",
    description: `
      El Legendario Elixir de Cuba es una especialidad de ron única, ya que el licor que se usa en su elaboración le da un toque extraordinario. Además, 
      el ron no se embotella inmediatamente después del añadido de licor, 
      sino que se almacena aproximadamente un mes después para darle el tiempo de reposo necesario y obtener la máxima expresividad.
      Sus matices especiados, un toque perfecto toque de miel y los sutiles aromas afrutados, unidos a la esmerada elaboración, 
      le convierten en un ron único en esencia y en sabor, puro recuerdo de la isla que te seducirá con sus aromas dulces y suaves. 
      No lo dudes, Legendario Elixir de Cuba evoca el más irresistible sabor a Cuba.
      `,
    stock: 15,
    price: 15.5,
    image:
      "https://media.drinksandco.com/wines/legendario-elixir-de-cuba-653749_e.jpg",
    country: cuba,
    rating: 0,
    category: "Ron",
  },
  {
    id: 125,
    name: "Havana Club Selección de Maestros",
    description: `
      Havana Club Selección de Maestros representa la máxima expresión de la extraordinaria colaboración entre los Maestros roneros de Cuba,
      dirigida por el talentoso don José Navarro, Primer Maestro ronero de Cuba y responsable de rescatar y modernizar la producción de ron genuino cubano,
      un mérito incomparable teniendo en cuenta que para ser Maestro ronero son necesarios más de 15 años de preparación y estudio.
      Bajo la batuta de Navarro, los maestros roneros unieron experiencia y sabiduría para crear este fabuloso Havana Club Selección de Maestros.
      Durante 10 años maduraron sus mejores rones para elegir unánimamente las barricas que formarían parte de la mezcla final y, una vez seleccionadas,
      pasaron a madurar el batch final por un tiempo secreto en barricas escogidas con mucho cuidado y esmero. Así, la fusión perfecta de aromas y sabores
      junto al triple añejamiento acabaron ofreciendo un ron asombroso que hoy nos llega con gran carácter e intensidad.
      Havana Club Selección de Maestros es el resultado del trabajo colectivo de todos los Maestros del ron cubano, que han sabido encontrar 
      la mezcla perfecta en un esfuerzo colaborativo único. Solo en Cuba podía suceder algo así.
      `,
    stock: 15,
    price: 49.9,
    image:
      "https://media.drinksandco.com/wines/havana-club-seleccion-de-maestros-435816_e.jpg",
    country: cuba,
    rating: 0,
    category: "Ron",
  },
  {
    id: 135,
    name: "Havana Club 7 Años",
    description: `
      "La esencia misma del ron cubano añejado del que estoy muy orgulloso." Don José Navarro, Primer Maestro ronero, dedicó estas palabras a Havana Club 7 Años, 
      el primer ron cubano de degustación. En él encontramos un amplio abanico de sabores cubanos como el tabaco cubano, las frutas tropicales, la vainilla o el cacao.
      Los rones que lo componen han envejecido de 7 a 14 años, y parte de cada mezcla se vuelve a poner en barricas para su envejecimiento con vistas a posteriores producciones.
      A este proceso se le llama "proceso de añejamiento continuo" y se empezó a utilizar en 1960 de la mano de los Maestros del Ron cubano, que abrieron con él un nuevo capítulo en la historia del ron.
      Así es como Havana Club 7 Años encarna siempre el espíritu del lote original y desvela los sabores naturales y únicos de su tierra natal, convirtiéndose en una 
      auténtica exploración del sabor que debe tener un ron premium para ser considerado como tal.
      `,
    stock: 15,
    price: 22.5,
    image:
      "https://media.drinksandco.com/wines/havana-club-7-anos-929341_e.jpg",
    country: cuba,
    rating: 0,
    category: "Ron",
  },
  {
    id: 136,
    name: "Havana Club Especial",
    description: `
      Havana Club Especial (conocido también como Havana Club Añejo Especial o Havana Club 5 Años) ha sido creado para momentos inolvidables con tus amigos. 
      Es un ron ámbar de primera calidad único y diferente con un sabor rico, redondo y cremoso que es tan delicioso para su paladar.
      Havana Club Especial es perfecto para preparar el auténtico Cuba Libre, como se sirve en La Habana: Havana Club añejo Especial, 
      cola, cubitos de hielo, jugo de limón y muchos buenos amigos para compartirlo, disfrutarlo y rehacer el mundo.
      `,
    stock: 15,
    price: 14.9,
    image:
      "https://media.drinksandco.com/wines/havana-club-especial-821116_e.jpg",
    country: cuba,
    rating: 0,
    category: "Ron",
  },
  {
    id: 137,
    name: "Havana Club 3 Años",
    description: `
      "Es difícil imaginar un ron blanco con la misma fuerza y complejidad aromática que Havana Club 3 Años".
      Esas son las palabras que el maestro Ronero Don José Navarro le dedica a una de sus creaciones más emblemáticas.
      El carácter único de este ron se obtiene a partir de un envejecimiento natural de al menos 3 años en barriles de roble, 
      que encuentran en el clima tropical de la isla el entorno perfecto. Los dulces sabores de plátano, vainilla y madera ahumada se mezclan perfectamente 
      con la acidez de la lima y la frescura de la menta: es el único ron que le dará a tu mojito el auténtico sabor cubano.
      `,
    stock: 15,
    price: 12.5,
    image:
      "https://media.drinksandco.com/wines/havana-club-3-anos-591334_e.jpg",
    country: cuba,
    rating: 0,
    category: "Ron",
  },
  {
    id: 137,
    name: "Havana Club 3 Años",
    description: `
      "Es difícil imaginar un ron blanco con la misma fuerza y complejidad aromática que Havana Club 3 Años".
      Esas son las palabras que el maestro Ronero Don José Navarro le dedica a una de sus creaciones más emblemáticas.
      El carácter único de este ron se obtiene a partir de un envejecimiento natural de al menos 3 años en barriles de roble, 
      que encuentran en el clima tropical de la isla el entorno perfecto. Los dulces sabores de plátano, vainilla y madera ahumada se mezclan perfectamente 
      con la acidez de la lima y la frescura de la menta: es el único ron que le dará a tu mojito el auténtico sabor cubano.
      `,
    stock: 15,
    price: 12.5,
    image:
      "https://media.drinksandco.com/wines/havana-club-3-anos-591334_e.jpg",
    country: cuba,
    rating: 0,
    category: "Ron",
  },
  {
    id: 138,
    name: "Vodka Beluga Noble",
    description: `
      Vodka Mariinsk Distillery es un vodka Premium elaborado desde 2002. El agua de Siberia
      utilizado para su desarrollo es el elemento clave y representa el 60% de su fórmula. El otro elemento importante de la producción es el 
      brandy de malta que se utiliza cada vez menos para los vodkas ordinarios, debido a su producción laboriosa y cara.
      `,
    stock: 15,
    price: 39.9,
    image:
      "https://media.drinksandco.com/wines/vodka-beluga-noble-837936_e.jpg",
    country: cuba,
    rating: 0,
    category: "Vodka",
  },
  {
    id: 139,
    name: "Moskovskaya",
    description: `
      Moskovskaya es uno de los más reconocidos y representativos sellos de vodka de Rusia y de la Destilería que
      lleva su mismo nombre. Es un licor que se elabora con los ingredientes y métodos que tienen ya más de un siglo de tradición y que se han extendido a nivel mundial.
      Luego de mezclar los mejores granos seleccionados con agua purificada, se fermentan por un periodo de tres días.
      Posteriormente se inicia un proceso triple de destilación que da como resultado un vodka fuerte, complejo y contundente.
      Finalmente el Moskovskaya se filtra y personifica la sofisticación y la elegancia que caracterizan al enorme país europeo de donde procede.
      `,
    stock: 15,
    price: 9.06,
    image:
      "https://media.drinksandco.com/wines/vodka-beluga-noble-837936_e.jpg",
    country: russian,
    rating: 0,
    category: "Vodka",
  },
  {
    id: 140,
    name: "Moskovskaya",
    description: `
      Moskovskaya es uno de los más reconocidos y representativos sellos de vodka de Rusia y de la Destilería que
      lleva su mismo nombre. Es un licor que se elabora con los ingredientes y métodos que tienen ya más de un siglo de tradición y que se han extendido a nivel mundial.
      Luego de mezclar los mejores granos seleccionados con agua purificada, se fermentan por un periodo de tres días.
      Posteriormente se inicia un proceso triple de destilación que da como resultado un vodka fuerte, complejo y contundente.
      Finalmente el Moskovskaya se filtra y personifica la sofisticación y la elegancia que caracterizan al enorme país europeo de donde procede.
      `,
    stock: 15,
    price: 9.06,
    image: "https://media.drinksandco.com/wines/moskovskaya-479534_e.jpg",
    country: russian,
    rating: 0,
    category: "Vodka",
  },
  {
    id: 141,
    name: "Russian Standard",
    description: `
      Dmitri Mendeleyev, prestigioso químico ruso creador de la tabla periódica de los elementos, estudió el balance ideal para el vodka, y llegó a la conclusión que el
      40% de alcohol es la proporción correcta, la cual queda establecida en 1894 por el zar Alexander III como la norma para toda la nación. Russian Standard 
      ,fiel al descubrimiento del brillante científico, trae una mezcla de sabores de trigo natural y pimienta que perduran en el paladar, potenciado aún más en un cóctel de frutas y mucho hielo.
      Russian Standard , de transparencia total y cuerpo completo, fluye desde las aguas glaciares del lago Ladoga, en inmediaciones de la ciudad de San Petersburgo:
      lugar concebido como la "ventana a occidente", el epicentro de la Revolución Rusa y el lugar donde Mendeleyev desarrolla a plenitud su ilustre carrera. Las ventanas siguen abiertas de par en par, dando testimonio fehaciente al universo de que el vodka seguirá siendo la bebida insignia rusa. Su magnífico embajador, Russian Standard , a la altura de los mejores vodkas del mundo, te ofrecerá una experiencia gratificante, única, suave, que solo la tierra negra esteparia rusa y su trigo de invierno pueden provocar.
      Disfruta ya un Russian Standard , el vodka destilado con los más exigentes estándares, que te ofrecerán un altísimo grado de pureza y suavidad, casi celestial.
      Será una revolución para tus sentidos, una ventana que te conectará al mundo del vodka ruso por excelencia.
      `,
    stock: 15,
    price: 10.75,
    image: "https://media.drinksandco.com/wines/russian-standard-437169_e.jpg",
    country: russian,
    rating: 0,
    category: "Vodka",
  },
  {
    id: 142,
    name: "Smirnoff 1L",
    description: `
      El Vodka Smirnoff Red Label con su grado alcohólico de sólo 37.5% es uno de los vodkas más suaves. Creado en 1864, es de mayor venta de vodka premium del mundo. Perfecto para cócteles.
      `,
    stock: 15,
    price: 12.9,
    image: "https://media.drinksandco.com/wines/smirnoff-1l-436890_e.jpg",
    country: russian,
    rating: 0,
    category: "Vodka",
  },
  {
    id: 143,
    name: "Stolichnaya Elit",
    description: `
      Stolichnaya Elit es un vodka premium que proviene de la granja de Stolichnaya en Tambov, Rusia, elaborado a través de 4 destilaciones.
      Te sorprenderá saber que se mezcla únicamente con agua de los Himalayas, los Andes y otros lugares remotos. Se mantiene a 15°C antes de hacerlo pasar
      por un filtro especial de planta donde se ultra-congela. El proceso de elaboración es tan esmerado que después de tres destilaciones a fuego lento, el alcohol se mezcla con agua helada a menos
      de 18°C para que la densidad del líquido aumente, logrando que todas las impurezas se congelen y se separen, dando como resultado un excelente vodka.
      `,
    stock: 15,
    price: 59.99,
    image: "https://media.drinksandco.com/wines/stolichnaya-elit-436958_e.jpg",
    country: russian,
    rating: 0,
    category: "Vodka",
  },
  {
    id: 144,
    name: "Absolut Vodka 1L",
    description: `
      Absolut es uno de los vodkas más populares del mundo y su botella es considerada actualmente un icono y obra maestra del diseño.
      Está inspirada en un frasco medicinal del siglo XVIII y ha servido de inspiración al mismísimo Andy Warhol, quien imaginó auténticas obras de arte en vidrio.
      `,
    stock: 15,
    price: 17.0,
    image: "https://media.drinksandco.com/wines/absolut-vodka-1l-920226_e.jpg",
    country: suecia,
    rating: 0,
    category: "Vodka",
  },
  {
    id: 145,
    name: "Absolut Mango 1L",
    description: `
      Absolut fue pionera en el mercado del vodka con sabor a mediados de los años ochenta con el lanzamiento del ya
      legendario Absolut Absolut Citron y Peppar. Lo que comenzó como una pequeña gama de solo dos productos, ahora se ha convertido en una colección de variados sabores. 
      Absolut Mango recuerda en nariz al mango maduro, y en boca también se aprecian notas de maracuyá y piña. Es dulce y muy frutal.
      `,
    stock: 15,
    price: 15.65,
    image: "https://media.drinksandco.com/wines/absolut-mango-1l-434789_e.jpg",
    country: suecia,
    rating: 0,
    category: "Vodka",
  },
  {
    id: 146,
    name: "Absolut Raspberri 1L",
    description: `
      Las frambuesas salvajes abundan en las colinas suecas, así que la presentación de Absolut Raspberri 1L es algo natural que no podía faltar.
      Y en 2004 se hizo realidad, 25 años después de la aparición de Absolut Vodka.
      `,
    stock: 15,
    price: 15.56,
    image:
      "https://media.drinksandco.com/wines/absolut-raspberri-1l-434794_e.jpg",
    country: suecia,
    rating: 0,
    category: "Vodka",
  },
  {
    id: 147,
    name: "Absolut Apeach 1L",
    description: `
      El melocotón, de la misma familia que las cerezas y los albaricoques, 
      fascina por su piel de terciopelo y su sabor dulce. Pero, a pesar de su belleza, el melocotón no suele ser un ingrediente habitual en las bebidas.
      El lanzamiento de Absolut Apeach en 2005 tenía como objetivo darle la vuelta a la situación, y pronto surgieron devotos en todo el mundo.
      `,
    stock: 15,
    price: 17.23,
    image: "https://media.drinksandco.com/wines/absolut-apeach-1l-434790_e.png",
    country: suecia,
    rating: 0,
    category: "Vodka",
  },
  {
    id: 148,
    name: "Absolut Mode Edition",
    description: `
      Absolut es especialista en diseñar ediciones especiales de sus productos, que han ganado popularidad a nivel mundial.
      En el caso del Absolut Mode Edition hablamos de un vodka sueco preparado según los métodos tradicionales de la compañía en un atractivo envase.
      `,
    stock: 15,
    price: 16.64,
    image:
      "https://media.drinksandco.com/wines/absolut-mode-edition-463770_e.jpg",
    country: suecia,
    rating: 0,
    category: "Vodka",
  },
  {
    id: 149,
    name: "Absolut Mode Edition",
    description: `
      Absolut es especialista en diseñar ediciones especiales de sus productos, que han ganado popularidad a nivel mundial.
      En el caso del Absolut Mode Edition hablamos de un vodka sueco preparado según los métodos tradicionales de la compañía en un atractivo envase.
      `,
    stock: 15,
    price: 16.64,
    image:
      "https://media.drinksandco.com/wines/absolut-mode-edition-463770_e.jpg",
    country: suecia,
    rating: 0,
    category: "Vodka",
  },
  {
    id: 150,
    name: "Belvedere Pure 1L",
    description: `
      Ya desde el siglo XVI los vodkas que se precian de ser buenos, se elaboran con centeno. 
      Siguiendo esta tradición y elevando aún más el nivel, el Belvedere se elabora únicamente con centeno oro Dankowski, algo que le da un carácter e identidad únicos.
      `,
    stock: 15,
    price: 39.95,
    image: "https://media.drinksandco.com/wines/belvedere-pure-1l-634403_e.jpg",
    country: polonia,
    rating: 0,
    category: "Vodka",
  },
  {
    id: 151,
    name: "Zubrówka Vodka 1L",
    description: `
      Zubrówka es un vodka procedente de Polonia de sabor inigualable destilado a partir de hierba de bisonte y
      de una esmerada producción. ¿Qué es lo que lo hace tan especial? Precisamente el hecho de ser destilado a partir de hierba de bisonte, 
      un ingrediente que aporta a este vodka un toque de vainilla muy particular. Además, se trata de una hierba que procede exclusivamente 
      del bosque Bialowieza, en un lugar tan recóndito que solo lo conocen unas pocas familias -que, además, se pasan el secreto de generación en generación.
      `,
    stock: 15,
    price: 16.42,
    image: "https://media.drinksandco.com/wines/belvedere-pure-1l-634403_e.jpg",
    country: polonia,
    rating: 0,
    category: "Vodka",
  },
  {
    id: 152,
    name: "Belvedere Intense 1L",
    description: `
      La destilería Polmos Żyrardów se fundó en el año 1910 en la ciudad de Żyrardów, al oeste de Varsovia. Con el paso del tiempo la 
      destilería demostró su resiliencia tras sobrevivir a las dos guerras mundiales y a un voraz incendio, todo esto mientras la excelencia y fama de sus destilados 
      comenzaba a hacerse un lugar dentro y fuera de territorio polaco. Ocho décadas después de su nacimiento,
      la destilería sacó al mercado el vodka Belvedere, un vodka de lujo inspirado en el castillo homónimo de Varsovia.
      `,
    stock: 15,
    price: 53.9,
    image:
      "https://media.drinksandco.com/wines/belvedere-intense-1l-556752_e.jpg",
    country: polonia,
    rating: 0,
    category: "Vodka",
  },
  {
    id: 153,
    name: "U'luvka Vodka",
    description: `
      U'luvka Vodka es un vodka polaco de categoría premium que se obtiene de la destilación artesanal del trigo de centeno más fino de Polonia. Sus principales diferenciales son su pureza
       y su carácter ya que está producido sólo con cereales nobles, agua de pozo cristalino y su receta legendaria.
      `,
    stock: 15,
    price: 53.9,
    image:
      "https://media.drinksandco.com/wines/belvedere-intense-1l-556752_e.jpg",
    country: polonia,
    rating: 0,
    category: "Vodka",
  },
  {
    id: 153,
    name: "Grey Goose Vodka 1L",
    description: `
      Vodka Grey Goose Vodka 1L es posiblemente uno de los vodkas con mejor sabor del mundo.
      Creado a partir de la nada, Grey Goose Vodka 1L captura las características naturales de los mejores ingredientes, otorgándole así un carácter excepcional tanto en sabor como en calidad.
      Y ello es gracias al compromiso de Sidney Frank y François Thibault, que unieron esfuerzos por crear un vodka a la altura de la imagen de calidad de Francia.
      `,
    stock: 15,
    price: 39.9,
    image:
      "https://media.drinksandco.com/wines/grey-goose-vodka-1l-435793_e.jpg",
    country: france,
    rating: 0,
    category: "Vodka",
  },
  {
    id: 154,
    name: "Cîroc Vodka",
    description: `
      Cîroc Vodka es el más sofisticado del mundo. Realizado exclusivamente a partir de uvas Mauzac Blanc y Ugni Blanc de primera calidad para ofrecer una experiencia 
      exquisitamente suave, fresca e innovadora. En el vodka Cîroc se utilizan la maceración, la fermentación y el almacenamiento en frío, además de destilarse cinco veces.
      `,
    stock: 15,
    price: 32.9,
    image: "https://media.drinksandco.com/wines/ciroc-vodka-434383_e.jpg",
    country: france,
    rating: 0,
    category: "Vodka",
  },
  {
    id: 155,
    name: "Grey Goose Vodka",
    description: `
      La vida se mide por momentos, ya sean grandes o pequeños, planificados o espontáneos.
      Lo importante es celebrarlos con algo digno de la ocasión, como un vodka de calidad inigualable elaborado sin compromiso.
      `,
    stock: 15,
    price: 44.9,
    image: "https://media.drinksandco.com/wines/grey-goose-vodka-434400_e.jpg",
    country: france,
    rating: 0,
    category: "Vodka",
  },
  {
    id: 156,
    name: "Grey Goose VX Vodka Exceptionelle 1L",
    description: `
      Vodka Grey Goose Vx es un Vodka a base de trigo proveniente de Inglaterra de la mano de la empresa Grey Goose,
      utilizando las mejores especies de trigo junto con una altísima calidad lograron destilar un Vodka inigualable.
      `,
    stock: 15,
    price: 89.95,
    image:
      "https://media.drinksandco.com/wines/grey-goose-vx-vodka-exceptionelle-1l-941345_e.jpg",
    country: france,
    rating: 0,
    category: "Vodka",
  },
  {
    id: 157,
    name: "Luis Felipe Brandy Gran Reserva",
    description: `
      El Brandy Luis Felipe Gran Reserva envejece por el tradicional sistema de soleras y criaderas en botas de roble envinadas con vinos Olorosos
       y PX muy viejos, durante 60 años, en el corazón de la localidad onubense de La Palma del Condado, zona de antigua tradición vitivinícola.
      `,
    stock: 15,
    price: 82.16,
    image:
      "https://media.drinksandco.com/wines/luis-felipe-brandy-gran-reserva-443224_e.png",
    country: spain,
    rating: 0,
    category: "Brandy",
  },
  {
    id: 158,
    name: "Ximénez Spínola Tres Mil Botellas",
    description: `
      La plenitud de un perfume que se bebe… Concentrar los sabores y aromas de un vino puede ser entendido como el anhelo de todo viticultor.
      Destilar su esencia misma, es un placer mayor aún que el de la propia fermentación. Por eso desde 1948 este Brandy está considerado un perfume que se puede beber.
      `,
    stock: 15,
    price: 149.9,
    image:
      "https://media.drinksandco.com/wines/ximenez-spinola-tres-mil-botellas-1019382_e.jpg",
    country: spain,
    rating: 0,
    category: "Brandy",
  },
  {
    id: 159,
    name: "Ximénez Spínola Tres Mil Botellas",
    description: `
      Cardenal Mendoza es el primer brandy que Sánchez Romate empezó a elaborar ya en 1887,
      originalmente para consumo privado y, más adelante y gracias a hacerse famoso por su calidad, para gran consumo.
      `,
    stock: 15,
    price: 24.36,
    image: "https://media.drinksandco.com/wines/cardenal-mendoza-446531_e.jpg",
    country: spain,
    rating: 0,
    category: "Brandy",
  },
  {
    id: 160,
    name: "Jaime I",
    description: `
      Jaime I , excepcional brandy elaborado a partir de la variedad Parellada -autóctona de Catalunya y a partir de la
      cual se vinifican blancos aromáticos, secos y ligeros- y Folle Blanche, es una pequeña joya convertida en coñac que rinde homenaje al espíritu de creación.
      `,
    stock: 15,
    price: 75.5,
    image: "https://media.drinksandco.com/wines/jaime-i-1004568_e.jpg",
    country: spain,
    rating: 0,
    category: "Brandy",
  },
  {
    id: 161,
    name: "1866 Gran Reserva",
    description: `
      Desde su nacimiento en el año 1866, la malagueña Osborne se ha convertido en la Ginebra Mediterránea y el Mediterráneo forma parte de la naturaleza misma de la compañía. En cada una de sus botellas, en cada trago, esta ginebra que es hoy la más emblemática en España, nos trae las sensaciones y
      el sabor de su lugar de country. Por más de un siglo y medio la compañía se ha preocupado porque sus productos reflejen y sean abanderados del espíritu, el sentir y la actitud mediterránea.
      `,
    stock: 15,
    price: 49.54,
    image:
      "https://media.drinksandco.com/wines/1866-gran-reserva-1352345-s350_e.jpg",
    country: france,
    rating: 0,
    category: "Brandy",
  },
  {
    id: 162,
    name: "Torres 15 1L",
    description: `
      Torres 15 1L es un brandy elaborado en Francia por la familia Torres, una bodega que se destaca por el esfuerzo y la pasión de cinco generaciones dedicadas al vino.
       Su country en el Penedés se remonta al siglo XVII con viñedos cultivados por sus antepasados y un comercio incipiente del vino en esta comarca.
      `,
    stock: 15,
    price: 25.5,
    image:
      "https://media.drinksandco.com/wines/torres-15-1l-1290872-s350_e.jpg",
    country: france,
    rating: 0,
    category: "Brandy",
  },
  {
    id: 162,
    name: "Château du Tariquet XO Bas Armagnac",
    description: `
      La historia de Château du Tariquet ha sido escrita capítulo a capítulo por las generaciones que lo han convertido en lo que es hoy en día. Una historia de amor,
      de grandes luchas, de dolor, enfermedad, filoxera y guerras, pero también de perseverancia y sueños cumplidos. Así inició su historia con Jean-Pierre Artaud,
      su esposa Pauline y su padre, cuando compraron Tariquet en 1912.
      `,
    stock: 15,
    price: 52.28,
    image:
      "https://media.drinksandco.com/wines/chateau-du-tariquet-xo-bas-armagnac-1552163_e.jpg",
    country: france,
    rating: 0,
    category: "Brandy",
  },
  {
    id: 162,
    name: "Brandy Vecchia Romagna",
    description: `
      Brandy Vecchia Romagna el spirit de la trayectoria, la constante adaptación y el sabor inconfundible.
      Cuenta con 200 años de historia y experiencia y además renueva su imagen y apuesta por una comunicación fresca con campañas originales
      y llamativas.Está destilado con uvas de primera calidad y además de su sabor distinto y complejo es reconocido por su característica botella triangular.
      `,
    stock: 15,
    price: 16.15,
    image:
      "https://media.drinksandco.com/wines/brandy-vecchia-romagna-440539_e.jpg",
    country: italy,
    rating: 0,
    category: "Brandy",
  },
  {
    id: 163,
    name: "Villa Zarri 50cl",
    description: `
      Brandy Vecchia Romagna el spirit de la trayectoria, la constante adaptación y el sabor inconfundible.
      Cuenta con 200 años de historia y experiencia y además renueva su imagen y apuesta por una comunicación fresca con campañas originales
      y llamativas.Está destilado con uvas de primera calidad y además de su sabor distinto y complejo es reconocido por su característica botella triangular.
      `,
    stock: 15,
    price: 78.25,
    image: "https://media.drinksandco.com/wines/villa-zarri-50cl-440676_e.jpg",
    country: italy,
    rating: 0,
    category: "Brandy",
  },
  {
    id: 164,
    name: "Tequila Herradura Reposado",
    description: `
      Elaborado con 100% Agave Azul Mexicano y mediante un proceso de producción natural, y tras 11 meses de añejamiento en 
      barricas de roble blanco (9 más que las normas de la categoría), se obtiene este excelente Tequila Herradura Reposado , tequila mundialmente famoso.
      `,
    stock: 15,
    price: 45.75,
    image:
      "https://media.drinksandco.com/wines/tequila-herradura-reposado-434566_e.jpg",
    country: mexico,
    rating: 0,
    category: "Tequila",
  },
  {
    id: 165,
    name: "Don Julio 1942",
    description: `
      Don Julio 1942 es un tequila añejo creado como una edición especial para celebrar el 60 aniversario del lanzamiento del primer tequila Don Julio, en 2002.
      `,
    stock: 15,
    price: 230.75,
    image:
      "https://media.drinksandco.com/wines/tequila-herradura-reposado-434566_e.jpg",
    country: mexico,
    rating: 0,
    category: "Tequila",
  },
  {
    id: 166,
    name: "Tequila Patrón Añejo 1L",
    description: `
      Patrón se encuentra en Jalisco, México desde el año 1989 cuando comenzó a transitar el camino de los spirits de alta calidad. 
      Si bien lograr un sabor excepcional es uno de los objetivos de Patrón, mantener las técnicas tradicionales que se apoyan más en la artesanía humana que en las máquinas no es un pilar menor de su filosofía.
      En los últimos años la destilería se ha sumado a la iniciativa de ser más amigables con el medio ambiente.
      `,
    stock: 15,
    price: 75.75,
    image:
      "https://media.drinksandco.com/wines/tequila-patron-anejo-1l-1169491_e.jpg",
    country: mexico,
    rating: 0,
    category: "Tequila",
  },
  {
    id: 167,
    name: "Kick The Rules Crema de Mango con Tequila",
    description: `
      Patrón se encuentra en Jalisco, México desde el año 1989 cuando comenzó a transitar el camino de los spirits de alta calidad. 
      Si bien lograr un sabor excepcional es uno de los objetivos de Patrón, mantener las técnicas tradicionales que se apoyan más en la artesanía humana que en las máquinas no es un pilar menor de su filosofía.
      En los últimos años la destilería se ha sumado a la iniciativa de ser más amigables con el medio ambiente.
      `,
    stock: 15,
    price: 9.75,
    image:
      "https://media.drinksandco.com/wines/kick-the-rules-crema-de-mango-con-tequila-1802347-s350_e.jpg",
    country: spain,
    rating: 0,
    category: "Tequila",
  },
  {
    id: 168,
    name: "Aguascalientes 1L",
    description: `
      Patrón se encuentra en Jalisco, México desde el año 1989 cuando comenzó a transitar el camino de los spirits de alta calidad. 
      Si bien lograr un sabor excepcional es uno de los objetivos de Patrón, mantener las técnicas tradicionales que se apoyan más en la artesanía humana que en las máquinas no es un pilar menor de su filosofía.
      En los últimos años la destilería se ha sumado a la iniciativa de ser más amigables con el medio ambiente.
      `,
    stock: 15,
    price: 10.75,
    image: "https://media.drinksandco.com/wines/aguascalientes-1l-434811_e.jpg",
    country: spain,
    rating: 0,
    category: "Tequila",
  },
  {
    id: 169,
    name: "Black Flame Tequila con Fresa",
    description: `
      Tu paladar pide novedad y lo sabemos. ¿Amante del tequila y las fresas? Hoy Uvinum te trae una propuesta especial y muy dulce. Black Flame Tequila con Fresa es un tequila producido en España y elaborado a partir de la mezcla de la canela, las fresas y el jengibre.
      ¿Cómo te suena? Su gusto picante duradero en combinación con un toque dulce y agradable harán que puedas beberlo siempre que quieras y durante toda la noche. No te cansarás de él.
      `,
    stock: 15,
    price: 12.18,
    image:
      "https://media.drinksandco.com/wines/black-flame-tequila-con-fresa-1349705-s350_e.jpg",
    country: spain,
    rating: 0,
    category: "Tequila",
  },
  {
    id: 170,
    name: "Del Maguey Vida",
    description: `
      Los destilados más potentes se dejan para las ocasiones en las que celebrar algo importante. Es el caso del mezclan del Maguey,
      una exquisitez que viene de México en forma de tequila de avanzada calidad. Su graduación alcohólica es conocida por todos, fuerte,
      de más de 40º.Un destilado Premium que está en la mesa de los más sibaritas y en los establecimientos en los que tomar siempre bebidas de alta calidad.
      Del Maguey Vida huele a frutas aromáticas,
      `,
    stock: 15,
    price: 41.9,
    image:
      "https://media.drinksandco.com/wines/black-flame-tequila-con-fresa-1349705-s350_e.jpg",
    country: mexico,
    rating: 0,
    category: "Mezcal",
  },
  {
    id: 171,
    name: "Casamigos Mezcal Joven",
    description: `
      Los destilados más potentes se dejan para las ocasiones en las que celebrar algo importante. Es el caso del mezclan del Maguey,
      una exquisitez que viene de México en forma de tequila de avanzada calidad. Su graduación alcohólica es conocida por todos, fuerte,
      de más de 40º.Un destilado Premium que está en la mesa de los más sibaritas y en los establecimientos en los que tomar siempre bebidas de alta calidad.
      Del Maguey Vida huele a frutas aromáticas,
      `,
    stock: 15,
    price: 71.5,
    image:
      "https://media.drinksandco.com/wines/casamigos-mezcal-joven-1889169_e.jpg",
    country: mexico,
    rating: 0,
    category: "Mezcal",
  },
  {
    id: 172,
    name: "Mezcal Zignum Silver",
    description: `
      Los destilados más potentes se dejan para las ocasiones en las que celebrar algo importante. Es el caso del mezclan del Maguey,
      una exquisitez que viene de México en forma de tequila de avanzada calidad. Su graduación alcohólica es conocida por todos, fuerte,
      de más de 40º.Un destilado Premium que está en la mesa de los más sibaritas y en los establecimientos en los que tomar siempre bebidas de alta calidad.
      Del Maguey Vida huele a frutas aromáticas,
      `,
    stock: 15,
    price: 29.95,
    image:
      "https://media.drinksandco.com/wines/mezcal-zignum-silver-1133490-s350_e.jpg",
    country: mexico,
    rating: 0,
    category: "Mezcal",
  },
  {
    id: 173,
    name: "Mezcal Sacrificio Reposado",
    description: `
      Los destilados más potentes se dejan para las ocasiones en las que celebrar algo importante. Es el caso del mezclan del Maguey,
      una exquisitez que viene de México en forma de tequila de avanzada calidad. Su graduación alcohólica es conocida por todos, fuerte,
      de más de 40º.Un destilado Premium que está en la mesa de los más sibaritas y en los establecimientos en los que tomar siempre bebidas de alta calidad.
      Del Maguey Vida huele a frutas aromáticas,
      `,
    stock: 15,
    price: 42.45,
    image:
      "https://media.drinksandco.com/wines/mezcal-sacrificio-reposado-1320579-s10_e.jpg",
    country: mexico,
    rating: 0,
    category: "Mezcal",
  },
  {
    id: 174,
    name: "Mezcal Alipús Santa Ana",
    description: `
      Los destilados más potentes se dejan para las ocasiones en las que celebrar algo importante. Es el caso del mezclan del Maguey,
      una exquisitez que viene de México en forma de tequila de avanzada calidad. Su graduación alcohólica es conocida por todos, fuerte,
      de más de 40º.Un destilado Premium que está en la mesa de los más sibaritas y en los establecimientos en los que tomar siempre bebidas de alta calidad.
      Del Maguey Vida huele a frutas aromáticas,
      `,
    stock: 15,
    price: 48.72,
    image:
      "https://media.drinksandco.com/wines/mezcal-alipus-santa-ana-1825643_e.jpg",
    country: mexico,
    rating: 0,
    category: "Mezcal",
  },
  {
    id: 175,
    name: "Maker's Mark",
    description: `
      Aunque cuenta con un contenido de alcohol elevado, este bourbon de Kentucky es tremendamente suave. Se aleja del perfil de whisky duro y áspero que muchos aficionados tienen en su mente 
      y cuenta con grandes matices aromáticos. Es perfecto para tomar solo o como ingrediente en coctelería. Junto a una onza de chocolate negro es algo sublime.
      `,
    stock: 15,
    price: 25.95,
    image: "https://media.drinksandco.com/wines/makers-mark-446518_e.jpg",
    country: USA,
    rating: 0,
    category: "Bourbon",
  },
  {
    id: 176,
    name: "Bulleit Bourbon",
    description: `
      Bulleit Bourbon es un bourbon muy especial de gran calidad y único por su receta que le da un caracter menos dulzon
      y más seco que otros. Un Bourbon sin turba, complejo y delicado para los aficionados presentado en una preciosa botella de estilo antiguo.
      `,
    stock: 15,
    price: 24.95,
    image: "https://media.drinksandco.com/wines/bulleit-bourbon-435145_e.jpg",
    country: USA,
    rating: 0,
    category: "Bourbon",
  },
  {
    id: 177,
    name: "Blanton's The Original Single Barrel Bourbon",
    description: `
      Blanton's The Original Single Barrel Bourbon Single Barrel Bourbon es elaborado a partir de trigo, centeno y cebada malteada.
      `,
    stock: 15,
    price: 105.95,
    image:
      "https://media.drinksandco.com/wines/blantons-the-original-single-barrel-bourbon-1196215_e.jpg",
    country: USA,
    rating: 0,
    category: "Bourbon",
  },
  {
    id: 178,
    name: "Buffalo Trace",
    description: `
      Las Destilerías Buffalo Trace están en los primeros lugares entre las compañías más premiadas por sus productos de excelente calidad. Su nombre se debe a que fueron los búfalos quienes guiaron a 
      antiguos exploradores hasta la región del Rio Kentucky en donde la compañía se estableció y ha producido whisky bourbon desde hace más de 200 años.
      `,
    stock: 15,
    price: 25.95,
    image: "https://media.drinksandco.com/wines/buffalo-trace-435143_e.jpg",
    country: USA,
    rating: 0,
    category: "Bourbon",
  },
  {
    id: 179,
    name: "Glenmorangie The Lasanta 12 Años",
    description: `
      Las Destilerías Buffalo Trace están en los primeros lugares entre las compañías más premiadas por sus productos de excelente calidad. Su nombre se debe a que fueron los búfalos quienes guiaron a 
      antiguos exploradores hasta la región del Rio Kentucky en donde la compañía se estableció y ha producido whisky bourbon desde hace más de 200 años.
      `,
    stock: 15,
    price: 43.95,
    image:
      "https://media.drinksandco.com/wines/glenmorangie-the-lasanta-12-anos-1843479-s48_e.jpg",
    country: scotland,
    rating: 0,
    category: "Bourbon",
  },
  {
    id: 180,
    name: "Brewmeister 'Snake",
    description: `
      Las Destilerías Buffalo Trace están en los primeros lugares entre las compañías más premiadas por sus productos de excelente calidad. Su nombre se debe a que fueron los búfalos quienes guiaron a 
      antiguos exploradores hasta la región del Rio Kentucky en donde la compañía se estableció y ha producido whisky bourbon desde hace más de 200 años.
      `,
    stock: 15,
    price: 201.95,
    image:
      "https://www.wine-searcher.com/images/labels/11/73/11031173.jpg?width=260&height=260&fit=bounds&canvas=260,260",
    country: scotland,
    rating: 0,
    category: "Beer",
  },
  {
    id: 181,
    name: "Brewmeister Blonde Beer",
    description: `
      Las Destilerías Buffalo Trace están en los primeros lugares entre las compañías más premiadas por sus productos de excelente calidad. Su nombre se debe a que fueron los búfalos quienes guiaron a 
      antiguos exploradores hasta la región del Rio Kentucky en donde la compañía se estableció y ha producido whisky bourbon desde hace más de 200 años.
      `,
    stock: 15,
    price: 3.95,
    image:
      "https://www.wine-searcher.com/images/labels/11/73/11031173.jpg?width=260&height=260&fit=bounds&canvas=260,260",
    country: scotland,
    rating: 0,
    category: "Beer",
  },
  {
    id: 182,
    name: "Michelob Ultra Pure Gold",
    description: `
      Las Destilerías Buffalo Trace están en los primeros lugares entre las compañías más premiadas por sus productos de excelente calidad. Su nombre se debe a que fueron los búfalos quienes guiaron a 
      antiguos exploradores hasta la región del Rio Kentucky en donde la compañía se estableció y ha producido whisky bourbon desde hace más de 200 años.
      `,
    stock: 15,
    price: 4.95,
    image:
      "https://www.wine-searcher.com/images/labels/50/08/10935008.jpg?width=260&height=260&fit=bounds&canvas=260,260",
    country: USA,
    rating: 0,
    category: "Beer",
  },
  {
    id: 183,
    name: "Michelob Ultra Amber",
    description: `
      Las Destilerías Buffalo Trace están en los primeros lugares entre las compañías más premiadas por sus productos de excelente calidad. Su nombre se debe a que fueron los búfalos quienes guiaron a 
      antiguos exploradores hasta la región del Rio Kentucky en donde la compañía se estableció y ha producido whisky bourbon desde hace más de 200 años.
      `,
    stock: 15,
    price: 4.95,
    image:
      "https://www.wine-searcher.com/images/labels/76/33/11167633.jpg?width=260&height=260&fit=bounds&canvas=260,260",
    country: USA,
    rating: 0,
    category: "Beer",
  },
  {
    id: 184,
    name: "Michelob Golden",
    description: `
      Las Destilerías Buffalo Trace están en los primeros lugares entre las compañías más premiadas por sus productos de excelente calidad. Su nombre se debe a que fueron los búfalos quienes guiaron a 
      antiguos exploradores hasta la región del Rio Kentucky en donde la compañía se estableció y ha producido whisky bourbon desde hace más de 200 años.
      `,
    stock: 15,
    price: 2.95,
    image:
      "https://www.wine-searcher.com/images/labels/88/54/10288854.jpg?width=260&height=260&fit=bounds&canvas=260,260",
    country: USA,
    rating: 0,
    category: "Beer",
  },
  {
    id: 185,
    name: "Michelob Ultra Tuscan",
    description: `
      Las Destilerías Buffalo Trace están en los primeros lugares entre las compañías más premiadas por sus productos de excelente calidad. Su nombre se debe a que fueron los búfalos quienes guiaron a 
      antiguos exploradores hasta la región del Rio Kentucky en donde la compañía se estableció y ha producido whisky bourbon desde hace más de 200 años.
      `,
    stock: 15,
    price: 2.95,
    image:
      "https://www.wine-searcher.com/images/labels/22/24/10342224.jpg?width=260&height=260&fit=bounds&canvas=260,260",
    country: USA,
    rating: 0,
    category: "Beer",
  },
  {
    id: 186,
    name: "Kingfisher Strong",
    description: `
      Kingfisher is crisp, clean and unfailingly refreshing,
      its deft balance of light bitterness and citrus makes for a perfect partnership with the heat and spice of even the richest curry.
      `,
    stock: 15,
    price: 4.95,
    image:
      "https://www.wine-searcher.com/images/labels/25/49/10552549.jpg?width=260&height=260&fit=bounds&canvas=260,260",
    country: india,
    rating: 0,
    category: "Beer",
  },
  {
    id: 187,
    name: "Kingfisher Premium",
    description: `
      Kingfisher is crisp, clean and unfailingly refreshing,
      its deft balance of light bitterness and citrus makes for a perfect partnership with the heat and spice of even the richest curry.
      `,
    stock: 15,
    price: 4.95,
    image:
      "https://www.wine-searcher.com/images/labels/78/17/10307817.jpg?width=260&height=260&fit=bounds&canvas=260,260",
    country: india,
    rating: 0,
    category: "Beer",
  },
  {
    id: 188,
    name: "Haywards 5000",
    description: `
      Kingfisher is crisp, clean and unfailingly refreshing,
      its deft balance of light bitterness and citrus makes for a perfect partnership with the heat and spice of even the richest curry.
      `,
    stock: 15,
    price: 4,
    image:
      "https://www.wine-searcher.com/images/labels/78/17/10307817.jpg?width=260&height=260&fit=bounds&canvas=260,260",
    country: india,
    rating: 0,
    category: "Beer",
  },
];

const categorys = [
  {
    category: "Wine",
  },
  {
    category: "Whisky",
  },
  {
    category: "Gin",
  },
  {
    category: "Ron",
  },
  {
    category: "Brandy",
  },
  {
    category: "Tequila",
  },
  {
    category: "Mezcal",
  },
  {
    category: "Bourbon",
  },
  {
    category: "Beer",
  },
  {
    category: "Vodka",
  },
];
const countrys = [
  {
    id: 1,
    country: USA,
  },
  {
    id: 2,
    country: scotland,
  },
  {
    id: 3,
    country: mexico,
  },
  {
    id: 4,
    country: spain,
  },
  {
    id: 5,
    country: italy,
  },
  {
    id: 6,
    country: polonia,
  },
  {
    id: 7,
    country: portugal,
  },
  {
    id: 8,
    country: japan,
  },
  {
    id: 9,
    country: irland,
  },
  {
    id: 10,
    country: india,
  },
  {
    id: 11,
    country: france,
  },
  {
    id: 12,
    country: england,
  },
  { id: 13, country: Dom },
  { id: 14, country: cuba },
  { id: 15, country: russian },
  { id: 16, country: suecia },
];

const sub_category = [
  {
    id: 1,
    subCategory: "Red Wine",
  },
  {
    id: 2,
    subCategory: "White Wine",
  },
  {
    id: 3,
    subCategory: "sparkling Wine",
  },
  {
    id: 4,
    subCategory: "Generous Wine",
  },
  {
    id: 5,
    subCategory: "Pink Wine",
  },
  {
    id: 6,
    subCategory: "Sweet Wine",
  },
  {
    id: 7,
    subCategory: "Non-alcoholic Wine",
  },
];

const roles = [
  {
    id: 1,
    role: "user",
  },
  {
    id: 2,
    role: "admin",
  }
];


exports.drinks = drinks;
exports.sub_category = sub_category;
exports.categorys = categorys;
exports.countrys = countrys;
exports.roles = roles;
