import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SearchAndFilter } from './components/SearchAndFilter';
import { TiffinListings } from './components/TiffinListings';
import { WeeklyMenuSection } from './components/WeeklyMenuSection';
import { ComparisonSection } from './components/ComparisonSection';
import { PartnerSection } from './components/PartnerSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { SplashScreen } from './components/SplashScreen';
import { TrialBookingModal } from './components/TrialBookingModal';
import { PartnerModal } from './components/PartnerModal';
import { AppDownloadModal } from './components/AppDownloadModal';
import { MesswalaAiAssistant } from './components/MesswalaAiAssistant';
import { Footer } from './components/Footer';

import { TIFFIN_PROVIDERS } from './data/mockData';

export default function App() {
  // State
  const [selectedCity, setSelectedCity] = useState<string>('Nagpur');
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [mealType, setMealType] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<number>(3500);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Modal States
  const [trialTiffinId, setTrialTiffinId] = useState<string | null>(null);
  const [partnerModalOpen, setPartnerModalOpen] = useState<boolean>(false);
  const [appModalOpen, setAppModalOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero-section');

  // Filtered Tiffins Logic
  const filteredTiffins = useMemo(() => {
    return TIFFIN_PROVIDERS.filter((tiffin) => {
      // City check
      const matchCity = tiffin.city.toLowerCase() === selectedCity.toLowerCase();
      
      // Area / College check
      const matchArea =
        selectedArea === 'all'
          ? true
          : tiffin.area.toLowerCase().includes(selectedArea.toLowerCase()) ||
            tiffin.distance.toLowerCase().includes(selectedArea.toLowerCase());

      // Meal type check
      const matchDiet =
        mealType === 'all'
          ? true
          : mealType === 'veg'
          ? tiffin.type === 'veg'
          : tiffin.type === 'non-veg' || tiffin.type === 'both';

      // Search query check
      const matchSearch =
        searchQuery === ''
          ? true
          : tiffin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tiffin.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tiffin.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tiffin.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      // Price check
      const matchPrice = tiffin.monthlyPrice <= maxPrice;

      return matchCity && matchArea && matchDiet && matchSearch && matchPrice;
    });
  }, [selectedCity, selectedArea, mealType, searchQuery, maxPrice]);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Splash Screen */}
      {isLoading && <SplashScreen onComplete={() => setIsLoading(false)} />}

      <div className={`min-h-screen bg-[#FAF6F0] text-slate-900 font-sans antialiased selection:bg-red-500 selection:text-white flex flex-col justify-between ${isLoading ? 'hidden' : ''}`}>
        
        {/* Header Bar */}
        <Header
          selectedCity={selectedCity}
          onSelectCity={setSelectedCity}
          onOpenAppModal={() => setAppModalOpen(true)}
          onOpenPartnerModal={() => setPartnerModalOpen(true)}
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />

      {/* Main Page Layout */}
      <main className="flex-1">
        
        {/* Hero Section with Interactive App Mockup matching screenshot */}
        <HeroSection
          selectedCity={selectedCity}
          onSelectCity={setSelectedCity}
          onOpenAppModal={() => setAppModalOpen(true)}
          onBookTrial={(id) => setTrialTiffinId(id)}
          onScrollToListings={() => handleNavigate('tiffin-section')}
        />

        {/* Floating Search & Filters Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchAndFilter
            selectedCity={selectedCity}
            onSelectCity={setSelectedCity}
            selectedArea={selectedArea}
            onSelectArea={setSelectedArea}
            mealType={mealType}
            onChangeMealType={setMealType}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            maxPrice={maxPrice}
            onMaxPriceChange={setMaxPrice}
          />
        </div>

        {/* Tiffin Listings Section */}
        <TiffinListings
          tiffins={filteredTiffins}
          selectedCity={selectedCity}
          onBookTrial={(id) => setTrialTiffinId(id)}
        />

        {/* PGs & Hostels Section removed */}

        {/* Weekly Menu & Taste Explorer */}
        <WeeklyMenuSection onBookTrial={(id) => setTrialTiffinId(id)} />

        {/* Why Messwala Comparison Section */}
        <ComparisonSection />

        {/* Home Chef Partner Section */}
        <PartnerSection onOpenPartnerModal={() => setPartnerModalOpen(true)} />

        {/* Testimonials & Reviews */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FAQSection />

      </main>

      {/* Footer */}
      <Footer
        onSelectCity={setSelectedCity}
        onOpenAppModal={() => setAppModalOpen(true)}
        onOpenPartnerModal={() => setPartnerModalOpen(true)}
      />

      {/* Floating AI Assistant Widget */}
      <MesswalaAiAssistant />

      {/* Modals */}
      {trialTiffinId && (
        <TrialBookingModal
          tiffinId={trialTiffinId}
          onClose={() => setTrialTiffinId(null)}
        />
      )}

      {partnerModalOpen && (
        <PartnerModal onClose={() => setPartnerModalOpen(false)} />
      )}

      {appModalOpen && (
        <AppDownloadModal onClose={() => setAppModalOpen(false)} />
      )}

    </div>
    </>
  );
}
