import React from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, Mountain } from 'lucide-react';
import { useLocalization } from '../LocalizationContext';

export const QuadBiking: React.FC = () => {
  const { t } = useLocalization();

  return (
    <section id="quad-biking" className="py-32 px-6 md:px-12 bg-[var(--bg-secondary)] text-[var(--text-primary)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative min-h-[420px] overflow-hidden rounded-sm border border-[var(--border-color)]"
        >
          <img
            src="./excursions/quad.jpg"
            alt={t('quadBiking.imageAlt')}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent opacity-50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="mb-4 text-[10px] font-bold tracking-[0.4em] uppercase text-gold">
            {t('quadBiking.subtitle')}
          </p>
          <h2 className="mb-8 font-serif text-4xl font-light tracking-tight md:text-6xl">
            {t('quadBiking.title').split(' ')[0]} <span className="italic text-gold">{t('quadBiking.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="mb-10 max-w-xl text-sm leading-8 text-[var(--text-secondary)]">
            {t('quadBiking.description')}
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="border-l border-gold/40 pl-4">
              <MapPin size={16} className="mb-3 text-gold" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">
                {t('quadBiking.locationLabel')}
              </p>
              <p className="mt-1 text-sm text-[var(--text-primary)]">
                {t('quadBiking.location')}
              </p>
            </div>
            <div className="border-l border-gold/40 pl-4">
              <Clock size={16} className="mb-3 text-gold" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">
                {t('quadBiking.durationLabel')}
              </p>
              <p className="mt-1 text-sm text-[var(--text-primary)]">
                {t('quadBiking.duration')}
              </p>
            </div>
            <div className="border-l border-gold/40 pl-4">
              <Mountain size={16} className="mb-3 text-gold" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">
                {t('quadBiking.terrainLabel')}
              </p>
              <p className="mt-1 text-sm text-[var(--text-primary)]">
                {t('quadBiking.terrain')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
