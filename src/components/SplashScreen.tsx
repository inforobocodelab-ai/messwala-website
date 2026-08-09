import React, { useEffect, useState } from 'react';
import { MapPin, Clock, ShieldCheck, Users } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  const features = [
    { icon: <MapPin className="w-6 h-6" />, title: 'NEARBY MESS' },
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'HYGIENIC FOOD' },
    { icon: <Clock className="w-6 h-6" />, title: 'ON TIME DELIVERY' },
    { icon: <Users className="w-6 h-6" />, title: 'TRUSTED BY STUDENTS' },
  ];

  return (
    <div
      className={`fixed inset-0 z-[100] bg-gradient-to-br from-orange-50 to-red-50 flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Black Tiffin in Yellow Circle */}
      <div className="relative mb-8 animate-bounce">
        <svg viewBox="0 0 120 120" className="w-32 h-32">
          {/* Yellow Circle Background */}
          <circle cx="60" cy="60" r="55" fill="#fbbf24" />
          
          {/* Handle */}
          <path d="M60 15 L60 28" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" />
          <rect x="50" y="8" width="20" height="8" rx="4" fill="#1a1a1a" />
          
          {/* Top container */}
          <rect x="28" y="30" width="64" height="18" rx="3" fill="#1a1a1a" />
          
          {/* Middle container */}
          <rect x="28" y="50" width="64" height="18" rx="3" fill="#1a1a1a" />
          
          {/* Bottom container */}
          <rect x="28" y="70" width="64" height="18" rx="3" fill="#1a1a1a" />
          
          {/* Container highlights */}
          <rect x="32" y="34" width="56" height="10" rx="2" fill="#333" fillOpacity="0.5" />
          <rect x="32" y="54" width="56" height="10" rx="2" fill="#333" fillOpacity="0.5" />
          <rect x="32" y="74" width="56" height="10" rx="2" fill="#333" fillOpacity="0.5" />
        </svg>
      </div>

      {/* Brand Name */}
      <h1 className="text-5xl font-black text-slate-900 mb-2 tracking-tight">
        Messwala
      </h1>
      
      {/* Tagline */}
      <p className="text-lg font-semibold text-orange-600 mb-12">
        Taste Of Home, Delivered
      </p>

      {/* Feature Icons
      <div className="grid grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 animate-pulse"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-orange-500">
              {feature.icon}
            </div>
            <span className="text-xs font-bold text-slate-700 text-center">
              {feature.title}
            </span>
          </div>
        ))}
      </div> */}

      {/* Loading Progress Bar */}
      <div className="w-64 h-2 bg-orange-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <p className="text-sm text-slate-500 mt-3 font-medium">
        Loading delicious meals... {progress}%
      </p>
    </div>
  );
};
