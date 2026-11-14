# SPEC — Perfil (/profile)

> **Fase 6 — Perfil**
> **Fecha:** 2026-11-14

## Objetivo

Página estática de perfil de usuario simulado que muestra información personal y un resumen de su actividad, incluyendo el número de experiencias favoritas guardadas.

## Props y estado

| Nombre | Tipo | Origen | Descripción |
|---|---|---|---|
| `favorites` | `number[]` | `useFavorites()` | Para mostrar el contador de favoritos |

## Comportamiento

- Mostrar información estática de un usuario simulado:
  - Avatar (imagen placeholder circular)
  - Nombre (ej. "Alex Wanderlust")
  - Email (ej. "alex@wanderlust.com")
  - Breve biografía (ej. "Viajero apasionado por descubrir experiencias únicas alrededor del mundo.")
- Mostrar estadísticas:
  - Número de experiencias favoritas guardadas (leído de `useFavorites()`), ej. "12 experiencias guardadas"
- Opcional: listado resumido de las últimas 3 experiencias favoritas.

## UI/UX

- Diseño de tarjeta o sección centrada con la información del usuario.
- Avatar grande en la parte superior, seguido de nombre y datos.
- Sección de estadísticas con iconos (corazón para favoritos).
- Diseño limpio y responsivo.

## Casos borde

- **0 favoritos**: el contador debe mostrar "0 experiencias guardadas".
- **Sin avatar**: usar un placeholder por defecto (icono de usuario).

## Componentes de Next.js aplicables

| Componente / API | Función |
|---|---|
| `page.tsx` (App Router) | Página estática renderizada en la ruta `/profile` |

## Dependencias

- `useFavorites` hook
- Opcional: `ExperienceCard` si se muestran últimas favoritas

## Criterios de aceptación

- [ ] Muestra información estática del perfil de usuario simulado.
- [ ] Muestra el número de experiencias favoritas sincronizado con el estado compartido.
- [ ] Si hay 0 favoritos, muestra "0 experiencias guardadas".
- [ ] (Generales) Los tipos e interfaces de TypeScript están definidos y se usan de forma consistente.
- [ ] (Generales) La app es responsiva y visualmente coherente entre páginas.