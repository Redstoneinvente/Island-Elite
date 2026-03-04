import React from 'react';
import { motion } from 'motion/react';
import { Ship, Map, Utensils, CalendarDays, Send } from 'lucide-react';
import { useAuth } from '../AuthContext';

const SERVICES = [
  {
    title: 'Yacht Charters',
    icon: Ship,
    description: 'Private catamaran and luxury yacht excursions to the northern islands or the crystal lagoons of the east.',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Curated Tours',
    icon: Map,
    description: 'Bespoke island discovery tours with expert local guides. Explore hidden waterfalls and colonial estates.',
    image: 'https://images.unsplash.com/photo-1589519160732-57fc497e9880?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Private Chefs',
    icon: Utensils,
    description: 'Fine dining experiences in the comfort of your villa, prepared by the island\'s most talented culinary artists.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Event Planning',
    icon: CalendarDays,
    description: 'From intimate beach proposals to grand celebrations, our team handles every detail with precision.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800'
  }
];

export const ConciergeSection: React.FC = () => {
  const { user } = useAuth();
  const [selectedService, setSelectedService] = React.useState(SERVICES[0].title);
  const [message, setMessage] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await fetch('/api/concierge/inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ serviceType: selectedService, message }),
    });
    setStatus('success');
    setMessage('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="concierge" className="py-32 px-6 md:px-12 bg-obsidian border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-xs font-medium tracking-[0.3em] uppercase text-gold"
          >
            Bespoke Experiences
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl font-light tracking-tight text-alabaster md:text-6xl"
          >
            Concierge <span className="italic text-gold">Services</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Service Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-sm group hover:border-gold/30 transition-colors"
              >
                <service.icon className="text-gold mb-4" size={32} />
                <h3 className="font-serif text-xl text-alabaster mb-2">{service.title}</h3>
                <p className="text-sm text-alabaster/40 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Inquiry Form */}
          <div className="glass-card p-8 md:p-12 rounded-sm">
            <h3 className="font-serif text-2xl text-alabaster mb-8">Inquire About a Service</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-medium tracking-widest uppercase text-gold">Service Type</label>
                <select 
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="input-minimal w-full"
                >
                  {SERVICES.map(s => <option key={s.title} value={s.title} className="bg-obsidian">{s.title}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-medium tracking-widest uppercase text-gold">Your Message</label>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us more about your requirements..."
                  className="input-minimal w-full min-h-[120px] resize-none"
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="btn-premium flex items-center justify-center gap-2"
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Inquiry Sent' : (
                  <>
                    Send Inquiry <Send size={14} />
                  </>
                )}
              </button>

              {!user && (
                <p className="text-[10px] text-alabaster/40 text-center uppercase tracking-widest">
                  Login to track your inquiries in your dashboard
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
