// app/LanguageInit.tsx
'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageInit() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem('appLanguage');
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return null;
}
