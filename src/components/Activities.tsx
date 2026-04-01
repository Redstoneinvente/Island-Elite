import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { ACTIVITIES } from '../constants';
import { useLocalization } from '../LocalizationContext';

type Region = 'All' | 'North' | 'South';

export const Activities: React.FC = () => {
  const { t } = useLocalization();
  const [activeRegion, setActiveRegion] = useState<Region>('All');

  const filteredActivities = activeRegion === 'All' 
    ? ACTIVITIES 
    : ACTIVITIES.filter(a => a.location === activeRegion);

  const regions: Region[] = ['All', 'North', 'South'];
  const regionLabels: Record<Region, string> = {
    All: t('activities.all'),
    North: t('activities.north'),
    South: t('activities.south'),
  };

  return (
    <section id="activities" className="py-32 px-6 md:px-12 bg-[var(--bg-secondary)] text-[var(--text-primary)]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-[10px] font-bold tracking-[0.4em] uppercase text-gold"
            >
              {t('activities.subtitle')}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl font-light tracking-tight md:text-6xl"
            >
              {t('activities.title').split(' ')[0]} <span className="italic text-gold">{t('activities.title').split(' ').slice(1).join(' ')}</span>
            </motion.h2>
          </div>

          {/* Filter Bar */}
          <div className="flex gap-8 border-b border-[var(--border-color)]">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`pb-4 text-[10px] font-bold tracking-[0.2em] uppercase transition-all relative ${
                  activeRegion === region ? 'text-gold' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {regionLabels[region]}
                {activeRegion === region && (
                  <motion.div 
                    layoutId="activeRegion"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredActivities.map((activity, index) => (
              <motion.div
                layout
                key={activity.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col bg-[var(--bg-primary)] rounded-sm overflow-hidden border border-[var(--border-color)]"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="glass-card px-3 py-1 text-[8px] font-bold tracking-widest uppercase text-gold">
                      {activity.location}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="mb-3 font-serif text-xl font-medium tracking-wide text-[var(--text-primary)]">
                    {activity.title}
                  </h3>
                  <p className="mb-6 text-xs leading-relaxed text-[var(--text-secondary)] line-clamp-2">
                    {activity.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <button className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-gold transition-all hover:gap-3">
                      {t('activities.explore')} <ArrowUpRight size={14} />
                    </button>
                    {activity.attribution && (
                      <span className="text-[8px] uppercase tracking-tighter text-[var(--text-secondary)] opacity-30">
                        {activity.attribution}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
