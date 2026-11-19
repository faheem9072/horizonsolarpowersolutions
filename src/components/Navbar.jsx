import React, { useState } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { IMAGE_ASSETS } from '../data/imageAssets';
import { COMPANY_INFO, FEATURE_FLAGS } from '../data/solarData';

export default function Navbar({ onOpenQuoteModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PACKAGES', href: '#packages' },
    ...(FEATURE_FLAGS.SHOW_PROJECTS ? [{ name: 'PROJECTS', href: '#projects' }] : []),
    { name: 'CALCULATOR', href: '#calculator' },
    { name: 'FAQS', href: '#faq' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleFreeQuoteClick = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          
          {/* Official Horizon Brand Logo */}
          <a href="#" className="flex items-center gap-3 sm:gap-3.5 group shrink-0">
            <img 
              src={IMAGE_ASSETS.brand.emblem.src} 
              alt={IMAGE_ASSETS.brand.emblem.alt}
              width={IMAGE_ASSETS.brand.emblem.width}
              height={IMAGE_ASSETS.brand.emblem.height}
              loading="eager"
              className="w-13 h-13 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] object-contain shrink-0 group-hover:scale-105 transition-transform"
            />
            
            <div className="flex flex-col justify-center">
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-none">
                HORIZON
              </span>
              <span className="text-[9.5px] sm:text-[11px] font-black tracking-[0.2em] text-teal-800 uppercase mt-1 leading-none whitespace-nowrap">
                SOLAR POWER SOLUTIONS
              </span>
              <span className="hidden sm:block text-[8px] sm:text-[9px] font-bold tracking-wider text-amber-600 uppercase mt-0.5 leading-none whitespace-nowrap">
                CLEAN ENERGY • BRIGHTER TOMORROW
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 text-[12px] font-bold tracking-widest text-slate-700">
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

          {/* Right Action: Clean Teal Pill Button - Renamed to "FREE QUOTE" */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleFreeQuoteClick}
              className="px-5 py-2.5 rounded-full text-xs font-black tracking-widest uppercase text-white bg-teal-800 hover:bg-teal-900 shadow-sm transition-all cursor-pointer flex items-center gap-1.5 transform hover:-translate-y-0.5"
            >
              <span>FREE QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Actions: Quote Pill & Hamburger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={handleFreeQuoteClick}
              className="sm:hidden px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-teal-800 shadow-xs"
            >
              Free Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-3 shadow-lg animate-fadeIn">
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
                handleFreeQuoteClick();
              }}
              className="w-full py-3 rounded-full bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
            >
              <span>GET FREE QUOTE NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
