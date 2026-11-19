import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

/**
 * Sticky "Call Now" button visible only on mobile screens (< 768px).
 * Sits comfortably on the bottom-left, paired with the compact WhatsApp button on the bottom-right.
 */
export default function StickyMobileCall() {
  return (
    <div className="md:hidden fixed bottom-5 left-4 z-40">
      <a
        href={`tel:${COMPANY_INFO.phone1Raw}`}
        className="flex items-center gap-2 px-4 py-3 bg-teal-800 hover:bg-teal-900 active:scale-95 text-white rounded-full shadow-2xl transition-all border-2 border-white ring-4 ring-teal-800/20 text-xs font-bold"
        aria-label="Call Horizon Solar Mayyil directly"
      >
        <Phone className="w-4 h-4 text-emerald-400" />
        <span>Call Now</span>
      </a>
    </div>
  );
}
