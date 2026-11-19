import React from 'react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { SUBSIDY_TIERS } from '../data/solarData';

export default function SubsidySection({ onSelectCapacity }) {
  // Take first 3 primary slabs (1kW, 2kW, 3kW)
  const primaryTiers = SUBSIDY_TIERS.slice(0, 3);

  return (
    <section id="subsidy" className="py-14 sm:py-18 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Simple Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            PM Surya Ghar Muft Bijli Yojana
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Central Government Subsidy Slabs
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Direct financial assistance credited to your bank account via DBT.
          </p>
        </div>

        {/* 3 Clean Slabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {primaryTiers.map((tier, idx) => (
            <div 
              key={idx}
              className={`rounded-2xl p-6 border transition-all ${
                tier.popular 
                  ? 'bg-slate-900 text-white border-emerald-500 shadow-xl ring-2 ring-emerald-500/20' 
                  : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg">{tier.capacity}</h3>
                {tier.popular && (
                  <span className="text-[10px] font-bold uppercase bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full">
                    Recommended
                  </span>
                )}
              </div>

              {/* Subsidy Box */}
              <div className={`p-4 rounded-xl mb-4 text-center ${
                tier.popular ? 'bg-white/10' : 'bg-emerald-50'
              }`}>
                <span className="text-[11px] uppercase font-semibold block text-slate-400">
                  Govt. Subsidy
                </span>
                <span className={`text-3xl font-extrabold block mt-0.5 ${
                  tier.popular ? 'text-amber-300' : 'text-emerald-800'
                }`}>
                  {tier.subsidy}
                </span>
              </div>

              <div className="space-y-2 text-xs mb-6">
                <div className="flex justify-between py-1 border-b border-current/10">
                  <span className="opacity-70">Generation:</span>
                  <span className="font-semibold">{tier.monthlyUnits} / mo</span>
                </div>
                <div className="flex justify-between py-1 border-b border-current/10">
                  <span className="opacity-70">Roof Area:</span>
                  <span className="font-semibold">{tier.roofArea}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-current/10">
                  <span className="opacity-70">Ideal For:</span>
                  <span className="font-semibold">{tier.idealFor}</span>
                </div>
              </div>

              <button
                onClick={() => onSelectCapacity(tier.capacity)}
                className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  tier.popular
                    ? 'bg-amber-400 hover:bg-amber-300 text-slate-950'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                }`}
              >
                <span>Select {tier.capacity}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
