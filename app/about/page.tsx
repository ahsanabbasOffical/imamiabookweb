import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fffdfa] text-stone-900 flex flex-col selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      
      <main className="flex-1 py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="text-amber-800 text-xs font-bold uppercase tracking-widest block">Our Heritage & Mission</span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">About Imamia Books</h1>
            <p className="text-stone-600 max-w-2xl mx-auto font-serif italic text-sm sm:text-base">
              "Words that guide, editions that last."
            </p>
          </div>

          {/* Featured Image / Banner Box */}
          <div className="bg-stone-100 border border-stone-200 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xs">
            <div className="w-16 h-16 bg-white rounded-2xl border border-stone-200 flex items-center justify-center mx-auto shadow-xs text-amber-900">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold">Dedicated to Authentic Islamic Scholarship</h2>
            <p className="text-stone-700 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-light">
              Based in Karachi, Imamia Books is your trusted bookstore for carefully curated literature. We specialize in sourcing authentic historical texts, sermons, comprehensive biographies, and insightful research with absolute care and reliability.
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-2 shadow-xs">
              <div className="text-amber-900 mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900">Authentic Sourcing</h3>
              <p className="text-xs text-stone-600 leading-relaxed">Every publication is rigorously curated to ensure absolute reliability and scholarly depth.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-2 shadow-xs">
              <div className="text-amber-900 mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900">Lasting Quality</h3>
              <p className="text-xs text-stone-600 leading-relaxed">Editions printed with durable bindings and premium papers built to be preserved across generations.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-2 shadow-xs">
              <div className="text-amber-900 mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900">Community Trust</h3>
              <p className="text-xs text-stone-600 leading-relaxed">Serving students, researchers, and households throughout Karachi and across Pakistan with dedication.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-6">
            <Link href="/catalog" className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-900 text-white px-8 py-3.5 rounded-full font-serif text-xs font-bold tracking-wide transition shadow-sm">
              Explore Our Catalog →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}