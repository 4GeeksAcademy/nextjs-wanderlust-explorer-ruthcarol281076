# SPEC — Navbar

> **Fase 1 — Layout global y navegación**
> **Fecha:** 2026-11-14

## Objetivo

Barra de navegación principal visible en todas las páginas con enlaces a las rutas principales y resaltado visual de la ruta activa.

## Props y estado

| Nombre | Tipo | Origen | Descripción |
|---|---|---|---|
| `favoritesCount` | `number` | `useFavorites()` | Número de favoritos para mostrar en el enlace de Favoritos |
| `pathname` | `string` | `usePathname()` de Next.js | Ruta actual para determinar enlace activo |

## Comportamiento

- La Navbar debe estar presente en todas las páginas (incluida desde el layout raíz).
- Enlaces incluidos:
  - **Home** → `/`
  - **Experiences** → `/experiences`
  - **Favorites** → `/favorites` (mostrar contador de favoritos como badge)
  - **Profile** → `/profile`
- Usar `usePathname()` de Next.js para determinar qué enlace está activo.
- El enlace activo debe tener un estilo visual distintivo (ej. texto subrayado, color diferente, fondo resaltado).
- Usar componente `Link` de Next.js para la navegación cliente (sin recarga de página).
- Diseño responsivo:
  - **Desktop (≥768px)**: enlaces horizontales con espaciado uniforme.
  - **Móvil (<768px)**: menú hamburguesa que despliega los enlaces verticalmente.

## UI/UX

- Fondo oscuro o claro (definir tono, ej. slate-900 o white con sombra).
- El badge de favoritos debe ser un círculo pequeño con el número, ubicado junto al texto "Favorites".
- Animación suave en hover de los enlaces.
- En móvil, el menú hamburguesa debe tener un toggle visible y los enlaces deben aparecer con animación de despliegue.

## Casos borde

- **Ruta no coincide exactamente**: `/experiences/123` debe marcar `/experiences` como activo (coincidencia parcial).
- **Contador de favoritos en 0**: el badge debe mostrar `0` — no ocultarse.
- **Menú móvil cerrado por defecto**: al cargar en móvil, el menú debe estar colapsado.

## Componentes de Next.js aplicables

| Componente / API | Función |
|---|---|
| `Link` | Navegación cliente entre rutas sin recargar la página (en cada enlace) |
| `usePathname` | Hook de `next/navigation` para leer la ruta actual y determinar el enlace activo |

## Dependencias

- `useFavorites` hook de `FavoritesContext` (para el contador).
- `next/link` y `next/navigation` (`usePathname`).

## Criterios de aceptación

- [ ] Los 4 enlaces (Home, Experiences, Favorites, Profile) están presentes y navegan correctamente.
- [ ] El enlace de la ruta actual tiene un estilo visual diferente.
- [ ] `/experiences/123` marca "Experiences" como activo.
- [ ] El badge de favoritos muestra el número correcto de IDs.
- [ ] En móvil, el menú se colapsa y se despliega con un botón hamburguesa.
- [ ] La Navbar aparece en todas las páginas.
- [ ] La navegación no recarga la página (App Router cliente).
- [ ] La app tiene al menos 5 páginas distintas con navegación del lado del cliente (sin recargas completas de página entre rutas).