import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data/solarData';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  // Take 4 essential FAQs tailored for Kerala customers
  const basicFaqs = [
    {
      q: "How does KSEB Net Metering work in Kerala?",
      a: "With an On-Grid solar plant, KSEB installs a bi-directional meter. During the day, your solar panels generate power and feed surplus electricity back into the KSEB grid, running your meter backwards. You draw grid power at night. At the end of the 2-month cycle, you only pay for the net units consumed!"
    },
    {
      q: "How much subsidy can I receive under PM Surya Ghar Muft Bijli Yojana?",
      a: "Under the scheme, residential consumers receive ₹30,000 for a 1 kW system, ₹60,000 for a 2 kW system, and a maximum of up to ₹78,000 for systems 3 kW and above. The subsidy is disbursed directly to your bank account via DBT."
    },
    {
      q: "How much shadow-free rooftop area is required for a 3 kW solar system?",
      a: "A typical 3 kW solar rooftop system requires approximately 250 to 300 square feet of shadow-free space. It can be installed on concrete flat roofs, sloped tiled roofs, or GI metal sheet truss work."
    },
    {
      q: "Do solar panels generate electricity during the monsoon in Kannur?",
      a: "Yes! High-efficiency Tier-1 Monocrystalline and Bifacial panels work on daylight photons, not heat. Even on overcast or rainy monsoon days, they continue producing 25% to 40% of their peak output from diffused ambient sunlight."
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-teal-800 bg-teal-100/60 px-3 py-1 rounded-full border border-teal-200">
            COMMON QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-slate-900 mt-2">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Essential facts about rooftop solar, KSEB net metering, and central subsidies in Kerala.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5 max-w-3xl mx-auto">
          {basicFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-extrabold text-xs sm:text-sm text-slate-900">
                    {faq.q}
                  </span>
                  <div className={`p-1 rounded-full shrink-0 transition-colors ${
                    isOpen ? 'bg-teal-100 text-teal-800' : 'text-slate-400'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
