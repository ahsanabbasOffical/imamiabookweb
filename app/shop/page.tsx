import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#fffdfa] text-stone-900 flex flex-col selection:bg-amber-100 selection:text-amber-900">
      <Navbar />

      {/* Light Hero Section */}
      <section className="py-16 px-4 sm:px-6 text-center space-y-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-[0.2em]">
          <span>—</span> Est. Trusted Islamic Publishing <span>—</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
          Explore Our <span className="italic font-normal text-amber-800">Full</span> Library
        </h1>
        <p className="text-stone-600 max-w-xl mx-auto text-xs sm:text-sm font-light leading-relaxed">
          Browse authentic titles, historical volumes, and spiritual guides. Order securely with advance bank transfer and direct Karachi delivery.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto pt-2">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search books by title..." 
              className="w-full bg-stone-100/80 border border-stone-200 text-stone-900 placeholder-stone-400 text-xs rounded-full px-5 py-3.5 pl-11 focus:outline-none focus:border-amber-800 focus:bg-white shadow-inner transition"
            />
            <svg className="w-4 h-4 text-stone-400 absolute left-4 top-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['All', 'History & Sermons', 'Duas & Ziyarat', 'Biographies', 'General Literature'].map((category, idx) => (
              <button 
                key={category} 
                className={`px-5 py-2.5 rounded-full font-serif text-xs font-bold transition border ${
                  idx === 0 
                    ? 'bg-stone-900 text-white border-stone-900 shadow-xs' 
                    : 'bg-white text-stone-700 border-stone-200 hover:border-amber-800/50 hover:bg-stone-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Book Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white border border-stone-200 rounded-3xl p-6 space-y-4 hover:border-amber-800/40 transition shadow-xs flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-full h-48 bg-stone-50 rounded-2xl border border-stone-200 flex items-center justify-center text-stone-400 text-xs font-serif italic">
                    Book Cover Placeholder
                  </div>
                  <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">History & Sermons</span>
                  <h3 className="font-serif font-bold text-base text-stone-900 leading-snug">Sample Scholarly Volume Vol. {item}</h3>
                  <p className="text-xs text-stone-600 font-light line-clamp-2">An in-depth collection of historical accounts and verified narrations meticulously compiled.</p>
                </div>
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-serif font-bold text-sm text-stone-900">Rs. 1,500</span>
                  <button className="bg-stone-900 hover:bg-amber-900 text-white px-4 py-2 rounded-xl font-serif text-xs font-bold transition shadow-xs">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}