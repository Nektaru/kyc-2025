# Originales

Imágenes y vídeos en su calidad original, tal y como llegaron.

No se usan directamente en la web: de aquí salen las versiones optimizadas
(.webp, iconos, GIF) que sí van en `src/assets/` y `public/`. Se guardan para
poder regenerarlas si hace falta otro tamaño o formato.

- `new-favicon.png` — origen de los iconos del sitio.
  Regenerar con: `node scripts/make-favicon.mjs originales/new-favicon.png`
- `paella-valenciana.png` — origen de `src/assets/products/paella-valenciana.webp`

Fotos de plato (agosto 2026). El nombre del original no siempre coincide con
el del archivo que usa la web:

| Original                 | Va a `src/assets/products/` |
| ------------------------ | --------------------------- |
| `costillas.webp`         | `costillas.webp`            |
| `filetes-empanados.webp` | `filete-pollo.webp`         |
| `albondigas.webp`        | `albondigas.webp`           |
| `natillas.webp`          | `natillas.webp`             |
| `tallarines.webp`        | `tallarines-verduras.webp`  |
| `croquetas-jamon.webp`   | `croquetas.webp`            |
| `panaderas.webp`         | `panaderas.webp`            |
