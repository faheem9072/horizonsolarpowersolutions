import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, ShieldAlert } from 'lucide-react';
import { COMPANY_INFO, FEATURE_FLAGS } from '../data/solarData';
import { IMAGE_ASSETS } from '../data/imageAssets';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#1b1e22] text-slate-400 text-xs pt-16 pb-28 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Official Socials (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3.5 group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 p-1.5 flex items-center justify-center shrink-0 border border-white/15 shadow-md group-hover:scale-105 transition-transform">
                <img
                  src={IMAGE_ASSETS.brand.emblem.src}
                  alt={IMAGE_ASSETS.brand.emblem.alt}
                  width={IMAGE_ASSETS.brand.emblem.width}
                  height={IMAGE_ASSETS.brand.emblem.height}
                  loading="eager"
                  className="w-full h-full object-contain drop-shadow"
                />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none block">
                  HORIZON
                </span>
                <span className="text-[11px] sm:text-xs font-black text-teal-400 tracking-[0.15em] uppercase block mt-1">
                  SOLAR POWER SOLUTIONS
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold text-amber-400 tracking-wider uppercase block mt-0.5">
                  CLEAN ENERGY • BRIGHTER TOMORROW
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing premier clean energy and rooftop solar photovoltaic engineering across Kannur & Northern Kerala. Kandakkai Road, Mayyil (GSTIN: {COMPANY_INFO.gstin}).
            </p>

            {/* Official Social Links (Facebook, Instagram & WhatsApp ONLY - No LinkedIn or G+) */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#1877F2] text-slate-200 hover:text-white flex items-center justify-center transition-colors text-xs font-bold shadow-sm"
                aria-label="Facebook - Horizon Solar Mayyil"
                title="Facebook: Horizon Solar Mayyil"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-600 text-slate-200 hover:text-white flex items-center justify-center transition-colors text-xs font-bold shadow-sm"
                aria-label="Instagram - HORIZON_SOLAR_MAYYIL"
                title="Instagram: HORIZON_SOLAR_MAYYIL"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hi Horizon Solar, I want to inquire about rooftop solar installation in Kannur.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#25D366] text-slate-200 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="WhatsApp - Horizon Solar Mayyil"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone1Raw}`}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-teal-600 text-slate-200 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Call Directly"
                title="Call +91 99471 60826"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links with Teal Underline (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div>
              <h4 className="text-xs font-black tracking-wider uppercase text-white inline-block border-b-2 border-teal-500 pb-1">
                QUICK LINKS
              </h4>
            </div>

            <ul className="space-y-2 text-xs pt-1">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Packages</a></li>
              {FEATURE_FLAGS.SHOW_PROJECTS && (
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              )}
              <li><a href="#calculator" className="hover:text-white transition-colors">Calculator</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Us with Teal Underline (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div>
              <h4 className="text-xs font-black tracking-wider uppercase text-white inline-block border-b-2 border-teal-500 pb-1">
                CONTACT US
              </h4>
            </div>

            <div className="space-y-2.5 text-xs pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <a 
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.address}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <div className="flex items-center gap-1.5 flex-wrap">
                  <a href={`tel:${COMPANY_INFO.phone1Raw}`} className="hover:text-white transition-colors font-medium">
                    {COMPANY_INFO.phone1}
                  </a>
                  <span>/</span>
                  <a href={`tel:${COMPANY_INFO.phone2Raw}`} className="hover:text-white transition-colors font-medium">
                    {COMPANY_INFO.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="break-all hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-1 text-[11px] text-slate-400">
                <span>Working Hours: {COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Subscribe to Newsletter (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div>
              <h4 className="text-xs font-black tracking-wider uppercase text-white inline-block border-b-2 border-teal-500 pb-1">
                SUBSCRIBE TO UPDATES
              </h4>
            </div>

            <p className="text-xs text-slate-400 pt-1 leading-relaxed">
              Get updates on central PM Surya Ghar solar subsidy guidelines and KSEB net-metering tariffs in Kerala.
            </p>

            <form onSubmit={handleSubscribe} className="pt-1">
              <div className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white text-slate-900 px-3.5 py-2.5 pr-12 rounded-xs text-xs outline-none focus:ring-1 focus:ring-teal-500 placeholder-slate-400"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-0 top-0 bottom-0 px-3.5 bg-teal-600 hover:bg-teal-700 text-white rounded-r-xs flex items-center justify-center transition-colors cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current transform rotate-45 -mr-0.5">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
              {sent && (
                <span className="text-[10px] text-teal-400 font-semibold block mt-1">
                  ✓ Thank you for subscribing!
                </span>
              )}
            </form>
          </div>

        </div>

        {/* Legal Disclaimer Note (Requirement 4) */}
        <div id="disclaimer" className="pt-6 pb-2 text-[11px] text-slate-500 leading-relaxed border-b border-slate-800/80">
          <p>
            * Subsidy as per PM Surya Ghar Muft Bijli Yojana guidelines, subject to eligibility and government approval. 
            Disbursement is processed directly into the consumer's bank account via DBT by MNRE / National Portal. 
            Actual solar generation, electricity bill reduction (up to 90%), and financial savings depend on daily sun insolation, roof orientation, shadow conditions, and household power usage patterns.
          </p>
        </div>

        {/* Bottom Bar with Developed by KORE */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center md:text-left">
          <div>
            © Copyright 2026. <span className="text-slate-300 font-bold">HORIZON SOLAR POWER SOLUTIONS</span>. All rights reserved. GSTIN: {COMPANY_INFO.gstin}.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="text-slate-400">
              Developed by <strong className="text-teal-400 font-black tracking-wider uppercase">kore</strong>
            </span>
            <span className="text-slate-700">|</span>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Terms & Consultation</a>
            <span className="text-slate-700">|</span>
            <a href="#disclaimer" className="hover:text-slate-300 transition-colors">Subsidy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
