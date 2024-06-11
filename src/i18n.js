import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import tw from './locales/tw.json';
import akan from './locales/akan.json';
import ewe from './locales/ewe.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    tw: { translation: tw },
    akan: { translation: akan },
    ewe: { translation: ewe },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
