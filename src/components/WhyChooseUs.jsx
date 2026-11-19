import React from 'react';
import { 
  ShieldCheck, BadgePercent, SunMedium, Wrench, 
  Smartphone, Coins, Award, Sparkles, CheckCircle2 
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/solarData';

export default function WhyChooseUs({ onOpenQuoteModal }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'BadgePercent': return <BadgePercent className="w-6 h-6" />;
      case 'SunMedium': return <SunMedium className="w-6 h-6" />;
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      case 'Coins': return <Coins className="w-6 h-6" />;
      default: return <ShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>THE HORIZON ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Why Hundreds of Families in Kannur <br className="hidden sm:inline" />
            <span className="text-emerald-400">Trust Horizon Solar Power Solutions</span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Solar is a 25-year investment for your property. Partner with a certified local Kannur team that guarantees genuine tier-1 components, cyclone-rated engineering, and unconditional support.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80 hover:border-emerald-500/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                {getIcon(item.icon)}
              </div>

              <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-emerald-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950 to-slate-800 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">
              Ready to eliminate your high KSEB bills?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Our engineering team will assess your rooftop in Kannur with zero obligation.
            </p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-400/20 transition-all cursor-pointer whitespace-nowrap"
          >
            Schedule Free Roof Inspection
          </button>
        </div>

      </div>
    </section>
  );
}
