import React, { useState } from 'react';
import { TIFFIN_PROVIDERS } from '../data/mockData';
import { Calendar, Flame, Utensils, Award, Sparkles, Check } from 'lucide-react';

interface WeeklyMenuSectionProps {
  onBookTrial: (tiffinId: string) => void;
}

export const WeeklyMenuSection: React.FC<WeeklyMenuSectionProps> = ({ onBookTrial }) => {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const featuredKitchen = TIFFIN_PROVIDERS[0];
  const dayMenu = featuredKitchen.menu.find(m => m.day === selectedDay) || featuredKitchen.menu[0];

  return (
    <section id="menu-section" className="py-16 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold mb-3">
            <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>Weekly Taste Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
            What's Cooking Today at <span className="text-red-500">{featuredKitchen.name}?</span>
          </h2>
          <p className="text-slate-600 text-sm font-medium mt-2">
            Explore daily rotating menus. Every meal features 4 hot phulkas, fresh seasonal sabzi, dal, rice, and Sunday special thali!
          </p>
        </div>

        {/* Day Selector Buttons */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-4 scrollbar-none max-w-2xl mx-auto mb-8">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all duration-200 flex-shrink-0 ${
                selectedDay === day
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/25 scale-105'
                  : 'bg-white text-slate-700 hover:bg-orange-100/60 border border-orange-100'
              }`}
            >
              {day}
              {day === 'Sunday' && <span className="ml-1 text-[10px] bg-amber-300 text-slate-900 px-1.5 py-0.5 rounded-full">Thali</span>}
            </button>
          ))}
        </div>

        {/* Active Menu Display Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-orange-200/80 shadow-xl max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 mb-6 gap-4">
            <div>
              <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
                {selectedDay}'s Special Kitchen Rotation
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">{dayMenu.day} Home Meal</h3>
              <p className="text-xs text-slate-500 font-medium">Prepared by {featuredKitchen.chefName} • {featuredKitchen.area}</p>
            </div>

            <button
              onClick={() => onBookTrial(featuredKitchen.id)}
              className="py-2.5 px-5 bg-red-500 hover:bg-red-600 text-white text-xs font-bold rounded-full shadow-md flex items-center justify-center space-x-2"
            >
              <span>Order {selectedDay}'s Trial Tiffin</span>
              <span className="bg-white/20 px-2 py-0.5 rounded-md font-mono">₹{featuredKitchen.pricePerMeal}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Lunch Card */}
            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-orange-200/60 relative">
              <div className="absolute top-4 right-4 bg-orange-100 text-orange-800 text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
                ☀️ Lunch (11:30 AM)
              </div>
              
              <h4 className="text-lg font-black text-slate-900 mb-3">Afternoon Thali</h4>
              
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center space-x-2 bg-white p-2.5 rounded-xl border border-orange-100">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span><strong className="text-slate-900">Sabzi:</strong> {dayMenu.lunch.main}</span>
                </li>
                <li className="flex items-center space-x-2 bg-white p-2.5 rounded-xl border border-orange-100">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span><strong className="text-slate-900">Breads:</strong> {dayMenu.lunch.roti}</span>
                </li>
                <li className="flex items-center space-x-2 bg-white p-2.5 rounded-xl border border-orange-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span><strong className="text-slate-900">Dal & Rice:</strong> {dayMenu.lunch.dal} & {dayMenu.lunch.rice}</span>
                </li>
                {dayMenu.lunch.extra && (
                  <li className="flex items-center space-x-2 bg-emerald-50 text-emerald-900 p-2.5 rounded-xl border border-emerald-200 font-semibold">
                    <span>✨ <strong className="text-emerald-950">Accompaniment:</strong> {dayMenu.lunch.extra}</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Dinner Card */}
            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-orange-200/60 relative">
              <div className="absolute top-4 right-4 bg-slate-800 text-slate-100 text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
                🌙 Dinner (8:00 PM)
              </div>
              
              <h4 className="text-lg font-black text-slate-900 mb-3">Evening Meal</h4>
              
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center space-x-2 bg-white p-2.5 rounded-xl border border-orange-100">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span><strong className="text-slate-900">Sabzi:</strong> {dayMenu.dinner.main}</span>
                </li>
                <li className="flex items-center space-x-2 bg-white p-2.5 rounded-xl border border-orange-100">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span><strong className="text-slate-900">Breads:</strong> {dayMenu.dinner.roti}</span>
                </li>
                <li className="flex items-center space-x-2 bg-white p-2.5 rounded-xl border border-orange-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span><strong className="text-slate-900">Dal & Rice:</strong> {dayMenu.dinner.dal} & {dayMenu.dinner.rice}</span>
                </li>
                {dayMenu.dinner.extra && (
                  <li className="flex items-center space-x-2 bg-emerald-50 text-emerald-900 p-2.5 rounded-xl border border-emerald-200 font-semibold">
                    <span>✨ <strong className="text-emerald-950">Sweet / Salad:</strong> {dayMenu.dinner.extra}</span>
                  </li>
                )}
              </ul>
            </div>

          </div>

          <div className="mt-6 text-center text-xs text-slate-500 font-medium">
            *Need customized Jain food, no onion/garlic, or extra rotis? Mention in order notes during trial booking.
          </div>
        </div>

      </div>
    </section>
  );
};
