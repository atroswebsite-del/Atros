'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 支持的语言列表
export const locales = ['en', 'zh_cn'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'en';

// 翻译数据类型
export type Translations = Record<string, string>;

type I18nContextType = {
  locale: Locale;
  translations: Translations;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

type I18nProviderProps = {
  children: ReactNode;
};


export function I18nProvider({ children }: I18nProviderProps) {
  // 从 localStorage 获取存储的语言，如果没有则使用默认语言
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [translations, setTranslations] = useState<Translations>({});

  // 加载翻译数据
  useEffect(() => {
    // 从 localStorage 获取语言设置
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    if (savedLocale && locales.includes(savedLocale as Locale)) {
      setLocaleState(savedLocale as Locale);
    }

    // 加载翻译文件
    async function loadTranslations() {
      try {
        const currentLocale = savedLocale && locales.includes(savedLocale as Locale)
          ? savedLocale as Locale
          : locale;

        const response = await fetch(`/locales/${currentLocale}/common.json`);
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error('Failed to load translations:', error);
      }
    }

    loadTranslations();
  }, []);

  // 切换语言
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);

    // 重新加载翻译
    fetch(`/locales/${newLocale}/common.json`)
      .then(response => response.json())
      .then(data => setTranslations(data))
      .catch(error => console.error('Failed to load translations:', error));
  };

  // 翻译函数
  // const t = (key: string): string => {
  //   return translations[key] || key;
  // };

  // 支持多级 key 的辅助函数
  function getValueByPath(obj: Record<string, unknown>, path: string): string {
    const result = path.split('.').reduce<unknown>((acc, key) => {
      if (acc && typeof acc === 'object') {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    }, obj);

    return typeof result === 'string' ? result : path;
  }

  // 翻译函数，支持多级 key
  const t = (key: string): string => {
    return getValueByPath(translations, key);
  };

  const value = {
    locale,
    translations,
    setLocale,
    t,
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}