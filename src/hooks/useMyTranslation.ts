import { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export function useMyTranslation() {
  const { t: rawT, i18n, ...rest } = useTranslation();

  // Load saved language from localStorage once on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('appLanguage');
      if (savedLang && savedLang !== i18n.language) {
        i18n.changeLanguage(savedLang);
      }
    }
  }, [i18n]);

  // Change language and persist in localStorage
  const changeLanguage = useCallback((lng: string) => {
    i18n.changeLanguage(lng);
    if (typeof window !== 'undefined') {
      localStorage.setItem('appLanguage', lng);
    }
  }, [i18n]);

  // Safe `t` wrapper that always returns string
  const t = useCallback((key: string, options?: any): string => {
    const result = rawT(key, options);
    return typeof result === 'string' ? result : String(result);
  }, [rawT]);

  return { t, i18n, language: i18n.language, changeLanguage, ...rest };
}
