import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageSquare } from 'lucide-react';

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute left-16 bg-primary text-warmIvory text-xs py-2 px-3 rounded-xl shadow-xl border border-gold/40 whitespace-nowrap animate-in fade-in slide-in-from-left-2 duration-200">
          <p className="font-semibold text-gold">Pilgrim Assistance Desk</p>
          <p className="text-white/80">Need help with Darshan or Stay?</p>
        </div>
      )}

      <a
        href="https://wa.me/919876543210?text=Hello%20Akkalkot%20Darshan%2C%20I%20need%20quick%20assistance%20regarding%20my%20upcoming%20visit."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-13 h-13 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/40 group"
        aria-label="Chat with pilgrim assistance on WhatsApp"
      >
        <Phone className="w-6 h-6 fill-white" />
        <span className="sr-only">WhatsApp Enquiry</span>
      </a>
    </div>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-white/90 text-primary shadow-elevated border border-gold/40 hover:bg-primary hover:text-gold transition-all duration-300 hover:scale-105 active:scale-95"
      aria-label="Scroll back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
