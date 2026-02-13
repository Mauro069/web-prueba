# 📁 Guía de Scaffolding

Esta guía explica la estructura del proyecto y proporciona comandos para generar automáticamente nuevos elementos.

## 📖 Índice

- [Estructura del Proyecto](#estructura-del-proyecto)
- [Convenciones de Nombres](#convenciones-de-nombres)
- [Organización de Componentes](#organización-de-componentes)
- [Scripts de Scaffolding](#scripts-de-scaffolding)
- [Templates Disponibles](#templates-disponibles)

## 🏗️ Estructura del Proyecto

### Estructura Completa

```
codescript-website/
├── docs/                      # 📚 Documentación
│   ├── ADDING_PAGES.md       # Guía de páginas
│   ├── TRANSLATIONS.md       # Guía de traducciones
│   ├── COMPONENTS.md         # Guía de componentes
│   └── SCAFFOLDING.md        # Esta guía
├── public/                    # 📁 Archivos estáticos
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── components/           # 🧩 Componentes
│   │   ├── pages/           # Páginas completas
│   │   ├── ui/              # Componentes UI
│   │   ├── layout/          # Layout y navegación
│   │   ├── forms/           # Formularios
│   │   ├── blog/            # Blog específicos
│   │   └── templates/       # Templates de ejemplo
│   ├── constants/           # 🔧 Constantes
│   │   └── index.ts        # Todas las constantes
│   ├── data/               # 📊 Data estática
│   │   └── blog.ts         # Posts del blog
│   ├── i18n/               # 🌍 Internacionalización
│   │   ├── translations.ts # Traducciones
│   │   ├── utils.ts       # Utilidades i18n
│   │   └── README.md      # Docs i18n
│   ├── layouts/            # 📐 Layouts
│   │   └── Layout.astro   # Layout principal
│   ├── pages/              # 📄 Rutas
│   │   ├── [...path].astro # Router universal
│   │   ├── [locale]/      # Rutas localizadas
│   │   └── blog/          # Rutas del blog
│   ├── styles/             # 🎨 Estilos
│   │   └── global.css     # Estilos globales
│   └── utils/              # 🛠️ Utilidades
├── astro.config.mjs          # ⚙️ Config Astro
├── package.json             # 📦 Dependencias
├── tailwind.config.js       # 🎨 Config Tailwind
└── tsconfig.json           # 📝 Config TypeScript
```

## 📝 Convenciones de Nombres

### Archivos y Carpetas

```bash
# ✅ CORRECTO
src/components/pages/About.astro          # PascalCase para componentes
src/components/ui/Button.astro            # PascalCase para UI
src/constants/index.ts                    # kebab-case para archivos
src/data/blog-posts.ts                    # kebab-case con guiones
src/utils/format-date.ts                  # kebab-case para utils

# ❌ INCORRECTO
src/components/about.astro                # minúscula
src/components/AboutPage.astro            # redundante "Page"
src/constants/Constants.ts                # redundante
src/data/blogPosts.ts                     # camelCase para archivos
```

### Componentes

```typescript
// ✅ CORRECTO - Nombres descriptivos
Welcome.astro                 // Página de bienvenida
ContactForm.astro            // Formulario de contacto
BlogPostCard.astro           // Tarjeta de post
LanguageSelector.astro       // Selector de idioma

// ❌ INCORRECTO - Nombres genéricos
Page.astro                   // Muy genérico
Form.astro                   // Muy genérico  
Card.astro                   // Necesita contexto
Selector.astro               // Muy genérico
```

### Constantes y Variables

```typescript
// ✅ CORRECTO
export const PAGES = { /* ... */ };              // SCREAMING_SNAKE_CASE
export const TRANSLATION_KEYS = { /* ... */ };   // SCREAMING_SNAKE_CASE
const currentLocale = 'es';                      // camelCase para variables
const navItems = [];                             // camelCase para arrays

// ❌ INCORRECTO
export const Pages = { /* ... */ };             // Debería ser SCREAMING_SNAKE_CASE
export const translationKeys = { /* ... */ };   // Debería ser SCREAMING_SNAKE_CASE
const CurrentLocale = 'es';                     // Debería ser camelCase
```

## 🧩 Organización de Componentes

### Estructura Mejorada

```
src/components/
├── pages/                    # 📄 Componentes de páginas completas
│   ├── Welcome.astro
│   ├── About.astro
│   ├── WhatWeDo.astro
│   ├── Portfolio.astro
│   ├── Careers.astro
│   ├── Contact.astro
│   └── Plus.astro
├── ui/                       # 🎨 Componentes UI reutilizables
│   ├── Button.astro
│   ├── Card.astro
│   ├── Modal.astro
│   ├── Spinner.astro
│   ├── Alert.astro
│   └── Tooltip.astro
├── layout/                   # 📐 Componentes de layout
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Navigation.astro
│   ├── Sidebar.astro
│   └── LanguageSelector.astro
├── forms/                    # 📝 Componentes de formularios
│   ├── ContactForm.astro
│   ├── NewsletterForm.astro
│   ├── SearchForm.astro
│   ├── Input.astro
│   └── TextArea.astro
├── blog/                     # 📰 Componentes específicos del blog
│   ├── BlogPost.astro
│   ├── BlogCard.astro
│   ├── BlogList.astro
│   ├── BlogAuthor.astro
│   └── BlogTags.astro
└── templates/                # 📋 Templates y ejemplos
    ├── PageTemplate.astro
    ├── ComponentTemplate.astro
    ├── FormTemplate.astro
    └── README.md
```

### Criterios de Organización

**Pages (`pages/`)**
- Representan páginas completas
- Incluyen múltiples secciones
- Manejan traducciones
- Un componente por página del sitio

**UI (`ui/`)**
- Componentes pequeños y reutilizables
- Sin lógica de negocio específica
- Altamente configurables via props
- Diseño por composición

**Layout (`layout/`)**
- Estructura global de la aplicación
- Navegación y footers
- Elementos que aparecen en múltiples páginas
- Manejo de SEO y meta tags

**Forms (`forms/`)**
- Formularios específicos o campos
- Validación integrada
- Estados de error y éxito
- Accesibilidad incorporada

**Blog (`blog/`)**
- Funcionalidades específicas del blog
- Manejo de markdown
- Formateo de fechas y meta información
- Listados y navegación de posts

## 🚀 Scripts de Scaffolding

### Comandos Propuestos

```bash
# Crear nueva página
npm run scaffold:page <nombre>

# Crear componente UI
npm run scaffold:ui <nombre>

# Crear formulario
npm run scaffold:form <nombre>

# Crear componente de blog
npm run scaffold:blog <nombre>

# Crear sección completa (página + traducciones + nav)
npm run scaffold:section <nombre>
```

### Ejemplo de Script

```javascript
// scripts/scaffold-page.js
import fs from 'fs';
import path from 'path';

const createPage = (name) => {
  const pascalName = name.charAt(0).toUpperCase() + name.slice(1);
  const kebabName = name.toLowerCase().replace(/([A-Z])/g, '-$1');
  
  // 1. Crear componente
  const componentContent = `---
import { getLocaleFromUrl, createTranslator } from '../i18n/utils';
import { TRANSLATION_KEYS } from '../constants';

const currentLocale = getLocaleFromUrl(Astro.url);
const t = createTranslator(currentLocale);
---

<section class="${kebabName}-page">
  <div class="max-w-4xl mx-auto px-4 py-8">
    <header class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        {t(TRANSLATION_KEYS.${name.toUpperCase()}_TITLE)}
      </h1>
      <p class="text-xl text-gray-600">
        {t(TRANSLATION_KEYS.${name.toUpperCase()}_DESCRIPTION)}
      </p>
    </header>
    
    <main class="${kebabName}-content">
      <!-- Contenido de ${pascalName} aquí -->
    </main>
  </div>
</section>`;

  fs.writeFileSync(
    path.join('src/components/pages', `${pascalName}.astro`),
    componentContent
  );
  
  console.log(`✅ Página ${pascalName} creada en src/components/pages/`);
  console.log(`🔧 No olvides agregar las constantes y traducciones`);
};

// node scripts/scaffold-page.js services
createPage(process.argv[2]);
```

## 📋 Templates Disponibles

### Template de Página

```astro
---
// src/components/templates/PageTemplate.astro
/**
 * Template base para páginas
 * 
 * Instrucciones:
 * 1. Copia este archivo
 * 2. Renómbralo según tu página
 * 3. Actualiza las claves de traducción
 * 4. Agrega tu contenido
 */
import { getLocaleFromUrl, createTranslator } from '../../i18n/utils';
import { TRANSLATION_KEYS } from '../../constants';

const currentLocale = getLocaleFromUrl(Astro.url);
const t = createTranslator(currentLocale);
---

<section class="page-template">
  <div class="max-w-4xl mx-auto px-4 py-8">
    <header class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        {t(TRANSLATION_KEYS.PAGE_TITLE)}
      </h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        {t(TRANSLATION_KEYS.PAGE_DESCRIPTION)}
      </p>
    </header>
    
    <main class="page-content">
      <slot />
    </main>
  </div>
</section>
```

### Template de Componente UI

```astro
---
// src/components/templates/ComponentTemplate.astro
/**
 * Template base para componentes UI
 */
export interface Props {
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  class?: string;
}

const { 
  variant = 'default',
  size = 'md',
  disabled = false,
  class: className = '',
  ...rest 
} = Astro.props;

const baseClasses = 'component-base';
const variantClasses = {
  default: 'variant-default',
  primary: 'variant-primary',
  secondary: 'variant-secondary'
};
const sizeClasses = {
  sm: 'size-sm',
  md: 'size-md',
  lg: 'size-lg'
};

const classes = [
  baseClasses,
  variantClasses[variant],
  sizeClasses[size],
  disabled && 'disabled',
  className
].filter(Boolean).join(' ');
---

<div class={classes} {...rest}>
  <slot />
</div>

<style>
  .component-base {
    /* Estilos base */
  }
  
  .variant-default { /* Variante default */ }
  .variant-primary { /* Variante primary */ }
  .variant-secondary { /* Variante secondary */ }
  
  .size-sm { /* Tamaño pequeño */ }
  .size-md { /* Tamaño mediano */ }
  .size-lg { /* Tamaño grande */ }
  
  .disabled { /* Estado deshabilitado */ }
</style>
```

### Template de Formulario

```astro
---
// src/components/templates/FormTemplate.astro
/**
 * Template base para formularios
 */
import { getLocaleFromUrl, createTranslator } from '../../i18n/utils';
import { TRANSLATION_KEYS } from '../../constants';

export interface Props {
  title?: string;
  description?: string;
  submitText?: string;
  class?: string;
}

const { 
  title,
  description,
  submitText,
  class: className = ''
} = Astro.props;

const currentLocale = getLocaleFromUrl(Astro.url);
const t = createTranslator(currentLocale);
---

<form class={`form-template ${className}`}>
  {title && (
    <header class="form-header">
      <h2 class="form-title">{title}</h2>
      {description && (
        <p class="form-description">{description}</p>
      )}
    </header>
  )}
  
  <div class="form-fields">
    <slot />
  </div>
  
  <footer class="form-footer">
    <button type="submit" class="form-submit">
      {submitText || t(TRANSLATION_KEYS.FORM_SUBMIT)}
    </button>
  </footer>
</form>

<style>
  .form-template {
    max-width: 500px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .form-header {
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .form-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .form-description {
    color: #6b7280;
  }
  
  .form-fields {
    margin-bottom: 2rem;
  }
  
  .form-footer {
    text-align: center;
  }
  
  .form-submit {
    background: #3b82f6;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    font-weight: 500;
  }
  
  .form-submit:hover {
    background: #2563eb;
  }
</style>
```

## 🔧 Mejoras de la Estructura

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build", 
    "preview": "astro preview",
    "scaffold:page": "node scripts/scaffold-page.js",
    "scaffold:ui": "node scripts/scaffold-ui.js",
    "scaffold:form": "node scripts/scaffold-form.js",
    "scaffold:section": "node scripts/scaffold-section.js",
    "organize:components": "node scripts/organize-components.js"
  }
}
```

### Checklist para Nuevos Elementos

**Para Páginas:**
- [ ] Crear componente en `src/components/pages/`
- [ ] Agregar constantes en `src/constants/index.ts`
- [ ] Agregar traducciones en `src/i18n/translations.ts`
- [ ] Actualizar router en `src/pages/[...path].astro`
- [ ] Agregar link de navegación en `src/layouts/Layout.astro`

**Para Componentes UI:**
- [ ] Definir interface Props clara
- [ ] Implementar variantes y tamaños
- [ ] Agregar documentación JSDoc
- [ ] Considerar accesibilidad
- [ ] Crear ejemplos de uso

**Para Traducciones:**
- [ ] Definir clave en `TRANSLATION_KEYS`
- [ ] Agregar en los 4 idiomas
- [ ] Usar convención de naming
- [ ] Verificar contexto y claridad

---

**💡 Tip**: Usa los templates como punto de partida y los scripts de scaffolding para acelerar el desarrollo. La consistencia en la estructura facilita el mantenimiento del proyecto. 