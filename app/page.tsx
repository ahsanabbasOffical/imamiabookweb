'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const NEW_BOOKS = [
    { id: 1, title: "حضرت علی اصغر علیہ السلام کی مختصر داستان", price: 200, image: "/images/imamia-logo.png" },
    { id: 2, title: "حضرت زینب سلام اللہ علیہا کی مختصر داستان", price: 350, image: "/images/imamia-logo.png" },
    { id: 3, title: "حضرت سکینہ سلام اللہ علیہا کی مختصر داستان", price: 200, image: "/images/imamia-logo.png" },
    { id: 4, title: "کربلا کی کہانی", price: 350, image: "/images/imamia-logo.png" },
    { id: 5, title: "آؤ رنگ بھریں", price: 250, image: "/images/imamia-logo.png" },
  ];

  const BEST_SELLERS = [
    {
      id: 1,
      title: "From Resistance to Victory",
      subtitle: "An Autobiography of Syed Hassan Nasrallah",
      author: "Trans. Syeda Batool Shabbar",
      category: "SHAHUDA BIOGRAPHIES",
      badge: "BESTSELLER",
      price: 1159,
      rating: 4.8,
      reviews: 33,
      image: "/images/imamia-logo.png",
    },
    {
      id: 2,
      title: "رب سے جڑنے کا سفر",
      subtitle: "مهم هريره",
      author: "ام ہریرہ",
      category: "MOTIVATION AND SELF HELP BOOK",
      badge: "BESTSELLER",
      price: 650,
      rating: 4.7,
      reviews: 19,
      image: "/images/imamia-logo.png",
    },
    {
      id: 3,
      title: "The Prophet of Mercy",
      subtitle: "",
      author: "Sayyed Ali Khamenei",
      category: "AHLEBAIT SEERAT",
      badge: "BESTSELLER",
      price: 900,
      rating: 4.9,
      reviews: 42,
      image: "/images/imamia-logo.png",
    },
    {
      id: 4,
      title: "بچوں کے لئے دینی احکام - زندگی کے قاعدے قانون",
      subtitle: "",
      author: "مرتضی دانشمند",
      category: "CHILDREN",
      badge: "BESTSELLER",
      price: 450,
      rating: 4.8,
      reviews: 28,
      image: "/images/imamia-logo.png",
    },
  ];

  const AUTHORS_DATA = [
    {
      id: 'khamenei',
      name: 'Ali Khamenei',
      title: 'Marja & Author',
      avatar: '/images/imamia-logo.png',
      books: [
        { id: 101, title: "The Prophet of Mercy", category: "AHLEBAIT SEERAT", badge: "BESTSELLER", price: 900, rating: 4.8, reviews: 33, image: "/images/imamia-logo.png" },
        { id: 102, title: "Cell No. 14", category: "SHAHUDA BIOGRAPHIES", badge: null, price: 1159, rating: 4.7, reviews: 19, image: "/images/imamia-logo.png" },
      ]
    },
    {
      id: 'mughniyah',
      name: 'Jalal Mughniyah',
      title: 'Author',
      avatar: '/images/imamia-logo.png',
      books: [
        { id: 103, title: "Selected Works of Jalal Mughniyah", category: "ISLAMIC LITERATURE", badge: "POPULAR", price: 800, rating: 4.8, reviews: 24, image: "/images/imamia-logo.png" },
      ]
    },
    {
      id: 'panahian',
      name: 'Agha Ali Reza Panahian',
      title: 'Author & Lecturer',
      avatar: '/images/imamia-logo.png',
      books: [
        { id: 104, title: "Insights on Self-Building", category: "SPIRITUAL GROWTH", badge: "FEATURED", price: 650, rating: 4.9, reviews: 31, image: "/images/imamia-logo.png" },
      ]
    },
    {
      id: 'shariati',
      name: 'Ali Shariati',
      title: 'Sociologist & Author',
      avatar: '/images/imamia-logo.png',
      books: [
        { id: 105, title: "Hajj (The Pilgrimage)", category: "SPIRITUAL REFLECTIONS", badge: "CLASSIC", price: 600, rating: 4.9, reviews: 51, image: "/images/imamia-logo.png" },
        { id: 106, title: "Red Shi'ism vs. Black Shi'ism", category: "SOCIOLOGY & HISTORY", badge: "ESSENTIAL", price: 700, rating: 4.7, reviews: 37, image: "/images/imamia-logo.png" },
      ]
    }
  ];

  const FAQS_DATA = [
    {
      id: 0,
      question: "How do I place an order?",
      answer: "Browse our shop, add books to your cart, and complete checkout with your delivery details. You can also order directly via WhatsApp from any product page."
    },
    {
      id: 1,
      question: "Is Cash on Delivery available everywhere?",
      answer: "Yes, we offer Cash on Delivery services across all major cities and towns nationwide."
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept Cash on Delivery (COD), direct bank transfers, and mobile wallet payments."
    },
    {
      id: 3,
      question: "How long does delivery take?",
      answer: "Standard delivery usually takes 3 to 5 business days depending on your location."
    },
    {
      id: 4,
      question: "What are your shipping charges?",
      answer: "Shipping charges vary based on order weight and destination city, and are calculated at checkout."
    }
  ];

  const [selectedAuthorId, setSelectedAuthorId] = useState('khamenei');
  const activeAuthor = AUTHORS_DATA.find(a => a.id === selectedAuthorId) || AUTHORS_DATA[0];

  const [openFaqId, setOpenFaqId] = useState<number | null>(0);

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    setContactForm({ name: '', phone: '', email: '', subject: '', message: '' });
  };

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 280, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#fffdfa] text-stone-800 font-sans flex flex-col justify-between selection:bg-amber-900 selection:text-white overflow-x-hidden">
      <div>
        <Navbar />

        {/* Hero Section with Video Background */}
        <section className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 py-12 sm:py-24 text-center">
          <div className="absolute inset-0 z-0 bg-stone-950">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-40 scale-105"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#fffdfa]/90 via-[#fffdfa]/70 to-[#fffdfa]"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto w-full px-2">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-6">
              <div className="h-[1px] w-6 sm:w-12 bg-amber-800/60"></div>
              <span className="text-amber-900 text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.2em]">
                Est. Trusted Islamic Publishing
              </span>
              <div className="h-[1px] w-6 sm:w-12 bg-amber-800/60"></div>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-normal text-stone-900 tracking-tight leading-[1.15] mb-4 sm:mb-6">
              Words that guide, <br />
              <span className="italic font-serif text-amber-800 font-medium">editions</span> that last.
            </h1>

            <p className="text-stone-700 text-xs sm:text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-10">
              ✨ Welcome to our trusted Imamia bookstore — a place for knowledge, faith, and reflection. Explore a carefully curated collection of Quran, Duas, Ahlulbait (a.s), Islamic history, biographies, literature, and much more. 📚🤍
            </p>

            <div className="flex flex-row flex-wrap items-center justify-center gap-3">
              <Link 
                href="/catalog" 
                className="bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs sm:text-sm px-6 sm:px-8 py-3 rounded-xl shadow-lg transition tracking-wide text-center"
              >
                Shop Bestsellers
              </Link>
              <Link 
                href="/catalog" 
                className="bg-white/90 hover:bg-white text-stone-900 border border-stone-300 font-medium text-xs sm:text-sm px-6 sm:px-8 py-3 rounded-xl shadow-sm backdrop-blur-xs transition tracking-wide text-center"
              >
                View All Books
              </Link>
            </div>
          </div>
        </section>

        {/* Best Sellers Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="flex flex-row justify-between items-end mb-6 sm:mb-10 gap-2">
            <div>
              <span className="text-amber-900 text-[10px] font-bold uppercase tracking-[0.2em] block mb-1">
                — Reader Favourites
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900">Best Sellers</h2>
            </div>
            <Link 
              href="/catalog" 
              className="bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 font-medium text-xs px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl shadow-xs transition"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {BEST_SELLERS.map((book) => (
              <div 
                key={book.id} 
                className="bg-white rounded-2xl border border-stone-200/80 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative"
              >
                <button className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-xs border border-stone-200 text-stone-600 hover:text-amber-800 transition">
                  🤍
                </button>

                <div>
                  <div className="relative w-full h-56 sm:h-72 bg-stone-100 rounded-xl mb-4 flex items-center justify-center border border-stone-200/60 overflow-hidden p-3 group-hover:border-amber-700 transition">
                    {book.badge && (
                      <span className="absolute top-3 left-3 bg-[#a87c42] text-white text-[9px] font-bold px-2.5 py-1 rounded tracking-wider shadow-xs">
                        {book.badge}
                      </span>
                    )}
                    <img src={book.image} alt={book.title} className="max-h-full object-contain transform group-hover:scale-105 transition duration-300" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-900 block mb-1.5">
                    {book.category}
                  </span>

                  <h3 className="font-serif text-stone-900 font-bold text-sm sm:text-base mb-1 group-hover:text-amber-900 transition line-clamp-2">
                    {book.title}
                  </h3>

                  {book.subtitle && (
                    <p className="text-xs text-stone-500 mb-1 font-light line-clamp-1">{book.subtitle}</p>
                  )}
                  <p className="text-xs text-stone-600 mb-4 font-medium">{book.author}</p>
                </div>

                <div>
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="font-serif font-black text-stone-900 text-base sm:text-lg">Rs. {book.price}</span>
                    <button className="bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium px-3.5 sm:px-4 py-2 rounded-lg transition shadow-xs">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* New In Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="text-center mb-6 sm:mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-[1px] w-6 sm:w-8 bg-amber-800/40"></div>
              <span className="text-amber-900 text-[10px] font-bold uppercase tracking-[0.2em]">Just In</span>
              <div className="h-[1px] w-6 sm:w-8 bg-amber-800/40"></div>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 mb-1">New In</h2>
            <p className="text-stone-500 text-xs sm:text-sm font-light">Fresh arrivals, just for you</p>
          </div>

          <div className="relative overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-2 px-1 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {NEW_BOOKS.map((book) => (
                <div 
                  key={book.id} 
                  className="min-w-[220px] sm:min-w-[280px] bg-white rounded-2xl border border-stone-200/80 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group flex-shrink-0"
                >
                  <div>
                    <div className="relative w-full h-52 sm:h-64 bg-stone-50 rounded-xl mb-4 flex items-center justify-center border border-stone-100 overflow-hidden p-4 group-hover:border-amber-700 transition">
                      <img src={book.image} alt={book.title} className="max-h-full object-contain transform group-hover:scale-105 transition duration-300" />
                    </div>
                    <h3 className="font-serif text-stone-900 font-bold text-xs sm:text-sm line-clamp-2 text-center mb-3">
                      {book.title}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="font-serif font-black text-stone-900 text-base">Rs. {book.price}</span>
                    <button className="bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium px-3.5 py-2 rounded-lg transition shadow-xs">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Authors Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 my-6 sm:my-8 bg-stone-50/60 border border-stone-200/60 rounded-3xl">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-amber-800 text-xs font-bold uppercase tracking-[0.2em] block mb-2">— Meet The Voices</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 mb-2">Featured Authors</h2>
            <p className="text-stone-500 text-xs sm:text-sm font-light">Stories, ideas & journeys behind the voices.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 md:gap-12 mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-stone-200/80">
            {AUTHORS_DATA.map((author) => {
              const isSelected = author.id === selectedAuthorId;
              return (
                <button
                  key={author.id}
                  onClick={() => setSelectedAuthorId(author.id)}
                  className="group flex flex-col items-center text-center focus:outline-none w-20 sm:w-auto"
                >
                  <div className={`relative w-16 h-16 sm:w-24 sm:h-24 rounded-full p-1 transition-all duration-300 ${
                    isSelected 
                      ? 'ring-2 ring-amber-700 ring-offset-4 ring-offset-[#fffdfa] scale-105 shadow-md' 
                      : 'hover:ring-2 hover:ring-stone-400 hover:ring-offset-2'
                  }`}>
                    <img 
                      src={author.avatar} 
                      alt={author.name} 
                      className="w-full h-full rounded-full object-cover bg-stone-200 border border-stone-200" 
                    />
                  </div>
                  <h3 className={`font-serif text-xs sm:text-base font-bold mt-2 sm:mt-3 transition-colors line-clamp-1 ${
                    isSelected ? 'text-amber-900' : 'text-stone-900 group-hover:text-amber-800'
                  }`}>
                    {author.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-stone-500 font-medium">{author.title}</p>
                </button>
              );
            })}
          </div>

          <div className="bg-white border border-stone-200/80 rounded-2xl p-4 sm:p-6 mb-4 shadow-xs">
            <div className="flex flex-row justify-between items-center mb-6 gap-2 border-b border-stone-100 pb-4">
              <div className="flex items-center gap-3">
                <img src={activeAuthor.avatar} alt={activeAuthor.name} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-stone-200" />
                <div>
                  <h4 className="font-serif text-xs sm:text-base font-bold text-stone-900">{activeAuthor.name}&apos;s Collection</h4>
                  <p className="text-[10px] sm:text-xs text-stone-500 font-light hidden sm:block">Showing verified publications and literature</p>
                </div>
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-amber-900 bg-amber-50 border border-amber-200/50 px-2.5 sm:px-3 py-1.5 rounded-lg">
                {activeAuthor.books.length} Available
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {activeAuthor.books.map((book) => (
                <div 
                  key={book.id} 
                  className="bg-stone-50/50 rounded-2xl border border-stone-200/80 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative"
                >
                  <button className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-xs border border-stone-200 text-stone-600 hover:text-amber-800 transition">
                    🤍
                  </button>

                  <div>
                    <div className="relative w-full h-52 sm:h-64 bg-white rounded-xl mb-4 flex items-center justify-center border border-stone-100 overflow-hidden p-4 group-hover:border-amber-700 transition">
                      {book.badge && (
                        <span className="absolute top-3 left-3 bg-[#a87c42] text-white text-[9px] font-bold px-2.5 py-1 rounded tracking-wider">
                          {book.badge}
                        </span>
                      )}
                      <img src={book.image} alt={book.title} className="max-h-full object-contain transform group-hover:scale-105 transition duration-300" />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 block mb-1">
                      {book.category}
                    </span>
                    <h3 className="font-serif text-stone-900 font-bold text-sm sm:text-base mb-3 group-hover:text-amber-900 transition line-clamp-2">
                      {book.title}
                    </h3>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 mb-3 text-xs">
                      <span className="text-amber-500">★★★★★</span>
                      <span className="text-stone-500 font-medium">{book.rating} ({book.reviews})</span>
                    </div>

                    <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between">
                      <span className="font-serif font-black text-stone-900 text-base sm:text-lg">Rs. {book.price}</span>
                      <button className="bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium px-3.5 sm:px-4 py-2 rounded-lg transition shadow-xs">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Categories Preview */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mb-6">
          <div className="flex flex-row justify-between items-end mb-6 gap-2">
            <div>
              <span className="text-amber-800 text-xs font-bold uppercase tracking-widest block mb-1">Curated Collections</span>
              <h2 className="font-serif text-xl sm:text-3xl font-bold text-stone-900">Explore by Category</h2>
            </div>
            <Link href="/catalog" className="text-xs font-bold text-amber-900 hover:underline whitespace-nowrap">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                name: 'History & Sermons',
                svg: (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-amber-900 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              },
              {
                name: 'Duas & Ziyarat',
                svg: (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-amber-900 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              {
                name: 'Biographies',
                svg: (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-amber-900 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )
              },
              {
                name: 'General Literature',
                svg: (
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-amber-900 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                  </svg>
                )
              }
            ].map((cat) => (
              <Link 
                key={cat.name} 
                href="/catalog" 
                className="bg-white p-4 sm:p-6 rounded-2xl border border-stone-200 hover:border-amber-800 hover:shadow-md transition text-center group flex flex-col items-center justify-center"
              >
                <div className="mb-2 sm:mb-3 flex items-center justify-center">
                  {cat.svg}
                </div>
                <h3 className="font-serif font-bold text-stone-900 text-xs sm:text-sm group-hover:text-amber-800 transition">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* The Importance of Books Section */}
        <section className="relative overflow-hidden py-12 sm:py-20 px-4 sm:px-6 my-8 bg-stone-50/80 border-y border-stone-200/60">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5 relative flex justify-center items-center min-h-[240px] sm:min-h-[350px]">
              <div className="absolute w-48 h-48 sm:w-72 sm:h-72 bg-amber-200/30 rounded-full blur-3xl -z-10"></div>
              
              <div className="relative flex items-center justify-center scale-90 sm:scale-100">
                <div className="w-36 sm:w-56 h-52 sm:h-84 bg-white shadow-xl rounded-2xl transform -rotate-12 translate-x-4 sm:translate-x-6 overflow-hidden border-4 border-white">
                  <img src="/images/imamia-logo.png" alt="Book preview" className="w-full h-full object-contain p-4 bg-stone-50" />
                </div>
                <div className="absolute w-40 sm:w-60 h-56 sm:h-92 bg-white shadow-2xl rounded-2xl transform rotate-3 -translate-x-4 sm:-translate-x-6 overflow-hidden border-4 border-white z-10">
                  <img src="/images/imamia-logo.png" alt="Book preview main" className="w-full h-full object-contain p-4 bg-stone-50" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-[1px] w-6 sm:w-8 bg-amber-800/60"></div>
                <span className="text-amber-900 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em]">
                  The Value of Reading
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-stone-900 mb-3 sm:mb-4 tracking-tight">
                The Importance of Books
              </h2>

              <p className="text-stone-600 text-xs sm:text-base leading-relaxed mb-6 sm:mb-10 font-light">
                A book is more than a collection of pages. It carries knowledge, ideas, and experience from one person to another, and from one generation to the next.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center flex-shrink-0 shadow-xs text-stone-800 text-xs sm:text-sm">
                    📖
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base mb-1">Knowledge & Reflection</h4>
                    <p className="text-stone-500 text-xs leading-relaxed font-light">
                      Books deepen our knowledge, broaden our perspective, and encourage thoughtful reflection.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center flex-shrink-0 shadow-xs text-stone-800 text-xs sm:text-sm">
                    🏛️
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base mb-1">Character & Growth</h4>
                    <p className="text-stone-500 text-xs leading-relaxed font-light">
                      Good books shape character, strengthen values, and help us grow in understanding.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center flex-shrink-0 shadow-xs text-stone-800 text-xs sm:text-sm">
                    🤍
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base mb-1">Guidance & Peace</h4>
                    <p className="text-stone-500 text-xs leading-relaxed font-light">
                      Reading can bring perspective, patience, and guidance during difficult moments.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center flex-shrink-0 shadow-xs text-stone-800 text-xs sm:text-sm">
                    ⭕
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base mb-1">Knowledge Across Generations</h4>
                    <p className="text-stone-500 text-xs leading-relaxed font-light">
                      Books preserve knowledge, wisdom, and tradition so they can be passed on to future generations.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <Link 
                  href="/catalog" 
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 font-medium text-xs sm:text-sm px-6 sm:px-8 py-3.5 rounded-xl shadow-xs transition tracking-wide group text-center w-full sm:w-auto"
                >
                  Find Your Next Book 
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12 mb-6">
          <div className="space-y-3 sm:space-y-4">
            {FAQS_DATA.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div 
                  key={faq.id}
                  className={`bg-white border rounded-2xl transition-all duration-300 overflow-hidden shadow-xs ${
                    isOpen ? 'border-amber-800/60 shadow-md ring-1 ring-amber-800/20' : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none gap-3"
                  >
                    <span className="font-serif font-bold text-stone-900 text-xs sm:text-lg">
                      {faq.question}
                    </span>
                    <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 text-xs sm:text-sm font-bold ${
                      isOpen ? 'bg-amber-900 text-white rotate-0' : 'bg-stone-100 text-stone-700'
                    }`}>
                      {isOpen ? '✕' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-100 pt-3 sm:pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-6 sm:mt-10">
            <Link 
              href="/faqs" 
              className="inline-block bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 font-medium text-xs sm:text-sm px-8 py-3 rounded-xl shadow-xs transition tracking-wide w-full sm:w-auto text-center"
            >
              View All FAQs
            </Link>
          </div>
        </section>

        {/* Get in Touch / Questions About an Order? Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 mb-12">
          <div className="bg-white border border-stone-200/80 rounded-3xl p-5 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-[1px] w-6 sm:w-8 bg-amber-800/60"></div>
                <span className="text-amber-900 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em]">
                  Get in Touch
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl font-normal text-stone-900 mb-3 sm:mb-4 tracking-tight">
                Questions About an Order?
              </h2>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 font-light">
                Reach out for order help, book recommendations, or bulk / madrassa requests — we reply quickly on WhatsApp.
              </p>

              <div className="space-y-4 sm:space-y-6 pt-4 border-t border-stone-100">
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-xs sm:text-sm mb-1">Store Address</h4>
                  <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                    Imamia Books, Sulaiman Pura Road, Near Central Imam Bargah Jhalwal, Sargodha, Pakistan
                  </p>
                </div>

                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-xs sm:text-sm mb-1">Phone / WhatsApp</h4>
                  <p className="text-stone-500 text-xs sm:text-sm font-light break-words">
                    0349-1039088 | 0309-0036712 | 0318-6013463
                  </p>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 bg-[#faf8f5] border border-stone-200/80 rounded-2xl p-4 sm:p-8">
              <form onSubmit={handleContactSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    Name
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Your name" 
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full bg-white border border-stone-300/80 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800/20 focus:border-amber-800 transition shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    Phone
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="03XX XXXXXXX" 
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                    className="w-full bg-white border border-stone-300/80 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800/20 focus:border-amber-800 transition shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    Email
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="you@example.com" 
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full bg-white border border-stone-300/80 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800/20 focus:border-amber-800 transition shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="How can we help?" 
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                    className="w-full bg-white border border-stone-300/80 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800/20 focus:border-amber-800 transition shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    Message
                  </label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Write your message..." 
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full bg-white border border-stone-300/80 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-800/20 focus:border-amber-800 transition shadow-xs resize-none"
                  ></textarea>
                </div>

                <div>
                  <button 
                    type="submit"
                    className="w-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs sm:text-sm py-3.5 rounded-xl shadow-md transition tracking-wide"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

          </div>
        </section>

      </div>

      <Footer />

      {/* Floating WhatsApp Quick Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <a 
          href="https://wa.me/923000000000?text=Hello,%20I%20would%20like%20to%20inquire%20about%20books." 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-2xl text-xl sm:text-2xl transition transform hover:scale-105"
          title="Chat on WhatsApp"
        >
          💬
        </a>
      </div>
    </main>
  );
}