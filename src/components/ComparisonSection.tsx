import React from 'react';
import { Check, X, Shield, DollarSign, Heart, Sparkles } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="why-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            <span>Smart Student Decision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
            Why Students & IT Folks Choose <span className="text-red-500">Messwala</span>
          </h2>
          <p className="text-slate-600 text-sm font-medium mt-2">
            Compare honest monthly costs, health impact, and flexibility across food choices in college hubs.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase font-extrabold text-slate-400">
                <th className="py-4 px-4 w-1/4">Key Features</th>
                <th className="py-4 px-4 w-1/4 bg-red-50 text-red-600 rounded-t-2xl text-center">
                  <div className="text-base font-black">Messwala Tiffin</div>
                  <div className="text-[10px] font-medium text-red-500">Ghar Ka Homemade Swad</div>
                </th>
                <th className="py-4 px-4 w-1/4 text-center">
                  <div className="text-sm font-bold text-slate-800">College Mess</div>
                  <div className="text-[10px] font-normal text-slate-400">Traditional Mess</div>
                </th>
                <th className="py-4 px-4 w-1/4 text-center">
                  <div className="text-sm font-bold text-slate-800">Food Apps (Swiggy/Zomato)</div>
                  <div className="text-[10px] font-normal text-slate-400">Restaurant Deliveries</div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-semibold">
              
              {/* Row 1: Monthly Cost */}
              <tr className="hover:bg-slate-50/50">
                <td className="py-4 px-4 text-slate-800 font-extrabold">Average Monthly Cost</td>
                <td className="py-4 px-4 bg-red-50/50 text-center font-black text-emerald-600 text-base">
                  ₹2,400 - ₹2,800
                </td>
                <td className="py-4 px-4 text-center text-slate-600 font-bold">
                  ₹3,200 - ₹4,000
                </td>
                <td className="py-4 px-4 text-center text-red-600 font-bold">
                  ₹7,500 - ₹10,000+
                </td>
              </tr>

              {/* Row 2: Per Meal Price */}
              <tr className="hover:bg-slate-50/50">
                <td className="py-4 px-4 text-slate-800 font-extrabold">Price per Meal</td>
                <td className="py-4 px-4 bg-red-50/50 text-center font-black text-red-600 text-base">
                  ₹65 - ₹75
                </td>
                <td className="py-4 px-4 text-center text-slate-600">
                  ₹100 - ₹120
                </td>
                <td className="py-4 px-4 text-center text-slate-600">
                  ₹220 - ₹350
                </td>
              </tr>



              {/* Row 4: Pause Subscription */}
              <tr className="hover:bg-slate-50/50">
                <td className="py-4 px-4 text-slate-800 font-extrabold">Pause Meal When Going Home</td>
                <td className="py-4 px-4 bg-red-50/50 text-center text-emerald-700 font-bold">
                  <span className="inline-flex items-center gap-1 bg-emerald-100 px-2.5 py-1 rounded-full">
                    <Check className="w-3.5 h-3.5" /> Yes! Extension Granted
                  </span>
                </td>
                <td className="py-4 px-4 text-center text-red-500 font-bold">
                  <span className="inline-flex items-center gap-1 bg-red-100 px-2.5 py-1 rounded-full text-red-700">
                    <X className="w-3.5 h-3.5" /> No Refund / Full Loss
                  </span>
                </td>
                <td className="py-4 px-4 text-center text-slate-400">
                  N/A (Per order basis)
                </td>
              </tr>

              {/* Row 5: Delivery */}
              <tr className="hover:bg-slate-50/50">
                <td className="py-4 px-4 text-slate-800 font-extrabold">Delivery to Room / Gate</td>
                <td className="py-4 px-4 bg-red-50/50 text-center text-emerald-700 font-bold rounded-b-2xl">
                  <span className="inline-flex items-center gap-1 bg-emerald-100 px-2.5 py-1 rounded-full">
                    <Check className="w-3.5 h-3.5" /> Free Hot Delivery
                  </span>
                </td>
                <td className="py-4 px-4 text-center text-slate-600">
                  Must walk to mess hall
                </td>
                <td className="py-4 px-4 text-center text-slate-600">
                  ₹30 - ₹60 Surge Delivery Fee
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
