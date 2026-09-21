import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-amber-100 py-12 px-6 text-gray-600 text-sm mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
        <div>
          <div className="font-bold text-[#78350f] mb-2 text-base">Imamia Bookstore Karachi</div>
          <p className="text-gray-500 leading-relaxed">
            Your trusted source for authentic Islamic literature, history, biographies, and spiritual guides.
          </p>
        </div>
        <div>
          <div className="font-bold text-[#78350f] mb-2 text-base">Quick Links</div>
          <p className="mb-1"><Link href="/catalog" className="hover:text-amber-800 transition">Browse Catalog</Link></p>
          <p><Link href="/cart" className="hover:text-amber-800 transition">View Cart</Link></p>
        </div>
        <div>
          <div className="font-bold text-[#78350f] mb-2 text-base">Secure Payments</div>
          <p className="text-gray-500 leading-relaxed">
            Direct bank transfers verified manually for secure, seamless ordering within Karachi.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-amber-50 pt-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Imamia Bookstore Karachi. All rights reserved.
      </div>
    </footer>
  );
}