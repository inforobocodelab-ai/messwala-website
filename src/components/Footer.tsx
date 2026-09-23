import React from 'react';
import { Heart, Phone, Mail, MapPin, ShieldCheck, Smartphone } from 'lucide-react';
import { CITIES } from '../data/mockData';
import { MesswalaBrandLogo } from './TiffinLogo';

interface FooterProps {
  onSelectCity: (city: string) => void;
  onOpenAppModal: () => void;
  onOpenPartnerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCity, onOpenAppModal, onOpenPartnerModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <MesswalaBrandLogo variant="dark" />
            </div>

            <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-sm">
              Connecting students and working professionals with authentic home cooks and tiffin services across India. Fresh, healthy, and affordable daily meals.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-400" /> FSSAI Verified</span>
              <span>•</span>
              <span className="text-slate-300">Made with ❤️ for Students</span>
            </div>
          </div>

          {/* Top Tiffin Cities */}
          <div>
            <h4 className="text-xs font-black uppercase text-white tracking-wider mb-4">Tiffin Services in Cities</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              {CITIES.map((c) => (
                <li key={c.name}>
                  <button
                    onClick={() => {
                      onSelectCity(c.name);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-red-400 transition-colors"
                  >
                    Tiffin Services in {c.name} ({c.tiffinCount})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase text-white tracking-wider mb-4">Explore Messwala</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><a href="#tiffin-section" className="hover:text-red-400">Home Tiffin Plans</a></li>
              <li><a href="#menu-section" className="hover:text-red-400">Weekly Menu Rotation</a></li>
              <li><a href="#why-section" className="hover:text-red-400">Why Messwala</a></li>
              <li><button onClick={onOpenPartnerModal} className="hover:text-red-400">Register as Home Chef</button></li>
            </ul>
          </div>

          {/* Support & App */}
          <div>
            <h4 className="text-xs font-black uppercase text-white tracking-wider mb-4">Contact & Support</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-red-400" />
                <span>+91 81496 91205 </span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-red-400" />
                <span>support@messwala.in</span>
              </p>
              <p className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>Nagpur</span>
              </p>

              <div className="pt-3">
                <button
                  onClick={onOpenAppModal}
                  className="w-full py-2.5 px-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center space-x-2 shadow-md"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Download App</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium gap-4">
          <p>© {new Date().getFullYear()} Messwala Technologies India Pvt Ltd. All rights reserved. | Developed with ❤️ by Robocode.AI tech Lab</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Refund & Pause Rules</a>
            <a href="#" className="hover:text-slate-300">FSSAI Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
