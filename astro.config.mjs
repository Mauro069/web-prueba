// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Constantes de idiomas (definidas aquí por compatibilidad con .mjs)
const LOCALES = ['es', 'en', 'fr'];
const DEFAULT_LOCALE = 'es';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: LOCALES,
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});