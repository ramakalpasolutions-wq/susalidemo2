
'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/data/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('susali_lang');

    if (saved === 'en' || saved === 'te') {
      setLang(saved);
    }

    setMounted(true);
  }, []);

  const activeLang = mounted ? lang : 'en';

  useEffect(() => {
    document.documentElement.lang = activeLang;
  }, [activeLang]);

  function changeLang(nextLang) {
    if (nextLang !== 'en' && nextLang !== 'te') return;

    setLang(nextLang);
    window.localStorage.setItem('susali_lang', nextLang);
  }

  const t = translations[activeLang] || translations.en;

  return (
    <LanguageContext.Provider
      value={{
        lang: activeLang,
        setLang: changeLang,
        t,
        mounted,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
