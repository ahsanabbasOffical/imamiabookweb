'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/catalog?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fffdfa]/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-stone-900 text-stone-200 text-[11px] sm:text-xs py-2 px-4 text-center font-light tracking-wide flex items-center justify-center gap-3">
        <span className="hidden sm:inline">Words that guide, editions that last</span>
        <span className="hidden sm:inline opacity-40">•</span>
        <span className="font-medium text-amber-200">Authentic Islamic scholarship</span>
        <span className="hidden sm:inline opacity-40">•</span>
        <span className="hidden sm:inline">Sourced with care, delivered with trust</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-stone-100 rounded-xl border border-stone-200 flex items-center justify-center p-1.5 shadow-xs group-hover:border-amber-800 transition">
            <img src="/images/imamia-logo.png" alt="Imamia Books Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-stone-900 group-hover:text-amber-900 transition block leading-tight">
              Imamia Books
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-amber-900 block">
              Your Trusted Bookstore
            </span>
          </div>
        </Link>

        {/* Search Bar (Desktop) */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-6 relative">
          <input 
            type="text" 
            placeholder="Search by title, author or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-stone-100/80 border border-stone-200 rounded-full pl-5 pr-11 py-2.5 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800/20 focus:border-amber-800 focus:bg-white transition shadow-inner"
          />
          <button 
            type="submit" 
            className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-amber-900 transition shadow-xs"
          >
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>

        {/* Nav Links & Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-7 font-serif text-xs font-semibold tracking-wide text-stone-800">
          <Link href="/shop" className="hover:text-amber-900 transition">Shop</Link>
          <Link href="/bestsellers" className="hover:text-amber-900 transition">Bestsellers</Link>
          <Link href="/about" className="hover:text-amber-900 transition">About</Link>
          <Link href="/contact" className="hover:text-amber-900 transition">Contact</Link>
        </div>

        {/* Right Icons (Cart & Mobile Menu Toggle) */}
        <div className="flex items-center gap-3">
          <Link 
            href="/cart" 
            className="relative bg-stone-100 hover:bg-stone-200/80 border border-stone-200 text-stone-800 p-2.5 rounded-full transition flex items-center justify-center shadow-xs"
            title="Cart"
          >
            <svg className="w-4 h-4 text-stone-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-amber-900 text-white font-sans text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-xs">
              0
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-800 p-2.5 rounded-full transition flex items-center justify-center shadow-xs"
            aria-label="Toggle Menu"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Search Bar & Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 py-4 space-y-4 shadow-lg animate-fadeIn">
          <form onSubmit={handleSearch} className="flex relative md:hidden">
            <input 
              type="text" 
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-100 border border-stone-200 rounded-xl pl-4 pr-11 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-800"
            />
            <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-stone-900 text-white flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>

          <nav className="flex flex-col space-y-2 font-serif text-sm font-semibold">
            <Link 
              href="/shop" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50 text-stone-800 hover:text-amber-900 transition"
            >
              Shop
            </Link>
            <Link 
              href="/bestsellers" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50 text-stone-800 hover:text-amber-900 transition"
            >
              Bestsellers
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50 text-stone-800 hover:text-amber-900 transition"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50 text-stone-800 hover:text-amber-900 transition"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}