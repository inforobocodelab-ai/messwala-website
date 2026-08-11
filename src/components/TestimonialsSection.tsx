import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, Heart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="story-section" className="py-20 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold mb-3">
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>Student & Professionals Love</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
            Loved by 1000+ Students Across <span className="text-red-500">Nagpur</span>
          </h2>
          <p className="text-slate-600 text-sm font-medium mt-2">
            Real stories from students in Nagpur area who switched to Messwala.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 border border-orange-100 shadow-sm hover:shadow-xl transition-all relative flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-orange-200/60 absolute top-6 right-6" />

              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center space-x-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-orange-200"
                />
                <div>
                  <h4 className="text-sm font-black text-slate-900">{t.name}</h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {t.role} • <span className="text-red-600 font-bold">{t.institution}</span>
                  </p>
                  <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                    Subscribed to {t.tiffinName}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
