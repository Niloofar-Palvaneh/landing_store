import { useTranslation } from 'react-i18next';
import type { TranslationKey } from './i18nKeys';

export const useTypedTranslation = () => {
  const { t, i18n } = useTranslation();
  const translate = (key: TranslationKey) => t(key);
  return { t: translate, i18n };
};
