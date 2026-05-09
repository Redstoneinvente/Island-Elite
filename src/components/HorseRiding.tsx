import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock } from 'lucide-react';
import { HORSE_RIDING } from '../constants';
import { useLocalization } from '../LocalizationContext';

export const HorseRiding: React.FC = () => {
  const { t } = useLocalization();

  return (
    <section id="horse-riding" className="py-32 px-6 md:px-12 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-[10px] font-bold tracking-[0.4em] uppercase text-gold"
          >
            {t('horseRiding.subtitle')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl font-light tracking-tight md:text-6xl"
          >
            {t('horseRiding.title').split(' ')[0]} <span className="italic text-gold">{t('horseRiding.title').split(' ').slice(1).join(' ')}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {HORSE_RIDING.map((ride, index) => (
            <motion.div
              key={ride.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative flex flex-col md:flex-row bg-[var(--bg-secondary)] rounded-sm overflow-hidden border border-[var(--border-color)]"
            >
              <div className="relative w-full md:w-2/5 aspect-[4/5] md:aspect-auto overflow-hidden">
                <img 
                  src={ride.image} 
                  alt={ride.name}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--bg-secondary)] opacity-20 hidden md:block" />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12 md:w-3/5">
                <div className="mb-6 flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-gold">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {ride.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {ride.duration}
                  </span>
                </div>

                <h3 className="mb-4 font-serif text-2xl font-medium tracking-wide text-[var(--text-primary)]">
                  {ride.name}
                </h3>

                <p className="mb-8 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {ride.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
