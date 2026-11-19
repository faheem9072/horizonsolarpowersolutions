import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, Phone, MapPin, Building2, MessageCircle, Mail, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/solarData';

export default function QuoteModal({ isOpen, onClose, preselectedCapacity = '' }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    propertyType: 'Residential (PM Surya Ghar Subsidy)',
    bimonthlyBill: '₹3,000 - ₹6,000',
    capacity: preselectedCapacity || '3 kW System (Max ₹78,000 Subsidy)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const msg = `*NEW SOLAR SITE SURVEY REQUEST*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(formData.name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `📍 *Location:* ${encodeURIComponent(formData.location || 'Kannur')}%0A` +
      `🏠 *Property:* ${encodeURIComponent(formData.propertyType)}%0A` +
      `⚡ *Bimonthly Bill:* ${encodeURIComponent(formData.bimonthlyBill)}%0A` +
      `☀️ *System:* ${encodeURIComponent(formData.capacity)}%0A` +
      `📝 *Notes:* ${encodeURIComponent(formData.notes || 'N/A')}`;

    // 1. Send Email Notification to horizonsolarpowersolutions@gmail.com via FormSubmit
    try {
      fetch(`https://formsubmit.co/ajax/${COMPANY_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `☀️ New Solar Survey Request: ${formData.name} (${formData.phone})`,
          _template: 'table',
          _captcha: 'false',
          'Customer Name': formData.name,
          'Mobile Number': formData.phone,
          'Location in Kannur': formData.location || 'Kannur, Kerala',
          'Current 2-Month KSEB Bill': formData.bimonthlyBill,
          'Solar System Preference': formData.capacity,
          'Property Type': formData.propertyType,
          'Roof & Special Requirements': formData.notes || 'None mentioned',
          'Lead Source': 'Website Free Assessment Modal',
          'Date & Time': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        })
      }).catch(err => console.log('Email delivery note:', err));
    } catch (err) {
      console.log('Email error:', err);
    }

    // 2. Open WhatsApp in new tab for instant connection
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${msg}`, '_blank');

    // 3. Trigger celebration & success screen
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // 4. Save to localStorage for safety
    try {
      const existing = JSON.parse(localStorage.getItem('horizon_survey_leads') || '[]');
      existing.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('horizon_survey_leads', JSON.stringify(existing));
    } catch (err) {
      console.log(err);
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const openWhatsAppDirect = () => {
    const msg = `*NEW SOLAR SITE SURVEY REQUEST*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(formData.name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `📍 *Location:* ${encodeURIComponent(formData.location || 'Kannur')}%0A` +
      `🏠 *Property:* ${encodeURIComponent(formData.propertyType)}%0A` +
      `⚡ *Bimonthly Bill:* ${encodeURIComponent(formData.bimonthlyBill)}%0A` +
      `☀️ *System:* ${encodeURIComponent(formData.capacity)}`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-start sm:items-center justify-center p-2.5 sm:p-6">
      <div className="relative w-full max-w-lg my-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 p-4 sm:p-6 text-white relative shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              FREE ROOFTOP SURVEY • ZERO OBLIGATION
            </span>
          </div>

          <h3 className="text-base sm:text-2xl font-black text-white pr-6">
            Book Your Free Solar Assessment
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5">
            Horizon Solar Power Solutions • Mayyil, Kannur
          </p>
        </div>

        {/* Modal Body with smooth scrolling */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-4 sm:py-6 space-y-3 sm:space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              <h4 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Thank You, {formData.name || 'Valued Client'}!
              </h4>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] sm:text-xs font-semibold">
                <span>✓ Sent to WhatsApp & Email</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Your rooftop survey request has been received. Our solar engineer from our Mayyil office will call you shortly at <strong className="text-slate-900">{formData.phone}</strong>.
              </p>

              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
                <button
                  type="button"
                  onClick={openWhatsAppDirect}
                  className="px-5 py-2.5 sm:py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Chat</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 99471XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1">
                    Location in Kannur *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mayyil, Taliparamba"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1">
                    2-Month KSEB Bill
                  </label>
                  <select
                    value={formData.bimonthlyBill}
                    onChange={(e) => setFormData({ ...formData, bimonthlyBill: e.target.value })}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="Under ₹2,000">Under ₹2,000</option>
                    <option value="₹2,000 - ₹4,000">₹2,000 - ₹4,000</option>
                    <option value="₹4,000 - ₹7,000">₹4,000 - ₹7,000</option>
                    <option value="₹7,000 - ₹12,000">₹7,000 - ₹12,000</option>
                    <option value="Above ₹12,000">Above ₹12,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1">
                  Solar System Preference
                </label>
                <select
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                  className="w-full px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  <option value="3 kW System (Max ₹78,000 Subsidy)">3 kW System (Max ₹78,000 Subsidy)</option>
                  <option value="2 kW System (₹60,000 Subsidy)">2 kW System (₹60,000 Subsidy)</option>
                  <option value="1 kW System (₹30,000 Subsidy)">1 kW System (₹30,000 Subsidy)</option>
                  <option value="5 kW to 10 kW Residential Plant">5 kW to 10 kW Residential Plant</option>
                  <option value="Hybrid Solar System (With Battery)">Hybrid Solar System (With Battery)</option>
                  <option value="Commercial / Industrial Rooftop">Commercial / Industrial Rooftop</option>
                  <option value="Solar Maintenance & Service">Solar Maintenance & Service</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1">
                  Roof Type / Special Notes
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Concrete flat roof, tiled roof, truss needed..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-1.5 sm:py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                ></textarea>
              </div>

              <div className="pt-1 sm:pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:opacity-75 text-white font-black text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Your Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Free Survey Request</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-[10px] text-slate-500">
                🔒 Your details are safe with us. We will never spam you.
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
