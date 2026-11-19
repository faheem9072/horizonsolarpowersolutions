import React from 'react';
import { Play, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';
import { IMAGE_ASSETS } from '../data/imageAssets';

export default function WhoWeAre({ onOpenQuoteModal }) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Paragraphs & LEARN MORE */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-slate-900 leading-tight">
              <span className="font-light tracking-wide">WHO </span>
              <span className="font-black uppercase">WE ARE</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Horizon Solar Power Solutions is a dedicated renewable energy engineering enterprise operating from Kandakkai Road, Mayyil, Kannur. We specialize in custom-engineered On-Grid, Off-Grid, and Hybrid solar photovoltaic systems for homes, commercial complexes, and institutions across Northern Kerala.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Our certified engineering team assists customers at every stage—from free on-site shadow assessment and KSEB net-metering liaisoning to Tier-1 module mounting and securing direct DBT Central Government subsidies credited straight to your bank account under PM Surya Ghar Yojana.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5 text-teal-800">
                <CheckCircle2 className="w-4 h-4 text-teal-700" />
                <span>GSTIN: {COMPANY_INFO.gstin}</span>
              </div>
              <div className="flex items-center gap-1.5 text-teal-800">
                <CheckCircle2 className="w-4 h-4 text-teal-700" />
                <span>KSEB Net-Metering Assistance</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-xs font-black tracking-widest uppercase text-white bg-teal-800 hover:bg-teal-900 shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Signature Circular Image with Orange Arc Border */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[400px] md:h-[400px]">
              
              {/* Outer Vibrant Orange Crescent Ring */}
              <div className="absolute inset-0 rounded-full border-[10px] sm:border-[12px] border-amber-500 shadow-lg" />

              {/* Ultra High-Resolution Local Circular Photo with dimensions & lazy load */}
              <div className="absolute inset-2 sm:inset-3 rounded-full overflow-hidden shadow-2xl bg-slate-100">
                <img
                  src={IMAGE_ASSETS.about.src}
                  alt={IMAGE_ASSETS.about.alt}
                  width={IMAGE_ASSETS.about.width}
                  height={IMAGE_ASSETS.about.height}
                  loading="lazy"
                  className="w-full h-full object-cover object-center brightness-105 contrast-105"
                />
              </div>

              {/* Floating Circular Teal Play Button */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20">
                <a
                  href="#services"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-teal-800 text-white flex items-center justify-center shadow-xl hover:bg-teal-900 hover:scale-110 transition-all ring-4 ring-white"
                  aria-label="View Solar Services"
                >
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white ml-0.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
