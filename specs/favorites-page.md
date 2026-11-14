# SPEC — Favoritos (/favorites)

> **Fase 5 — Favoritos**
> **Fecha:** 2026-11-14

## Objetivo

Página que muestra todas las experiencias que el usuario ha marcado como favoritas, utilizando el estado compartido de `FavoritesContext`.

## Props y estado

| Nombre | Tipo | Origen | Descripción |
|---|---|---|---|
| `favorites` | `number[]` | `useFavorites()` | IDs de experiencias favoritas |
| `toggleFavorite` | `(id: number) => void` | `useFavorites()` | Para desmarcar favoritos desde esta página |

## Comportamiento

- Leer la lista de IDs favoritos desde `useFavorites()`.
- Filtrar el dataset completo para obtener solo las experiencias cuyos IDs estén en la lista de favoritos.
- Mostrar grid de `ExperienceCard` para cada experiencia favorita.
- Cada tarjeta debe mostrar el corazón ya marcado como activo.
- Si el usuario desmarca una experiencia desde esta página, debe desaparecer de la lista.
- Si no hay favoritos, mostrar mensaje: "Aún no tienes favoritos. ¡Explora y añade algunos!" con un enlace al explorador.

## UI/UX

- Mismo grid responsivo que el explorador (1 col móvil, 2 tablet, 3-4 desktop).
- Título de página: "Mis Favoritos".
- Estado vacío con icono ilustrativo (corazón vacío o similar).

## Casos borde

- **Sin favoritos**: mostrar mensaje de estado vacío con enlace a `/experiences`.
- **Favorito removido desde detalle**: si se navega a detalle y se desmarca, al volver a favoritos ya no debe aparecer.
- **Lista grande de favoritos**: el grid debe adaptarse correctamente sin importar cuántos favoritos tenga.

## Componentes de Next.js aplicables

| Componente / API | Función |
|---|---|
| `Link` | Enlace al explorador (`/experiences`) en el estado vacío |

## Dependencias

- `useFavorites` hook
- `ExperienceCard` componente
- Dataset de `@/data/experiences`

## Criterios de aceptación

- [ ] Muestra solo las experiencias marcadas como favoritas.
- [ ] Las tarjetas muestran el corazón como activo.
- [ ] Desmarcar un favorito remueve la tarjeta de la vista.
- [ ] Si no hay favoritos, se muestra mensaje de estado vacío con enlace al explorador.
- [ ] (Generales) `useState` se usa para gestionar favoritos y se pasa correctamente como props/contexto.
- [ ] (Generales) Los tipos e interfaces de TypeScript están definidos y se usan de forma consistente.
- [ ] (Generales) La app es responsiva y visualmente coherente entre páginas.