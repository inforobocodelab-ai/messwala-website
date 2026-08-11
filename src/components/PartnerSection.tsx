import React, { useState } from 'react';
import { ChefHat, TrendingUp, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface PartnerSectionProps {
  onOpenPartnerModal: () => void;
}

export const PartnerSection: React.FC<PartnerSectionProps> = ({ onOpenPartnerModal }) => {
  const [tiffinCount, setTiffinCount] = useState<number>(40);
  const pricePerTiffin = 70;
  const estimatedMonthlyRevenue = tiffinCount * pricePerTiffin * 26 * 2; // 26 days, Lunch & Dinner

  return (
    <section id="partner-section" className="py-20 bg-[#FAF6F0] border-t border-orange-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/20 rounded-full blur-3xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">

            {/* Left Copy */}
            <div className="lg:col-span-12 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-xs font-bold">
                <ChefHat className="w-4 h-4 text-red-400" />
                <span>Partner With Messwala</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white font-sans leading-tight">
                Turn Your Home Kitchen into a <span className="text-red-400">Thriving Business</span>
              </h2>

              <p className="text-slate-300 text-sm font-medium leading-relaxed">
                Are you a passionate home cook, aunty, or mess owner? Connect directly with thousands of students and working professionals near colleges like VNIT, MIT, COEP, Allen Kota, and Christ University.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3 bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-extrabold text-white">Guaranteed Daily Orders</h4>
                    <p className="text-[11px] text-slate-400">Advance monthly subscriptions from verified students.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-extrabold text-white">Free Packaging & Rider Support</h4>
                    <p className="text-[11px] text-slate-400">Messwala handles doorstep delivery logistics for you.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  // onClick={onOpenPartnerModal}
                  className="px-8 py-3.5 text-sm font-extrabold text-slate-950 bg-red-400 hover:bg-red-300 rounded-full shadow-lg shadow-red-500/20 transform hover:-translate-y-0.5 transition-all"
                >
                  Register Your Kitchen Free →
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
