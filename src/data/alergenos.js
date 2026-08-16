// ============================================================================
// ALÉRGENOS — Reglamento (UE) 1169/2011
// ============================================================================
//
// IMPORTANTE, LEER ANTES DE PUBLICAR:
//
// Esta lista es un BORRADOR. Está deducida únicamente de los ingredientes que
// ya aparecen escritos en la descripción de cada plato en Products.jsx, no de
// las recetas reales ni de las etiquetas de los proveedores.
//
// La información de alérgenos es de obligado cumplimiento legal y afecta a la
// salud de quien la lee. Antes de mostrarla en la web hay que revisarla plato
// por plato en cocina, teniendo en cuenta:
//   - Ingredientes que no salen en la descripción (rebozados, caldos, salsas,
//     espesantes, marinados...).
//   - Lo que digan las etiquetas de los productos comprados ya elaborados
//     (chorizo, morcilla, bacon, pasta fresca, galletas, salsas...).
//   - La contaminación cruzada real de la cocina (misma freidora, misma
//     superficie de trabajo, mismos utensilios).
//
// Los platos con `duda` son aquellos en los que la descripción no permite
// determinar los alérgenos: hay que rellenarlos a mano.
//
// CUANDO ESTÉ TODO REVISADO: poner ALERGENOS_REVISADOS = true.
// Mientras esté en false, la web no muestra ninguna lista: en su lugar invita
// a preguntar por teléfono o en tienda (que es lo correcto legalmente si no
// hay información confirmada).
// ============================================================================

export const ALERGENOS_REVISADOS = false

// Los 14 alérgenos de declaración obligatoria.
export const ALERGENOS = {
  gluten: { nombre: 'Gluten', icono: '🌾' },
  crustaceos: { nombre: 'Crustáceos', icono: '🦐' },
  huevo: { nombre: 'Huevo', icono: '🥚' },
  pescado: { nombre: 'Pescado', icono: '🐟' },
  cacahuetes: { nombre: 'Cacahuetes', icono: '🥜' },
  soja: { nombre: 'Soja', icono: '🌱' },
  lacteos: { nombre: 'Lácteos', icono: '🥛' },
  frutosSecos: { nombre: 'Frutos de cáscara', icono: '🌰' },
  apio: { nombre: 'Apio', icono: '🌿' },
  mostaza: { nombre: 'Mostaza', icono: '🌭' },
  sesamo: { nombre: 'Sésamo', icono: '🫓' },
  sulfitos: { nombre: 'Sulfitos', icono: '🍷' },
  altramuces: { nombre: 'Altramuces', icono: '🫛' },
  moluscos: { nombre: 'Moluscos', icono: '🦑' },
}

// Borrador por plato. La clave es el `id` del producto en Products.jsx.
export const alergenosPorPlato = {
  // ---- Nuestros asados ----
  'pollo-asado': {
    alergenos: [],
    duda: 'Confirmar la composición de la salsa especial de la casa y de la mezcla de especias.',
  },
  'costillas-bbq': {
    alergenos: [],
    duda: 'Las salsas barbacoa suelen llevar gluten, mostaza, soja o sulfitos. Revisar la receta o la etiqueta.',
  },

  // ---- Nuestros acompañantes ----
  rusa: { alergenos: ['huevo', 'pescado'] },
  panaderas: { alergenos: [] },
  migas: {
    alergenos: ['gluten'],
    duda: 'Revisar la etiqueta del chorizo y de la tocineta (pueden llevar sulfitos, soja o lactosa).',
  },
  'huevos-rellenos': { alergenos: ['huevo', 'pescado'] },
  'pisto-manchego': { alergenos: ['huevo'] },

  // ---- Nuestras carnes ----
  albondigas: {
    alergenos: [],
    duda: 'Las albóndigas suelen llevar pan rallado (gluten) y huevo, y la salsa puede llevar harina o vino. Confirmar.',
  },
  rusos: {
    alergenos: [],
    duda: 'Confirmar si llevan pan rallado o huevo, y qué es el "ingrediente secreto".',
  },
  'filete-pollo': {
    alergenos: ['gluten', 'huevo'],
    duda: 'Confirmado por el empanado; revisar si el pan rallado lleva además sésamo o soja.',
  },
  'pechuga-villaroy': { alergenos: ['gluten', 'huevo', 'lacteos'] },
  'pollo-ajillo': { alergenos: [] },
  'berenjena-rellena': {
    alergenos: ['lacteos'],
    duda: 'Confirmar si la carne picada lleva pan rallado (gluten) y si hay bechamel.',
  },
  'rabo-de-toro': {
    alergenos: ['sulfitos'],
    duda: 'Sulfitos por el vino. Confirmar si la salsa se liga con harina (gluten).',
  },

  // ---- Nuestros pescados ----
  'merluza-brocoli': { alergenos: ['pescado', 'lacteos', 'crustaceos'] },
  'bacalao-riojana': { alergenos: ['pescado'] },
  'pim-rell': { alergenos: ['pescado', 'lacteos', 'gluten'] },

  // ---- Paellas y arroces ----
  'paella-valenciana': {
    alergenos: [],
    duda: 'Confirmar el caldo (puede llevar apio, pescado o sulfitos) y si lleva marisco.',
  },
  'paella-pulpo-gambones': { alergenos: ['moluscos', 'crustaceos'] },
  'arroz-negro': {
    alergenos: ['moluscos'],
    duda: 'Confirmar si además lleva crustáceos o pescado en el caldo.',
  },
  'arroz-hindu': {
    alergenos: [],
    duda: 'Las salsas curry pueden llevar lácteos, frutos secos, mostaza o apio. Confirmar.',
  },
  'risotto-funghi': {
    alergenos: [],
    duda: 'El risotto suele llevar mantequilla y/o parmesano (lácteos) y caldo. Confirmar.',
  },

  // ---- Nuestras pastas ----
  'tallarines-verduras': { alergenos: ['gluten', 'soja'] },
  'macarrones-chorizo': { alergenos: ['gluten', 'lacteos'] },
  'ravioli-3-formaggi': {
    alergenos: ['gluten', 'lacteos'],
    duda: 'La pasta fresca rellena suele llevar huevo. Confirmar en la etiqueta.',
  },
  'tagliatelle-marinara': {
    alergenos: ['gluten', 'moluscos', 'crustaceos'],
    duda: 'Confirmar si la pasta lleva huevo.',
  },
  'tortellini-ricotta-espinacas': {
    alergenos: ['gluten', 'lacteos'],
    duda: 'Confirmar si la pasta lleva huevo.',
  },

  // ---- Nuestros tortillones ----
  'tortilla-patata': { alergenos: ['huevo'] },
  'tortilla-calabacin': { alergenos: ['huevo'] },
  'tortilla-chorizo': {
    alergenos: ['huevo'],
    duda: 'Revisar la etiqueta del chorizo de Potes.',
  },
  'tortilla-morcilla': {
    alergenos: ['huevo'],
    duda: 'La morcilla de Burgos puede llevar gluten. Revisar la etiqueta.',
  },
  'tortilla-queso-cabra': { alergenos: ['huevo', 'lacteos'] },

  // ---- Nuestras ensaladas ----
  'ensalada-cabra': { alergenos: ['lacteos', 'frutosSecos', 'sulfitos'] },
  'ensalada-cesar': {
    alergenos: ['gluten', 'lacteos', 'huevo', 'pescado'],
    duda: 'Pescado por las anchoas de la salsa césar y gluten por picatostes y empanado. Confirmar si la salsa lleva además mostaza.',
  },
  'ensalada-pollo': { alergenos: ['mostaza'] },

  // ---- Nuestros fritos ----
  croquetas: {
    alergenos: ['gluten', 'lacteos', 'huevo'],
    duda: 'Añadir "pescado" en la variedad de bacalao. Ojo también a la freidora compartida.',
  },
  'aros-cebolla': { alergenos: ['gluten'] },
  'patatas-fritas': {
    alergenos: [],
    duda: 'Si se fríen en el mismo aceite que rebozados, hay contaminación cruzada con gluten.',
  },

  // ---- Nuestros postres ----
  'arroz-leche': { alergenos: ['lacteos'] },
  natillas: { alergenos: ['lacteos', 'huevo', 'gluten'] },

  // ---- Encargos especiales ----
  'paletilla-aranda': {
    alergenos: [],
    duda: 'Confirmar si la salsa del asado se liga con harina o lleva vino.',
  },
  'paletilla-cochinillo': {
    alergenos: [],
    duda: 'Confirmar si la salsa del asado se liga con harina o lleva vino.',
  },
  cochinillo: {
    alergenos: [],
    duda: 'Confirmar si la salsa del asado se liga con harina o lleva vino.',
  },
  capon: {
    alergenos: ['frutosSecos'],
    duda: 'Confirmar si el relleno lleva pan rallado (gluten), huevo o sulfitos.',
  },
  'mejillones-vinagreta': {
    alergenos: ['moluscos'],
    duda: 'El vinagre puede aportar sulfitos. Confirmar.',
  },
  'salpicon-marisco': {
    alergenos: ['crustaceos', 'moluscos'],
    duda: 'El aliño puede llevar sulfitos o mostaza. Confirmar.',
  },
}

/**
 * Devuelve los alérgenos confirmados de un plato, o null si todavía no se ha
 * revisado la información (en ese caso la web invita a preguntar).
 */
export function getAlergenos(id) {
  if (!ALERGENOS_REVISADOS) return null
  const entrada = alergenosPorPlato[id]
  if (!entrada) return null
  return entrada.alergenos.map((clave) => ALERGENOS[clave]).filter(Boolean)
}
