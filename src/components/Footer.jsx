import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

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
    <footer className="bg-[#1b1e22] text-slate-400 text-xs pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Official Socials (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src="/images/horizon-logo-transparent.png"
                alt="Horizon Solar Power Solutions"
                className="w-16 h-16 object-contain"
              />
              <div>
                <span className="text-xl font-black text-white tracking-tight leading-none block">
                  HORIZON <span className="text-emerald-400">SOLAR</span>
                </span>
                <span className="text-[10px] font-bold text-teal-300 tracking-wider uppercase block mt-1">
                  POWER SOLUTIONS
                </span>
                <span className="text-[8px] font-bold text-amber-400 tracking-wider uppercase block mt-0.5">
                  CLEAN ENERGY • BRIGHTER TOMORROW
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing premier clean energy and rooftop solar photovoltaic engineering across Kannur & Kerala. Kandakkai Road, Mayyil (GSTIN: {COMPANY_INFO.gstin}).
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
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone1Raw}`}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-teal-600 text-slate-200 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Call Directly"
                title="Call 9947160826"
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
                <span>{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{COMPANY_INFO.phone1} / {COMPANY_INFO.phone2}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="break-all">{COMPANY_INFO.email}</span>
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

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © Copyright 2026. HORIZON SOLAR. All rights reserved. Registered under GST: {COMPANY_INFO.gstin}.
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Terms and Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
