# SPEC — Home (/)

> **Fase 2 — Home**
> **Fecha:** 2026-11-14

## Objetivo

Página de inicio con una sección hero llamativa que invite al usuario a explorar experiencias, y una navegación clara hacia el explorador.

La sección principal está implementada por el componente compartido `HeroSection` (`src/components/HeroSection.tsx`).

## Props y estado

| Nombre | Tipo | Origen | Descripción |
|---|---|---|---|
| — | — | — | Página estática sin props. Usa `Link` de Next.js para navegación. |

## Comportamiento

- Sección hero con:
  - Título principal (ej. "Descubre experiencias únicas alrededor del mundo")
  - Subtítulo descriptivo (ej. "Explora, filtra y guarda las mejores actividades en cada destino")
  - Botón CTA "Explorar ahora" que navega a `/experiences` usando `next/link`
- La navegación debe ser del lado del cliente (sin recarga completa de página).
- Sección opcional "Experiencias destacadas" mostrando 3-4 tarjetas del dataset.

## UI/UX

- El Hero usa un gradiente teal con acentos cálidos y la imagen local `public/images/home/image-background-1.jpeg` en un panel lateral.
- La imagen se muestra solo en escritorio (`lg` en adelante), centrada y sin deformación (`object-contain`), sobre un fondo blanco. La imagen y sus capas de color tienen opacidad del 75%.
- En escritorio, el texto se presenta en una columna a la izquierda y la imagen a la derecha. Ambas comienzan a la misma altura; el ancho de la columna y su padding deben mantener una separación para que el texto no se superponga con la imagen.
- El tamaño del título se reduce en escritorio para que el contenido permanezca dentro del área del Hero.
- En móvil y tablet se conserva el diseño centrado existente y se oculta el panel de imagen.
- Colores coherentes con la marca Wanderlust (tonos azul profundo, blanco, toques cálidos).
- Botón CTA con hover effect.

## Casos borde

- **Sin experiencias destacadas**: si se decide no mostrar destacadas, la página debe verse completa solo con el hero.

## Componentes de Next.js aplicables

| Componente / API | Función |
|---|---|
| `Link` | Navegación cliente desde el botón CTA del hero hacia `/experiences` |
| `page.tsx` (App Router) | Página estática renderizada en la ruta `/` |

## Stack técnico y restricciones

| Tecnología | Versión / Detalle |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Lenguaje** | TypeScript (tipado estricto) |
| **Estilos** | Tailwind CSS v4 |
| **Fuentes** | Geist / Geist Mono (Google Fonts vía `next/font`) |
| **Estado global** | React Context API + `useState` (sin Redux, Zustand ni librerías externas) |
| **Routing** | App Router (`page.tsx`, rutas estáticas) |
| **Navegación cliente** | `next/link` (`Link`) |
| **SEO** | Metadata exportable desde server component |
| **Accesibilidad** | Roles ARIA, `aria-label`, `aria-hidden` |
| **Animaciones** | CSS `@keyframes` (fade-in-up) + Tailwind `animate-*` |
| **Condiciones** | Sin persistencia de datos, sin API externa, sin autenticación, sin base de datos |

## Criterios de aceptación

- [ ] La Home incluye un botón que navega a `/experiences`.
- [ ] La navegación desde el hero no recarga la página (App Router cliente).
- [ ] El hero es responsivo (se ve bien en móvil y escritorio).
- [ ] (Generales) `useEffect` se usa correctamente con arrays de dependencias adecuados (sin bucles infinitos ni dependencias faltantes).
- [ ] (Generales) Los tipos e interfaces de TypeScript están definidos y se usan de forma consistente.
- [ ] (Generales) La app es responsiva y visualmente coherente entre páginas.