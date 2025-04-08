"use client"

import React, { createContext, useContext, ReactNode, useState } from 'react';
import { translations } from './translations';
import { AppLocales, TranslationKey, TranslationReturnType } from '../types/i18n';

interface I18nContextType {
  t: <K extends keyof TranslationKey>(key: K) => TranslationReturnType<K>;
  locale: AppLocales;
  changeLocale: (locale: AppLocales) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ 
  children,
  defaultLocale = 'pt'
}: { 
  children: ReactNode;
  defaultLocale?: AppLocales;
}) {
  const [locale, setLocale] = useState<AppLocales>(defaultLocale)

  const t = <K extends keyof TranslationKey>(key: K): TranslationReturnType<K> => {
    const value = translations[locale][key];
    return value as TranslationReturnType<K>;
  }

  const changeLocale = (newLocale: AppLocales) => {
    if (newLocale in translations) {
      setLocale(newLocale);
    }
  }

  return (
    <I18nContext.Provider value={{ t, locale, changeLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context;
}