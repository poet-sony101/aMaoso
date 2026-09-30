import React from 'react';
import { Sun, Phone, Mail, MapPin, ShieldCheck, MessageCircle, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenRFQ: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenRFQ }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappDirect}?text=Hello%20aMaoso%20Lighting%20Team%2C%20I%20have%20an%20inquiry%20regarding%20your%20solar%20lighting%20solutions.`;

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      
      {/* Top Banner Call to Action */}
      <div className="border-b border-slate-800/80 py-12 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk']">
              Ready to Upgrade Road or Commercial Facility Lighting?
            </h3>
            <p className="text-slate-400 text-sm">
              Get direct factory pricing, Dialux simulations, and fast shipment from Lagos or Warri.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenRFQ()}
              className="px-6 py-3 rounded-xl bg-[#c9313b] hover:bg-[#a8252e] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#c9313b]/30 cursor-pointer"
            >
              Request Commercial RFQ
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/40 font-semibold text-xs flex items-center space-x-2 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Overview (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white px-3 py-1.5 rounded-xl border border-white/20 shadow-md">
                <img 
                  src="/images/logo.png" 
                  alt="aMaoso Solar Logo" 
                  className="h-7 w-auto object-contain"
                />
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed max-w-sm">
              <strong>Lagos Amaoso Solar Technology Co., Ltd.</strong> is a premier manufacturer of high-efficiency LED and Solar luminaires. Engineered with 17+ years of parent company heritage, 70+ proprietary molds, 100+ patents, and ISO 9001:2015 certified production.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="px-2.5 py-1 rounded-md bg-[#111524] border border-[#363b94]/50 text-[#e03a45] font-semibold">
                ISO 9001:2015
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-semibold">
                CE / CB / RoHS
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-semibold">
                IP66 Waterproof
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Product Catalog', id: 'products' },
                { label: 'Solar Sizing Tool', id: 'calculator' },
                { label: 'OEM & Manufacturing', id: 'oem-factory' },
                { label: 'Engineering Projects', id: 'projects' },
                { label: 'Company Heritage', id: 'about' },
                { label: 'Offices & Warehouses', id: 'contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-[#e03a45] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Lighting Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Product Systems
            </h4>
            <ul className="space-y-2">
              <li className="hover:text-[#e03a45]">
                <button onClick={() => onNavigate('products')}>Amaoso WA Series Solar Street Light</button>
              </li>
              <li className="hover:text-[#e03a45]">
                <button onClick={() => onNavigate('products')}>Amaoso WB Heavy Duty Solar Luminaire</button>
              </li>
              <li className="hover:text-[#e03a45]">
                <button onClick={() => onNavigate('products')}>Amaoso WG Split Solar Highway Light</button>
              </li>
              <li className="hover:text-[#e03a45]">
                <button onClick={() => onNavigate('products')}>Amaoso J-Series High-Power Floodlight</button>
              </li>
              <li className="hover:text-[#e03a45]">
                <button onClick={() => onNavigate('products')}>Amaoso UFO Industrial High Bay</button>
              </li>
              <li className="hover:text-[#e03a45]">
                <button onClick={() => onNavigate('products')}>Smart City LoRa / 4G Controllers</button>
              </li>
            </ul>
          </div>

          {/* Direct Nigerian Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2.5">
              <div>
                <p className="font-semibold text-slate-200">Lagos Head Office:</p>
                <p className="text-[11px] text-slate-400">No 3 Olabisi Close, Mende, Maryland, Lagos</p>
                <a href="tel:09020008868" className="text-[#e03a45] font-bold hover:underline block mt-0.5">
                  0902 000 8868
                </a>
              </div>

              <div>
                <p className="font-semibold text-slate-200">Warri Regional Depot:</p>
                <p className="text-[11px] text-slate-400">64 Airport Road, Effurun, Warri, Delta</p>
                <a href="tel:08034096635" className="text-[#e03a45] font-bold hover:underline block mt-0.5">
                  0803 409 6635
                </a>
              </div>

              <div>
                <p className="font-semibold text-slate-200">Official Email:</p>
                <a href="mailto:admin@oled-f.com" className="text-slate-300 hover:text-white">
                  admin@oled-f.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Lagos Amaoso Solar Technology Co., Ltd. (aMaoso). All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span>Rebuilt for High-Efficiency African Infrastructure</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-[#e03a45] transition-colors flex items-center space-x-1"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Action Trigger */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/40 flex items-center space-x-2 transition-transform hover:scale-105 group"
        title="Chat with aMaoso Lighting Engineer"
      >
        <MessageCircle className="w-6 h-6 stroke-[2.5]" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold px-0 group-hover:px-1">
          Chat on WhatsApp
        </span>
      </a>

    </footer>
  );
};
