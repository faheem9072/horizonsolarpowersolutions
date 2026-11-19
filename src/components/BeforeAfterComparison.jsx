import React from 'react';
import { XCircle, CheckCircle2, TrendingDown, ArrowRight, Zap, Sun } from 'lucide-react';

export default function BeforeAfterComparison({ onOpenQuoteModal }) {
  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            THE REAL IMPACT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">
            Life Before vs After <br className="hidden sm:inline" />
            <span className="text-emerald-400">Horizon Solar Rooftop</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2">
            See why households across Mayyil, Kannur and Northern Kerala are switching to clean energy today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* BEFORE CARD */}
          <div className="rounded-3xl p-6 sm:p-8 bg-slate-950/80 border border-red-500/30 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-red-500/20 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400 block">
                    CURRENT SITUATION
                  </span>
                  <h3 className="text-2xl font-black text-white mt-0.5">
                    Without Solar
                  </h3>
                </div>
                <div className="p-3 bg-red-500/10 text-red-400 rounded-2xl">
                  <XCircle className="w-6 h-6" />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/20 mb-6">
                <span className="text-xs text-red-300 block font-semibold">Typical 2-Month KSEB Bill</span>
                <span className="text-3xl font-black text-red-400 mt-1 block">
                  ₹4,500 - ₹9,000+
                </span>
                <span className="text-[11px] text-slate-400 block mt-1">
                  Surging with every summer AC use & future tariff hikes
                </span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Paying lakhs of rupees to electricity boards over a 10-year period with zero return.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Fear of turning on air conditioners, EV chargers, or water pumps during peak slab hours.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Power cuts and voltage drops during Kannur monsoon storms and transmission faults.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Missing out on the historic ₹78,000 central government grant scheme.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-400 text-center">
              Continues draining your hard-earned household savings indefinitely.
            </div>
          </div>

          {/* AFTER CARD */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950 border-2 border-emerald-500/60 shadow-2xl relative flex flex-col justify-between">
            {/* Badge */}
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow">
              The Smarter Choice
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-emerald-500/30 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                    WITH HORIZON SOLAR
                  </span>
                  <h3 className="text-2xl font-black text-white mt-0.5">
                    Clean Solar Rooftop
                  </h3>
                </div>
                <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-2xl">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-900/30 border border-emerald-500/30 mb-6">
                <span className="text-xs text-emerald-300 block font-semibold">New 2-Month KSEB Bill</span>
                <span className="text-3xl font-black text-emerald-400 mt-1 block">
                  ₹120 - ₹240 <span className="text-xs font-normal text-slate-300">(Basic meter rent only)</span>
                </span>
                <span className="text-[11px] text-amber-300 font-bold block mt-1">
                  + ₹78,000 Govt. Subsidy transferred into your bank!
                </span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>90% to 95% reduction</strong> on monthly power bills through KSEB Net Metering.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Total freedom to run ACs, washing machines, and induction stoves guilt-free during the day.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>24/7 power assurance with hybrid battery storage options during heavy storms.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>25 years of guaranteed free solar power and boosted property value.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-500/20">
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Switch to Solar & Claim ₹78,000 Subsidy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
