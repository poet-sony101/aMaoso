import React, { useState } from 'react';
import { FAQS } from '../data/products';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#0d1120] border-t border-[#363b94]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#363b94]/20 border border-[#363b94]/40 text-[#e03a45] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#363b94]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
            FAQ
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Essential facts about Lagos Amaoso Solar Technology, factory locations, inspections, and warranty.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-[#363b94]/30 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex justify-between items-center space-x-4 cursor-pointer hover:bg-[#363b94]/10 transition-colors"
                >
                  <span className="text-base font-bold text-white font-['Space_Grotesk']">
                    {faq.q}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-[#111524] flex items-center justify-center shrink-0 text-slate-300">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#e03a45]" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-[#363b94]/20 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
