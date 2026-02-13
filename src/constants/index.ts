// ===============================
// IDIOMAS DISPONIBLES

import { aboutConstants } from './about.constants';
import { blogConstants } from './blog.constants';
import { careersConstants } from './careers.constants';
import { contactConstants } from './contact.constants';
import { languageConstants } from './language.constants';
import { navConstants } from './nav.constants';
import { plusConstants } from './plus.constants';
import { portfolioConstants } from './portfolio.constants';
import { welcomeConstants } from './welcome.constants';
import { whatWeDoConstants } from './whatWeDo.constants';
import { footerConstants } from './footer.constants';

// ===============================
export const LOCALES = {
  SPANISH: 'es',
  ENGLISH: 'en',
  FRENCH: 'fr',
  PORTUGUESE: 'pt',
} as const;

export const DEFAULT_LOCALE = LOCALES.SPANISH;

// Lista de todos los idiomas
export const AVAILABLE_LOCALES = Object.values(LOCALES);

// Tipo para idiomas
export type Locale = (typeof LOCALES)[keyof typeof LOCALES];

// ===============================
// PÁGINAS DISPONIBLES
// ===============================
export const PAGES = {
  HOME: '',
  ABOUT: 'about',
  BLOG: 'blog',
  WHAT_WE_DO: 'lo-que-hacemos',
  PORTFOLIO: 'portafolio',
  CAREERS: 'careers',
  CONTACT: 'contacto',
  PLUS: 'plus',
} as const;

// Tipo para páginas
export type PagePath = (typeof PAGES)[keyof typeof PAGES];

// Lista de todas las páginas
export const AVAILABLE_PAGES = Object.values(PAGES);

// ===============================
// TIPOS DE COMPONENTES DE PÁGINA
// ===============================
export const PAGE_COMPONENTS = {
  HOME: 'home',
  ABOUT: 'about',
  BLOG: 'blog',
  BLOG_POST: 'blog-post',
  WHAT_WE_DO: 'what-we-do',
  PORTFOLIO: 'portfolio',
  CAREERS: 'careers',
  CONTACT: 'contact',
  PLUS: 'plus',
} as const;

export type PageComponentType =
  (typeof PAGE_COMPONENTS)[keyof typeof PAGE_COMPONENTS];

// ===============================
// MAPEO DE PÁGINAS A COMPONENTES
// ===============================
export const PAGE_TO_COMPONENT_MAP = {
  [PAGES.HOME]: PAGE_COMPONENTS.HOME,
  [PAGES.ABOUT]: PAGE_COMPONENTS.ABOUT,
  [PAGES.BLOG]: PAGE_COMPONENTS.BLOG,
  [PAGES.WHAT_WE_DO]: PAGE_COMPONENTS.WHAT_WE_DO,
  [PAGES.PORTFOLIO]: PAGE_COMPONENTS.PORTFOLIO,
  [PAGES.CAREERS]: PAGE_COMPONENTS.CAREERS,
  [PAGES.CONTACT]: PAGE_COMPONENTS.CONTACT,
  [PAGES.PLUS]: PAGE_COMPONENTS.PLUS,
} as const;

// ===============================
// NOMBRES DE IDIOMAS TRADUCIDOS
// ===============================
type LanguageNamesMap = { [K in Locale]: { [L in Locale]: string } };
export const LANGUAGE_NAMES: Readonly<LanguageNamesMap> = {
  [LOCALES.SPANISH]: {
    [LOCALES.SPANISH]: 'Español',
    [LOCALES.ENGLISH]: 'Inglés',
    [LOCALES.FRENCH]: 'Francés',
    [LOCALES.PORTUGUESE]: 'Portugués',
  },
  [LOCALES.ENGLISH]: {
    [LOCALES.SPANISH]: 'Spanish',
    [LOCALES.ENGLISH]: 'English',
    [LOCALES.FRENCH]: 'French',
    [LOCALES.PORTUGUESE]: 'Portuguese',
  },
  [LOCALES.FRENCH]: {
    [LOCALES.SPANISH]: 'Espagnol',
    [LOCALES.ENGLISH]: 'Anglais',
    [LOCALES.FRENCH]: 'Français',
    [LOCALES.PORTUGUESE]: 'Portugais',
  },
  [LOCALES.PORTUGUESE]: {
    [LOCALES.SPANISH]: 'Espanhol',
    [LOCALES.ENGLISH]: 'Inglês',
    [LOCALES.FRENCH]: 'Francês',
    [LOCALES.PORTUGUESE]: 'Português',
  },
} as const;

// ===============================
// CLAVES DE TRADUCCIÓN
// ===============================
export const TRANSLATION_KEYS = {
  ...welcomeConstants,
  ...aboutConstants,
  ...blogConstants,
  ...whatWeDoConstants,
  ...portfolioConstants,
  ...careersConstants,
  ...contactConstants,
  ...plusConstants,
  ...navConstants,
  ...languageConstants,
  ...footerConstants,
} as const;

export type TranslationKey =
  (typeof TRANSLATION_KEYS)[keyof typeof TRANSLATION_KEYS];

// ===============================
// UTILIDADES
// ===============================

/**
 * Verifica si un string es un idioma válido
 */
export function isValidLocale(locale: string): locale is Locale {
  return AVAILABLE_LOCALES.includes(locale as Locale);
}

/**
 * Verifica si un string es una página válida
 */
export function isValidPage(page: string): page is PagePath {
  return AVAILABLE_PAGES.includes(page as PagePath);
}

/**
 * Obtiene el tipo de componente para una página
 */
export function getPageComponentType(page: PagePath): PageComponentType {
  return PAGE_TO_COMPONENT_MAP[page];
}
