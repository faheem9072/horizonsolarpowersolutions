import React from 'react';
import { CheckCircle2, MessageCircle, Info } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';
import { IMAGE_ASSETS } from '../data/imageAssets';

export default function ProjectsSection({ onOpenQuoteModal }) {
  const packages = [
    {
      kw: "3 kW",
      title: "3 kW Residential Package",
      badge: "MOST POPULAR IN KERALA",
      subsidy: "Max Up to ₹78,000*",
      generation: "12 - 14 Units / Day",
      roofArea: "250 - 300 Sq.Ft Roof",
      desc: "Designed to eliminate up to 90%* of electricity bills for 3-4 BHK homes running multiple ACs and modern appliances.",
      image: IMAGE_ASSETS.packages.residential3kW.src,
      alt: IMAGE_ASSETS.packages.residential3kW.alt,
      width: IMAGE_ASSETS.packages.residential3kW.width,
      height: IMAGE_ASSETS.packages.residential3kW.height,
      features: [
        "Maximum Subsidy up to ₹78,000*",
        "KSEB Bi-directional Net Metering",
        "Tier-1 Monocrystalline Bifacial Panels",
        "25-Year Performance Warranty"
      ]
    },
    {
      kw: "2 kW",
      title: "2 kW Budget Home Package",
      badge: "HIGH ROI",
      subsidy: "Up to ₹60,000*",
      generation: "8 - 10 Units / Day",
      roofArea: "180 - 220 Sq.Ft Roof",
      desc: "Ideal for small to medium families looking for rapid payback and zero recurring electricity costs.",
      image: IMAGE_ASSETS.packages.budget2kW.src,
      alt: IMAGE_ASSETS.packages.budget2kW.alt,
      width: IMAGE_ASSETS.packages.budget2kW.width,
      height: IMAGE_ASSETS.packages.budget2kW.height,
      features: [
        "Govt. Subsidy up to ₹60,000*",
        "Runs refrigerator, TV, lights & fans",
        "Compact roof area required",
        "Low-interest solar loan assistance"
      ]
    },
    {
      kw: "5 kW",
      title: "5 kW Hybrid Backup Package",
      badge: "ZERO POWER CUTS",
      subsidy: "Grid + Battery Storage",
      generation: "20 - 22 Units / Day",
      roofArea: "420 - 480 Sq.Ft Roof",
      desc: "Combines KSEB grid export during daylight with smart battery storage for uninterrupted 24/7 power.",
      image: IMAGE_ASSETS.packages.hybrid5kW.src,
      alt: IMAGE_ASSETS.packages.hybrid5kW.alt,
      width: IMAGE_ASSETS.packages.hybrid5kW.width,
      height: IMAGE_ASSETS.packages.hybrid5kW.height,
      features: [
        "Uninterrupted backup during outages",
        "Automatic seamless switchover",
        "Solar tubular / Lithium storage option",
        "Suitable for villas, clinics & offices"
      ]
    }
  ];

  const handlePackageWhatsApp = (kwLabel) => {
    const text = `Hi, I am interested in the ${kwLabel} solar package. Please share a quote.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

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
            Standardized rooftop configurations. Maximum Central Government subsidy up to ₹78,000* under PM Surya Ghar Yojana.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image with distinct file & lazy loading */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={pkg.image}
                  alt={pkg.alt}
                  width={pkg.width}
                  height={pkg.height}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-teal-800 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow">
                  {pkg.badge}
                </div>
                <div className="absolute bottom-3 right-3 bg-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow">
                  {pkg.subsidy}
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-black text-slate-900 leading-tight">
                    {pkg.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    {pkg.desc}
                  </p>

                  <div className="mt-3 pt-2 pb-2 border-y border-slate-200/80 space-y-1.5 text-xs text-slate-700">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Generation:</span>
                      <span className="font-bold text-teal-800">{pkg.generation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Roof Space:</span>
                      <span className="font-bold">{pkg.roofArea}</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 pt-3 text-xs text-slate-600">
                    {pkg.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Primary Button: Opens WhatsApp with prefilled package message (Requirement 3) */}
                <div className="pt-3">
                  <button
                    onClick={() => handlePackageWhatsApp(pkg.kw)}
                    className="w-full py-2.5 rounded-full bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Get Quote for {pkg.kw}</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Subsidy Compliance Footnote (Requirement 4) */}
        <div className="mt-12 max-w-4xl mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            * Subsidy as per PM Surya Ghar Muft Bijli Yojana guidelines, subject to eligibility and government approval. Central financial assistance is disbursed directly via DBT into the consumer's bank account (1 kW: up to ₹30,000, 2 kW: up to ₹60,000, 3 kW and above: <strong>Maximum up to ₹78,000</strong>). Actual electricity savings depend on usage and roof conditions.
          </p>
        </div>

      </div>
    </section>
  );
}
