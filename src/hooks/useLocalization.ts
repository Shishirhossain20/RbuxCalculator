import { useState, useEffect } from 'react';
import { translations, Language, Translation } from '../locales/translations';

export function useLocalization() {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    if (['en', 'zh', 'ja', 'hi', 'bn', 'ar', 'ru'].includes(browserLang)) {
      setLanguage(browserLang as Language);
    }
  }, []);

  const t: Translation = translations[language];
  const dir = t.dir as 'ltr' | 'rtl';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  return { language, setLanguage, t, dir };
}
