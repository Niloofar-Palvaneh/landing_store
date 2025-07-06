import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import fa from './locales/fa/translation.json';

const resources = {
  en: { translation: en },
  fa: { translation: fa },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fa', 
    fallbackLng: 'fa',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, 
    },
  });

const directionMap: Record<string, 'rtl' | 'ltr'> = {
  fa: 'rtl',
  en: 'ltr',
};

i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    const dir = directionMap[lng] || 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = lng;
  }
});

export default i18n;
