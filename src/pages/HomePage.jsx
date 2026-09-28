import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Compass,
  Phone,
  Utensils,
  Car,
  ChevronDown,
  Star,
  MapPin,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import SearchCard from '../components/SearchCard';
import CategoryStrip from '../components/CategoryStrip';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';
import { templeInfo } from '../data/templeServices';
import { placesToVisit } from '../data/places';
import { foodHighlights } from '../data/food';
import { transportOptions } from '../data/transport';

export default function HomePage() {
  // Quick filters for Stay section
  const [selectedDistance, setSelectedDistance] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedAmenity, setSelectedAmenity] = useState('all');

  // FAQ open state
  const [openFaq, setOpenFaq] = useState(0);

  // Filtered properties for preview
  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      // Distance filter
      if (selectedDistance === 'near' && p.distanceNumericMeters > 500) return false;
      if (selectedDistance === '1km' && p.distanceNumericMeters > 1000) return false;
      if (selectedDistance === '3km' && p.distanceNumericMeters > 3000) return false;

      // Price filter
      if (selectedPriceRange === '500-1000' && (p.price < 500 || p.price > 1000)) return false;
      if (selectedPriceRange === '1000-2000' && (p.price < 1000 || p.price > 2000)) return false;
      if (selectedPriceRange === '2000+' && p.price < 2000) return false;

      // Amenity filter
      if (selectedAmenity !== 'all' && !p.amenities.includes(selectedAmenity)) return false;

      return true;
    });
  }, [selectedDistance, selectedPriceRange, selectedAmenity]);

  const faqs = [
    {
      q: 'What are the main Darshan timings at Vatavruksha Mandir?',
      a: 'The temple sanctum opens at 5:00 AM with Kakad Aarti and closes at 10:30 PM with Shej Aarti. Mukh Darshan runs continuously throughout the day, while Charan Paduka Darshan is available with brief pauses during Aarti and Naivedya offerings.',
    },
    {
      q: 'How far is Akkalkot from Solapur Railway Junction?',
      a: 'Akkalkot is approximately 38 km from Solapur Junction. Direct MSRTC red buses run every 15–20 minutes (journey 50 mins, fare ~₹50), and private prepaid cabs take about 40 minutes (approx ₹900–₹1,100).',
    },
    {
      q: 'Is free Mahaprasad provided to pilgrims in Akkalkot?',
      a: 'Yes, Shri Swami Samarth Annachhatra Mandal serves unlimited, hot, pure satvik Mahaprasad twice daily: Lunch from 11:30 AM to 3:00 PM and Dinner from 7:30 PM to 10:00 PM for all devotees.',
    },
    {
      q: 'How does booking work on this website?',
      a: 'You can explore verified stays, inspect verified room photos, filter by price/amenity, and simply tap "WhatsApp" to send a pre-filled booking inquiry directly to the hotel desk with your check-in dates and guest count.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* ==================================================== */}
      {/* 1. HERO SECTION */}
      {/* ==================================================== */}
      <section className="relative w-full min-h-[680px] md:h-[720px] lg:h-[740px] flex flex-col justify-between overflow-hidden bg-[#101C35]">
        {/* Background Image: The uploaded authentic Akkalkot temple photograph */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero-temple.png"
            alt="Akkalkot Shri Swami Samarth Temple"
            className="w-full h-full object-cover object-center md:object-[center_right] select-none"
          />
          {/* Subtle dark navy gradient overlay from left and bottom:
              Keeps white text 100% readable while the temple spire and golden sun on the right remain vividly visible and bright! */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                linear-gradient(90deg, rgba(10, 20, 40, 0.86) 0%, rgba(10, 20, 40, 0.58) 42%, rgba(10, 20, 40, 0.20) 75%, rgba(10, 20, 40, 0.06) 100%),
                linear-gradient(0deg, rgba(10, 20, 40, 0.80) 0%, rgba(10, 20, 40, 0.22) 35%, transparent 65%)
              `,
            }}
          />
        </div>

        {/* Hero Content (Positioned on the LEFT side) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-12 md:pt-16 pb-4">
          <div className="max-w-2xl text-left space-y-3 sm:space-y-4">
            {/* Subtle Devanagari badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-semibold backdrop-blur-md">
              <span className="font-devanagari text-xs sm:text-sm">॥ श्री स्वामी समर्थ जय जय स्वामी समर्थ ॥</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="uppercase tracking-widest text-[10px]">Akkalkot, MH</span>
            </div>

            <h1 className="font-serif text-[38px] sm:text-[50px] md:text-[58px] lg:text-[70px] xl:text-[76px] font-bold text-white tracking-tight leading-[1.03] drop-shadow-md">
              AKKALKOT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#F7D89C] to-warmIvory">
                DARSHAN
              </span>
            </h1>

            <div className="font-serif text-lg sm:text-2xl font-semibold text-gold-400 tracking-wide">
              Stay & Services
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-xl font-normal leading-relaxed drop-shadow-sm">
              “Everything you need for your Akkalkot visit — stay, darshan, places, food and local services.”
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/stay"
                className="px-6 sm:px-7 py-3 rounded-xl font-semibold text-warmIvory bg-terracotta hover:bg-terracotta-600 shadow-elevated transition-all flex items-center gap-2 group border border-gold/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Stays</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/places"
                className="px-6 sm:px-7 py-3 rounded-xl font-semibold text-white bg-black/35 hover:bg-black/55 backdrop-blur-md transition-all flex items-center gap-2 border border-white/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Compass className="w-4 h-4 text-gold" />
                <span>Explore Akkalkot</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Search Card (Positioned at bottom of Hero) */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
          <SearchCard />
        </div>
      </section>

      {/* ==================================================== */}
      {/* 2. QUICK CATEGORY STRIP */}
      {/* ==================================================== */}
      <CategoryStrip />

      {/* ==================================================== */}
      {/* 3. STAY IN AKKALKOT (DISCOVERY SECTION) */}
      {/* ==================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-charcoal/10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-terracotta-600 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Pilgrim Accommodations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
              Stay in Akkalkot
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted mt-1.5">
              Comfortable stays close to where your journey begins.
            </p>
          </div>

          <Link
            to="/stay"
            className="inline-flex items-center gap-2 text-sm font-bold text-terracotta hover:text-terracotta-700 transition-colors"
          >
            <span>View All ({properties.length}) Stays</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-subtle border border-[#E7E0D2] mb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-charcoal-muted">
            <span className="uppercase tracking-wider">Quick Filters:</span>
            <span className="text-xs text-primary font-bold">
              Showing {filteredProperties.length} verified stays
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Price Filter */}
            <div>
              <label className="block text-xs font-semibold text-charcoal mb-1.5">Price Per Night</label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { label: 'All', value: 'all' },
                  { label: '₹500–₹1,000', value: '500-1000' },
                  { label: '₹1,000–₹2,000', value: '1000-2000' },
                  { label: '₹2,000+', value: '2000+' },
                ].map((item) => (
                  <button
                    key={item.value}
                    onClick={() => setSelectedPriceRange(item.value)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      selectedPriceRange === item.value
                        ? 'bg-primary text-gold font-bold shadow-sm'
                        : 'bg-warmIvory text-charcoal hover:bg-gray-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Distance Filter */}
            <div>
              <label className="block text-xs font-semibold text-charcoal mb-1.5">Distance to Temple</label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { label: 'All', value: 'all' },
                  { label: 'Near Temple (<500m)', value: 'near' },
                  { label: 'Within 1 km', value: '1km' },
                  { label: 'Within 3 km', value: '3km' },
                ].map((item) => (
                  <button
                    key={item.value}
                    onClick={() => setSelectedDistance(item.value)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      selectedDistance === item.value
                        ? 'bg-primary text-gold font-bold shadow-sm'
                        : 'bg-warmIvory text-charcoal hover:bg-gray-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Amenities Filter */}
            <div>
              <label className="block text-xs font-semibold text-charcoal mb-1.5">Amenities</label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { label: 'All', value: 'all' },
                  { label: 'AC', value: 'AC' },
                  { label: 'Parking', value: 'Parking' },
                  { label: 'Wi-Fi', value: 'Wi-Fi' },
                  { label: 'Hot Water', value: 'Hot Water' },
                ].map((item) => (
                  <button
                    key={item.value}
                    onClick={() => setSelectedAmenity(item.value)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      selectedAmenity === item.value
                        ? 'bg-primary text-gold font-bold shadow-sm'
                        : 'bg-warmIvory text-charcoal hover:bg-gray-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProperties.slice(0, 6).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-300 p-8">
            <p className="text-charcoal-muted text-base mb-3">No properties match your exact filters.</p>
            <button
              onClick={() => {
                setSelectedDistance('all');
                setSelectedPriceRange('all');
                setSelectedAmenity('all');
              }}
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-primary text-gold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Explorer CTA */}
        <div className="text-center mt-12">
          <Link
            to="/stay"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-primary bg-white hover:bg-warmIvory shadow-md border border-gold/40 transition-all hover:scale-105"
          >
            <span>Explore All Verified Stays in Akkalkot</span>
            <ArrowRight className="w-4 h-4 text-terracotta" />
          </Link>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 4. TEMPLE SERVICES SPOTLIGHT & TIMELINE PREVIEW */}
      {/* ==================================================== */}
      <section className="py-20 bg-primary text-warmIvory bg-dark-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-2 font-mono">
              Darshan Guide & Daily Routine
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Shri Swami Samarth Mandir
            </h2>
            <p className="text-warmIvory/80 text-sm sm:text-base leading-relaxed">
              Plan your prayer schedule around the historic daily rituals at Vatavruksha Devasthan. Early morning Kakad Aarti at 5:00 AM offers the most serene darshan experience.
            </p>
          </div>

          {/* Aarti Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {templeInfo.aartiTimeline.map((item, idx) => (
              <div
                key={item.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-gold/50 transition-colors backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-gold font-mono mb-2">
                    <span>Aarti 0{idx + 1}</span>
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-white mb-1">
                    {item.name}
                  </h4>
                  <div className="text-xs text-terracotta-200 font-devanagari mb-2">
                    {item.marathiName}
                  </div>
                  <div className="text-xs text-gold/90 font-semibold mb-3">
                    {item.time}
                  </div>
                  <p className="text-xs text-warmIvory/70 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-warmIvory/60">
                  Arrive by: <span className="text-white font-medium">{item.recommendedArrivalTime}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mahaprasad & Puja Info Strip */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white/5 border border-gold/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold mb-2">
                <Utensils className="w-4 h-4" />
                <span>Holy Annachhatra Mahaprasad</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Daily Free Community Feast
              </h3>
              <p className="text-sm text-warmIvory/80 leading-relaxed mb-4">
                Unlimited satvik Maharashtrian meals served with immense reverence. Lunch from 11:30 AM to 3:00 PM and Dinner from 7:30 PM to 10:00 PM for all devotees.
              </p>
              <Link
                to="/temple-services#annachhatra"
                className="text-xs font-semibold text-gold hover:underline inline-flex items-center gap-1"
              >
                <span>Read Annachhatra details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="lg:border-l lg:border-white/10 lg:pl-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-terracotta-200 mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Locally Available Puja Services</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Abhishek, Chadhava & Sankalpa
              </h3>
              <p className="text-sm text-warmIvory/80 leading-relaxed mb-4">
                Guidance on Panchamrut Abhishek, Laghu Rudra, and traditional saffron vastra chadhava offered through independent local priests and ashrams.
              </p>
              <Link
                to="/temple-services#puja-services"
                className="text-xs font-semibold text-terracotta-200 hover:underline inline-flex items-center gap-1"
              >
                <span>Explore Puja Information</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 5. DISCOVER AKKALKOT (EDITORIAL TRAVEL GUIDE) */}
      {/* ==================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-charcoal/10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-terracotta-600 mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Cultural & Spiritual Heritage</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
              Discover Akkalkot
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted mt-1.5">
              Sacred shrines, historic royal armories, and serene Vedic ashrams.
            </p>
          </div>

          <Link
            to="/places"
            className="inline-flex items-center gap-2 text-sm font-bold text-terracotta hover:text-terracotta-700 transition-colors"
          >
            <span>View All Places</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {placesToVisit.slice(0, 3).map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E7E0D2] shadow-subtle hover:shadow-card card-hover-effect flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-primary/90 text-gold backdrop-blur-sm border border-gold/30">
                    {place.category}
                  </div>
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg text-xs font-medium text-white bg-black/50 backdrop-blur-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gold" />
                    <span>{place.distance}</span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-primary mb-1">
                    {place.name}
                  </h3>
                  <div className="text-xs text-terracotta font-devanagari mb-2.5">
                    {place.marathiTitle}
                  </div>
                  <p className="text-xs text-charcoal-muted line-clamp-3 leading-relaxed mb-4">
                    {place.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-charcoal-muted font-medium">
                  Visit time: <strong className="text-primary">{place.approxVisitTime}</strong>
                </span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${place.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-terracotta hover:underline inline-flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================== */}
      {/* 6. A TASTE OF AKKALKOT (FOOD GUIDE SPOTLIGHT) */}
      {/* ==================================================== */}
      <section className="py-20 bg-warmIvory-300 border-y border-[#E7E0D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-charcoal/10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-terracotta-600 mb-2">
                <Utensils className="w-3.5 h-3.5" />
                <span>Culinary Heritage</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
                A Taste of Akkalkot
              </h2>
              <p className="text-sm sm:text-base text-charcoal-muted mt-1.5">
                From Mahaprasad to wood-fired Jowar Bhakri and peanut chutney.
              </p>
            </div>

            <Link
              to="/food"
              className="inline-flex items-center gap-2 text-sm font-bold text-terracotta hover:text-terracotta-700 transition-colors"
            >
              <span>Explore Food Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foodHighlights.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E7E0D2] shadow-subtle hover:shadow-card card-hover-effect flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 text-white backdrop-blur-sm">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-serif text-base font-bold text-primary mb-1">
                      {item.title}
                    </h3>
                    <div className="text-[11px] text-terracotta font-devanagari mb-2">
                      {item.marathiTitle}
                    </div>
                    <p className="text-xs text-charcoal-muted line-clamp-2 leading-relaxed mb-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <div className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg">
                    {item.pricing}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 7. GETTING AROUND AKKALKOT (TRANSPORT) */}
      {/* ==================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-charcoal/10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-terracotta-600 mb-2">
              <Car className="w-3.5 h-3.5" />
              <span>Transit & Pilgrimage Routes</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
              Getting Around Akkalkot
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted mt-1.5">
              Direct highway connectivity from Solapur, local autos, and reliable day cabs.
            </p>
          </div>

          <Link
            to="/transport"
            className="inline-flex items-center gap-2 text-sm font-bold text-terracotta hover:text-terracotta-700 transition-colors"
          >
            <span>Full Transit Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {transportOptions.map((opt) => (
            <div
              key={opt.id}
              className="bg-white rounded-2xl p-6 border border-[#E7E0D2] shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-terracotta-50 text-terracotta flex items-center justify-center mb-4 border border-terracotta/20">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-primary mb-1">
                  {opt.mode}
                </h3>
                <div className="text-xs text-gold-600 font-semibold mb-3">
                  {opt.typicalFare}
                </div>
                <p className="text-xs text-charcoal-muted leading-relaxed mb-4">
                  {opt.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 text-[11px] text-charcoal-muted">
                {opt.availability}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================== */}
      {/* 8. ABOUT / WHY THIS PLATFORM */}
      {/* ==================================================== */}
      <section className="py-20 bg-primary text-warmIvory bg-dark-pattern border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-2 font-mono">
              Designed For Devotees & Travelers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything You Need for Akkalkot
            </h2>
            <p className="text-warmIvory/80 text-sm sm:text-base leading-relaxed">
              We eliminate the uncertainty of finding clean family hotels, understanding temple schedules, and negotiating local transport during your holy visit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-gold/15 text-gold flex items-center justify-center mx-auto mb-4 border border-gold/40">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                Stay Nearby
              </h3>
              <p className="text-xs text-warmIvory/70 leading-relaxed">
                Hand-inspected hotels, guest houses and Bhakt Nivas situated within 250m to 1km from Vatavruksha Mandir.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-gold/15 text-gold flex items-center justify-center mx-auto mb-4 border border-gold/40">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                Darshan Information
              </h3>
              <p className="text-xs text-warmIvory/70 leading-relaxed">
                Precise daily aarti schedules, queue advice for seniors, Annachhatra food timings, and holy matha addresses.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-gold/15 text-gold flex items-center justify-center mx-auto mb-4 border border-gold/40">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                Local Discovery
              </h3>
              <p className="text-xs text-warmIvory/70 leading-relaxed">
                Curated insights into the historic Royal Armory Museum, Shivpuri Agnihotra ashram, and Solapur Siddheshwar temple.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-gold/15 text-gold flex items-center justify-center mx-auto mb-4 border border-gold/40">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                Easy WhatsApp Enquiry
              </h3>
              <p className="text-xs text-warmIvory/70 leading-relaxed">
                Direct one-click connection to hotel desks on WhatsApp with pre-drafted check-in details. No hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 9. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      {/* ==================================================== */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-terracotta mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Devotee Information</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#E7E0D2] overflow-hidden shadow-subtle transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-serif text-base sm:text-lg font-bold text-primary">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-terracotta flex-shrink-0 transition-transform duration-300 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openFaq === index && (
                <div className="px-5 sm:px-6 pb-6 text-sm text-charcoal-muted leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
