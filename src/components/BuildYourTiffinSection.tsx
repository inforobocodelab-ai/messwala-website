import React, { useState, useRef, useEffect } from 'react';
import { 
  RotateCw, ZoomIn, ZoomOut, Check, ChevronLeft, ChevronRight, 
  ShoppingCart, ShieldCheck, Utensils, Tag, Truck, Heart, 
  Box, Unlock, Lock, Sparkles, Plus
} from 'lucide-react';

interface BuildYourTiffinSectionProps {
  onBookTrial: (tiffinId: string) => void;
}

interface FoodItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'dal' | 'rice' | 'sabzi' | 'roti';
}

export const BuildYourTiffinSection: React.FC<BuildYourTiffinSectionProps> = ({ onBookTrial }) => {
  // Food Menu Items
  const dalOptions: FoodItem[] = [
    { 
      id: 'dal-1', 
      name: 'Dal Tadka', 
      price: 0, 
      category: 'dal',
      image: '/dal_tadka.jpg' 
    },
    { 
      id: 'dal-2', 
      name: 'Dal Fry', 
      price: 0, 
      category: 'dal',
      image: '/dal_fry.jpg' 
    },
    { 
      id: 'dal-3', 
      name: 'Rajma', 
      price: 5, 
      category: 'dal',
      image: '/dal_rajma.jpg' 
    },
    { 
      id: 'dal-4', 
      name: 'Mix Dal', 
      price: 5, 
      category: 'dal',
      image: '/dal_mix.jpg' 
    },
  ];

  const riceOptions: FoodItem[] = [
    { 
      id: 'rice-1', 
      name: 'Jeera Rice', 
      price: 0, 
      category: 'rice',
      image: '/rice_jeera.jpg' 
    },
    { 
      id: 'rice-2', 
      name: 'Plain Rice', 
      price: 0, 
      category: 'rice',
      image: '/rice_plain.jpg' 
    },
    { 
      id: 'rice-3', 
      name: 'Veg Pulao', 
      price: 5, 
      category: 'rice',
      image: '/rice_pulao.jpg' 
    },
    { 
      id: 'rice-4', 
      name: 'Fried Rice', 
      price: 5, 
      category: 'rice',
      image: '/rice_fried.jpg' 
    },
  ];

  const sabziOptions: FoodItem[] = [
    { 
      id: 'sabzi-1', 
      name: 'Paneer Butter Masala', 
      price: 15, 
      category: 'sabzi',
      image: '/sabzi_paneer.jpg' 
    },
    { 
      id: 'sabzi-2', 
      name: 'Aloo Gobi', 
      price: 10, 
      category: 'sabzi',
      image: '/sabzi_aloo_gobi.jpg' 
    },
    { 
      id: 'sabzi-3', 
      name: 'Mix Veg', 
      price: 10, 
      category: 'sabzi',
      image: '/sabzi_mix_veg.jpg' 
    },
    { 
      id: 'sabzi-4', 
      name: 'Chana Masala', 
      price: 10, 
      category: 'sabzi',
      image: '/sabzi_chana.jpg' 
    },
  ];

  const rotiOptions: FoodItem[] = [
    { 
      id: 'roti-1', 
      name: '2 Roti', 
      price: 0, 
      category: 'roti',
      image: '/roti_2.jpg' 
    },
    { 
      id: 'roti-2', 
      name: '3 Roti', 
      price: 10, 
      category: 'roti',
      image: '/roti_3.jpg' 
    },
    { 
      id: 'roti-3', 
      name: '4 Roti', 
      price: 15, 
      category: 'roti',
      image: '/roti_4.jpg' 
    },
    { 
      id: 'roti-4', 
      name: 'Paratha', 
      price: 20, 
      category: 'roti',
      image: '/roti_paratha.jpg' 
    },
  ];

  const extraOptions = [
    { id: 'extra-1', name: 'Salad', price: 10, image: '/extra_salad.jpg' },
    { id: 'extra-2', name: 'Curd', price: 10, image: '/extra_curd.jpg' },
    { id: 'extra-3', name: 'Pickle', price: 5, image: '/extra_pickle.jpg' },
  ];

  // Active Selections
  const [selectedDal, setSelectedDal] = useState<FoodItem>(dalOptions[0]);
  const [selectedRice, setSelectedRice] = useState<FoodItem>(riceOptions[0]);
  const [selectedSabzi, setSelectedSabzi] = useState<FoodItem>(sabziOptions[0]);
  const [selectedRoti, setSelectedRoti] = useState<FoodItem>(rotiOptions[0]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  // Highlight flash state when user picks an item
  const [highlightedTier, setHighlightedTier] = useState<'dal' | 'rice' | 'sabzi' | 'roti' | null>(null);

  // 3D Controls
  const [isOpen, setIsOpen] = useState(true);
  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [activeThumbnail, setActiveThumbnail] = useState(0);

  // Drag interaction
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0, startRotY: 0, startRotX: 0 });

  const triggerTierHighlight = (tier: 'dal' | 'rice' | 'sabzi' | 'roti') => {
    setHighlightedTier(tier);
    setTimeout(() => setHighlightedTier(null), 700);
  };

  const handleSelectDal = (item: FoodItem) => {
    setSelectedDal(item);
    triggerTierHighlight('dal');
  };

  const handleSelectRice = (item: FoodItem) => {
    setSelectedRice(item);
    triggerTierHighlight('rice');
  };

  const handleSelectSabzi = (item: FoodItem) => {
    setSelectedSabzi(item);
    triggerTierHighlight('sabzi');
  };

  const handleSelectRoti = (item: FoodItem) => {
    setSelectedRoti(item);
    triggerTierHighlight('roti');
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      startRotY: rotationY,
      startRotX: rotationX,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = e.clientY - dragStartRef.current.y;
    setRotationY(dragStartRef.current.startRotY + deltaX * 0.4);
    setRotationX(Math.max(-15, Math.min(20, dragStartRef.current.startRotX - deltaY * 0.2)));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setZoom((prev) => Math.min(1.2, Math.max(0.9, prev - e.deltaY * 0.001)));
  };

  // Auto rotation
  useEffect(() => {
    let interval: any;
    if (isRotating) {
      interval = setInterval(() => {
        setRotationY((prev) => (prev + 1.2) % 360);
      }, 30);
    }
    return () => clearInterval(interval);
  }, [isRotating]);

  const toggleExtra = (id: string) => {
    if (selectedExtras.includes(id)) {
      setSelectedExtras(selectedExtras.filter(e => e !== id));
    } else {
      setSelectedExtras([...selectedExtras, id]);
    }
  };

  // Pricing
  const basePrice = 130;
  const extrasTotal = selectedExtras.reduce((sum, extraId) => {
    const item = extraOptions.find(e => e.id === extraId);
    return sum + (item ? item.price : 0);
  }, 0);

  const totalPrice = basePrice + selectedDal.price + selectedRice.price + selectedSabzi.price + selectedRoti.price + extrasTotal;

  // Preset Thumbnails
  const handleThumbnailClick = (index: number) => {
    setActiveThumbnail(index);
    if (index === 0) {
      setIsOpen(true);
      setRotationY(0);
      setRotationX(0);
    } else if (index === 1) {
      setIsOpen(false);
      setRotationY(0);
      setRotationX(0);
    } else if (index === 2) {
      setIsOpen(true);
      setRotationY(25);
      setRotationX(8);
    } else if (index === 3) {
      setIsOpen(false);
      setRotationY(45);
      setRotationX(5);
    } else if (index === 4) {
      setIsOpen(false);
      setRotationY(0);
      setRotationX(20);
    }
  };

  return (
    <section id="build-tiffin-section" className="py-16 lg:py-24 bg-[#FAF7F2] font-sans overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ======================================================== */}
          {/* LEFT & CENTER: REALISTIC 3D TIFFIN STAGE & CONTROLS      */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Top Row: Left Sub-Column (Text + 4 features + slogan) & Center/Right (3D Tiffin Stage) */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 relative">
              
              {/* LEFT SUB-COLUMN: Header, Vertical 4-Feature Stack & Slogan */}
              <div className="w-full md:w-56 lg:w-60 xl:w-64 shrink-0 flex flex-col justify-between self-stretch z-10">
                <div>
                  {/* Badge */}
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-orange-100/90 text-orange-800 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-2xs">
                    <Box className="w-3.5 h-3.5 text-orange-600" />
                    <span>Interactive 3D Tiffin Builder</span>
                  </div>

                  {/* Heading */}
                  <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none mb-3">
                    Build Your <br />
                    <span className="text-orange-500">Tiffin</span>
                  </h2>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                    Choose your favorite meals and create your perfect tiffin. Fresh, homemade and just for you!
                  </p>

                  {/* Feature Highlights: Single Vertical Column */}
                  <div className="space-y-4 mb-6">
                    {/* Rotate */}
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-md shadow-orange-500/25">
                        360°
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-slate-900">Rotate</h4>
                        <p className="text-[11px] text-slate-500">Drag to rotate</p>
                      </div>
                    </div>

                    {/* Zoom */}
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-md shadow-orange-500/25">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-slate-900">Zoom</h4>
                        <p className="text-[11px] text-slate-500">Scroll to zoom</p>
                      </div>
                    </div>

                    {/* Open / Close */}
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-md shadow-orange-500/25">
                        <Box className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-slate-900">Open / Close</h4>
                        <p className="text-[11px] text-slate-500">Click to open tiffin</p>
                      </div>
                    </div>

                    {/* Real Food View */}
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-md shadow-orange-500/25">
                        <Heart className="w-4 h-4 fill-white" />
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-slate-900">Real Food View</h4>
                        <p className="text-[11px] text-slate-500">See your selections live</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slogan at bottom left in cursive font */}
                <div className="mt-4 pt-2 -rotate-6 transform origin-left">
                  <div 
                    className="text-orange-500 text-2xl font-bold leading-tight select-none"
                    style={{ fontFamily: '"Caveat", "Brush Script MT", "Segoe Script", cursive' }}
                  >
                    Your Tiffin.<br />Your Choice.
                  </div>
                </div>
              </div>

              {/* CENTER/RIGHT: REALISTIC 3D TIFFIN BOX STAGE WITH LIVE FOOD */}
              <div className="flex-1 relative flex flex-col items-center justify-center min-h-[460px] sm:min-h-[520px] w-full">
                
                {/* Floating Action Controls on Top Right */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-30 flex flex-col space-y-2 bg-white/95 backdrop-blur-md p-1.5 sm:p-2 rounded-2xl shadow-lg border border-slate-100 text-slate-700">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsRotating(!isRotating);
                    }}
                    className={`p-2 rounded-xl text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      isRotating ? 'bg-orange-500 text-white shadow-xs' : 'hover:bg-orange-50 hover:text-orange-600'
                    }`}
                    title="360 Auto-Rotate"
                  >
                    <RotateCw className={`w-4 h-4 ${isRotating ? 'animate-spin' : ''}`} />
                    <span className="text-[9px]">Rotate</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(true);
                    }}
                    className={`p-2 rounded-xl text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      isOpen ? 'bg-orange-500 text-white shadow-xs' : 'hover:bg-orange-50 hover:text-orange-600'
                    }`}
                    title="Open Tiffin"
                  >
                    <Unlock className="w-4 h-4" />
                    <span className="text-[9px]">Open</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(false);
                    }}
                    className={`p-2 rounded-xl text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      !isOpen ? 'bg-orange-500 text-white shadow-xs' : 'hover:bg-orange-50 hover:text-orange-600'
                    }`}
                    title="Close Tiffin"
                  >
                    <Lock className="w-4 h-4" />
                    <span className="text-[9px]">Close</span>
                  </button>
                </div>

                {/* 3D TIFFIN INTERACTION STAGE (BORDERLESS, SITS DIRECTLY ON #FAF7F2) */}
                <div 
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onWheel={handleWheel}
                  className="relative w-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none py-4"
                  style={{ perspective: '1200px' }}
                >
                  <div
                    className="transition-transform duration-100 ease-out select-none relative flex items-center justify-center"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: `scale(${zoom}) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
                    }}
                  >
                    {/* Photorealistic Stainless Steel Base Container */}
                    <div className="relative w-[320px] sm:w-[380px] aspect-square flex items-center justify-center">
                      <img
                        src={isOpen ? "/tiffin_3d_open.jpg" : "/tiffin_3d_closed.jpg"}
                        alt="Realistic 3D Indian Stainless Steel Tiffin Dabba"
                        className="w-full h-full object-contain pointer-events-none drop-shadow-2xl rounded-2xl transition-all duration-300"
                      />

                      {/* Dynamic Bowls & Pins */}
                      {isOpen && (
                        <>
                          {/* TIER 1: DAL BOWL SURFACE */}
                          <div 
                            className={`absolute overflow-hidden shadow-inner transition-all duration-300 group cursor-pointer ${
                              highlightedTier === 'dal' ? 'ring-4 ring-orange-400 scale-105 z-20' : 'hover:ring-2 hover:ring-amber-300 z-10'
                            }`}
                            style={{
                              top: '21.5%',
                              left: '31.6%',
                              width: '35.4%',
                              height: '11.8%',
                              borderRadius: '50% / 40%',
                              clipPath: 'ellipse(50% 46% at 50% 50%)',
                              border: '2px solid rgba(226, 232, 240, 0.85)',
                              boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.2)',
                            }}
                            title={`Dal: ${selectedDal.name}`}
                          >
                            <img 
                              key={selectedDal.id}
                              src={selectedDal.image} 
                              alt={selectedDal.name}
                              className="w-full h-full object-cover scale-110 animate-fade-in" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30 pointer-events-none" />
                          </div>

                          {/* TIER 2: RICE BOWL SURFACE */}
                          <div 
                            className={`absolute overflow-hidden shadow-inner transition-all duration-300 group cursor-pointer ${
                              highlightedTier === 'rice' ? 'ring-4 ring-orange-400 scale-105 z-20' : 'hover:ring-2 hover:ring-slate-300 z-10'
                            }`}
                            style={{
                              top: '39.8%',
                              left: '31.6%',
                              width: '35.4%',
                              height: '11.4%',
                              borderRadius: '50% / 40%',
                              clipPath: 'ellipse(50% 46% at 50% 50%)',
                              border: '2px solid rgba(226, 232, 240, 0.85)',
                              boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.2)',
                            }}
                            title={`Rice: ${selectedRice.name}`}
                          >
                            <img 
                              key={selectedRice.id}
                              src={selectedRice.image} 
                              alt={selectedRice.name}
                              className="w-full h-full object-cover scale-110 animate-fade-in" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30 pointer-events-none" />
                          </div>

                          {/* TIER 3: SABZI BOWL SURFACE */}
                          <div 
                            className={`absolute overflow-hidden shadow-inner transition-all duration-300 group cursor-pointer ${
                              highlightedTier === 'sabzi' ? 'ring-4 ring-orange-400 scale-105 z-20' : 'hover:ring-2 hover:ring-orange-300 z-10'
                            }`}
                            style={{
                              top: '55.2%',
                              left: '32.0%',
                              width: '35.0%',
                              height: '11.4%',
                              borderRadius: '50% / 40%',
                              clipPath: 'ellipse(50% 46% at 50% 50%)',
                              border: '2px solid rgba(226, 232, 240, 0.85)',
                              boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.2)',
                            }}
                            title={`Sabzi: ${selectedSabzi.name}`}
                          >
                            <img 
                              key={selectedSabzi.id}
                              src={selectedSabzi.image} 
                              alt={selectedSabzi.name}
                              className="w-full h-full object-cover scale-110 animate-fade-in" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30 pointer-events-none" />
                          </div>

                          {/* TIER 4: ROTI BOWL SURFACE */}
                          <div 
                            className={`absolute overflow-hidden shadow-inner transition-all duration-300 group cursor-pointer ${
                              highlightedTier === 'roti' ? 'ring-4 ring-orange-400 scale-105 z-20' : 'hover:ring-2 hover:ring-amber-300 z-10'
                            }`}
                            style={{
                              top: '71.5%',
                              left: '32.6%',
                              width: '33.8%',
                              height: '11.8%',
                              borderRadius: '50% / 40%',
                              clipPath: 'ellipse(50% 46% at 50% 50%)',
                              border: '2px solid rgba(226, 232, 240, 0.85)',
                              boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.2)',
                            }}
                            title={`Roti: ${selectedRoti.name}`}
                          >
                            <img 
                              key={selectedRoti.id}
                              src={selectedRoti.image} 
                              alt={selectedRoti.name}
                              className="w-full h-full object-cover scale-110 animate-fade-in" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30 pointer-events-none" />
                          </div>

                          {/* Dynamic Real-Time Interactive Badges on Left */}
                          {/* Tier 1 Dal Pin */}
                          <div className="absolute top-[22%] left-0 sm:left-1 z-20 bg-slate-950/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/60 shadow-lg flex items-center space-x-1.5 hover:scale-105 transition-transform animate-fade-in pointer-events-auto">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                            <span className="text-orange-200 font-normal">Dal:</span>
                            <span className="font-bold text-white">{selectedDal.name}</span>
                          </div>

                          {/* Tier 2 Rice Pin */}
                          <div className="absolute top-[39%] -left-2 sm:-left-1 z-20 bg-slate-950/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-slate-300/60 shadow-lg flex items-center space-x-1.5 hover:scale-105 transition-transform animate-fade-in pointer-events-auto">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-200 animate-pulse" />
                            <span className="text-slate-300 font-normal">Rice:</span>
                            <span className="font-bold text-white">{selectedRice.name}</span>
                          </div>

                          {/* Tier 3 Sabzi Pin */}
                          <div className="absolute top-[56%] -left-2 sm:-left-1 z-20 bg-slate-950/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-orange-400/60 shadow-lg flex items-center space-x-1.5 hover:scale-105 transition-transform animate-fade-in pointer-events-auto">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                            <span className="text-orange-200 font-normal">Sabzi:</span>
                            <span className="font-bold text-white">{selectedSabzi.name}</span>
                          </div>

                          {/* Tier 4 Roti Pin */}
                          <div className="absolute top-[72%] left-0 sm:left-1 z-20 bg-slate-950/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-300/60 shadow-lg flex items-center space-x-1.5 hover:scale-105 transition-transform animate-fade-in pointer-events-auto">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                            <span className="text-amber-200 font-normal">Roti:</span>
                            <span className="font-bold text-white">{selectedRoti.name}</span>
                          </div>
                        </>
                      )}

                      {/* Realistic Metallic Sheen Gradient Overlay responding to drag rotation */}
                      <div 
                        className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-200"
                        style={{
                          background: `linear-gradient(${rotationY + 110}deg, rgba(255,255,255,0) 20%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 80%)`,
                          mixBlendMode: 'overlay',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Curved Rotation Guide Beneath Tiffin */}
                <div className="relative flex flex-col items-center justify-center mt-2 select-none">
                  <div className="relative flex items-center justify-center w-64 h-7">
                    <svg className="absolute inset-0 w-full h-full text-slate-400" viewBox="0 0 240 28" fill="none">
                      <path
                        d="M 22 6 C 85 26, 155 26, 218 6"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeDasharray="4 3"
                        fill="none"
                      />
                      <path d="M 26 11 L 22 6 L 28 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 212 5 L 218 6 L 214 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="relative z-10 flex items-center space-x-1.5 bg-[#FAF7F2] px-2 text-[11px] font-semibold text-slate-600">
                      <span>👆 Drag to Rotate</span>
                      <span className="text-slate-400">•</span>
                      <span>Scroll to Zoom</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Thumbnail Carousel Below Both Columns */}
            <div className="mt-8 flex items-center justify-center space-x-3">
              <button 
                onClick={() => handleThumbnailClick(Math.max(0, activeThumbnail - 1))}
                className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-orange-500 flex items-center justify-center shadow-xs cursor-pointer transition-colors"
                aria-label="Previous view"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center space-x-2.5">
                {[
                  { title: 'Open View', img: '/tiffin_3d_open.jpg' },
                  { title: 'Closed Steel', img: '/tiffin_3d_closed.jpg' },
                  { title: 'Semi Open', img: '/tiffin_3d_open.jpg' },
                  { title: 'Side Angle', img: '/tiffin_3d_closed.jpg' },
                  { title: 'Top Lid View', img: '/tiffin_3d_closed.jpg' },
                ].map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleThumbnailClick(idx)}
                    className={`w-12 h-12 rounded-2xl overflow-hidden flex items-center justify-center transition-all cursor-pointer ${
                      activeThumbnail === idx
                        ? 'border-2 border-orange-500 ring-2 ring-orange-200 shadow-md scale-105'
                        : 'border border-slate-200 hover:border-orange-300 opacity-70 hover:opacity-100 shadow-2xs'
                    }`}
                  >
                    <img src={thumb.img} alt={thumb.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <button 
                onClick={() => handleThumbnailClick(Math.min(4, activeThumbnail + 1))}
                className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-orange-500 flex items-center justify-center shadow-xs cursor-pointer transition-colors"
                aria-label="Next view"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

                    {/* ======================================================== */}
        {/* BOTTOM TRUST FEATURES BAR                                */}
        {/* ======================================================== */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          <div className="flex items-center space-x-3 justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-2xl bg-orange-100/90 text-orange-600 flex items-center justify-center shrink-0 shadow-2xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-900">Fresh & Hygienic Food</h4>
              <p className="text-[10px] text-slate-500 font-medium">Always safe, always fresh</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-2xl bg-orange-100/90 text-orange-600 flex items-center justify-center shrink-0 shadow-2xs">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-900">Daily Menu Variety</h4>
              <p className="text-[10px] text-slate-500 font-medium">Never get bored</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-2xl bg-orange-100/90 text-orange-600 flex items-center justify-center shrink-0 shadow-2xs">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-900">Affordable Prices</h4>
              <p className="text-[10px] text-slate-500 font-medium">Good food, great value</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 justify-center sm:justify-start">
            <div className="w-10 h-10 rounded-2xl bg-orange-100/90 text-orange-600 flex items-center justify-center shrink-0 shadow-2xs">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-900">Timely Delivery</h4>
              <p className="text-[10px] text-slate-500 font-medium">On time, every time</p>
            </div>
          </div>
        </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: "CUSTOMIZE YOUR TIFFIN" FOOD SELECTOR PANEL*/}
          {/* ======================================================== */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-5 sm:p-7 border border-orange-100 shadow-xl space-y-1">
            
            {/* Header + Price Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">Customize Your Tiffin</h3>
                <p className="text-xs text-slate-500 font-medium">Select your preferred food items</p>
              </div>

              <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-orange-100/90 text-orange-700 font-black rounded-xl text-xs shadow-2xs">
                <Tag className="w-3.5 h-3.5" />
                <span>₹{totalPrice} /day</span>
              </div>
            </div>

            {/* CATEGORY 1: DAL */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-xs shrink-0">
                  <Utensils className="w-2.5 h-2.5 stroke-[2.5]" />
                </span>
                <span className="text-sm font-bold text-slate-900">Dal</span>
                <span className="text-xs text-slate-400 font-normal">(1 selected)</span>
              </div>

              <div className="grid grid-cols-4 gap-2.5">
                {dalOptions.map((item) => {
                  const isSelected = selectedDal.id === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectDal(item)}
                      className={`group relative p-2.5 sm:p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between ${
                        isSelected 
                          ? 'border-2 border-orange-500 bg-white shadow-xs' 
                          : 'border border-slate-200/90 bg-white hover:border-orange-300 hover:shadow-xs'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-xs">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      )}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-2 flex items-center justify-center">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-800 line-clamp-1 leading-tight">{item.name}</span>
                      <span className="text-[11px] text-slate-400 font-medium mt-0.5">
                        {item.price === 0 ? '+ ₹0' : `+ ₹${item.price}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CATEGORY 2: RICE */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-xs shrink-0">
                  <Utensils className="w-2.5 h-2.5 stroke-[2.5]" />
                </span>
                <span className="text-sm font-bold text-slate-900">Rice</span>
                <span className="text-xs text-slate-400 font-normal">(1 selected)</span>
              </div>

              <div className="grid grid-cols-4 gap-2.5">
                {riceOptions.map((item) => {
                  const isSelected = selectedRice.id === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectRice(item)}
                      className={`group relative p-2.5 sm:p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between ${
                        isSelected 
                          ? 'border-2 border-orange-500 bg-white shadow-xs' 
                          : 'border border-slate-200/90 bg-white hover:border-orange-300 hover:shadow-xs'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-xs">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      )}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-2 flex items-center justify-center">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-800 line-clamp-1 leading-tight">{item.name}</span>
                      <span className="text-[11px] text-slate-400 font-medium mt-0.5">
                        {item.price === 0 ? '+ ₹0' : `+ ₹${item.price}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CATEGORY 3: SABJI */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-xs shrink-0">
                  <Utensils className="w-2.5 h-2.5 stroke-[2.5]" />
                </span>
                <span className="text-sm font-bold text-slate-900">Sabji</span>
                <span className="text-xs text-slate-400 font-normal">(1 selected)</span>
              </div>

              <div className="grid grid-cols-4 gap-2.5">
                {sabziOptions.map((item) => {
                  const isSelected = selectedSabzi.id === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectSabzi(item)}
                      className={`group relative p-2.5 sm:p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between ${
                        isSelected 
                          ? 'border-2 border-orange-500 bg-white shadow-xs' 
                          : 'border border-slate-200/90 bg-white hover:border-orange-300 hover:shadow-xs'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-xs">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      )}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-2 flex items-center justify-center">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-800 line-clamp-1 leading-tight">{item.name}</span>
                      <span className="text-[11px] text-slate-400 font-medium mt-0.5">
                        {item.price === 0 ? '+ ₹0' : `+ ₹${item.price}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CATEGORY 4: ROTI */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-xs shrink-0">
                  <Utensils className="w-2.5 h-2.5 stroke-[2.5]" />
                </span>
                <span className="text-sm font-bold text-slate-900">Roti</span>
                <span className="text-xs text-slate-400 font-normal">(1 selected)</span>
              </div>

              <div className="grid grid-cols-4 gap-2.5">
                {rotiOptions.map((item) => {
                  const isSelected = selectedRoti.id === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectRoti(item)}
                      className={`group relative p-2.5 sm:p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between ${
                        isSelected 
                          ? 'border-2 border-orange-500 bg-white shadow-xs' 
                          : 'border border-slate-200/90 bg-white hover:border-orange-300 hover:shadow-xs'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-xs">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      )}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-2 flex items-center justify-center">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-800 line-clamp-1 leading-tight">{item.name}</span>
                      <span className="text-[11px] text-slate-400 font-medium mt-0.5">
                        {item.price === 0 ? '+ ₹0' : `+ ₹${item.price}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CATEGORY 5: EXTRAS (OPTIONAL) */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-xs shrink-0">
                  <Utensils className="w-2.5 h-2.5 stroke-[2.5]" />
                </span>
                <span className="text-sm font-bold text-slate-900">Extras</span>
                <span className="text-xs text-slate-400 font-normal">(Optional)</span>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {extraOptions.map((item) => {
                  const isAdded = selectedExtras.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleExtra(item.id)}
                      className={`group relative p-2 sm:p-2.5 rounded-2xl border flex items-center justify-between transition-all cursor-pointer ${
                        isAdded 
                          ? 'border-2 border-orange-500 bg-orange-50/30 shadow-xs' 
                          : 'border border-slate-200/90 bg-white hover:border-orange-300 hover:shadow-xs'
                      }`}
                    >
                      <div className="flex items-center space-x-2 min-w-0">
                        <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-slate-100">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left">
                          <span className="text-xs font-bold text-slate-800 block leading-tight">{item.name}</span>
                          <span className="text-[11px] text-slate-400 font-medium">+ ₹{item.price}</span>
                        </div>
                      </div>

                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all ${
                        isAdded 
                          ? 'bg-orange-500 text-white shadow-xs' 
                          : 'bg-orange-500 text-white group-hover:bg-orange-600'
                      }`}>
                        {isAdded ? (
                          <Check className="w-3 h-3 stroke-[3]" />
                        ) : (
                          <Plus className="w-3 h-3 stroke-[3]" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Order CTA Bar */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Price</span>
                <div className="text-2xl font-black text-slate-900">
                  ₹{totalPrice} <span className="text-xs font-normal text-slate-500">/day</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onBookTrial('tiffin-1')}
                className="flex-1 py-3.5 px-6 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-2xl shadow-lg shadow-orange-500/25 flex items-center justify-center space-x-2 active:scale-98 transition-all cursor-pointer"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add Tiffin</span>
              </button>
            </div>

          </div>

        </div>



      </div>
    </section>
  );
};
