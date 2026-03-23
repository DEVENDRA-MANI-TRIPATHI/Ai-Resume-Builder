import { useContext } from 'react';
import { I18nContext } from '../contexts/I18nContext';
import translations from './translations';

const useTranslation = () => {
  const { language } = useContext(I18nContext);
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language] ?? translations['en'];
    for (const k of keys) value = value?.[k];
    return value ?? key;
  };
  return { t, language };
};

export default useTranslation;
