import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

export default function OfficeShowcase() {
  return (
    <section id="office" className="py-14 sm:py-18 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Our Store & Office
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Visit Us in Mayyil, Kannur
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Registered local solar EPC on Kandakkai Road, Mayyil.
          </p>
        </div>

        {/* 2-Column Clean Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Photos */}
          <div className="md:col-span-6 space-y-3">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <img
                src="/images/office-front.jpg"
                alt="Horizon Solar Showroom"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <img
                src="/images/poster.jpg"
                alt="Horizon Solar Banner"
                className="w-full h-28 object-cover rounded-xl border border-slate-200"
              />
              <img
                src="/images/visiting-card.jpg"
                alt="Horizon Solar Visiting Card"
                className="w-full h-28 object-cover rounded-xl border border-slate-200"
              />
            </div>
          </div>

          {/* Contact & Location Details */}
          <div className="md:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
            <div>
              <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md inline-block">
                GSTIN: {COMPANY_INFO.gstin}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                Horizon Solar Power Solutions
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <div className="flex gap-2">
                  <a href={`tel:${COMPANY_INFO.phone1Raw}`} className="font-bold hover:underline">
                    {COMPANY_INFO.phone1}
                  </a>
                  <span>/</span>
                  <a href={`tel:${COMPANY_INFO.phone2Raw}`} className="font-bold hover:underline">
                    {COMPANY_INFO.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="break-all">{COMPANY_INFO.email}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row gap-2.5">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hi Horizon Solar, I want to visit your Mayyil showroom.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>WhatsApp Location</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
