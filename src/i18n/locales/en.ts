// import { careersTranslationsEn } from '../careers-translations/careersTranslations-en';
// import { contactTranslationsEn } from '../contact-translations/contactTranslations-en';
// import { languageSelectorTranslationsEn } from '../languageSelector-translations/languageSelectorTranslations-en';
// import { navTranslationsEn } from '../nav-translations/navTranslations-en';
// import { plusTranslationsEn } from '../plus-translations/plusTranslations-en';
// import { welcomeTranslationsEn } from '../welcome-translations/welcomeTranslations-en';
import { aboutTranslationsEn } from '../about-translations/aboutTranslations-en';
import { blogTranslationsEn } from '../blog-translations/blogTranslations-en';
import { careersTranslationsEn } from '../careers-translations/careersTranslations-en';
import { contactTranslationsEn } from '../contact-translations/contactTranslations-en';
import { footerTranslationsEn } from '../footer-translations/footerTranslations-en';
import { languageSelectorTranslationsEn } from '../languageSelector-translations/languageSelectorTranslations-en';
import { navTranslationsEn } from '../nav-translations/navTranslations-en';
import { plusTranslationsEn } from '../plus-translations/plusTranslations-en';
import { portfolioTranslationsEn } from '../portfolio-translations/portfolioTranslations-en';
import { welcomeTranslationsEn } from '../welcome-translations/welcomeTranslations-en';
import { whatWeDoTranslationsEn } from '../whatWeDo-translations/whatWeDoTranslations-en';

export const english = {
  ...welcomeTranslationsEn,
  ...whatWeDoTranslationsEn,
  ...portfolioTranslationsEn,
  ...navTranslationsEn,
  ...plusTranslationsEn,
  ...languageSelectorTranslationsEn,
  ...contactTranslationsEn,
  ...careersTranslationsEn,
  ...blogTranslationsEn,
  ...aboutTranslationsEn,
  ...footerTranslationsEn,
} as const;

export type EnglishTranslations = typeof english;
