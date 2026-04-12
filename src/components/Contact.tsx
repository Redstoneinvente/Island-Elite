import React from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { sendEmail } from '../utils';

export const Contact: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [serviceInterest, setServiceInterest] = React.useState('Airport Transfer');
  const [message, setMessage] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async () => {
    setStatus('sending');

    try {
      await sendEmail(
        'cocomorisadventures@gmail.com',
        `Website inquiry: ${serviceInterest}`,
        [
          'Hello,',
          '',
          `Name: ${name || 'Not provided'}`,
          `Email: ${email || 'Not provided'}`,
          `Service interest: ${serviceInterest}`,
          '',
          'Message:',
          message || 'No message provided.',
        ].join('\n')
      );
      setStatus('success');
      setName('');
      setEmail('');
      setServiceInterest('Airport Transfer');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-[10px] font-bold tracking-[0.4em] uppercase text-gold">Get in Touch</p>
            <h2 className="mb-8 font-serif text-4xl md:text-6xl font-light tracking-tight text-[var(--text-primary)]">
              Let's Plan Your <span className="italic text-gold">Journey</span>
            </h2>
            <p className="mb-12 text-[var(--text-secondary)] leading-relaxed tracking-wide max-w-md">
              Whether you have a specific request or need guidance on your island 
              itinerary, our team is ready to assist you with unparalleled attention to detail.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 text-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-1">Call Us</p>
                  <p className="text-lg text-[var(--text-primary)]">+230 5795 9947</p>
                  <p className="text-xs text-[var(--text-secondary)]">Available 24/7 for urgent bookings</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 text-gold">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-1">Email Us</p>
                  <p className="text-lg text-[var(--text-primary)]">cocomorisadventures@gmail.com</p>
                  <p className="text-xs text-[var(--text-secondary)]">Response within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 text-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-gold mb-1">Visit Us</p>
                  <p className="text-lg text-[var(--text-primary)]">Shining Lane, Mare d'Albert</p>
                  <p className="text-xs text-[var(--text-secondary)]">Mauritius, Indian Ocean</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-sm"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-medium tracking-widest uppercase text-gold">Full Name</label>
                  <input type="text" placeholder="John Doe" className="input-minimal" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-medium tracking-widest uppercase text-gold">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="input-minimal" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-medium tracking-widest uppercase text-gold">Service Interest</label>
                <select className="input-minimal" value={serviceInterest} onChange={(e) => setServiceInterest(e.target.value)}>
                  <option className="bg-[var(--bg-primary)]">Airport Transfer</option>
                  <option className="bg-[var(--bg-primary)]">Private Island Tour</option>
                  <option className="bg-[var(--bg-primary)]">Helicopter Charter</option>
                  <option className="bg-[var(--bg-primary)]">Beach Ride</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-medium tracking-widest uppercase text-gold">Your Message</label>
                <textarea rows={4} placeholder="Tell us about your requirements..." className="input-minimal resize-none" value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>

              <button type="button" onClick={handleSubmit} disabled={status === 'sending'} className="btn-premium flex w-full items-center justify-center gap-3">
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent' : <>Send Message <Send size={16} /></>}
              </button>

              {status === 'error' && (
                <p className="text-sm text-red-300">
                  We couldn&apos;t send your message right now. Please try again shortly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
