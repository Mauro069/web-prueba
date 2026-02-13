import { aboutTranslationsEs } from '../about-translations/aboutTranslations-es';
import { blogTranslationsEs } from '../blog-translations/blogTranslations-es';
import { careersTranslationsEs } from '../careers-translations/careersTranslations-es';
import { contactTranslationsEs } from '../contact-translations/contactTranslations-es';
import { footerTranslationsEs } from '../footer-translations/footerTranslations-es';
import { languageSelectorTranslationsEs } from '../languageSelector-translations/languageSelectorTranslations-es';
import { navTranslationsEs } from '../nav-translations/navTranslations-es';
import { plusTranslationsEs } from '../plus-translations/plusTranslations-es';
import { portfolioTranslationsEs } from '../portfolio-translations/portfolioTranslations-es';
import { welcomeTranslationsEs } from '../welcome-translations/welcomeTranslations-es';
import { whatWeDoTranslationsEs } from '../whatWeDo-translations/whatWeDoTranslations-es';

export const spanish = {
  ...welcomeTranslationsEs,
  ...whatWeDoTranslationsEs,
  ...portfolioTranslationsEs,
  ...navTranslationsEs,
  ...plusTranslationsEs,
  ...languageSelectorTranslationsEs,
  ...contactTranslationsEs,
  ...careersTranslationsEs,
  ...blogTranslationsEs,
  ...aboutTranslationsEs,
  ...footerTranslationsEs,
} as const;

export type SpanishTranslations = typeof spanish;
