'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('susali_lang');
    if (saved && (saved === 'en' || saved === 'te')) {
      setLang(saved);
    }
  }, []);

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('susali_lang', newLang);
  };

  // Guarantee that SSR and initial client hydration pass match 100% identically
  const activeLang = mounted ? lang : 'en';
  const t = translations[activeLang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang: activeLang, setLang: changeLang, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);