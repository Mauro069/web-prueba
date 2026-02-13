# 🌍 Sistema de Archivos de Traducción Reorganizado

## 📁 Estructura de Archivos

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

## 🔧 Cómo Funciona

### 1. Archivos de Idioma Individual

Cada idioma tiene su propio archivo TypeScript:

```typescript
// src/i18n/locales/es.ts
import { TRANSLATION_KEYS } from '../../constants';

export const spanish = {
  [TRANSLATION_KEYS.WELCOME_TITLE]: 'Bienvenido a Codescript Web',
  [TRANSLATION_KEYS.WELCOME_DESCRIPTION]: 'Un sitio web moderno construido con Astro',
  // ... más traducciones
} as const;

export type SpanishTranslations = typeof spanish;
```

### 2. Archivo Índice

El archivo `locales/index.ts` facilita las importaciones:

```typescript
export { spanish, type SpanishTranslations } from './es';
export { english, type EnglishTranslations } from './en';
export { french, type FrenchTranslations } from './fr';
export { portuguese, type PortugueseTranslations } from './pt';
```

### 3. Archivo Principal

El archivo `translations.ts` combina todas las traducciones:

```typescript
import { LOCALES } from '../constants';
import { spanish, english, french, portuguese } from './locales';

export const translations = {
  [LOCALES.SPANISH]: spanish,
  [LOCALES.ENGLISH]: english,
  [LOCALES.FRENCH]: french,
  [LOCALES.PORTUGUESE]: portuguese
} as const;
```

## ➕ Agregar Nuevas Traducciones

### Paso 1: Agregar la clave en constantes

```typescript
// src/constants/index.ts
export const TRANSLATION_KEYS = {
  // ... existing keys
  NEW_FEATURE_TITLE: 'newFeature.title',
  NEW_FEATURE_DESCRIPTION: 'newFeature.description',
} as const;
```

### Paso 2: Actualizar cada archivo de idioma

```typescript
// src/i18n/locales/es.ts
export const spanish = {
  // ... existing translations
  [TRANSLATION_KEYS.NEW_FEATURE_TITLE]: 'Nueva Funcionalidad',
  [TRANSLATION_KEYS.NEW_FEATURE_DESCRIPTION]: 'Descripción de la nueva funcionalidad',
} as const;
```

### Paso 3: Repetir para todos los idiomas

- `en.ts` - inglés
- `fr.ts` - francés
- `pt.ts` - portugués

## 🌟 Ventajas de esta Estructura

### ✅ **Mantenibilidad**
- Cada idioma en su propio archivo
- Fácil localizar y editar traducciones específicas
- Menos conflictos al trabajar en equipo

### ✅ **Colaboración**
- Diferentes traductores pueden trabajar simultáneamente
- Cada persona puede enfocarse en su idioma
- Evita merge conflicts en un archivo grande

### ✅ **Performance**
- Solo se carga el idioma activo
- Mejora el tiempo de compilación
- Reduce el bundle size

### ✅ **Escalabilidad**
- Fácil agregar nuevos idiomas
- Estructura consistente y predecible
- Tipado fuerte con TypeScript

### ✅ **Consistencia**
- TypeScript asegura que todas las traducciones tengan las mismas keys
- Errores de compilación si falta una traducción
- Autocompletado en el IDE

## 🔄 Migración desde Archivo Único

Si vienes del sistema anterior con un solo archivo `translations.ts`:

1. **Mantén la API igual**: Los componentes siguen funcionando igual
2. **Importaciones iguales**: `import { translations } from './translations'` sigue funcionando
3. **Sin cambios en uso**: `t(TRANSLATION_KEYS.WELCOME_TITLE)` funciona igual
4. **Beneficios inmediatos**: Mejor organización sin romper nada

## 🧪 Validación

El sistema incluye validación TypeScript automática:

```typescript
// Error si falta una traducción
const spanish = {
  [TRANSLATION_KEYS.WELCOME_TITLE]: 'Bienvenido',
  // ERROR: falta WELCOME_DESCRIPTION
} as const;
```

## 🛠️ Herramientas de Desarrollo

### Verificar Build

```bash
npm run build
```

### Verificar Tipos

```bash
npm run check
```

### Desarrollo

```bash
npm run dev
```

## 📝 Convenciones

- **Nombres de archivo**: `es.ts`, `en.ts`, `fr.ts`, `pt.ts`
- **Nombres de exports**: `spanish`, `english`, `french`, `portuguese`
- **Tipos**: `SpanishTranslations`, `EnglishTranslations`, etc.
- **Constantes**: Usar `TRANSLATION_KEYS` para todas las keys
- **Formato**: Usar `as const` para tipado estricto

---

**¿Necesitas ayuda?** Revisa los archivos de ejemplo o abre un issue. 