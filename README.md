# Codescript Website

Un sitio web moderno y multiidioma construido con **Astro**, **TypeScript** y **Tailwind CSS**.

## 🚀 Características

- ✅ **Multiidioma completo** - Español, Inglés, Francés, Portugués
- ✅ **Rutas universales** - Un sistema de routing que maneja todos los idiomas automáticamente
- ✅ **SEO optimizado** - Meta tags, hreflang, URLs limpias
- ✅ **Responsive design** - Funciona en todos los dispositivos
- ✅ **Blog dinámico** - Sistema de posts con contenido multiidioma
- ✅ **Navegación inteligente** - URLs que se adaptan al idioma actual
- ✅ **TypeScript** - Tipado fuerte en todo el proyecto
- ✅ **Zero duplicación** - Un componente sirve para todos los idiomas

## 🛠️ Tecnologías

- **[Astro](https://astro.build)** - Framework web moderno
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript con tipos
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Vite](https://vitejs.dev/)** - Build tool ultrarrápido

## 📁 Estructura del Proyecto

```
codescript-website/
├── docs/                    # 📚 Documentación del proyecto
│   ├── ADDING_PAGES.md     # Guía para agregar páginas
│   ├── TRANSLATIONS.md     # Guía de traducciones
│   └── COMPONENTS.md       # Guía de componentes
├── src/
│   ├── components/         # 🧩 Componentes reutilizables
│   │   ├── pages/         # Componentes de páginas
│   │   ├── ui/            # Componentes de UI generales
│   │   └── layout/        # Componentes de layout
│   ├── constants/         # 🔧 Constantes y configuración
│   ├── data/             # 📊 Data estática (blog posts, etc.)
│   ├── i18n/             # 🌍 Sistema de internacionalización
│   ├── layouts/          # 📐 Layouts de páginas
│   ├── pages/            # 📄 Rutas y páginas
│   └── styles/           # 🎨 Estilos globales
├── public/               # 📁 Archivos estáticos
└── astro.config.mjs     # ⚙️ Configuración de Astro
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm, yarn, o pnpm

### Instalación

```bash
# Clonar el repositorio
git clone <repo-url>
cd codescript-website

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build
npm run preview
```

## 🌍 Sistema Multiidioma

### Idiomas Soportados

- **🇪🇸 Español** (por defecto) - `/`
- **🇺🇸 Inglés** - `/en/`
- **🇫🇷 Francés** - `/fr/`
- **🇧🇷 Portugués** - `/pt/`

### URLs Generadas Automáticamente

```
Español (default):  /                /about              /blog
Inglés:            /en/              /en/about           /en/blog  
Francés:           /fr/              /fr/about           /fr/blog
Portugués:         /pt/              /pt/about           /pt/blog
```

## 📚 Guías de Desarrollo

### Para Nuevos Desarrolladores

1. **[📄 Agregar Páginas](./docs/ADDING_PAGES.md)** - Cómo crear páginas estáticas y dinámicas
2. **[🌍 Traducciones](./docs/TRANSLATIONS.md)** - Cómo agregar y gestionar traducciones
3. **[🧩 Componentes](./docs/COMPONENTS.md)** - Cómo crear y organizar componentes
4. **[📁 Scaffolding](./docs/SCAFFOLDING.md)** - Estructura y convenciones del proyecto

### Flujo de Trabajo Típico

```bash
# 1. Crear nueva rama
git checkout -b feature/nueva-pagina

# 2. Agregar constantes (si es necesario)
# Editar src/constants/index.ts

# 3. Agregar traducciones
# Editar src/i18n/translations.ts

# 4. Crear componente
# Crear src/components/pages/MiPagina.astro

# 5. Actualizar routing (si es necesario)
# Editar src/pages/[...path].astro

# 6. Probar en desarrollo
npm run dev

# 7. Construir y verificar
npm run build && npm run preview
```

## 🧩 Componentes Disponibles

### Páginas
- `Welcome.astro` - Página de inicio
- `About.astro` - Acerca de nosotros
- `Blog.astro` - Listado del blog
- `WhatWeDo.astro` - Lo que hacemos
- `Portfolio.astro` - Portafolio
- `Careers.astro` - Carreras
- `Contact.astro` - Contacto
- `Plus.astro` - Plus

### UI/Layout
- `LanguageSelector.astro` - Selector de idioma
- `Layout.astro` - Layout principal

## 📊 Data Management

### Blog Posts

Los posts del blog se definen en `src/data/blog.ts` con soporte completo multiidioma:

```typescript
export const blogPosts = {
  'mi-post': {
    [LOCALES.SPANISH]: { /* contenido en español */ },
    [LOCALES.ENGLISH]: { /* contenido en inglés */ },
    [LOCALES.FRENCH]: { /* contenido en francés */ },
    [LOCALES.PORTUGUESE]: { /* contenido en portugués */ }
  }
};
```

## 🔧 Scripts Disponibles

```bash
npm run dev          # Desarrollo con hot reload
npm run build        # Construir para producción
npm run preview      # Vista previa de la build
npm run astro        # CLI de Astro
npm run check        # Type checking de TypeScript
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Convenciones

- **Commits**: Usar prefijos `Add:`, `Fix:`, `Update:`, `Remove:`
- **Ramas**: `feature/`, `fix/`, `docs/`, `refactor/`
- **Componentes**: PascalCase, archivos `.astro`
- **Constantes**: SCREAMING_SNAKE_CASE
- **Traducciones**: camelCase keys, dot notation

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

## 👥 Equipo

Desarrollado por el equipo de Codescript.

---

**¿Necesitas ayuda?** Revisa la [documentación completa](./docs/) o abre un issue.
# web-prueba
