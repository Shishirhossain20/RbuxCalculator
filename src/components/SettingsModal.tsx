import { motion, AnimatePresence } from 'motion/react';
import { X, Moon, Sun, Globe } from 'lucide-react';
import { cn } from '../lib/utils';
import { Language, Translation } from '../locales/translations';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  t: Translation;
  dir: 'ltr' | 'rtl';
}

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English (US)' },
  { code: 'zh', label: '中文 (Simplified)' },
  { code: 'ja', label: '日本語' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'bn', label: 'বাংলা' },
  { code: 'ar', label: 'العربية' },
  { code: 'ru', label: 'Русский' },
];

export function SettingsModal({
  isOpen,
  onClose,
  language,
  setLanguage,
  theme,
  toggleTheme,
  t,
  dir
}: SettingsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          >
            <div className={cn(
              "bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl p-6 w-full max-w-sm m-4 shadow-2xl pointer-events-auto",
              "dark:bg-black/40 dark:border-white/10"
            )}>
              <div className={cn("flex justify-between items-center mb-6", dir === 'rtl' && "flex-row-reverse")}>
                <h2 className="text-xl font-semibold text-white">{t.settings}</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/80"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Theme Toggle */}
                <div className="space-y-3">
                  <label className={cn("text-sm font-medium text-white/60 flex items-center gap-2", dir === 'rtl' && "flex-row-reverse")}>
                    <Sun className="w-4 h-4" />
                    {t.theme}
                  </label>
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <span className="text-white">{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
                    {theme === 'dark' ? <Moon className="w-5 h-5 text-indigo-400" /> : <Sun className="w-5 h-5 text-amber-400" />}
                  </button>
                </div>

                {/* Language Picker */}
                <div className="space-y-3">
                  <label className={cn("text-sm font-medium text-white/60 flex items-center gap-2", dir === 'rtl' && "flex-row-reverse")}>
                    <Globe className="w-4 h-4" />
                    {t.language}
                  </label>
                  <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={cn(
                          "flex items-center justify-between p-3 rounded-xl transition-all text-sm",
                          language === lang.code
                            ? "bg-white/20 text-white font-medium shadow-sm"
                            : "bg-transparent text-white/70 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        <span>{lang.label}</span>
                        {language === lang.code && (
                          <motion.div
                            layoutId="activeLang"
                            className="w-2 h-2 rounded-full bg-emerald-400"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
