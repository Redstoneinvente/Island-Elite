import React from 'react';
import { LocalizationProvider, useLocalization } from './LocalizationContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BookingBar } from './components/BookingBar';
import { Services } from './components/Services';
import { Activities } from './components/Activities';
import { HorseRiding } from './components/HorseRiding';
import { CarRental } from './components/CarRental';
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
        <Services />
        <Activities />
        <HorseRiding />
        <CarRental />
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
