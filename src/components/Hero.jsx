import React from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';
import { IMAGE_ASSETS } from '../data/imageAssets';

export default function Hero({ onOpenQuoteModal }) {
  const handleGetStarted = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    }
  };

  return (
    <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* 4K Ultra High-Definition Local Image with dimensions and eager load */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGE_ASSETS.hero.src}
          alt={IMAGE_ASSETS.hero.alt}
          width={IMAGE_ASSETS.hero.width}
          height={IMAGE_ASSETS.hero.height}
          loading="eager"
          className="w-full h-full object-cover object-bottom brightness-105 contrast-105"
        />
        {/* Soft natural sky fade so the photo stays 100% crystal-clear and sharp */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent pointer-events-none" />
      </div>

      {/* Stylized Sunburst Watermark Graphic on Top-Left */}
      <div className="absolute top-2 left-0 sm:left-10 w-80 h-80 sm:w-[420px] sm:h-[420px] pointer-events-none z-10 opacity-25">
        <svg viewBox="0 0 200 200" className="w-full h-full text-amber-500 fill-current">
          <circle cx="100" cy="100" r="38" />
          <polygon points="100,5 110,60 90,60" />
          <polygon points="100,195 110,140 90,140" />
          <polygon points="5,100 60,110 60,90" />
          <polygon points="195,100 140,110 140,90" />
          <polygon points="32,32 75,65 65,75" />
          <polygon points="168,168 125,135 135,125" />
          <polygon points="32,168 65,125 75,135" />
          <polygon points="168,32 135,75 125,65" />
        </svg>
      </div>

      {/* Main Centered Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-8 pb-20 sm:pb-24">
        
        {/* Subsidy Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-xs border border-teal-700/20 text-teal-950 text-[11px] sm:text-xs font-bold tracking-wider mb-5 uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>PM SURYA GHAR YOJANA</span>
          <span className="text-slate-400">•</span>
          <span className="text-emerald-800">MAXIMUM SUBSIDY UP TO ₹78,000*</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] mb-1.5 uppercase drop-shadow-xs">
          ENERGY SOLUTIONS
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-[1.08] mb-6 uppercase drop-shadow-xs">
          FOR BUSINESSES & HOMES
        </h2>

        {/* 2-Line Subtext with linked disclaimer */}
        <p className="text-xs sm:text-sm md:text-base text-slate-700 max-w-xl mx-auto mb-8 font-normal leading-relaxed drop-shadow-xs">
          Clean rooftop solar solutions in Mayyil, Kannur. Cut your monthly KSEB electricity bills <a href="#disclaimer" className="underline decoration-slate-400 hover:text-teal-900">up to 90%*</a> and claim <strong className="text-slate-950 font-bold">maximum subsidy up to ₹78,000*</strong> under PM Surya Ghar Yojana.
        </p>

        {/* Rounded Teal Pill Button */}
        <div>
          <button
            onClick={handleGetStarted}
            className="px-9 py-3.5 rounded-full text-xs sm:text-sm font-black tracking-widest uppercase text-white bg-teal-800 hover:bg-teal-900 shadow-xl shadow-teal-950/20 transition-all cursor-pointer transform hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            <span>GET STARTED</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>

        {/* Visible Legal Disclaimer Footnote right near Hero (Requirement 4) */}
        <div className="mt-8 text-[11px] text-slate-600 bg-white/70 backdrop-blur-xs py-1.5 px-4 rounded-full max-w-2xl mx-auto border border-slate-200/60 shadow-2xs">
          <p>
            * Subsidy as per PM Surya Ghar Muft Bijli Yojana guidelines, subject to eligibility and government approval. Actual savings depend on usage and roof conditions.
          </p>
        </div>

      </div>
    </section>
  );
}
