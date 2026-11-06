EUREMA — sitio estático (listo para Netlify)

ESTRUCTURA
  index.html                 → el mundo (página de inicio)
  favicon.svg
  algebra/
    index.html               → índice de Álgebra (8 temas)
    factorizacion/           → (cuando la tengas) aquí va tu herramienta, como index.html
    ...

CÓMO PUBLICAR
  1. Descomprime este zip.
  2. En app.netlify.com/drop arrastra la carpeta completa.
  3. Para actualizar: vuelve a arrastrar la carpeta al mismo sitio (Deploys → drag & drop).

CÓMO CONECTAR UNA HERRAMIENTA AL ÍNDICE DE ÁLGEBRA
  1. Crea su carpeta dentro de algebra/ (ej. algebra/factorizacion/) y pon adentro tu
     archivo renombrado como index.html.
  2. Abre algebra/index.html, busca la lista TOOLS y cambia url:null por la ruta de la
     carpeta. Ejemplo:  url:'factorizacion/'
     (cada fila trae la carpeta sugerida como comentario al final de la línea).
  3. Cuando la herramienta esté completa, pon hecho:true en esa fila.

NOTAS
  - Las otras cinco materias (Aritmética, Cálculo, Física, Geometría, Trigonometría) muestran
    "próximamente". En index.html, dentro del bloque WORLDS, cambia url:null por la ruta de
    su índice (ej. url:'geometria/') cuando existan.
  - Las herramientas deben vivir en este mismo sitio (misma carpeta), no en otro sitio de Netlify.
