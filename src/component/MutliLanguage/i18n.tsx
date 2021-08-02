import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "../../public/assests/locales/en/translation.json";
import translationDE from "../../public/assests/locales/de/translation.json";
const fallbackLng: any = ["en"];
const availableLanguages: any = ["en", "de"];

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
} as const;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    resources,
    fallbackLng,
    debug: false,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
  });

export default i18n;
