'use client';

import { useState, useEffect } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Start fade out after 1.2 seconds
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      // Remove from DOM completely after fade animation completes (500ms)
      const removeTimer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(removeTimer);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fffdfa] transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Branded Preloader Logo & Spinner */}
      <div className="flex flex-col items-center animate-pulse">
        <div className="w-20 h-20 bg-amber-50 border-2 border-amber-200 rounded-2xl p-2 flex items-center justify-center shadow-lg mb-4">
          <img src="/images/imamia-logo.png" alt="Imamia Bookstore Logo" className="max-h-full object-contain" />
        </div>
        <h2 className="text-xl font-black text-amber-950 tracking-tight">Imamia Bookstore</h2>
        <p className="text-xs font-medium text-amber-800 mt-1 uppercase tracking-widest">Preparing Literature...</p>
      </div>
    </div>
  );
}