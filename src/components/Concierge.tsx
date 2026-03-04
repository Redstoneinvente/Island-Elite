import React from 'react';
import { motion } from 'motion/react';
import { Star, Utensils, Anchor, Home } from 'lucide-react';

export const Concierge: React.FC = () => {
  const offerings = [
    { icon: Utensils, title: 'Private Dining', desc: 'Reservations at the island\'s most exclusive culinary destinations.' },
    { icon: Anchor, title: 'Yacht Charters', desc: 'Bespoke nautical adventures across the Indian Ocean.' },
    { icon: Home, title: 'Villa Rentals', desc: 'Handpicked luxury estates for the ultimate private stay.' },
    { icon: Star, title: 'VIP Access', desc: 'Priority entry to high-profile events and private clubs.' },
  ];

  return (
    <section id="concierge" className="relative py-32 px-6 md:px-12 bg-[var(--bg-primary)] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 blur-[120px] opacity-20">
        <div className="h-[500px] w-[500px] rounded-full bg-gold" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="mb-4 text-[10px] font-bold tracking-[0.4em] uppercase text-gold">Beyond Transportation</p>
            <h2 className="mb-8 font-serif text-4xl md:text-6xl font-light tracking-tight text-[var(--text-primary)]">
              The Island <span className="italic text-gold">Concierge</span>
            </h2>
            <p className="mb-12 text-[var(--text-secondary)] leading-relaxed tracking-wide max-w-lg">
              Our service doesn't end at your destination. We curate the extraordinary, 
              ensuring every facet of your Mauritian stay is polished to perfection. 
              From the rare to the refined, your wish is our command.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {offerings.map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-gold">
                    <item.icon size={18} strokeWidth={1.5} />
                    <h4 className="text-[10px] font-bold tracking-widest uppercase text-[var(--text-primary)]">{item.title}</h4>
                  </div>
                  <p className="text-[10px] leading-relaxed text-[var(--text-secondary)]">{item.desc}</p>
                </div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-premium mt-12"
            >
              Contact Concierge
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Lifestyle" 
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 glass-card p-8 hidden md:block">
              <p className="font-serif text-4xl text-gold italic">24/7</p>
              <p className="text-[10px] tracking-widest uppercase text-alabaster/60">Dedicated Support</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
