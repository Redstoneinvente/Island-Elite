import { Vehicle, Activity, HorseRiding, Car } from './types';

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
    image: './excursions/mercedesSClass.png',
    pax: 3,
    luggage: 2,
    price: {
      MUR: 4500,
      EUR: 95,
      USD: 105,
    },
    description: 'The pinnacle of luxury travel. Perfect for bespoke island tours or romantic excursions.',
  },
  {
    id: 'bmw-x5',
    name: 'BMW X5',
    category: 'Executive SUV',
    image: './excursions/bmwX5.png',
    pax: 4,
    luggage: 4,
    price: {
      MUR: 3800,
      EUR: 80,
      USD: 88,
    },
    description: 'Spacious, powerful, and refined. Ideal for family adventures and exploring the rugged south.',
  },
  {
    id: 'airbus-h130',
    name: 'Airbus H130',
    category: 'Helicopter Excursion',
    image: './excursions/airbusH130.png',
    pax: 6,
    luggage: 0,
    price: {
      MUR: 25000,
      EUR: 520,
      USD: 575,
    },
    description: 'The ultimate way to see Mauritius. Experience breathtaking aerial views of the underwater waterfall.',
  },
];

export const HORSE_RIDING: HorseRiding[] = [
  {
    id: 'le-morne-beach-ride',
    name: 'Le Morne Beach Ride',
    location: 'Le Morne',
    duration: '1.5 Hours',
    image: './excursions/horseRidingLeMorne.png',
    price: {
      MUR: 3500,
      EUR: 75,
      USD: 80,
    },
    description: 'Experience the magic of riding along the pristine white sands of Le Morne at sunset.',
  },
  {
    id: 'riambel-beach-ride',
    name: 'Riambel Beach Ride',
    location: 'Riambel',
    duration: '2 Hours',
    image: './excursions/horseRidingRiambel.png',
    price: {
      MUR: 4000,
      EUR: 85,
      USD: 92,
    },
    description: 'A wilder experience on the southern coast, perfect for experienced riders seeking adventure.',
  },
];

export const CAR_RENTAL: Car[] = [
  {
    id: 'suzuki-swift',
    name: 'Suzuki Swift',
    category: 'Economy',
    transmission: 'Automatic',
    image: './excursions/suzukiSwift.png',
    pricePerDay: {
      MUR: 1800,
      EUR: 38,
      USD: 42,
    },
    description: 'Compact and fuel-efficient, perfect for navigating the island\'s coastal roads.',
  },
  {
    id: 'kia-sportage',
    name: 'Kia Sportage',
    category: 'SUV',
    transmission: 'Automatic',
    image: './excursions/kiaSportage.png',
    pricePerDay: {
      MUR: 3200,
      EUR: 68,
      USD: 74,
    },
    description: 'Comfortable and spacious, ideal for families exploring the island in style.',
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
    title: 'Excursion Planning',
    description: 'Bespoke itineraries tailored to your desires. From hidden waterfalls to private island escapes.',
    icon: 'Map',
  },
  {
    title: 'Private Tours',
    description: 'Customized island explorations with knowledgeable local guides in our premium vehicles.',
    icon: 'Compass',
  },
  {
    title: 'VIP Experiences',
    description: 'Exclusive access to the best Mauritius has to offer, with luxury transportation and concierge service.',
    icon: 'Star',
  },
];

export const ACTIVITIES: Activity[] = [
  // North
  {
    title: 'Cap Malheureux',
    location: 'North',
    image: './excursions/capMalheureux.png',
    description: 'Visit the iconic Red Church and enjoy fresh grilled seafood by the coast.',
    attribution: 'Photo by Xavier Coiffic on Unsplash',
  },
  {
    title: "L'Aventure du Sucre",
    location: 'North',
    image: './excursions/laventureDuSucre.png',
    description: 'A fascinating museum set in an old sugar factory, exploring the history of Mauritius.',
    attribution: 'Photo by David Clode on Unsplash',
  },
  {
    title: 'Pamplemousses Botanical Garden',
    location: 'North',
    image: './excursions/pamplemoussesBotanicalGarden.png',
    description: 'Home to giant water lilies and hundreds of exotic plant species.',
    attribution: 'Photo by Sacha Styles on Unsplash',
  },
  {
    title: 'Northern Islands',
    location: 'North',
    image: './excursions/northernIslands.png',
    description: 'Explore Ilot Gabriel, Coin de Mire, and Flat Island on a private cruise.',
    attribution: 'Photo by Ishan @seefromthesky on Unsplash',
  },
  {
    title: 'Port Louis & Caudan Waterfront',
    location: 'North',
    image: './excursions/portLouisCaudanWaterfront.png',
    description: 'Experience the vibrant central market and the modern waterfront shopping hub.',
    attribution: 'Photo by Kinshuk Bose on Unsplash',
  },
  {
    title: 'Fort Citadel',
    location: 'North',
    image: './excursions/fortCitadel.png',
    description: 'Panoramic views of Port Louis from this historic 19th-century fortress.',
    attribution: 'Photo by Xavier Coiffic on Unsplash',
  },
  {
    title: 'Luxury Spa Experience',
    location: 'North',
    image: './excursions/luxurySpaExperience.png',
    description: 'Indulge in world-class wellness treatments and traditional Mauritian rituals.',
    attribution: 'Photo by Jared Rice on Unsplash',
  },
  
  // South
  {
    title: 'Mahebourg Market',
    location: 'South',
    image: './excursions/mahebourgMarket.png',
    description: 'A traditional Mauritian market rich in local crafts and authentic street food.',
    attribution: 'Photo by Annie Spratt on Unsplash',
  },
  {
    title: 'Blue Bay Beach',
    location: 'South',
    image: './excursions/blueBayBeach.png',
    description: 'Famous for its crystal clear waters and exceptional marine park for snorkeling.',
    attribution: 'Photo by Sean Oulashin on Unsplash',
  },
  {
    title: 'Gris Gris',
    location: 'South',
    image: './excursions/grisGris.png',
    description: 'Rugged cliffs and crashing waves offering a dramatic view of the wild south coast.',
    attribution: 'Photo by Kalen Emsley on Unsplash',
  },
  {
    title: 'Rochester Falls',
    location: 'South',
    image: './excursions/rochesterFalls.png',
    description: 'Unique rectangular basalt columns forming a stunning waterfall hidden in the forest.',
    attribution: 'Photo by Blake Richard Verdoorn on Unsplash',
  },
  {
    title: 'Grand Bassin (Ganga Talao)',
    location: 'South',
    image: './excursions/grandBassin.png',
    description: 'A sacred crater lake and major Hindu pilgrimage site with majestic statues.',
    attribution: 'Photo by Xavier Coiffic on Unsplash',
  },
  {
    title: 'Black River Gorges',
    location: 'South',
    image: './excursions/blackRiverGorges.png',
    description: 'Breathtaking viewpoints over the island\'s largest national park and its waterfalls.',
    attribution: 'Photo by Luca Bravo on Unsplash',
  },
  {
    title: 'La Rhumerie de Chamarel',
    location: 'South',
    image: './excursions/laRhumerieDeChamarel.png',
    description: 'Premium rum distillery offering tours and tastings in a beautiful estate.',
    attribution: 'Photo by David Clode on Unsplash',
  },
  {
    title: 'Seven Coloured Earth',
    location: 'South',
    image: './excursions/sevenColouredEarth.png',
    description: 'Unique volcanic geological formation with dunes of seven distinct colors.',
    attribution: 'Photo by Luca Bravo on Unsplash',
  },
  {
    title: 'Macondé Viewpoint',
    location: 'South',
    image: './excursions/macondeViewpoint.png',
    description: 'One of the most photographed spots in Mauritius, offering a stunning coastal curve.',
    attribution: 'Photo by Xavier Coiffic on Unsplash',
  },
  {
    title: 'Alexandra Viewpoint',
    location: 'South',
    image: './excursions/alexandraViewpoint.png',
    description: 'Breathtaking views of the southern coastline and the lush green valleys.',
    attribution: 'Photo by David Marcu on Unsplash',
  },
  {
    title: 'La Prairie Beach',
    location: 'South',
    image: './excursions/laPrairieBeach.png',
    description: 'A serene and picturesque beach with a stunning view of Le Morne mountain.',
    attribution: 'Photo by Ishan @seefromthesky on Unsplash',
  },
  {
    title: 'Underwater Waterfall',
    location: 'South',
    image: './excursions/underwaterWaterfall.png',
    description: 'A world-famous optical illusion best viewed from a private helicopter.',
    attribution: 'Photo by Denys Nevozhai on Unsplash',
  },
  {
    title: 'Le Morne Beach',
    location: 'South',
    image: './excursions/leMorneBeach.png',
    description: 'Pristine white sands at the foot of the majestic Le Morne Brabant mountain.',
    attribution: 'Photo by Xavier Coiffic on Unsplash',
  },
  {
    title: 'South Eastern Islands',
    location: 'South',
    image: './excursions/southEasternIslands.png',
    description: 'Visit Ile aux Cerfs, Ile aux Aigrettes, and the stunning GRSE Waterfall.',
    attribution: 'Photo by Luca Bravo on Unsplash',
  },
];
