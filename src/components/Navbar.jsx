import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Stay', path: '/stay' },
    { label: 'Temple Services', path: '/temple-services' },
    { label: 'Darshan', path: '/temple-services#darshan-schedule' },
    { label: 'Places to Visit', path: '/places' },
    { label: 'Food', path: '/food' },
    { label: 'Transport', path: '/transport' },
  ];

  const isActive = (path) => {
    if (path.includes('#')) {
      return location.pathname + location.hash === path;
    }
    return location.pathname === path;
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-warmIvory/95 backdrop-blur-md py-2.5 shadow-sm border-b border-[#EAE4D9]'
            : 'bg-warmIvory py-3.5 border-b border-[#EAE4D9]/80 shadow-subtle'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 flex-nowrap">
            {/* Left: Brand Logo & Wordmark (NO AVENOR) */}
            <Link to="/" className="group flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary flex items-center justify-center shadow-sm border border-gold/40 text-gold group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
                {/* Elegant temple / house-inspired icon */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2L3 8.5V21h18V8.5L12 2z" fill="#D6A84F" fillOpacity="0.18" />
                  <path d="M12 2v6" stroke="#C96B32" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="13.5" r="2.5" fill="#D6A84F" />
                  <path d="M9 21v-4.5a3 3 0 0 1 6 0V21" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-primary uppercase leading-none">
                  AKKALKOT DARSHAN
                </span>
                <span className="text-[10px] sm:text-[11px] text-terracotta-600 font-medium tracking-wide mt-1 leading-none whitespace-nowrap">
                  Stay & Services • Everything in One Place
                </span>
              </div>
            </Link>

            {/* Center: Desktop Navigation Links (no wrapping, centered) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-nowrap justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-[13px] xl:text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive(link.path)
                      ? 'text-terracotta-700 font-semibold bg-terracotta-50/90'
                      : 'text-primary hover:text-terracotta-600 hover:bg-black/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right: WhatsApp Help + Plan Your Stay */}
            <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 flex-shrink-0 flex-nowrap">
              <a
                href="https://wa.me/919876543210?text=Hello%20Akkalkot%20Darshan%2C%20I%20would%20like%20to%20plan%20my%20stay%20and%20visit."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 px-3 py-2 rounded-xl transition-colors whitespace-nowrap"
                title="Quick WhatsApp Enquiry"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Help</span>
              </a>

              <Link
                to="/stay"
                className="relative inline-flex items-center justify-center gap-1.5 px-3.5 xl:px-4 py-2 rounded-xl text-xs xl:text-sm font-semibold text-warmIvory bg-primary hover:bg-primary-800 shadow-sm hover:shadow transition-all duration-200 border border-gold/30 whitespace-nowrap group"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold group-hover:rotate-12 transition-transform" />
                <span>Plan Your Stay</span>
              </Link>
            </div>

            {/* Mobile Controls (Stays + Hamburger) */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="https://wa.me/919876543210?text=Hello%20Akkalkot%20Darshan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-emerald-700 bg-emerald-50 border border-emerald-200"
                aria-label="WhatsApp Help"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-primary hover:bg-black/5 focus:outline-none border border-gray-200"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed right-0 top-0 bottom-0 w-5/6 max-w-sm bg-warmIvory p-6 shadow-2xl flex flex-col justify-between overflow-y-auto z-10 border-l border-gold/30">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-charcoal/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-gold">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L3 8.5V21h18V8.5L12 2z" fill="#D6A84F" fillOpacity="0.2" />
                      <circle cx="12" cy="13.5" r="2" fill="#D6A84F" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif font-bold text-primary block leading-none uppercase text-base">
                      Akkalkot Darshan
                    </span>
                    <span className="text-[10px] text-terracotta-600 font-medium tracking-wide mt-1">
                      Stay & Services
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full hover:bg-black/5 text-charcoal"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation items with icons */}
              <div className="py-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive(link.path)
                        ? 'bg-terracotta-50 text-terracotta-700 font-semibold border-l-4 border-terracotta'
                        : 'text-charcoal hover:bg-black/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-charcoal-muted">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom quick actions */}
            <div className="pt-6 border-t border-charcoal/10 flex flex-col gap-3">
              <Link
                to="/stay"
                className="w-full py-3 px-4 rounded-xl text-center font-semibold text-warmIvory bg-primary hover:bg-primary-800 transition-colors shadow-md"
              >
                Plan Your Stay
              </Link>
              <a
                href="https://wa.me/919876543210?text=Hello%20Akkalkot%20Darshan%2C%20I%20am%20planning%20my%20visit."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-center text-sm font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>WhatsApp Help</span>
              </a>
              <p className="text-center text-xs text-charcoal-muted mt-2">
                Akkalkot, Solapur District, Maharashtra
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
