# SPEC — Botón Back to Top (uso compartido)

> **Componente:** `src/components/BackToTop.tsx`  
> **Fecha:** 2026-11-14

## Objetivo

Proveer un control flotante compartido que permita volver suavemente al inicio de la página. Debe permanecer visible y fijo respecto al viewport, independiente del contenido, del footer y de los ancestros de las páginas donde se utiliza.

## Props y estado

| Nombre | Tipo | Origen | Descripción |
|---|---|---|---|
| `portalRoot` | `HTMLElement \| null` | Estado local | Elemento `document.body` donde se monta el botón mediante un portal una vez que el componente está en el cliente. |

El componente no recibe props.

## Comportamiento

- Monta el botón en `document.body` mediante `createPortal`, para sacarlo del árbol visual de `<main>` y de cualquier ancestro con `transform`, `filter`, `perspective`, `contain` u otra propiedad que pueda establecer un bloque contenedor para `position: fixed`.
- Mientras `document.body` aún no está disponible en el cliente, no renderiza el botón.
- Al activarse, ejecuta `window.scrollTo({ top: 0, behavior: "smooth" })`.
- El botón permanece visible en todo momento; no depende de la posición de scroll ni de la cercanía al footer.
- Se usa de forma compartida en el explorador (`/experiences`) y en favoritos (`/favorites`).

## UI/UX

- Botón circular de 48 × 48 px, colocado a 24 px del borde inferior y derecho del viewport (`fixed bottom-6 right-6`).
- Fondo naranja (`#EA580C`), texto/icono blanco, sombra y cambios de color/escala al pasar el puntero o activar.
- El icono es un SVG de trazo blanco con una flecha ascendente vertical y punta angular, enmarcada por un círculo. El trazo fino del círculo y el trazo ligeramente más grueso de la flecha adaptan la referencia `assets-dev/reference-image/reference-others/icon-bac-to-top.jpg` al botón de 48 × 48 px.
- El SVG se muestra en 24 × 24 px y usa caps y joins redondeados.
- El SVG se centra dentro del botón sin usar `display: flex` en el botón.
- Etiqueta accesible: `aria-label="Volver al inicio de la página"`; el SVG es decorativo (`aria-hidden="true"`).

## Casos borde

- **Renderizado del servidor/hidratación:** no acceder a `document` durante el render del servidor; obtener `document.body` dentro de `useEffect`.
- **Página sin scroll:** el botón sigue visible y su acción mantiene el viewport en la parte superior.
- **Página con contenido largo:** el botón mantiene su separación del viewport al desplazarse, sin quedar situado al final del contenido ni pegado al footer.
- **Ancestros con transformaciones u otras propiedades de contención:** el portal debe evitar que esos ancestros redefinan la referencia del posicionamiento fijo.

## Componentes de Next.js aplicables

| Componente / API | Función |
|---|---|
| App Router | Incluir el componente en las páginas que ofrecen la acción compartida. |
| Client Component (`"use client"`) | Permite usar `useEffect`, estado local y APIs del navegador. |

## Dependencias

- React: `useEffect`, `useState`, `createPortal`.
- Tailwind CSS v4 para posición, dimensiones, color, sombra y estados interactivos.
- API del navegador: `document.body` y `window.scrollTo`.

## Stack técnico y restricciones

| Tecnología | Versión / Detalle |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Lenguaje** | TypeScript (tipado estricto) |
| **UI** | React 19, Client Component |
| **Estilos** | Tailwind CSS v4 |
| **Portal** | `react-dom` `createPortal`, destino `document.body` |
| **Posicionamiento** | CSS `position: fixed`; `block` en el botón; el icono SVG se centra con posicionamiento absoluto |
| **Accesibilidad** | `aria-label` en el botón, `aria-hidden` en el SVG decorativo |
| **Restricciones** | Sin dependencias externas adicionales, sin estado global, sin mostrar/ocultar por scroll, sin asociación al footer |

## Criterios de aceptación

- [ ] El botón está visible de forma continua en las páginas donde se incluye.
- [ ] Permanece a 24 px del borde inferior y derecho del viewport durante el scroll.
- [ ] No queda anclado al final del contenido ni al footer.
- [ ] Se renderiza en `document.body` mediante un portal para evitar ancestros que alteren el containing block de `position: fixed`.
- [ ] Al activarlo, vuelve suavemente al inicio de la página.
- [ ] El SVG muestra una flecha ascendente vertical con punta angular dentro de un círculo, inspirada en `assets-dev/reference-image/reference-others/icon-bac-to-top.jpg`, en trazo blanco de 24 × 24 px.
- [ ] El control tiene nombre accesible y el icono decorativo no se anuncia como contenido independiente.
- [ ] El renderizado servidor/cliente no accede a `document` antes del efecto de montaje.
