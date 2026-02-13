import { aboutTranslationsPt } from '../about-translations/aboutTranslations-pt';
import { blogTranslationsPt } from '../blog-translations/blogTranslations-pt';
import { careersTranslationsPt } from '../careers-translations/careersTranslations-pt';
import { contactTranslationsPt } from '../contact-translations/contactTranslations-pt';
import { languageSelectorTranslationsPt } from '../languageSelector-translations/languajeSelectorTranslations-pt';
import { navTranslationsPt } from '../nav-translations/navTranslations-pt';
import { plusTranslationsPt } from '../plus-translations/plusTranslations-pt';
import { portfolioTranslationsPt } from '../portfolio-translations/portfolioTranslations-pt';
import { welcomeTranslationsPt } from '../welcome-translations/welcomeTranslations-pt';
import { whatWeDoTranslationsPt } from '../whatWeDo-translations/whatWeDoTranslations-pt';
import { footerTranslationsPt } from '../footer-translations/footerTranslations-pt';

export const portuguese = {
  ...welcomeTranslationsPt,
  ...whatWeDoTranslationsPt,
  ...portfolioTranslationsPt,
  ...navTranslationsPt,
  ...plusTranslationsPt,
  ...languageSelectorTranslationsPt,
  ...contactTranslationsPt,
  ...careersTranslationsPt,
  ...blogTranslationsPt,
  ...aboutTranslationsPt,
  ...footerTranslationsPt,
} as const;

export type PortugueseTranslations = typeof portuguese;
