import React from 'react';
import { motion } from 'motion/react';
import { useAuth } from '../AuthContext';
import { Booking } from '../types';
import { formatPrice } from '../utils';
import { Calendar, MapPin, Car, Clock, User as UserIcon, LogOut } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [bookings, setBookings] = React.useState<Booking[]>([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch('/api/bookings')
      .then(res => res.json())
      .then(data => setBookings(data.bookings || []))
      .finally(() => setLoading(false));
  }, []);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-obsidian pt-32 pb-20 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-2"
            >
              Client Dashboard
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl text-alabaster"
            >
              Welcome back, <span className="italic text-gold">{user.name}</span>
            </motion.h1>
          </div>
          <button 
            onClick={logout}
            className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-alabaster/40 hover:text-gold transition-colors"
          >
            <LogOut size={14} /> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content: Bookings */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-alabaster mb-8">Your Bookings</h2>
            
            {loading ? (
              <div className="glass-card p-12 text-center text-alabaster/40">Loading your journeys...</div>
            ) : bookings.length === 0 ? (
              <div className="glass-card p-12 text-center text-alabaster/40">
                No bookings found. Your future journeys will appear here.
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {bookings.map((booking, index) => (
                  <motion.div
                    key={booking.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 rounded-sm flex flex-col md:flex-row justify-between gap-8"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 text-[8px] font-bold uppercase tracking-widest rounded-full ${
                          booking.status === 'completed' ? 'bg-emerald-500/20 text-emerald-500' : 'bg-gold/20 text-gold'
                        }`}>
                          {booking.status}
                        </span>
                        <span className="text-xs text-alabaster/40 font-mono">#{booking.id.toString().padStart(5, '0')}</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin size={16} className="text-gold shrink-0 mt-1" />
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-alabaster/40 mb-1">Route</p>
                            <p className="text-sm text-alabaster">{booking.pickup} → {booking.dropoff}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Calendar size={16} className="text-gold shrink-0 mt-1" />
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-alabaster/40 mb-1">Date & Time</p>
                            <p className="text-sm text-alabaster">{new Date(booking.date).toLocaleString()}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Car size={16} className="text-gold shrink-0 mt-1" />
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-alabaster/40 mb-1">Vehicle</p>
                            <p className="text-sm text-alabaster">{booking.vehicle_class}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between items-end">
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-widest text-alabaster/40 mb-1">Total Paid</p>
                        <p className="font-serif text-2xl text-gold">{formatPrice(booking.price, booking.currency as any)}</p>
                      </div>
                      <button className="text-[10px] font-bold uppercase tracking-widest text-gold hover:underline">
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar: Profile Info */}
          <div className="flex flex-col gap-8">
            <div className="glass-card p-8 rounded-sm">
              <h3 className="font-serif text-xl text-alabaster mb-6">Profile Details</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <UserIcon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-alabaster font-medium">{user.name}</p>
                    <p className="text-xs text-alabaster/40">{user.email}</p>
                  </div>
                </div>
                <div className="h-[1px] w-full bg-white/5" />
                <button className="btn-premium w-full text-xs">Edit Profile</button>
              </div>
            </div>

            <div className="glass-card p-8 rounded-sm border-gold/20">
              <h3 className="font-serif text-xl text-gold mb-4 italic">COCO MORIS ADVENTURES Status</h3>
              <p className="text-sm text-alabaster/60 leading-relaxed mb-6">
                You are currently a <span className="text-alabaster font-medium">Silver Member</span>. 
                Complete 2 more journeys to unlock Gold benefits.
              </p>
              <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                <div className="bg-gold h-full w-3/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Need to import useEffect
import { useEffect } from 'react';
