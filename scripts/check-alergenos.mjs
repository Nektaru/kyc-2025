// Comprueba que la tabla de alérgenos es coherente con la carta ANTES de
// construir la web. Si algo no cuadra, el build falla.
//
// El fallo que evita: una clave mal escrita ("Soja" en vez de "soja") no da
// error en JavaScript, simplemente no encuentra el alérgeno y este desaparece
// de la lista que ve el cliente. En información de alérgenos, mostrar de menos
// es peligroso, así que preferimos no publicar.

import { readFileSync } from 'node:fs'
import { ALERGENOS, alergenosPorPlato, ALERGENOS_REVISADOS } from '../src/data/alergenos.js'

const src = readFileSync(new URL('../src/pages/Products.jsx', import.meta.url), 'utf8')
const idsCarta = [...src.matchAll(/^\s{10}id: '([^']+)'/gm)].map((m) => m[1])

const clavesValidas = Object.keys(ALERGENOS)
const errores = []

// 1) Claves de alérgeno inexistentes
for (const [id, entrada] of Object.entries(alergenosPorPlato)) {
  for (const clave of entrada.alergenos) {
    if (!clavesValidas.includes(clave)) {
      errores.push(
        `El plato "${id}" declara el alérgeno "${clave}", que no existe.\n` +
          `      Claves válidas: ${clavesValidas.join(', ')}`
      )
    }
  }
}

// 2) Platos de la carta sin información de alérgenos
for (const id of idsCarta) {
  if (!alergenosPorPlato[id]) {
    errores.push(`El plato "${id}" está en la carta pero no tiene alérgenos definidos.`)
  }
}

// 3) Entradas que ya no corresponden a ningún plato (aviso, no error)
const sobrantes = Object.keys(alergenosPorPlato).filter((id) => !idsCarta.includes(id))

if (errores.length) {
  console.error('\n✗ Error en la tabla de alérgenos (src/data/alergenos.js):\n')
  errores.forEach((e) => console.error('  - ' + e))
  console.error('')
  process.exit(1)
}

if (sobrantes.length) {
  console.warn(`⚠ Alérgenos definidos para platos que ya no están en la carta: ${sobrantes.join(', ')}`)
}

const estado = ALERGENOS_REVISADOS ? 'visibles en la web' : 'ocultos (pendientes de revisión)'
console.log(`✓ Alérgenos: ${idsCarta.length} platos comprobados, ${estado}.`)
