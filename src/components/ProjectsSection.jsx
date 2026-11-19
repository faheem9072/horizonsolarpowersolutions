import React from 'react';
import { CheckCircle2, ArrowRight, Info } from 'lucide-react';

export default function ProjectsSection({ onOpenQuoteModal }) {
  const packages = [
    {
      title: "3 kW Residential Package",
      badge: "MOST POPULAR IN KERALA",
      subsidy: "Max Up to ₹78,000*",
      generation: "12 - 14 Units / Day",
      roofArea: "250 - 300 Sq.Ft Roof",
      desc: "Designed to eliminate 90% of electricity bills for 3-4 BHK homes running ACs and household appliances.",
      image: "/images/service-ongrid.jpg",
      features: [
        "Maximum Subsidy up to ₹78,000*",
        "KSEB Bi-directional Net Metering",
        "Tier-1 Monocrystalline Bifacial Panels",
        "25-Year Performance Warranty"
      ]
    },
    {
      title: "2 kW Budget Home Package",
      badge: "HIGH ROI",
      subsidy: "Up to ₹60,000*",
      generation: "8 - 10 Units / Day",
      roofArea: "180 - 220 Sq.Ft Roof",
      desc: "Ideal for small to medium families looking for rapid payback and zero recurring electricity costs.",
      image: "/images/service-offgrid.jpg",
      features: [
        "Govt. Subsidy up to ₹60,000*",
        "Runs refrigerator, TV, lights & fans",
        "Compact roof area required",
        "Low-interest solar loan assistance"
      ]
    },
    {
      title: "5 kW Hybrid Backup Package",
      badge: "ZERO POWER CUTS",
      subsidy: "Grid + Battery Storage",
      generation: "20 - 22 Units / Day",
      roofArea: "420 - 480 Sq.Ft Roof",
      desc: "Combines KSEB grid export during daylight with smart battery storage for uninterrupted 24/7 power.",
      image: "/images/service-hybrid.jpg",
      features: [
        "Uninterrupted backup during outages",
        "Automatic seamless switchover",
        "Solar tubular / Lithium storage option",
        "Suitable for villas, clinics & offices"
      ]
    }
  ];

  return (
    <section id="packages" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            SYSTEM CAPACITIES & SUBSIDY DETAILS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-slate-900 mt-2">
            POPULAR SOLAR PACKAGES
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Standardized rooftop configurations. Maximum Central Government subsidy up to ₹78,000 under PM Surya Ghar Yojana.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-teal-800 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow">
                  {pkg.badge}
                </div>
                <div className="absolute bottom-3 right-3 bg-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow">
                  {pkg.subsidy}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-lg font-black text-slate-900 leading-tight">
                  {pkg.title}
                </h3>
                
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pkg.desc}
                </p>

                <div className="pt-2 pb-1 border-y border-slate-200/80 space-y-1.5 text-xs text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Generation:</span>
                    <span className="font-bold text-teal-800">{pkg.generation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Roof Space:</span>
                    <span className="font-bold">{pkg.roofArea}</span>
                  </div>
                </div>

                <ul className="space-y-1.5 pt-1 text-xs text-slate-600">
                  {pkg.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full py-2.5 rounded-full bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
                >
                  <span>Get Quote for {pkg.title.split(' ')[0]} kW</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Subsidy Compliance Footnote */}
        <div className="mt-12 max-w-4xl mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            * Central financial assistance (subsidy) is provided directly by the Government of India into the consumer's bank account via DBT under the <strong>PM Surya Ghar: Muft Bijli Yojana</strong> (1 kW: ₹30,000, 2 kW: ₹60,000, 3 kW and above: <strong>Maximum up to ₹78,000</strong>).
          </p>
        </div>

      </div>
    </section>
  );
}
