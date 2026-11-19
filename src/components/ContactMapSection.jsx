import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, MessageCircle, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/solarData';
import { IMAGE_ASSETS } from '../data/imageAssets';

export default function ContactMapSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: 'Kannur',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const text = `*NEW CONTACT INQUIRY*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(formData.name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `📧 *Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A` +
      `📍 *City:* ${encodeURIComponent(formData.city)}%0A` +
      `💬 *Message:* ${encodeURIComponent(formData.message || 'I would like to get a quote for rooftop solar in Kannur.')}`;

    // 1. Send Email Notification to horizonsolarpowersolutions@gmail.com
    // [TODO: Replace with custom API / backend CRM webhook when ready]
    try {
      fetch(`https://formsubmit.co/ajax/${COMPANY_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `📩 New Website Contact Inquiry: ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
          'Name': formData.name,
          'Phone': formData.phone,
          'Email': formData.email || 'Not provided',
          'City': formData.city,
          'Message': formData.message || 'Rooftop solar inquiry',
          'Lead Source': 'Contact Us Section Form',
          'Date & Time': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        })
      }).catch(err => console.log('Email delivery error:', err));
    } catch (err) {
      console.log(err);
    }

    // 2. Open WhatsApp for instant response
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');

    // 3. Celebrate & show success
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Google Map with Floating White Pin Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100">
              
              {/* Google Maps Embed for Kandakkai Road, Mayyil, Kannur */}
              <iframe
                title="Horizon Solar Power Solutions Location at Kandakkai Road, Mayyil, Kannur"
                src="https://maps.google.com/maps?q=Kandakkai+Road+Mayyil+Kannur+Kerala+670602&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale opacity-85 contrast-125"
                allowFullScreen=""
                loading="lazy"
              />

              {/* White Pin Card */}
              <div className="absolute top-6 left-6 right-6 sm:right-auto sm:max-w-xs bg-white rounded-xl shadow-xl p-3.5 border border-slate-200 z-10 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <img
                    src={IMAGE_ASSETS.office.src}
                    alt={IMAGE_ASSETS.office.alt}
                    width={IMAGE_ASSETS.office.width}
                    height={IMAGE_ASSETS.office.height}
                    loading="lazy"
                    className="w-16 h-16 rounded-lg object-cover shrink-0 ring-1 ring-slate-200"
                  />
                  <div>
                    <h4 className="text-xs font-black text-slate-900 leading-tight uppercase">
                      HORIZON SOLAR SOLUTIONS
                    </h4>
                    <p className="text-[10px] text-slate-600 mt-1 leading-snug">
                      Kandakkai Road, Mayyil <br />
                      Kannur, Kerala 670602
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <a
                        href={`tel:${COMPANY_INFO.phone1Raw}`}
                        className="text-[10px] font-bold text-teal-800 hover:underline flex items-center gap-1"
                      >
                        <Phone className="w-2.5 h-2.5" />
                        <span>Call Us</span>
                      </a>
                      <span className="text-slate-300">•</span>
                      <a
                        href={COMPANY_INFO.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] font-bold text-teal-800 hover:underline flex items-center gap-0.5"
                      >
                        <span>Open Maps</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Underlined Minimal Contact Form with Circular Teal Send Button */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                DIRECT INQUIRY
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight mt-2">
                CONTACT OUR MAYYIL OFFICE
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Leave a message and our solar engineers will get back to you with custom feasibility and pricing.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-slate-50 border border-teal-200 text-center space-y-3">
                <div className="w-12 h-12 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Inquiry Sent Successfully!</h4>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                  <span>✓ Sent to WhatsApp & horizonsolarpowersolutions@gmail.com</span>
                </div>
                <p className="text-xs text-slate-600">
                  Thank you! Our engineer from Mayyil, Kannur will review your details and contact you shortly.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      const text = `Hi Horizon Solar Mayyil, I submitted an inquiry for solar installation in Kannur. Name: ${formData.name}`;
                      window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
                    }}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Chat</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                
                {/* Row 1: Your Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full py-1.5 border-b border-slate-300 focus:border-teal-700 outline-none text-sm text-slate-800 transition-colors bg-transparent placeholder-slate-400 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-500 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full py-1.5 border-b border-slate-300 focus:border-teal-700 outline-none text-sm text-slate-800 transition-colors bg-transparent placeholder-slate-400 font-medium"
                    />
                  </div>
                </div>

                {/* Row 2: City* & Phone* */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">
                      Location / City in Kannur *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mayyil, Taliparamba"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full py-1.5 border-b border-slate-300 focus:border-teal-700 outline-none text-sm text-slate-800 transition-colors bg-transparent placeholder-slate-400 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-500 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9947160826"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full py-1.5 border-b border-slate-300 focus:border-teal-700 outline-none text-sm text-slate-800 transition-colors bg-transparent placeholder-slate-400 font-medium"
                    />
                  </div>
                </div>

                {/* Row 3: Message* with Floating Circular Teal Send Button */}
                <div className="relative pt-2">
                  <label className="block text-xs text-slate-500 mb-1">
                    Message / Roof Details *
                  </label>
                  <textarea
                    rows="2"
                    required
                    placeholder="Hi, I would like to inquire about 3kW On-Grid solar installation in Mayyil..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full py-1.5 pr-16 border-b border-slate-300 focus:border-teal-700 outline-none text-sm text-slate-800 transition-colors bg-transparent placeholder-slate-400 font-medium resize-none"
                  ></textarea>

                  {/* Circular Teal Send Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-label="Send Message"
                    className="absolute right-0 bottom-2 w-12 h-12 rounded-full bg-teal-800 hover:bg-teal-900 disabled:opacity-75 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current transform rotate-45 -mr-1">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
