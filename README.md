# Buildash Landing

Landing page oficial (MVP) para **Buildash**.  
Proyecto (React + TypeScript) construido con **Vite** y estilado con **Tailwind CSS v3**.

---

## ??? Tecnolog�as y Dependencias

La aplicaci�n est� construida con un conjunto moderno de herramientas frontend:

- **React** (v19.2.0) � Biblioteca UI
- **TypeScript** � Tipado est�tico
- **Vite** � Servidor de desarrollo ultrarr�pido y generador de builds
- **Tailwind CSS** (v3) � Framework de utilidades para estilos
- **PostCSS** + **Autoprefixer** � Procesamiento CSS
- **ESLint** con reglas para React y TypeScript
- **gh-pages** � para despliegue en GitHub Pages

Todas las dependencias y versiones aparecen en `package.json`.


## ?? Estructura del Proyecto

```
public/              # Archivos est�ticos
src/
  +- assets/         # Im�genes y medios
  +- components/     # Componentes React reutilizables
  �    +- Button.tsx
  �    +- Card.tsx
  �    +- Footer.tsx
  �    +- Navbar.tsx
  �    +- SectionTitle.tsx
  +- App.tsx         # Componente ra�z
  +- main.tsx        # Punto de entrada
  +- index.css       # Estilos globales (Tailwind base)
  +- App.css         # Estilos espec�ficos

index.html           # Plantilla HTML usada por Vite
vite.config.ts       # Configuraci�n de Vite
tsconfig.json        # Opciones de TypeScript

package.json         # Scripts y dependencias
README.md            # Documentaci�n de este repositorio
```

---

## ?? Gu�a de uso

### 1. Instalar dependencias

```bash
npm install
```

(Se puede usar `yarn` o `pnpm` igualmente.)

### 2. Servidor de desarrollo

```bash
npm run dev
```

Visita `http://localhost:5173` en tu navegador. Vite recargar� autom�ticamente cuando modifiques archivos.

### 3. Generar una build de producci�n

```bash
npm run build
```

Los archivos optimizados se generar�n en `dist/`.

### 4. Previsualizar la build

```bash
npm run preview
```

Esto levanta un servidor est�tico local para inspeccionar la versi�n producida.

---

## ?? Despliegue en GitHub Pages

1. Asegura que el repositorio est� en GitHub.
2. Si usas una ruta personalizada, a�ade un campo `homepage` en `package.json` (ej. `"homepage": "https://usuario.github.io/mi-repo"`).
3. Ejecuta:

```bash
npm run deploy
```

Esto construye el proyecto y publica `dist/` en la rama `gh-pages`. Tras unos minutos, tu sitio deber�a estar disponible en la URL de Pages.

---


## ?? Personalizaci�n

- Modifica `tailwind.config.js` para ajustar el tema o agregar plugins.
- Cambia estilos globales en `src/index.css` o componentes en `src/App.css`.
- Agrega o reordena componentes bajo `src/components/`.
- Para rutas m�ltiples considera instalar React Router.

---

## ?? Recursos �tiles

- [Documentaci�n de Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GitHub Pages](https://pages.github.com/)

---
