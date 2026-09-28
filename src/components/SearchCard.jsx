import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Users, Search, ChevronDown, Check } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export default function SearchCard({ initialValues = {}, onSearch = null }) {
  const navigate = useNavigate();
  const { addToast } = useToast();

  const [location, setLocation] = useState(initialValues.location || 'Near Temple');
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);

  // Default dates: tomorrow and day after
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(tomorrow);
  dayAfter.setDate(dayAfter.getDate() + 1);

  const formatDateForInput = (d) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(initialValues.checkIn || formatDateForInput(tomorrow));
  const [checkOut, setCheckOut] = useState(initialValues.checkOut || formatDateForInput(dayAfter));

  const [guestsCount, setGuestsCount] = useState(initialValues.guests || 2);
  const [roomsCount, setRoomsCount] = useState(initialValues.rooms || 1);
  const [guestsPopupOpen, setGuestsPopupOpen] = useState(false);

  const locations = [
    { label: 'Near Temple (Vatavruksha)', desc: 'Within 500m of main shrine' },
    { label: 'Near Annachhatra', desc: 'Convenient for Mahaprasad' },
    { label: 'Central Akkalkot', desc: 'Close to market & Samadhi Math' },
    { label: 'Near S.T. Bus Stand', desc: 'Easy transit & late arrivals' },
    { label: 'All Akkalkot', desc: 'Show all available verified stays' },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (new Date(checkOut) <= new Date(checkIn)) {
      addToast('Check-out date must be after check-in date', 'error');
      return;
    }

    addToast(`Searching verified stays for ${guestsCount} guests in Akkalkot`, 'success');

    const searchParams = new URLSearchParams({
      loc: location,
      in: checkIn,
      out: checkOut,
      guests: guestsCount,
      rooms: roomsCount,
    });

    if (onSearch) {
      onSearch({ location, checkIn, checkOut, guestsCount, roomsCount });
    } else {
      navigate(`/stay?${searchParams.toString()}`);
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-elevated border border-gold/30 p-3 sm:p-5 text-charcoal">
      <form onSubmit={handleSearchSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 items-center">
          {/* Location selector */}
          <div className="lg:col-span-4 relative">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-muted mb-1 px-1">
              Where are you staying?
            </label>
            <div
              onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
              className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-gold cursor-pointer transition-all bg-warmIvory/30 hover:bg-white"
            >
              <MapPin className="w-5 h-5 text-terracotta flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <span className="block text-sm font-semibold truncate text-charcoal">
                  {location}
                </span>
                <span className="block text-xs text-charcoal-muted truncate">
                  Akkalkot, Maharashtra
                </span>
              </div>
              <ChevronDown className="w-4 h-4 text-charcoal-muted" />
            </div>

            {/* Dropdown */}
            {locationDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setLocationDropdownOpen(false)}
                />
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-gold/30 py-2 z-40">
                  {locations.map((loc) => (
                    <div
                      key={loc.label}
                      onClick={() => {
                        setLocation(loc.label);
                        setLocationDropdownOpen(false);
                      }}
                      className={`px-4 py-2.5 hover:bg-terracotta-50/80 cursor-pointer flex items-center justify-between text-sm transition-colors ${
                        location === loc.label ? 'bg-terracotta-50 font-semibold text-terracotta-600' : 'text-charcoal'
                      }`}
                    >
                      <div>
                        <div className="font-medium">{loc.label}</div>
                        <div className="text-xs text-charcoal-muted">{loc.desc}</div>
                      </div>
                      {location === loc.label && <Check className="w-4 h-4 text-terracotta" />}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Check-in date */}
          <div className="lg:col-span-2 relative">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-muted mb-1 px-1">
              Check-in
            </label>
            <div className="flex items-center gap-2.5 p-3 rounded-xl border border-gray-200 hover:border-gold transition-all bg-warmIvory/30 focus-within:bg-white focus-within:border-gold">
              <Calendar className="w-4 h-4 text-gold flex-shrink-0" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={formatDateForInput(today)}
                className="w-full text-xs sm:text-sm font-medium bg-transparent focus:outline-none text-charcoal cursor-pointer"
              />
            </div>
          </div>

          {/* Check-out date */}
          <div className="lg:col-span-2 relative">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-muted mb-1 px-1">
              Check-out
            </label>
            <div className="flex items-center gap-2.5 p-3 rounded-xl border border-gray-200 hover:border-gold transition-all bg-warmIvory/30 focus-within:bg-white focus-within:border-gold">
              <Calendar className="w-4 h-4 text-gold flex-shrink-0" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || formatDateForInput(tomorrow)}
                className="w-full text-xs sm:text-sm font-medium bg-transparent focus:outline-none text-charcoal cursor-pointer"
              />
            </div>
          </div>

          {/* Guests selector */}
          <div className="lg:col-span-2 relative">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-muted mb-1 px-1">
              Guests & Rooms
            </label>
            <div
              onClick={() => setGuestsPopupOpen(!guestsPopupOpen)}
              className="flex items-center gap-2.5 p-3 rounded-xl border border-gray-200 hover:border-gold cursor-pointer transition-all bg-warmIvory/30 hover:bg-white"
            >
              <Users className="w-4 h-4 text-terracotta flex-shrink-0" />
              <div className="flex-1 truncate text-xs sm:text-sm font-medium text-charcoal">
                {guestsCount} {guestsCount === 1 ? 'Guest' : 'Guests'}, {roomsCount} Rm
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-charcoal-muted" />
            </div>

            {/* Guests Popup */}
            {guestsPopupOpen && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setGuestsPopupOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gold/30 p-4 z-40">
                  <div className="space-y-4">
                    {/* Guests count */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-charcoal">Guests (Adults/Kids)</div>
                        <div className="text-xs text-charcoal-muted">Ages 5 and above</div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <button
                          type="button"
                          onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                          className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center font-bold text-charcoal hover:bg-gray-100 disabled:opacity-40"
                          disabled={guestsCount <= 1}
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-sm font-bold text-primary">{guestsCount}</span>
                        <button
                          type="button"
                          onClick={() => setGuestsCount(Math.min(12, guestsCount + 1))}
                          className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center font-bold text-charcoal hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Rooms count */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div>
                        <div className="text-sm font-semibold text-charcoal">Rooms</div>
                        <div className="text-xs text-charcoal-muted">Book multiple rooms</div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <button
                          type="button"
                          onClick={() => setRoomsCount(Math.max(1, roomsCount - 1))}
                          className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center font-bold text-charcoal hover:bg-gray-100 disabled:opacity-40"
                          disabled={roomsCount <= 1}
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-sm font-bold text-primary">{roomsCount}</span>
                        <button
                          type="button"
                          onClick={() => setRoomsCount(Math.min(6, roomsCount + 1))}
                          className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center font-bold text-charcoal hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setGuestsPopupOpen(false)}
                      className="w-full mt-2 py-2 text-xs font-semibold text-warmIvory bg-primary rounded-xl hover:bg-primary-800 transition-colors"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Search Button */}
          <div className="lg:col-span-2 pt-2 sm:pt-0">
            <button
              type="submit"
              className="w-full h-[48px] rounded-xl font-semibold text-warmIvory bg-terracotta hover:bg-terracotta-600 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group active:scale-[0.98]"
            >
              <Search className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>Search Stays</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
