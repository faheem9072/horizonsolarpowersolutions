import React from 'react';
import { Zap, BatteryCharging, Layers, Factory, Wrench, BarChart3, ArrowRight } from 'lucide-react';

export default function SolutionsSection({ onOpenQuoteModal }) {
  const solutions = [
    {
      title: "On-Grid Solar Systems",
      desc: "Connected to KSEB Net Metering. Export excess power, cut electricity bills up to 90%, and get up to ₹78,000 Govt. Subsidy.",
      icon: <Zap className="w-5 h-5" />,
      badge: "Popular"
    },
    {
      title: "Off-Grid Solar Systems",
      desc: "Complete battery backup system for 24/7 power independence. Zero interruption during power cuts and storms.",
      icon: <BatteryCharging className="w-5 h-5" />,
      badge: "Battery Backup"
    },
    {
      title: "Hybrid Solar Systems",
      desc: "Best of both worlds: Grid export benefits + battery storage backup during power cuts.",
      icon: <Layers className="w-5 h-5" />,
      badge: "Advanced"
    },
    {
      title: "Commercial & Industrial",
      desc: "High-capacity rooftop installations for shops, hospitals, schools, and factories to slash commercial tariffs.",
      icon: <Factory className="w-5 h-5" />,
      badge: "Enterprises"
    },
    {
      title: "Installation & Maintenance",
      desc: "Certified installation, panel cleaning, inverter diagnostics, and Annual Maintenance Contracts (AMC).",
      icon: <Wrench className="w-5 h-5" />,
      badge: "Local Service"
    },
    {
      title: "Energy Saving Solutions",
      desc: "Comprehensive energy audit and load balancing to eliminate power wastage before solar setup.",
      icon: <BarChart3 className="w-5 h-5" />,
      badge: "Audit"
    }
  ];

  return (
    <section id="solutions" className="py-14 sm:py-18 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Complete Solar Solutions in Kannur
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            End-to-end solar engineering for residential, commercial, and rural needs.
          </p>
        </div>

        {/* 6 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-emerald-500 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <button
                  onClick={onOpenQuoteModal}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
