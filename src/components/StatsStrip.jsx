import React from 'react';
import { Search, ShieldCheck, Zap, BadgePercent } from 'lucide-react';

/**
 * Trust Pillars & Assurance Strip
 * 4 factual assurance cards highlighting engineering guarantees and services.
 * Factual trust cards without any claims of completed volumes or fabricated metrics.
 */
export default function StatsStrip() {
  const trustCards = [
    {
      icon: <Search className="w-5 h-5 text-emerald-400" />,
      title: "Free Site & Shadow Assessment",
      desc: "Detailed on-site rooftop inspection and shadow analysis across Kannur district.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-400" />,
      title: "25 Years Panel Performance Warranty",
      desc: "Tier-1 MNRE / ALMM certified solar modules with long-term linear generation guarantee.",
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "Complete KSEB Net-Metering Support",
      desc: "End-to-end grid feasibility filing, inspection coordination, and bi-directional meter synchronization.",
    },
    {
      icon: <BadgePercent className="w-5 h-5 text-emerald-400" />,
      title: "Subsidy Paperwork Assistance",
      desc: "Seamless national portal documentation for direct DBT bank subsidy under PM Surya Ghar Yojana.",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-10 sm:py-12 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustCards.map((card, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60 hover:border-slate-600 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                {card.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white tracking-tight leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-400 font-normal leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
