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
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Official Horizon Solar Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 sm:gap-3.5 group">
            <div className="relative shrink-0">
              <img 
                src="/images/horizon-emblem-transparent.png" 
                alt="Horizon Solar Power Solutions Logo" 
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-[70px] md:h-[70px] object-contain group-hover:scale-105 transition-transform drop-shadow-xs"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">
                HORIZON
              </span>
              <span className="text-[10px] sm:text-[11.5px] font-black tracking-[0.2em] text-teal-800 uppercase mt-1">
                SOLAR POWER SOLUTIONS
              </span>
              <span className="text-[8px] sm:text-[9px] font-bold tracking-wider text-amber-600 uppercase mt-0.5">
                CLEAN ENERGY • BRIGHTER TOMORROW
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[12px] font-bold tracking-wider text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors uppercase tracking-widest ${
                  link.name === 'HOME' ? 'text-teal-800 font-black' : 'hover:text-teal-800'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Dark Teal Pill Button */}
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
              className="p-2 text-slate-700"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold tracking-wider text-slate-800 hover:text-teal-800 py-1 uppercase"
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
              className="w-full py-2.5 rounded-full bg-teal-800 text-white font-bold text-xs uppercase tracking-wider"
            >
              BOOK FREE SURVEY
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
