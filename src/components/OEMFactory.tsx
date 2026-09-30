import React from 'react';
import { 
  Sparkles, 
  Layers, 
  DollarSign, 
  Truck, 
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

interface WhatWeOfferProps {
  onOpenRFQ: (customNote?: string) => void;
}

export const OEMFactory: React.FC<WhatWeOfferProps> = ({ onOpenRFQ }) => {
  const offerItems = [
    {
      num: '1',
      title: 'New Style Design',
      desc: 'A quick sketch or reference product from you is all we need to get started. We can create design concepts based on your ideas—whether hand drawings, reference products, or digital images—to better visualize the final outcome. Our development team can provide samples and quotations, offering targeted product development that helps reduce your development costs.',
      icon: Sparkles
    },
    {
      num: '2',
      title: 'Smarter Design',
      desc: 'Transform your design process with realistic 3D lighting simulations. Enhance speed, improve accuracy, save time, and expand your overall design capabilities.',
      icon: Layers
    },
    {
      num: '3',
      title: 'Cost Planning',
      desc: 'We analyze supply chains and manufacturing costs to identify potential production bottlenecks. This allows you to have contingency plans for unforeseen issues and ensures a smooth ramp-up. Keep in mind that prototyping differs from mass production, so specific steps must be considered in advance.',
      icon: DollarSign
    },
    {
      num: '4',
      title: 'Flexible Payment & Delivery Options',
      desc: 'Once both parties confirm the delivery schedule, you can select the preferred transportation method. Large orders can typically be completed within 15–30 days, helping save time and costs while facilitating faster trade and concrete execution steps.',
      icon: Truck
    },
  ];

  return (
    <section id="what-we-offer" className="py-24 relative bg-[#0d1120] border-t border-[#363b94]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header exactly as on amaoso.com */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#363b94]/20 border border-[#363b94]/40 text-[#e03a45] text-xs font-bold uppercase tracking-wider">
            <span>OEM & ODM Available</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
            What We CAN Offer
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Targeted product development, 3D photometric simulation, cost planning, and rapid 15–30 day bulk order completion.
          </p>
        </div>

        {/* 4 Core Pillars from amaoso.com */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {offerItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-panel p-8 rounded-2xl border border-[#363b94]/30 hover:border-[#c9313b]/60 transition-colors space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#363b94]/20 text-[#e03a45] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-4xl font-black text-slate-800 font-['Space_Grotesk'] group-hover:text-[#363b94]/40 transition-colors">
                    0{item.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action Button in Logo Colors */}
        <div className="text-center">
          <button
            onClick={() => onOpenRFQ('OEM & ODM Custom Manufacturing Inquiry')}
            className="px-8 py-4 rounded-xl bg-[#c9313b] hover:bg-[#a8252e] text-white font-bold text-sm uppercase tracking-wider inline-flex items-center space-x-2 shadow-xl shadow-[#c9313b]/30 transition-all cursor-pointer"
          >
            <span>Get OEM&ODM Quote</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
};
