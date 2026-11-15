# Wanderlust Explorer — Contexto del proyecto

## 1. Resumen

Wanderlust Explorer es un MVP en español para descubrir experiencias de viaje. Los usuarios pueden explorar un catálogo local, buscar y filtrar mediante parámetros compartibles en la URL, consultar detalles, guardar favoritos en estado de sesión y revisar un perfil simulado.

La Home utiliza un Hero con gradiente teal y acentos cálidos. Tiene una altura mínima de `calc(100vh - 4rem)` para ocupar el espacio disponible bajo la Navbar y evitar una franja vacía antes del Footer; conserva un degradado inferior hacia `gray-50`. En escritorio muestra la imagen local `public/images/home/image-background-1.jpeg` en un panel lateral, centrado sin deformación, con base blanca y capas de color semitransparentes. El texto se distribuye en una columna independiente y debe conservar separación respecto a la imagen; en móvil y tablet se mantiene el diseño centrado sin mostrar el panel.

## 2. Objetivos

- Crear una aplicación multipágina con React y Next.js.
- Permitir descubrir experiencias mediante búsqueda por título y filtros de categoría y destino.
- Mantener la búsqueda y los filtros en la URL para poder compartir vistas prefiltradas.
- Mostrar el detalle de cada experiencia y ofrecer una lista de favoritos.
- Construir una interfaz responsiva, clara y adecuada para un portfolio.

## 3. Usuarios

Personas que buscan actividades y experiencias de viaje y quieren encontrar, consultar y guardar opciones de distintos destinos.

## 4. Alcance funcional

### 4.1 Páginas

| Ruta | Descripción |
|---|---|
| `/` | Home con sección hero y botón para navegar al explorador. |
| `/experiences` | Explorador con listado, búsqueda y filtros. |
| `/experiences/[id]` | Detalle de una experiencia del dataset local. |
| `/favorites` | Listado de experiencias guardadas como favoritas. |
| `/profile` | Perfil simulado con resumen y cantidad de favoritos. |

La navegación principal debe estar disponible en todas las páginas.

Las interfaces de carga y no encontrado son parte de las rutas: `SkeletonCard` para el explorador, `DetailSkeleton` para detalles, `ExperienceNotFound` para IDs inválidos/inexistentes y `src/app/not-found.tsx` para el 404 global.

### 4.2 Explorador, búsqueda y filtros

- Mostrar las experiencias en una cuadrícula responsiva.
- Buscar por coincidencia en el título usando una expresión regular case-insensitive.
- Filtrar por categoría y destino; los filtros deben funcionar por separado y combinarse entre sí y con la búsqueda.
- El filtro de destino debe permitir encontrar experiencias por ciudad o país.
- Reflejar el término de búsqueda y los filtros activos en query parameters. Ejemplo:
  `/experiences?search=vela&category=adventure&destination=Croatia`
- Al cargar una URL con query parameters, prerrellenar los controles correspondientes y aplicar los filtros.
- Actualizar los parámetros al cambiar los controles sin recargar la página.
- Si no hay coincidencias, mostrar: **“No se encontraron resultados”**.

### 4.3 Favoritos

- Cada tarjeta debe incluir un control visual de corazón para guardar o quitar una experiencia de favoritos.
- El corazón debe indicar claramente el estado activo o inactivo.
- Los IDs favoritos deben mantenerse en estado React compartido y estar disponibles en el explorador, las tarjetas, Favoritos y Perfil.
- No se requiere persistencia: los favoritos pueden perderse al recargar la aplicación.
- El control flotante compartido `BackToTop` se incluye en `/experiences` y `/favorites`; permanece siempre visible, fijo al viewport y desplaza suavemente al inicio. Usa un SVG blanco de flecha ascendente dentro de un círculo, inspirado en `assets-dev/reference-image/reference-others/icon-bac-to-top.jpg`. Su especificación independiente está en `specs/back-to-top.md`.

### 4.4 Perfil

- Mostrar información estática de un usuario simulado.
- Mostrar el número de experiencias favoritas, sincronizado con el estado compartido.

## 5. Datos

- Crear `src/data/experiences.ts` con un array local de **100 experiencias**.
- Definir y reutilizar una interfaz TypeScript `Experience`.
- Cada experiencia debe contener, como mínimo:
  - `id`
  - `title`
  - `description`
  - `category`
  - `destination` (ciudad y país)
  - `price`
  - `rating`
  - `imageUrl`
- Categorías permitidas: `Adventure`, `Culture`, `Food`, `Wellness` y `Nature`.
- Los IDs deben ser únicos y aptos para construir las rutas de detalle.

## 6. Componentes y organización

Componentes requeridos como mínimo:

- `Navbar`
- `ExperienceCard`
- `SearchBar`
- `FilterBar`
- `HeroSection`, `Footer`, `FavoriteButton`, `SkeletonCard` y `BackToTop` como piezas compartidas o de presentación.

También se debe crear al menos un custom hook, por ejemplo, `useExperiences` o `useFilters`, para encapsular la lógica de filtrado.

La aplicación debe utilizar `useEffect` en al menos un componente, por ejemplo, para sincronizar resultados o actualizar el título del documento.

## 7. Requisitos técnicos

- Next.js con React, TypeScript y App Router.
- Stack implementado: Next.js 16, React 19, TypeScript, Tailwind CSS v4 y ESLint, con directorio `src` y alias `@/*`.
- No usar librerías externas de gestión de estado.
- Gestionar favoritos con `useState` y compartirlos mediante props o un contexto React.
- Usar `useSearchParams` y `usePathname` para leer los parámetros de búsqueda y detectar la ruta activa.
- La Navbar debe indicar visualmente el enlace activo.
- La interfaz debe adaptarse a móvil y escritorio.

## 8. Referencias visuales

Antes de implementar la interfaz, investigar y documentar en `README.md` entre 2 y 3 productos reales que sirvan como inspiración. La sección debe llamarse `## Design References`.

Referencias seleccionadas:

- [GuruWalk](https://www.guruwalk.com/es) — Referencia para descubrir tours y actividades por destino, y presentar experiencias en tarjetas.
- [Tripadvisor](https://www.tripadvisor.com.ve/) — Referencia para explorar actividades y destinos, con información de valoraciones y opiniones.
- [GetYourGuide](https://www.getyourguide.com/es-es/) — Referencia para explorar y filtrar tours y actividades, y presentar información de destino de forma accesible.

Registrar en el README los enlaces y una breve nota sobre los elementos relevantes de cada referencia, como tarjetas, búsqueda, filtros o presentación de destinos. Las referencias orientan el diseño, pero no deben copiarse literalmente.

## 9. Criterios de aceptación

- [ ] La Home incluye un botón que navega a `/experiences`.
- [ ] La Navbar aparece en todas las rutas y marca la ruta activa.
- [ ] El dataset contiene 100 experiencias válidas con IDs únicos.
- [ ] La búsqueda filtra por título sin distinguir mayúsculas y minúsculas.
- [ ] Categoría y destino pueden combinarse con la búsqueda.
- [ ] La URL refleja los filtros y permite restaurarlos al cargar una vista compartida.
- [ ] El detalle muestra la experiencia correspondiente al ID de la ruta.
- [ ] El usuario puede activar y desactivar favoritos desde una tarjeta.
- [ ] Favoritos y Perfil reflejan el estado compartido de favoritos.
- [ ] Se muestra el mensaje de estado vacío cuando no hay coincidencias.
- [ ] La interfaz es usable en móvil y escritorio.
- [ ] El README contiene la sección `Design References`.

## 10. Restricciones y decisiones

- Los datos son locales; no se requiere API ni base de datos.
- Los favoritos son temporales y no necesitan persistencia.
- No se permite Redux, Zustand u otra librería externa de estado.
- La búsqueda debe cumplir el requisito de comparación mediante regex case-insensitive. Para tratar el término ingresado como texto literal, se recomienda escapar los caracteres especiales antes de construir la expresión regular.
- Para compartir favoritos entre rutas del App Router, se necesita estado compartido de React situado en un nivel común de la aplicación, por ejemplo, un provider cliente en el layout raíz.
- Para mantener `BackToTop` realmente fijo al viewport, el componente se monta con `createPortal` en `document.body`; no debe ser descendiente visual de contenedores que puedan crear un containing block para `position: fixed` (por ejemplo, con `transform`, `filter`, `perspective`, `contain` o `will-change`). El icono SVG blanco (flecha ascendente vertical dentro de un círculo) se centra sin `display: flex` en el botón.
- La transición de aparición del `<main>` es solo por opacidad; evita usar `transform` en un ancestro del control flotante.

## 11. Especificaciones funcionales

Las especificaciones y sus criterios de aceptación están en `specs/`:

| Documento | Alcance |
|---|---|
| `specs/home.md` | Home y `HeroSection`. |
| `specs/explorer.md` | Explorador, búsqueda, filtros, hook, tarjetas, skeleton y uso de BackToTop. |
| `specs/experience-detail.md` | Detalle, botón de favoritos, skeleton y not-found de experiencia. |
| `specs/favorites-context.md` | Estado compartido de favoritos. |
| `specs/favorites-page.md` | Página de favoritos y BackToTop compartido. |
| `specs/profile.md` | Perfil simulado. |
| `specs/layout.md` | Shell global, Navbar, Footer y 404 global. |
| `specs/navbar.md` | Navegación principal. |
| `specs/back-to-top.md` | Componente BackToTop, independiente y de uso compartido. |
| `specs/template.md` | Plantilla base de especificaciones. |

## 12. Fuera de alcance

- Registro, inicio de sesión o autenticación real.
- Guardado persistente de favoritos.
- Backend, API o base de datos.
- Compra o reserva de experiencias.
- Gestión administrativa del catálogo.

## 13. Configuración externa y publicación

- No hay variables de entorno, API, base de datos ni autenticación requeridas en la implementación actual.
- La URL de demo pública, licencia y canal de contacto no están definidos en el repositorio; consultar `README.md` antes de publicar o reutilizar el proyecto.