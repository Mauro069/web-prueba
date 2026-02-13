import { LOCALES, type Locale } from '../constants';

// Definir tipos para los posts
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedDate: string;
  readingTime: number; // en minutos
  tags: string[];
  author: string;
}

export interface BlogPostCollection {
  [key: string]: {
    [LOCALES.SPANISH]: BlogPost;
    [LOCALES.ENGLISH]: BlogPost;
    [LOCALES.FRENCH]: BlogPost;
    [LOCALES.PORTUGUESE]: BlogPost;
  };
}

// Data hardcodeada de posts del blog
export const blogPosts: BlogPostCollection = {
  'introduccion-astro': {
    [LOCALES.SPANISH]: {
      slug: 'introduccion-astro',
      title: 'Introducción a Astro: El Futuro del Desarrollo Web',
      excerpt: 'Descubre cómo Astro revoluciona el desarrollo web con su arquitectura de islas y carga parcial de JavaScript.',
      content: `
# Introducción a Astro: El Futuro del Desarrollo Web

Astro es un framework moderno que está cambiando la forma en que pensamos sobre el desarrollo web. Con su arquitectura única de "islas" y su enfoque en el rendimiento, Astro ofrece lo mejor de ambos mundos: sitios web rápidos y experiencias de desarrollo excepcionales.

## ¿Qué hace especial a Astro?

### 1. Arquitectura de Islas
Astro introduce el concepto de "arquitectura de islas", donde solo las partes interactivas de tu página cargan JavaScript. Esto significa sitios web más rápidos por defecto.

### 2. Framework Agnóstico
Puedes usar React, Vue, Svelte, o cualquier framework que prefieras. Astro los soporta todos en el mismo proyecto.

### 3. Carga Estática por Defecto
Astro genera HTML estático por defecto, cargando JavaScript solo cuando es necesario.

## Conclusión

Astro representa el futuro del desarrollo web, combinando rendimiento excepcional con una excelente experiencia de desarrollo.
      `,
      publishedDate: '2024-01-15',
      readingTime: 5,
      tags: ['Astro', 'JavaScript', 'Desarrollo Web'],
      author: 'Codescript Team'
    },
    [LOCALES.ENGLISH]: {
      slug: 'introduccion-astro',
      title: 'Introduction to Astro: The Future of Web Development',
      excerpt: 'Discover how Astro revolutionizes web development with its island architecture and partial JavaScript loading.',
      content: `
# Introduction to Astro: The Future of Web Development

Astro is a modern framework that's changing the way we think about web development. With its unique "islands" architecture and focus on performance, Astro offers the best of both worlds: fast websites and exceptional development experiences.

## What makes Astro special?

### 1. Islands Architecture
Astro introduces the concept of "islands architecture", where only the interactive parts of your page load JavaScript. This means faster websites by default.

### 2. Framework Agnostic
You can use React, Vue, Svelte, or any framework you prefer. Astro supports them all in the same project.

### 3. Static Loading by Default
Astro generates static HTML by default, loading JavaScript only when necessary.

## Conclusion

Astro represents the future of web development, combining exceptional performance with an excellent developer experience.
      `,
      publishedDate: '2024-01-15',
      readingTime: 5,
      tags: ['Astro', 'JavaScript', 'Web Development'],
      author: 'Codescript Team'
    },
    [LOCALES.FRENCH]: {
      slug: 'introduccion-astro',
      title: 'Introduction à Astro : L\'Avenir du Développement Web',
      excerpt: 'Découvrez comment Astro révolutionne le développement web avec son architecture d\'îles et son chargement partiel de JavaScript.',
      content: `
# Introduction à Astro : L'Avenir du Développement Web

Astro est un framework moderne qui change notre façon de penser le développement web. Avec son architecture unique d'"îles" et son accent sur la performance, Astro offre le meilleur des deux mondes : des sites web rapides et des expériences de développement exceptionnelles.

## Qu'est-ce qui rend Astro spécial ?

### 1. Architecture d'Îles
Astro introduit le concept d'"architecture d'îles", où seules les parties interactives de votre page chargent du JavaScript. Cela signifie des sites web plus rapides par défaut.

### 2. Agnostique au Framework
Vous pouvez utiliser React, Vue, Svelte, ou n'importe quel framework que vous préférez. Astro les supporte tous dans le même projet.

### 3. Chargement Statique par Défaut
Astro génère du HTML statique par défaut, chargeant du JavaScript seulement quand c'est nécessaire.

## Conclusion

Astro représente l'avenir du développement web, combinant performance exceptionnelle avec une excellente expérience développeur.
      `,
      publishedDate: '2024-01-15',
      readingTime: 5,
      tags: ['Astro', 'JavaScript', 'Développement Web'],
      author: 'Équipe Codescript'
    },
    [LOCALES.PORTUGUESE]: {
      slug: 'introduccion-astro',
      title: 'Introdução ao Astro: O Futuro do Desenvolvimento Web',
      excerpt: 'Descubra como o Astro revoluciona o desenvolvimento web com sua arquitetura de ilhas e carregamento parcial de JavaScript.',
      content: `
# Introdução ao Astro: O Futuro do Desenvolvimento Web

Astro é um framework moderno que está mudando a forma como pensamos sobre desenvolvimento web. Com sua arquitetura única de "ilhas" e foco na performance, Astro oferece o melhor dos dois mundos: sites rápidos e experiências de desenvolvimento excepcionais.

## O que torna o Astro especial?

### 1. Arquitetura de Ilhas
Astro introduz o conceito de "arquitetura de ilhas", onde apenas as partes interativas da sua página carregam JavaScript. Isso significa sites mais rápidos por padrão.

### 2. Agnóstico de Framework
Você pode usar React, Vue, Svelte, ou qualquer framework que preferir. Astro suporta todos eles no mesmo projeto.

### 3. Carregamento Estático por Padrão
Astro gera HTML estático por padrão, carregando JavaScript apenas quando necessário.

## Conclusão

Astro representa o futuro do desenvolvimento web, combinando performance excepcional com uma excelente experiência de desenvolvimento.
      `,
      publishedDate: '2024-01-15',
      readingTime: 5,
      tags: ['Astro', 'JavaScript', 'Desenvolvimento Web'],
      author: 'Equipe Codescript'
    }
  },
  'typescript-tips': {
    [LOCALES.SPANISH]: {
      slug: 'typescript-tips',
      title: '10 Tips de TypeScript para Desarrolladores',
      excerpt: 'Mejora tu código TypeScript con estos consejos prácticos que todo desarrollador debería conocer.',
      content: `
# 10 Tips de TypeScript para Desarrolladores

TypeScript se ha convertido en una herramienta esencial para el desarrollo moderno. Aquí tienes 10 consejos que mejorarán tu código TypeScript.

## 1. Usa const assertions

\`\`\`typescript
const colors = ['red', 'green', 'blue'] as const;
type Color = typeof colors[number]; // 'red' | 'green' | 'blue'
\`\`\`

## 2. Aprovecha los tipos condicionales

\`\`\`typescript
type NonNullable<T> = T extends null | undefined ? never : T;
\`\`\`

## 3. Utiliza mapped types

\`\`\`typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};
\`\`\`

## Conclusión

Estos tips te ayudarán a escribir TypeScript más eficiente y mantenible.
      `,
      publishedDate: '2024-01-10',
      readingTime: 8,
      tags: ['TypeScript', 'Tips', 'Programación'],
      author: 'Codescript Team'
    },
    [LOCALES.ENGLISH]: {
      slug: 'typescript-tips',
      title: '10 TypeScript Tips for Developers',
      excerpt: 'Improve your TypeScript code with these practical tips every developer should know.',
      content: `
# 10 TypeScript Tips for Developers

TypeScript has become an essential tool for modern development. Here are 10 tips that will improve your TypeScript code.

## 1. Use const assertions

\`\`\`typescript
const colors = ['red', 'green', 'blue'] as const;
type Color = typeof colors[number]; // 'red' | 'green' | 'blue'
\`\`\`

## 2. Leverage conditional types

\`\`\`typescript
type NonNullable<T> = T extends null | undefined ? never : T;
\`\`\`

## 3. Use mapped types

\`\`\`typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};
\`\`\`

## Conclusion

These tips will help you write more efficient and maintainable TypeScript.
      `,
      publishedDate: '2024-01-10',
      readingTime: 8,
      tags: ['TypeScript', 'Tips', 'Programming'],
      author: 'Codescript Team'
    },
    [LOCALES.FRENCH]: {
      slug: 'typescript-tips',
      title: '10 Conseils TypeScript pour Développeurs',
      excerpt: 'Améliorez votre code TypeScript avec ces conseils pratiques que tout développeur devrait connaître.',
      content: `
# 10 Conseils TypeScript pour Développeurs

TypeScript est devenu un outil essentiel pour le développement moderne. Voici 10 conseils qui amélioreront votre code TypeScript.

## 1. Utilisez les assertions const

\`\`\`typescript
const colors = ['red', 'green', 'blue'] as const;
type Color = typeof colors[number]; // 'red' | 'green' | 'blue'
\`\`\`

## 2. Exploitez les types conditionnels

\`\`\`typescript
type NonNullable<T> = T extends null | undefined ? never : T;
\`\`\`

## 3. Utilisez les types mappés

\`\`\`typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};
\`\`\`

## Conclusion

Ces conseils vous aideront à écrire du TypeScript plus efficace et maintenable.
      `,
      publishedDate: '2024-01-10',
      readingTime: 8,
      tags: ['TypeScript', 'Conseils', 'Programmation'],
      author: 'Équipe Codescript'
    },
    [LOCALES.PORTUGUESE]: {
      slug: 'typescript-tips',
      title: '10 Dicas de TypeScript para Desenvolvedores',
      excerpt: 'Melhore seu código TypeScript com essas dicas práticas que todo desenvolvedor deveria conhecer.',
      content: `
# 10 Dicas de TypeScript para Desenvolvedores

TypeScript se tornou uma ferramenta essencial para o desenvolvimento moderno. Aqui estão 10 dicas que irão melhorar seu código TypeScript.

## 1. Use assertions const

\`\`\`typescript
const colors = ['red', 'green', 'blue'] as const;
type Color = typeof colors[number]; // 'red' | 'green' | 'blue'
\`\`\`

## 2. Aproveite os tipos condicionais

\`\`\`typescript
type NonNullable<T> = T extends null | undefined ? never : T;
\`\`\`

## 3. Utilize tipos mapeados

\`\`\`typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};
\`\`\`

## Conclusão

Essas dicas ajudarão você a escrever TypeScript mais eficiente e mantenível.
      `,
      publishedDate: '2024-01-10',
      readingTime: 8,
      tags: ['TypeScript', 'Dicas', 'Programação'],
      author: 'Equipe Codescript'
    }
  },
  'web-performance': {
    [LOCALES.SPANISH]: {
      slug: 'web-performance',
      title: 'Optimización de Rendimiento Web: Guía Completa',
      excerpt: 'Aprende las mejores técnicas para optimizar el rendimiento de tus aplicaciones web y mejorar la experiencia del usuario.',
      content: `
# Optimización de Rendimiento Web: Guía Completa

El rendimiento web es crucial para la experiencia del usuario y el SEO. Esta guía te enseñará las mejores prácticas.

## Métricas Core Web Vitals

### 1. Largest Contentful Paint (LCP)
Mide cuándo se carga el elemento más grande visible. Objetivo: < 2.5s

### 2. First Input Delay (FID)
Mide el tiempo hasta la primera interacción. Objetivo: < 100ms

### 3. Cumulative Layout Shift (CLS)
Mide la estabilidad visual. Objetivo: < 0.1

## Técnicas de Optimización

### Lazy Loading
\`\`\`html
<img src="image.jpg" loading="lazy" alt="Descripción" />
\`\`\`

### Code Splitting
\`\`\`javascript
const LazyComponent = lazy(() => import('./LazyComponent'));
\`\`\`

## Conclusión

La optimización de rendimiento es un proceso continuo que requiere medición y mejora constante.
      `,
      publishedDate: '2024-01-05',
      readingTime: 12,
      tags: ['Performance', 'Web Vitals', 'Optimización'],
      author: 'Codescript Team'
    },
    [LOCALES.ENGLISH]: {
      slug: 'web-performance',
      title: 'Web Performance Optimization: Complete Guide',
      excerpt: 'Learn the best techniques to optimize the performance of your web applications and improve user experience.',
      content: `
# Web Performance Optimization: Complete Guide

Web performance is crucial for user experience and SEO. This guide will teach you the best practices.

## Core Web Vitals Metrics

### 1. Largest Contentful Paint (LCP)
Measures when the largest visible element loads. Goal: < 2.5s

### 2. First Input Delay (FID)
Measures time to first interaction. Goal: < 100ms

### 3. Cumulative Layout Shift (CLS)
Measures visual stability. Goal: < 0.1

## Optimization Techniques

### Lazy Loading
\`\`\`html
<img src="image.jpg" loading="lazy" alt="Description" />
\`\`\`

### Code Splitting
\`\`\`javascript
const LazyComponent = lazy(() => import('./LazyComponent'));
\`\`\`

## Conclusion

Performance optimization is an ongoing process that requires constant measurement and improvement.
      `,
      publishedDate: '2024-01-05',
      readingTime: 12,
      tags: ['Performance', 'Web Vitals', 'Optimization'],
      author: 'Codescript Team'
    },
    [LOCALES.FRENCH]: {
      slug: 'web-performance',
      title: 'Optimisation des Performances Web : Guide Complet',
      excerpt: 'Apprenez les meilleures techniques pour optimiser les performances de vos applications web et améliorer l\'expérience utilisateur.',
      content: `
# Optimisation des Performances Web : Guide Complet

Les performances web sont cruciales pour l'expérience utilisateur et le SEO. Ce guide vous enseignera les meilleures pratiques.

## Métriques Core Web Vitals

### 1. Largest Contentful Paint (LCP)
Mesure quand l'élément visible le plus grand se charge. Objectif : < 2.5s

### 2. First Input Delay (FID)
Mesure le temps jusqu'à la première interaction. Objectif : < 100ms

### 3. Cumulative Layout Shift (CLS)
Mesure la stabilité visuelle. Objectif : < 0.1

## Techniques d'Optimisation

### Lazy Loading
\`\`\`html
<img src="image.jpg" loading="lazy" alt="Description" />
\`\`\`

### Code Splitting
\`\`\`javascript
const LazyComponent = lazy(() => import('./LazyComponent'));
\`\`\`

## Conclusion

L'optimisation des performances est un processus continu qui nécessite une mesure et une amélioration constantes.
      `,
      publishedDate: '2024-01-05',
      readingTime: 12,
      tags: ['Performance', 'Web Vitals', 'Optimisation'],
      author: 'Équipe Codescript'
    },
    [LOCALES.PORTUGUESE]: {
      slug: 'web-performance',
      title: 'Otimização de Performance Web: Guia Completo',
      excerpt: 'Aprenda as melhores técnicas para otimizar a performance de suas aplicações web e melhorar a experiência do usuário.',
      content: `
# Otimização de Performance Web: Guia Completo

A performance web é crucial para a experiência do usuário e SEO. Este guia ensinará as melhores práticas.

## Métricas Core Web Vitals

### 1. Largest Contentful Paint (LCP)
Mede quando o maior elemento visível carrega. Meta: < 2.5s

### 2. First Input Delay (FID)
Mede o tempo até a primeira interação. Meta: < 100ms

### 3. Cumulative Layout Shift (CLS)
Mede a estabilidade visual. Meta: < 0.1

## Técnicas de Otimização

### Lazy Loading
\`\`\`html
<img src="image.jpg" loading="lazy" alt="Descrição" />
\`\`\`

### Code Splitting
\`\`\`javascript
const LazyComponent = lazy(() => import('./LazyComponent'));
\`\`\`

## Conclusão

A otimização de performance é um processo contínuo que requer medição e melhoria constante.
      `,
      publishedDate: '2024-01-05',
      readingTime: 12,
      tags: ['Performance', 'Web Vitals', 'Otimização'],
      author: 'Equipe Codescript'
    }
  }
};

// Utilidades para trabajar con los posts
export function getAllPosts(locale: Locale): BlogPost[] {
  return Object.values(blogPosts).map(post => post[locale]);
}

export function getPostBySlug(slug: string, locale: Locale): BlogPost | undefined {
  return blogPosts[slug]?.[locale];
}

export function getPostSlugs(): string[] {
  return Object.keys(blogPosts);
}

export function isValidPostSlug(slug: string): boolean {
  return slug in blogPosts;
} 