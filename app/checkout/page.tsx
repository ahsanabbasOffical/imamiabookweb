import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#fffdfa] text-stone-900 flex flex-col selection:bg-amber-100 selection:text-amber-900">
      <Navbar />

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 text-center space-y-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-[0.2em]">
          <span>—</span> Secure Ordering <span>—</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          Complete Your <span className="italic font-normal text-amber-800">Order</span>
        </h1>
        <p className="text-stone-600 max-w-md mx-auto text-xs sm:text-sm font-light leading-relaxed">
          Fill in your delivery information below. We process orders across Karachi and Pakistan with direct bank transfer confirmation.
        </p>
      </section>

      {/* Checkout Form Container */}
      <main className="flex-1 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
          
          <div className="space-y-4">
            <h2 className="font-serif font-bold text-lg text-stone-900 border-b border-stone-100 pb-3">
              Shipping Information
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-serif font-bold text-stone-700">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name" 
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-none focus:border-amber-800 focus:bg-white transition"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-serif font-bold text-stone-700">Phone Number</label>
                <input 
                  type="text" 
                  placeholder="03XXXXXXXXX" 
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-stone-900 focus:outline-none focus:border-amber-800 focus:bg-white transition"
                />
              </div>
            </div>

            <div className="space-y-1.5 pt-2">
              <label className="text-xs font-serif font-bold text-stone-700">Delivery Address (Karachi / Pakistan)</label>
              <textarea 
                rows={3}
                placeholder="House/Flat #, Street name, Area, City" 
                className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-xs text-stone-900 focus:outline-none focus:border-amber-800 focus:bg-white transition resize-none"
              />
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-stone-100">
            <h2 className="font-serif font-bold text-lg text-stone-900">Payment Method</h2>
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 text-xs text-stone-700 space-y-1">
              <p className="font-bold font-serif text-amber-900">Direct Bank Transfer (Advance Payment)</p>
              <p className="font-light text-stone-600">Account details and order verification instructions will be provided upon submission.</p>
            </div>
          </div>

          <div className="pt-4">
            <button className="w-full bg-stone-900 hover:bg-amber-900 text-white font-serif font-bold text-xs uppercase tracking-wider py-4 rounded-2xl transition shadow-xs">
              Confirm & Place Order
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}