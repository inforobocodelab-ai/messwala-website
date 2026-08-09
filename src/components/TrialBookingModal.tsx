import React, { useState } from 'react';
import { TIFFIN_PROVIDERS } from '../data/mockData';
import { Check, ShieldCheck, MapPin, Calendar, Clock, Tag, Sparkles, CheckCircle2 } from 'lucide-react';

interface TrialBookingModalProps {
  tiffinId: string | null;
  onClose: () => void;
}

export const TrialBookingModal: React.FC<TrialBookingModalProps> = ({ tiffinId, onClose }) => {
  const tiffin = TIFFIN_PROVIDERS.find(t => t.id === tiffinId) || TIFFIN_PROVIDERS[0];

  const [planType, setPlanType] = useState<'trial' | 'weekly' | 'monthly'>('trial');
  const [mealTime, setMealTime] = useState<'both' | 'lunch' | 'dinner'>('both');
  const [dietPref, setDietPref] = useState<'veg' | 'non-veg'>('veg');
  
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [hostelAddress, setHostelAddress] = useState('');
  const [deliveryNote, setDeliveryNote] = useState('');
  const [promoCode, setPromoCode] = useState('MESSWALA50');
  const [discountApplied, setDiscountApplied] = useState(true);

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Price Calculation
  const basePrice =
    planType === 'trial'
      ? tiffin.pricePerMeal * (mealTime === 'both' ? 2 : 1)
      : planType === 'weekly'
      ? tiffin.weeklyPrice * (mealTime === 'both' ? 1 : 0.6)
      : tiffin.monthlyPrice * (mealTime === 'both' ? 1 : 0.65);

  const discountAmount = discountApplied ? (planType === 'monthly' ? 200 : 50) : 0;
  const finalPrice = Math.max(0, Math.round(basePrice - discountAmount));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 relative my-8 animate-in fade-in zoom-in-95 border border-orange-100 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold flex items-center justify-center z-10"
        >
          ✕
        </button>

        {isSubmitted ? (
          /* Success Screen */
          <div className="text-center py-10 space-y-4">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center text-3xl font-black shadow-inner">
              ✓
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Order Confirmed</span>
              <h3 className="text-2xl font-black text-slate-900">Your Tiffin is Booked!</h3>
              <p className="text-xs text-slate-500 font-medium max-w-sm mx-auto">
                Thank you <strong className="text-slate-800">{fullName}</strong>. {tiffin.name} has received your {planType} plan request for <strong className="text-slate-800">{hostelAddress}</strong>.
              </p>
            </div>

            <div className="bg-orange-50/80 p-4 rounded-2xl text-left text-xs space-y-2 border border-orange-100">
              <div className="flex justify-between font-bold text-slate-800">
                <span>Tiffin Provider:</span>
                <span className="text-red-600">{tiffin.name}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Estimated Delivery Window:</span>
                <span className="font-semibold text-slate-800">
                  {mealTime === 'dinner' ? '7:30 PM - 8:30 PM' : '12:00 PM - 1:00 PM'}
                </span>
              </div>
              <div className="flex justify-between font-bold text-slate-900 pt-2 border-t border-orange-200">
                <span>Total Paid:</span>
                <span className="text-emerald-600 text-sm">₹{finalPrice} (Cash/UPI on Delivery)</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400">
              A confirmation WhatsApp message with home chef {tiffin.chefName}'s direct hotline was sent to {phone}.
            </p>

            <button
              onClick={onClose}
              className="w-full py-3 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl"
            >
              Done & Return to Website
            </button>
          </div>
        ) : (
          /* Order Form */
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl overflow-hidden bg-orange-100 flex-shrink-0">
                <img src={tiffin.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider">
                  Book Tiffin Subscription
                </span>
                <h3 className="text-lg font-black text-slate-900 line-clamp-1">{tiffin.name}</h3>
                <p className="text-xs text-slate-500">{tiffin.area}, {tiffin.city}</p>
              </div>
            </div>

            {/* Plan Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">1. Choose Plan Duration</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPlanType('trial')}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    planType === 'trial'
                      ? 'border-red-500 bg-red-50/50 ring-2 ring-red-400/20'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">1-Day Trial</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">₹{tiffin.pricePerMeal}/meal</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPlanType('weekly')}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    planType === 'weekly'
                      ? 'border-red-500 bg-red-50/50 ring-2 ring-red-400/20'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">7-Day Pass</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">₹{tiffin.weeklyPrice}/wk</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPlanType('monthly')}
                  className={`p-3 rounded-2xl border text-left transition-all relative ${
                    planType === 'monthly'
                      ? 'border-red-500 bg-red-50/50 ring-2 ring-red-400/20'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <span className="absolute -top-2 right-2 bg-emerald-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                    Best Value
                  </span>
                  <div className="text-xs font-bold text-slate-900">30-Day Monthly</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">₹{tiffin.monthlyPrice}/mo</div>
                </button>
              </div>
            </div>

            {/* Meal Time & Diet */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Meal Preference</label>
                <select
                  value={mealTime}
                  onChange={(e: any) => setMealTime(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-xs font-bold rounded-xl p-2.5 focus:ring-2 focus:ring-red-400 focus:outline-none"
                >
                  <option value="both">Both Lunch & Dinner</option>
                  <option value="lunch">Lunch Only (11:30 AM)</option>
                  <option value="dinner">Dinner Only (7:30 PM)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Diet Type</label>
                <select
                  value={dietPref}
                  onChange={(e: any) => setDietPref(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-xs font-bold rounded-xl p-2.5 focus:ring-2 focus:ring-red-400 focus:outline-none"
                >
                  <option value="veg">100% Pure Veg</option>
                  {tiffin.type !== 'veg' && <option value="non-veg">Veg & Non-Veg</option>}
                </select>
              </div>
            </div>

            {/* Student Contact Info */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700">2. Delivery & Student Details</label>
              
              <div className="grid grid-cols-2 gap-2">
                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-2.5 focus:ring-2 focus:ring-red-400 focus:outline-none"
                />

                <input
                  required
                  type="tel"
                  placeholder="WhatsApp Mobile No."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-2.5 focus:ring-2 focus:ring-red-400 focus:outline-none"
                />
              </div>

              <input
                required
                type="text"
                placeholder="Hostel / Room No. & Street Address (e.g. Starlight PG, Room 204, Ram Nagar)"
                value={hostelAddress}
                onChange={(e) => setHostelAddress(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-2.5 focus:ring-2 focus:ring-red-400 focus:outline-none"
              />

              <input
                type="text"
                placeholder="Special Cooking Note (e.g., Less spice, no onion, extra roti)"
                value={deliveryNote}
                onChange={(e) => setDeliveryNote(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-2.5 focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>

            {/* Promo Code Pill */}
            <div className="flex items-center space-x-2 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
              <Tag className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="bg-transparent text-xs font-extrabold text-emerald-900 uppercase tracking-wider focus:outline-none flex-1"
              />
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-200/60 px-2 py-0.5 rounded">
                ₹{discountAmount} OFF APPLIED
              </span>
            </div>

            {/* Price Summary & Submit */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-bold">Total Amount</div>
                <div className="text-2xl font-black text-slate-900">
                  ₹{finalPrice}
                  {discountAmount > 0 && (
                    <span className="text-xs text-slate-400 line-through ml-2">
                      ₹{Math.round(basePrice)}
                    </span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="py-3 px-8 text-xs font-extrabold text-white bg-red-500 hover:bg-red-600 rounded-full shadow-lg shadow-red-500/25 transition-all"
              >
                Confirm & Pay on Delivery →
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
