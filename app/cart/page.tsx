import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function CartPage() {
  return (
    <div className="min-h-screen bg-[#fffdfa] text-stone-900 flex flex-col selection:bg-amber-100 selection:text-amber-900">
      <Navbar />

      <main className="flex-1 py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-amber-800 text-xs font-bold uppercase tracking-widest block mb-1">Your Order</span>
            <h1 className="font-serif text-3xl font-bold tracking-tight">Shopping Cart</h1>
          </div>

          {/* Empty Cart State */}
          <div className="bg-white border border-stone-200 rounded-3xl p-12 text-center space-y-6 shadow-sm">
            <div className="w-16 h-16 bg-stone-100 rounded-2xl border border-stone-200 flex items-center justify-center mx-auto text-amber-900">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="space-y-2">
              <h2 className="font-serif text-xl font-bold">Your cart is currently empty</h2>
              <p className="text-stone-600 text-xs max-w-sm mx-auto">Explore our catalog to add authentic books, historical treatises, and collections to your cart.</p>
            </div>
            <div>
              <Link href="/catalog" className="inline-block bg-stone-900 hover:bg-amber-900 text-white px-8 py-3 rounded-full font-serif text-xs font-bold tracking-wide transition shadow-xs">
                Start Shopping
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}