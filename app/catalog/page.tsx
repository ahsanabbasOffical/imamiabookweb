'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BOOKS = [
  { id: 1, title: "محبت کی دستک (Life of Shaheed Ebrahim Hadi)", category: "Biographies", price: 1200, badge: "Best Seller", image: "/images/imamia-logo.png" },
  { id: 2, title: "History of Early Islamic Leadership & Sermons", category: "History & Sermons", price: 1500, badge: "Featured", image: "/images/imamia-logo.png" },
  { id: 3, title: "Comprehensive Collection of Authentic Duas", category: "Duas & Ziyarat", price: 950, badge: "Essential", image: "/images/imamia-logo.png" },
  { id: 4, title: "Ziyarat Compendium & Spiritual Guide", category: "Duas & Ziyarat", price: 1100, badge: "Popular", image: "/images/imamia-logo.png" },
  { id: 5, title: "The Path of Wisdom: Selected Discourses", category: "General Literature", price: 850, badge: "New", image: "/images/imamia-logo.png" },
  { id: 6, title: "Biographies of Notable Figures of Truth", category: "Biographies", price: 1350, badge: "Classic", image: "/images/imamia-logo.png" },
];

const CATEGORIES = ["All", "History & Sermons", "Duas & Ziyarat", "Biographies", "General Literature"];

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = BOOKS.filter(book => {
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#fffdfa] flex flex-col justify-between font-sans">
      <div>
        <Navbar />

        {/* Catalog Header Banner */}
        <div className="bg-gradient-to-r from-[#78350f] via-[#572306] to-[#451a03] text-white py-16 px-6 mb-10 text-center shadow-inner relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="bg-amber-800/80 text-amber-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-3">
              Verified Bookstore Catalog
            </span>
            <h1 className="text-3xl md:text-5xl font-black mb-3 tracking-tight">Explore Our Full Library</h1>
            <p className="text-amber-100 text-sm md:text-base font-light max-w-xl mx-auto">
              Browse authentic titles, historical volumes, and spiritual guides. Order securely with advance bank transfer and direct Karachi delivery.
            </p>

            {/* Search Bar Input */}
            <div className="mt-8 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search books by title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-amber-300/30 text-white placeholder-amber-200/70 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mb-20">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition shadow-sm ${
                  selectedCategory === cat
                    ? 'bg-[#78350f] text-white shadow-md scale-105'
                    : 'bg-white text-amber-900 border border-amber-200 hover:bg-amber-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Book Grid */}
          {filteredBooks.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-amber-100 shadow-sm max-w-md mx-auto">
              <p className="text-amber-900 font-semibold text-lg">No books found matching your search.</p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="mt-4 bg-[#78350f] text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-amber-800 transition"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredBooks.map((book) => (
                <div key={book.id} className="bg-white rounded-2xl border border-amber-100 p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="relative w-full h-52 bg-amber-50/50 rounded-xl mb-4 flex items-center justify-center border border-amber-100 overflow-hidden p-4 group-hover:border-amber-300 transition">
                      <span className="absolute top-3 left-3 bg-amber-900 text-amber-100 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {book.badge}
                      </span>
                      <img src={book.image} alt={book.title} className="max-h-full object-contain transform group-hover:scale-105 transition duration-300" />
                    </div>
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-100/60 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {book.category}
                    </span>
                    <h3 className="font-bold text-amber-950 text-base mt-2.5 mb-1 line-clamp-2 leading-snug">{book.title}</h3>
                  </div>
                  <div className="mt-4 pt-4 border-t border-amber-50 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase font-medium">Price</span>
                      <span className="font-black text-[#78350f] text-base">Rs. {book.price.toLocaleString()}</span>
                    </div>
                    <div className="flex gap-2">
                      <a 
                        href={`https://wa.me/923000000000?text=Hello,%20I%20want%20to%20order%20*${encodeURIComponent(book.title)}*%20priced%20at%20Rs.${book.price}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold p-2.5 rounded-xl transition shadow-sm"
                        title="Order via WhatsApp"
                      >
                        💬
                      </a>
                      <button className="bg-amber-900 text-white text-xs font-bold px-3.5 py-2.5 rounded-xl hover:bg-amber-800 transition shadow-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />

      {/* Floating WhatsApp Quick Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/923000000000?text=Hello,%20I%20would%20like%20to%20inquire%20about%20books%20from%20the%20catalog." 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl text-2xl transition transform hover:scale-105"
          title="Chat on WhatsApp"
        >
          💬
        </a>
      </div>
    </main>
  );
}