# 📚 Documentación Codescript Website

Bienvenido a la documentación completa del proyecto Codescript Website. Aquí encontrarás todo lo necesario para contribuir y desarrollar en el proyecto.

## 🚀 Inicio Rápido

1. **[README Principal](../README.md)** - Información general del proyecto
2. **[Guía de Instalación](../README.md#inicio-rápido)** - Cómo empezar
3. **[Estructura del Proyecto](../README.md#estructura-del-proyecto)** - Organización de archivos

## 📖 Guías de Desarrollo

### Para Nuevos Desarrolladores

| Guía | Descripción | Nivel |
|------|-------------|-------|
| **[📄 Agregar Páginas](./ADDING_PAGES.md)** | Crear páginas estáticas y dinámicas | Básico |
| **[🌍 Traducciones](./TRANSLATIONS.md)** | Gestionar idiomas y traducciones | Básico |
| **[🧩 Componentes](./COMPONENTS.md)** | Crear y organizar componentes | Intermedio |
| **[📁 Scaffolding](./SCAFFOLDING.md)** | Estructura y convenciones | Avanzado |

### Flujos de Trabajo Comunes

#### ➕ Agregar Nueva Página

```bash
# 1. Crear el componente
cp src/components/templates/PageTemplate.astro src/components/pages/MiPagina.astro

# 2. Agregar constantes
# Editar src/constants/index.ts

# 3. Agregar traducciones  
# Editar src/i18n/translations.ts

# 4. Actualizar routing
# Editar src/pages/[...path].astro

# 5. Agregar navegación
# Editar src/layouts/Layout.astro
```

#### 🧩 Crear Componente UI

```bash
# 1. Crear desde template
cp src/components/templates/ComponentTemplate.astro src/components/ui/MiComponente.astro

# 2. Definir Props
# 3. Implementar variantes
# 4. Agregar documentación
# 5. Crear ejemplos de uso
```

#### 🌍 Agregar Traducciones

```bash
# 1. Definir clave en TRANSLATION_KEYS
# 2. Agregar en todos los idiomas
# 3. Usar en componente con t()
# 4. Verificar funcionamiento
```

## 🎯 Arquitectura del Sistema

### Características Principales

- ✅ **Sistema de rutas universal** - Un router para todos los idiomas
- ✅ **Componentes organizados** - Estructura clara y escalable  
- ✅ **Traducciones centralizadas** - Sistema i18n robusto
- ✅ **Templates reutilizables** - Scaffolding acelerado
- ✅ **TypeScript** - Tipado fuerte en todo el proyecto

### Estructura de Componentes

```
src/components/
├── pages/        # 📄 Páginas completas
├── ui/           # 🎨 Componentes reutilizables  
├── layout/       # 📐 Layout y navegación
├── forms/        # 📝 Formularios
├── blog/         # 📰 Blog específicos
└── templates/    # 📋 Templates base
```

### Sistema de Traducciones

```
1. Constantes    → src/constants/index.ts
2. Traducciones  → src/i18n/translations.ts
3. Uso           → t(TRANSLATION_KEYS.MI_CLAVE)
4. URLs          → Generación automática
```

## 🔧 Herramientas y Utilities

### Componentes UI Disponibles

- **Button** - Botones con variantes y tamaños
- **Card** - Tarjetas con header y content
- **CardHeader** - Header para tarjetas
- **CardContent** - Contenido para tarjetas

### Utilities de i18n

- **getLocaleFromUrl()** - Extraer idioma de URL
- **createTranslator()** - Crear función de traducción  
- **getAlternateLinks()** - Generar links hreflang

### Templates Disponibles

- **PageTemplate.astro** - Template para páginas
- **ComponentTemplate.astro** - Template para componentes UI

## 📊 Estado del Proyecto

### Páginas Implementadas

- [x] **Inicio** - Welcome.astro
- [x] **Quienes Somos** - About.astro  
- [x] **Lo que hacemos** - WhatWeDo.astro
- [x] **Portafolio** - Portfolio.astro
- [x] **Blog - Media Lab** - Blog.astro
- [x] **Careers** - Careers.astro
- [x] **Contacto** - Contact.astro
- [x] **Plus** - Plus.astro

### Idiomas Soportados

- [x] **Español** (por defecto)
- [x] **Inglés**
- [x] **Francés** 
- [x] **Portugués**

### Componentes UI

- [x] **Button** - Completo
- [x] **Card System** - Completo
- [x] **LanguageSelector** - Completo
- [ ] **Forms** - Pendiente
- [ ] **Modals** - Pendiente
- [ ] **Navigation** - Mejorable

## 🤝 Contribución

### Antes de Empezar

1. Leer la [documentación principal](../README.md)
2. Revisar [convenciones de código](./SCAFFOLDING.md#convenciones-de-nombres)
3. Familiarizarse con la [estructura de componentes](./COMPONENTS.md)

### Proceso de Contribución

1. **Fork** del repositorio
2. **Crear rama** para tu feature
3. **Desarrollar** siguiendo las guías
4. **Documentar** cambios realizados
5. **Pull Request** con descripción detallada

### Checklist de Pull Request

- [ ] ¿El código sigue las convenciones del proyecto?
- [ ] ¿Se agregaron las traducciones necesarias?
- [ ] ¿Se actualizó la documentación?
- [ ] ¿Se probó en múltiples idiomas?
- [ ] ¿Los componentes son responsive?

## 🔍 Troubleshooting

### Problemas Comunes

| Problema | Solución |
|----------|----------|
| Component not found | Verificar rutas de import |
| Translation missing | Revisar TRANSLATION_KEYS |
| Route not working | Verificar PAGES y routing |
| Styles not applying | Verificar clases Tailwind |

### Recursos de Ayuda

- [Issues en GitHub](https://github.com/...)
- [Documentación de Astro](https://docs.astro.build)
- [Guía de Tailwind](https://tailwindcss.com/docs)

---

**💡 ¿Necesitas ayuda?** Revisa estas guías o abre un issue en GitHub. ¡Estamos aquí para ayudarte! 