# 🌍 Guía de Traducciones

Esta guía explica cómo gestionar las traducciones en el proyecto Codescript Website.

## 📖 Índice

- [Arquitectura del Sistema](#arquitectura-del-sistema)
- [Agregar Nuevas Traducciones](#agregar-nuevas-traducciones)
- [Agregar Nuevo Idioma](#agregar-nuevo-idioma)
- [Mejores Prácticas](#mejores-prácticas)
- [Utilities y Helpers](#utilities-y-helpers)
- [Ejemplos Avanzados](#ejemplos-avanzados)

## 📁 Estructura de Archivos de Traducción

Las traducciones ahora están organizadas en archivos separados para una mejor mantenibilidad:

```
src/i18n/
├── locales/
│   ├── index.ts      # Archivo índice para exportaciones
│   ├── es.ts         # Traducciones en español
│   ├── en.ts         # Traducciones en inglés
│   ├── fr.ts         # Traducciones en francés
│   └── pt.ts         # Traducciones en portugués
├── translations.ts   # Archivo principal que combina todas las traducciones
└── utils.ts         # Utilidades de internacionalización
```

### Agregar Nuevas Traducciones

Para agregar una nueva traducción:

1. **Agregar la clave en las constantes**:
```typescript
// src/constants/index.ts
export const TRANSLATION_KEYS = {
  // ... existing keys
  NEW_FEATURE_TITLE: 'newFeature.title',
  NEW_FEATURE_DESCRIPTION: 'newFeature.description',
} as const;
```

2. **Actualizar cada archivo de idioma**:
```typescript
// src/i18n/locales/es.ts
export const spanish = {
  // ... existing translations
  [TRANSLATION_KEYS.NEW_FEATURE_TITLE]: 'Nueva Funcionalidad',
  [TRANSLATION_KEYS.NEW_FEATURE_DESCRIPTION]: 'Descripción de la nueva funcionalidad',
} as const;
```

3. **Repetir para todos los idiomas**: `en.ts`, `fr.ts`, `pt.ts`

### Ventajas de esta Estructura

- **Mantenibilidad**: Cada idioma en su propio archivo
- **Colaboración**: Diferentes traductores pueden trabajar simultáneamente
- **Carga optimizada**: Solo se carga el idioma activo
- **Escalabilidad**: Fácil agregar nuevos idiomas
- **Tipado fuerte**: TypeScript asegura consistencia entre idiomas

## 🏗️ Arquitectura del Sistema

### Archivos Principales

```
src/i18n/
├── translations.ts    # 📝 Todas las traducciones
├── utils.ts          # 🛠️ Utilidades de i18n
└── README.md         # 📚 Documentación i18n

src/constants/
└── index.ts          # 🔧 Constantes de idiomas y claves
```

### Flujo de Traducción

```
1. Definir clave en TRANSLATION_KEYS (constants/index.ts)
2. Agregar traducción en translations.ts (4 idiomas)
3. Usar en componente con t(TRANSLATION_KEYS.MI_CLAVE)
```

## ➕ Agregar Nuevas Traducciones

### Paso 1: Definir la Clave

En `src/constants/index.ts`, agregar la clave al objeto `TRANSLATION_KEYS`:

```typescript
export const TRANSLATION_KEYS = {
  // ... claves existentes ...
  
  // Nueva sección - Features
  FEATURES_TITLE: 'features.title',
  FEATURES_SUBTITLE: 'features.subtitle',
  FEATURES_WEB_DEVELOPMENT: 'features.webDevelopment',
  FEATURES_MOBILE_APPS: 'features.mobileApps',
  FEATURES_CONSULTING: 'features.consulting',
} as const;
```

### Paso 2: Agregar Traducciones

En `src/i18n/translations.ts`, agregar las traducciones en **todos los idiomas**:

```typescript
export const translations = {
  [LOCALES.SPANISH]: {
    // ... traducciones existentes ...
    [TRANSLATION_KEYS.FEATURES_TITLE]: 'Nuestros Servicios',
    [TRANSLATION_KEYS.FEATURES_SUBTITLE]: 'Soluciones tecnológicas innovadoras',
    [TRANSLATION_KEYS.FEATURES_WEB_DEVELOPMENT]: 'Desarrollo Web',
    [TRANSLATION_KEYS.FEATURES_MOBILE_APPS]: 'Aplicaciones Móviles',
    [TRANSLATION_KEYS.FEATURES_CONSULTING]: 'Consultoría Técnica',
  },
  [LOCALES.ENGLISH]: {
    // ... traducciones existentes ...
    [TRANSLATION_KEYS.FEATURES_TITLE]: 'Our Services',
    [TRANSLATION_KEYS.FEATURES_SUBTITLE]: 'Innovative technology solutions',
    [TRANSLATION_KEYS.FEATURES_WEB_DEVELOPMENT]: 'Web Development',
    [TRANSLATION_KEYS.FEATURES_MOBILE_APPS]: 'Mobile Applications',
    [TRANSLATION_KEYS.FEATURES_CONSULTING]: 'Technical Consulting',
  },
  [LOCALES.FRENCH]: {
    // ... traducciones existentes ...
    [TRANSLATION_KEYS.FEATURES_TITLE]: 'Nos Services',
    [TRANSLATION_KEYS.FEATURES_SUBTITLE]: 'Solutions technologiques innovantes',
    [TRANSLATION_KEYS.FEATURES_WEB_DEVELOPMENT]: 'Développement Web',
    [TRANSLATION_KEYS.FEATURES_MOBILE_APPS]: 'Applications Mobiles',
    [TRANSLATION_KEYS.FEATURES_CONSULTING]: 'Conseil Technique',
  },
  [LOCALES.PORTUGUESE]: {
    // ... traducciones existentes ...
    [TRANSLATION_KEYS.FEATURES_TITLE]: 'Nossos Serviços',
    [TRANSLATION_KEYS.FEATURES_SUBTITLE]: 'Soluções tecnológicas inovadoras',
    [TRANSLATION_KEYS.FEATURES_WEB_DEVELOPMENT]: 'Desenvolvimento Web',
    [TRANSLATION_KEYS.FEATURES_MOBILE_APPS]: 'Aplicativos Móveis',
    [TRANSLATION_KEYS.FEATURES_CONSULTING]: 'Consultoria Técnica',
  }
};
```

### Paso 3: Usar en Componentes

```astro
---
import { getLocaleFromUrl, createTranslator } from '../i18n/utils';
import { TRANSLATION_KEYS } from '../constants';

const currentLocale = getLocaleFromUrl(Astro.url);
const t = createTranslator(currentLocale);
---

<section>
  <h2>{t(TRANSLATION_KEYS.FEATURES_TITLE)}</h2>
  <p>{t(TRANSLATION_KEYS.FEATURES_SUBTITLE)}</p>
  
  <div class="grid grid-cols-3 gap-6">
    <div>
      <h3>{t(TRANSLATION_KEYS.FEATURES_WEB_DEVELOPMENT)}</h3>
    </div>
    <div>
      <h3>{t(TRANSLATION_KEYS.FEATURES_MOBILE_APPS)}</h3>
    </div>
    <div>
      <h3>{t(TRANSLATION_KEYS.FEATURES_CONSULTING)}</h3>
    </div>
  </div>
</section>
```

## 🌐 Agregar Nuevo Idioma

### Paso 1: Actualizar Constantes

En `src/constants/index.ts`:

```typescript
export const LOCALES = {
  SPANISH: 'es',
  ENGLISH: 'en', 
  FRENCH: 'fr',
  PORTUGUESE: 'pt',
  ITALIAN: 'it',  // ✨ Nuevo idioma
} as const;

export const LANGUAGE_NAMES = {
  // ... idiomas existentes ...
  [LOCALES.ITALIAN]: {
    [LOCALES.SPANISH]: 'Italiano',
    [LOCALES.ENGLISH]: 'Italian',
    [LOCALES.FRENCH]: 'Italien', 
    [LOCALES.PORTUGUESE]: 'Italiano',
    [LOCALES.ITALIAN]: 'Italiano',
  },
  // Agregar italiano a otros idiomas también
  [LOCALES.SPANISH]: {
    // ... otros idiomas ...
    [LOCALES.ITALIAN]: 'Italiano',
  },
  // ... repetir para todos los idiomas
};
```

### Paso 2: Actualizar Astro Config

En `astro.config.mjs`:

```javascript
const LOCALES = ['es', 'en', 'fr', 'pt', 'it']; // ✨ Agregar 'it'
```

### Paso 3: Agregar Todas las Traducciones

En `src/i18n/translations.ts`:

```typescript
export const translations = {
  // ... idiomas existentes ...
  [LOCALES.ITALIAN]: {
    [TRANSLATION_KEYS.WELCOME_TITLE]: 'Benvenuto a Codescript Web',
    [TRANSLATION_KEYS.WELCOME_DESCRIPTION]: 'Un sito web moderno costruito con Astro',
    [TRANSLATION_KEYS.ABOUT_TITLE]: 'Chi Siamo',
    // ... agregar TODAS las claves existentes
  }
};
```

### Paso 4: Actualizar Translation Keys

Agregar claves para el selector de idioma:

```typescript
export const TRANSLATION_KEYS = {
  // ... claves existentes ...
  LANGUAGE_ITALIAN: 'language.italian',
} as const;
```

## ✅ Mejores Prácticas

### 1. Convenciones de Naming

```typescript
// ✅ CORRECTO
SECTION_TITLE: 'section.title'
BUTTON_SUBMIT: 'button.submit'
ERROR_INVALID_EMAIL: 'error.invalidEmail'

// ❌ INCORRECTO  
SECTION_TITLE: 'section_title'      // No usar underscore
buttonSubmit: 'button.submit'       // No usar camelCase para claves
TITLE: 'title'                      // Muy genérico
```

### 2. Organización Jerárquica

```typescript
export const TRANSLATION_KEYS = {
  // Navegación
  NAV_HOME: 'nav.home',
  NAV_ABOUT: 'nav.about',
  NAV_CONTACT: 'nav.contact',
  
  // Formularios
  FORM_NAME: 'form.name',
  FORM_EMAIL: 'form.email',
  FORM_SUBMIT: 'form.submit',
  
  // Errores
  ERROR_REQUIRED: 'error.required',
  ERROR_INVALID_EMAIL: 'error.invalidEmail',
  
  // Notificaciones
  SUCCESS_MESSAGE_SENT: 'success.messageSent',
  SUCCESS_SAVED: 'success.saved',
} as const;
```

### 3. Pluralización

Para textos con plurales, usar claves separadas:

```typescript
export const TRANSLATION_KEYS = {
  PRODUCT_COUNT_SINGLE: 'product.count.single',   // "1 producto"
  PRODUCT_COUNT_PLURAL: 'product.count.plural',   // "{count} productos"
} as const;

// En el componente
const productCount = products.length;
const countKey = productCount === 1 
  ? TRANSLATION_KEYS.PRODUCT_COUNT_SINGLE
  : TRANSLATION_KEYS.PRODUCT_COUNT_PLURAL;

const text = t(countKey, { count: productCount });
```

### 4. Variables en Traducciones

```typescript
// En translations.ts
[TRANSLATION_KEYS.WELCOME_USER]: 'Bienvenido, {name}!'

// En el componente
const welcome = t(TRANSLATION_KEYS.WELCOME_USER, { name: user.name });
```

## 🛠️ Utilities y Helpers

### getLocaleFromUrl()

Extrae el idioma de la URL actual:

```typescript
const currentLocale = getLocaleFromUrl(Astro.url);
// URL: /en/about → 'en'
// URL: /about → 'es' (default)
```

### createTranslator()

Crea una función traductora para un idioma específico:

```typescript
const t = createTranslator(currentLocale);
const title = t(TRANSLATION_KEYS.ABOUT_TITLE);
```

### getAlternateLinks()

Genera links hreflang para SEO:

```typescript
const alternateLinks = getAlternateLinks(Astro.url.pathname, currentLocale);
// Resultado: [{ locale: 'en', href: '/en/about' }, ...]
```

## 🚀 Ejemplos Avanzados

### Componente con Traducciones Dinámicas

```astro
---
// components/ProductCard.astro
import { getLocaleFromUrl, createTranslator } from '../i18n/utils';
import { TRANSLATION_KEYS } from '../constants';

export interface Props {
  product: {
    name: string;
    price: number;
    stock: number;
  };
}

const { product } = Astro.props;
const currentLocale = getLocaleFromUrl(Astro.url);
const t = createTranslator(currentLocale);

// Lógica de stock
const stockKey = product.stock === 0 
  ? TRANSLATION_KEYS.PRODUCT_OUT_OF_STOCK
  : product.stock === 1 
    ? TRANSLATION_KEYS.PRODUCT_LAST_UNIT
    : TRANSLATION_KEYS.PRODUCT_IN_STOCK;

const stockText = t(stockKey, { count: product.stock });

// Formateo de precio según idioma
const formatter = new Intl.NumberFormat(
  currentLocale === 'es' ? 'es-ES' : 
  currentLocale === 'en' ? 'en-US' : 
  currentLocale === 'fr' ? 'fr-FR' : 'pt-BR',
  { style: 'currency', currency: 'EUR' }
);
---

<div class="product-card">
  <h3>{product.name}</h3>
  <p class="price">{formatter.format(product.price)}</p>
  <p class="stock">{stockText}</p>
  <button>
    {t(TRANSLATION_KEYS.BUTTON_ADD_TO_CART)}
  </button>
</div>
```

### Generación de Breadcrumbs Localizados

```astro
---
// components/Breadcrumbs.astro
import { getLocaleFromUrl, createTranslator } from '../i18n/utils';
import { TRANSLATION_KEYS, PAGES, DEFAULT_LOCALE } from '../constants';

const currentLocale = getLocaleFromUrl(Astro.url);
const t = createTranslator(currentLocale);

const getNavUrl = (page: string) => {
  if (currentLocale === DEFAULT_LOCALE) {
    return page === PAGES.HOME ? '/' : `/${page}`;
  } else {
    return page === PAGES.HOME ? `/${currentLocale}/` : `/${currentLocale}/${page}`;
  }
};

const breadcrumbMap = {
  [PAGES.HOME]: TRANSLATION_KEYS.NAV_HOME,
  [PAGES.ABOUT]: TRANSLATION_KEYS.NAV_ABOUT,
  [PAGES.BLOG]: TRANSLATION_KEYS.NAV_BLOG,
  [PAGES.CONTACT]: TRANSLATION_KEYS.NAV_CONTACT,
};
---

<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li>
      <a href={getNavUrl(PAGES.HOME)}>
        {t(TRANSLATION_KEYS.NAV_HOME)}
      </a>
    </li>
    <!-- Generar breadcrumbs dinámicamente -->
  </ol>
</nav>
```

## 🔍 Troubleshooting

### Errores Comunes

1. **Clave no definida**: Verificar que la clave existe en `TRANSLATION_KEYS`
2. **Traducción faltante**: Verificar que la traducción existe en todos los idiomas
3. **Tipo incorrecto**: Verificar que se está usando `createTranslator()` correctamente

### Checklist de Verificación

- [ ] ¿La clave está definida en `TRANSLATION_KEYS`?
- [ ] ¿La traducción existe en los 4 idiomas?
- [ ] ¿Se está usando `t()` en el componente?
- [ ] ¿El idioma está configurado en `astro.config.mjs`?
- [ ] ¿Las URLs se generan correctamente?

---

**💡 Tip**: Usa el buscador de tu editor para verificar que todas las claves de traducción están implementadas en todos los idiomas. 