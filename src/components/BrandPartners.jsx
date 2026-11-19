import React from 'react';
import { Shield, CheckCircle, Cpu, Zap, Award } from 'lucide-react';

export default function BrandPartners() {
  const brands = [
    { name: "Waaree", type: "Tier-1 Solar Modules", desc: "TopCon & Bifacial Tech" },
    { name: "Adani Solar", type: "Tier-1 Solar Modules", desc: "High Efficiency PV" },
    { name: "Vikram Solar", type: "Tier-1 Solar Modules", desc: "MNRE & ALMM Approved" },
    { name: "Tata Power", type: "Solar Cells & Panels", desc: "Trusted Indian Standard" },
    { name: "Growatt", type: "Smart Inverters", desc: "Global #1 Residential" },
    { name: "Deye", type: "Hybrid Inverters", desc: "Advanced Battery Tech" },
    { name: "Solis", type: "Grid-Tie Inverters", desc: "High Efficiency >98.5%" },
    { name: "KSEB Ltd.", type: "Grid Synchronization", desc: "Bi-directional Net Metering" },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            TIER-1 EQUIPMENT & REGULATORY COMPLIANCE
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
            Engineered with India's & World's Most Trusted Solar Brands
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl mx-auto">
            We do not compromise on component quality. Every solar panel, inverter, and protection device installed by Horizon Solar comes with manufacturer backed long-term warranties.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {brands.map((b, idx) => (
            <div 
              key={idx}
              className="p-3.5 rounded-2xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200/80 hover:border-emerald-300 transition-all text-center flex flex-col justify-center items-center group shadow-sm hover:shadow"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Zap className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors block">
                {b.name}
              </span>
              <span className="text-[10px] text-slate-500 font-medium block mt-0.5">
                {b.type}
              </span>
            </div>
          ))}
        </div>

        {/* Regulatory Strip */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-semibold text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>MNRE / ALMM Enlisted Modules</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>KSEB Net-Metering Feasibility Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>BIS & IEC 61215 / 61730 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>25-Year Performance Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
}
