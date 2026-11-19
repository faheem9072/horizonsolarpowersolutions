import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, Sparkles, Phone, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/solarData';

export default function LeadFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    monthlyBill: '₹3,000 - ₹5,000',
    districtPlace: 'Mayyil, Kannur',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.districtPlace.trim()) {
      errs.districtPlace = 'Please provide your district or place in Kannur';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const msg = `*NEW ROOFTOP SOLAR LEAD*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(formData.name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `⚡ *Monthly KSEB Bill:* ${encodeURIComponent(formData.monthlyBill)}%0A` +
      `📍 *District / Place:* ${encodeURIComponent(formData.districtPlace)}%0A` +
      `☀️ *Source:* Website Hero Fast Lead Form`;

    // 1. Send Email Notification to horizonsolarpowersolutions@gmail.com
    // [TODO: Replace with custom backend CRM / database webhook endpoint when ready]
    try {
      fetch(`https://formsubmit.co/ajax/${COMPANY_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `☀️ New Solar Lead: ${formData.name} (${formData.districtPlace})`,
          _template: 'table',
          _captcha: 'false',
          'Customer Name': formData.name,
          'Mobile Number': formData.phone,
          'Monthly KSEB Bill': formData.monthlyBill,
          'District / Location': formData.districtPlace,
          'Lead Source': 'Hero Quick Lead Form',
          'Timestamp': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        })
      }).catch(err => console.log('Email delivery note:', err));
    } catch (err) {
      console.log('Error submitting lead email:', err);
    }

    // 2. Open WhatsApp directly with prefilled quotation inquiry
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${msg}`, '_blank');

    // 3. Trigger celebration & success
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="lead-form" className="relative -mt-10 sm:-mt-12 z-30 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/80 p-6 sm:p-8 md:p-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800">
                QUICK FREE ASSESSMENT
              </span>
              <span className="text-xs text-slate-400">• Zero Obligation</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Get Your Custom Rooftop Solar Quote
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Instant estimate for homes and commercial roofs across Kannur district.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Govt. Subsidy up to ₹78,000*</span>
          </div>
        </div>

        {/* Body */}
        {submitted ? (
          <div className="py-8 text-center space-y-3 animate-fadeIn">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg sm:text-xl font-black text-slate-900">
              Inquiry Received, {formData.name}!
            </h4>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Your details have been submitted to our engineering team in Mayyil. We will review your KSEB bill estimate and contact you at <strong className="text-slate-900">{formData.phone}</strong>.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold text-teal-800 underline hover:text-teal-900 cursor-pointer"
              >
                Submit another inquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="pt-6 space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Field 1: Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    errors.name ? 'border-red-400 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                {errors.name && <span className="text-[10px] text-red-500 mt-1 block">{errors.name}</span>}
              </div>

              {/* Field 2: Mobile Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Phone (10 Digits) *
                </label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="e.g. 99471XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    errors.phone ? 'border-red-400 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                {errors.phone && <span className="text-[10px] text-red-500 mt-1 block">{errors.phone}</span>}
              </div>

              {/* Field 3: Monthly KSEB bill */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Monthly KSEB Bill (₹) *
                </label>
                <select
                  value={formData.monthlyBill}
                  onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  <option value="Under ₹1,500">Under ₹1,500 / month</option>
                  <option value="₹1,500 - ₹3,000">₹1,500 - ₹3,000 / month</option>
                  <option value="₹3,000 - ₹5,000">₹3,000 - ₹5,000 / month</option>
                  <option value="₹5,000 - ₹8,000">₹5,000 - ₹8,000 / month</option>
                  <option value="Above ₹8,000">Above ₹8,000 / month</option>
                </select>
              </div>

              {/* Field 4: District / Place */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  District / Place *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mayyil, Kannur"
                  value={formData.districtPlace}
                  onChange={(e) => setFormData({ ...formData, districtPlace: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    errors.districtPlace ? 'border-red-400 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                {errors.districtPlace && <span className="text-[10px] text-red-500 mt-1 block">{errors.districtPlace}</span>}
              </div>

            </div>

            {/* Submit Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-slate-500 flex items-center gap-1.5">
                <span>🔒 Your contact is strictly private. We never spam.</span>
              </span>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-teal-800 hover:bg-teal-900 disabled:opacity-75 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-teal-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Get Free Solar Assessment</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </section>
  );
}
