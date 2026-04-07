import React from 'react';
import { motion } from 'motion/react';
import { Plane, Map, Briefcase, Compass, Star } from 'lucide-react';
import { SERVICES } from '../constants';
import { useLocalization } from '../LocalizationContext';

const iconMap: Record<string, any> = {
  Plane,
  Map,
  Briefcase,
  Compass,
  Star,
};

export const Services: React.FC = () => {
  const { t } = useLocalization();

  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 text-center relative">
          <img
            src="./excursions/dolphin.png"
            alt="Dolphin"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-auto opacity-10"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-[10px] font-bold tracking-[0.4em] uppercase text-gold"
          >
            {t('services.subtitle')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative font-serif text-5xl font-light tracking-tight text-[var(--text-primary)] md:text-7xl"
          >
            {t('services.title').split(' ')[0]} <span className="italic text-gold">{t('services.title').split(' ').slice(1).join(' ')}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-[var(--border-color)] border border-[var(--border-color)]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative bg-[var(--bg-primary)] p-12 transition-all duration-700 hover:bg-gold/5"
                >
                  <div className="mb-12 flex h-12 w-12 items-center justify-center text-gold transition-transform duration-500 group-hover:scale-110">
                    <Icon size={32} strokeWidth={1} />
                  </div>
                  <h3 className="mb-6 font-serif text-2xl font-light text-[var(--text-primary)] tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-500">
                    {service.description}
                  </p>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 h-8 w-8 border-t border-r border-transparent transition-colors duration-500 group-hover:border-gold/20" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
