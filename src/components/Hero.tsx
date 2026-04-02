import React from 'react';
import { motion } from 'motion/react';
import { useLocalization } from '../LocalizationContext';

interface HeroProps {
  greeting: string;
}

export const Hero: React.FC<HeroProps> = ({ greeting }) => {
  const { t } = useLocalization();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/excursions/hero-bg.png" 
          alt="Le Morne Mauritius" 
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/40 to-obsidian" />
      </div>

      {/* Content */}
      <div className="relative flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-gold"
          >
            {greeting}, {t('hero.subtitle')}
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-8 font-serif text-5xl font-light tracking-tight text-alabaster md:text-8xl"
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto mb-12 max-w-xl text-sm leading-relaxed tracking-wide text-alabaster/60 md:text-base"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#fleet" className="btn-premium">
              {t('hero.cta')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
