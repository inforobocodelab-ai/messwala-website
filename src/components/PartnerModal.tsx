import React, { useState } from 'react';
import { ChefHat, Building2, CheckCircle2 } from 'lucide-react';

interface PartnerModalProps {
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ onClose }) => {
  const [partnerType, setPartnerType] = useState<'cook' | 'hostel'>('cook');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Nagpur');
  const [area, setArea] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative my-8 animate-in fade-in zoom-in-95 border border-orange-100 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold flex items-center justify-center z-10"
        >
          ✕
        </button>

        {isSubmitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center text-3xl font-black">
              ✓
            </div>
            <h3 className="text-2xl font-black text-slate-900">Application Submitted!</h3>
            <p className="text-xs text-slate-600">
              Our Messwala Partner Onboarding Manager in {city} will visit your kitchen/hostel within 24 hours for quality inspection & account setup.
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 text-xs font-bold text-white bg-slate-900 rounded-xl"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center space-y-1">
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider">
                Become a Messwala Partner
              </span>
              <h3 className="text-xl font-black text-slate-900">Partner Registration</h3>
              <p className="text-xs text-slate-500">
                Join 450+ verified home cooks and hostel owners growing with Messwala.
              </p>
            </div>

            {/* Type Selector */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setPartnerType('cook')}
                className={`p-3 rounded-2xl border text-center transition-all ${
                  partnerType === 'cook'
                    ? 'border-red-500 bg-red-50/50 font-bold text-slate-900'
                    : 'border-slate-200 bg-slate-50 text-slate-600'
                }`}
              >
                <ChefHat className="w-5 h-5 text-red-500 mx-auto mb-1" />
                <div className="text-xs">Home Chef / Mess</div>
              </button>

              <button
                type="button"
                onClick={() => setPartnerType('hostel')}
                className={`p-3 rounded-2xl border text-center transition-all ${
                  partnerType === 'hostel'
                    ? 'border-red-500 bg-red-50/50 font-bold text-slate-900'
                    : 'border-slate-200 bg-slate-50 text-slate-600'
                }`}
              >
                <Building2 className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                <div className="text-xs">PG / Hostel Owner</div>
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
              <input
                required
                type="text"
                placeholder="e.g. Sunita Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-2.5 focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number (WhatsApp)</label>
              <input
                required
                type="tel"
                placeholder="e.g. 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-2.5 focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">City</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-xs font-bold rounded-xl p-2.5"
                >
                  <option value="Nagpur">Nagpur</option>
                  <option value="Pune">Pune</option>
                  <option value="Kota">Kota</option>
                  <option value="Indore">Indore</option>
                  <option value="Bengaluru">Bengaluru</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Locality / Area</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Ram Nagar, Sadar"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl p-2.5"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-xs font-extrabold text-white bg-red-500 hover:bg-red-600 rounded-xl shadow-md"
            >
              Submit Partner Registration →
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
