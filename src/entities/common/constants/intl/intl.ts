import en from "../../i18n/messages/en/en";
import es from "../../i18n/messages/es/es";
import { LanguageCodes, SupportedLanguagesCodes } from "../../i18n/types";

export const intlMessages = { en, es };

export const supportedLanguages: SupportedLanguagesCodes = {
  es: "es",
  en: "en",
};

export const defaultLanguage: LanguageCodes = supportedLanguages.es;
