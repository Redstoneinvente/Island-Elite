import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Currency, Theme, LocalizationState } from './types';
import { TRANSLATIONS } from './translations';
import { detectCurrency, getGreeting } from './utils';

interface LocalizationContextType extends LocalizationState {
  setLanguage: (lang: Language) => void;
  setCurrency: (curr: Currency) => void;
  setTheme: (theme: Theme) => void;
  t: (key: string) => any;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');
  const [currency, setCurrency] = useState<Currency>(detectCurrency() as Currency);
  const [theme, setTheme] = useState<Theme>('dark');
  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const t = (path: string) => {
    const keys = path.split('.');
    let current = TRANSLATIONS[language];
    for (const key of keys) {
      if (current[key] === undefined) return path;
      current = current[key];
    }
    return current;
  };

  return (
    <LocalizationContext.Provider value={{ 
      language, 
      currency, 
      theme, 
      greeting, 
      setLanguage, 
      setCurrency, 
      setTheme,
      t 
    }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) throw new Error('useLocalization must be used within a LocalizationProvider');
  return context;
};
