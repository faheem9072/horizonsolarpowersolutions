import React from 'react';
import { Star, Quote, ThumbsUp, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/solarData';

/**
 * Testimonials Section ("What Our Customers Say")
 * [PLACEHOLDER - All customer reviews below are sample placeholders to illustrate layout.
 * Replace with verified client reviews, genuine customer names, and photos prior to production rollout.]
 */
export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-24 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-amber-100/70 text-amber-900 border border-amber-300/80 mb-3">
            <ThumbsUp className="w-3.5 h-3.5 text-amber-700" />
            <span>CUSTOMER FEEDBACK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
            WHAT OUR CUSTOMERS SAY
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Real customer stories on KSEB bill reductions and seamless subsidy disbursement in Kannur.
            <span className="block text-[11px] text-slate-400 mt-1">[PLACEHOLDER - Sample reviews pending client verification]</span>
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-emerald-50/30 rounded-3xl p-7 border border-slate-200 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                {/* Top: Star rating & Quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-teal-700/30" />
                </div>

                {/* Savings Pill */}
                <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-emerald-100 text-emerald-800 mb-3">
                  {t.savings}
                </span>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                  "{t.text}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.location}</p>
                </div>
                <span className="text-[10px] font-semibold text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                  {t.system}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
