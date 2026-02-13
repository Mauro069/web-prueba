import { aboutTranslationsFr } from '../about-translations/aboutTranslations-fr';
import { blogTranslationsFr } from '../blog-translations/blogTranslations-fr';
import { careersTranslationsFr } from '../careers-translations/careersTranslations-fr';
import { contactTranslationsFr } from '../contact-translations/contactTranslations-fr';
import { languageSelectorTranslationsFr } from '../languageSelector-translations/languajeSelectorTranslations-fr';
import { navTranslationsFr } from '../nav-translations/navTranslations-fr';
import { plusTranslationsFr } from '../plus-translations/plusTranslations-fr';
import { portfolioTranslationsFr } from '../portfolio-translations/portfolioTranslations-fr';
import { welcomeTranslationsFr } from '../welcome-translations/welcomeTranslations-fr';
import { whatWeDoTranslationsFr } from '../whatWeDo-translations/whatWeDoTranslations-fr';
import { footerTranslationsFr } from '../footer-translations/footerTranslations-fr';

export const french = {
  ...welcomeTranslationsFr,
  ...whatWeDoTranslationsFr,
  ...portfolioTranslationsFr,
  ...navTranslationsFr,
  ...plusTranslationsFr,
  ...languageSelectorTranslationsFr,
  ...contactTranslationsFr,
  ...careersTranslationsFr,
  ...blogTranslationsFr,
  ...aboutTranslationsFr,
  ...footerTranslationsFr,
} as const;

export type FrenchTranslations = typeof french;
