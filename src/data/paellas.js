// ============================================================================
// PAELLAS Y ARROCES — fuente única de datos
// ============================================================================
//
// La usan la página de San Fernando de Henares y la de Coslada, y también el
// marcado de datos estructurados. Si cambian los precios o las variedades, se
// tocan AQUÍ y solo aquí: así no se quedan desincronizados entre páginas.
//
// Precios facilitados por el negocio (agosto 2026).
// ============================================================================

export const TAMANOS = {
  pequena: '8–9 raciones',
  grande: '11–12 raciones',
}

export const FIANZA = 'Fianza de 20 € por la paella, reembolsable al devolverla.'

export const PAELLAS = [
  {
    nombre: 'Paella valenciana',
    descripcion: 'Receta tradicional con pollo y verduras.',
    precioPequena: 60,
    precioGrande: 70,
  },
  {
    nombre: 'Paella de verduras',
    descripcion: 'Solo con verduras, para quien prefiere una opción sin carne ni pescado.',
    precioPequena: 60,
    precioGrande: 70,
  },
  {
    nombre: 'Paella mixta',
    descripcion: 'Carne y marisco juntos. La más pedida para grupos.',
    precioPequena: 60,
    precioGrande: 70,
  },
  {
    nombre: 'Paella de marisco',
    descripcion: 'Arroz de marisco, con todo el sabor del mar.',
    precioPequena: 70,
    precioGrande: 80,
  },
  {
    nombre: 'Fideuá de sepia y gambas',
    descripcion: 'La versión con fideo en lugar de arroz, con sepia y gambas.',
    precioPequena: 70,
    precioGrande: 80,
  },
  {
    nombre: 'Paella de secreto, setas y trigueros',
    descripcion: 'Con secreto ibérico, setas y espárragos trigueros. Nuestra versión más de cuchara.',
    precioPequena: 70,
    precioGrande: 80,
  },
  {
    nombre: 'Arroz negro',
    descripcion: 'Con tinta de calamar y un sabor intenso a mar.',
    precioPequena: 70,
    precioGrande: 80,
  },
  {
    nombre: 'Arroz a banda',
    descripcion: 'Arroz de pescado, sabroso y untuoso.',
    precioPequena: 70,
    precioGrande: 80,
  },
  {
    nombre: 'Paella de pulpo y gambones',
    descripcion: 'Una de nuestras combinaciones más pedidas.',
    precioPequena: 75,
    precioGrande: 90,
  },
  {
    nombre: 'Arroz con bogavante',
    descripcion: 'Para ocasiones especiales.',
    precioPequena: 75,
    precioGrande: 90,
  },
]

/** Datos estructurados de la carta de arroces, enlazados al negocio real. */
export function menuPaellasJsonLd(idPagina) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    '@id': `${idPagina}#carta`,
    name: 'Paellas y arroces por encargo',
    inLanguage: 'es',
    provider: { '@id': 'https://www.elkiloycuarto.es/#restaurant' },
    hasMenuSection: {
      '@type': 'MenuSection',
      name: 'Paellas y arroces',
      description:
        'Paellas y arroces caseros por encargo. Dos tamaños: 8–9 y 11–12 raciones. La disponibilidad puede variar según el día.',
      hasMenuItem: PAELLAS.map((p) => ({
        '@type': 'MenuItem',
        name: p.nombre,
        description: p.descripcion,
        offers: [
          {
            '@type': 'Offer',
            name: TAMANOS.pequena,
            price: p.precioPequena,
            priceCurrency: 'EUR',
          },
          {
            '@type': 'Offer',
            name: TAMANOS.grande,
            price: p.precioGrande,
            priceCurrency: 'EUR',
          },
        ],
      })),
    },
  }
}
