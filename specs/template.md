# Template de SPEC

> Usar esta estructura para cada página/componente del proyecto.

## Objetivo

Descripción breve de qué debe lograr esta página o componente.

## Props y estado

| Nombre | Tipo | Origen | Descripción |
|---|---|---|---|
| `prop1` | `string` | Padre | ... |
| `state1` | `boolean` | Local | ... |

## Comportamiento

- Regla 1
- Regla 2
- Interacciones con URL (si aplica)

## UI/UX

Descripción textual de la interfaz, layout, colores, animaciones.

## Casos borde

- Estado vacío
- Error
- Valores límite

## Componentes de Next.js aplicables

| Componente / API | Función |
|---|---|
| `Link` | Navegación cliente entre rutas |
| `useSearchParams` | Leer query params de la URL |
| (Agregar filas según el caso) | |

## Dependencias

- Lista de dependencias del componente/página.

## Stack técnico y restricciones

| Tecnología | Versión / Detalle |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Lenguaje** | TypeScript (tipado estricto) |
| **Estilos** | Tailwind CSS v4 |
| **Fuentes** | Geist / Geist Mono (Google Fonts vía `next/font`) |
| **Estado global** | React Context API + `useState` (sin Redux, Zustand ni librerías externas) |
| **Routing** | App Router (`page.tsx`, `layout.tsx`, rutas dinámicas `[id]`) |
| **Navegación cliente** | `next/link` (`Link`) + `next/navigation` (`useRouter`, `usePathname`, `useSearchParams`) |
| **SEO** | `generateMetadata` / `export metadata` en server components; `document.title` en client components |
| **Accesibilidad** | Roles ARIA, `aria-label`, `aria-hidden`, skip-to-content, `aria-live`, `aria-current` |
| **Animaciones** | CSS `@keyframes` (fade-in, fade-in-up, stagger) + Tailwind `animate-*` |
| **Dataset** | Local (`src/data/experiences.ts`), 100 experiencias estáticas |
| **Imágenes** | URLs externas (`placehold.co`) con `loading="lazy"` |
| **Condiciones** | Sin persistencia de datos, sin API externa, sin autenticación, sin base de datos |

## Criterios de aceptación

- [ ] Criterio 1
- [ ] Criterio 2
- [ ] (Generales) `useEffect` se usa correctamente con arrays de dependencias adecuados (sin bucles infinitos ni dependencias faltantes).
- [ ] (Generales) Los tipos e interfaces de TypeScript están definidos y se usan de forma consistente.
- [ ] (Generales) La app es responsiva y visualmente coherente entre páginas.