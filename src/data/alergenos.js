// ============================================================================
// ALÉRGENOS — Reglamento (UE) 1169/2011
// ============================================================================
//
// Información revisada en cocina por Kilo y Cuarto.
//
// CÓMO EDITAR:
//   - Las claves de `alergenosPorPlato` son los `id` de cada producto en
//     Products.jsx.
//   - Los valores deben ser claves EXACTAS de ALERGENOS (minúsculas, y
//     `frutosSecos` en camelCase). Si se escribe una clave que no existe,
//     `npm run build` falla y avisa: así un error de tecleo nunca puede
//     ocultar un alérgeno en la web.
//   - Al añadir un plato nuevo a la carta hay que añadirlo también aquí, o el
//     build avisará de que falta.
//
// Si en algún momento deja de estar revisada, poner ALERGENOS_REVISADOS a
// false: la web dejará de mostrar listas y volverá a invitar a preguntar por
// teléfono o en tienda.
// ============================================================================

export const ALERGENOS_REVISADOS = true

// Alérgenos de declaración obligatoria que se manejan en la cocina.
// (No se incluyen los altramuces porque no se usan en ningún plato.)
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
  // El sésamo no tiene emoji propio, así que usa un icono SVG dibujado a
  // medida (ver Alergenos.jsx). Evitamos descargar iconos de terceros porque
  // los pictogramas de alérgenos suelen tener licencia.
  sesamo: { nombre: 'Sésamo', svgId: 'sesamo' },
  sulfitos: { nombre: 'Sulfitos', icono: '🍷' },
  moluscos: { nombre: 'Moluscos', icono: '🦑' },
}

export const alergenosPorPlato = {
  // ---- Nuestros asados ----
  'pollo-asado': { alergenos: ['soja'] },
  'costillas-bbq': { alergenos: ['soja', 'sulfitos'] },

  // ---- Nuestros acompañantes ----
  rusa: { alergenos: ['huevo', 'pescado'] },
  panaderas: { alergenos: [] },
  migas: { alergenos: ['gluten'] },
  'huevos-rellenos': { alergenos: ['huevo', 'pescado'] },
  'pisto-manchego': { alergenos: ['huevo'] },

  // ---- Nuestras carnes ----
  albondigas: { alergenos: ['gluten'] },
  rusos: { alergenos: ['gluten', 'huevo'] },
  'filete-pollo': { alergenos: ['gluten', 'huevo'] },
  'pechuga-villaroy': { alergenos: ['gluten', 'huevo', 'lacteos'] },
  'pollo-ajillo': { alergenos: [] },
  'berenjena-rellena': { alergenos: ['lacteos'] },
  'rabo-de-toro': { alergenos: ['sulfitos', 'gluten'] },

  // ---- Nuestros pescados ----
  'merluza-brocoli': { alergenos: ['pescado', 'lacteos', 'crustaceos'] },
  'bacalao-riojana': { alergenos: ['pescado'] },
  'pim-rell': { alergenos: ['pescado', 'lacteos', 'gluten'] },

  // ---- Paellas y arroces ----
  'paella-valenciana': { alergenos: [] },
  'paella-pulpo-gambones': { alergenos: ['moluscos', 'crustaceos'] },
  'arroz-negro': { alergenos: ['moluscos'] },
  'arroz-hindu': { alergenos: ['lacteos', 'frutosSecos'] },
  'risotto-funghi': { alergenos: ['lacteos'] },

  // ---- Nuestras pastas ----
  'tallarines-verduras': { alergenos: ['gluten', 'soja'] },
  'macarrones-chorizo': { alergenos: ['gluten', 'lacteos'] },
  'ravioli-3-formaggi': { alergenos: ['gluten', 'lacteos', 'huevo'] },
  'tagliatelle-marinara': { alergenos: ['gluten', 'moluscos', 'crustaceos'] },
  'tortellini-ricotta-espinacas': { alergenos: ['gluten', 'lacteos', 'huevo'] },

  // ---- Nuestros tortillones ----
  'tortilla-patata': { alergenos: ['huevo'] },
  'tortilla-calabacin': { alergenos: ['huevo'] },
  'tortilla-chorizo': { alergenos: ['huevo'] },
  'tortilla-morcilla': { alergenos: ['huevo'] },
  'tortilla-queso-cabra': { alergenos: ['huevo', 'lacteos'] },

  // ---- Nuestras ensaladas ----
  'ensalada-cabra': { alergenos: ['lacteos', 'frutosSecos', 'sulfitos'] },
  'ensalada-cesar': { alergenos: ['gluten', 'lacteos', 'huevo'] },
  'ensalada-pollo': { alergenos: ['mostaza'] },

  // ---- Nuestros fritos ----
  croquetas: { alergenos: ['gluten', 'lacteos', 'huevo'] },
  'aros-cebolla': { alergenos: ['gluten'] },
  'patatas-fritas': { alergenos: ['gluten'] },

  // ---- Nuestros postres ----
  'arroz-leche': { alergenos: ['lacteos'] },
  natillas: { alergenos: ['lacteos', 'huevo', 'gluten'] },

  // ---- Encargos especiales ----
  'paletilla-aranda': { alergenos: [] },
  'paletilla-cochinillo': { alergenos: [] },
  cochinillo: { alergenos: [] },
  capon: { alergenos: ['frutosSecos'] },
  'mejillones-vinagreta': { alergenos: ['moluscos', 'sulfitos'] },
  'salpicon-marisco': { alergenos: ['crustaceos', 'moluscos'] },
}

/**
 * Devuelve los alérgenos de un plato, o null si la información todavía no
 * está revisada (en ese caso la web invita a preguntar).
 *
 * Si una clave no existe se avisa por consola en lugar de descartarla en
 * silencio: ocultar un alérgeno sin avisar sería el peor fallo posible aquí.
 * El script scripts/check-alergenos.mjs impide además que eso llegue a
 * publicarse, porque hace fallar el build.
 */
export function getAlergenos(id) {
  if (!ALERGENOS_REVISADOS) return null
  const entrada = alergenosPorPlato[id]
  if (!entrada) return null

  return entrada.alergenos.map((clave) => {
    const alergeno = ALERGENOS[clave]
    if (!alergeno) {
      console.error(
        `[alergenos] El plato "${id}" declara "${clave}", que no existe en ALERGENOS. Revisa src/data/alergenos.js.`
      )
      // Se muestra la clave tal cual antes que no mostrar nada.
      return { nombre: String(clave), icono: '⚠️' }
    }
    return alergeno
  })
}
