import React from 'react';
import { Award, Factory, Cpu, Layers, Globe2, ShieldCheck } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  const stats = [
    {
      icon: Factory,
      value: '17+ Years',
      label: 'Lighting Experience',
      subtext: 'Pioneering LED & Solar Since 2008'
    },
    {
      icon: ShieldCheck,
      value: 'NDDC Approved',
      label: 'Community Electrification',
      subtext: 'Akwa Ibom, Rivers & Delta State'
    },
    {
      icon: Layers,
      value: '70+ Types',
      label: 'Proprietary Molds',
      subtext: 'In-House Die-Casting & Tooling'
    },
    {
      icon: Award,
      value: '100+ Patents',
      label: 'R&D Inventions',
      subtext: 'Thermal, Optical & Solar Patents'
    },
    {
      icon: Cpu,
      value: '5K - 10K',
      label: 'Daily Production Units',
      subtext: 'Rapid 15-30 Day Bulk Delivery'
    },
    {
      icon: Globe2,
      value: 'ISO 9001:2015',
      label: 'Certified Management',
      subtext: 'Full CE, CB, RoHS & SAA Approval'
    },
  ];

  return (
    <section className="relative z-10 py-12 border-y border-[#363b94]/30 bg-[#0d1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-[#111526] border border-[#363b94]/40 hover:border-[#c9313b]/60 transition-colors text-center group"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-[#363b94]/20 text-[#e03a45] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="text-2xl font-black text-white font-['Space_Grotesk'] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 leading-tight">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
