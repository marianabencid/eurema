EUREMA — paquete de publicación Netlify

ESTADO DE ESTA ENTREGA
- Mundo principal y menú de Álgebra originales.
- Valor Numérico, Sistema de ecuaciones y Factorización integrados como proyectos Vite independientes.
- Índice de Geometría creado con enlaces a Elipse, Recta, Líneas notables e Hipérbola.
- Hipérbola integrada.
- Elipse, Recta y Líneas notables tienen páginas provisionales porque esos tres ZIP no estaban disponibles en los adjuntos recibidos en esta sesión. No se ha inventado su contenido.

PUBLICACIÓN
1. Sube el contenido de esta carpeta a un repositorio GitHub (cuando decidas usar GitHub).
2. En Netlify, importa el repositorio.
3. Build command: bash build.sh
4. Publish directory: _site
5. Node: 20 o superior recomendado.

Netlify ejecutará build.sh, instalará las dependencias de cada herramienta y compilará cada proyecto por separado. Así se conservan independientes y no hay que pedirle a Claude que reconstruya todo el mundo.

RUTAS
/
/algebra/
/algebra/valor-numerico/
/algebra/sistema-ecuaciones/
/algebra/factorizacion/
/geometria/
/geometria/hiperbola/
/geometria/elipse/ (provisional)
/geometria/recta/ (provisional)
/geometria/lineas-notables/ (provisional)

NOTA
Este paquete contiene los fuentes de las tres herramientas React/Vite y el script de compilación de Netlify. No se pudo completar una compilación local porque la instalación de paquetes npm agotó el tiempo disponible en este entorno. La compilación se ejecutará en el entorno de build de Netlify.
