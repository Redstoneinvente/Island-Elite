import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { ACTIVITIES } from '../constants';

export const Activities: React.FC = () => {
  return (
    <section id="activities" className="py-32 px-6 md:px-12 bg-[var(--bg-secondary)] text-[var(--text-primary)]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-end text-right">
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-[10px] font-bold tracking-[0.4em] uppercase text-gold"
          >
            Island Exploration
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl font-light tracking-tight md:text-6xl"
          >
            Unforgettable <span className="italic text-gold">Moments</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {ACTIVITIES.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group flex flex-col gap-8 md:flex-row md:items-center"
            >
              <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-sm md:h-80 md:w-80">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-obsidian/20 transition-opacity duration-500 group-hover:opacity-0" />
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-2 flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-gold">
                  <MapPin size={12} /> {activity.location}
                </div>
                <h3 className="mb-4 font-serif text-2xl font-medium tracking-wide">
                  {activity.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-obsidian/60">
                  {activity.description}
                </p>
                <button className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-colors hover:text-gold">
                  Learn More <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
