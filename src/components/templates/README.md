# 📋 Templates de Componentes

Esta carpeta contiene templates base para acelerar la creación de nuevos componentes.

## 🎯 Uso de Templates

### PageTemplate.astro
Template para páginas completas.

**Pasos:**
1. Copia `PageTemplate.astro` a `src/components/pages/`
2. Renombra según tu página (ej: `Services.astro`)
3. Actualiza las claves de traducción
4. Agrega tu contenido específico

**Ejemplo:**
```bash
cp src/components/templates/PageTemplate.astro src/components/pages/Services.astro
```

### ComponentTemplate.astro
Template para componentes UI reutilizables.

**Pasos:**
1. Copia `ComponentTemplate.astro` a `src/components/ui/`
2. Renombra según tu componente (ej: `Button.astro`)
3. Define las props específicas
4. Actualiza variantes y estilos

**Ejemplo:**
```bash
cp src/components/templates/ComponentTemplate.astro src/components/ui/Button.astro
```

## 🔧 Personalización

### Props Comunes
```typescript
export interface Props {
  variant?: string;     // Variantes visuales
  size?: string;        // Tamaños disponibles
  disabled?: boolean;   // Estado deshabilitado
  class?: string;       // Clases adicionales
}
```

### Estructura de Clases CSS
```typescript
const classes = [
  baseClasses,          // Estilos base
  variantClasses[variant], // Estilos por variante
  sizeClasses[size],    // Estilos por tamaño
  conditionalClasses,   // Estilos condicionales
  className             // Clases adicionales
].filter(Boolean).join(' ');
```

## 📚 Recursos Adicionales

- [Guía de Componentes](../../docs/COMPONENTS.md)
- [Guía de Traducciones](../../docs/TRANSLATIONS.md)
- [Guía de Scaffolding](../../docs/SCAFFOLDING.md) 