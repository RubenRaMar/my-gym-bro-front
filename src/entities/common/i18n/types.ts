export interface SupportedLanguages {
  es: "es";
  en: "en";
}

export type LanguageOptions = SupportedLanguages[keyof SupportedLanguages];
