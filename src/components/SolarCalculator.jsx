import React, { useState, useMemo } from 'react';
import { Calculator, MessageCircle, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/solarData';

export default function SolarCalculator({ onOpenQuoteModal }) {
  const [bill, setBill] = useState(4500);

  const presets = [2000, 3500, 5000, 8000, 12000];

  const calc = useMemo(() => {
    let kw = 2;
    let subsidy = "Up to ₹60,000";
    
    if (bill <= 2500) {
      kw = 1;
      subsidy = "Up to ₹30,000";
    } else if (bill <= 4500) {
      kw = 2;
      subsidy = "Up to ₹60,000";
    } else if (bill <= 8000) {
      kw = 3;
      subsidy = "Max Up to ₹78,000*";
    } else {
      kw = Math.min(10, Math.ceil(bill / 2200));
      subsidy = "Max Up to ₹78,000*";
    }

    const monthlySavings = Math.round((bill / 2) * 0.9);
    const roofArea = kw * 90;

    return { kw, subsidy, monthlySavings, roofArea };
  }, [bill]);

  const handleWhatsApp = () => {
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
    const msg = `Hi Horizon Solar Mayyil, my 2-month KSEB bill is approx ₹${bill}. The calculator suggested a ${calc.kw} kW plant with ${calc.subsidy} subsidy under PM Surya Ghar. Please provide an official quotation.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 lg:py-24 bg-[#181b1f] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header (Inspired by GEPS Energy & EdiSun) */}
        <div className="text-center mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-teal-400 bg-teal-900/40 px-3 py-1 rounded-full border border-teal-500/30">
            INTERACTIVE ESTIMATOR
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase mt-2">
            SOLAR SAVINGS & SUBSIDY CALCULATOR
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-lg mx-auto">
            Select your 2-month KSEB electricity bill to see your recommended rooftop capacity & central subsidy.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl max-w-2xl mx-auto space-y-6">
          
          {/* Slider input */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Current 2-Month KSEB Bill:
              </span>
              <span className="text-2xl sm:text-3xl font-black text-amber-400">
                ₹{bill.toLocaleString('en-IN')}
              </span>
            </div>

            <input
              type="range"
              min="1500"
              max="20000"
              step="500"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
            />

            {/* Presets */}
            <div className="flex flex-wrap gap-2 mt-3.5">
              {presets.map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setBill(val)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                    bill === val 
                      ? 'bg-teal-700 text-white shadow-sm' 
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  ₹{val.toLocaleString('en-IN')}
                </button>
              ))}
            </div>
          </div>

          {/* Results Box */}
          <div className="grid grid-cols-3 gap-3 p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            <div>
              <span className="text-[10px] text-slate-400 block uppercase font-semibold">Recommended</span>
              <span className="text-xl sm:text-2xl font-black text-white mt-1 block">{calc.kw} kW</span>
              <span className="text-[10px] text-slate-400 block">~{calc.roofArea} sq.ft</span>
            </div>
            
            <div className="border-x border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase font-semibold">Central Subsidy</span>
              <span className="text-base sm:text-lg font-black text-amber-400 mt-1 block">
                {calc.subsidy}
              </span>
              <span className="text-[9px] text-teal-400 block">PM Surya Ghar</span>
            </div>

            <div>
              <span className="text-[10px] text-slate-400 block uppercase font-semibold">Est. Monthly Save</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 mt-1 block">
                ₹{calc.monthlySavings}
              </span>
              <span className="text-[10px] text-slate-400 block">~90% bill cut</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="space-y-2.5 pt-1">
            <button
              onClick={handleWhatsApp}
              className="w-full py-3.5 rounded-full bg-teal-800 hover:bg-teal-900 text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-teal-950/30"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Get WhatsApp Quote for {calc.kw} kW System</span>
            </button>

            <button
              onClick={onOpenQuoteModal}
              className="w-full py-2 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer text-center block"
            >
              Or Schedule Free Rooftop Inspection in Kannur →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
