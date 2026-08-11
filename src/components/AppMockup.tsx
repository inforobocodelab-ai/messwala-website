import React, { useState } from 'react';
import { MapPin, Search, Heart, Bell, ShieldCheck, Star, ChevronRight, Home, Bookmark, Calendar, Gift, User, Sparkles } from 'lucide-react';
import { TIFFIN_PROVIDERS } from '../data/mockData';

interface AppMockupProps {
  selectedCity: string;
  onBookTrial: (tiffinId: string) => void;
}

export const AppMockup: React.FC<AppMockupProps> = ({ selectedCity, onBookTrial }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>(['tiffin-1']);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (favorites.includes(id)) setFavorites(favorites.filter(f => f !== id));
    else setFavorites([...favorites, id]);
  };

  const filteredTiffins = TIFFIN_PROVIDERS.filter(t => {
    const matchCity = t.city.toLowerCase() === selectedCity.toLowerCase() || t.city === 'Nagpur';
    const matchSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || t.area.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCity && matchSearch;
  });

  return (
    <div className="relative mx-auto w-[330px] sm:w-[360px] h-[670px] bg-slate-900 rounded-[48px] p-3 shadow-2xl shadow-orange-950/20 ring-1 ring-slate-800 border-4 border-slate-800 flex flex-col justify-between font-sans select-none transform hover:rotate-1 transition-all duration-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-6 bg-slate-900 rounded-b-2xl z-30 flex items-center justify-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-slate-950 border border-slate-800" />
        <div className="w-10 h-1.5 rounded-full bg-slate-800" />
      </div>

      <div className="w-full h-full bg-[#FAF8F5] rounded-[38px] overflow-hidden flex flex-col relative pt-7">
        <div className="px-4 py-2.5 bg-white/90 backdrop-blur-md border-b border-orange-100 flex items-center justify-between z-20">
          <div className="flex items-center space-x-1.5 cursor-pointer">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            <span className="text-xs font-bold text-slate-800 truncate max-w-[170px]">Chhaoni Road, {selectedCity}...</span>
          </div>
          <div className="flex items-center">
            <Bell className="w-4 h-4 text-slate-600" />
          </div>
        </div>

        <div className="px-4 pt-3 pb-2 bg-white">
          <div className="relative flex items-center">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3" />
            <input
              type="text"
              placeholder="Search for homemade meals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-8 py-2 text-xs bg-slate-100/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-red-400"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 scrollbar-thin">
          {filteredTiffins.map((tiffin) => (
            <div
              key={tiffin.id}
              onClick={() => onBookTrial(tiffin.id)}
              className="bg-white rounded-2xl p-3 border border-orange-100/80 shadow-xs hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-orange-100 flex-shrink-0 relative">
                  <img src={tiffin.image} alt={tiffin.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <button
                  onClick={(e) => toggleFavorite(tiffin.id, e)}
                  className="p-1 rounded-full text-slate-300 hover:text-red-500 transition-colors"
                  aria-label="Save to favorites"
                >
                  <Heart className={`w-4 h-4 ${favorites.includes(tiffin.id) ? 'fill-red-500 text-red-500' : ''}`} />
                </button>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 line-clamp-1 group-hover:text-red-600 transition-colors">{tiffin.name}</h4>
                  <div className="flex items-center space-x-1 text-[10px] text-slate-500 mt-0.5">
                    <span className={`w-2 h-2 rounded-xs inline-block ${tiffin.type === 'veg' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                    <span className="capitalize">{tiffin.type}</span>
                    <span>•</span>
                    <span className="truncate max-w-[110px]">{tiffin.area}</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-black text-slate-900">₹{tiffin.weeklyPrice}</div>
                  <div className="text-[9px] font-medium text-slate-400">per meal/week</div>
                </div>
              </div>

              <div className="mt-2.5 pt-2 border-t border-dashed border-slate-100 flex items-center justify-between text-[10px]">
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" /> 100% Home Cooked
                </span>
                <span className="font-bold text-slate-600 flex items-center gap-0.5"><Star className="w-3 h-3 fill-amber-400 text-amber-400" />{tiffin.rating}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-white border-t border-slate-100 z-10">
          <button
            onClick={() => onBookTrial('tiffin-1')}
            className="w-full py-2.5 px-4 bg-red-500 hover:bg-red-600 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-between active:scale-98 transition-transform"
          >
            <span>Book Now • From ₹720/week</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="px-4 py-2 bg-white border-t border-slate-100 flex items-center justify-between text-[10px] font-medium text-slate-400 z-20">
          <div className="flex flex-col items-center text-red-500 font-bold cursor-pointer">
            <Home className="w-4 h-4" />
            <span>Dashboard</span>
          </div>
          <div className="flex flex-col items-center hover:text-slate-700 cursor-pointer">
            <Bookmark className="w-4 h-4" />
            <span>Favorites</span>
          </div>
          <div className="flex flex-col items-center hover:text-slate-700 cursor-pointer">
            <Calendar className="w-4 h-4" />
            <span>Bookings</span>
          </div>
          <div className="flex flex-col items-center hover:text-slate-700 cursor-pointer">
            <Gift className="w-4 h-4" />
            <span>Refer</span>
          </div>
          <div className="flex flex-col items-center hover:text-slate-700 cursor-pointer">
            <User className="w-4 h-4" />
            <span>Account</span>
          </div>
        </div>
      </div>
    </div>
  );
};
