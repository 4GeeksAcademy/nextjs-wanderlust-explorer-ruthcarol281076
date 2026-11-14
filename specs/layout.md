# SPEC — Layout Raíz

> **Fase 1 — Layout global y navegación**
> **Fecha:** 2026-11-14

## Objetivo

Layout raíz de la aplicación que envuelve todas las páginas con el provider de favoritos y la barra de navegación.

## Props y estado

| Nombre | Tipo | Origen | Descripción |
|---|---|---|---|
| `children` | `React.ReactNode` | Next.js App Router | Contenido de la página activa |

## Comportamiento

- Es un layout del App Router de Next.js (`src/app/layout.tsx`).
- **No** necesita `"use client"` en el layout raíz. El `FavoritesProvider` (cliente) se importa y usa directamente.
- La estructura debe ser:
  ```
  <html>
    <body>
      <FavoritesProvider>
        <Navbar />
        <main>{children}</main>
      </FavoritesProvider>
    </body>
  </html>
  ```
- Configurar metadatos globales en el `export const metadata` de Next.js:
  - `title`: "Wanderlust Explorer"
  - `description`: "Descubre experiencias únicas alrededor del mundo"
- Importar estilos globales desde `globals.css` (ya generado por create-next-app con Tailwind).
- El `<main>` debe tener un `min-height` suficiente para que el footer (o contenido) no quede pegado al fondo. Sugerencia: `min-h-screen` con padding superior para compensar la altura de la Navbar fija.
- La Navbar debe ser fija en la parte superior (`fixed top-0`) para que el contenido se desplace debajo de ella.
- Agregar un padding-top al `<main>` igual a la altura de la Navbar (ej. `pt-16`).

## UI/UX

- Sin estilos propios del layout que interfieran con el diseño de cada página.
- Transiciones suaves entre rutas (opcional, usar `transition-colors` o similar).
- Fondo global claro (ej. `bg-gray-50` o `bg-white`).

## Casos borde

- **Ruta no encontrada (404)**: Next.js maneja el 404 automáticamente; el layout debe seguir mostrando Navbar.
- **Páginas con scroll largo**: el `min-h-screen` asegura que el contenido ocupe al menos toda la ventana.

## Componentes de Next.js aplicables

| Componente / API | Función |
|---|---|
| `metadata` (export) | Configurar metadatos globales (title, description) para SEO |
| `layout.tsx` (App Router) | Layout raíz que envuelve todas las páginas con provider y navbar |

## Dependencias

- `FavoritesProvider` de `@/context/FavoritesContext`
- `Navbar` de `@/components/Navbar`

## Criterios de aceptación

- [ ] La Navbar se renderiza en todas las páginas.
- [ ] El estado de favoritos está disponible en todas las páginas.
- [ ] Los metadatos globales (title, description) están configurados.
- [ ] El contenido principal tiene padding-top para no quedar oculto detrás de la Navbar fija.
- [ ] La Navbar es fija (`fixed top-0`) y visible al hacer scroll.
- [ ] Los componentes están divididos de forma lógica — ningún fichero contiene toda la app.
- [ ] Los tipos e interfaces de TypeScript están definidos y se usan de forma consistente en todo el proyecto.
- [ ] La app es responsiva y visualmente coherente entre páginas.