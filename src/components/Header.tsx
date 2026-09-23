import React, { useState } from 'react';
import { UtensilsCrossed, Smartphone, MapPin, Menu as MenuIcon, X, Sparkles, HeartHandshake } from 'lucide-react';
import { CITIES } from '../data/mockData';
import { TiffinLogo, MesswalaBrandLogo } from './TiffinLogo';

interface HeaderProps {
  selectedCity: string;
  onSelectCity: (city: string) => void;
  onOpenAppModal: () => void;
  onOpenPartnerModal: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  selectedCity,
  onSelectCity,
  onOpenAppModal,
  onOpenPartnerModal,
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  const navItems = [
    { label: 'Tiffin Services', id: 'tiffin-section' },
    { label: 'Build Your Tiffin', id: 'build-tiffin-section', isSpecial: true },
    { label: 'Weekly Menu', id: 'menu-section' },
    { label: 'Why Messwala', id: 'why-section' },
    { label: 'Partner with us', id: 'partner-section' },
    { label: 'Blog', id: 'blog-section' },
    { label: 'Our Story', id: 'story-section' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header id="main-header" className="sticky top-0 z-50 bg-[#FAF6F0]/90 backdrop-blur-md border-b border-orange-100/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Brand Logo */}
          <div className="flex items-center cursor-pointer transform hover:scale-[1.02] transition-transform" onClick={() => handleNavClick('hero-section')}>
            <MesswalaBrandLogo />
          </div>

          {/* Nav Links - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isSpecial = item.isSpecial;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1.5 transition-all cursor-pointer ${
                    isSpecial
                      ? 'text-orange-500 font-bold hover:text-orange-600'
                      : isActive
                      ? 'text-red-600 font-bold'
                      : 'text-slate-700 hover:text-red-500'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {item.label}
                  </span>

                  {/* Orange underline bar matching design */}
                  {isSpecial ? (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-orange-500 shadow-xs" />
                  ) : isActive ? (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-red-500 shadow-xs" />
                  ) : null}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* <button
              onClick={onOpenPartnerModal}
              className="px-4 py-2.5 text-xs font-bold text-slate-700 hover:text-red-600 hover:bg-orange-100/50 rounded-full transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <HeartHandshake className="w-4 h-4 text-orange-500" />
              <span>Cook Partner</span>
            </button> */}

            <button
              onClick={onOpenAppModal}
              className="px-5 py-2.5 text-sm font-bold text-white bg-red-500 hover:bg-red-600 rounded-full shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transform hover:-translate-y-0.5 transition-all flex items-center space-x-2 cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              <span>Get the app</span>
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
              className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-orange-200 rounded-full flex items-center space-x-1"
            >
              <MapPin className="w-3 h-3 text-red-500" />
              <span>{selectedCity}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-red-500 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Navigation
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isSpecial = item.isSpecial;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                    isSpecial
                      ? 'bg-orange-50 text-orange-600 border border-orange-300 shadow-xs'
                      : 'text-slate-700 bg-slate-50 hover:bg-orange-50 hover:text-red-600'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col space-y-2">
            <button
              onClick={() => {
                onOpenPartnerModal();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2.5 text-xs font-bold text-slate-700 bg-orange-50 hover:bg-orange-100 rounded-xl cursor-pointer"
            >
              Become a Home Chef Partner
            </button>

            <button
              onClick={() => {
                onOpenAppModal();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-3 text-sm font-bold text-white bg-red-500 hover:bg-red-600 rounded-xl shadow-md flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              <span>Download Messwala App</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
