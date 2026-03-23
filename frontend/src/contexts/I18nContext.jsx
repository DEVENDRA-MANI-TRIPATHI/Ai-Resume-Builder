import React, { createContext, useState } from 'react';

export const I18nContext = createContext({ language: 'en', setLanguage: () => {} });

export const I18nProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  return (
    <I18nContext.Provider value={{ language, setLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};
