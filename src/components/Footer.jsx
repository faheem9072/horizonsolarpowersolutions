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
            <div className="flex items-center gap-3.5">
              <img
                src={IMAGE_ASSETS.brand.logoFull.src}
                alt={IMAGE_ASSETS.brand.logoFull.alt}
                width={80}
                height={80}
                loading="lazy"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain shrink-0"
              />
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
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing premier clean energy and rooftop solar photovoltaic engineering across Kannur & Northern Kerala. Kandakkai Road, Mayyil (GSTIN: {COMPANY_INFO.gstin}).
            </p>

            {/* Official Social Links (Facebook, Instagram & WhatsApp ONLY - No LinkedIn or G+) */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-teal-600 text-slate-200 hover:text-white flex items-center justify-center transition-colors text-xs font-bold shadow-sm"
                aria-label="Facebook - Horizonsolar Mayyil"
                title="Facebook: Horizonsolar Mayyil"
              >
                f
              </a>

              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-pink-600 text-slate-200 hover:text-white flex items-center justify-center transition-colors text-xs font-bold shadow-sm"
                aria-label="Instagram - HORIZON_SOLAR_MAYYIL"
                title="Instagram: HORIZON_SOLAR_MAYYIL"
              >
                ig
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
