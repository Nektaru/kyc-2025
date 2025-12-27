import { useState } from 'react'
import '../components/product.css'
import ProductCard from '../components/ProductCard'
import Modal from '../components/Modal'
import homepage from '../assets/products/homepage.webp'

// Mapea automáticamente todas las imágenes en /src/assets/products
const images = import.meta.glob('../assets/products/\u002a.{webp,jpg,jpeg,png,svg}', {
  eager: true,
  as: 'url',
})

export default function Products() {
  const [modalItem, setModalItem] = useState(null)


  // === Datos de ejemplo (ajústalos a tu contenido real) ===
  const sections = [
    {
      title: 'Nuestros asados',
      items: [
        {
          id: 'pollo-asado',
          title: 'Pollo asado',
          short: 'Pollo de corral, patatas panadera y nuestro jugo especial...',
          long:
            'Pollo asado lentamente con mezcla de especias de la casa, sal, pimienta y nuestra salsa especial elaborada durante 32 años. Ideal para compartir.',
          img: 'pollo-asado.webp',
        },
        {
          id: 'costillas-bbq',
          title: 'Costillas BBQ',
          short: 'Costillas de cerdo con nuestra salsa barbacoa artesanal...',
          long:
            'Costillas cocinadas a baja temperatura durante 18 horas y glaseadas con nuestra salsa BBQ casera. Las partimos en palos para que solo tengas que preocuparte de disfrutar de unas costillas tiernas, jugosas y muy sabrosas.',
          img: 'costillas.webp',
        },
      ],
    },
    {
      title: 'Nuestros acompañantes',
      items: [
        {
          id: 'rusa',
          title: 'Ensaladilla Rusa',
          short: 'Uno de nuestros platos estrellas, el entrante perfecto...',
          long:
            'Nuestra famosa ensaladilla rusa con verduras frescas cortadas en cubos, mayonesa casera, atún en aceite de oliva, decorado con huevo, pimiento morrón y aceitunas.',
          img: 'rusa.webp',
        },
        {
          id: 'patatas-alioli',
          title: 'Patatas Alioli',
          short: 'Con ali-oli casero, perejil freso...',
          long:
            'Nunca pueden faltar como aperitivo en la mesa nuestras patatas con ali-oli casero y perejil fresco.',
          img: 'patatas-alioli.webp',
        },
        {
          id: 'panaderas',
          title: 'Patatas Panaderas',
          short: 'Con pimiento rojo, verde, AOVE...',
          long:
            'Patatas dólar fritas y horneadas para que queden perfectas, acompañadas de pimiento rojo, verde y cebolla en tiras, ajo y AOVE.',
          img: 'panaderas.webp',
        },
        {
          id: 'migas',
          title: 'Migas',
          short: 'Migas como las de toda la vida, pero con más cariño...',
          long:
            'Un tío nuestro de Aragón nos enseñó la receta suprema de migas (chorizo casero de pueblo, autentico pan de masa madre y tocineta), acompañadas de pimientos de padrón.',
          img: 'migas.webp',
        },
        {
          id: 'champi-ajillo',
          title: 'Champiñón al ajillo',
          short: 'Cortado en tacos y acompañados de jamón, AOVE...',
          long:
            'Un clásico de los de siempre: champiñón fresco salteado al ajillo, con aceite de oliva, ajo dorado y un toque de perejil, como se ha hecho toda la vida.',
          img: 'champi-ajillo.webp',
        },
        {
          id: 'huevos-rellenos',
          title: 'Huevos rellenos',
          short: 'Atún, tomate, yema de huevo cocido...',
          long:
            'Siguiendo meticulosamente la receta de la abuela, rellenamos los huevos con atún, tomate, cebolla y aceituna los cubrimos con nuestra mayonesa casera y coronamos con la yema del huevo cocido que sacamos previamente. (6 medios huevos).',
          img: 'huevos-rellenos.webp',
        },
        {
          id: 'pisto-manchego',
          title: 'Pisto manchego',
          short: 'Pisto manchego de verduras hecho con cariño y mimo...',
          long:
            'Freímos en AOVE calabacín, berenjena, pimiento rojo, pimiento verde, cebolla, patata y lo coronamos con un huevo frito.',
          img: 'pisto-manchego.webp',
        },
      ],
    },
    {
      title: 'Nuestras carnes',
      items: [
        {
          id: 'albondigas',
          title: 'Albóndigas a la jardinera',
          short: 'De carne mixta a la jardinera...',
          long:
            'Nuestras albóndigas de carne mixta (cerdo y vacuno) con una salsa jardinera que pide pan para mojar solo con olerla',
          img: 'albondigas.webp',
        },
        {
          id: 'rusos',
          title: 'Rusos',
          short: 'Carne de cerdo, sal, pimienta, ajo...',
          long:
            'Nuestros filetes rusos caseros son famosos en todo San Fernando por estar hechos con la receta de nuestra abuela de Lucena: Carne de cerdo, sal, pimienta, ajo, perejil y nuestro ingrediente secreto',
          img: 'rusos.webp',
        },
        {
          id: 'filete-pollo',
          title: 'Filete de pollo empanado',
          short: 'Filetes de pechuga de pollo empanados con perejil...',
          long:
            'Un clásico de los de siempre: filetes de pechuga de pollo empanados con perejil, jugosos por dentro y crujientes por fuera, hechos al momento como se ha hecho toda la vida.',
          img: 'filete-pollo.webp',
        },
        {
          id: 'pechuga-villaroy',
          title: 'Pechuga Villaroy',
          short: 'Pechuga de pollo fresca envuelta en bechamel...',
          long:
            'Pechuga de pollo fresca con una cobertura de beshamel casera con nuez moscada, empanado y frito listo para disfrutar.',
          img: 'pechuga-villaroy.webp',
        },
        {
          id: 'pollo-ajillo',
          title: 'Pollo al ajillo',
          short: 'Nuestro pollo jugoso al ajillo...',
          long:
            'Pollo partido en trozos, ajo picadito, aceite, sal y unas horas de horno para que todo quede con una textura perfecta',
          img: 'pollo-ajillo.webp',
        },
        {
          id: 'berenjena-rellena',
          title: 'Berenjena rellena',
          short: 'Rellena de carne de ternera, coronado con queso...',
          long:
            'Partimos la berenjena a la mitad, la rellenamos de carne picada especiada y lo cerramos con queso gratinado.',
          img: 'berenjena-rellena.webp',
        },
        {
          id: 'rabo-de-toro',
          title: 'Rabo de toro al vino tinto',
          short: 'Cocinado durante 8 horas al vino tinto...',
          long:
            'Rabo de toro guisado lentamente al vino, con zanahoria, a fuego suave, hasta quedar tierno y meloso, con una salsa de las de toda la vida.',
          img: 'rabo-de-toro.webp',
        },
      ],
    },
    {
      title: 'Nuestros pescados',
      items: [
        {
          id: 'merluza-brocoli',
          title: 'Merluza con Brócoli',
          short: 'Una merluza como nunca antes la has probado...',
          long:
            'Medallón de merluza con nuestra salsa casera de queso y brócoli, coronado con un langostino asado.',
          img: 'merluza-brocoli.webp',
        },
        {
          id: 'bacalao-riojana',
          title: 'Bacalao a la Riojana',
          short: 'Bacalao a la Riojana como las de toda la vida, pero con más cariño,,.',
          long:
            'Lomo de bacalao con nuestra salsa de tomate, pimientos verde y rojo asados y cebolla. Acompañado de patata panadera.',
          img: 'bacalao-riojana.webp',
        },
      ],
    },
    {
      title: 'Nuestras pastas',
      items: [
        {
          id: 'tallarines-verduras',
          title: 'Tallarines con verduras',
          short: 'Unos tallarines al wok con verduritas frescas...',
          long:
            'Tallarines de trigo cocidos con salsa de soja y sofritos en un wok con verduras (brócoli, pimiento rojo y verde, cebolla...).',
          img: 'tallarines-verduras.webp',
        },
        {
          id: 'macarrones-chorizo',
          title: 'Macarrones con chorizo',
          short: 'Macarrones con tomate y chorizo gratinados con queso mozarella...',
          long:
            'Macarrones con tomate y chorizo gratinados con queso mozarella, textura suave y unas galletas María para coronar el postre más mítico. Perfecto para cerrar la comida.',
          img: 'macarrones-chorizo.webp',
        },
      ],
    },
    {
      title: 'Nuestros tortillones',
      items: [
        {
          id: 'tortilla-patata',
          title: 'Tortilla de Patata con o sin cebolla',
          short: 'Al gusto, más cuajada, menos cuajada...',
          long:
            'Cortamos las patatas y la cebolla finitas y las freímos en aceite de oliva virgen extra, añadimos los huevos camperos y las hacemos a tu gusto, eligiendo el punto de cuajado. (1,100 Kg aprox.).',
          img: 'tortilla-patata.webp',
        },
        {
          id: 'tortilla-calabacin',
          title: 'Tortilla de patata con calabacín',
          short: 'Calabacín cortado en finos discos...',
          long:
            'Seguimos la receta de la tortilla de patata y le añadimos unos medallones de calabacín a la plancha. (1,100 Kg aprox.).',
          img: 'tortilla-calabacin.webp',
        },
        {
          id: 'tortilla-chorizo',
          title: 'Tortilla de patata con chorizo',
          short: 'Chorizo en trocitos para añadir sabor...',
          long:
            'Añadimos a nuestra tortilla trocitos de chorizo de Potes para aumentar el sabor. (1,100 Kg aprox.).',
          img: 'tortilla-chorizo.webp',
        },
        {
          id: 'tortilla-morcilla',
          title: 'Tortilla de patata con morcilla',
          short: 'Morcilla guisada con la patata y la cebolla...',
          long:
            'Para los amantes de la morcilla de burgos, ésta es vuestra tortilla. (1,100 Kg aprox.).',
          img: 'tortilla-morcilla.webp',
        },
        {
          id: 'tortilla-queso-cabra',
          title: 'Tortilla de patata con queso de cabra',
          short: 'Queso de cabra cortado y cocinado con la patata...',
          long:
            'Cortamos trocitos de queso de cabra para cocinarlos con la patata y la cebolla, y luego coronamos la tortilla con unos discos antes de terminarla.',
          img: 'tortilla-queso-cabra.webp',
        },
      ],
    },
    {
      title: 'Nuestras ensaladas',
      items: [
        {
          id: 'ensalada-cabra',
          title: 'Ensalada con queso de cabra y nueces',
          short: 'Queso de cabra, nueces y tomatitos cherry...',
          long:
            'Mezclum, medallones de queso de cabra, nueces, tomatitos cherry y crema balsámica de módena para regar a tu gusto.',
          img: 'ensalada-cabra.webp',
        },
        {
          id: 'ensalada-cesar',
          title: 'Ensalada César',
          short: 'Ensalada César con pollo, queso en cubos, salsa césar...',
          long:
            'Lechuga iceberg, picatostes, queso eddam en cubos, filete de contramuslo de pollo empanado, tomatitos cherry y bacon crujiente, con queso parmesano rallado por encima y salsa césar para acompañar al gusto.',
          img: 'ensalada-cesar.webp',
        },
        {
          id: 'ensalada-pollo',
          title: 'Ensalada de pollo',
          short: 'Ensala de tiras de zanahoria, tiras de pechuga de pollo...',
          long:
            '¿Quien dijo que el pollo y la manzana no pegan? Pues imagínate si le añades zanahoria, pasas y una deliciosa salsa de mostaza y miel.',
          img: 'ensalada-pollo.webp',
        },
      ],
    },
    {
      title: 'Nuestros fritos',
      items: [
        {
          id: 'croquetas',
          title: 'Croquetas caseras',
          short: 'De jamón, bacalao o cocido. Cremosas por dentro.',
          long:
            'Nuestras croquetas caseras están hechas con una bechamel suave, con puntitas de jamón, bacalao o cocido, rebozado crujiente y fritura perfecta.',
          img: 'croquetas.webp',
        },
        {
          id: 'aros-cebolla',
          title: 'Aros de cebolla a la cerveza',
          short: 'Caseros bañados en cerveza...',
          long:
            'Nuestros aros de cebolla están hechos de anillas de cebolla dulce, harina, un baño de cerveza 0,0% y fritos en abundante aceite',
          img: 'aros-cebolla.webp',
        },
        {
          id: 'patatas-fritas',
          title: 'Patatas fritas',
          short: 'Peladas, cortadas en bastones y fritas en AOVE...',
          long:
            'Patata crujiente por fuera y tierna por dentro, el acompañante perfecto para cualquier carne',
          img: 'patatas-fritas.webp',
        },
      ],
    },
    {
      title: 'Nuestros postres',
      items: [
        {
          id: 'arroz-leche',
          title: 'Arroz con leche',
          short: 'Con canela y limón, receta tradicional...',
          long:
            'Cremoso, aromático y equilibrado en dulzor. El postre de siempre, como en casa.',
          img: 'arroz-con-leche.webp',
        },
        {
          id: 'natillas',
          title: 'Natillas caseras',
          short: 'Natillas caseras como las de toda la vida, pero con más cariño...',
          long:
            'Natillas clásicas, textura suave y unas galletas María para coronar el postre más mítico. Perfecto para cerrar la comida.',
          img: 'natillas.webp',
        },
      ],
    }
  ]
  // =========================================================

  return (
    <main className="products">
      {/* Banner centrado con márgenes */}
      <div className="products__hero">
        <img src={homepage} alt="Nuestros productos" />
      </div>


      {/* Secciones */}
      {sections.map((sec) => (
        <section key={sec.title} className="products__section">
          <h2 className="products__sectionTitle">{sec.title}</h2>

          <div className="products__grid">
            {sec.items.map((item) => (
              <ProductCard
                key={item.id}
                title={item.title}
                text={item.short}
                imgSrc={images[`../assets/products/${item.img}`]}
                onOpen={() => setModalItem(item)}
              />
            ))}
          </div>
        </section>
      ))}

      {/* Modal */}
      <Modal isOpen={!!modalItem} onClose={() => setModalItem(null)}>
        {modalItem && (
          <div className="productModal">
            <img
              src={images[`../assets/products/${modalItem.img}`]}
              alt={modalItem.title}
            />
            <div className="productModal__content">
              <h3>{modalItem.title}</h3>
              <p>{modalItem.long || modalItem.short}</p>
            </div>
          </div>
        )}
      </Modal>
    </main>
  )
}
