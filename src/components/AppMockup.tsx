import React, { useState } from 'react';
import { 
  MapPin, Search, Heart, Bell, ShieldCheck, Star, ChevronRight, 
  Home, Bookmark, Calendar, Gift, User, Sparkles, Copy, Check, 
  Share2, Clock, CheckCircle2, PauseCircle, PlayCircle, Settings, 
  HelpCircle, Utensils, MessageCircle, AlertCircle
} from 'lucide-react';
import { TIFFIN_PROVIDERS } from '../data/mockData';

type TabType = 'dashboard' | 'favorites' | 'bookings' | 'refer' | 'account';

interface AppMockupProps {
  selectedCity: string;
  onBookTrial: (tiffinId: string) => void;
}

export const AppMockup: React.FC<AppMockupProps> = ({ selectedCity, onBookTrial }) => {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>(['tiffin-1', 'tiffin-2']);
  const [copied, setCopied] = useState(false);
  const [isMealPaused, setIsMealPaused] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [trackingAlert, setTrackingAlert] = useState<string | null>(null);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(f => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard?.writeText('MESSWALA100');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredTiffins = TIFFIN_PROVIDERS.filter(t => {
    const matchCity = t.city.toLowerCase() === selectedCity.toLowerCase() || t.city === 'Nagpur';
    const matchSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || t.area.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCity && matchSearch;
  });

  const favoriteTiffins = TIFFIN_PROVIDERS.filter(t => favorites.includes(t.id));

  return (
    <div className="relative mx-auto w-[330px] sm:w-[360px] h-[670px] bg-slate-900 rounded-[48px] p-3 shadow-2xl shadow-orange-950/20 ring-1 ring-slate-800 border-4 border-slate-800 flex flex-col justify-between font-sans select-none transform hover:rotate-1 transition-all duration-300">
      {/* Top Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-6 bg-slate-900 rounded-b-2xl z-30 flex items-center justify-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-slate-950 border border-slate-800" />
        <div className="w-10 h-1.5 rounded-full bg-slate-800" />
      </div>

      <div className="w-full h-full bg-[#FAF8F5] rounded-[38px] overflow-hidden flex flex-col relative pt-7">
        
        {/* Dynamic App Header */}
        <div className="px-4 py-2.5 bg-white/90 backdrop-blur-md border-b border-orange-100 flex items-center justify-between z-20">
          {activeTab === 'dashboard' && (
            <>
              <div className="flex items-center space-x-1.5 cursor-pointer">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span className="text-xs font-bold text-slate-800 truncate max-w-[170px]">Chhaoni Road, {selectedCity}...</span>
              </div>
              <div className="flex items-center">
                <Bell className="w-4 h-4 text-slate-600 cursor-pointer hover:text-red-500 transition-colors" />
              </div>
            </>
          )}

          {activeTab === 'favorites' && (
            <>
              <div className="flex items-center space-x-1.5">
                <Bookmark className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                <span className="text-xs font-bold text-slate-800">Saved Kitchens ({favoriteTiffins.length})</span>
              </div>
              <span className="text-[10px] bg-red-50 text-red-600 px-2 py-0.5 rounded-full font-semibold">Favorites</span>
            </>
          )}

          {activeTab === 'bookings' && (
            <>
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5 text-red-500" />
                <span className="text-xs font-bold text-slate-800">My Subscriptions & Orders</span>
              </div>
              <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> 1 Active
              </span>
            </>
          )}

          {activeTab === 'refer' && (
            <>
              <div className="flex items-center space-x-1.5">
                <Gift className="w-3.5 h-3.5 text-red-500" />
                <span className="text-xs font-bold text-slate-800">Refer & Earn</span>
              </div>
              <span className="text-[10px] bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full font-bold flex items-center gap-0.5">
                <Sparkles className="w-3 h-3 text-amber-500" /> ₹300 Won
              </span>
            </>
          )}

          {activeTab === 'account' && (
            <>
              <div className="flex items-center space-x-1.5">
                <User className="w-3.5 h-3.5 text-red-500" />
                <span className="text-xs font-bold text-slate-800">My Profile</span>
              </div>
              <Settings className="w-4 h-4 text-slate-600 cursor-pointer hover:text-red-500 transition-colors" />
            </>
          )}
        </div>

        {/* TAB 1: DASHBOARD VIEW */}
        {activeTab === 'dashboard' && (
          <>
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
          </>
        )}

        {/* TAB 2: FAVORITES VIEW */}
        {activeTab === 'favorites' && (
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 scrollbar-thin">
            {favoriteTiffins.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-red-400">
                  <Bookmark className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">No Favorites Yet</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Tap the heart icon on any tiffin kitchen card in the dashboard to save it here.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                >
                  Explore Kitchens
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between px-1">
                  <span className="text-[11px] font-bold text-slate-700">Quick Re-order Favorites</span>
                  <span className="text-[10px] text-slate-400">{favoriteTiffins.length} saved</span>
                </div>

                {favoriteTiffins.map((tiffin) => (
                  <div
                    key={tiffin.id}
                    className="bg-white rounded-2xl p-3 border border-orange-100/80 shadow-xs hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-orange-100 flex-shrink-0 relative">
                        <img src={tiffin.image} alt={tiffin.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <button
                        onClick={(e) => toggleFavorite(tiffin.id, e)}
                        className="p-1.5 rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                        title="Remove from favorites"
                      >
                        <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                      </button>
                    </div>

                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-xs font-extrabold text-slate-900">{tiffin.name}</h4>
                        <div className="flex items-center space-x-1 text-[10px] text-slate-500 mt-0.5">
                          <span className={`w-2 h-2 rounded-xs inline-block ${tiffin.type === 'veg' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                          <span className="capitalize">{tiffin.type}</span>
                          <span>•</span>
                          <span className="truncate max-w-[110px]">{tiffin.area}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-xs font-black text-slate-900">₹{tiffin.monthlyPrice}</div>
                        <div className="text-[9px] font-medium text-slate-400">per month</div>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 text-[10px] font-bold text-slate-600">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {tiffin.rating} ({tiffin.reviewCount})
                      </div>
                      <button
                        onClick={() => onBookTrial(tiffin.id)}
                        className="py-1.5 px-3 bg-red-500 hover:bg-red-600 text-white font-bold text-[10px] rounded-lg shadow-xs transition-colors flex items-center gap-1"
                      >
                        <span>Book Trial</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}

        {/* TAB 3: BOOKINGS VIEW */}
        {activeTab === 'bookings' && (
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 scrollbar-thin">
            {/* Active Subscription Card */}
            <div className="bg-white rounded-2xl p-3.5 border border-emerald-200/80 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl-lg uppercase tracking-wider">
                Active Plan
              </div>

              <div className="flex items-center space-x-2.5 mb-2">
                <div className="w-9 h-9 rounded-xl bg-orange-100 overflow-hidden flex-shrink-0">
                  <img src={TIFFIN_PROVIDERS[0].image} alt="Tiffin" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900">{TIFFIN_PROVIDERS[0].name}</h4>
                  <p className="text-[10px] text-slate-500 font-medium">Monthly Veg Plan • 22 Days Left</p>
                </div>
              </div>

              {/* Status Alert */}
              <div className={`p-2 rounded-xl text-[10px] font-medium flex items-center justify-between ${
                isMealPaused ? 'bg-amber-50 text-amber-800 border border-amber-200' : 'bg-emerald-50 text-emerald-800 border border-emerald-100'
              }`}>
                <div className="flex items-center space-x-1.5">
                  <span className={`w-2 h-2 rounded-full ${isMealPaused ? 'bg-amber-500' : 'bg-emerald-500 animate-pulse'}`} />
                  <span>{isMealPaused ? 'Meal Paused for Today' : "Today's Lunch: Arriving by 1:15 PM"}</span>
                </div>
                <Clock className="w-3.5 h-3.5 opacity-60" />
              </div>

              {/* Today's Menu Highlight */}
              <div className="mt-2.5 p-2 bg-slate-50 rounded-xl text-[10px] text-slate-700">
                <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-0.5 flex items-center gap-1">
                  <Utensils className="w-2.5 h-2.5 text-red-500" /> Today's Lunch Menu
                </div>
                <div className="font-semibold text-slate-800 truncate">Paneer Masala + 4 Phulkas + Dal Fry + Jeera Rice</div>
              </div>

              {/* Interactive Actions */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => setIsMealPaused(!isMealPaused)}
                  className={`flex-1 py-1.5 px-2 rounded-xl text-[10px] font-bold flex items-center justify-center gap-1 transition-colors ${
                    isMealPaused 
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {isMealPaused ? <PlayCircle className="w-3.5 h-3.5" /> : <PauseCircle className="w-3.5 h-3.5" />}
                  <span>{isMealPaused ? 'Resume Meal' : 'Pause Today'}</span>
                </button>

                <button
                  onClick={() => {
                    setTrackingAlert("Rider assigned: Santosh Kumar (KA-04-E-1234) • 1.1 km away");
                    setTimeout(() => setTrackingAlert(null), 3500);
                  }}
                  className="flex-1 py-1.5 px-2 bg-red-500 hover:bg-red-600 text-white rounded-xl text-[10px] font-bold flex items-center justify-center gap-1 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Track Dabba</span>
                </button>
              </div>

              {trackingAlert && (
                <div className="mt-2 p-1.5 bg-slate-900 text-white text-[9px] rounded-lg text-center animate-fade-in">
                  🛵 {trackingAlert}
                </div>
              )}
            </div>

            {/* Delivery Schedule Preview */}
            <div className="bg-white rounded-2xl p-3 border border-orange-100/80 shadow-xs">
              <div className="text-[10px] font-bold text-slate-700 mb-2 flex items-center justify-between">
                <span>Weekly Delivery Calendar</span>
                <span className="text-[9px] text-emerald-600 font-medium">100% On-time</span>
              </div>
              <div className="grid grid-cols-6 gap-1 text-center">
                {['M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={i} className={`py-1.5 rounded-lg text-[9px] font-bold ${i < 3 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : i === 3 ? 'bg-red-50 text-red-600 border border-red-200 font-black' : 'bg-slate-50 text-slate-400'}`}>
                    <div>{day}</div>
                    <div className="text-[8px] mt-0.5">{i < 3 ? '✓' : i === 3 ? 'Today' : '•'}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Order History */}
            <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-800">Past Orders</span>
                <span className="text-[9px] text-slate-400">1 completed</span>
              </div>
              <div className="flex items-center justify-between text-[10px]">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 font-bold text-[10px]">
                    1D
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">1-Day Trial Meal</div>
                    <div className="text-slate-400 text-[9px]">Delivered Yesterday • ₹79</div>
                  </div>
                </div>
                <button
                  onClick={() => onBookTrial('tiffin-2')}
                  className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg text-[9px] transition-colors"
                >
                  Reorder
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: REFER VIEW */}
        {activeTab === 'refer' && (
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 scrollbar-thin">
            {/* Promo Card */}
            <div className="bg-gradient-to-br from-red-500 via-red-600 to-orange-500 rounded-2xl p-4 text-white shadow-md relative overflow-hidden">
              <div className="relative z-10">
                <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide inline-block mb-1.5">
                  Messwala Buddy Pass
                </span>
                <h3 className="text-sm font-black leading-tight">Refer Friends & Eat Free!</h3>
                <p className="text-[10px] text-red-100 mt-1 leading-normal">
                  Give ₹100 off on their first tiffin plan, and get ₹100 instant wallet credits!
                </p>
              </div>
              <Gift className="w-20 h-20 text-white/10 absolute -bottom-4 -right-3 pointer-events-none" />
            </div>

            {/* Referral Code Box */}
            <div className="bg-white rounded-2xl p-3 border border-orange-100/80 shadow-xs">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Your Referral Code</div>
              <div className="flex items-center justify-between p-2 bg-slate-50 border border-slate-200 border-dashed rounded-xl">
                <span className="font-mono font-black text-sm text-red-600 tracking-wider">MESSWALA100</span>
                <button
                  onClick={handleCopyCode}
                  className="px-2.5 py-1 bg-red-500 hover:bg-red-600 text-white text-[10px] font-bold rounded-lg flex items-center gap-1 transition-colors active:scale-95"
                >
                  {copied ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div className="mt-2.5">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent("Hey! Use my code MESSWALA100 to get ₹100 OFF on your fresh homemade tiffin from Messwala: https://messwala.in")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 px-3 bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Referral Reward Stats */}
            <div className="bg-white rounded-2xl p-3 border border-orange-100/80 shadow-xs">
              <div className="text-[10px] font-bold text-slate-700 mb-2">Your Reward Stats</div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 bg-orange-50/60 rounded-xl">
                  <div className="text-sm font-black text-orange-600">3</div>
                  <div className="text-[8px] font-medium text-slate-500">Friends Joined</div>
                </div>
                <div className="p-2 bg-emerald-50/60 rounded-xl">
                  <div className="text-sm font-black text-emerald-600">₹300</div>
                  <div className="text-[8px] font-medium text-slate-500">Wallet Cash</div>
                </div>
                <div className="p-2 bg-red-50/60 rounded-xl">
                  <div className="text-sm font-black text-red-600">4 Meals</div>
                  <div className="text-[8px] font-medium text-slate-500">Free Earned</div>
                </div>
              </div>
            </div>

            {/* How It Works Steps */}
            <div className="bg-white rounded-2xl p-3 border border-slate-100 text-[10px] space-y-2">
              <div className="font-bold text-slate-800 text-[11px]">How it works:</div>
              <div className="flex items-start space-x-2">
                <span className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5">1</span>
                <span className="text-slate-600">Send your invite code to friends or hostel mates</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5">2</span>
                <span className="text-slate-600">They get ₹100 off their first weekly or monthly meal plan</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5">3</span>
                <span className="text-slate-600">₹100 is credited to your Messwala Wallet immediately!</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: ACCOUNT VIEW */}
        {activeTab === 'account' && (
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 scrollbar-thin">
            {/* User Profile Summary */}
            <div className="bg-white rounded-2xl p-3.5 border border-orange-100/80 shadow-xs flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-500 to-orange-400 text-white font-black text-lg flex items-center justify-center shadow-xs">
                RD
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-1.5">
                  <h4 className="text-xs font-black text-slate-900 truncate">Rahul Deshmukh</h4>
                  <span className="bg-amber-100 text-amber-800 text-[8px] font-bold px-1.5 py-0.2 rounded">PRO</span>
                </div>
                <p className="text-[10px] text-slate-500 font-medium truncate">+91 98231 45678</p>
                <p className="text-[9px] text-slate-400 flex items-center gap-0.5 mt-0.5">
                  <MapPin className="w-2.5 h-2.5 text-red-400" /> VNIT Campus Hostel, {selectedCity}
                </p>
              </div>
            </div>

            {/* Wallet Balance Card */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-3 shadow-xs">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-slate-300 font-medium">Messwala Wallet Cash</span>
                <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded-full text-[9px]">Active</span>
              </div>
              <div className="text-lg font-black mt-1">₹300.00</div>
              <p className="text-[8px] text-slate-400 mt-0.5">Applies automatically on your next renewal or booking</p>
            </div>

            {/* Settings & Preferences */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden text-[10px]">
              <div className="p-3 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-800">Saved Address</div>
                  <div className="text-slate-500 text-[9px]">Hostel Block B, Room 204, VNIT</div>
                </div>
                <span className="text-red-500 font-bold text-[9px] cursor-pointer hover:underline">Edit</span>
              </div>

              <div className="p-3 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-800">Dietary Preference</div>
                  <div className="text-slate-500 text-[9px]">Pure Vegetarian (No Egg)</div>
                </div>
                <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold text-[8px]">Veg</span>
              </div>

              <div className="p-3 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-800">Meal Reminders</div>
                  <div className="text-slate-500 text-[9px]">Notify before lunch & dinner dispatch</div>
                </div>
                <button 
                  onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                  className={`w-8 h-4 rounded-full transition-colors relative flex items-center ${notificationsEnabled ? 'bg-red-500' : 'bg-slate-300'}`}
                >
                  <span className={`w-3 h-3 rounded-full bg-white transition-transform ${notificationsEnabled ? 'translate-x-4' : 'translate-x-0.5'}`} />
                </button>
              </div>

              <a
                href="https://wa.me/919999999999?text=Hello%20Messwala%20Support"
                target="_blank"
                rel="noreferrer"
                className="p-3 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer text-slate-700"
              >
                <div className="flex items-center space-x-2">
                  <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-bold text-slate-800">WhatsApp Help & Support</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* Sign Out Button */}
            <button
              onClick={() => setActiveTab('dashboard')}
              className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-[10px] rounded-xl transition-colors"
            >
              Switch Profile / Back to Home
            </button>
          </div>
        )}

        {/* BOTTOM NAVIGATION BAR */}
        <div className="px-3 py-2 bg-white border-t border-slate-100 flex items-center justify-between text-[10px] font-medium text-slate-400 z-20">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex flex-col items-center cursor-pointer transition-colors ${
              activeTab === 'dashboard' ? 'text-red-500 font-bold' : 'hover:text-slate-700'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab('favorites')}
            className={`flex flex-col items-center cursor-pointer relative transition-colors ${
              activeTab === 'favorites' ? 'text-red-500 font-bold' : 'hover:text-slate-700'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${activeTab === 'favorites' ? 'fill-red-500' : ''}`} />
            <span>Favorites</span>
            {favoriteTiffins.length > 0 && (
              <span className="absolute -top-1 right-1 w-3.5 h-3.5 bg-red-500 text-white rounded-full text-[8px] flex items-center justify-center font-bold">
                {favoriteTiffins.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('bookings')}
            className={`flex flex-col items-center cursor-pointer transition-colors ${
              activeTab === 'bookings' ? 'text-red-500 font-bold' : 'hover:text-slate-700'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Bookings</span>
          </button>

          <button
            onClick={() => setActiveTab('refer')}
            className={`flex flex-col items-center cursor-pointer transition-colors ${
              activeTab === 'refer' ? 'text-red-500 font-bold' : 'hover:text-slate-700'
            }`}
          >
            <Gift className="w-4 h-4" />
            <span>Refer</span>
          </button>

          <button
            onClick={() => setActiveTab('account')}
            className={`flex flex-col items-center cursor-pointer transition-colors ${
              activeTab === 'account' ? 'text-red-500 font-bold' : 'hover:text-slate-700'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Account</span>
          </button>
        </div>

      </div>
    </div>
  );
};
