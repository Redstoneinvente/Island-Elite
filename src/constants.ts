import { Vehicle } from './types';

export const CURRENCY_RATES: Record<string, number> = {
  MUR: 1,
  EUR: 0.021,
  USD: 0.023,
  GBP: 0.018,
  ZAR: 0.43,
  RUB: 2.1,
  CNY: 0.16,
};

export const FLEET: Vehicle[] = [
  {
    id: 'mercedes-s-class',
    name: 'Mercedes S-Class',
    category: 'First Class',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200',
    pax: 3,
    luggage: 2,
    price: {
      MUR: 4500,
      EUR: 95,
      USD: 105,
    },
    description: 'The pinnacle of luxury travel. Perfect for high-profile business or romantic arrivals.',
  },
  {
    id: 'bmw-x5',
    name: 'BMW X5',
    category: 'Executive SUV',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1200',
    pax: 4,
    luggage: 4,
    price: {
      MUR: 3800,
      EUR: 80,
      USD: 88,
    },
    description: 'Spacious, powerful, and refined. Ideal for families or groups with extra luggage.',
  },
  {
    id: 'airbus-h130',
    name: 'Airbus H130',
    category: 'Helicopter Transfer',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1200',
    pax: 6,
    luggage: 0,
    price: {
      MUR: 25000,
      EUR: 520,
      USD: 575,
    },
    description: 'The fastest way to reach your resort. Experience breathtaking views of the island.',
  },
];

export const LOCATIONS = [
  'SSR International Airport (MRU)',
  'Port Louis',
  'Grand Baie',
  'Flic en Flac',
  'Le Morne',
  'Belle Mare',
  'Bel Ombre',
  'Trou aux Biches',
];

export const SERVICES = [
  {
    title: 'Airport Transfers',
    description: 'Seamless transitions from runway to resort. Our chauffeurs monitor your flight for precise timing.',
    icon: 'Plane',
  },
  {
    title: 'Private Tours',
    description: 'Customized island explorations with knowledgeable local guides in our premium vehicles.',
    icon: 'Map',
  },
  {
    title: 'Corporate Travel',
    description: 'Professional, punctual, and discreet transportation for business executives and delegations.',
    icon: 'Briefcase',
  },
  {
    title: 'Wedding Services',
    description: 'Elegant transport for your special day, ensuring the bridal party arrives in absolute style.',
    icon: 'Heart',
  },
];

export const ACTIVITIES = [
  {
    title: 'Catamaran Cruise',
    location: 'Northern Isles',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800',
    description: 'Sail the turquoise lagoons and enjoy a gourmet BBQ on the deck of a private catamaran.',
  },
  {
    title: 'Underwater Waterfall',
    location: 'Le Morne',
    image: 'https://images.unsplash.com/photo-1589519160732-57fc497e9880?auto=format&fit=crop&q=80&w=800',
    description: 'Witness the famous optical illusion from above with a private helicopter tour.',
  },
  {
    title: 'Chamarel Seven Coloured Earth',
    location: 'Chamarel',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=800',
    description: 'Explore the unique volcanic geological formation and the stunning Chamarel waterfall.',
  },
  {
    title: 'Swim with Dolphins',
    location: 'Tamarin Bay',
    image: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&q=80&w=800',
    description: 'An ethical and magical encounter with wild dolphins in their natural habitat.',
  },
];
