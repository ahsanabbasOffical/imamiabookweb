'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#fffdfa] text-stone-900 flex flex-col selection:bg-amber-100 selection:text-amber-900">
      <Navbar />

      <main className="flex-1 py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="text-amber-800 text-xs font-bold uppercase tracking-widest block">Get in Touch</span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">Contact Imamia Books</h1>
            <p className="text-stone-600 max-w-xl mx-auto text-xs sm:text-sm font-light">
              Have an inquiry about a specific title, order status, or wholesale request? Reach out to our team below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Info Side */}
            <div className="space-y-6 bg-stone-100 border border-stone-200 p-6 rounded-3xl h-fit">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center flex-shrink-0 text-amber-900 shadow-xs">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-stone-900">Location</h3>
                  <p className="text-xs text-stone-600 mt-1">Karachi, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center flex-shrink-0 text-amber-900 shadow-xs">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-stone-900">Email Us</h3>
                  <p className="text-xs text-stone-600 mt-1">support@imamiabooks.com</p>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="md:col-span-2 bg-white border border-stone-200 p-8 rounded-3xl shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">✓</div>
                  <h3 className="font-serif text-xl font-bold">Message Sent Successfully</h3>
                  <p className="text-xs text-stone-600 max-w-sm mx-auto">Thank you for reaching out. A representative from Imamia Books will respond to your inquiry shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-serif text-xs font-bold text-stone-700 mb-1">Your Name</label>
                      <input required type="text" placeholder="Ahsan Abbas" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-800" />
                    </div>
                    <div>
                      <label className="block font-serif text-xs font-bold text-stone-700 mb-1">Email Address</label>
                      <input required type="email" placeholder="name@example.com" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-800" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-serif text-xs font-bold text-stone-700 mb-1">Subject</label>
                    <input required type="text" placeholder="Book availability / Inquiry" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-800" />
                  </div>
                  <div>
                    <label className="block font-serif text-xs font-bold text-stone-700 mb-1">Message</label>
                    <textarea required rows={4} placeholder="Type your message here..." className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-xs text-stone-900 focus:outline-none focus:border-amber-800"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-stone-900 hover:bg-amber-900 text-white font-serif text-xs font-bold py-3 rounded-xl transition shadow-xs">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}