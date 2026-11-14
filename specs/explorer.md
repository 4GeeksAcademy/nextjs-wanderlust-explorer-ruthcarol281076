# SPEC — Explorador (/experiences)

> **Fase 3 — Explorador**
> **Fecha:** 2026-11-14

## Objetivo

Página principal de exploración donde los usuarios pueden buscar experiencias por título y filtrarlas por categoría y destino. Los filtros y la búsqueda se reflejan en la URL como query parameters, permitiendo compartir vistas prefiltradas.

## Props y estado

| Nombre | Tipo | Origen | Descripción |
|---|---|---|---|
| `searchParams` | `{ search?: string; category?: string; destination?: string }` | `useSearchParams()` de Next.js | Query params de la URL al cargar la página |
| `favorites` | `number[]` | `useFavorites()` | IDs de experiencias favoritas para pasar a cada tarjeta |
| `toggleFavorite` | `(id: number) => void` | `useFavorites()` | Función para toggle de favorito en cada tarjeta |

## Comportamiento

### Búsqueda
- Input `SearchBar` que filtra experiencias cuyo título coincida con el término ingresado.
- Usar `new RegExp(term, 'i').test(experience.title)` para coincidencia case-insensitive.
- Escapar caracteres especiales del término antes de construir la regex (ej. `term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')`).

### Filtros
- **Categoría**: dropdown o grupo de botones con las 5 categorías (Adventure, Culture, Food, Wellness, Nature) más una opción "Todas".
- **Destino**: dropdown o input de texto que filtre por ciudad o país contenido en el campo `destination`.

### URL y estado
- Los filtros activos y el término de búsqueda deben reflejarse en la URL como query params:
  `/experiences?search=vela&category=adventure&destination=Croatia`
- Usar `useSearchParams` para leer y `useRouter` (con `router.push`) para actualizar la URL.
- Al cargar la página con query params existentes, los inputs deben prerrellenarse y los resultados ya deben estar filtrados.
- Los filtros deben funcionar de forma independiente y combinarse correctamente entre sí y con la búsqueda.

### Resultados
- Si no hay coincidencias, mostrar mensaje: **"No se encontraron resultados"**.
- Grid responsivo de `ExperienceCard`.
- Incluir `BackToTop` como control flotante compartido; ver `specs/back-to-top.md`.
- Durante la carga, la página (`src/app/experiences/page.tsx`) debe mostrar tarjetas `SkeletonCard` dentro del fallback de `Suspense`.

## UI/UX

- Barra de búsqueda en la parte superior, seguida de los filtros en una fila horizontal.
- Grid de tarjetas: 1 columna en móvil, 2 en tablet, 3-4 en escritorio.
- Placeholder en la barra de búsqueda: "Buscar experiencias...".

## Casos borde

- **Término de búsqueda vacío**: mostrar todas las experiencias (sin filtro de búsqueda).
- **Caracteres especiales en búsqueda**: deben escaparse para no romper la regex.
- **Filtro de categoría "Todas"**: no aplicar filtro de categoría.
- **Filtro de destino vacío**: no aplicar filtro de destino.
- **Combinación de todos los filtros**: búsqueda + categoría + destino debe funcionar simultáneamente.
- **URL manual**: si el usuario escribe `/experiences?search=xxx&category=invalid` con categoría inválida, ignorar el filtro de categoría.

## Componentes de Next.js aplicables

| Componente / API | Función |
|---|---|
| `useSearchParams` | Leer query params (`search`, `category`, `destination`) desde la URL |
| `useRouter` | Actualizar la URL con `router.push()` cuando cambien los filtros o la búsqueda |
| `usePathname` | Obtener la ruta base para construir la URL con query params |
| `Link` | Navegación cliente a la página de detalle de cada experiencia |
| `Suspense` | Envolver componentes que usen `useSearchParams` para evitar errores de hidratación |

## Dependencias

- `SearchBar` componente
- `FilterBar` componente
- `ExperienceCard` componente
- `useExperiences` custom hook
- `BackToTop` control flotante compartido (especificación: `specs/back-to-top.md`)
- `SkeletonCard` como placeholder de carga dentro de `Suspense`
- `useSearchParams`, `useRouter`, `usePathname` de Next.js

## Stack técnico y restricciones

| Tecnología | Versión / Detalle |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Lenguaje** | TypeScript (tipado estricto) |
| **Estilos** | Tailwind CSS v4 |
| **Fuentes** | Geist / Geist Mono (Google Fonts vía `next/font`) |
| **Estado global** | React Context API + `useState` (sin Redux, Zustand ni librerías externas) |
| **Routing** | App Router (`page.tsx` con `Suspense` para `useSearchParams`) |
| **Navegación cliente** | `next/navigation` (`useRouter`, `useSearchParams`, `usePathname`) |
| **SEO** | Metadata exportable desde server component |
| **Accesibilidad** | Roles ARIA, `aria-live` para resultados, `aria-label` en controles, `role="search"` |
| **Animaciones** | CSS `@keyframes` (fade-in, stagger) + Tailwind `animate-*` |
| **Dataset** | Local (`src/data/experiences.ts`), filtrado con `useMemo` |
| **Búsqueda** | Regex case-insensitive con escape de caracteres especiales; debounce 300ms en SearchBar |
| **URL** | Query parameters compartibles (`?search=&category=&destination=`) |
| **Condiciones** | Sin persistencia de datos, sin API externa, sin autenticación, sin base de datos |

## Criterios de aceptación

- [ ] La búsqueda filtra resultados por título usando una coincidencia con regex case-insensitive.
- [ ] Los filtros de categoría y destino funcionan de forma independiente y se combinan correctamente con la búsqueda.
- [ ] Los filtros activos y el término de búsqueda se reflejan en la URL como query params.
- [ ] Al cargar la página con query params existentes, los inputs están prerrellenados y los resultados ya están filtrados.
- [ ] Si no hay coincidencias, se muestra "No se encontraron resultados".
- [ ] El grid de tarjetas es responsivo (1 col móvil, 2 tablet, 3-4 escritorio).
- [ ] (Generales) `useEffect` se usa correctamente con arrays de dependencias adecuados (sin bucles infinitos ni dependencias faltantes).
- [ ] (Generales) Los tipos e interfaces de TypeScript están definidos y se usan de forma consistente.
- [ ] (Generales) La app es responsiva y visualmente coherente entre páginas.