EUREMA — PUBLICACIÓN SIN INSTALAR PROGRAMAS EN TU COMPUTADORA

IMPORTANTE
Este paquete contiene el código fuente. No se debe subir a Netlify Drop como si fuera un sitio estático, porque las tres actividades de Álgebra usan React + Vite y necesitan compilarse.

FLUJO
1. Extrae este ZIP en tu computadora usando la opción integrada de Windows: clic derecho > Extraer todo.
2. En github.com, crea un repositorio nuevo llamado eurema-site. Déjalo vacío (no agregues README, .gitignore ni licencia).
3. Dentro del repositorio, usa Add file > Upload files. Arrastra el CONTENIDO de esta carpeta extraída (no la carpeta contenedora completa) al área de carga. Si el navegador no acepta carpetas arrastradas, abre la carpeta extraída y selecciona todos sus archivos y carpetas con Ctrl+A; arrástralos al área de carga.
4. Espera que termine la carga y pulsa Commit changes.
5. En Netlify, ve a Add new site > Import an existing project > GitHub. Autoriza GitHub, selecciona el repositorio eurema-site.
6. Configuración de compilación:
   Base directory: (vacío)
   Build command: bash build.sh
   Publish directory: _site
   No agregues package directory ni funciones.
7. Pulsa Deploy. Netlify instalará las dependencias y compilará las actividades en sus servidores. No necesitas instalar Node.js ni Git.

PARA ACTUALIZAR UNA HERRAMIENTA MÁS ADELANTE
Reemplaza únicamente los archivos de esa carpeta en GitHub y haz Commit changes. Netlify volverá a compilar y publicar el sitio automáticamente.

ESTRUCTURA
- index.html: mundo principal
- algebra/index.html: índice de Álgebra
- algebra/valor-numerico, algebra/sistema-ecuaciones, algebra/factorizacion: actividades React/Vite
- geometria/index.html: índice provisional de Geometría
- geometria/hiperbola: actividad HTML recibida
- geometria/elipse, geometria/recta, geometria/lineas-notables: páginas provisionales pendientes de recibir sus ZIP originales

NOTAS
- Los archivos de Elipse, Recta y Líneas notables todavía no estaban disponibles cuando se preparó este paquete.
- La compilación se ejecuta en Netlify. Este entorno de trabajo no logró completar npm install por tiempo de espera, por lo que la primera compilación real debe validarse en el registro de Deploy de Netlify.
