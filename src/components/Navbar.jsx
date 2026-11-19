import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

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
    <header className="sticky top-0 z-50 bg-white shadow-xs">
      
      {/* 1. Official Corporate Top Bar (Inspired by GEPS & Tier-1 Solar EPCs) */}
      <div className="bg-slate-900 text-slate-300 text-[11px] font-medium border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          
          {/* Left: Contact & Location */}
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${COMPANY_INFO.phone1Raw}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_INFO.phone1}</span>
            </a>

            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>

            <div className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Kandakkai Road, Mayyil, Kannur</span>
            </div>
          </div>

          {/* Right: Official GSTIN Badge & Quick Socials */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>GSTIN: {COMPANY_INFO.gstin}</span>
            </div>

            <div className="flex items-center gap-2 pl-2 border-l border-slate-700">
              <a 
                href={COMPANY_INFO.social.facebook} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white transition-colors font-bold text-xs"
                title="Facebook"
              >
                f
              </a>
              <a 
                href={COMPANY_INFO.social.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white transition-colors font-bold text-xs"
                title="Instagram"
              >
                ig
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Official Brand Logo */}
            <a href="#" className="flex items-center gap-3.5 group">
              <img 
                src="/images/horizon-emblem-transparent.png" 
                alt="Horizon Solar Power Solutions Logo" 
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0 group-hover:scale-105 transition-transform"
              />
              
              <div className="flex flex-col justify-center">
                <div className="flex items-baseline leading-none">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    HORIZON
                  </span>
                  <span className="ml-1 text-xl sm:text-2xl font-black text-emerald-800">
                    SOLAR
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-black tracking-[0.22em] text-teal-800 uppercase mt-1 leading-none">
                  SOLAR POWER SOLUTIONS
                </span>
                <span className="text-[8px] font-bold tracking-wider text-slate-600 uppercase mt-1 leading-none">
                  MAYYIL, KANNUR • KERALA
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-[12px] font-bold tracking-widest text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 transition-colors uppercase hover:text-teal-800 ${
                    link.name === 'HOME' ? 'text-teal-800 font-black' : ''
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action: Official Pill CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone1Raw}`}
                className="hidden xl:flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-teal-800 px-3 py-2 rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-teal-800" />
                <span>Call Now</span>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="px-5 py-2.5 rounded-full text-xs font-black tracking-wider uppercase text-white bg-gradient-to-r from-teal-800 to-emerald-700 hover:from-teal-900 hover:to-emerald-800 shadow-sm hover:shadow transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Free Survey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Actions */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenQuoteModal}
                className="sm:hidden px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-teal-800"
              >
                Free Survey
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 rounded-lg border border-slate-200"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 animate-fadeIn shadow-lg">
          
          {/* Quick Contact info in mobile drawer */}
          <div className="pb-3 border-b border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
            <span>Mayyil, Kannur</span>
            <span className="font-semibold text-emerald-800">GSTIN: {COMPANY_INFO.gstin}</span>
          </div>

          <div className="space-y-2">
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
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-800 to-emerald-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Book Free Rooftop Survey</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone1Raw}`}
              className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-800" />
              <span>Call +91 99471 60826</span>
            </a>
          </div>

        </div>
      )}

    </header>
  );
}
