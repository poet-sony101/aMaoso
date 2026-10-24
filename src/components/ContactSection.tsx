import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/products';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle,
  Building2,
  Warehouse,
  ShieldCheck
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Lagos',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSubmit = () => {
    const text = encodeURIComponent(
      `Hello aMaoso Team,\nName: ${formData.name || 'Website Visitor'}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nTarget Region: ${formData.location}\nMessage: ${formData.message || 'I would like to inquire about your commercial solar/LED lighting products.'}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappDirect}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090c15] border-t border-[#363b94]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#363b94]/20 border border-[#363b94]/40 text-[#e03a45] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#363b94]" />
            <span>Locations & Technical Consultations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
            Contact Us
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Get In Touch With Amaoso Lighting team, we will give you a professional and caring service.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Office & Warehouse Cards (Left 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Lagos Card */}
            <div className="glass-panel p-6 rounded-2xl border border-[#363b94]/40 hover:border-[#c9313b]/60 transition-colors space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#363b94]/20 text-[#e03a45] flex items-center justify-center border border-[#363b94]/40">
                    <Building2 className="w-5 h-5 text-[#363b94]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Lagos Head Office</h3>
                    <p className="text-xs text-[#e03a45] font-medium">Head Office & Sales</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#363b94]/30 text-white">
                  LAGOS
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>No 3 Olabisi Close, Off Adebowale Street, Mende Maryland Lagos, Nigeria</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#363b94] shrink-0" />
                  <a href="tel:09020008868" className="hover:text-[#e03a45] font-bold text-white">
                    09020008868 / 08034096635
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#363b94] shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#e03a45] text-slate-300">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Warri Card */}
            <div className="glass-panel p-6 rounded-2xl border border-[#363b94]/40 hover:border-[#c9313b]/60 transition-colors space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#363b94]/20 text-[#e03a45] flex items-center justify-center border border-[#363b94]/40">
                    <Warehouse className="w-5 h-5 text-[#363b94]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Warri Warehouse</h3>
                    <p className="text-xs text-[#e03a45] font-medium">South-South Logistics Hub</p>
                    <p className="text-[11px] text-emerald-400 font-semibold mt-0.5">NDDC Approved Community Supply Hub</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#363b94]/30 text-white">
                  DELTA
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>Warri warehouse, No 64 Airport Road, Opposite Shehu Usman Motors Effurun, Warri, Delta State</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#363b94] shrink-0" />
                  <a href="tel:08034096635" className="hover:text-[#e03a45] font-bold text-white">
                    08034096635 / 09020008868
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Monday - Saturday: 8:00 AM – 6:00 PM</span>
                </div>
                <div className="pt-2 border-t border-[#363b94]/30 text-[11px] text-slate-400 flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct stock & logistics for Akwa Ibom, Rivers, and Delta State community installations.</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/70 to-[#111524] border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-sm font-bold text-white flex items-center justify-center sm:justify-start space-x-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Immediate WhatsApp Engineering Support</span>
                </h4>
                <p className="text-xs text-slate-300">
                  Fast response times for contractor pricing, stock inquiries & Dialux reports.
                </p>
              </div>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappDirect}?text=Hello%20aMaoso%20Lighting%20Team%2C%20I%20am%20chatting%20from%20your%20website%20and%20need%20product%20information.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shrink-0 transition-colors shadow-lg shadow-emerald-500/20"
              >
                Open WhatsApp
              </a>
            </div>

          </div>

          {/* Consultation Form (Right 6 cols) */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-6 sm:p-8 border border-[#363b94]/40 space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
                Leave a message
              </h3>
              <p className="text-xs text-slate-400">
                Send an inquiry or schedule a visit to our Lagos office or Warri warehouse.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-[#111524] border border-emerald-500/40 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">Message Received</h4>
                  <p className="text-xs text-slate-300">
                    Thank you. The aMaoso lighting team will contact you shortly.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-xs text-slate-200 hover:text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-semibold text-slate-300">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Engr. Babatunde"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#111524] border border-[#363b94]/40 text-white placeholder-slate-500 focus:outline-none focus:border-[#c9313b]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-semibold text-slate-300">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0803 123 4567"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#111524] border border-[#363b94]/40 text-white placeholder-slate-500 focus:outline-none focus:border-[#c9313b]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-semibold text-slate-300">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#111524] border border-[#363b94]/40 text-white placeholder-slate-500 focus:outline-none focus:border-[#c9313b]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-semibold text-slate-300">Target Location</label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#111524] border border-[#363b94]/40 text-white focus:outline-none focus:border-[#c9313b]"
                    >
                      <option value="Lagos">Lagos State / Head Office</option>
                      <option value="Delta/Warri">Delta State / Warri Warehouse</option>
                      <option value="Akwa Ibom">Akwa Ibom State (Community / Urban)</option>
                      <option value="Rivers">Rivers State (Port Harcourt / Rural)</option>
                      <option value="Other Nigeria">Other Nigerian State</option>
                      <option value="African Export">African Export (Kenya, Ghana, etc.)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter your product requirements, requested wattage, or questions..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111524] border border-[#363b94]/40 text-white placeholder-slate-500 focus:outline-none focus:border-[#c9313b]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-5 rounded-xl bg-[#c9313b] hover:bg-[#a8252e] text-white font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-lg shadow-[#c9313b]/30 cursor-pointer"
                  >
                    <span>Submit Message</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="py-3 px-5 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 text-emerald-300 border border-emerald-500/40 font-semibold flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
