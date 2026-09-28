import React from 'react';
import { Utensils, Star, MapPin, Clock, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { foodHighlights, recommendedEateries } from '../data/food';

export default function FoodPage() {
  return (
    <div className="min-h-screen py-10 bg-warmIvory pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-700 text-xs font-semibold mb-3 border border-gold/30">
            <Utensils className="w-3.5 h-3.5 text-terracotta" />
            <span>Maharashtrian Pilgrim Cuisine</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-primary tracking-tight">
            A Taste of Akkalkot
          </h1>
          <p className="text-sm sm:text-base text-charcoal-muted mt-3 leading-relaxed">
            The culinary identity of Akkalkot is rooted in sacred simplicity: divine Mahaprasad prepared with pure cow ghee, rustic Jowar Bhakris hand-patted and baked on clay tavas, fiery pounded garlic-chili thecha, and fragrant Shenga Poli sweets.
          </p>
        </div>

        {/* ==================================================== */}
        {/* EDITORIAL SPOTLIGHT: 4 CORE DISHES / CATERGORIES */}
        {/* ==================================================== */}
        <div className="space-y-12 mb-16">
          {foodHighlights.map((item, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-3xl overflow-hidden border border-[#E7E0D2] shadow-subtle hover:shadow-card transition-all grid grid-cols-1 lg:grid-cols-12 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-6 relative aspect-[16/11] lg:aspect-auto lg:h-full ${isEven ? 'lg:order-2' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-primary/90 text-gold backdrop-blur-sm border border-gold/30">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 p-6 sm:p-10 space-y-4 ${isEven ? 'lg:order-1' : ''}`}>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600 block mb-1">
                      {item.tagline}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                      {item.title}
                    </h2>
                    <div className="text-xs text-terracotta font-devanagari font-semibold mt-1">
                      {item.marathiTitle}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {item.description}
                  </p>

                  {/* Must-Try List */}
                  <div className="pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal block mb-2">
                      Signature Flavors:
                    </span>
                    <div className="space-y-1.5">
                      {item.mustTry.map((flavor, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-charcoal-muted">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{flavor}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Local Tip & Meta */}
                  <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="text-charcoal-muted">
                      <strong>Location:</strong> {item.location}
                    </div>
                    <div className="font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg">
                      {item.pricing}
                    </div>
                  </div>

                  {item.tip && (
                    <div className="p-3 rounded-xl bg-warmIvory-300 text-[11px] text-charcoal-muted border border-gold/30">
                      💡 <strong>Pilgrim Tip:</strong> {item.tip}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================================================== */}
        {/* RECOMMENDED PURE VEGETARIAN DINING DIRECTORY */}
        {/* ==================================================== */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E7E0D2] shadow-subtle space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600 block mb-1">
              Curated Pilgrim Spots
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
              Recommended Pure Vegetarian Eateries
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
              Hygienic, tested dining options situated conveniently close to temple gates and parking lots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendedEateries.map((eatery) => (
              <div
                key={eatery.name}
                className="p-5 rounded-2xl bg-warmIvory/40 border border-gray-200 hover:border-gold transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif text-lg font-bold text-primary">
                      {eatery.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded-md bg-white border border-gold/30 text-xs font-bold text-primary flex-shrink-0">
                      {eatery.rating}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-terracotta-700 mb-2">
                    {eatery.type}
                  </div>
                  <p className="text-xs text-charcoal-muted mb-3">
                    {eatery.highlight}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200/70 flex items-center justify-between text-[11px] text-charcoal-muted">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-terracotta" />
                    <span>{eatery.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gold" />
                    <span>{eatery.timing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
