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

## Criterios de aceptación

- [ ] Criterio 1
- [ ] Criterio 2
- [ ] (Generales) `useEffect` se usa correctamente con arrays de dependencias adecuados (sin bucles infinitos ni dependencias faltantes).
- [ ] (Generales) Los tipos e interfaces de TypeScript están definidos y se usan de forma consistente.
- [ ] (Generales) La app es responsiva y visualmente coherente entre páginas.