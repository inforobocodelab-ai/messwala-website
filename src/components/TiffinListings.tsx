import React, { useState } from 'react';
import { TiffinProvider } from '../types';
import { Star, ShieldCheck, MapPin, Clock, ChefHat, Calendar, ChevronRight, CheckCircle2, PhoneCall, Sparkles, AlertCircle } from 'lucide-react';

interface TiffinListingsProps {
  tiffins: TiffinProvider[];
  selectedCity: string;
  onBookTrial: (tiffinId: string) => void;
}

export const TiffinListings: React.FC<TiffinListingsProps> = ({
  tiffins,
  selectedCity,
  onBookTrial,
}) => {
  const [selectedTiffinForMenu, setSelectedTiffinForMenu] = useState<TiffinProvider | null>(null);

  return (
    <section id="tiffin-section" className="py-16 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Home Kitchens</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
              Popular Tiffin Services in <span className="text-red-500">{selectedCity}</span>
            </h2>
            <p className="text-slate-600 text-sm font-medium mt-2 max-w-2xl">
              Fresh, home-cooked food prepared by passionate local mothers & mess owners. Zero soda, zero preservatives, 100% authentic swad.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs font-bold text-slate-500">
            Showing <span className="text-slate-900">{tiffins.length}</span> kitchens ready for delivery
          </div>
        </div>

        {/* Listings Grid */}
        {tiffins.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-slate-200">
            <AlertCircle className="w-12 h-12 text-orange-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No home kitchens match your current filters</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mt-1">
              Try adjusting your area, budget, or dietary preference to explore nearby tiffin services in {selectedCity}.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiffins.map((tiffin) => (
              <div
                key={tiffin.id}
                className="bg-white rounded-3xl overflow-hidden border border-orange-100/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Banner & Badges */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={tiffin.image}
                    alt={tiffin.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md shadow-xs ${
                        tiffin.type === 'veg'
                          ? 'bg-emerald-900/90 text-emerald-200 border border-emerald-500/30'
                          : 'bg-red-900/90 text-red-200 border border-red-500/30'
                      }`}
                    >
                      {tiffin.type === 'veg' ? 'Pure Veg' : 'Veg & Non-Veg'}
                    </span>

                    {tiffin.isFeatured && (
                      <span className="px-3 py-1 bg-amber-500/90 text-slate-950 font-black text-[10px] uppercase rounded-full shadow-xs backdrop-blur-xs">
                        ★ Bestseller Mess
                      </span>
                    )}
                  </div>

                  {/* Rating Pill */}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-md flex items-center space-x-1.5 text-xs font-black text-slate-900">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{tiffin.rating}</span>
                    <span className="text-slate-400 font-normal">({tiffin.reviewCount})</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-red-500" />
                      <span>{tiffin.area}, {tiffin.city}</span>
                      <span>•</span>
                      <span className="text-red-600">{tiffin.distance}</span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-red-600 transition-colors">
                      {tiffin.name}
                    </h3>
                    
                    <p className="text-xs font-medium text-slate-500 italic mt-1 line-clamp-2">
                      "{tiffin.tagline}"
                    </p>

                    {/* Chef Info */}
                    <div className="mt-3 flex items-center space-x-2 text-xs bg-orange-50/70 p-2.5 rounded-2xl border border-orange-100 text-slate-700">
                      <ChefHat className="w-4 h-4 text-orange-600 flex-shrink-0" />
                      <span className="font-semibold text-slate-800">
                        {tiffin.chefName} <span className="text-slate-400 font-normal">({tiffin.chefExperience})</span>
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {tiffin.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">
                          ✓ {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Breakdown */}
                  {/* <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400">Monthly Plan</div>
                      <div className="text-2xl font-black text-slate-900">
                        ₹{tiffin.monthlyPrice}<span className="text-xs text-slate-400 font-normal">/mo</span>
                      </div>
                      <div className="text-[10px] text-emerald-600 font-bold">₹{tiffin.pricePerMeal}/meal</div>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] uppercase font-bold text-slate-400">Weekly Trial</div>
                      <div className="text-lg font-extrabold text-slate-800">
                        ₹{tiffin.weeklyPrice}<span className="text-xs text-slate-400 font-normal">/wk</span>
                      </div>
                    </div>
                  </div> */}

                  {/* Action Buttons */}
                  {/* <div className="grid grid-cols-2 gap-2 pt-2">
                    <button
                      onClick={() => setSelectedTiffinForMenu(tiffin)}
                      className="py-2.5 px-3 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all flex items-center justify-center space-x-1"
                    >
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>View Menu</span>
                    </button>

                    <button
                      // onClick={() => onBookTrial(tiffin.id)}
                      className="py-2.5 px-3 text-xs font-bold text-white bg-red-500 hover:bg-red-600 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-1"
                    >
                      <span>Book Trial</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div> */}

                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* View Menu Modal */}
      {selectedTiffinForMenu && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95">
            
            <button
              onClick={() => setSelectedTiffinForMenu(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold flex items-center justify-center"
            >
              ✕
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-2xl overflow-hidden bg-orange-100 flex-shrink-0">
                <img src={selectedTiffinForMenu.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">{selectedTiffinForMenu.name}</h3>
                <p className="text-xs text-slate-500 font-medium">{selectedTiffinForMenu.area}, {selectedTiffinForMenu.city} • {selectedTiffinForMenu.timing}</p>
              </div>
            </div>

            <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 text-xs text-orange-950 font-medium mb-6">
              💡 <span className="font-bold">Weekly Rotation Promise:</span> Menu items are rotated daily so you never get bored with the menu!
            </div>

            {/* Menu Items Table / Accordion */}
            <div className="space-y-4">
              {selectedTiffinForMenu.menu.map((m, idx) => (
                <div key={idx} className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
                  <div className="font-extrabold text-sm text-red-600 mb-2 border-b border-slate-200 pb-1">
                    {m.day} Menu
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="bg-white p-3 rounded-xl border border-slate-100">
                      <div className="font-bold text-slate-900 mb-1 flex items-center gap-1">
                        <span>☀️ Lunch (11:30 AM - 2:00 PM)</span>
                      </div>
                      <p className="text-slate-700 font-medium">Main: <span className="font-bold">{m.lunch.main}</span></p>
                      <p className="text-slate-500">Roti: {m.lunch.roti}</p>
                      <p className="text-slate-500">Dal & Rice: {m.lunch.dal}, {m.lunch.rice}</p>
                      {m.lunch.extra && <p className="text-emerald-600 font-semibold mt-1">Extra: {m.lunch.extra}</p>}
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-100">
                      <div className="font-bold text-slate-900 mb-1 flex items-center gap-1">
                        <span>🌙 Dinner (7:30 PM - 10:00 PM)</span>
                      </div>
                      <p className="text-slate-700 font-medium">Main: <span className="font-bold">{m.dinner.main}</span></p>
                      <p className="text-slate-500">Roti: {m.dinner.roti}</p>
                      <p className="text-slate-500">Dal & Rice: {m.dinner.dal}, {m.dinner.rice}</p>
                      {m.dinner.extra && <p className="text-emerald-600 font-semibold mt-1">Extra: {m.dinner.extra}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
              <div>
                <div className="text-xs text-slate-400 font-medium">Monthly Subscription</div>
                <div className="text-2xl font-black text-slate-900">₹{selectedTiffinForMenu.monthlyPrice}/mo</div>
              </div>

              <button
                onClick={() => {
                  const id = selectedTiffinForMenu.id;
                  setSelectedTiffinForMenu(null);
                  onBookTrial(id);
                }}
                className="py-3 px-6 text-sm font-bold text-white bg-red-500 hover:bg-red-600 rounded-full shadow-lg"
              >
                Book 1-Day Trial Meal (₹{selectedTiffinForMenu.pricePerMeal})
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
