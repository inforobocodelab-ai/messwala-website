import React from 'react';
import { Search, SlidersHorizontal, MapPin, Sparkles, Utensils } from 'lucide-react';
import { CITIES } from '../data/mockData';

interface SearchAndFilterProps {
  selectedCity: string;
  onSelectCity: (city: string) => void;
  selectedArea: string;
  onSelectArea: (area: string) => void;
  mealType: 'all' | 'veg' | 'non-veg';
  onChangeMealType: (type: 'all' | 'veg' | 'non-veg') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  maxPrice: number;
  onMaxPriceChange: (price: number) => void;
}

export const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  selectedCity,
  onSelectCity,
  selectedArea,
  onSelectArea,
  mealType,
  onChangeMealType,
  searchQuery,
  onSearchChange,
  maxPrice,
  onMaxPriceChange,
}) => {
  const currentCityObj = CITIES.find(c => c.name.toLowerCase() === selectedCity.toLowerCase()) || CITIES[0];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl border border-orange-100/80 -mt-8 relative z-20 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        
        {/* City & Area Selector */}
        <div className="md:col-span-4 flex flex-col space-y-1">
          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
            <MapPin className="w-3 h-3 text-red-500" />
            <span>Location & Hub</span>
          </label>
          <div className="flex items-center space-x-2">
            <select
              value={selectedCity}
              onChange={(e) => {
                onSelectCity(e.target.value);
                onSelectArea('all');
              }}
              className="bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-red-400 focus:outline-none cursor-pointer"
            >
              {CITIES.map(c => (
                <option key={c.name} value={c.name}>{c.name}</option>
              ))}
            </select>

            <select
              value={selectedArea}
              onChange={(e) => onSelectArea(e.target.value)}
              className="flex-1 bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-red-400 focus:outline-none cursor-pointer"
            >
              <option value="all">All Areas / Colleges</option>
              {currentCityObj.popularAreas.map(area => (
                <option key={area} value={area}>{area}</option>
              ))}
              {currentCityObj.collegeHubs.map(hub => (
                <option key={hub} value={hub}>{hub}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Query Input */}
        <div className="md:col-span-4 flex flex-col space-y-1">
          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
            <Search className="w-3 h-3 text-slate-500" />
            <span>Search Tiffin / Mess Name</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="e.g. Tiffin Adda, Soft Phulka, Paneer, VNIT..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold rounded-xl pl-9 pr-3 py-2.5 focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Dietary Preference Filter Buttons */}
        <div className="md:col-span-4 flex flex-col space-y-1">
          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
            <Utensils className="w-3 h-3 text-amber-500" />
            <span>Dietary Choice</span>
          </label>
          <div className="flex items-center space-x-1.5 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => onChangeMealType('all')}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                mealType === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              All Meals
            </button>
            <button
              onClick={() => onChangeMealType('veg')}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center space-x-1 ${
                mealType === 'veg' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-500 hover:text-emerald-600'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Pure Veg</span>
            </button>
            <button
              onClick={() => onChangeMealType('non-veg')}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center space-x-1 ${
                mealType === 'non-veg' ? 'bg-red-600 text-white shadow-xs' : 'text-slate-500 hover:text-red-600'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-400"></span>
              <span>Veg & Non-Veg</span>
            </button>
          </div>
        </div>

      </div>

      {/* Quick Filter Tags */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-slate-400 font-semibold">Popular Filters:</span>
          <button
            onClick={() => onSearchChange('Ram Nagar')}
            className="px-3 py-1 bg-orange-50 hover:bg-orange-100 text-orange-900 rounded-full font-medium transition-colors"
          >
            Near Ram Nagar
          </button>
          <button
            onClick={() => onSearchChange('Phulkas')}
            className="px-3 py-1 bg-orange-50 hover:bg-orange-100 text-orange-900 rounded-full font-medium transition-colors"
          >
            Soft Wheat Phulkas
          </button>
          <button
            onClick={() => onSearchChange('Maharashtrian')}
            className="px-3 py-1 bg-orange-50 hover:bg-orange-100 text-orange-900 rounded-full font-medium transition-colors"
          >
            Maharashtrian Thali
          </button>
          <button
            onClick={() => onChangeMealType('veg')}
            className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full font-medium hover:bg-emerald-100 transition-colors"
          >
            100% Pure Veg Kitchens
          </button>
        </div>

        <div className="flex items-center space-x-2 text-slate-600 font-medium">
          <span>Max Monthly Budget:</span>
          <span className="font-bold text-red-600">₹{maxPrice}</span>
          <input
            type="range"
            min="2000"
            max="4000"
            step="100"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            className="w-28 accent-red-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
