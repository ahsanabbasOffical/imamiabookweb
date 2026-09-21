import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function BestsellersPage() {
  return (
    <div className="min-h-screen bg-[#fffdfa] text-stone-900 flex flex-col selection:bg-amber-100 selection:text-amber-900">
      <Navbar />

      {/* Light Hero Section */}
      <section className="py-16 px-4 sm:px-6 text-center space-y-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-[0.2em]">
          <span>—</span> Reader Favorites <span>—</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
          Our Most <span className="italic font-normal text-amber-800">Sought-After</span> Titles
        </h1>
        <p className="text-stone-600 max-w-xl mx-auto text-xs sm:text-sm font-light leading-relaxed">
          The definitive historical editions, spiritual guides, and scholarly research most frequently requested by our community.
        </p>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* Bestseller List Cards */}
          {[1, 2, 3, 4].map((rank) => (
            <div key={rank} className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 hover:border-amber-800/40 transition shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 font-serif font-bold text-lg flex items-center justify-center flex-shrink-0 shadow-xs">
                #{rank}
              </div>

              <div className="w-24 h-32 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-center text-stone-400 text-[10px] font-serif text-center p-2 flex-shrink-0">
                Cover Image
              </div>

              <div className="flex-1 space-y-2 text-center sm:text-left">
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">Top Ranked Edition</span>
                <h3 className="font-serif font-bold text-lg text-stone-900">Comprehensive Research & Historical Compilation Vol. {rank}</h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  A highly requested publication featuring verified insights, thorough annotations, and durable library binding.
                </p>
                <div className="font-serif font-bold text-sm text-stone-900 pt-1">Rs. 2,200</div>
              </div>

              <div className="flex-shrink-0 pt-2 sm:pt-0">
                <button className="bg-stone-900 hover:bg-amber-900 text-white px-6 py-3 rounded-xl font-serif text-xs font-bold transition shadow-xs">
                  View Details
                </button>
              </div>
            </div>
          ))}

        </div>
      </main>
    </div>
  );
}