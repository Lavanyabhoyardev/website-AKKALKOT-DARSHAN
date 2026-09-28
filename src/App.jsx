import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { WhatsAppFloat, BackToTop } from './components/WhatsAppFloat';
import { ToastProvider } from './context/ToastContext';
import HomePage from './pages/HomePage';
import StayListingPage from './pages/StayListingPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import TempleServicesPage from './pages/TempleServicesPage';
import PlacesPage from './pages/PlacesPage';
import FoodPage from './pages/FoodPage';
import TransportPage from './pages/TransportPage';

// Scroll restoration helper
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/stay" element={<StayListingPage />} />
              <Route path="/stay/:slug" element={<PropertyDetailPage />} />
              <Route path="/temple-services" element={<TempleServicesPage />} />
              <Route path="/darshan" element={<TempleServicesPage />} />
              <Route path="/places" element={<PlacesPage />} />
              <Route path="/food" element={<FoodPage />} />
              <Route path="/transport" element={<TransportPage />} />
              {/* Fallback route */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloat />
          <BackToTop />
        </div>
      </BrowserRouter>
    </ToastProvider>
  );
}
