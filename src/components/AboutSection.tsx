import React from 'react';
import { Globe2, CheckCircle2, Building } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#090c15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header exactly matching amaoso.com */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#363b94]/20 border border-[#363b94]/40 text-[#e03a45] text-xs font-bold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5 text-[#363b94]" />
            <span>Welcome to Our Outdoor Lighting Factory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
            About Us
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Lagos Amaoso Solar Technology Co., Ltd. — Reliable and professional factories for LED outdoor lighting.
          </p>
        </div>

        {/* Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">
              Lagos Amaoso Solar Technology Co., Ltd.
            </h3>
            
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Located in Lagos, Nigeria, <strong>Lagos Amaoso Solar Technology Co., Ltd.</strong> possesses strong R&D and manufacturing capabilities. Its parent company has <strong>17 years of experience</strong> in the lighting industry and, since its establishment in 2008, has been dedicated to the research, production, and sales of LED lighting products.
              </p>
              <p>
                Lagos Amaoso Solar Technology Co., Ltd. is well-known in the African lighting market, with products sold across Nigeria and other countries in Africa. We keep up with the pace of the world's development, and have been <strong>developing and producing solar energy series lamps and lanterns since 2012</strong>.
              </p>
              <p>
                We have set up a <strong>sub-factory for batteries and solar panels</strong>. Our products use brand new batteries and high conversion efficiency solar panels to ensure the highest quality.
              </p>
              <p>
                In addition, we have been developing <strong>smart lighting systems since 2016</strong>. Currently we have developed <strong>ZigBee, LoRa, WiFi and 4G technologies</strong>. Through the intelligent lighting system, we can achieve remote monitoring, intelligent dimming, energy management, and data analysis.
              </p>
            </div>

            {/* Core Capabilities from amaoso.com */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-200">
              <div className="flex items-center space-x-2 p-2.5 rounded-lg bg-[#111524] border border-[#363b94]/40">
                <CheckCircle2 className="w-4 h-4 text-[#e03a45] shrink-0" />
                <span>ISO9001:2015 Quality Management System</span>
              </div>
              <div className="flex items-center space-x-2 p-2.5 rounded-lg bg-[#111524] border border-[#363b94]/40">
                <CheckCircle2 className="w-4 h-4 text-[#e03a45] shrink-0" />
                <span>CB, CE, ROHS & SAA Certified Quality</span>
              </div>
              <div className="flex items-center space-x-2 p-2.5 rounded-lg bg-[#111524] border border-[#363b94]/40">
                <CheckCircle2 className="w-4 h-4 text-[#e03a45] shrink-0" />
                <span>Specialized Lighting Testing Workshop</span>
              </div>
              <div className="flex items-center space-x-2 p-2.5 rounded-lg bg-[#111524] border border-[#363b94]/40">
                <CheckCircle2 className="w-4 h-4 text-[#e03a45] shrink-0" />
                <span>Well-Stocked Inventory in Lagos & Warri</span>
              </div>
            </div>

            {/* African Export Countries */}
            <div className="p-4 rounded-xl bg-[#111524] border border-[#363b94]/40 space-y-2">
              <div className="flex items-center space-x-2 text-[#e03a45] font-bold text-xs uppercase tracking-wider">
                <Globe2 className="w-4 h-4 text-[#363b94]" />
                <span>African Export Destinations</span>
              </div>
              <p className="text-xs text-slate-400">
                Our products are exported to various countries in Africa, such as: <strong className="text-white">Nigeria, Kenya, South Africa, Egypt, Ghana, and Tanzania.</strong>
              </p>
            </div>

          </div>

          {/* Right Visual Box */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#363b94]/40 shadow-2xl bg-[#111524]">
              <img
                src="/images/case-study-hero.jpg"
                alt="Amaoso Factory Equipment"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090c15] via-[#090c15]/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 glass-panel p-3.5 rounded-xl border border-white/10">
                <p className="text-xs font-bold text-white">Advanced Production Lines & Assembly</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Meticulously staffed assembly lines guaranteeing exceptional quality and reliability.</p>
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-[#363b94]/30 space-y-3">
              <h4 className="text-sm font-bold text-white font-['Space_Grotesk']">
                Complete Outdoor Lighting Product Coverage:
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Street Light, Solar Street Light, Flood Light, Solar Flood Light, Highbay Light, and Tunnel Light.
              </p>
              <div className="pt-2 border-t border-slate-800 text-[11px] text-[#e03a45] font-bold">
                "Trust Lagos Amaoso Solar Technology Co., Ltd., for your outdoor lighting needs, where professionalism meets reliability. Partner with us to illuminate your path to success."
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
