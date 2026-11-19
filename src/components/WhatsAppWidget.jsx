import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

export default function WhatsAppWidget() {
  const handleClick = () => {
    const text = 'Hi Horizon Solar, I want to inquire about rooftop solar installation in Kannur.';
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <aside 
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center group"
    >
      <button
        onClick={handleClick}
        className="flex items-center gap-2.5 p-3.5 md:px-4 md:py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border-2 border-white ring-4 ring-[#25D366]/20"
        aria-label="Chat directly on WhatsApp with Horizon Solar"
      >
        <div className="relative shrink-0">
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-300 rounded-full ring-2 ring-white animate-pulse" />
        </div>
        
        {/* Text is hidden on screens < 768px (compact round icon only on mobile) */}
        <div className="hidden md:flex flex-col text-left pr-1">
          <span className="text-[10px] font-medium text-emerald-100 leading-none">Instant Support</span>
          <span className="text-xs font-black tracking-wide leading-tight">Chat on WhatsApp</span>
        </div>
      </button>
    </aside>
  );
}
