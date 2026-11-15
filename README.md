# nextjs-wanderlust-explorer-ruthcarol281076

Proyecto NextJS Wanderlust Explorer - Experiencias y Alojamientos - Ruth Díaz

Wanderlust Explorer es una aplicación web en español para explorar experiencias de viaje, buscar y filtrar actividades, consultar sus detalles y guardar favoritas.

## Vista previa y demo

No hay una URL de demo pública configurada actualmente. Las imágenes y capturas de referencia del diseño se encuentran en `assets-dev/reference-image/`.

## Problema que resuelve

Encontrar actividades relevantes para un viaje puede requerir revisar muchas fuentes distintas. Wanderlust Explorer reúne experiencias en un catálogo navegable y permite descubrirlas por destino, categoría o texto de búsqueda, consultar información de cada actividad y mantener una lista de favoritas.

## Funcionalidades principales

- Explorar un catálogo de experiencias y abrir la página de detalle de cada una.
- Buscar experiencias y filtrar el catálogo; los criterios de navegación se reflejan en la URL.
- Guardar y quitar experiencias de favoritos, y consultar la página de favoritos.
- Consultar un perfil simulado con el recuento de favoritos.
- Mostrar estados de carga con skeletons, páginas 404 y metadatos por ruta.
- Presentar en el Hero de la Home una imagen local en escritorio, integrada con el gradiente teal; en móvil se conserva el diseño centrado sin el panel de imagen.
- Usar el botón flotante compartido **Back to Top** en el explorador y favoritos: siempre visible, fijo al viewport y con scroll suave; incluye una flecha ascendente en un círculo, dibujada en SVG e inspirada en una referencia del proyecto.
- Navegar por la interfaz en español.

## Stack tecnológico

| Tecnología | Uso |
| --- | --- |
| [Next.js](https://nextjs.org/) 16 (App Router) | Rutas, renderizado y estructura de la aplicación. |
| [React](https://react.dev/) 19 | Componentes e interfaz interactiva. |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estático en la aplicación. |
| [Tailwind CSS](https://tailwindcss.com/) 4 | Estilos y diseño adaptable. |
| React Context y hooks | Estado compartido de favoritos, sin una librería externa de estado. |
| Geist / Geist Mono (`next/font`) | Tipografía de la interfaz. |
| ESLint | Análisis estático y linting. |

El catálogo está definido localmente en `src/data/experiences.ts`; no requiere API ni base de datos externa. El Hero utiliza la imagen local `public/images/home/image-background-1.jpeg`; las imágenes de las experiencias se gestionan desde sus `imageUrl` locales.

## Requisitos previos

- Node.js compatible con la versión de Next.js instalada (se recomienda Node.js 20.9 o posterior).
- npm.

## Instalación y ejecución local

1. Clona el repositorio y entra en el directorio del proyecto:

   ```bash
   git clone <URL-del-repositorio>
   cd nextjs-wanderlust-explorer-ruthcarol281076
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000).

No se requieren variables de entorno para ejecutar la versión actual.

### Otros comandos

```bash
npm run lint   # Ejecuta ESLint
npm run build  # Genera la versión de producción
npm run start  # Sirve la compilación de producción (después de npm run build)
```

## Decisiones técnicas y arquitectura

- **App Router:** las páginas y layouts se organizan bajo `src/app/`. Las rutas principales son `/`, `/experiences`, `/experiences/[id]`, `/favorites` y `/profile`.
- **Componentes compartidos:** navegación, tarjetas, búsqueda, filtros, pie de página y otros elementos reutilizables viven en `src/components/`.
- **BackToTop fuera del flujo de página:** el componente se monta con `createPortal` en `document.body` para evitar que transformaciones o animaciones de ancestros alteren la referencia de `position: fixed`. Se usa en `/experiences` y `/favorites`; no depende del footer ni de la posición de scroll. Su icono SVG blanco combina una flecha ascendente vertical dentro de un círculo y se inspira en `assets-dev/reference-image/reference-others/icon-bac-to-top.jpg`.
- **Favoritos con Context:** `src/context/FavoritesContext.tsx` comparte el estado de favoritos entre las páginas sin añadir una dependencia de gestión de estado.
- **Datos locales:** las experiencias se importan desde `src/data/experiences.ts`. No hay backend, autenticación ni persistencia remota configurados.
- **Búsqueda y filtros en la URL:** permite conservar y compartir el estado de exploración mediante los parámetros de consulta.
- **Diseño y accesibilidad:** interfaz en español, diseño adaptable, metadata global y por ruta, skip-to-content, etiquetas accesibles y estados de carga.

## Documentación funcional (specs)

Los documentos detallan el comportamiento esperado y los criterios de aceptación de las páginas y componentes:

| Documento | Cobertura |
| --- | --- |
| [`specs/home.md`](specs/home.md) | Home y `HeroSection`. |
| [`specs/explorer.md`](specs/explorer.md) | Explorador, `SearchBar`, `FilterBar`, `ExperienceCard`, `useExperiences`, `SkeletonCard` y uso de `BackToTop`. |
| [`specs/experience-detail.md`](specs/experience-detail.md) | Detalle, `FavoriteButton`, estado de carga `DetailSkeleton` y estado `ExperienceNotFound`. |
| [`specs/favorites-context.md`](specs/favorites-context.md) | Estado compartido de favoritos. |
| [`specs/favorites-page.md`](specs/favorites-page.md) | Página de favoritos y uso compartido de `BackToTop`. |
| [`specs/profile.md`](specs/profile.md) | Perfil simulado. |
| [`specs/layout.md`](specs/layout.md) | Layout global, `Navbar`, `Footer` y 404 global. |
| [`specs/navbar.md`](specs/navbar.md) | Navegación principal. |
| [`specs/back-to-top.md`](specs/back-to-top.md) | Especificación independiente del componente compartido BackToTop. |
| [`specs/template.md`](specs/template.md) | Plantilla para nuevas especificaciones. |

## Roadmap

Posibles mejoras futuras, sujetas a definición:

- Conectar el catálogo a una API o fuente de datos real.
- Añadir persistencia de favoritos entre sesiones.
- Incorporar pruebas automatizadas para las interacciones y rutas principales.
- Completar y publicar una demo con contenido e imágenes definitivos.

## Licencia

No se ha definido ni incluido un archivo de licencia en el repositorio. Consulta con la persona responsable antes de reutilizar o distribuir el proyecto.

## Contacto

Proyecto atribuido en el encabezado a Ruth Díaz. No se ha especificado un correo u otro canal de contacto en este repositorio.

## Design References

Referencias visuales para el diseño del explorador. Se tomarán como inspiración sus patrones de descubrimiento de actividades, presentación de destinos y navegación; no se copiarán literalmente.

- [GuruWalk](https://www.guruwalk.com/es) — Referencia para descubrir tours y actividades por destino, y para presentar experiencias en tarjetas claras.
- [Tripadvisor](https://www.tripadvisor.com.ve/) — Referencia para explorar actividades y destinos, y para organizar información útil como valoraciones y opiniones.
- [GetYourGuide](https://www.getyourguide.com/es-es/) — Referencia para explorar y filtrar tours, actividades y experiencias, con información de destino y disponibilidad presentada de forma accesible.
