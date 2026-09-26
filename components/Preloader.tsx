'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const floatingQuotes = [
  {
    arabic: "زَيْنُ الْحَدِيثِ الصِّدْقُ وَزَيْنُ الْعِلْمِ الْعَمَلُ",
    english: "“The adornment of speech is truth, and the adornment of knowledge is action.”"
  },
  {
    arabic: "أُطْلُبُوا الْعِلْمَ مِنَ الْمَهْدِ إِلَى اللَّحْدِ",
    english: "“Seek knowledge from the cradle to the grave.”"
  },
  {
    arabic: "خَيْرُ جَلِيسٍ فِي الزَّمَانِ كِتَابُ",
    english: "“The best companion in all times is a book.”"
  }
];

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [stage, setStage] = useState(0);

  // Cycle through quotes smoothly
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % floatingQuotes.length);
    }, 2400);
    return () => clearInterval(quoteInterval);
  }, []);

  useEffect(() => {
    // Trigger initial fade-in smoothly
    const tStart = setTimeout(() => setFadeIn(true), 100);
    // Extended cinematic timeline (~4.5 seconds total duration)
    const t1 = setTimeout(() => setStage(1), 1300);   // Book opens
    const t2 = setTimeout(() => setStage(2), 2800);  // Author & book cards float in
    const t3 = setTimeout(() => {
      setFadeOut(true); // Start fade-out transition
      const t4 = setTimeout(() => setLoading(false), 900); // Remove from DOM after transition completes
      return () => clearTimeout(t4);
    }, 4500);

    return () => {
      clearTimeout(tStart);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 w-screen h-screen z-[9999] flex flex-col items-center justify-center text-[#fffdfa] transition-all duration-900 overflow-hidden ${
        fadeIn && !fadeOut ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
      }`}
    >
      {/* Background Video Element */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/videos/preloader-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Cinematic Vignette & Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0504] via-[#120906]/85 to-[#0a0504]/90 backdrop-blur-[3px] z-10 pointer-events-none"></div>

      {/* Main Full-Screen Content Wrapper */}
      <div className="relative z-20 flex flex-col items-center space-y-7 max-w-xl text-center px-6">
        
        {/* Official Bookstore Logo */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-950/70 border border-amber-600/50 p-3 shadow-2xl backdrop-blur-md flex items-center justify-center animate-fade-in">
          <Image 
            src="/images/imamia-logo.png" 
            alt="Imamia Books Logo"
            width={64}
            height={64}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Cinematic Book Animation / Badge */}
        <div className="relative w-48 h-36 sm:w-56 sm:h-40 perspective-1200 flex items-center justify-center">
          
          {/* Left Cover */}
          <div className={`absolute left-0 w-24 sm:w-28 h-32 sm:h-36 bg-[#26110a] border-2 border-amber-800/60 rounded-l-lg shadow-2xl transition-transform duration-1000 origin-right ${
            stage >= 0 ? 'rotate-y-0' : '-rotate-y-12'
          } flex flex-col justify-between p-4 text-left`}>
            <div className="w-8 h-1.5 bg-amber-500/50 rounded-sm"></div>
            <div className="space-y-2">
              <div className="w-full h-1 bg-amber-900/50 rounded-sm"></div>
              <div className="w-2/3 h-1 bg-amber-900/50 rounded-sm"></div>
            </div>
            <span className="text-[9px] font-serif text-amber-500/70 tracking-widest uppercase">Imamia</span>
          </div>

          {/* Right Cover / Turning Pages */}
          <div className={`absolute right-0 w-24 sm:w-28 h-32 sm:h-36 bg-[#26110a] border-2 border-amber-800/60 rounded-r-lg shadow-2xl transition-transform duration-1000 origin-left ${
            stage >= 1 ? 'rotate-y-[-170deg]' : 'rotate-y-0'
          } flex flex-col justify-between p-4 text-right`}>
            <div className="w-8 h-1.5 bg-amber-500/50 rounded-sm ml-auto"></div>
            <div className="space-y-2">
              <div className="w-full h-1 bg-amber-900/50 rounded-sm"></div>
              <div className="w-2/3 h-1 bg-amber-900/50 rounded-sm ml-auto"></div>
            </div>
            <span className="text-[9px] font-serif text-amber-500/70 tracking-widest uppercase">Collection</span>
          </div>

          {/* Central Spine */}
          <div className="absolute w-3 h-32 sm:h-36 bg-[#0a0504] shadow-inner z-20 rounded-full"></div>

          {/* Floating Previews */}
          {stage >= 2 && (
            <div className="absolute -top-16 -left-24 sm:-left-32 bg-black/60 backdrop-blur-md border border-amber-500/30 p-3 rounded-2xl shadow-2xl transition-all duration-700 animate-bounce-slow flex items-center gap-3 text-left">
              <div className="w-9 h-12 bg-amber-950/80 border border-amber-700/50 rounded flex items-center justify-center text-[10px] font-serif text-amber-200">Vol I</div>
              <div>
                <p className="text-xs font-bold text-amber-200 font-serif">Historical Treatises</p>
                <p className="text-[9px] text-stone-300">Authored by Respected Scholars</p>
              </div>
            </div>
          )}

          {stage >= 2 && (
            <div className="absolute -bottom-14 -right-24 sm:-right-32 bg-black/60 backdrop-blur-md border border-amber-500/30 p-3 rounded-2xl shadow-2xl transition-all duration-700 animate-bounce-slow flex items-center gap-3 text-left">
              <div className="w-9 h-12 bg-amber-950/80 border border-amber-700/50 rounded flex items-center justify-center text-[10px] font-serif text-amber-200">Duas</div>
              <div>
                <p className="text-xs font-bold text-amber-200 font-serif">Spiritual Collections</p>
                <p className="text-[9px] text-stone-300">Verified & Annotated Editions</p>
              </div>
            </div>
          )}
        </div>

        {/* Cinematic Typography & Bilingual Rotating Quotes */}
        <div className="space-y-3 pt-2 transition-all duration-500">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-[0.35em] block">
            Imamia Bookstore & Publishing
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-md">
            {stage === 0 && "Curating Heritage..."}
            {stage === 1 && "Opening Rare Volumes..."}
            {stage >= 2 && "Welcome to Authentic Scholarship"}
          </h1>
          
          <div className="space-y-1 min-h-[44px] flex flex-col justify-center transition-opacity duration-500">
            <p className="text-sm sm:text-base text-amber-300 font-arabic tracking-wide" dir="rtl">
              {floatingQuotes[quoteIndex].arabic}
            </p>
            <p className="text-xs text-stone-300 font-serif italic">
              {floatingQuotes[quoteIndex].english}
            </p>
          </div>
        </div>

        {/* Extended Loading Bar */}
        <div className="w-64 sm:w-80 h-1.5 bg-black/60 rounded-full overflow-hidden border border-amber-900/40 backdrop-blur-xs">
          <div className={`h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all duration-1200 ${
            stage === 0 ? 'w-1/4' : stage === 1 ? 'w-2/3' : 'w-full'
          }`}></div>
        </div>

      </div>
    </div>
  );
}