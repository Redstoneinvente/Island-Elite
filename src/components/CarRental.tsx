import React from 'react';
import { motion } from 'motion/react';
import { Settings, Users, Briefcase } from 'lucide-react';
import { CAR_RENTAL } from '../constants';
import { useLocalization } from '../LocalizationContext';

export const CarRental: React.FC = () => {
  const { t } = useLocalization();

  return (
    <section id="car-rental" className="py-32 px-6 md:px-12 bg-[var(--bg-secondary)] text-[var(--text-primary)]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-[10px] font-bold tracking-[0.4em] uppercase text-gold"
          >
            {t('carRental.subtitle')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl font-light tracking-tight md:text-6xl"
          >
            {t('carRental.title').split(' ')[0]} <span className="italic text-gold">{t('carRental.title').split(' ').slice(1).join(' ')}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {CAR_RENTAL.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative flex flex-col bg-[var(--bg-primary)] rounded-sm overflow-hidden border border-[var(--border-color)]"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-4 left-4">
                  <span className="glass-card px-3 py-1 text-[8px] font-bold tracking-widest uppercase text-gold">
                    {car.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6 flex items-center gap-6 text-[10px] font-bold tracking-widest uppercase text-[var(--text-secondary)] opacity-60">
                  <span className="flex items-center gap-1">
                    <Settings size={12} /> {car.transmission}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={12} /> 5 Seats
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase size={12} /> 2 Cases
                  </span>
                </div>

                <h3 className="mb-4 font-serif text-2xl font-medium tracking-wide text-[var(--text-primary)]">
                  {car.name}
                </h3>

                <p className="mb-8 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {car.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
