import { DEFAULT_LOCALE, PAGES } from '../../../constants';

export const getNavUrl = (page: string, currentLocale: string) => {
  return currentLocale === DEFAULT_LOCALE
    ? page === PAGES.HOME
      ? '/'
      : `/${page}`
    : page === PAGES.HOME
    ? `/${currentLocale}/`
    : `/${currentLocale}/${page}`;
};
