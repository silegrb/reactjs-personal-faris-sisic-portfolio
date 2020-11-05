import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { en, bh, de } from './locales';

const resources = {
  en: { translation: en },
  bh: { translation: bh },
  de: { translation: de },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: 'en',
  });

export default i18n;
