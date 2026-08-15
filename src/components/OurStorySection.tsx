import React from 'react';
import { HeartHandshake, Sparkles, Utensils, Home, Heart, Compass } from 'lucide-react';

export const OurStorySection: React.FC = () => {
  return (
    <section id="story-section" className="py-20 bg-[#FAF6F0] border-t border-orange-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-white via-[#FFFDF9] to-[#FFF8F2] rounded-3xl p-8 sm:p-14 border border-orange-100 shadow-xl shadow-orange-500/5 relative overflow-hidden">
          {/* Soft background glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-8 text-slate-800">
            
            {/* Header Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100/90 border border-orange-200/80 text-orange-900 text-xs font-extrabold tracking-wide">
              <Heart className="w-3.5 h-3.5 text-[#FF5000] fill-[#FF5000]" />
              <span>Our Story</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 font-sans leading-tight">
              From a Simple Need to a <span className="text-[#FF5000]">Better Way</span> of Finding Food
            </h2>

            {/* Sub-quote highlight */}
            <p className="text-lg sm:text-xl font-bold text-slate-700 italic border-l-4 border-[#FF5000] pl-4 py-1 bg-orange-50/60 rounded-r-2xl">
              "MessWala started with a simple belief — <span className="text-[#FF5000] not-italic">finding everyday food should be easy, affordable, and feel like home.</span>"
            </p>

            {/* Story Paragraphs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-sm sm:text-base font-medium text-slate-600 leading-relaxed">
              
              <div className="bg-white/80 p-6 rounded-2xl border border-orange-100/80 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#FF5000] mb-2">
                  <Home className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-900">For Students & Professionals</h3>
                <p>
                  Every day, thousands of students and working professionals move away from their hometowns for <span className="text-slate-900 font-bold">education, careers, and new opportunities</span>. Living in hostels, PGs, and rented homes often means giving up the comfort of a regular home-cooked meal.
                </p>
              </div>

              <div className="bg-white/80 p-6 rounded-2xl border border-orange-100/80 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 mb-2">
                  <Utensils className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-900">For Home Cooks & Mess Owners</h3>
                <p>
                  At the same time, countless <span className="text-slate-900 font-bold">home cooks, tiffin providers, and local mess owners</span> prepare fresh, homestyle food but often have limited ways to reach the people who need it most.
                </p>
              </div>

            </div>

            {/* Bridge Banner Highlight */}
            <div className="bg-gradient-to-r from-[#FF5000] to-orange-600 text-white rounded-2xl p-6 sm:p-8 shadow-lg shadow-orange-500/20 text-center space-y-2">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                MessWala brings these two worlds together.
              </h3>
              <p className="text-xs sm:text-sm text-orange-100 font-semibold max-w-2xl mx-auto">
                Our platform makes it easier for customers to discover nearby messes, explore menus, compare prices, choose meal plans, and get fresh, homestyle meals delivered seamlessly.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
