import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenCalculator: () => void;
  onOpenRFQ: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onOpenCalculator, onOpenRFQ }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroBanners = [
    {
      img: '/images/banner-factory-1.jpg',
      title: 'Nigeria Professional Street Lighting Solutions',
      subtitle: 'For Residential & Engineering Applications'
    },
    {
      img: '/images/factory-overview.png',
      title: 'Advanced R&D Department & Die-Casting Factory',
      subtitle: '70+ Types of Lamp Housings & 100+ Technological Patents'
    },
    {
      img: '/images/banner-factory-2.jpg',
      title: 'Daily Production Capacity of 5,000 to 10,000 Units',
      subtitle: 'Prompt Delivery Schedules and Strict Quality Standards'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroBanners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroBanners.length]);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappDirect}?text=Hello%20aMaoso%20Lighting%20Team%2C%20I%20am%20contacting%20you%20from%20your%20website%20to%20get%20a%20quote.`;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#090c15] via-[#0e1222] to-[#090c15]">
      
      {/* Background ambient lighting glow with logo indigo #363b94 and crimson #c9313b */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#363b94]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-[#c9313b]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Title Image is the Logo */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Title Image Changed to Logo */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="inline-block bg-white rounded-2xl p-3 sm:p-3.5 shadow-2xl border-2 border-[#363b94]/40 hover:border-[#c9313b] transition-colors">
                <img 
                  src="/images/logo.png" 
                  alt="aMaoso Logo" 
                  className="h-14 sm:h-18 w-auto object-contain"
                />
              </div>
            </div>

            {/* Sub-badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#111524] border border-[#363b94]/50 text-[#e03a45] text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#c9313b] animate-pulse" />
              <span>LAGOS AMAOSO SOLAR TECHNOLOGY CO., LTD.</span>
            </div>

            {/* Official Title from amaoso.com */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18] font-['Space_Grotesk']">
              Nigeria Professional Street Lighting Solutions for{' '}
              <span className="gradient-text-logo">Residential & Engineering Applications</span>
            </h1>

            {/* Exact "Who we Are" text from amaoso.com */}
            <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                <strong>Who we Are:</strong> Lagos Amaoso Solar Technology Co., Ltd. possesses strong R&D and manufacturing capabilities. Its parent company has <strong>17 years of experience</strong> in the lighting industry and, since its establishment in 2008, has been dedicated to the research, production, and sales of LED lighting products.
              </p>
              <p className="text-slate-400 text-sm">
                With profound technical expertise, our company focuses on high-quality LED streetlights, floodlights, industrial & mining lights, as well as solar lighting solutions. Equipped with an advanced R&D department and a die-casting factory, our team has developed more than <strong>70 types of lamp housings</strong> and obtained over <strong>100 patents</strong>.
              </p>
            </div>

            {/* Key Fact Badges with Logo Palette */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs">
              <div className="p-3.5 rounded-xl bg-[#111524] border border-[#363b94]/40 text-left">
                <p className="text-[#e03a45] font-black text-lg font-['Space_Grotesk']">5,000 - 10,000</p>
                <p className="text-[11px] text-slate-300 font-semibold">Daily Production Units</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#111524] border border-[#363b94]/40 text-left">
                <p className="text-white font-black text-lg font-['Space_Grotesk']">70+ Housings</p>
                <p className="text-[11px] text-slate-300 font-semibold">Proprietary Molds</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#111524] border border-[#363b94]/40 text-left col-span-2 sm:col-span-1">
                <p className="text-emerald-400 font-black text-lg font-['Space_Grotesk']">100+ Patents</p>
                <p className="text-[11px] text-slate-300 font-semibold">ISO 9001:2015 / CE / CB</p>
              </div>
            </div>

            {/* Action CTAs in Logo Colors */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={onExploreProducts}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#363b94] hover:bg-[#272a6e] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#363b94]/30 transition-all flex items-center justify-center space-x-2 cursor-pointer border border-white/20"
              >
                <span>View All Products</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onOpenRFQ}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#c9313b] hover:bg-[#a8252e] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-[#c9313b]/30"
              >
                <span>Get Instant Quote</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-lg shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-400">
              📍 Lagos Office: Mende, Maryland | Warri Warehouse: Effurun, Delta State
            </div>
          </div>

          {/* Right Column: Real Photos Carousel from amaoso.com */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Carousel Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#363b94]/50 shadow-2xl bg-[#111524] h-80 sm:h-96 group">
                {heroBanners.map((banner, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === activeSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={banner.img}
                      alt={banner.title}
                      fetchPriority={index === 0 ? "high" : "low"}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090c15] via-[#090c15]/40 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 glass-panel p-4 rounded-xl border border-white/10 space-y-1">
                      <p className="text-xs font-bold text-[#e03a45] uppercase tracking-wider">
                        Real Factory Inspection
                      </p>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {banner.title}
                      </h4>
                      <p className="text-[11px] text-slate-300">
                        {banner.subtitle}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Carousel Controls */}
                <button
                  onClick={() => setActiveSlide((prev) => (prev === 0 ? heroBanners.length - 1 : prev - 1))}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#090c15]/80 hover:bg-[#363b94] text-white backdrop-blur-md border border-slate-700 transition-colors"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev + 1) % heroBanners.length)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#090c15]/80 hover:bg-[#363b94] text-white backdrop-blur-md border border-slate-700 transition-colors"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Indicator Dots */}
                <div className="absolute top-4 right-4 flex space-x-1.5 z-10">
                  {heroBanners.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === activeSlide ? 'w-5 bg-[#c9313b]' : 'bg-slate-500/60'
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Real Logo Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 glass-panel p-3 rounded-xl border border-[#363b94]/60 shadow-xl flex items-center space-x-3 max-w-xs">
                <img 
                  src="/images/logo.png" 
                  alt="aMaoso Logo" 
                  className="h-9 w-auto bg-white rounded p-1 object-contain"
                />
                <div>
                  <p className="text-xs font-bold text-white">Genuine aMaoso Products</p>
                  <p className="text-[10px] text-slate-400">Strict Quality Inspection & Warranty</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
