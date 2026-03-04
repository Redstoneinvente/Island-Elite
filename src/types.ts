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

export interface LocalizationState {
  currency: Currency;
  language: Language;
  theme: Theme;
  greeting: string;
}
