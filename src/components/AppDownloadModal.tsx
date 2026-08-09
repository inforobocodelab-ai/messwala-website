import React, { useState } from 'react';
import { Smartphone, QrCode, Send, Check } from 'lucide-react';

interface AppDownloadModalProps {
  onClose: () => void;
}

export const AppDownloadModal: React.FC<AppDownloadModalProps> = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [linkSent, setLinkSent] = useState(false);

  const handleSendSMS = (e: React.FormEvent) => {
    e.preventDefault();
    setLinkSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 relative animate-in fade-in zoom-in-95 border border-orange-100 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold flex items-center justify-center z-10"
        >
          ✕
        </button>

        <div className="text-center space-y-3">
          <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl mx-auto flex items-center justify-center shadow-inner">
            <Smartphone className="w-7 h-7" />
          </div>

          <h3 className="text-xl font-black text-slate-900">Get the Messwala App</h3>
          <p className="text-xs text-slate-500 font-medium">
            Manage your daily tiffin menu, pause meals with a single click, and earn rewards!
          </p>

          {/* QR Code Graphic */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 inline-block my-2">
            <div className="w-36 h-36 bg-white p-2 rounded-xl mx-auto border border-slate-200 flex flex-col items-center justify-center shadow-inner relative">
              {/* Simulated QR Code SVG Pattern */}
              <div className="grid grid-cols-6 gap-1 w-full h-full p-1 opacity-90">
                <div className="bg-slate-900 rounded-xs"></div>
                <div className="bg-slate-900 rounded-xs"></div>
                <div className="bg-slate-900 rounded-xs"></div>
                <div className="bg-slate-200 rounded-xs"></div>
                <div className="bg-slate-900 rounded-xs"></div>
                <div className="bg-slate-900 rounded-xs"></div>
                <div className="bg-slate-900 rounded-xs"></div>
                <div className="bg-slate-100 rounded-xs"></div>
                <div className="bg-slate-900 rounded-xs"></div>
                <div className="bg-slate-900 rounded-xs"></div>
                <div className="bg-slate-100 rounded-xs"></div>
                <div className="bg-slate-900 rounded-xs"></div>
                <div className="bg-slate-900 rounded-xs"></div>
                <div className="bg-slate-900 rounded-xs"></div>
                <div className="bg-slate-200 rounded-xs"></div>
                <div className="bg-slate-900 rounded-xs"></div>
                <div className="bg-slate-900 rounded-xs"></div>
                <div className="bg-slate-900 rounded-xs"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-red-500 text-white font-black text-[10px] px-2 py-0.5 rounded-full shadow-md">
                  MESSWALA
                </div>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 font-bold uppercase mt-2">Scan with phone camera</p>
          </div>

          {/* SMS Link Form */}
          {linkSent ? (
            <div className="p-3 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-xl flex items-center justify-center space-x-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Download link sent to +91 {phoneNumber}!</span>
            </div>
          ) : (
            <form onSubmit={handleSendSMS} className="flex items-center space-x-2">
              <input
                required
                type="tel"
                placeholder="Enter mobile number for SMS link"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1 bg-slate-50 border border-slate-200 text-xs rounded-xl p-2.5 focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
              <button
                type="submit"
                className="py-2.5 px-4 bg-red-500 hover:bg-red-600 text-white text-xs font-bold rounded-xl shadow-md"
              >
                Send Link
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
