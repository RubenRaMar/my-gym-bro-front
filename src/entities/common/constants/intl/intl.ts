import en from "../../i18n/messages/en/en";
import es from "../../i18n/messages/es/es";
import { LanguageOptions } from "../../i18n/types";

export const intlMessages = { en, es };

export const supportedLanguages: Record<string, LanguageOptions> = {
  es: "es",
  en: "en",
};

export const defaultLanguage: LanguageOptions = supportedLanguages.es;
