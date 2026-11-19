import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, CalendarCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

export default function FloatingActions({ onOpenQuoteModal }) {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    // Hide badge after 10s or keep subtle
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating WhatsApp on Desktop / Tablet */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2 group">
        {showNotification && (
          <div className="bg-slate-900 text-white text-xs px-3.5 py-2 rounded-2xl shadow-xl border border-emerald-500/30 flex items-center gap-2 animate-bounce">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
            <span>Chat for ₹78,000 Subsidy Quote</span>
            <button 
              onClick={() => setShowNotification(false)}
              className="text-slate-400 hover:text-white ml-1 font-bold text-xs"
            >
              ✕
            </button>
          </div>
        )}

        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hello Horizon Solar Mayyil, I would like to get a quote for a solar rooftop system under PM Surya Ghar Yojana.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center ring-4 ring-emerald-500/20"
          aria-label="WhatsApp Us"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500"></span>
          </span>
        </a>
      </div>

      {/* Sticky Mobile Action Bar at bottom */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${COMPANY_INFO.phone1Raw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs active:bg-slate-200 transition-colors"
        >
          <Phone className="w-4 h-4 text-emerald-600" />
          <span>Call Now</span>
        </a>

        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hi Horizon Solar team, I need a solar rooftop quote.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs active:bg-emerald-700 transition-colors shadow-sm"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenQuoteModal}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-black text-xs active:bg-amber-500 transition-colors shadow-sm cursor-pointer"
        >
          <CalendarCheck className="w-4 h-4" />
          <span>Survey</span>
        </button>
      </div>
    </>
  );
}
