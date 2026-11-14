# SPEC — FavoritesContext

> **Fase 1 — Layout global y navegación**
> **Fecha:** 2026-11-14

## Objetivo

Proveer un estado compartido de favoritos que esté disponible en todas las páginas de la aplicación sin usar librerías externas de gestión de estado.

## Props y estado

| Nombre | Tipo | Origen | Descripción |
|---|---|---|---|
| `favorites` | `number[]` | `useState` en el provider | Array de IDs de experiencias marcadas como favoritas |
| `toggleFavorite` | `(id: number) => void` | `useState` setter | Agrega o remueve un ID del array de favoritos |
| `isFavorite` | `(id: number) => boolean` | Derivado de `favorites` | Verifica si un ID está en la lista de favoritos |

## Comportamiento

- Crear un `FavoritesProvider` (componente cliente con `"use client"`) que envuelva la aplicación desde el layout raíz.
- Usar `React.createContext` y `useContext` para exponer `favorites`, `toggleFavorite` e `isFavorite`.
- `toggleFavorite(id)` debe:
  - Si el ID ya existe en `favorites`, removerlo.
  - Si el ID no existe, agregarlo.
- El state debe ser un array de números (IDs), no objetos completos.
- No requiere persistencia (se pierde al recargar la página).
- Exportar:
  - `FavoritesProvider` — componente provider
  - `useFavorites` — hook personalizado que consume el contexto y lanza error si se usa fuera del provider

## UI/UX

- Sin representación visual directa. Es lógica de estado compartido.
- El provider no renderiza ningún elemento HTML.

## Casos borde

- **Provider ausente**: `useFavorites` debe lanzar un error claro si se invoca fuera de `FavoritesProvider`.
- **Valor inicial**: `favorites` comienza como array vacío `[]`.
- **Toggle repetido**: Si se hace toggle del mismo ID dos veces seguidas, debe volver al estado anterior (comportamiento de alternancia).

## Componentes de Next.js aplicables

| Componente / API | Función |
|---|---|
| `"use client"` | Directiva necesaria en `FavoritesProvider` por usar hooks de React (`useState`, `createContext`) |

## Stack técnico y restricciones

| Tecnología | Versión / Detalle |
|---|---|
| **Framework** | React 19 (Context API) |
| **Lenguaje** | TypeScript (tipado estricto) |
| **Estado global** | `React.createContext` + `useState` (sin Redux, Zustand ni librerías externas) |
| **Componente** | `"use client"` obligatorio por usar hooks de React |
| **Datos** | `favorites: number[]` (IDs, no objetos completos) |
| **Persistencia** | Ninguna — estado en memoria, se pierde al recargar |
| **Exposición** | `FavoritesProvider` + `useFavorites()` con guard para provider ausente |
| **Condiciones** | Sin API externa, sin autenticación, sin base de datos |

## Criterios de aceptación

- [ ] `FavoritesProvider` es un componente cliente (`"use client"`).
- [ ] `useFavorites` retorna `{ favorites, toggleFavorite, isFavorite }`.
- [ ] `toggleFavorite(5)` agrega el ID `5` si no está en la lista.
- [ ] `toggleFavorite(5)` remueve el ID `5` si ya está en la lista.
- [ ] `isFavorite(5)` retorna `true` si el ID `5` está en la lista.
- [ ] `isFavorite(5)` retorna `false` si el ID `5` no está en la lista.
- [ ] Lanzar error si `useFavorites` se usa fuera de `FavoritesProvider`.
- [ ] Los favoritos se pierden al recargar la página (sin persistencia).
- [ ] `useState` se usa para gestionar favoritos y `useFavorites` expone el estado y funciones para consumirlo desde cualquier componente.
- [ ] `useFavorites` es un custom hook que encapsula la lógica de favoritos con significado claro.