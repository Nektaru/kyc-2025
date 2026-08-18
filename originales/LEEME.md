# Originales

Imágenes y vídeos en su calidad original, tal y como llegaron.

No se usan directamente en la web: de aquí salen las versiones optimizadas
(.webp, iconos, GIF) que sí van en `src/assets/` y `public/`. Se guardan para
poder regenerarlas si hace falta otro tamaño o formato.

- `new-favicon.png` — origen de los iconos del sitio.
  Regenerar con: `node scripts/make-favicon.mjs originales/new-favicon.png`
- `paella-valenciana.png` — origen de `src/assets/products/paella-valenciana.webp`
