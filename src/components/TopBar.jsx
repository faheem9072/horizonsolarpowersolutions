import React from 'react';
import { Phone, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

export default function TopBar() {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400">
            <Sparkles className="w-3 h-3" /> PM Surya Ghar
          </span>
          <span className="text-slate-300 text-[11px] sm:text-xs">
            Govt. Subsidy up to <strong className="text-amber-400">₹78,000</strong>
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <span className="hidden md:inline text-slate-400">📍 {COMPANY_INFO.address}</span>
          <a href={`tel:${COMPANY_INFO.phone1Raw}`} className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1">
            <Phone className="w-3 h-3" /> {COMPANY_INFO.phone1}
          </a>
        </div>
      </div>
    </div>
  );
}
