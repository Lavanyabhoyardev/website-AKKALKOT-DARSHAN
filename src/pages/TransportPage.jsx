import React from 'react';
import { Car, Bus, Train, Compass, MapPin, Phone, Clock, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { transportOptions, popularRoutes } from '../data/transport';
import { useToast } from '../context/ToastContext';

export default function TransportPage() {
  const { addToast } = useToast();

  const handleCabEnquiry = (routeTitle) => {
    const msg = encodeURIComponent(
      `Hello! I need assistance with local transport / cab booking in Akkalkot for the route: *${routeTitle}*.\nPlease provide driver contact and fare confirmation.`
    );
    addToast('Opening WhatsApp for transport assistance...', 'info');
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen py-10 bg-warmIvory pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-700 text-xs font-semibold mb-3 border border-gold/30">
            <Car className="w-3.5 h-3.5 text-terracotta" />
            <span>Transit & Navigation</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-primary tracking-tight">
            Getting Around Akkalkot
          </h1>
          <p className="text-sm sm:text-base text-charcoal-muted mt-3 leading-relaxed">
            Convenient transport options connecting Solapur Junction, Akkalkot town shrines, and nearby pilgrimage centers like Gangapur and Tuljapur.
          </p>
        </div>

        {/* ==================================================== */}
        {/* TRANSPORT MODES (4 DETAILED CARDS) */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {transportOptions.map((opt) => (
            <div
              key={opt.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E0D2] shadow-subtle hover:shadow-card transition-all flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary text-gold flex items-center justify-center border border-gold/40">
                    <Car className="w-6 h-6 text-terracotta" />
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] uppercase tracking-wider text-charcoal-muted block font-semibold">
                      Typical Tariff
                    </span>
                    <span className="text-sm font-bold text-primary font-mono">
                      {opt.typicalFare}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-2">
                  {opt.mode}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-4">
                  {opt.description}
                </p>

                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal block">
                    Key Travel Notes:
                  </span>
                  <div className="space-y-1.5">
                    {opt.keyPoints.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-charcoal-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-charcoal-muted">
                  Availability: <strong>{opt.availability}</strong>
                </span>
                <button
                  onClick={() => handleCabEnquiry(opt.mode)}
                  className="px-3.5 py-1.5 rounded-xl font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Enquire Fare</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ==================================================== */}
        {/* ROUTE VISUALIZATION & DISTANCE MATRIX */}
        {/* ==================================================== */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E7E0D2] shadow-subtle space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600 block mb-1">
              Pilgrim Route Matrix
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
              Popular Routes & Drive Times
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
              Estimated travel times, road conditions, and transfer options for Maharashtra and Karnataka pilgrims.
            </p>
          </div>

          <div className="space-y-4">
            {popularRoutes.map((route, rIdx) => (
              <div
                key={rIdx}
                className="p-5 rounded-2xl bg-warmIvory/40 border border-gray-200 hover:border-gold transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-primary font-serif">
                    <span>{route.from}</span>
                    <ArrowRight className="w-4 h-4 text-terracotta" />
                    <span>{route.to}</span>
                  </div>
                  <div className="text-xs text-charcoal-muted">
                    <span>Transit Options: <strong>{route.options}</strong></span>
                  </div>
                  <div className="text-[11px] text-emerald-700">
                    Road: {route.condition}
                  </div>
                </div>

                <div className="md:text-right flex md:flex-col justify-between items-center md:items-end border-t md:border-t-0 pt-3 md:pt-0">
                  <div className="font-mono text-base font-bold text-primary">
                    {route.distance}
                  </div>
                  <div className="text-xs text-terracotta font-semibold">
                    Approx {route.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
