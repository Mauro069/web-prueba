export type TranslationField = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
};

export type PortfolioProject = {
  title: string;
  alt?: string;
  tags?: string[];
};

export type PortfolioItem = {
  image: string;
  imageGradient: string;
  logo: any;
};

export type CombinedPortfolioItem = PortfolioProject & PortfolioItem;

// Special cases mapping
export type SpecialTranslations = {
  WELCOME_PORTFOLIO_PROJECTS: PortfolioProject[];
  WELCOME_BLOG_FORM_FIELDS: TranslationField[];
};

// TranslationValue now includes string as default
export type TranslationValue = string | PortfolioProject[] | TranslationField[];

export type LocaleTranslations = Record<string, TranslationValue>;
export type Translations = Record<string, LocaleTranslations>;

// Helper type to get the correct type for a translation key
export type TranslationTypeOf<K extends string> =
  K extends keyof SpecialTranslations ? SpecialTranslations[K] : string;

export type TranslationKey = string;
