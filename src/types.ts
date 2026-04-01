export type Currency = 'MUR' | 'EUR' | 'USD' | 'GBP' | 'ZAR' | 'RUB' | 'CNY';
export type Language = 'EN' | 'FR' | 'DE' | 'RU' | 'ZH' | 'IT' | 'ES';
export type Theme = 'light' | 'dark';

export interface Vehicle {
  id: string;
  name: string;
  category: string;
  image: string;
  pax: number;
  luggage: number;
  price: {
    [key in Currency]?: number;
  };
  description: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  role: 'user' | 'admin';
}

export interface Booking {
  id: string;
  userId: string;
  vehicleId: string;
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalPrice: number;
  currency: Currency;
}

export interface Activity {
  title: string;
  location: string;
  image: string;
  description: string;
  attribution?: string;
}

export interface HorseRiding {
  id: string;
  name: string;
  location: string;
  duration: string;
  image: string;
  price: {
    [key in Currency]?: number;
  };
  description: string;
}

export interface Car {
  id: string;
  name: string;
  category: string;
  transmission: 'Manual' | 'Automatic';
  image: string;
  pricePerDay: {
    [key in Currency]?: number;
  };
  description: string;
}

export interface LocalizationState {
  currency: Currency;
  language: Language;
  theme: Theme;
  greeting: string;
}
