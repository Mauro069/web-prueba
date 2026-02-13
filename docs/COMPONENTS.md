# 🧩 Guía de Componentes

Esta guía explica cómo crear, organizar y gestionar componentes en el proyecto Codescript Website.

## 📖 Índice

- [Arquitectura de Componentes](#arquitectura-de-componentes)
- [Tipos de Componentes](#tipos-de-componentes)
- [Crear Nuevo Componente](#crear-nuevo-componente)
- [Convenciones y Estándares](#convenciones-y-estándares)
- [Templates y Ejemplos](#templates-y-ejemplos)
- [Mejores Prácticas](#mejores-prácticas)

## 🏗️ Arquitectura de Componentes

### Estructura Actual

```
src/components/
├── pages/                 # 📄 Componentes de páginas completas
│   ├── Welcome.astro
│   ├── About.astro
│   ├── Blog.astro
│   ├── WhatWeDo.astro
│   ├── Portfolio.astro
│   ├── Careers.astro
│   ├── Contact.astro
│   └── Plus.astro
├── ui/                    # 🎨 Componentes de UI reutilizables
│   ├── Button.astro
│   ├── Card.astro
│   ├── Modal.astro
│   └── Spinner.astro
├── layout/                # 📐 Componentes de layout
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Navigation.astro
│   └── LanguageSelector.astro
└── blog/                  # 📝 Componentes específicos del blog
    ├── BlogPost.astro
    ├── BlogCard.astro
    └── BlogAuthor.astro
```

### Estructura Objetivo (Organizada)

```
src/components/
├── pages/                 # 📄 Componentes de páginas
├── ui/                    # 🎨 Componentes UI básicos
├── layout/                # 📐 Componentes de layout
├── forms/                 # 📝 Componentes de formularios
├── blog/                  # 📰 Componentes del blog
└── templates/             # 📋 Templates y ejemplos
    ├── PageTemplate.astro
    ├── ComponentTemplate.astro
    └── README.md
```

## 🎯 Tipos de Componentes

### 1. Page Components (`pages/`)
Componentes que representan páginas completas.

**Características:**
- Incluyen estructura completa de página
- Manejan traducciones
- Pueden incluir múltiples secciones
- Ejemplos: `Welcome.astro`, `About.astro`

### 2. UI Components (`ui/`)
Componentes reutilizables de interfaz.

**Características:**
- Pequeños y enfocados
- Altamente reutilizables
- Props bien definidas
- Ejemplos: `Button.astro`, `Card.astro`

### 3. Layout Components (`layout/`)
Componentes estructurales de la aplicación.

**Características:**
- Definen estructura global
- Incluyen navegación y footers
- Manejan SEO y meta tags
- Ejemplos: `Header.astro`, `Navigation.astro`

### 4. Form Components (`forms/`)
Componentes específicos para formularios.

**Características:**
- Validación integrada
- Estados de error
- Accesibilidad
- Ejemplos: `ContactForm.astro`, `SearchForm.astro`

### 5. Blog Components (`blog/`)
Componentes específicos para el sistema de blog.

**Características:**
- Manejo de markdown
- Formateo de fechas
- Meta información
- Ejemplos: `BlogPost.astro`, `BlogCard.astro`

## ➕ Crear Nuevo Componente

### Paso 1: Determinar Tipo y Ubicación

```bash
# Componente de página
src/components/pages/Services.astro

# Componente UI
src/components/ui/Tooltip.astro

# Componente de layout
src/components/layout/Sidebar.astro

# Componente de formulario
src/components/forms/NewsletterForm.astro

# Componente de blog
src/components/blog/BlogTags.astro
```

### Paso 2: Usar Template Base

Para **Page Component**:

```astro
---
// src/components/pages/Services.astro
import { getLocaleFromUrl, createTranslator } from '../../i18n/utils';
import { TRANSLATION_KEYS } from '../../constants';

const currentLocale = getLocaleFromUrl(Astro.url);
const t = createTranslator(currentLocale);
---

<section class="services-page">
  <div class="max-w-4xl mx-auto px-4 py-8">
    <header class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        {t(TRANSLATION_KEYS.SERVICES_TITLE)}
      </h1>
      <p class="text-xl text-gray-600">
        {t(TRANSLATION_KEYS.SERVICES_DESCRIPTION)}
      </p>
    </header>
    
    <!-- Contenido de la página -->
    <div class="services-content">
      <!-- Tu contenido aquí -->
    </div>
  </div>
</section>
```

Para **UI Component**:

```astro
---
// src/components/ui/Button.astro
export interface Props {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  href?: string;
  class?: string;
}

const { 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  href,
  class: className = '',
  ...rest 
} = Astro.props;

const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

const variantClasses = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
  outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500'
};

const sizeClasses = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
};

const classes = [
  baseClasses,
  variantClasses[variant],
  sizeClasses[size],
  disabled && 'opacity-50 cursor-not-allowed',
  className
].filter(Boolean).join(' ');

const Tag = href ? 'a' : 'button';
---

<Tag 
  class={classes}
  href={href}
  disabled={disabled}
  {...rest}
>
  <slot />
</Tag>
```

### Paso 3: Agregar Traducciones (si aplica)

Si el componente incluye texto, agregar las claves necesarias:

```typescript
// src/constants/index.ts
export const TRANSLATION_KEYS = {
  // ... claves existentes ...
  SERVICES_TITLE: 'services.title',
  SERVICES_DESCRIPTION: 'services.description',
  SERVICES_WEB_DEV: 'services.webDevelopment',
} as const;
```

### Paso 4: Documentar el Componente

Agregar comentarios JSDoc al componente:

```astro
---
/**
 * Button Component
 * 
 * Componente de botón reutilizable con múltiples variantes y tamaños.
 * 
 * @example
 * <Button variant="primary" size="lg">
 *   Enviar
 * </Button>
 * 
 * @example
 * <Button variant="outline" href="/contact">
 *   Contacto
 * </Button>
 */
export interface Props {
  /** Variante visual del botón */
  variant?: 'primary' | 'secondary' | 'outline';
  /** Tamaño del botón */
  size?: 'sm' | 'md' | 'lg';
  /** Estado deshabilitado */
  disabled?: boolean;
  /** URL para convertir en enlace */
  href?: string;
  /** Clases CSS adicionales */
  class?: string;
}
---
```

## 📏 Convenciones y Estándares

### Naming Conventions

```astro
<!-- ✅ CORRECTO -->
BlogPost.astro           <!-- PascalCase -->
ContactForm.astro        <!-- Descriptivo -->
UserProfileCard.astro    <!-- Específico -->

<!-- ❌ INCORRECTO -->
blogpost.astro          <!-- Minúscula -->
form.astro              <!-- Muy genérico -->
component1.astro        <!-- No descriptivo -->
```

### Structure Conventions

```astro
---
// 1. Imports de terceros
import type { MarkdownInstance } from 'astro';

// 2. Imports internos
import { getLocaleFromUrl, createTranslator } from '../i18n/utils';
import { TRANSLATION_KEYS } from '../constants';

// 3. Imports de componentes
import Button from './ui/Button.astro';
import Card from './ui/Card.astro';

// 4. Type definitions
export interface Props {
  title: string;
  description?: string;
}

// 5. Props destructuring
const { title, description = '' } = Astro.props;

// 6. Logic y computations
const currentLocale = getLocaleFromUrl(Astro.url);
const t = createTranslator(currentLocale);
---

<!-- HTML con estructura semántica -->
<section class="component-name">
  <header>
    <h1>{title}</h1>
    {description && <p>{description}</p>}
  </header>
  
  <div class="content">
    <slot />
  </div>
</section>

<!-- Estilos específicos del componente (si son necesarios) -->
<style>
  .component-name {
    /* Estilos específicos */
  }
</style>
```

### Props Conventions

```typescript
// ✅ CORRECTO
export interface Props {
  // Props requeridas primero
  title: string;
  id: string;
  
  // Props opcionales después
  description?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  
  // Props de clase y eventos al final
  class?: string;
  onClick?: () => void;
}

// ❌ INCORRECTO
export interface Props {
  class?: string;        // Debería ir al final
  title: string;         // Mezclado con opcionales
  variant?: string;      // Debería ser union type
  disabled?: boolean;
  description?: string;
}
```

## 📋 Templates y Ejemplos

### Template para Page Component

```astro
---
// src/components/templates/PageTemplate.astro
/**
 * Template para Page Components
 * 
 * Copia este archivo y modifica según tus necesidades.
 * 
 * Pasos:
 * 1. Copia este archivo a src/components/pages/
 * 2. Renombra el archivo
 * 3. Actualiza las claves de traducción
 * 4. Agrega tu contenido específico
 */
import { getLocaleFromUrl, createTranslator } from '../../i18n/utils';
import { TRANSLATION_KEYS } from '../../constants';

const currentLocale = getLocaleFromUrl(Astro.url);
const t = createTranslator(currentLocale);
---

<section class="page-template">
  <div class="max-w-4xl mx-auto px-4 py-8">
    <!-- Header de la página -->
    <header class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        {t(TRANSLATION_KEYS.PAGE_TITLE)}
      </h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        {t(TRANSLATION_KEYS.PAGE_DESCRIPTION)}
      </p>
    </header>
    
    <!-- Contenido principal -->
    <main class="page-content">
      <!-- Tu contenido aquí -->
      <slot />
    </main>
  </div>
</section>

<style>
  .page-template {
    /* Estilos específicos si son necesarios */
  }
</style>
```

### Template para UI Component

```astro
---
// src/components/templates/ComponentTemplate.astro
/**
 * Template para UI Components
 * 
 * Template básico para componentes reutilizables.
 */
export interface Props {
  // Define tus props aquí
  title?: string;
  variant?: 'default' | 'alternative';
  class?: string;
}

const { 
  title = '',
  variant = 'default', 
  class: className = '',
  ...rest 
} = Astro.props;

const baseClasses = 'component-base';
const variantClasses = {
  default: 'variant-default',
  alternative: 'variant-alternative'
};

const classes = [
  baseClasses,
  variantClasses[variant],
  className
].filter(Boolean).join(' ');
---

<div class={classes} {...rest}>
  {title && <h3 class="component-title">{title}</h3>}
  <slot />
</div>

<style>
  .component-base {
    /* Estilos base */
  }
  
  .variant-default {
    /* Estilos para variante default */
  }
  
  .variant-alternative {
    /* Estilos para variante alternative */
  }
</style>
```

## ✅ Mejores Prácticas

### 1. Diseño por Composición

```astro
<!-- ✅ CORRECTO - Composición flexible -->
<Card>
  <CardHeader>
    <h2>Título</h2>
  </CardHeader>
  <CardContent>
    <p>Contenido</p>
  </CardContent>
  <CardFooter>
    <Button>Acción</Button>
  </CardFooter>
</Card>

<!-- ❌ INCORRECTO - Componente monolítico -->
<CardWithTitleContentAndButton 
  title="Título"
  content="Contenido"
  buttonText="Acción"
/>
```

### 2. Props Tipadas

```typescript
// ✅ CORRECTO
export interface Props {
  status: 'loading' | 'success' | 'error';
  size: 'sm' | 'md' | 'lg';
  count: number;
  items: string[];
}

// ❌ INCORRECTO
export interface Props {
  status: string;    // Muy genérico
  size: any;         // Sin tipado
  count: any;        // Sin tipado
  items: any;        // Sin tipado
}
```

### 3. Accesibilidad

```astro
<!-- ✅ CORRECTO -->
<button 
  type="button"
  aria-label={t(TRANSLATION_KEYS.CLOSE_BUTTON)}
  aria-pressed={isPressed}
  disabled={disabled}
>
  <span aria-hidden="true">×</span>
</button>

<!-- ❌ INCORRECTO -->
<div onclick="close()">×</div>
```

### 4. Responsive Design

```astro
<!-- ✅ CORRECTO -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <slot />
</div>

<!-- ❌ INCORRECTO -->
<div class="grid grid-cols-3 gap-4">
  <slot />
</div>
```

### 5. Performance

```astro
---
// ✅ CORRECTO - Computación en build time
const formattedDate = new Date(date).toLocaleDateString(currentLocale);
const sortedItems = items.sort((a, b) => a.priority - b.priority);
---

<!-- Usar valores pre-computados -->
<time datetime={date}>{formattedDate}</time>

<!-- ❌ INCORRECTO - Computación en runtime -->
<time datetime={date}>
  {new Date(date).toLocaleDateString(currentLocale)}
</time>
```

## 🔧 Utilities para Componentes

### Componente de Debug (Desarrollo)

```astro
---
// src/components/ui/Debug.astro
export interface Props {
  data: any;
  label?: string;
}

const { data, label = 'Debug' } = Astro.props;
const isDev = import.meta.env.DEV;
---

{isDev && (
  <details class="debug-panel">
    <summary>{label}</summary>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </details>
)}

<style>
  .debug-panel {
    background: #f3f4f6;
    border: 1px solid #d1d5db;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 0.5rem;
  }
  
  .debug-panel pre {
    background: white;
    padding: 0.5rem;
    border-radius: 0.25rem;
    overflow-x: auto;
  }
</style>
```

### HOC para Traduciones

```astro
---
// src/components/ui/Translated.astro
import { getLocaleFromUrl, createTranslator } from '../../i18n/utils';

export interface Props {
  translationKey: string;
  variables?: Record<string, any>;
  tag?: string;
  class?: string;
}

const { 
  translationKey, 
  variables = {}, 
  tag = 'span',
  class: className = '' 
} = Astro.props;

const currentLocale = getLocaleFromUrl(Astro.url);
const t = createTranslator(currentLocale);
const text = t(translationKey, variables);

const Tag = tag as any;
---

<Tag class={className}>{text}</Tag>
```

---

**💡 Tip**: Siempre considera la reutilización, accesibilidad y performance al crear nuevos componentes. Un buen componente debe ser fácil de usar, mantener y extender. 