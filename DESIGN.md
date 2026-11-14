# LocalGuide Design System

## Overview

LocalGuide is an authentic, map-forward design system built around insider-tips and local discovery for city guide and experience platforms. Bold red-orange anchors the visual hierarchy while teal and yellow accent supporting elements.

Inspirado en las referencias visuales de [GuruWalk](https://www.guruwalk.com/es) (tarjetas de tours por destino), [Tripadvisor](https://www.tripadvisor.com.ve/) (valoraciones, organización de información) y [GetYourGuide](https://www.getyourguide.com/es-es/) (filtros, exploración de actividades), este sistema busca una experiencia de descubrimiento clara, accesible y visualmente cohesiva.

---

## Colors

| Token | Color | Hex | Uso |
|---|---|---|---|
| `primary` | Red-Orange | `#EA580C` | Botones CTA, enlaces activos, marcadores principales, corazón favorito activo |
| `secondary` | Teal | `#0D9488` | Links, badges de categoría, bordes de filtros activos |
| `tertiary` | Yellow | `#EAB308` | Estrellas de rating, highlights, badges promocionales |
| `background` | White | `#FFFFFF` | Fondo de página |
| `surface` | White | `#FFFFFF` | Fondo de tarjetas y componentes |
| `surface-hover` | Gray-50 | `#F9FAFB` | Hover en tarjetas |
| `text-primary` | Gray-900 | `#111827` | Títulos y texto principal |
| `text-secondary` | Gray-600 | `#4B5563` | Subtítulos, descripciones |
| `text-muted` | Gray-400 | `#9CA3AF` | Placeholders, texto secundario |
| `border` | Gray-200 | `#E5E7EB` | Bordes de tarjetas, inputs, divisores |
| `success` | Green-600 | `#16A34A` | Estados confirmados, disponibilidad |
| `error` | Red-600 | `#DC2626` | Errores, eliminación |
| `warning` | Yellow-500 | `#EAB308` | Advertencias |
| `info` | Teal-600 | `#0D9488` | Información |

---

## Typography

| Elemento | Font Size | Font Weight | Line Height | Uso |
|---|---|---|---|---|
| **Hero Title** | `text-4xl` (36px) / `text-5xl` (48px) | `font-bold` (700) | `leading-tight` | Título principal en Home |
| **Page Title** | `text-2xl` (24px) / `text-3xl` (30px) | `font-bold` (700) | `leading-snug` | Títulos de página (Explorador, Favoritos, Perfil) |
| **Card Title** | `text-lg` (18px) | `font-semibold` (600) | `leading-snug` | Título en ExperienceCard |
| **Body** | `text-base` (16px) | `font-normal` (400) | `leading-relaxed` | Descripciones, párrafos |
| **Body Small** | `text-sm` (14px) | `font-normal` (400) | `leading-normal` | Metadatos, precio, destino |
| **Caption** | `text-xs` (12px) | `font-medium` (500) | `leading-normal` | Badges, etiquetas, rating numérico |
| **Navbar Link** | `text-sm` (14px) / `text-base` (16px) | `font-medium` (500) | — | Enlaces de navegación |

**Font Family:** Sistema nativo (Inter/System UI) — `font-sans` de Tailwind.

---

## Spacing

| Token | Valor | Uso |
|---|---|---|
| `space-xs` | `gap-1` (4px) | Entre icono y texto en badges |
| `space-sm` | `gap-2` (8px) | Entre elementos de filtro |
| `space-md` | `gap-4` (16px) | Entre tarjetas en grid |
| `space-lg` | `gap-6` (24px) | Entre secciones de una página |
| `space-xl` | `gap-8` (32px) | Margen superior de secciones |
| `page-padding` | `px-4 md:px-8` (16px/32px) | Padding horizontal de página |
| `page-max-width` | `max-w-7xl` (1280px) | Ancho máximo del contenido |

---

## Border Radius

| Token | Valor | Uso |
|---|---|---|
| `radius-sm` | `rounded` (4px) | Inputs, badges pequeños |
| `radius-md` | `rounded-lg` (8px) | Tarjetas de experiencia |
| `radius-lg` | `rounded-xl` (12px) | Tarjetas destacadas, hero section |
| `radius-full` | `rounded-full` | Avatares, badges de contador |

---

## Shadows

| Token | Valor | Uso |
|---|---|---|
| `shadow-sm` | `shadow-sm` | Tarjetas en estado default |
| `shadow-md` | `shadow-md` | Navbar, tarjetas en hover |
| `shadow-lg` | `shadow-lg` | Modales, dropdowns |

---

## Iconography

- **Favorito activo:** ❤️ (corazón relleno, color primary `#EA580C`)
- **Favorito inactivo:** 🤍 (corazón vacío, color gray-400)
- **Búsqueda:** 🔍 (lupa, color text-muted)
- **Estrella:** ⭐ (rellena, color tertiary `#EAB308`)
- **Menú hamburguesa:** ☰ (mobile navbar toggle)
- **Flecha volver:** ← (en detalle de experiencia)
- **Avatar usuario:** 👤 (placeholder en perfil)

*Implementación con SVG inline o iconos de Lucide React (lucide-react) para consistencia visual.*

---

## Componentes del sistema

### Navbar
- Fondo blanco con `shadow-sm`, altura `h-16`.
- `fixed top-0`, `z-50`.
- Enlaces con `text-sm font-medium`, color `text-secondary` en estado normal, `text-primary` y subrayado/borde inferior en estado activo.
- Badge de favoritos: círculo `rounded-full` con fondo primary y texto blanco, `text-xs`.
- Menú hamburguesa visible en móvil (`<768px`), colapsado por defecto.

### HeroSection
- Gradiente de fondo: `bg-gradient-to-r from-primary/90 to-secondary/70` (opcional: imagen superpuesta con overlay oscuro).
- Título blanco `text-4xl md:text-5xl font-bold`.
- Botón CTA: fondo primary, texto blanco, `rounded-lg px-8 py-3`, hover con opacidad.

### ExperienceCard
- Fondo `surface` (`bg-white`), `rounded-lg`, `shadow-sm`, hover con `shadow-md` y `translateY(-2px)`.
- Imagen: `aspect-video`, `object-cover`, `rounded-t-lg`.
- Contenido: padding `p-4` con título, destino, precio, rating, corazón favorito.
- Heart button: esquina superior derecha de la imagen, círculo semitransparente.

### SearchBar
- Input con borde `border`, `rounded-lg`, `py-2 px-4`, icono de lupa a la izquierda.
- Placeholder: "Buscar experiencias..." en `text-muted`.
- Full width en móvil, `max-w-md` en desktop.

### FilterBar
- Fila horizontal de filtros con `flex gap-2`, wrap en móvil.
- Categorías como `select` o `button` group con estilo de chip (`rounded-full`, `border`, `px-4 py-1`).
- Chip activo: fondo primary, texto blanco. Chip inactivo: fondo white, borde gray-300.

### FavoriteButton
- Icono SVG de corazón, 24x24px.
- Activo: `fill-primary` (red-orange). Inactivo: `fill-none stroke-gray-400`.
- Cursor pointer, hover scale 1.1.

### Badge de categoría
- `rounded-full`, `px-3 py-0.5`, `text-xs font-medium`.
- Color por categoría:
  - Adventure: `bg-orange-100 text-orange-700`
  - Culture: `bg-purple-100 text-purple-700`
  - Food: `bg-pink-100 text-pink-700`
  - Wellness: `bg-green-100 text-green-700`
  - Nature: `bg-teal-100 text-teal-700`

---

## Layout patterns

### Página Explorador
```
+------------------------------------------+
|  [🔍 Buscar experiencias...]              |
|  [Categoría ▼]  [Destino ▼]              |
+------------------------------------------+
|  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐   |
|  │ Card │ │ Card │ │ Card │ │ Card │   |
|  └──────┘ └──────┘ └──────┘ └──────┘   |
|  ┌──────┐ ┌──────┐ ┌──────┐             |
|  │ Card │ │ Card │ │ Card │             |
|  └──────┘ └──────┘ └──────┘             |
+------------------------------------------+
```

### Página Detalle
```
+------------------------------------------+
|  ← Volver al explorador                  |
+------------------------------------------+
|  ┌──────────────┐  ┌──────────────────┐  |
|  │              │  │  Título           │  |
|  │   Imagen     │  │  ★ 4.8  Badge     │  |
|  │   grande     │  │  📍 Destino       │  |
|  │              │  │  💰 $120           │  |
|  └──────────────┘  │  ❤️ Guardar       │  |
|                     │                   │  |
|                     │  Descripción...   │  |
|                     └──────────────────┘  |
+------------------------------------------+
```

### Página Favoritos / Perfil
- Mismo grid que explorador para favoritos.
- Perfil: layout centrado de una columna con avatar, nombre, bio y estadísticas.

---

## Responsive breakpoints

| Breakpoint | Min-width | Comportamiento |
|---|---|---|
| **Mobile** | 320px-639px | 1 columna de grid, hero apilado, menú hamburguesa |
| **Tablet** | 640px-1023px | 2 columnas de grid, navbar horizontal |
| **Desktop** | 1024px+ | 3-4 columnas de grid, hero con imagen de fondo completa |

---

## Do's and Don'ts

| Do | Don't |
|---|---|
| Do lead with discovery interfaces (búsqueda + filtros visibles) | Don't hide key location details behind extra taps |
| Do provide clear filter chips for quick category browsing | Don't overload the card with too much text |
| Do use the heart icon consistently for favorites | Don't use different icons for save/favorite across pages |
| Do make the navbar sticky so navigation is always accessible | Don't let the navbar cover the page content (use padding) |
| Do show empty states with helpful messages and actions | Don't leave the user on a blank page without guidance |
| Do use color coding for categories (badges) | Don't rely solely on color — include text labels |

---

## Design References

Las siguientes interfaces reales inspiraron este sistema de diseño:

- **[GuruWalk](https://www.guruwalk.com/es)** — Navegación por destino con tarjetas limpias y búsqueda contextual. Referencia para el layout de tarjetas y la sección hero.
- **[Tripadvisor](https://www.tripadvisor.com.ve/)** — Sistema de valoraciones, filtros combinados y presentación de resultados. Referencia para ratings, badges y organización de información en detalle.
- **[GetYourGuide](https://www.getyourguide.com/es-es/)** — Exploración de actividades con filtros por categoría, destino y búsqueda. Referencia para el diseño de filtros en la URL y la estructura del explorador.

*Capturas de referencia disponibles en `assets-dev/reference-image/`.*