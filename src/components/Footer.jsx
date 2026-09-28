import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Heart, Shield, Clock, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-warmIvory/80 pt-16 pb-12 border-t border-gold/20 bg-dark-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center border border-gold/50 text-gold">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2L4 9v11h16V9L12 2z" fill="#D6A84F" fillOpacity="0.25" />
                  <path d="M12 2v6" stroke="#D6A84F" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="14" r="2.5" fill="#D6A84F" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-warmIvory block">
                  AKKALKOT DARSHAN
                </span>
                <span className="text-xs text-gold tracking-wider uppercase font-medium">
                  Stay & Services • Everything in One Place
                </span>
              </div>
            </div>

            <p className="text-sm text-warmIvory/70 leading-relaxed max-w-sm">
              Your comprehensive pilgrimage and travel companion for Shri Swami Samarth Maharaj’s sacred abode in Akkalkot, Maharashtra. Verified pilgrim stays, darshan schedules, local transport, and authentic Maharashtrian hospitality.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/919876543210?text=Hello%20Akkalkot%20Darshan%2C%20I%20have%20an%20enquiry%20regarding%20my%20visit."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs font-semibold tracking-wide transition-all shadow-md"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp Devotee Desk</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-warmIvory/60 px-3 py-2">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>Akkalkot, Solapur Dist, MH</span>
              </div>
            </div>
          </div>

          {/* Col 2: Stays */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4 font-sans">
              Stay in Akkalkot
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/stay" className="hover:text-gold transition-colors">
                  All Verified Stays
                </Link>
              </li>
              <li>
                <Link to="/stay/shree-guest-house" className="hover:text-gold transition-colors">
                  Shree Guest House
                </Link>
              </li>
              <li>
                <Link to="/stay/swami-krupa-residency" className="hover:text-gold transition-colors">
                  Swami Krupa Residency
                </Link>
              </li>
              <li>
                <Link to="/stay/akkalkot-heritage-stay" className="hover:text-gold transition-colors">
                  Akkalkot Heritage Stay
                </Link>
              </li>
              <li>
                <Link to="/stay/bhakt-nivas-prime" className="hover:text-gold transition-colors">
                  Bhakt Nivas (Near Mandir)
                </Link>
              </li>
              <li>
                <Link to="/stay/temple-view-rooms" className="hover:text-gold transition-colors">
                  Temple View Rooms & Suites
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Temple & Darshan */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4 font-sans">
              Temple & Darshan
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/temple-services" className="hover:text-gold transition-colors">
                  Temple Overview
                </Link>
              </li>
              <li>
                <Link to="/temple-services#darshan-schedule" className="hover:text-gold transition-colors">
                  Daily Aarti Timeline
                </Link>
              </li>
              <li>
                <Link to="/temple-services#annachhatra" className="hover:text-gold transition-colors">
                  Annachhatra Mahaprasad
                </Link>
              </li>
              <li>
                <Link to="/temple-services#puja-services" className="hover:text-gold transition-colors">
                  Local Puja Information
                </Link>
              </li>
              <li>
                <Link to="/temple-services#guidelines" className="hover:text-gold transition-colors">
                  Dress Code & Guidelines
                </Link>
              </li>
              <li>
                <Link to="/places" className="hover:text-gold transition-colors">
                  Samadhi Math Details
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Guide & Transit */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4 font-sans">
              Guide & Transit
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/places" className="hover:text-gold transition-colors">
                  Akkalkot Royal Armory
                </Link>
              </li>
              <li>
                <Link to="/places" className="hover:text-gold transition-colors">
                  Shivpuri Agnihotra Ashram
                </Link>
              </li>
              <li>
                <Link to="/food" className="hover:text-gold transition-colors">
                  Jowar Bhakri & Shenga Chutney
                </Link>
              </li>
              <li>
                <Link to="/transport" className="hover:text-gold transition-colors">
                  Solapur to Akkalkot Cabs
                </Link>
              </li>
              <li>
                <Link to="/transport" className="hover:text-gold transition-colors">
                  Local Auto Rickshaw Tariff
                </Link>
              </li>
              <li>
                <Link to="/transport" className="hover:text-gold transition-colors">
                  MSRTC Lal Pari Buses
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="py-6 border-b border-white/10 text-xs text-warmIvory/50 leading-relaxed">
          <p>
            <strong className="text-warmIvory/80">Pilgrimage Information Notice:</strong> Akkalkot Darshan & Stay is an independent travel, discovery, and hospitality assistance platform crafted for visiting pilgrims. This platform is not officially associated with or authorized by the official temple devasthan trust or the Annachhatra trust. All trade names, room bookings, and puja information refer to independent local facilities and services.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Studio Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warmIvory/60">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Akkalkot Darshan. All rights reserved.</span>
            <span>•</span>
            <span className="text-gold font-medium">Frontend Demo Edition</span>
          </div>

          <div className="flex items-center gap-1.5 font-medium">
            <span>Designed & Built with precision by</span>
            <span className="text-warmIvory font-semibold px-2 py-0.5 rounded bg-gold/20 text-gold border border-gold/40">
              Avenor Studio
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
