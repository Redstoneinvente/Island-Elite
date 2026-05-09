import React from 'react';
import { Menu, X, Settings as SettingsIcon, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocalization } from '../LocalizationContext';
import { SettingsModal } from './SettingsModal';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);
  const { t, language, currency, theme } = useLocalization();

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-6 py-6 transition-all duration-500 md:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <img 
            src="./excursions/logo.png" 
            alt="COCO MORIS ADVENTURES Logo" 
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {['Services', 'Activities', 'HorseRiding', 'QuadBiking', 'CarRental', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')}`}
              whileHover={{ color: '#C5A059' }}
              className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--text-secondary)] hover:text-gold transition-colors"
            >
              {t(`nav.${item.charAt(0).toLowerCase() + item.slice(1)}`)}
            </motion.a>
          ))}
          
          <div className="h-4 w-[1px] bg-[var(--border-color)]" />

          {/* Settings & Account Trigger */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsSettingsOpen(true)}
              className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--text-secondary)] hover:text-gold transition-colors"
            >
              <SettingsIcon size={14} className="text-gold" />
              {language} / {currency}
            </button>
            
            <button 
              onClick={() => setIsSettingsOpen(true)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/20 text-gold hover:bg-gold hover:text-obsidian transition-all"
            >
              <User size={14} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setIsSettingsOpen(true)}
            className="text-gold"
          >
            <SettingsIcon size={20} />
          </button>
          <button 
            className="text-[var(--text-primary)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-card mt-4 overflow-hidden rounded-sm md:hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {['Services', 'Activities', 'HorseRiding', 'QuadBiking', 'CarRental', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xs font-bold tracking-widest uppercase text-[var(--text-secondary)]"
                >
                  {t(`nav.${item.charAt(0).toLowerCase() + item.slice(1)}`)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </header>
  );
};
