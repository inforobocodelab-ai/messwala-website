import React, { useState } from 'react';
import { HostelListing } from '../types';
import { HOSTEL_LISTINGS } from '../data/mockData';
import { Building2, Shield, Wifi, Check, MapPin, Star, Calendar, Sparkles } from 'lucide-react';

interface HostelListingsProps {
  selectedCity: string;
}

export const HostelListings: React.FC<HostelListingsProps> = ({ selectedCity }) => {
  const [visitingHostel, setVisitingHostel] = useState<HostelListing | null>(null);
  const [visitedSuccess, setVisitedSuccess] = useState(false);

  const filteredHostels = HOSTEL_LISTINGS.filter(
    h => h.city.toLowerCase() === selectedCity.toLowerCase() || h.city === 'Nagpur'
  );

  const handleScheduleVisit = (e: React.FormEvent) => {
    e.preventDefault();
    setVisitedSuccess(true);
    setTimeout(() => {
      setVisitedSuccess(false);
      setVisitingHostel(null);
    }, 2500);
  };

  return (
    <section id="hostel-section" className="py-16 bg-white border-y border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold mb-3">
            <Building2 className="w-3.5 h-3.5 text-amber-700" />
            <span>Zero Brokerage Student Housing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
            Verified PGs & Hostels with <span className="text-red-500">Messwala Food</span>
          </h2>
          <p className="text-slate-600 text-sm font-medium mt-2">
            No sticky hostel mess contracts! Stay in comfortable PGs with Wi-Fi & AC, and choose your own home cook on Messwala.
          </p>
        </div>

        {/* Hostel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredHostels.map((hostel) => (
            <div
              key={hostel.id}
              className="bg-[#FAF6F0] rounded-3xl overflow-hidden border border-orange-200/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={hostel.image}
                  alt={hostel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <span className="absolute top-3 left-3 px-3 py-1 bg-slate-900/90 text-white font-extrabold text-[10px] uppercase rounded-full backdrop-blur-xs">
                  {hostel.type} PG
                </span>

                <span className="absolute top-3 right-3 px-2.5 py-1 bg-emerald-600 text-white font-bold text-[10px] rounded-full shadow-xs">
                  Zero Brokerage
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-slate-500 font-semibold flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-red-500" />
                      {hostel.area}
                    </span>
                    <span className="font-extrabold text-slate-800 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      {hostel.rating}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-red-600 transition-colors">
                    {hostel.name}
                  </h3>

                  <p className="text-xs text-red-600 font-bold mt-1">
                    📍 {hostel.distanceToMajorCollege}
                  </p>

                  {/* Amenities Pills */}
                  <div className="mt-3 space-y-1">
                    {hostel.amenities.slice(0, 3).map((a, i) => (
                      <div key={i} className="text-[11px] font-medium text-slate-600 flex items-center space-x-1.5">
                        <Check className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                        <span className="truncate">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Action */}
                <div className="pt-3 border-t border-orange-200/60 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Rent From</div>
                    <div className="text-xl font-black text-slate-900">
                      ₹{hostel.monthlyRent}<span className="text-xs text-slate-400 font-normal">/mo</span>
                    </div>
                  </div>

                  {/* <button
                    onClick={() => setVisitingHostel(hostel)}
                    className="py-2 px-3 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs"
                  >
                    Schedule Visit
                  </button> */}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Schedule Visit Modal */}
      {visitingHostel && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setVisitingHostel(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-600 font-bold flex items-center justify-center"
            >
              ✕
            </button>

            {visitedSuccess ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-black text-slate-900">Visit Scheduled!</h3>
                <p className="text-xs text-slate-600">
                  Our PG Warden from {visitingHostel.name} will call you on WhatsApp within 15 minutes to confirm timing.
                </p>
              </div>
            ) : (
              <form onSubmit={handleScheduleVisit} className="space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-black text-slate-900">Schedule PG Visit</h3>
                  <p className="text-xs text-slate-500">{visitingHostel.name} • {visitingHostel.area}</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number (WhatsApp)</label>
                  <input
                    required
                    type="tel"
                    placeholder="e.g. 9876543210"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date</label>
                  <input
                    required
                    type="date"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-bold text-white bg-red-500 hover:bg-red-600 rounded-xl shadow-md"
                >
                  Confirm Free Visit Request
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
