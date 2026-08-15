import React, { useEffect, useState } from 'react';
import { TiffinLogo } from './TiffinLogo';
import { MapPin, ShieldCheck, Clock, Award } from 'lucide-react';

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
    }, 28);

    return () => clearInterval(interval);
  }, [onComplete]);

  const features = [
    { icon: <MapPin className="w-4 h-4 text-orange-500" />, label: 'Nearby Messes' },
    { icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />, label: 'Hygienic Meals' },
    { icon: <Clock className="w-4 h-4 text-amber-500" />, label: 'On Time Delivery' },
    { icon: <Award className="w-4 h-4 text-red-500" />, label: 'Trusted by Students' },
  ];

  return (
    <div
      className={`fixed inset-0 z-[100] bg-gradient-to-br from-[#FFF9F5] via-[#FFF3EB] to-[#FEEAE0] flex flex-col items-center justify-center p-6 transition-opacity duration-500 select-none ${fadeOut ? 'opacity-0 scale-98 pointer-events-none' : 'opacity-100 scale-100'
        }`}
    >
      {/* Glow background effect */}
      <div className="absolute w-80 h-80 bg-orange-400/15 rounded-full blur-3xl animate-pulse pointer-events-none" />

      {/* Brand Icon Badge */}
      <div className="relative mb-6">
        <div className="w-36 h-36 rounded-3xl bg-white p-4 shadow-2xl shadow-orange-500/20 border-2 border-orange-100 flex items-center justify-center transform hover:scale-105 transition-transform duration-300 animate-bounce">
          <TiffinLogo className="w-28 h-28 drop-shadow-md" />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white p-2 rounded-full shadow-lg border-2 border-white">
          <MapPin className="w-4 h-4 animate-pulse" />
        </div>
      </div>

      {/* Brand Name */}
      <div className="text-center mb-2">
        <h1 className="text-5xl font-black tracking-tight text-slate-900 font-sans flex items-center justify-center">
          Messwala<span className="text-orange-600">.</span>
        </h1>
      </div>

      {/* Tagline */}
      <p className="text-base font-bold text-orange-600/90 tracking-wide uppercase text-xs mb-8 bg-orange-100/60 px-4 py-1.5 rounded-full border border-orange-200/60">
        Taste Of Home, Delivered
      </p>

      {/* Feature Badges */}
      {/* <div className="flex flex-wrap justify-center gap-2 max-w-md mb-10">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-1.5 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-xs border border-orange-100/80 text-xs font-semibold text-slate-700"
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div> */}

      {/* Loading Progress Bar Container */}
      <div className="w-72 max-w-full space-y-2.5 text-center">
        <div className="w-full h-2.5 bg-orange-200/60 rounded-full overflow-hidden p-0.5 shadow-inner border border-orange-200/40">
          <div
            className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 rounded-full transition-all duration-300 ease-out shadow-sm"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-xs font-semibold text-slate-500 px-1">
          <span className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping inline-block" />
            <span>Finding best messes near you...</span>
          </span>
          <span className="text-orange-600 font-bold font-mono">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

