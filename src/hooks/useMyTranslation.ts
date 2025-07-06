import { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export function useMyTranslation() {
  const { t: rawT, i18n, ...rest } = useTranslation();
  const changeLanguage = useCallback((lng: string) => {
    i18n.changeLanguage(lng);
  }, [i18n]);
  const t = useCallback((key: string, options?: any): string => {
    const result = rawT(key, options);
    return typeof result === 'string' ? result : String(result);
  }, [rawT]);

  return { t, i18n, language: i18n.language, changeLanguage, ...rest };
}
