import React, { useState } from 'react';
import {
  Clock,
  Sparkles,
  MapPin,
  Car,
  ShieldAlert,
  HelpCircle,
  Phone,
  Droplet,
  HeartHandshake,
  CheckCircle2,
  Calendar,
  Info,
  Gift
} from 'lucide-react';
import { templeInfo } from '../data/templeServices';
import { useToast } from '../context/ToastContext';

export default function TempleServicesPage() {
  const { addToast } = useToast();
  const [activeTab, setActiveTab] = useState('timeline');

  const handlePujaEnquiry = (pujaName) => {
    const msg = encodeURIComponent(
      `Hello! I would like informational guidance regarding locally available *${pujaName}* and priest availability for my upcoming visit to Akkalkot.`
    );
    addToast(`Connecting to WhatsApp for ${pujaName} information...`, 'info');
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-warmIvory pb-20">
      {/* ==================================================== */}
      {/* 1. HERO SECTION WITH TEMPLE PHOTOGRAPHY */}
      {/* ==================================================== */}
      <section className="relative min-h-[55vh] flex flex-col justify-end text-white p-6 sm:p-12 lg:p-16 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img
            src={templeInfo.heroImage}
            alt="Shri Swami Samarth Maharaj Mandir Vatavruksha"
            className="w-full h-full object-cover opacity-45 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold backdrop-blur-md border border-gold/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vatavruksha Devasthan Guide</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {templeInfo.name}
          </h1>

          <p className="text-base sm:text-lg text-warmIvory/80 max-w-2xl font-light leading-relaxed">
            {templeInfo.significance}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-warmIvory/70">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-gold" />
              <span>Akkalkot, Solapur District, Maharashtra</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gold" />
              <span>5:00 AM – 10:30 PM Daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 2. STATS & QUICK INFORMATION CARDS */}
      {/* ==================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-card border border-[#E7E0D2] flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center flex-shrink-0 border border-gold/40">
              <Clock className="w-6 h-6 text-terracotta" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted">Temple Doors</div>
              <div className="text-base font-bold text-primary font-serif">5:00 AM – 10:30 PM</div>
              <div className="text-[11px] text-emerald-700 font-medium">Open 365 Days</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-card border border-[#E7E0D2] flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center flex-shrink-0 border border-gold/40">
              <Sparkles className="w-6 h-6 text-terracotta" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted">Mukh Darshan</div>
              <div className="text-base font-bold text-primary font-serif">Continuous Flow</div>
              <div className="text-[11px] text-charcoal-muted">15–30 min average wait</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-card border border-[#E7E0D2] flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center flex-shrink-0 border border-gold/40">
              <HeartHandshake className="w-6 h-6 text-terracotta" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted">Annachhatra</div>
              <div className="text-base font-bold text-primary font-serif">Free Mahaprasad</div>
              <div className="text-[11px] text-charcoal-muted">11:30 AM & 7:30 PM</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-card border border-[#E7E0D2] flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center flex-shrink-0 border border-gold/40">
              <Car className="w-6 h-6 text-terracotta" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted">Parking Grounds</div>
              <div className="text-base font-bold text-primary font-serif">200m – 400m Radius</div>
              <div className="text-[11px] text-charcoal-muted">Cars, Vans & Tour Buses</div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================== */}
      {/* 3. AARTI TIMELINE & DARSHAN SCHEDULE */}
      {/* ==================================================== */}
      <section id="darshan-schedule" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600 block mb-1">
            Sacred Ritual Schedule
          </span>
          <h2 className="font-serif text-3xl font-bold text-primary">
            Daily Aarti & Darshan Timeline
          </h2>
          <p className="text-sm text-charcoal-muted mt-2 leading-relaxed">
            The temple observes five daily grand aartis honoring Shri Swami Samarth Maharaj. Plan to reach 30 minutes before Aarti time for comfortable hall seating.
          </p>
        </div>

        <div className="space-y-4">
          {templeInfo.aartiTimeline.map((item, index) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl p-6 border border-[#E7E0D2] shadow-subtle hover:shadow-card transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary text-gold flex items-center justify-center flex-shrink-0 font-bold font-serif text-lg border border-gold/40">
                  0{index + 1}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-serif text-xl font-bold text-primary">
                      {item.name}
                    </h3>
                    <span className="text-xs text-terracotta font-devanagari font-semibold">
                      ({item.marathiName})
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="md:text-right border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 flex md:flex-col justify-between items-center md:items-end flex-shrink-0">
                <div className="font-mono text-sm font-bold text-primary bg-warmIvory-300 px-3 py-1 rounded-lg">
                  {item.time}
                </div>
                <div className="text-[11px] text-terracotta font-medium mt-1">
                  Arrive by: <strong>{item.recommendedArrivalTime}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================== */}
      {/* 4. ANNACHHATRA MAHAPRASAD SECTION */}
      {/* ==================================================== */}
      <section id="annachhatra" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-gradient-to-br from-primary to-[#18294b] text-warmIvory rounded-3xl p-8 sm:p-12 border border-gold/30 shadow-elevated relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gold font-mono">
                Sacred Community Dining
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
                {templeInfo.annachhatraInfo.title}
              </h2>
              <p className="text-sm sm:text-base text-warmIvory/80 leading-relaxed">
                {templeInfo.annachhatraInfo.description}
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="text-gold font-bold">Lunch (Madhyan Bhojan)</div>
                  <div className="text-white font-medium text-sm mt-0.5">{templeInfo.annachhatraInfo.lunchTimings}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="text-gold font-bold">Dinner (Sandhya Bhojan)</div>
                  <div className="text-white font-medium text-sm mt-0.5">{templeInfo.annachhatraInfo.dinnerTimings}</div>
                </div>
              </div>

              <p className="text-xs text-warmIvory/60 pt-2">
                <strong>Menu:</strong> {templeInfo.annachhatraInfo.menu}
              </p>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto border border-gold/50">
                <Gift className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">Devotee Mahaprasad</h3>
              <p className="text-xs text-warmIvory/80 leading-relaxed">
                Free for every visitor without any barrier of caste, creed, or background. Voluntary contributions can be made directly at the official trust donation desk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 5. LOCALLY AVAILABLE PUJA SERVICES */}
      {/* ==================================================== */}
      <section id="puja-services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600 block mb-1">
            Locally Available Rituals
          </span>
          <h2 className="font-serif text-3xl font-bold text-primary">
            Puja & Abhishek Information
          </h2>
          <p className="text-sm text-charcoal-muted mt-2 leading-relaxed">
            Information about religious rites, Abhishekams, and holy offerings arranged by local Mathas and traditional Vedic pandits in Akkalkot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {templeInfo.localPujaServices.map((puja) => (
            <div
              key={puja.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E7E0D2] shadow-subtle hover:shadow-card transition-all flex flex-col justify-between space-y-5"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-serif text-xl font-bold text-primary">
                    {puja.name}
                  </h3>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-warmIvory-300 text-charcoal">
                    {puja.approxTime}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-terracotta-700 font-medium mb-3">
                  {puja.shortDesc}
                </p>

                <p className="text-xs text-charcoal-muted leading-relaxed mb-4">
                  {puja.details}
                </p>

                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal">
                    Key Ritual Inclusions:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {puja.inclusions.map((inc) => (
                      <div key={inc} className="flex items-center gap-1.5 text-xs text-charcoal-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-charcoal-muted italic">
                  Information Desk
                </span>
                <button
                  onClick={() => handlePujaEnquiry(puja.name)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center gap-1.5 shadow-sm active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Enquire on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================== */}
      {/* 6. GUIDELINES & DRESS CODE */}
      {/* ==================================================== */}
      <section id="guidelines" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E0D2] shadow-subtle space-y-6">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-terracotta" />
            <h2 className="font-serif text-2xl font-bold text-primary">
              Important Temple Instructions & Dress Code
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {templeInfo.importantGuidelines.map((guide, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-warmIvory/50 border border-gold/20">
                <h4 className="text-sm font-bold text-primary font-serif mb-1">
                  {guide.rule}
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {guide.instruction}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 7. MANDATORY DISCLAIMER BANNER */}
      {/* ==================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-300 text-amber-900 flex items-start gap-3.5 text-xs sm:text-sm leading-relaxed">
          <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold mb-0.5">Pilgrimage Transparency Note:</strong>
            {templeInfo.disclaimer}
          </div>
        </div>
      </div>
    </div>
  );
}
