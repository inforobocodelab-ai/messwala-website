import React from 'react';
import { AppMockup } from './AppMockup';
import { ArrowRight, Sparkles, ShieldCheck, Heart, Utensils, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  selectedCity: string;
  onSelectCity: (city: string) => void;
  onOpenAppModal: () => void;
  onBookTrial: (tiffinId: string) => void;
  onScrollToListings: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  selectedCity,
  onOpenAppModal,
  onBookTrial,
  onScrollToListings,
}) => {
  return (
    <section id="hero-section" className="relative bg-[#FAF6F0] overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-orange-100/80">
      
      {/* Soft background decorative glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline Badge */}
            {/* <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200/80 text-orange-900 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-orange-600 animate-pulse" />
              <span>India's #1 Homemade Tiffin & Mess Discovery Platform</span>
            </div> */}

            {/* Headline matching screenshot */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 font-sans leading-[1.12]">
              Khana that tastes like{' '}
              <span className="text-red-500 relative inline-block">
                someone cares.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-red-200 -z-10"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subtitle text matching screenshot */}
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
              Mess food boring you to tears? Swiggy burning your wallet? Subscribe to a real kitchen near you — home-cooked meals, honest monthly pricing, delivered on your schedule.
            </p>

            {/* App Store Download Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              
              {/* Apple App Store */}
              <button
                onClick={onOpenAppModal}
                className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center space-x-3 group"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.67-.82 1.13-1.96.99-3.1-.98.04-2.19.66-2.88 1.47-.62.72-1.17 1.88-.99 3 1.1.09 2.22-.55 2.88-1.37z" />
                </svg>
                <div className="text-left leading-none">
                  <div className="text-[10px] text-slate-300 font-medium">Download on the</div>
                  <div className="text-sm font-bold tracking-wide">App Store</div>
                </div>
              </button>

              {/* Google Play Store */}
              <button
                onClick={onOpenAppModal}
                className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center space-x-3 group"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L18.81,13.12C19.46,12.75 19.86,12.08 19.86,11.35C19.86,10.62 19.46,9.95 18.81,9.58L16.81,7.58L14.75,10.94L16.81,15.12M4.88,1.21L14.07,10.4L11.5,12.97L2.31,3.78C2.86,2.27 3.87,1.38 4.88,1.21M4.88,22.79C3.87,22.62 2.86,21.73 2.31,20.22L11.5,11.03L14.07,13.6L4.88,22.79Z" />
                </svg>
                <div className="text-left leading-none">
                  <div className="text-[10px] text-slate-300 font-medium uppercase">GET IT ON</div>
                  <div className="text-sm font-bold tracking-wide">Google Play</div>
                </div>
              </button>

            </div>


            
          </div>

          {/* Right Column: Interactive Phone Simulator */}
          <div className="lg:col-span-5 flex justify-center items-center py-4">
            <AppMockup selectedCity={selectedCity} onBookTrial={onBookTrial} />
          </div>

        </div>
      </div>
    </section>
  );
};
