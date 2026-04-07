import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Globe, DollarSign, Moon, Sun, User, LogOut, Settings as SettingsIcon } from 'lucide-react';
import { useLocalization } from '../LocalizationContext';
import { Language, Currency } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { 
    language, setLanguage, 
    currency, setCurrency, 
    theme, setTheme, 
    t 
  } = useLocalization();

  const languages: Language[] = ['EN', 'FR', 'DE', 'RU', 'ZH', 'IT', 'ES'];
  const currencies: Currency[] = ['MUR', 'EUR', 'USD', 'GBP', 'ZAR', 'RUB', 'CNY'];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass-card relative w-full max-w-2xl overflow-hidden rounded-sm p-12"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-gold hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Left Side: Account Info */}
              <div>
                <h2 className="font-serif text-3xl text-gold mb-8 italic">{t('account.title')}</h2>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-16 w-16 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <User size={32} />
                  </div>
                  <div>
                    <p className="text-alabaster font-medium">Guest User</p>
                    <p className="text-xs text-gold/60 uppercase tracking-widest">COCO MORIS ADVENTURES Member</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="flex items-center gap-3 text-sm text-alabaster/60 hover:text-gold transition-colors w-full text-left">
                    <SettingsIcon size={18} /> {t('account.profile')}
                  </button>
                  <button className="flex items-center gap-3 text-sm text-alabaster/60 hover:text-gold transition-colors w-full text-left">
                    <Globe size={18} /> {t('account.bookings')}
                  </button>
                  <div className="pt-4 border-t border-white/5">
                    <button className="flex items-center gap-3 text-sm text-red-400 hover:text-red-300 transition-colors w-full text-left">
                      <LogOut size={18} /> {t('account.logout')}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side: Settings */}
              <div>
                <h2 className="font-serif text-3xl text-gold mb-8 italic">{t('settings.title')}</h2>
                
                <div className="space-y-8">
                  {/* Language */}
                  <div>
                    <label className="text-[10px] font-bold tracking-widest uppercase text-gold mb-4 block">
                      {t('settings.language')}
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {languages.map(lang => (
                        <button
                          key={lang}
                          onClick={() => setLanguage(lang)}
                          className={`px-2 py-1 text-[10px] border transition-all ${
                            language === lang 
                              ? 'bg-gold border-gold text-obsidian' 
                              : 'border-white/10 text-alabaster/60 hover:border-gold/40'
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Currency */}
                  <div>
                    <label className="text-[10px] font-bold tracking-widest uppercase text-gold mb-4 block">
                      {t('settings.currency')}
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {currencies.map(curr => (
                        <button
                          key={curr}
                          onClick={() => setCurrency(curr)}
                          className={`px-2 py-1 text-[10px] border transition-all ${
                            currency === curr 
                              ? 'bg-gold border-gold text-obsidian' 
                              : 'border-white/10 text-alabaster/60 hover:border-gold/40'
                          }`}
                        >
                          {curr}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Theme */}
                  <div>
                    <label className="text-[10px] font-bold tracking-widest uppercase text-gold mb-4 block">
                      {t('settings.theme')}
                    </label>
                    <div className="flex gap-4">
                      <button
                        onClick={() => setTheme('light')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 border transition-all ${
                          theme === 'light' 
                            ? 'bg-gold border-gold text-obsidian' 
                            : 'border-white/10 text-alabaster/60 hover:border-gold/40'
                        }`}
                      >
                        <Sun size={14} /> <span className="text-[10px] uppercase tracking-widest">{t('settings.light')}</span>
                      </button>
                      <button
                        onClick={() => setTheme('dark')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 border transition-all ${
                          theme === 'dark' 
                            ? 'bg-gold border-gold text-obsidian' 
                            : 'border-white/10 text-alabaster/60 hover:border-gold/40'
                        }`}
                      >
                        <Moon size={14} /> <span className="text-[10px] uppercase tracking-widest">{t('settings.dark')}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
