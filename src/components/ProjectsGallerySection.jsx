import React from 'react';
import { MapPin, Zap, ArrowRight, MessageCircle } from 'lucide-react';
import { IMAGE_ASSETS } from '../data/imageAssets';
import { COMPANY_INFO } from '../data/solarData';

/**
 * Our Projects / Installed Systems Gallery Section
 * [PLACEHOLDER - All project listings below are sample placeholders to showcase design layout. 
 * Replace with client's actual completed site installations, photos, and client names before launch.]
 */
export default function ProjectsGallerySection({ onOpenQuoteModal }) {
  const handleProjectInquiry = (title, location) => {
    const text = `Hi Horizon Solar Mayyil, I saw the ${title} in ${location} on your website. I would like to get a similar solar quote for my property.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="projects" className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold uppercase tracking-widest text-teal-800 bg-teal-100/70 px-3 py-1 rounded-full border border-teal-200">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-slate-900 mt-2">
            OUR PROJECTS & INSTALLATIONS
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Sample showcase of rooftop solar engineering installations across Kannur district.
            <span className="block text-[11px] text-slate-400 mt-1">[PLACEHOLDER - Pending client's verified project photos]</span>
          </p>
        </div>

        {/* Gallery Grid (4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {IMAGE_ASSETS.projectsGallery.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image with fixed aspect ratio to prevent CLS */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={proj.src}
                  alt={proj.alt}
                  width={proj.width}
                  height={proj.height}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                  {proj.systemType}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                    <span>{proj.location}</span>
                  </div>
                  
                  <h3 className="text-sm sm:text-base font-black text-slate-900 leading-snug">
                    {proj.title}
                  </h3>
                  
                  <p className="text-[11px] text-slate-500 mt-1">
                    [PLACEHOLDER Model Showcase]
                  </p>
                </div>

                {/* Inquiry Action */}
                <div className="pt-2 border-t border-slate-100">
                  <button
                    onClick={() => handleProjectInquiry(proj.title, proj.location)}
                    className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-teal-800 hover:text-white text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" />
                    <span>Inquire for Similar Quote</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA for customized plant */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-600 mb-3">
            Want to see how much solar capacity your rooftop can support in Kannur?
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
          >
            <span>Book Free On-Site Shadow Assessment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
