import { translations } from './translations';
import {
  LOCALES,
  DEFAULT_LOCALE,
  AVAILABLE_LOCALES,
  type Locale,
  type TranslationKey as ConstantsTranslationKey,
  isValidLocale as isValidLocaleFromConstants,
} from '../constants';
import type {
  TranslationTypeOf,
  TranslationKey as TypesTranslationKey,
  TranslationValue,
} from './types';

export function getTranslation<K extends string>(
  locale: string,
  key: K
): TranslationTypeOf<K> {
  const validLocale = locale as Locale;
  return (translations[validLocale]?.[key] ||
    translations[DEFAULT_LOCALE][key] ||
    key) as TranslationTypeOf<K>;
}

export function createTranslator(locale: string) {
  return <K extends string>(key: K): TranslationTypeOf<K> =>
    getTranslation(locale, key);
}

export function getLocaleFromUrl(url: URL): string {
  const [, locale] = url.pathname.split('/');
  return isValidLocale(locale) ? locale : DEFAULT_LOCALE;
}

export function isValidLocale(locale: string): locale is Locale {
  return isValidLocaleFromConstants(locale);
}

export function getAvailableLocales(): Locale[] {
  return [...AVAILABLE_LOCALES];
}

export function getAlternateLinks(currentPath: string, currentLocale: string) {
  const locales = getAvailableLocales();
  const pathWithoutLocale = currentPath.replace(`/${currentLocale}`, '') || '/';

  return locales.map((locale) => ({
    locale,
    href:
      locale === DEFAULT_LOCALE
        ? pathWithoutLocale
        : `/${locale}${pathWithoutLocale}`,
  }));
}

export function changeLocale(currentUrl: string, newLocale: string): string {
  const url = new URL(currentUrl);
  const currentLocale = getLocaleFromUrl(url);
  const pathWithoutLocale =
    url.pathname.replace(`/${currentLocale}`, '') || '/';

  if (newLocale === DEFAULT_LOCALE) {
    return pathWithoutLocale;
  }

  return `/${newLocale}${pathWithoutLocale}`;
}

// Re-export (alias) si necesitas exponer ambos tipos desde aquí
export type TranslationKeyFromTypes = TypesTranslationKey;
export type TranslationKeyFromConstants = ConstantsTranslationKey;

// Re-exportar tipos y constantes para compatibilidad
export { LOCALES, DEFAULT_LOCALE, AVAILABLE_LOCALES, type Locale };
