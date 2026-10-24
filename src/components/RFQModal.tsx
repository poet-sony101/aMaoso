import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, CheckCircle, ShieldCheck, FileCheck } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/products';

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  initialSpecsNote?: string;
}

export const RFQModal: React.FC<RFQModalProps> = ({ 
  isOpen, 
  onClose, 
  initialProduct, 
  initialSpecsNote 
}) => {
  const [selectedProduct, setSelectedProduct] = useState(initialProduct || PRODUCTS[0].name);
  const [quantity, setQuantity] = useState('10 - 50 units (Estate / Mid-Scale)');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState(initialSpecsNote || '');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) setSelectedProduct(initialProduct);
    if (initialSpecsNote) setNotes(initialSpecsNote);
  }, [initialProduct, initialSpecsNote]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `OFFICIAL RFQ INQUIRY - aMaoso Lighting\n` +
      `Product: ${selectedProduct}\n` +
      `Estimated Quantity: ${quantity}\n` +
      `Client Name: ${name || 'Prospective Client'}\n` +
      `Company/Agency: ${company || 'N/A'}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Project Specifications / Notes: ${notes || 'Standard Tender Specification'}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappDirect}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl glass-panel rounded-2xl border border-slate-700 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex justify-between items-center bg-slate-900/90">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#363b94]/30 text-[#e03a45] flex items-center justify-center border border-[#363b94]/50">
              <FileCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-['Space_Grotesk']">
                Request Formal Price Quotation (RFQ)
              </h3>
              <p className="text-xs text-slate-400">Direct factory pricing from Lagos & Warri depots</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white">Quotation Request Logged</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Our commercial engineering team is preparing your official proforma invoice and technical data sheets.
                </p>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleSendToWhatsApp}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center space-x-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Direct to WhatsApp for Instant Review</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Product and Quantity Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Selected Product / System</label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white focus:outline-none focus:border-[#363b94]"
                  >
                    {PRODUCTS.map((prod) => (
                      <option key={prod.id} value={prod.name}>
                        {prod.name}
                      </option>
                    ))}
                    <option value="Custom OEM/ODM Requirement">Custom OEM/ODM Specification</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Project Order Scale / Quantity</label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white focus:outline-none focus:border-[#363b94]"
                  >
                    <option value="1 - 10 units (Evaluation / Pilot)">1 - 10 units (Evaluation / Pilot)</option>
                    <option value="10 - 50 units (Estate / Mid-Scale)">10 - 50 units (Estate / Mid-Scale)</option>
                    <option value="50 - 200 units (Commercial / Highway)">50 - 200 units (Commercial / Highway)</option>
                    <option value="200+ units (Container Bulk Order)">200+ units (Container Bulk Order)</option>
                  </select>
                </div>
              </div>

              {/* Client Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Engr. David Alabi"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-[#363b94]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Company / Organization / Ministry</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Primeview Estates Ltd"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-[#363b94]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Phone Number (WhatsApp Preferred) *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0803 000 0000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-[#363b94]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">Official Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="david@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-[#363b94]"
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-300">Specific Technical Requirements / Pole Height / Delivery Location</label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Specify pole height, required wattage, delivery location (Lagos, Warri, Abuja, etc.), or tender timeline."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-[#363b94]"
                />
              </div>

              {/* Trust Badge */}
              <div className="flex items-center space-x-2 text-[11px] text-slate-400 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>NDDC Approved. Verified factory inventory in Maryland Lagos and Effurun Warri for rapid delivery across Akwa Ibom, Rivers & Delta.</span>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-5 rounded-xl bg-[#c9313b] hover:bg-[#a8252e] text-white font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg shadow-[#c9313b]/30 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Proforma Request</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-emerald-600/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
