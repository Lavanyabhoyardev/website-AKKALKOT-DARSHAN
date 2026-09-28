import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Star,
  MapPin,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Calendar,
  Users,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Clock,
  Car,
  Wifi,
  Wind,
  Droplet,
  Building,
  Check,
  Share2,
  Heart
} from 'lucide-react';
import { properties } from '../data/properties';
import ImageLightbox from '../components/ImageLightbox';
import { useToast } from '../context/ToastContext';

export default function PropertyDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToast } = useToast();

  const property = properties.find((p) => p.slug === slug) || properties[0];

  // Gallery active index & Lightbox
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Selected room type
  const [selectedRoomId, setSelectedRoomId] = useState(
    property.roomTypes ? property.roomTypes[0].id : 'standard'
  );

  // Booking Form State
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(tomorrow);
  dayAfter.setDate(dayAfter.getDate() + 1);
  const formatDate = (d) => d.toISOString().split('T')[0];

  const [userName, setUserName] = useState('');
  const [userMobile, setUserMobile] = useState('');
  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(dayAfter));
  const [guestsCount, setGuestsCount] = useState(2);
  const [specialRequest, setSpecialRequest] = useState('');

  // Form Validation & WhatsApp Submission
  const handleBookingSubmit = (e) => {
    e.preventDefault();

    if (!userName.trim()) {
      addToast('Please enter your full name', 'error');
      return;
    }

    const cleanMobile = userMobile.replace(/\D/g, '');
    if (cleanMobile.length < 10) {
      addToast('Please enter a valid 10-digit mobile number', 'error');
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      addToast('Check-out date must be after check-in date', 'error');
      return;
    }

    const chosenRoom = property.roomTypes?.find((r) => r.id === selectedRoomId);
    const roomName = chosenRoom ? chosenRoom.name : 'Standard Room';
    const roomPrice = chosenRoom ? chosenRoom.price : property.price;

    const message = encodeURIComponent(
      `*Akkalkot Darshan — Room Booking Enquiry*\n\n` +
      `Property: *${property.name}*\n` +
      `Room Selected: ${roomName} (₹${roomPrice}/night)\n` +
      `Guest Name: ${userName}\n` +
      `Mobile: ${userMobile}\n` +
      `Check-in: ${checkIn}\n` +
      `Check-out: ${checkOut}\n` +
      `Guests: ${guestsCount}\n` +
      (specialRequest ? `Special Request: ${specialRequest}\n` : '') +
      `\nPlease confirm room availability and payment instructions.`
    );

    addToast(`Preparing WhatsApp enquiry for ${property.name}...`, 'success');
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${property.name} - Akkalkot Darshan`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      addToast('Property link copied to clipboard!', 'success');
    }
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="min-h-screen py-8 bg-warmIvory">
      {/* Lightbox Modal */}
      <ImageLightbox
        images={property.images}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
        onSelect={(index) => setActiveImageIndex(index)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-5 text-xs text-charcoal-muted">
          <div className="flex items-center gap-1.5 truncate">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/stay" className="hover:text-primary transition-colors">Stays</Link>
            <span>/</span>
            <span className="text-terracotta font-medium truncate">{property.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:border-gold text-charcoal text-xs font-semibold shadow-subtle transition-all"
            >
              <Share2 className="w-3.5 h-3.5 text-terracotta" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Title & Key Specs Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-4 border-b border-charcoal/10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary text-gold">
                {property.category}
              </span>
              {property.availabilityBadge && (
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-terracotta-50 text-terracotta-700 border border-terracotta/30">
                  {property.availabilityBadge}
                </span>
              )}
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-primary">
              {property.name}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-charcoal-muted mt-2 font-medium">
              <div className="flex items-center gap-1 text-primary font-bold">
                <Star className="w-4 h-4 fill-gold text-gold" />
                <span>{property.rating.toFixed(1)}</span>
                <span className="font-normal text-charcoal-muted">({property.reviewsCount} pilgrim reviews)</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1 text-terracotta-700 font-semibold">
                <MapPin className="w-4 h-4 text-terracotta flex-shrink-0" />
                <span>{property.distanceFromTemple}</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span className="truncate">{property.address}</span>
            </div>
          </div>

          {/* Price Tag in header */}
          <div className="text-left md:text-right">
            <span className="text-xs text-charcoal-muted block">Starting at</span>
            <div className="flex items-baseline md:justify-end gap-2">
              <span className="font-serif text-3xl font-bold text-primary">₹{property.price}</span>
              <span className="text-sm text-charcoal-muted line-through">₹{property.originalPrice}</span>
              <span className="text-xs text-charcoal-muted">/ night</span>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* IMAGE GALLERY (8-10 IMAGES WITH THUMBNAIL & LIGHTBOX) */}
        {/* ==================================================== */}
        <div className="mb-10">
          {/* Main Featured Image with controls */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-card border border-[#E7E0D2] bg-gray-900 group">
            <img
              src={property.images[activeImageIndex]}
              alt={`${property.name} view ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500 select-none cursor-pointer"
              onClick={() => setLightboxOpen(true)}
            />

            {/* Gradient shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Image counter indicator */}
            <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-black/60 text-white text-xs font-medium backdrop-blur-md flex items-center gap-1.5">
              <span>Photo</span>
              <strong className="text-gold">{activeImageIndex + 1}</strong>
              <span>of {property.images.length}</span>
            </div>

            {/* Fullscreen zoom button */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-xl bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all border border-white/20"
              aria-label="Open Fullscreen Lightbox"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Arrow navigators */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-primary backdrop-blur-md shadow-md transition-all"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-primary backdrop-blur-md shadow-md transition-all"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Thumbnails strip */}
          <div className="mt-3 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {property.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative flex-shrink-0 w-20 sm:w-24 aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all ${
                  activeImageIndex === idx
                    ? 'border-terracotta scale-105 shadow-md'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* ==================================================== */}
        {/* MAIN BODY: 2-COLUMN LAYOUT (DETAILS + BOOKING CARD) */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Description, Amenities, Rooms, Location */}
          <div className="lg:col-span-8 space-y-10">
            {/* Description & Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E0D2] shadow-subtle space-y-6">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                About {property.name}
              </h2>
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-normal">
                {property.description}
              </p>

              {/* Key Highlights Bullets */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal">
                  Devotee Key Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.overviewPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal-muted">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timings & House rules */}
              <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-6 text-xs text-charcoal-muted">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-terracotta" />
                  <span>Check-in: <strong>{property.checkInTime}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-terracotta" />
                  <span>Check-out: <strong>{property.checkOutTime}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Aadhaar / Govt ID Required</span>
                </div>
              </div>
            </div>

            {/* Facilities / Amenities Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E0D2] shadow-subtle space-y-6">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                Facilities & Amenities
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {property.amenities.map((item) => (
                  <div
                    key={item}
                    className="p-3.5 rounded-2xl bg-warmIvory/60 border border-gold/20 flex items-center gap-3 text-xs sm:text-sm font-medium text-charcoal"
                  >
                    <Check className="w-4 h-4 text-terracotta flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Room Types */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E0D2] shadow-subtle space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                    Rooms Available
                  </h2>
                  <p className="text-xs text-charcoal-muted mt-1">
                    Select your preferred room to auto-fill the WhatsApp booking inquiry.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {property.roomTypes &&
                  property.roomTypes.map((room) => {
                    const isSelected = selectedRoomId === room.id;
                    return (
                      <div
                        key={room.id}
                        onClick={() => setSelectedRoomId(room.id)}
                        className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                          isSelected
                            ? 'border-terracotta bg-terracotta-50/50 shadow-sm'
                            : 'border-gray-200 hover:border-gold bg-warmIvory/20'
                        }`}
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <h3 className="font-serif text-base font-bold text-primary">
                              {room.name}
                            </h3>
                            {isSelected && (
                              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-terracotta text-white">
                                Selected
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-3 text-xs text-charcoal-muted">
                            <span>Bed: {room.bed}</span>
                            <span>•</span>
                            <span>Capacity: {room.capacity}</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {room.features.map((feat) => (
                              <span
                                key={feat}
                                className="text-[11px] px-2 py-0.5 rounded-md bg-white border border-gray-200 text-charcoal-muted"
                              >
                                {feat}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="text-right sm:border-l sm:border-gray-200 sm:pl-6 flex sm:flex-col items-center sm:items-end justify-between">
                          <div>
                            <span className="text-xl font-bold text-primary font-serif">
                              ₹{room.price}
                            </span>
                            <span className="text-xs text-charcoal-muted block">/ night</span>
                          </div>
                          <button
                            type="button"
                            className={`mt-2 text-xs font-semibold px-4 py-1.5 rounded-xl transition-colors ${
                              isSelected
                                ? 'bg-terracotta text-white'
                                : 'bg-primary text-gold hover:bg-primary-800'
                            }`}
                          >
                            {isSelected ? 'Selected' : 'Select Room'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Google Maps-style Location Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E0D2] shadow-subtle space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-primary">
                    Location & Nearby Landmarks
                  </h2>
                  <p className="text-xs text-charcoal-muted mt-1">{property.address}</p>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    property.name + ' Akkalkot'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-terracotta hover:underline inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <MapPin className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Styled Map Graphic Canvas */}
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-warmIvory-300 border border-gold/30 p-6 flex flex-col justify-center items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-gold flex items-center justify-center shadow-lg border border-gold/40 mb-3 animate-bounce">
                  <MapPin className="w-6 h-6 text-terracotta" />
                </div>
                <h4 className="font-serif text-base font-bold text-primary">{property.name}</h4>
                <p className="text-xs text-charcoal-muted max-w-sm mt-1">
                  Walking distance to Shri Swami Samarth Vatavruksha Mandir and Mahaprasad Annachhatra
                </p>
                <div className="mt-3 px-3 py-1 rounded-full bg-white text-xs font-semibold text-terracotta border border-terracotta/30">
                  {property.distanceFromTemple}
                </div>
              </div>

              {/* Proximity List */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal">
                  Walking & Driving Distances
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.nearbyLandmarks &&
                    property.nearbyLandmarks.map((lm, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-warmIvory/40 border border-gray-200 flex items-center justify-between text-xs"
                      >
                        <span className="font-medium text-charcoal">{lm.name}</span>
                        <span className="text-terracotta font-bold ml-2">{lm.distance}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Enquiry Card (Sticky) */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-gold/40 shadow-elevated space-y-6">
              <div className="pb-4 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-charcoal-muted block">Direct Devotee Enquiry</span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="font-serif text-2xl font-bold text-primary">
                      ₹{property.roomTypes?.find((r) => r.id === selectedRoomId)?.price || property.price}
                    </span>
                    <span className="text-xs text-charcoal-muted">/ night</span>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Instant WhatsApp Connect
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Joshi"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-gold bg-warmIvory/30 focus:bg-white transition-all text-charcoal"
                  />
                </div>

                {/* Mobile Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                    Mobile (WhatsApp) *
                  </label>
                  <div className="flex gap-2">
                    <span className="px-3 py-2.5 rounded-xl bg-gray-100 text-xs font-semibold text-charcoal flex items-center">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="9876543210"
                      maxLength={10}
                      value={userMobile}
                      onChange={(e) => setUserMobile(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-gold bg-warmIvory/30 focus:bg-white transition-all text-charcoal"
                    />
                  </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                      Check-in
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-gold bg-warmIvory/30 focus:bg-white text-charcoal"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                      Check-out
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      min={checkIn}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-gold bg-warmIvory/30 focus:bg-white text-charcoal"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(Number(e.target.value))}
                    className="w-full px-3 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-gold bg-warmIvory/30 focus:bg-white text-charcoal cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Special Request */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                    Note / Special Request (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ground floor for elderly parent"
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-gold bg-warmIvory/30 focus:bg-white transition-all text-charcoal"
                  />
                </div>

                {/* Submit WhatsApp Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Book on WhatsApp</span>
                </button>
              </form>

              {/* Guarantees */}
              <div className="pt-4 border-t border-gray-100 space-y-2 text-xs text-charcoal-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Zero commission or booking surcharge</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Direct phone confirmation with hotel desk</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Early morning Aarti check-in assistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
