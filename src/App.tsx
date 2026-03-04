import React from 'react';
import { LocalizationProvider, useLocalization } from './LocalizationContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BookingBar } from './components/BookingBar';
import { FleetShowcase } from './components/FleetShowcase';
import { Services } from './components/Services';
import { Activities } from './components/Activities';
import { Concierge } from './components/Concierge';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function AppContent() {
  const { greeting, currency } = useLocalization();

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] selection:bg-gold selection:text-obsidian">
      <Header />
      
      <main>
        <Hero greeting={greeting} />
        <BookingBar />
        <FleetShowcase currency={currency} />
        <Services />
        <Activities />
        <Concierge />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LocalizationProvider>
      <AppContent />
    </LocalizationProvider>
  );
}
