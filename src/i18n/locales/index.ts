// Exportar todas las traducciones desde un solo lugar
export { spanish, type SpanishTranslations } from './es';
export { english, type EnglishTranslations } from './en';
export { french, type FrenchTranslations } from './fr';
export { portuguese, type PortugueseTranslations } from './pt';

// Tipo union para todas las traducciones
export type AllTranslations = 
  | import('./es').SpanishTranslations
  | import('./en').EnglishTranslations
  | import('./fr').FrenchTranslations
  | import('./pt').PortugueseTranslations; 