# Checklist SEO local — Kilo y Cuarto

Acciones manuales a realizar tras cada despliegue (FTP a Arsys) y seguimiento
recomendado en Google Search Console y en el Perfil de Empresa de Google.

## 1. Después de cada despliegue

- [ ] Subir el contenido completo de `dist/` (incluido `.htaccess`, que está
      oculto) a `html/` en Arsys, como siempre.
- [ ] Abrir `https://www.elkiloycuarto.es/sitemap.xml` en el navegador y
      comprobar que carga bien y que aparecen las páginas nuevas.
- [ ] Comprobar en el propio navegador que estas URL cargan sin errores:
      `/pollo-asado-san-fernando-de-henares`, `/paellas-san-fernando-de-henares`,
      `/asados-por-encargo`.

## 2. Google Search Console

- [ ] Verificar que la propiedad `https://www.elkiloycuarto.es` sigue
      verificada (ya lo estaba).
- [ ] Reenviar el sitemap: **Sitemaps → Añadir sitemap nuevo →**
      `sitemap.xml` (aunque ya estuviera enviado, para que relea las URL
      nuevas).
- [ ] **Inspección de URLs**: inspeccionar la portada
      (`https://www.elkiloycuarto.es/`) y pulsar **"Solicitar indexación"**.
- [ ] Repetir la inspección y solicitud de indexación para cada página nueva:
  - `/pollo-asado-san-fernando-de-henares`
  - `/paellas-san-fernando-de-henares`
  - `/asados-por-encargo`
- [ ] En **Indexación → Páginas**, revisar qué canonical ha seleccionado
      Google para cada URL nueva (debe coincidir con la propia URL, sin
      `localhost` ni redirecciones).
- [ ] En **Rendimiento**, filtrar por consulta que contenga
      "san fernando de henares" y revisar impresiones, clics, CTR y posición
      media.
- [ ] Comparar el periodo de **últimos 28 días** con **últimos 3 meses** para
      ver tendencia, no solo la foto actual.
- [ ] Revisar cuántas de las impresiones/clics vienen ya de las páginas
      nuevas (`/pollo-asado-san-fernando-de-henares`, etc.) frente a la
      portada.
- [ ] Repetir esta revisión completa a las **4, 8 y 12 semanas** del
      despliegue, para ver evolución real (el posicionamiento local tarda en
      moverse).

## 3. Perfil de Empresa de Google (Google Business Profile)

Esto no se puede tocar desde el código; hay que hacerlo desde
[business.google.com](https://business.google.com):

- [ ] Revisar que la **categoría principal** sea la más específica posible
      (p. ej. "Restaurante de comida para llevar" en vez de "Restaurante"
      genérico).
- [ ] Completar el perfil al 100 % desde **"Completar información"**:
      descripción del negocio, productos/servicios, atributos, fotos nuevas,
      preguntas y respuestas.
- [ ] Publicar **Posts** en Google con cierta regularidad (ofertas, menú del
      día, fotos de platos) — Google valora la actividad reciente.
- [ ] Pedir reseñas nuevas de forma natural (con el QR ya generado) y
      **responder** a las reseñas recientes, buenas y malas.
- [ ] Medir en el propio panel de Google Business Profile las llamadas, los
      clics en "Cómo llegar" y las visitas al sitio web/carta, para cruzarlos
      con lo que se vea en Search Console.

## 4. Directorios y citations (NAP consistency)

El nombre, dirección y teléfono deben coincidir exactamente en todos los
directorios donde aparezca el negocio:

- [ ] **Sanfer es Comercio**: pedir que sustituyan la URL antigua
      (`negocio.site`), el email antiguo y el horario incorrecto (aparece
      como apertura a las 09:00) por los datos actuales:
      `https://www.elkiloycuarto.es`, `encargos@kiloycuarto.es`,
      horario 09:30–15:30.
- [ ] **QDQ**: corregir la dirección incompleta.
- [ ] **OpenStreetMap** y otros directorios: revisar que no clasifiquen el
      negocio como "comida rápida" (fast food) en vez de comida casera /
      para llevar.
- [ ] Revisar otros directorios habituales (El Tenedor, TripAdvisor, Páginas
      Amarillas, Yelp) y unificar nombre, dirección, teléfono y horario.
- [ ] Buscar (y, si procede, solicitar) menciones o enlaces desde fuentes
      locales legítimas: Ayuntamiento de San Fernando de Henares,
      asociaciones de comerciantes, prensa local, negocios cercanos.

## 5. Qué NO hacer

- No crear páginas nuevas para Coslada, Torrejón de Ardoz u otros municipios
  donde el negocio no tiene local físico (riesgo de "páginas puerta" /
  contenido duplicado, penalizable).
- No comprar reseñas ni pedir reseñas de forma masiva y no natural.
- No repetir "San Fernando de Henares" de forma forzada en todas las frases:
  Google penaliza el keyword stuffing.
