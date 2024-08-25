export interface SupportedLanguagesCodes {
  es: "es";
  en: "en";
}

export type LanguageCodes =
  SupportedLanguagesCodes[keyof SupportedLanguagesCodes];
