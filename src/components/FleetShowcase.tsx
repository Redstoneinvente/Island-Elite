import React from 'react';
import { motion } from 'motion/react';
import { Users, Briefcase, ArrowRight } from 'lucide-react';
import { FLEET, CURRENCY_RATES } from '../constants';
import { Currency } from '../types';
import { formatPrice } from '../utils';
import { useLocalization } from '../LocalizationContext';

interface FleetShowcaseProps {
  currency: Currency;
}

export const FleetShowcase: React.FC<FleetShowcaseProps> = ({ currency }) => {
  const { t } = useLocalization();

  const getConvertedPrice = (vehicle: any) => {
    if (vehicle.price[currency]) return vehicle.price[currency];
    
    // Fallback to conversion from MUR
    const basePrice = vehicle.price['MUR'];
    const rate = CURRENCY_RATES[currency] || 1;
    return Math.round(basePrice * rate);
  };

  return (
    <section id="fleet" className="py-32 px-6 md:px-12 bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-[10px] font-bold tracking-[0.4em] uppercase text-gold"
          >
            Our Exclusive Fleet
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl font-light tracking-tight text-[var(--text-primary)] md:text-6xl"
          >
            Select Your <span className="italic text-gold">Experience</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {FLEET.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-sm"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="glass-card px-4 py-1 text-[10px] font-medium tracking-widest uppercase text-gold">
                    {vehicle.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 transition-transform duration-500 group-hover:-translate-y-4">
                <h3 className="mb-2 font-serif text-2xl font-light tracking-wide text-alabaster">
                  {vehicle.name}
                </h3>
                
                <div className="mb-6 flex items-center gap-6 text-[10px] tracking-widest uppercase text-alabaster/60">
                  <span className="flex items-center gap-2"><Users size={12} className="text-gold" /> {vehicle.pax} PAX</span>
                  <span className="flex items-center gap-2"><Briefcase size={12} className="text-gold" /> {vehicle.luggage} LUGGAGE</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-alabaster/40">Starting from</p>
                    <p className="font-serif text-xl text-gold">{formatPrice(getConvertedPrice(vehicle), currency)}</p>
                  </div>
                  
                  <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 text-gold transition-all duration-300 hover:bg-gold hover:text-obsidian">
                    <ArrowRight size={20} />
                  </button>
                </div>

                {/* Description - Slides up on hover */}
                <div className="mt-6 h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:h-auto group-hover:opacity-100">
                  <p className="text-sm leading-relaxed text-alabaster/60">
                    {vehicle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
