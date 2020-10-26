import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, bh } from './locales';

const resources = {
  en: { translation: en },
  bh: { translation: bh },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'en',
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: 'en',
});

export default i18n;
