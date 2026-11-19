import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/solarData';

export default function ContactMapSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: 'Kannur',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });

    const text = `*NEW CONTACT INQUIRY*%0A%0A` +
      `👤 *Name:* ${formData.name}%0A` +
      `📞 *Phone:* ${formData.phone}%0A` +
      `📧 *Email:* ${formData.email || 'N/A'}%0A` +
      `📍 *City:* ${formData.city}%0A` +
      `💬 *Message:* ${formData.message || 'I would like to get a quote for rooftop solar in Kannur.'}`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Map with Floating White Pin Card (Exact Replica of Screenshot 1) */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100">
              
              {/* Clean Map Background */}
              <iframe
                title="Horizon Solar Location"
                src="https://maps.google.com/maps?q=Mayyil+Kannur+Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale opacity-75 contrast-125"
                allowFullScreen=""
                loading="lazy"
              />

              {/* White Pin Card (Exact Replica of Screenshot 1) */}
              <div className="absolute top-12 left-6 right-6 sm:right-auto sm:max-w-xs bg-white rounded-xl shadow-xl p-3 border border-slate-200 z-10 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/office-front.jpg"
                    alt="Horizon Solar Mayyil"
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
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Underlined Minimal Form with Circular Teal Send Button (Exact Replica of Screenshot 1) */}
          <div className="lg:col-span-6 space-y-6">
            
            {submitted ? (
              <div className="p-8 rounded-2xl bg-slate-50 border border-teal-200 text-center space-y-3">
                <div className="w-12 h-12 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Message Received!</h4>
                <p className="text-xs text-slate-600">
                  Thank you. Our engineer will contact you shortly regarding your solar inquiry.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-teal-800 underline pt-2 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Row 1: Your Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full py-1.5 border-b border-slate-300 focus:border-teal-700 outline-none text-sm text-slate-800 transition-colors bg-transparent placeholder-slate-400 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-500 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="johnsmith@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full py-1.5 border-b border-slate-300 focus:border-teal-700 outline-none text-sm text-slate-800 transition-colors bg-transparent placeholder-slate-400 font-medium"
                    />
                  </div>
                </div>

                {/* Row 2: City* & Phone* */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">
                      City*
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Kannur"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full py-1.5 border-b border-slate-300 focus:border-teal-700 outline-none text-sm text-slate-800 transition-colors bg-transparent placeholder-slate-400 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-500 mb-1">
                      Phone*
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="9947160826"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full py-1.5 border-b border-slate-300 focus:border-teal-700 outline-none text-sm text-slate-800 transition-colors bg-transparent placeholder-slate-400 font-medium"
                    />
                  </div>
                </div>

                {/* Row 3: Message* with Floating Circular Teal Send Button */}
                <div className="relative pt-2">
                  <label className="block text-xs text-slate-500 mb-1">
                    Message*
                  </label>
                  <textarea
                    rows="2"
                    placeholder="Hi, do you have a moment to talk abo..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full py-1.5 pr-16 border-b border-slate-300 focus:border-teal-700 outline-none text-sm text-slate-800 transition-colors bg-transparent placeholder-slate-400 font-medium resize-none"
                  ></textarea>

                  {/* Circular Teal Send Button (Exact Screenshot 1 Replica) */}
                  <button
                    type="submit"
                    aria-label="Send Message"
                    className="absolute right-0 bottom-2 w-12 h-12 rounded-full bg-teal-800 hover:bg-teal-900 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105 cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current transform rotate-45 -mr-1">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
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
