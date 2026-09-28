import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Wifi, Wind, Car, Droplet, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export default function PropertyCard({ property }) {
  const { addToast } = useToast();

  const handleWhatsAppEnquiry = (e) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Hello! I am interested in booking *${property.name}* in Akkalkot.\n` +
      `Distance: ${property.distanceFromTemple}\n` +
      `Price: ₹${property.price}/night\n` +
      `Please let me know room availability for upcoming dates.`
    );
    addToast(`Opening WhatsApp enquiry for ${property.name}...`, 'info');
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  // Helper icon for amenities
  const renderAmenityTag = (amenity) => {
    switch (amenity) {
      case 'AC':
        return (
          <span key={amenity} className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-warmIvory-300 text-charcoal-muted">
            <Wind className="w-3 h-3 text-terracotta" />
            <span>AC</span>
          </span>
        );
      case 'Wi-Fi':
        return (
          <span key={amenity} className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-warmIvory-300 text-charcoal-muted">
            <Wifi className="w-3 h-3 text-terracotta" />
            <span>Wi-Fi</span>
          </span>
        );
      case 'Parking':
        return (
          <span key={amenity} className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-warmIvory-300 text-charcoal-muted">
            <Car className="w-3 h-3 text-terracotta" />
            <span>Parking</span>
          </span>
        );
      case 'Hot Water':
        return (
          <span key={amenity} className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-warmIvory-300 text-charcoal-muted">
            <Droplet className="w-3 h-3 text-terracotta" />
            <span>Hot Water</span>
          </span>
        );
      default:
        return (
          <span key={amenity} className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-warmIvory-300 text-charcoal-muted">
            <span>{amenity}</span>
          </span>
        );
    }
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#E7E0D2] shadow-subtle hover:shadow-card card-hover-effect flex flex-col h-full transition-all duration-300">
      {/* Property Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={property.images[0]}
          alt={property.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Gradient overlay for badges readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

        {/* Badges on top */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center z-10">
          {property.availabilityBadge && (
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-primary/90 text-gold border border-gold/40 shadow-sm backdrop-blur-sm">
              {property.availabilityBadge}
            </span>
          )}
          {property.popularChoice && (
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-terracotta/95 text-white shadow-sm backdrop-blur-sm">
              Devotee Choice
            </span>
          )}
        </div>

        {/* Rating pill bottom-right */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md shadow-md text-xs font-bold text-primary">
          <Star className="w-3.5 h-3.5 fill-gold text-gold" />
          <span>{property.rating.toFixed(1)}</span>
          <span className="text-[10px] text-charcoal-muted font-normal">({property.reviewsCount})</span>
        </div>

        {/* Category tag bottom-left */}
        <div className="absolute bottom-3 left-3 text-[11px] font-medium text-white/95 px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm">
          {property.category}
        </div>
      </div>

      {/* Property Details Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title and Distance */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <Link
              to={`/stay/${property.slug}`}
              className="font-serif text-lg font-bold text-primary group-hover:text-terracotta transition-colors line-clamp-1"
            >
              {property.name}
            </Link>
          </div>

          <div className="flex items-center gap-1 text-xs text-charcoal-muted mb-3 font-medium">
            <MapPin className="w-3.5 h-3.5 text-terracotta flex-shrink-0" />
            <span className="text-terracotta-700 font-semibold">{property.distanceFromTemple}</span>
            <span className="text-gray-300">•</span>
            <span className="truncate">Akkalkot</span>
          </div>

          <p className="text-xs text-charcoal-muted line-clamp-2 leading-relaxed mb-4">
            {property.tagline || property.description}
          </p>

          {/* Amenities Strip */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {property.amenities.slice(0, 4).map((amenity) => renderAmenityTag(amenity))}
            {property.amenities.length > 4 && (
              <span className="text-[11px] px-1.5 py-0.5 text-charcoal-muted font-medium">
                +{property.amenities.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Pricing and Action CTAs */}
        <div className="pt-3 border-t border-gray-100 mt-auto">
          <div className="flex items-end justify-between mb-3">
            <div>
              <span className="text-[11px] text-charcoal-muted block">Starting from</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-bold text-primary font-serif">₹{property.price}</span>
                <span className="text-xs text-charcoal-muted line-through">₹{property.originalPrice}</span>
                <span className="text-[11px] text-charcoal-muted">/ night</span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] text-emerald-700 font-semibold inline-flex items-center gap-0.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>Zero Booking Fee</span>
              </span>
            </div>
          </div>

          {/* Buttons: View Details & WhatsApp */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              to={`/stay/${property.slug}`}
              className="w-full py-2.5 px-3 rounded-xl text-center text-xs font-semibold text-primary bg-warmIvory-300 hover:bg-gold/20 hover:text-primary transition-all flex items-center justify-center gap-1 border border-charcoal/10"
            >
              <span>View Details</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={handleWhatsAppEnquiry}
              className="w-full py-2.5 px-3 rounded-xl text-center text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
              title="Chat on WhatsApp to book or enquire"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
