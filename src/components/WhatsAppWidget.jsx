import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(true);
  const [msg, setMsg] = useState('');

  const handleSend = (e) => {
    e?.preventDefault();
    const text = msg.trim() || 'Hi Horizon Solar team, I want to inquire about solar rooftop installation in Kannur.';
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    setMsg('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {isOpen ? (
        <div className="w-64 sm:w-72 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden mb-2 animate-fadeIn text-xs">
          
          {/* Header */}
          <div className="bg-white p-3 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-slate-900">
                <img
                  src="/images/horizon-emblem-transparent.png"
                  alt="Horizon Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-slate-900 text-xs">WhatsApp</span>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Chat Content */}
          <div className="p-3 bg-slate-50 space-y-1">
            <div className="text-[11px] font-bold text-slate-800">
              Horizon Solar Mayyil
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-slate-700 text-xs">
              Namaskaram! How can we help you with solar rooftop installation or claiming maximum subsidy up to ₹78,000 in Kannur?
            </div>
          </div>

          {/* Input Box: "Type a reply..." */}
          <form onSubmit={handleSend} className="p-2 bg-white border-t border-slate-100 flex items-center gap-1.5">
            <input
              type="text"
              placeholder="Type a reply..."
              value={msg}
              onChange={(e) => setUserMsg(e.target.value)}
              className="flex-1 text-xs px-2.5 py-1.5 rounded-md border border-slate-200 outline-none focus:border-teal-700 placeholder-slate-400"
            />
            <button
              type="submit"
              className="p-1.5 bg-[#25D366] text-white rounded-md cursor-pointer hover:bg-[#20ba59]"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform cursor-pointer"
          aria-label="Open WhatsApp Chat"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </button>
      )}
    </div>
  );
}
