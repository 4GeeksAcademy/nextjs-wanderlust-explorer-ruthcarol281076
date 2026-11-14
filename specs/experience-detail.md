# SPEC — Detalle de experiencia (/experiences/[id])

> **Fase 4 — Detalle**
> **Fecha:** 2026-11-14

## Objetivo

Página de detalle de una experiencia individual, accesible desde el explorador o directamente por URL. Muestra la información completa de la experiencia y permite marcarla como favorita.

## Props y estado

| Nombre | Tipo | Origen | Descripción |
|---|---|---|---|
| `params` | `{ id: string }` | Next.js route params | ID de la experiencia desde la URL dinámica |
| `favorites` | `number[]` | `useFavorites()` | Para determinar si esta experiencia está en favoritos |
| `toggleFavorite` | `(id: number) => void` | `useFavorites()` | Para toggle de favorito |

## Comportamiento

- Leer `params.id` de la ruta dinámica del App Router.
- Buscar la experiencia correspondiente en el dataset local (`src/data/experiences.ts`).
- Mostrar la información completa:
  - Imagen grande de la experiencia
  - Título
  - Descripción completa
  - Categoría (con etiqueta visual)
  - Destino (ciudad y país)
  - Precio
  - Rating (con estrellas o valor numérico)
- Incluir `FavoriteButton` para marcar/desmarcar como favorita.
- Usar `useEffect` para actualizar `document.title` con el título de la experiencia.
- Botón para volver al explorador (`/experiences`).
- Manejar el caso de ID no encontrado.
- La página `src/app/experiences/[id]/page.tsx` muestra `DetailSkeleton` como fallback de `Suspense` mientras carga el detalle.
- La ruta `src/app/experiences/[id]/not-found.tsx` presenta el estado `ExperienceNotFound` cuando no existe el ID.

## UI/UX

- Diseño de dos columnas en escritorio (imagen grande a la izquierda, información a la derecha).
- En móvil, apilado verticalmente (imagen arriba, info abajo).
- Categoría mostrada como badge de color.
- Botón de volver con icono de flecha.

## Casos borde

- **ID no encontrado**: mostrar mensaje "Experiencia no encontrada" con enlace para volver al explorador.
- **ID inválido en la URL** (ej. texto no numérico): mismo tratamiento que ID no encontrado.
- **Favorito desde detalle**: el cambio debe reflejarse si el usuario navega de vuelta al explorador.

## Componentes de Next.js aplicables

| Componente / API | Función |
|---|---|
| `params` (route dynamic segment) | Acceder al `[id]` desde la URL dinámica (`experiences/[id]/page.tsx`) |
| `Link` | Botón para volver al explorador (`/experiences`) |
| `useEffect` (React, vía Next.js) | Actualizar `document.title` con el título de la experiencia |
| `notFound()` | Llamar a la función de Next.js para mostrar página 404 si el ID no existe |

## Dependencias

- Dataset de `@/data/experiences`
- `useFavorites` hook
- `FavoriteButton` componente
- `DetailSkeleton` fallback de carga de la página de detalle
- `ExperienceNotFound` estado 404 específico de la ruta de detalle
- `useEffect` para título del documento
- `Link` de Next.js para volver

## Stack técnico y restricciones

| Tecnología | Versión / Detalle |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Lenguaje** | TypeScript (tipado estricto) |
| **Estilos** | Tailwind CSS v4 |
| **Fuentes** | Geist / Geist Mono (Google Fonts vía `next/font`) |
| **Estado global** | React Context API + `useState` (sin Redux, Zustand ni librerías externas) |
| **Routing** | App Router, ruta dinámica `[id]`, `params: Promise<{ id: string }>` (Next.js 16) |
| **Navegación cliente** | `next/navigation` (`useRouter`, `notFound`) |
| **SEO** | `generateMetadata` dinámico con título, descripción e imágenes OG |
| **Accesibilidad** | Roles ARIA, `aria-label` en botones, `aria-hidden` en iconos decorativos |
| **Animaciones** | CSS `@keyframes` (fade-in-up) + Tailwind `animate-*` |
| **Dataset** | Local (`src/data/experiences.ts`), búsqueda por ID numérico |
| **Imágenes** | URLs externas (`placehold.co`) con `loading="lazy"` |
| **Condiciones** | Sin persistencia de datos, sin API externa, sin autenticación, sin base de datos |

## Criterios de aceptación

- [ ] El detalle muestra la experiencia correspondiente al ID de la ruta.
- [ ] Incluye FavoriteButton que refleja el estado actual de favorito.
- [ ] `useEffect` actualiza `document.title` con el título de la experiencia.
- [ ] Si el ID no existe, se muestra "Experiencia no encontrada".
- [ ] La página es responsiva (2 columnas en desktop, apilada en móvil).
- [ ] (Generales) `useEffect` se usa correctamente con arrays de dependencias adecuados (sin bucles infinitos ni dependencias faltantes).
- [ ] (Generales) Los tipos e interfaces de TypeScript están definidos y se usan de forma consistente.
- [ ] (Generales) La app es responsiva y visualmente coherente entre páginas.