import React from 'react';
import { Calendar, MapPin, Users, Car } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion } from 'motion/react';
import { LOCATIONS } from '../constants';
import { useLocalization } from '../LocalizationContext';

export const BookingBar: React.FC = () => {
  const { t } = useLocalization();
  const [pickup, setPickup] = React.useState(LOCATIONS[0]);
  const [dropoff, setDropoff] = React.useState('');
  const [date, setDate] = React.useState<Date | null>(new Date());
  const [vehicleClass, setVehicleClass] = React.useState('First Class');

  return (
    <div className="relative z-20 mx-auto -mt-24 w-full max-w-7xl px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass-card flex flex-col items-center gap-8 p-8 md:flex-row md:p-12"
      >
        {/* Pickup */}
        <div className="flex w-full flex-col gap-2 md:w-1/4">
          <label className="flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-gold">
            <MapPin size={12} /> {t('booking.pickup')}
          </label>
          <select 
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="input-minimal w-full text-sm font-medium tracking-wide"
          >
            {LOCATIONS.map(loc => (
              <option key={loc} value={loc} className="bg-[var(--bg-primary)] text-[var(--text-primary)]">{loc}</option>
            ))}
          </select>
        </div>

        {/* Dropoff */}
        <div className="flex w-full flex-col gap-2 md:w-1/4">
          <label className="flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-gold">
            <MapPin size={12} /> {t('booking.dropoff')}
          </label>
          <select 
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            className="input-minimal w-full text-sm font-medium tracking-wide"
          >
            <option value="" disabled className="bg-[var(--bg-primary)] text-[var(--text-primary)]">Select Destination</option>
            {LOCATIONS.map(loc => (
              <option key={loc} value={loc} className="bg-[var(--bg-primary)] text-[var(--text-primary)]">{loc}</option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div className="flex w-full flex-col gap-2 md:w-1/4">
          <label className="flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-gold">
            <Calendar size={12} /> {t('booking.date')} & {t('booking.time')}
          </label>
          <div className="relative">
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
              className="input-minimal w-full text-sm font-medium tracking-wide"
            />
          </div>
        </div>

        {/* Vehicle Class */}
        <div className="flex w-full flex-col gap-2 md:w-1/4">
          <label className="flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-gold">
            <Car size={12} /> Vehicle Class
          </label>
          <select 
            value={vehicleClass}
            onChange={(e) => setVehicleClass(e.target.value)}
            className="input-minimal w-full text-sm font-medium tracking-wide"
          >
            <option value="First Class" className="bg-[var(--bg-primary)] text-[var(--text-primary)]">First Class</option>
            <option value="Executive SUV" className="bg-[var(--bg-primary)] text-[var(--text-primary)]">Executive SUV</option>
            <option value="Helicopter" className="bg-[var(--bg-primary)] text-[var(--text-primary)]">Helicopter</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="w-full md:w-auto">
          <button className="btn-premium w-full md:w-auto">
            {t('hero.cta')}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
