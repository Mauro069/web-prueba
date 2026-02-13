import { LOCALES, type TranslationKey, type Locale } from '../constants';
import { spanish, english, french, portuguese } from './locales';
import type { Translations } from './types';

export const translations: Translations = {
  [LOCALES.SPANISH]: spanish,
  [LOCALES.ENGLISH]: english,
  [LOCALES.FRENCH]: french,
  [LOCALES.PORTUGUESE]: portuguese,
} as const;

// Re-exportar tipos para compatibilidad
export type { TranslationKey, Locale };
