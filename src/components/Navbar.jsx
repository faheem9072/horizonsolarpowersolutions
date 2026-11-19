import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenQuoteModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PACKAGES', href: '#packages' },
    { name: 'CALCULATOR', href: '#calculator' },
    { name: 'FAQS', href: '#faq' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Official Horizon Brand Logo */}
          <a href="#" className="flex items-center gap-3 sm:gap-3.5 group">
            <img 
              src="/images/horizon-emblem-transparent.png" 
              alt="Horizon Solar Power Solutions Logo" 
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0 group-hover:scale-105 transition-transform"
            />
            
            <div className="flex flex-col justify-center">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">
                HORIZON
              </span>
              <span className="text-[10px] sm:text-[11px] font-black tracking-[0.22em] text-teal-800 uppercase mt-1 leading-none">
                SOLAR POWER SOLUTIONS
              </span>
              <span className="text-[8px] sm:text-[9px] font-bold tracking-wider text-amber-600 uppercase mt-0.5 leading-none">
                CLEAN ENERGY • BRIGHTER TOMORROW
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[12px] font-bold tracking-widest text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors uppercase tracking-widest hover:text-teal-800 ${
                  link.name === 'HOME' ? 'text-teal-800 font-black' : ''
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Clean Teal Pill Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-2.5 rounded-full text-xs font-black tracking-widest uppercase text-white bg-teal-800 hover:bg-teal-900 shadow-sm transition-all cursor-pointer"
            >
              FREE SURVEY
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="sm:hidden px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-teal-800"
            >
              Survey
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-3 shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold tracking-wider text-slate-800 hover:text-teal-800 py-1.5 uppercase transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-full bg-teal-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm"
            >
              BOOK FREE SURVEY
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
