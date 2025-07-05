// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import faTranslation from './locales/fa/translation.json';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: { translation: enTranslation },
      fa: { translation: faTranslation },
    },
    lng: 'fa', // زبان پیش‌فرض
    fallbackLng: 'fa',
    interpolation: { escapeValue: false }, // برای React ضروری است
  });

export default i18n;
