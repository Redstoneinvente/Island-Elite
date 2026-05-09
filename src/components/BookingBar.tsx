import React from 'react';
import { Calendar, MapPin, Users, Car } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion } from 'motion/react';
import { LOCATIONS } from '../constants';
import { useLocalization } from '../LocalizationContext';
import { sendEmail } from '../utils';

export const BookingBar: React.FC = () => {
  const { t } = useLocalization();
  const [pickup, setPickup] = React.useState(LOCATIONS[0]);
  const [dropoff, setDropoff] = React.useState('');
  const [date, setDate] = React.useState<Date | null>(new Date());
  const [vehicleClass, setVehicleClass] = React.useState('First Class');
  const [contactDetails, setContactDetails] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleTransferBooking = async () => {
    if (!contactDetails.trim()) {
      setErrorMessage('Please add your phone number or email so we can contact you back.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      await sendEmail(
        'cocomorisadventures@gmail.com',
        'Airport transfer booking',
        [
          'Hello,',
          '',
          'I would like to book an airport transfer.',
          '',
          `Starting point: ${pickup}`,
          `Destination: ${dropoff || 'Not selected'}`,
          `Date and time: ${date ? date.toLocaleString() : 'Not selected'}`,
          `Transfer type: ${vehicleClass}`,
          `Contact details: ${contactDetails}`,
          '',
          'Please contact me back to confirm.',
        ].join('\n')
      );
      setStatus('success');
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'We couldn\'t send your transfer request right now. Please try again.');
      setStatus('error');
    }
  };

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
        <div className="flex w-full flex-col gap-2 md:w-1/5">
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
        <div className="flex w-full flex-col gap-2 md:w-1/5">
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
        <div className="flex w-full flex-col gap-2 md:w-1/5">
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

        {/* Excursion Type */}
        <div className="flex w-full flex-col gap-2 md:w-1/5">
          <label className="flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-gold">
            <Car size={12} /> Transfer Type
          </label>
          <select 
            value={vehicleClass}
            onChange={(e) => setVehicleClass(e.target.value)}
            className="input-minimal w-full text-sm font-medium tracking-wide"
          >
            <option value="Standard Transfer" className="bg-[var(--bg-primary)] text-[var(--text-primary)]">Standard Transfer</option>
            <option value="Private Premium Transfer" className="bg-[var(--bg-primary)] text-[var(--text-primary)]">Private Premium Transfer</option>
            <option value="Group Transfer" className="bg-[var(--bg-primary)] text-[var(--text-primary)]">Group Transfer</option>
          </select>
        </div>

        <div className="flex w-full flex-col gap-2 md:w-1/5">
          <label className="flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-gold">
            <Users size={12} /> Contact Details
          </label>
          <input
            type="text"
            value={contactDetails}
            onChange={(e) => setContactDetails(e.target.value)}
            placeholder="Phone or email"
            className="input-minimal w-full text-sm font-medium tracking-wide"
          />
        </div>

        {/* Search Button */}
        <div className="w-full md:w-auto">
          <button type="button" onClick={handleTransferBooking} disabled={status === 'sending'} className="btn-premium w-full md:w-auto">
            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Request Sent' : t('hero.cta')}
          </button>
        </div>

        {status === 'error' && (
          <p className="w-full text-center text-xs tracking-wide text-red-300 md:text-left">
            {errorMessage}
          </p>
        )}
      </motion.div>
    </div>
  );
};
