import React from 'react';
import { Star, Quote, CheckCircle2, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/solarData';

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 mb-3">
            <ThumbsUp className="w-3.5 h-3.5 text-amber-700" />
            <span>REAL KANNUR CLIENT EXPERIENCES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved By Families & Businesses <br className="hidden sm:inline" />
            <span className="text-emerald-700">Across Kannur District</span>
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            See how our rooftop installations have brought electricity bills down to negligible amounts while delivering complete peace of mind.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-emerald-50/40 rounded-3xl p-7 border border-slate-200 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                {/* Top: Star rating & Quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-emerald-400/40" />
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
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.location}</p>
                </div>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded">
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
