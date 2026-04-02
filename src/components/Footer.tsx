import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-primary)] py-20 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="./excursions/logo.png" 
              alt="Coco Moris Logo" 
              className="mb-8 h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <p className="mb-8 max-w-sm text-sm leading-relaxed text-[var(--text-secondary)]">
              Defining luxury excursions in Mauritius. From private island tours to 
              bespoke adventures and helicopter charters, we ensure your journey is as 
              extraordinary as your destination.
            </p>
            <div className="flex gap-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-[var(--text-secondary)] transition-colors hover:text-gold">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-8 text-xs font-medium tracking-widest uppercase text-gold">Explore</h4>
            <ul className="flex flex-col gap-4">
              {['Fleet', 'Services', 'Activities', 'Concierge', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-8 text-xs font-medium tracking-widest uppercase text-gold">Contact</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4 text-sm text-[var(--text-secondary)]">
                <MapPin size={18} className="shrink-0 text-gold" />
                <span>Royal Road, Grand Baie,<br />Mauritius</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
                <Phone size={18} className="shrink-0 text-gold" />
                <span>+230 5555 0123</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
                <Mail size={18} className="shrink-0 text-gold" />
                <span>concierge@islandelite.mu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-8 border-t border-[var(--border-color)] pt-8 md:flex-row">
          <p className="text-[10px] tracking-widest uppercase text-[var(--text-secondary)] opacity-40">
            © 2024 Coco Moris Mauritius. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] tracking-widest uppercase text-[var(--text-secondary)] opacity-40">
            <a href="#" className="hover:text-[var(--text-primary)]">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--text-primary)]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
