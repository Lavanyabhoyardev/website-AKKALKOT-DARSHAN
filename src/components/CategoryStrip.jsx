import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel, Sparkles, SunMedium, Compass, UtensilsCrossed, Car } from 'lucide-react';

export default function CategoryStrip() {
  const categories = [
    {
      id: 'stay',
      title: 'Stay',
      marathi: 'निवास व्यवस्था',
      desc: 'Verified Pilgrim Hotels',
      icon: Hotel,
      path: '/stay',
      color: 'text-terracotta bg-terracotta-50 border-terracotta/20 hover:border-terracotta',
    },
    {
      id: 'temple-services',
      title: 'Temple Services',
      marathi: 'मंदिर सेवा',
      desc: 'Aarti, Timings & Puja',
      icon: Sparkles,
      path: '/temple-services',
      color: 'text-gold-600 bg-gold-50 border-gold/30 hover:border-gold',
    },
    {
      id: 'darshan',
      title: 'Darshan',
      marathi: 'दर्शन मार्गदर्शक',
      desc: 'Schedules & Rules',
      icon: SunMedium,
      path: '/temple-services#darshan-schedule',
      color: 'text-amber-700 bg-amber-50 border-amber-200 hover:border-amber-400',
    },
    {
      id: 'places',
      title: 'Places to Visit',
      marathi: 'दर्शनीय ठिकाणे',
      desc: 'Heritage & Mathas',
      icon: Compass,
      path: '/places',
      color: 'text-indigo-800 bg-indigo-50 border-indigo-200 hover:border-indigo-400',
    },
    {
      id: 'food',
      title: 'Food & Prasad',
      marathi: 'महाप्रसाद व भोजन',
      desc: 'Mahaprasad & Solapuri',
      icon: UtensilsCrossed,
      path: '/food',
      color: 'text-orange-700 bg-orange-50 border-orange-200 hover:border-orange-400',
    },
    {
      id: 'transport',
      title: 'Transport',
      marathi: 'स्थानिक वाहतूक',
      desc: 'Auto, Cabs & Buses',
      icon: Car,
      path: '/transport',
      color: 'text-emerald-800 bg-emerald-50 border-emerald-200 hover:border-emerald-400',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 relative z-20">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-subtle border border-[#E7E0D2] overflow-x-auto no-scrollbar">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 min-w-[550px] md:min-w-0">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                to={cat.path}
                className="group flex flex-col items-center text-center p-3 rounded-xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-sm bg-warmIvory/30 hover:bg-white"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2 transition-transform duration-200 group-hover:scale-110 border ${cat.color}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-serif text-xs sm:text-sm font-bold text-primary group-hover:text-terracotta transition-colors leading-tight">
                  {cat.title}
                </span>
                <span className="text-[10px] text-terracotta-700 font-devanagari font-medium mt-0.5">
                  {cat.marathi}
                </span>
                <span className="hidden sm:block text-[11px] text-charcoal-muted mt-0.5">
                  {cat.desc}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
