import React from 'react';
import { Home, Zap, Clock, ShieldCheck } from 'lucide-react';

/**
 * Stats Strip Component
 * [PLACEHOLDER] - Metrics below are initial launch placeholders and need to be replaced with client's actual verified figures before production launch.
 */
export default function StatsStrip() {
  const stats = [
    {
      icon: <Home className="w-5 h-5 text-emerald-400" />,
      value: "50+",
      label: "Homes & Roofs Assessed",
      // [PLACEHOLDER]: Client to provide actual number of rooftop assessments completed
      sub: "Across Kannur District [PLACEHOLDER]",
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      value: "150+ kW",
      label: "Clean Capacity Proposed",
      // [PLACEHOLDER]: Client to provide total kW capacity installed/engineered
      sub: "On-Grid & Hybrid Plants [PLACEHOLDER]",
    },
    {
      icon: <Clock className="w-5 h-5 text-teal-400" />,
      value: "25 Years",
      label: "Linear Panel Warranty",
      sub: "Tier-1 ALMM Certified Modules",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      value: "100%",
      label: "KSEB Liaisoning Support",
      sub: "End-to-end Subsidy Paperwork",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-12 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Placeholder notice in code & subtle header */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center mb-2.5 shadow-inner">
                {s.icon}
              </div>
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                {s.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-300 mt-1">
                {s.label}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 font-medium">
                {s.sub}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
