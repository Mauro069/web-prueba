# 📄 Guía para Agregar Páginas y Posts

Una guía completa para crear páginas estáticas y contenido dinámico en el proyecto Codescript Website.

## 📖 Índice

- [Resumen del Sistema](#resumen-del-sistema)
- [Páginas Estáticas](#páginas-estáticas)
- [Contenido Dinámico](#contenido-dinámico)
- [URLs y Rutas](#urls-y-rutas)
- [Mejores Prácticas](#mejores-prácticas)
- [Troubleshooting](#troubleshooting)

## 🎯 Resumen del Sistema

Este proyecto utiliza un **sistema de rutas universal** que:
- ✅ Maneja automáticamente múltiples idiomas 
- ✅ Evita duplicación de código
- ✅ Soporta páginas estáticas y rutas dinámicas
- ✅ Genera URLs SEO-friendly automáticamente
- ✅ Incluye navegación inteligente por idioma

## Páginas Estáticas

### Agregar una Nueva Página Estática

1. **Agregar la página a las constantes** (`src/constants/index.ts`):
```typescript
export const PAGES = {
  HOME: '',
  ABOUT: 'about',
  BLOG: 'blog',
  CONTACT: 'contact', // Nueva página
} as const;

export const PAGE_COMPONENTS = {
  HOME: 'home',
  ABOUT: 'about', 
  BLOG: 'blog',
  CONTACT: 'contact', // Nuevo componente
} as const;

export const PAGE_TO_COMPONENT_MAP = {
  [PAGES.HOME]: PAGE_COMPONENTS.HOME,
  [PAGES.ABOUT]: PAGE_COMPONENTS.ABOUT,
  [PAGES.BLOG]: PAGE_COMPONENTS.BLOG,
  [PAGES.CONTACT]: PAGE_COMPONENTS.CONTACT, // Nuevo mapeo
} as const;
```

2. **Agregar las traducciones** (`src/i18n/translations.ts`):
```typescript
export const TRANSLATION_KEYS = {
  // ... claves existentes
  CONTACT_TITLE: 'contact.title',
  CONTACT_DESCRIPTION: 'contact.description',
  NAV_CONTACT: 'nav.contact',
} as const;

// Agregar traducciones en los tres idiomas:
[LOCALES.SPANISH]: {
  // ... traducciones existentes
  [TRANSLATION_KEYS.CONTACT_TITLE]: 'Contacto',
  [TRANSLATION_KEYS.CONTACT_DESCRIPTION]: 'Ponte en contacto con nosotros',
  [TRANSLATION_KEYS.NAV_CONTACT]: 'Contacto',
},
[LOCALES.ENGLISH]: {
  // ... traducciones existentes  
  [TRANSLATION_KEYS.CONTACT_TITLE]: 'Contact',
  [TRANSLATION_KEYS.CONTACT_DESCRIPTION]: 'Get in touch with us',
  [TRANSLATION_KEYS.NAV_CONTACT]: 'Contact',
},
[LOCALES.FRENCH]: {
  // ... traducciones existentes
  [TRANSLATION_KEYS.CONTACT_TITLE]: 'Contact', 
  [TRANSLATION_KEYS.CONTACT_DESCRIPTION]: 'Contactez-nous',
  [TRANSLATION_KEYS.NAV_CONTACT]: 'Contact',
}
```

3. **Crear el componente** (`src/components/Contact.astro`):
```astro
---
import { getLocaleFromUrl, createTranslator } from '../i18n/utils';
import { TRANSLATION_KEYS } from '../constants';

const currentLocale = getLocaleFromUrl(Astro.url);
const t = createTranslator(currentLocale);
---

<div class="text-center">
  <h1 class="text-3xl font-bold mb-4">
    {t(TRANSLATION_KEYS.CONTACT_TITLE)}
  </h1>
  <p class="text-lg text-gray-600">
    {t(TRANSLATION_KEYS.CONTACT_DESCRIPTION)}
  </p>
</div>
```

4. **Actualizar el router** (`src/pages/[...path].astro`):
```astro
---
import Contact from '../components/Contact.astro';

// En el switch statement:
switch (pageComponentType) {
  case PAGE_COMPONENTS.HOME:
    PageComponent = Welcome;
    break;
  case PAGE_COMPONENTS.ABOUT:
    PageComponent = About;
    break;
  case PAGE_COMPONENTS.BLOG:
    PageComponent = Blog;
    break;
  case PAGE_COMPONENTS.CONTACT:
    PageComponent = Contact;  // Nuevo caso
    break;
  default:
    PageComponent = Welcome;
}
---
```

5. **Agregar a la navegación** (`src/layouts/Layout.astro`):
```astro
<a href={getNavUrl(PAGES.CONTACT)} class="...">
  {t(TRANSLATION_KEYS.NAV_CONTACT)}
</a>
```

## Blog y Rutas Dinámicas

### Agregar Nuevos Posts al Blog

1. **Editar la data de posts** (`src/data/blog.ts`):
```typescript
export const blogPosts: BlogPostCollection = {
  // ... posts existentes
  'nuevo-post': {
    [LOCALES.SPANISH]: {
      slug: 'nuevo-post',
      title: 'Título del Nuevo Post',
      excerpt: 'Descripción breve del post...',
      content: `
# Título del Nuevo Post

Contenido completo del post en markdown...
      `,
      publishedDate: '2024-01-20',
      readingTime: 7,
      tags: ['Tag1', 'Tag2'],
      author: 'Autor'
    },
    [LOCALES.ENGLISH]: {
      slug: 'nuevo-post',
      title: 'New Post Title',
      excerpt: 'Brief description of the post...',
      content: `
# New Post Title

Full post content in markdown...
      `,
      publishedDate: '2024-01-20',
      readingTime: 7,
      tags: ['Tag1', 'Tag2'],
      author: 'Author'
    },
    [LOCALES.FRENCH]: {
      slug: 'nuevo-post',
      title: 'Titre du Nouveau Post',
      excerpt: 'Description brève du post...',
      content: `
# Titre du Nouveau Post

Contenu complet du post en markdown...
      `,
      publishedDate: '2024-01-20',
      readingTime: 7,
      tags: ['Tag1', 'Tag2'],
      author: 'Auteur'
    }
  }
};
```

**¡Importante!** Los nuevos posts se generarán automáticamente en todas las rutas:
- `/blog/nuevo-post` (Español)
- `/en/blog/nuevo-post` (Inglés)
- `/fr/blog/nuevo-post` (Francés)

### Agregar Nuevas Secciones Dinámicas

Para agregar una sección completamente nueva como "Portfolio" con elementos dinámicos:

1. **Definir constantes y tipos**
2. **Crear data hardcodeada** (similar a `src/data/blog.ts`)
3. **Crear componentes de listado y detalle**
4. **Crear páginas dinámicas**:
   - `src/pages/portfolio/[slug].astro`
   - `src/pages/[locale]/portfolio/[slug].astro`
5. **Agregar al routing universal**

## URLs Generadas Automáticamente

El sistema genera automáticamente estas URLs:

### Páginas Estáticas:
- `/` (home español)
- `/en/` (home inglés)
- `/fr/` (home francés)
- `/about` (about español)
- `/en/about` (about inglés)
- `/fr/about` (about francés)
- `/blog` (blog español)
- `/en/blog` (blog inglés)
- `/fr/blog` (blog francés)

### Blog Posts Dinámicos:
- `/blog/[slug]` (post español)
- `/en/blog/[slug]` (post inglés)
- `/fr/blog/[slug]` (post francés)

## Archivos Importantes

- **`src/constants/index.ts`**: Todas las constantes del sistema
- **`src/i18n/translations.ts`**: Traducciones multiidioma
- **`src/data/blog.ts`**: Data de posts del blog
- **`src/pages/[...path].astro`**: Router universal
- **`src/layouts/Layout.astro`**: Layout con navegación
- **`src/components/`**: Componentes de páginas

## Ventajas del Sistema

1. **Cero duplicación**: Un componente sirve para todos los idiomas
2. **Escalable**: Agregar idiomas es solo actualizar constantes
3. **Mantenible**: Cambios centralizados
4. **SEO optimizado**: URLs limpias y hreflang automático
5. **Rutas dinámicas**: Soporte completo para blogs y portfolios 