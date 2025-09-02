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
          short: 'Pollo de corral, patatas panadera y nuestro jugo especial.',
          long:
            'Pollo asado lentamente con mezcla de especias de la casa, sal, pimienta y nuestra salsa especial elaborada durante 32 años. Ideal para compartir.',
          img: 'pollo-asado.webp',
        },
        {
          id: 'costillas-bbq',
          title: 'Costillas BBQ',
          short: 'Costillas de cerdo con salsa barbacoa artesanal.',
          long:
            'Costillas cocinadas a baja temperatura durante 18 horas y glaseadas con nuestra salsa BBQ casera. Tiernas, jugosas y muy sabrosas.',
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
          short: 'Con canela y limón, receta tradicional.',
          long:
            'Cremoso, aromático y equilibrado en dulzor. El postre de siempre, como en casa.',
          img: 'rusa.webp',
        },
        {
          id: 'patatas-alioli',
          title: 'Patatas Alioli',
          short: 'Patatas Alioli como las de toda la vida, pero con más cariño.',
          long:
            'Patatas Alioli',
          img: 'patatas-alioli.webp',
        },
        {
          id: 'panaderas',
          title: 'Patatas Panaderas',
          short: 'Patatas Panaderas como las de toda la vida, pero con más cariño.',
          long:
            'Patatas Panaderas',
          img: 'panaderas.webp',
        },
        {
          id: 'migas',
          title: 'Migas',
          short: 'Migas como las de toda la vida, pero con más cariño.',
          long:
            'Migas',
          img: 'migas.webp',
        },
        {
          id: 'champi-ajillo',
          title: 'Champiñón al ajillo',
          short: 'Champiñón al ajillo fresco cortado en tacos y acompañados de jamón, AOVE, jamón ibérico en tacos y mucho cariño.',
          long:
            'Champiñón al ajillo ',
          img: 'champi-ajillo.webp',
        },
        {
          id: 'huevos-rellenos',
          title: 'Huevos rellenos',
          short: 'Huevos rellenos de atún, tomate, yema de huevo cocido, zanahoria y aceituna y cebolla muy muy picaditos.',
          long:
            'Huevos rellenos ',
          img: 'huevos-rellenos.webp',
        },
        {
          id: 'pisto-manchego',
          title: 'Pisto manchego',
          short: 'Pisto manchego',
          long:
            'Pisto manchego ',
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
          short: 'Nuestras albóndigas de carne mixta (cerdo y vacuno)',
          long:
            'Nuestras albóndigas de carne mixta (cerdo y vacuno) con una salsa jardinera que pide pan para mojar solo con olerla',
          img: 'albondigas.webp',
        },
        {
          id: 'rusos',
          title: 'Rusos',
          short: 'Filetes Rusos caseros hechos con carne de cerdo, sal, pimienta, ajo, perejil y nuestro ingrediente secreto.',
          long:
            'Nuestros filetes rusos caseros son famosos en todo San Fernando por estar hechos con la receta de nuestra abuela de Lucena',
          img: 'rusos.webp',
        },
        {
          id: 'filete-pollo',
          title: 'Filete de pollo empanado',
          short: 'Pechuga de pollo fresca envuelta en una bechamel fina y frito al punto para que esté bien doradita',
          long:
            'Pollo partido en trozos, ajo picadito, aceite, sal y unas horas de horno para que todo quede con una textura perfecta',
          img: 'filete-pollo.webp',
        },
        {
          id: 'pechuga-villaroy',
          title: 'Pechuga Villaroy',
          short: 'Pechuga de pollo fresca envuelta en una bechamel fina y frito al punto para que esté bien doradita',
          long:
            'Pollo partido en trozos, ajo picadito, aceite, sal y unas horas de horno para que todo quede con una textura perfecta',
          img: 'pechuga-villaroy.webp',
        },
        {
          id: 'pollo-ajillo',
          title: 'Pollo al ajillo',
          short: 'Nuestro pollo jugoso al ajillo con una salsa irrepetible',
          long:
            'Pollo partido en trozos, ajo picadito, aceite, sal y unas horas de horno para que todo quede con una textura perfecta',
          img: 'pollo-ajillo.webp',
        },
        {
          id: 'berenjena-rellena',
          title: 'Berenjena rellena',
          short: 'Rellena de carne de ternera, berenjena y coronado con una capa de queso',
          long:
            'Nuestras berenjenas...',
          img: 'berenjena-rellena.webp',
        },
        {
          id: 'rabo-de-toro',
          title: 'Rabo de toro al vino tinto',
          short: 'Nuestro rabo de toro al vino tinto cocinado durante 8 horas con una salsa irrepetible',
          long:
            'Pollo partido en trozos, ajo picadito, aceite, sal y unas horas de horno para que todo quede con una textura perfecta',
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
          short: 'Con canela y limón, receta tradicional.',
          long:
            'Cremoso, aromático y equilibrado en dulzor. El postre de siempre, como en casa.',
          img: 'merluza-brocoli.webp',
        },
        {
          id: 'bacalao-riojana',
          title: 'Bacalao a la Riojana',
          short: 'Bacalao a la Riojana como las de toda la vida, pero con más cariño.',
          long:
            'Bacalao a la Riojana, textura suave y unas galletas María para coronar el postre más mítico. Perfecto para cerrar la comida.',
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
          short: 'Con canela y limón, receta tradicional.',
          long:
            'Cremoso, aromático y equilibrado en dulzor. El postre de siempre, como en casa.',
          img: 'tallarines-verduras.webp',
        },
        {
          id: 'macarrones-chorizo',
          title: 'Macarrones con chorizo',
          short: 'Macarrones con tomate y chorizo gratinados con queso mozarella',
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
          short: 'Al gusto, más cuajada, menos cuajada... 900gr de pura tortilla de patata',
          long:
            'Cremoso, aromático y equilibrado en dulzor. El postre de siempre, como en casa.',
          img: 'tortilla-patata.webp',
        },
        {
          id: 'tortilla-calabacin',
          title: 'Tortilla de patata con calabacín',
          short: 'Tortilla de patata con calabacín cortado en finos discos para añadir sabor y cocinado con la patata, la cebolla...',
          long:
            'Cortamos fino el calabacín...',
          img: 'tortilla-calabacin.webp',
        },
        {
          id: 'tortilla-chorizo',
          title: 'Tortilla de patata con chorizo',
          short: 'Tortilla de patata con chorizo cortado en finos discos para añadir sabor y cocinado con la patata, la cebolla...',
          long:
            'Cortamos fino el chorizo...',
          img: 'tortilla-chorizo.webp',
        },
        {
          id: 'tortilla-morcilla',
          title: 'Tortilla de patata con morcilla',
          short: 'Tortilla de patata con morcilla cortado en finos discos para añadir sabor y cocinado con la patata, la cebolla...',
          long:
            'Cortamos fino el morcilla...',
          img: 'tortilla-morcilla.webp',
        },
        {
          id: 'tortilla-queso-cabra',
          title: 'Tortilla de patata con queso de cabra',
          short: 'Tortilla de patata con queso de cabra cortado en finos discos para añadir sabor y textura',
          long:
            'Cortamos fino el queso de cabra...',
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
          short: 'Con canela y limón, receta tradicional.',
          long:
            'Cremoso, aromático y equilibrado en dulzor. El postre de siempre, como en casa.',
          img: 'ensalada-cabra.webp',
        },
        {
          id: 'ensalada-cesar',
          title: 'Ensalada César',
          short: 'Ensalada César como las de toda la vida, pero con más cariño.',
          long:
            'Ensalada César clásicas, textura suave y unas galletas María para coronar el postre más mítico. Perfecto para cerrar la comida.',
          img: 'ensalada-cesar.webp',
        },
        {
          id: 'ensalada-pollo',
          title: 'Ensalada de pollo',
          short: 'Ensalada de pollo como las de toda la vida, pero con más cariño.',
          long:
            'Ensalada de pollo',
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
          short: 'Aros de cebolla a la cerveza caseros bañados en cerveza',
          long:
            'Nuestros aros de cebolla están hechos de anillas de cebolla dulce, harina, un baño de cerveza 0,0% y fritos en abundante aceite',
          img: 'aros-cebolla.webp',
        },
        {
          id: 'patatas-fritas',
          title: 'Patatas fritas',
          short: 'Patatas frescas, peladas, cortadas en bastones y fritas en AOVE',
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
          short: 'Con canela y limón, receta tradicional.',
          long:
            'Cremoso, aromático y equilibrado en dulzor. El postre de siempre, como en casa.',
          img: 'arroz-con-leche.webp',
        },
        {
          id: 'natillas',
          title: 'Natillas caseras',
          short: 'Natillas caseras como las de toda la vida, pero con más cariño.',
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
