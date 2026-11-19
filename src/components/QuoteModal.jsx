import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, Phone, MapPin, Building2, MessageCircle } from 'lucide-react';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Also prepare WhatsApp message
    const msg = `*NEW SOLAR SITE SURVEY REQUEST*%0A%0A` +
      `👤 *Name:* ${formData.name}%0A` +
      `📞 *Phone:* ${formData.phone}%0A` +
      `📍 *Location:* ${formData.location || 'Kannur'}%0A` +
      `🏠 *Property Type:* ${formData.propertyType}%0A` +
      `⚡ *Bimonthly Bill:* ${formData.bimonthlyBill}%0A` +
      `☀️ *System Interest:* ${formData.capacity}%0A` +
      `📝 *Notes:* ${formData.notes || 'N/A'}`;

    // Store in localStorage for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('horizon_survey_leads') || '[]');
      existing.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('horizon_survey_leads', JSON.stringify(existing));
    } catch (err) {
      console.log(err);
    }
  };

  const openWhatsAppDirect = () => {
    const msg = `*NEW SOLAR SITE SURVEY REQUEST*%0A%0A` +
      `👤 *Name:* ${formData.name}%0A` +
      `📞 *Phone:* ${formData.phone}%0A` +
      `📍 *Location:* ${formData.location || 'Kannur'}%0A` +
      `🏠 *Property Type:* ${formData.propertyType}%0A` +
      `⚡ *Bimonthly Bill:* ${formData.bimonthlyBill}%0A` +
      `☀️ *System Interest:* ${formData.capacity}`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 p-6 text-white relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              FREE ROOFTOP SURVEY • ZERO OBLIGATION
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white">
            Book Your Free Solar Assessment
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Horizon Solar Power Solutions • Mayyil, Kannur
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-xl font-extrabold text-slate-900">
                Thank You, {formData.name || 'Valued Client'}!
              </h4>

              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Your rooftop survey request has been received. Our solar engineer from our Mayyil office will call you shortly at <strong className="text-slate-900">{formData.phone}</strong>.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={openWhatsAppDirect}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Request to WhatsApp Now</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 99471XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Location in Kannur *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mayyil, Taliparamba, Chalode"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Current Bi-monthly KSEB Bill
                  </label>
                  <select
                    value={formData.bimonthlyBill}
                    onChange={(e) => setFormData({ ...formData, bimonthlyBill: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
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
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Solar System Preference
                </label>
                <select
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
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
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Any Specific Requirements or Roof Type
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Concrete flat roof, tiled roof, truss work needed, etc."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-sm shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Free Survey Request</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500 pt-1">
                🔒 Your details are safe with us. We will never spam you.
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
