# Plan de Trabajo — Wanderlust Explorer

> **Proyecto:** Wanderlust Explorer — App Interactiva con React y Next.js  
> **Creado:** 2026-11-14  
> **Basado en:** `context.md` y requerimientos del equipo de producto

## Fases del proyecto

Cada fase contiene tareas específicas. Al completar una fase se avanza a la siguiente. Las fases pueden solaparse cuando no hay dependencias bloqueantes.

---

## Fase 0 — Configuración inicial del proyecto

### 0.1 Crear proyecto con Next.js

- Ejecutar `create-next-app` con TypeScript, Tailwind, ESLint, App Router, directorio `src/` y alias `@/*`.
- Comando exacto:
  ```bash
  npx create-next-app@latest nextjs-wanderlust-explorer --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
  ```
- Verificar que la estructura base funcione (`npm run dev`).

### 0.2 Repositorio GitHub

- Repositorio ya creado y conectado: `nextjs-wanderlust-explorer-ruthcarol281076`
- Verificar que `git remote -v` apunte al remoto correcto.

### 0.3 Definir estructura de carpetas

```
assets-dev/
├── reference-image/           # Capturas de referencia de GuruWalk, Tripadvisor, GetYourGuide
public/
├── images/
│   └── placeholders/          # Imágenes placeholder para las tarjetas de experiencia
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx               # Home (/)
│   ├── experiences/
│   │   ├── page.tsx           # Explorador (/experiences)
│   │   └── [id]/
│   │       └── page.tsx       # Detalle (/experiences/[id])
│   ├── favorites/
│   │   └── page.tsx           # Favoritos (/favorites)
│   └── profile/
│       └── page.tsx           # Perfil (/profile)
├── components/
│   ├── Navbar.tsx
│   ├── ExperienceCard.tsx
│   ├── SearchBar.tsx
│   ├── FilterBar.tsx
│   ├── HeroSection.tsx
│   └── FavoriteButton.tsx
├── context/
│   └── FavoritesContext.tsx    # Estado compartido de favoritos
├── data/
│   └── experiences.ts         # Dataset de 100 experiencias
├── hooks/
│   ├── useExperiences.ts      # Lógica de filtrado combinado
│   └── useFavorites.ts        # Lógica de favoritos (opcional, puede ser el contexto)
└── types/
    └── index.ts               # Interface Experience y tipos compartidos
```

### 0.4 Documentar referencias de diseño

- Agregar la sección `## Design References` en `README.md` con:
  - [GuruWalk](https://www.guruwalk.com/es)
  - [Tripadvisor](https://www.tripadvisor.com.ve/)
  - [GetYourGuide](https://www.getyourguide.com/es-es/)
- Incluir una breve nota sobre qué elementos relevantes se toman de cada referencia (tarjetas, búsqueda, filtros, etc.).
- Guardar capturas de pantalla de cada referencia en `assets-dev/reference-image/` como inspiración visual durante el desarrollo.

### 0.5 Generar dataset de experiencias

- Crear `src/types/index.ts` con la interfaz `Experience`.
- Crear `src/data/experiences.ts` con 100 objetos generados por IA.
- Verificar que cada objeto cumpla con la interfaz y tenga las 5 categorías distribuidas.
- Confirmar que los IDs sean únicos.

---

## Fase 1 — Layout global y navegación

### 1.1 Crear FavoritesContext

- Implementar un provider cliente con `useState` para almacenar los IDs de favoritos.
- Proveer `favorites` y `toggleFavorite` a toda la aplicación desde el layout raíz.
- `SPEC.md` específico: `specs/favorites-context.md`

### 1.2 Crear Navbar

- Componente `Navbar` con enlaces a: Home, Experiences, Favorites, Profile.
- Resaltar visualmente la ruta activa usando `usePathname`.
- Diseño responsivo (hamburger menu en móvil, enlaces horizontales en escritorio).

### 1.3 Layout raíz

- Envolver la aplicación con `FavoritesProvider`.
- Incluir `Navbar` para que aparezca en todas las páginas.
- Configurar metadatos globales (título, descripción).

---

## Fase 2 — Home (/)

**SPEC:** `specs/home.md`

### 2.1 HeroSection

- Componente visual con título llamativo, subtítulo y botón CTA.
- El botón debe navegar a `/experiences` usando `next/link`.
- Estilo responsivo con imagen de fondo o gradiente.
- Texto sugerido: "Descubre experiencias únicas alrededor del mundo" + "Explorar ahora".

### 2.2 Página Home

- Componer `HeroSection` en `src/app/page.tsx`.
- Añadir sección opcional de "Experiencias destacadas" (3-4 tarjetas).

---

## Fase 3 — Explorador (/experiences)

**SPEC:** `specs/explorer.md`

### 3.1 SearchBar

- Input de texto controlado.
- Al escribir, actualizar el query param `search` en la URL.
- Al cargar la página, leer `search` de la URL y pre-rellenar el input.

### 3.2 FilterBar

- Select o grupo de botones para categoría.
- Select o input para destino (ciudad o país).
- Ambos filtros deben actualizar sus respectivos query params (`category`, `destination`).
- Al cargar la página, leer los params y pre-rellenar los controles.

### 3.3 useExperiences (custom hook)

- Recibir el dataset completo y los valores actuales de búsqueda/filtros.
- Aplicar filtro por título (regex case-insensitive escapando caracteres especiales).
- Aplicar filtro por categoría (exact match).
- Aplicar filtro por destino (regex case-insensitive sobre ciudad o país).
- Devolver el array filtrado.

### 3.4 ExperienceCard

- Mostrar: imagen, título, categoría, destino, precio, rating.
- Incluir `FavoriteButton` (corazón toggle).
- Diseño responsivo con Tailwind.

### 3.5 Página Experiences

- Grid responsivo de `ExperienceCard`.
- Integrar `SearchBar`, `FilterBar` y hook `useExperiences`.
- Mostrar "No se encontraron resultados" cuando el array filtrado esté vacío.
- Sincronizar URL con `useSearchParams` y `useRouter`.

---

## Fase 4 — Detalle de experiencia (/experiences/[id])

**SPEC:** `specs/experience-detail.md`

### 4.1 Página de detalle

- Leer `params.id` de la ruta dinámica.
- Buscar la experiencia correspondiente en el dataset.
- Mostrar: imagen grande, título, descripción completa, categoría, destino, precio, rating.
- Incluir `FavoriteButton`.
- Usar `useEffect` para actualizar el título del documento (`document.title`).
- Manejar el caso de ID no encontrado (mensaje "Experiencia no encontrada").
- Botón para volver al explorador.

---

## Fase 5 — Favoritos (/favorites)

**SPEC:** `specs/favorites.md`

### 5.1 Página de favoritos

- Leer la lista de IDs favoritos desde `FavoritesContext`.
- Filtrar el dataset para obtener solo las experiencias favoritas.
- Mostrar grid de `ExperienceCard` (con corazón ya marcado).
- Si no hay favoritos, mostrar mensaje: "Aún no tienes favoritos".

---

## Fase 6 — Perfil (/profile)

**SPEC:** `specs/profile.md`

### 6.1 Página de perfil

- Información estática de usuario simulado:
  - Avatar (placeholder), nombre, email, breve bio.
  - Estadísticas: número de experiencias favoritas (leído del contexto).
  - Posiblemente un listado resumido de las últimas favoritas.
- Diseño limpio y responsivo.

---

## Fase 7 — Pulido final y validación

### 7.1 Responsividad

- Verificar que todas las páginas se vean bien en móvil (320px), tablet (768px) y escritorio (1024px+).

### 7.2 Estados vacíos

- Home sin experiencias (no aplica).
- Explorador sin resultados de búsqueda/filtros.
- Detalle con ID inválido.
- Favoritos vacíos.

### 7.3 Revisión de criterios de aceptación

- Recorrer la checklist de `context.md` sección 9.
- Corregir cualquier desviación.

---

## Dependencias entre fases

```
Fase 0 ──► Fase 1 ──► Fase 2
                 │
                 ├──► Fase 3 ──► Fase 4
                 │
                 ├──► Fase 5
                 │
                 └──► Fase 6
                           │
                     Fase 7 ◄──────┘
```

- Fase 0 es requisito para todo lo demás.
- Fase 1 (layout + navbar + contexto de favoritos) debe completarse antes de Fases 2-6.
- Fases 2-6 pueden ejecutarse en paralelo una vez completada la Fase 1.
- Fase 7 se ejecuta al final, integrando y verificando todo.

---

## Especificaciones por página (SPECs)

Cada SPEC se creará como archivo independiente en `specs/` con la siguiente estructura:

```
specs/
├── favorites-context.md   # Contexto compartido de favoritos
├── home.md                # Página Home (/)
├── explorer.md            # Explorador (/experiences)
├── experience-detail.md   # Detalle de experiencia (/experiences/[id])
├── favorites.md           # Página de favoritos (/favorites)
└── profile.md             # Página de perfil (/profile)
```

Cada SPEC contendrá:

- **Objetivo**: qué debe lograr la página/componente.
- **Props y estado**: entradas, salidas, tipos.
- **Comportamiento**: reglas de negocio, interacciones.
- **UI/UX**: wireframe textual o descripción visual.
- **Casos borde**: estados vacíos, errores, valores límite.
- **Criterios de aceptación**: checklist específica.

---

## Siguientes pasos inmediatos

1. ✅ Crear este plan de trabajo (`plan-de-trabajo.md`)
2. Inicializar el proyecto con `create-next-app`
3. Crear la estructura de carpetas
4. Generar el dataset de 100 experiencias
5. Crear `specs/favorites-context.md` y comenzar Fase 1