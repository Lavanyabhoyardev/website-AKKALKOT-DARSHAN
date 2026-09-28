import React, { useState } from 'react';
import { MapPin, Clock, Compass, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { placesToVisit } from '../data/places';

export default function PlacesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Sights' },
    { id: 'Sacred Pilgrimage', label: 'Sacred Pilgrimage' },
    { id: 'Heritage & History', label: 'Heritage & History' },
    { id: 'Spiritual Sanctuary', label: 'Vedic Ashrams' },
    { id: 'Nearby Sacred Excursion', label: 'Nearby Excursions' },
  ];

  const filteredPlaces =
    selectedCategory === 'all'
      ? placesToVisit
      : placesToVisit.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-10 bg-warmIvory pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-700 text-xs font-semibold mb-3 border border-gold/30">
            <Compass className="w-3.5 h-3.5 text-terracotta" />
            <span>Editorial Travel Guide</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-primary tracking-tight">
            Discover Akkalkot
          </h1>
          <p className="text-sm sm:text-base text-charcoal-muted mt-3 leading-relaxed">
            Beyond the sacred Vatavruksha, Akkalkot offers deeply revered Samadhi mathas, one of the world's largest collections of vintage royal armory, and tranquil Vedic fire ashrams.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-primary text-gold shadow-sm font-bold border border-gold/40'
                  : 'bg-white text-charcoal hover:bg-gray-100 border border-[#E7E0D2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlaces.map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E7E0D2] shadow-subtle hover:shadow-card card-hover-effect flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
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
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    <span>{place.distance}</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-1">
                      {place.name}
                    </h3>
                    <div className="text-xs text-terracotta font-devanagari font-semibold">
                      {place.marathiTitle}
                    </div>
                  </div>

                  <p className="text-xs text-terracotta-700 font-medium">
                    {place.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {place.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 border-t border-gray-100 space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal">
                      Highlights:
                    </span>
                    <ul className="space-y-1">
                      {place.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-charcoal-muted flex items-start gap-1.5">
                          <span className="text-gold font-bold">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between">
                <div className="text-xs text-charcoal-muted">
                  <div className="font-medium">
                    Visit Time: <strong className="text-primary">{place.approxVisitTime}</strong>
                  </div>
                  <div className="text-[11px] text-charcoal-muted/80">{place.timings}</div>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${place.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-primary bg-warmIvory-300 hover:bg-gold/20 hover:text-primary transition-colors flex items-center gap-1.5 border border-charcoal/10"
                >
                  <span>View on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-terracotta" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
