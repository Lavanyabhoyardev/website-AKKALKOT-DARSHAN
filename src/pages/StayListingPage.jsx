import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, ArrowUpDown, Search, RotateCcw, X, Check } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';
import { useToast } from '../context/ToastContext';

export default function StayListingPage() {
  const [searchParams] = useSearchParams();
  const { addToast } = useToast();

  // Search input state
  const [searchKeyword, setSearchKeyword] = useState(searchParams.get('loc') || '');

  // Filter states
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedDistances, setSelectedDistances] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedSuitability, setSelectedSuitability] = useState([]);
  const [sortBy, setSortBy] = useState('recommended');

  // Mobile filter drawer state
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync with initial URL params if present
  useEffect(() => {
    const loc = searchParams.get('loc');
    if (loc && loc !== 'All Akkalkot') {
      if (loc.includes('Near Temple')) {
        setSelectedDistances(['near']);
      }
    }
  }, [searchParams]);

  // Toggle helper
  const toggleItem = (list, setList, item) => {
    if (list.includes(item)) {
      setList(list.filter((x) => x !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleResetFilters = () => {
    setSelectedPrices([]);
    setSelectedDistances([]);
    setSelectedAmenities([]);
    setSelectedSuitability([]);
    setSearchKeyword('');
    setSortBy('recommended');
    addToast('Filters reset to default', 'info');
  };

  // Filter logic
  const filteredAndSortedProperties = useMemo(() => {
    return properties
      .filter((p) => {
        // Keyword search
        if (searchKeyword.trim()) {
          const q = searchKeyword.toLowerCase();
          const matches =
            p.name.toLowerCase().includes(q) ||
            p.tagline.toLowerCase().includes(q) ||
            p.address.toLowerCase().includes(q) ||
            p.distanceFromTemple.toLowerCase().includes(q);
          if (!matches) return false;
        }

        // Price filter
        if (selectedPrices.length > 0) {
          const matchesPrice = selectedPrices.some((range) => {
            if (range === 'budget' && p.price >= 500 && p.price <= 1000) return true;
            if (range === 'mid' && p.price > 1000 && p.price <= 2000) return true;
            if (range === 'premium' && p.price > 2000) return true;
            return false;
          });
          if (!matchesPrice) return false;
        }

        // Distance filter
        if (selectedDistances.length > 0) {
          const matchesDist = selectedDistances.some((d) => {
            if (d === 'near' && p.distanceNumericMeters <= 500) return true;
            if (d === '1km' && p.distanceNumericMeters <= 1000) return true;
            if (d === '3km' && p.distanceNumericMeters <= 3000) return true;
            return false;
          });
          if (!matchesDist) return false;
        }

        // Amenities filter (must have all selected amenities)
        if (selectedAmenities.length > 0) {
          const hasAll = selectedAmenities.every((amenity) => p.amenities.includes(amenity));
          if (!hasAll) return false;
        }

        // Suitability filter
        if (selectedSuitability.length > 0) {
          const matchesSuit = selectedSuitability.some((s) => p.suitableFor?.includes(s));
          if (!matchesSuit) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'distance') return a.distanceNumericMeters - b.distanceNumericMeters;
        // Default recommended: featured first, then rating
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.rating - a.rating;
      });
  }, [
    searchKeyword,
    selectedPrices,
    selectedDistances,
    selectedAmenities,
    selectedSuitability,
    sortBy,
  ]);

  const activeFiltersCount =
    selectedPrices.length +
    selectedDistances.length +
    selectedAmenities.length +
    selectedSuitability.length +
    (searchKeyword ? 1 : 0);

  return (
    <div className="min-h-screen py-10 bg-warmIvory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Title */}
        <div className="mb-8">
          <div className="text-xs text-charcoal-muted mb-2 font-medium">
            <span>Home</span> <span className="mx-1.5">/</span> <span className="text-terracotta">Stays in Akkalkot</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
            Stay in Akkalkot
          </h1>
          <p className="text-sm sm:text-base text-charcoal-muted mt-2 max-w-2xl leading-relaxed">
            Comfortable stays close to where your journey begins. Browse verified guest houses, devotee Bhakt Nivas, and premium hotels with transparent pricing.
          </p>
        </div>

        {/* Search & Sort Controls Bar */}
        <div className="bg-white p-4 rounded-2xl border border-[#E7E0D2] shadow-subtle mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Keyword Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by hotel name or location..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-gold bg-warmIvory/30 focus:bg-white transition-all"
            />
            {searchKeyword && (
              <button
                onClick={() => setSearchKeyword('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-muted hover:text-charcoal"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto">
            {/* Mobile Filter Toggle Button */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-primary text-gold shadow-sm"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters {activeFiltersCount > 0 ? `(${activeFiltersCount})` : ''}</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-terracotta flex-shrink-0" />
              <span className="text-charcoal-muted hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-warmIvory/40 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-primary focus:outline-none focus:border-gold cursor-pointer"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating: High to Low</option>
                <option value="distance">Distance: Nearest to Temple</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Layout: Sidebar Filters + Property Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Desktop Left Filter Sidebar */}
          <aside className="hidden lg:block bg-white rounded-2xl p-6 border border-[#E7E0D2] shadow-subtle space-y-6 sticky top-24">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2 font-serif text-lg font-bold text-primary">
                <Filter className="w-4 h-4 text-terracotta" />
                <span>Filters</span>
              </div>
              {activeFiltersCount > 0 && (
                <button
                  onClick={handleResetFilters}
                  className="text-xs font-semibold text-terracotta hover:underline inline-flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Price Filter */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-3">
                Price Range
              </h4>
              <div className="space-y-2">
                {[
                  { id: 'budget', label: '₹500 – ₹1,000' },
                  { id: 'mid', label: '₹1,000 – ₹2,000' },
                  { id: 'premium', label: '₹2,000+' },
                ].map((item) => (
                  <label
                    key={item.id}
                    className="flex items-center gap-2.5 text-xs text-charcoal cursor-pointer select-none hover:text-terracotta"
                  >
                    <input
                      type="checkbox"
                      checked={selectedPrices.includes(item.id)}
                      onChange={() => toggleItem(selectedPrices, setSelectedPrices, item.id)}
                      className="w-4 h-4 rounded text-terracotta focus:ring-terracotta border-gray-300 cursor-pointer"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Distance Filter */}
            <div className="pt-4 border-t border-gray-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-3">
                Distance to Temple
              </h4>
              <div className="space-y-2">
                {[
                  { id: 'near', label: 'Near Temple (<500m)' },
                  { id: '1km', label: 'Within 1 km' },
                  { id: '3km', label: 'Within 3 km' },
                ].map((item) => (
                  <label
                    key={item.id}
                    className="flex items-center gap-2.5 text-xs text-charcoal cursor-pointer select-none hover:text-terracotta"
                  >
                    <input
                      type="checkbox"
                      checked={selectedDistances.includes(item.id)}
                      onChange={() => toggleItem(selectedDistances, setSelectedDistances, item.id)}
                      className="w-4 h-4 rounded text-terracotta focus:ring-terracotta border-gray-300 cursor-pointer"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Amenities Filter */}
            <div className="pt-4 border-t border-gray-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-3">
                Amenities
              </h4>
              <div className="space-y-2">
                {['AC', 'Non-AC', 'Parking', 'Wi-Fi', 'Hot Water', 'Elevator'].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2.5 text-xs text-charcoal cursor-pointer select-none hover:text-terracotta"
                  >
                    <input
                      type="checkbox"
                      checked={selectedAmenities.includes(item)}
                      onChange={() => toggleItem(selectedAmenities, setSelectedAmenities, item)}
                      className="w-4 h-4 rounded text-terracotta focus:ring-terracotta border-gray-300 cursor-pointer"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Suitable For Filter */}
            <div className="pt-4 border-t border-gray-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-3">
                Suitable For
              </h4>
              <div className="space-y-2">
                {['Family', 'Couple-friendly', 'Yatris'].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2.5 text-xs text-charcoal cursor-pointer select-none hover:text-terracotta"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSuitability.includes(item)}
                      onChange={() => toggleItem(selectedSuitability, setSelectedSuitability, item)}
                      className="w-4 h-4 rounded text-terracotta focus:ring-terracotta border-gray-300 cursor-pointer"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Properties Grid */}
          <main className="lg:col-span-3">
            {/* Active filters pill list */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs text-charcoal-muted font-medium">Active filters:</span>
                {searchKeyword && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Search: "{searchKeyword}"
                    <button onClick={() => setSearchKeyword('')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedPrices.map((p) => (
                  <span key={p} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-terracotta-50 text-terracotta-700">
                    {p === 'budget' ? '₹500–₹1,000' : p === 'mid' ? '₹1,000–₹2,000' : '₹2,000+'}
                    <button onClick={() => toggleItem(selectedPrices, setSelectedPrices, p)}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                {selectedDistances.map((d) => (
                  <span key={d} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gold-50 text-gold-700">
                    {d === 'near' ? '<500m' : d === '1km' ? '<1km' : '<3km'}
                    <button onClick={() => toggleItem(selectedDistances, setSelectedDistances, d)}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                {selectedAmenities.map((a) => (
                  <span key={a} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-warmIvory-300 text-charcoal">
                    {a}
                    <button onClick={() => toggleItem(selectedAmenities, setSelectedAmenities, a)}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                <button
                  onClick={handleResetFilters}
                  className="text-xs text-terracotta font-semibold hover:underline ml-2"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Properties count */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal-muted">
                Showing {filteredAndSortedProperties.length} Stays
              </span>
              <span className="text-xs text-emerald-700 font-medium">
                ✓ Guaranteed Clean Rooms & Devotee Desk
              </span>
            </div>

            {/* Cards Grid */}
            {filteredAndSortedProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAndSortedProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-gray-300">
                <div className="w-16 h-16 rounded-full bg-terracotta-50 text-terracotta flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  No matching stays found
                </h3>
                <p className="text-sm text-charcoal-muted max-w-md mx-auto mb-6">
                  Try relaxing your price, distance or amenity filters to discover more pilgrim accommodations in Akkalkot.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-primary text-gold hover:bg-primary-800 transition-colors shadow-md"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white p-6 shadow-2xl z-10 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h3 className="font-serif text-lg font-bold text-primary">Filters</h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100 text-charcoal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Price */}
              <div className="py-4 border-b border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-3">Price</h4>
                <div className="space-y-2">
                  {[
                    { id: 'budget', label: '₹500 – ₹1,000' },
                    { id: 'mid', label: '₹1,000 – ₹2,000' },
                    { id: 'premium', label: '₹2,000+' },
                  ].map((item) => (
                    <label key={item.id} className="flex items-center gap-2.5 text-xs text-charcoal">
                      <input
                        type="checkbox"
                        checked={selectedPrices.includes(item.id)}
                        onChange={() => toggleItem(selectedPrices, setSelectedPrices, item.id)}
                        className="w-4 h-4 rounded text-terracotta border-gray-300"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Distance */}
              <div className="py-4 border-b border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-3">Distance</h4>
                <div className="space-y-2">
                  {[
                    { id: 'near', label: 'Near Temple (<500m)' },
                    { id: '1km', label: 'Within 1 km' },
                    { id: '3km', label: 'Within 3 km' },
                  ].map((item) => (
                    <label key={item.id} className="flex items-center gap-2.5 text-xs text-charcoal">
                      <input
                        type="checkbox"
                        checked={selectedDistances.includes(item.id)}
                        onChange={() => toggleItem(selectedDistances, setSelectedDistances, item.id)}
                        className="w-4 h-4 rounded text-terracotta border-gray-300"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="py-4 border-b border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-3">Amenities</h4>
                <div className="space-y-2">
                  {['AC', 'Non-AC', 'Parking', 'Wi-Fi', 'Hot Water', 'Elevator'].map((item) => (
                    <label key={item} className="flex items-center gap-2.5 text-xs text-charcoal">
                      <input
                        type="checkbox"
                        checked={selectedAmenities.includes(item)}
                        onChange={() => toggleItem(selectedAmenities, setSelectedAmenities, item)}
                        className="w-4 h-4 rounded text-terracotta border-gray-300"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 flex gap-2">
              <button
                onClick={handleResetFilters}
                className="w-1/2 py-2.5 rounded-xl text-xs font-semibold border border-gray-300 text-charcoal"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-1/2 py-2.5 rounded-xl text-xs font-semibold bg-primary text-gold shadow-md"
              >
                Apply ({filteredAndSortedProperties.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
