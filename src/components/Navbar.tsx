import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

interface NavbarProps {
  onOpenRFQ: (productName?: string) => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRFQ, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Products', id: 'products' },
    { label: 'About Us', id: 'about' },
    { label: 'What We Offer', id: 'what-we-offer' },
    { label: 'Our Projects', id: 'projects' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact Us', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappDirect}?text=Hello%20aMaoso%20Lighting%20Team%2C%20I%20am%20interested%20in%20your%20solar%20lighting%20solutions.`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0b0e1b]/95 backdrop-blur-md shadow-2xl py-2.5 border-b border-[#363b94]/40' : 'bg-[#090c15]/95 backdrop-blur-md py-3'}`}>
      
      {/* Top Header Bar with logo colors */}
      <div className="hidden lg:block border-b border-[#363b94]/30 pb-2 mb-2 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-[#e03a45] font-bold flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-[#363b94]" />
              Lagos Amaoso Solar Technology Co., Ltd.
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">
              Daily Capacity: <strong className="text-white">5,000–10,000 Units</strong>
            </span>
          </div>

          <div className="flex items-center space-x-5 text-xs">
            <a href="tel:09020008868" className="hover:text-[#e03a45] flex items-center transition-colors">
              <Phone className="w-3 h-3 mr-1 text-[#363b94]" />
              Lagos: <strong className="ml-1 text-white">09020008868</strong>
            </a>
            <span className="text-slate-700">|</span>
            <a href="tel:08034096635" className="hover:text-[#e03a45] flex items-center transition-colors">
              <Phone className="w-3 h-3 mr-1 text-[#363b94]" />
              Warri: <strong className="ml-1 text-white">08034096635</strong>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Exact Official aMaoso Logo */}
        <button 
          onClick={() => handleLinkClick('hero')} 
          className="flex items-center space-x-3 text-left group cursor-pointer focus:outline-none"
        >
          <img 
            src="/images/logo.png" 
            alt="aMaoso Logo" 
            className="h-10 sm:h-12 w-auto object-contain bg-white/95 rounded-lg px-2.5 py-1 shadow-md group-hover:scale-105 transition-transform"
          />
          <div className="hidden sm:block">
            <p className="text-xs font-bold text-white tracking-wide uppercase">
              Lagos Amaoso Solar
            </p>
            <p className="text-[10px] text-slate-400 font-medium">
              17 Years Experience
            </p>
          </div>
        </button>

        {/* Main Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="px-3 py-2 text-sm font-bold text-slate-200 hover:text-[#e03a45] rounded-lg hover:bg-[#363b94]/20 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Button: Get Quote with Logo Crimson #C9313B */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
            WhatsApp
          </a>
          <button
            onClick={() => onOpenRFQ()}
            className="inline-flex items-center px-4 py-2.5 rounded-xl bg-[#c9313b] hover:bg-[#a8252e] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#c9313b]/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            Get Quote
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center space-x-2">
          <button
            onClick={() => onOpenRFQ()}
            className="px-3 py-1.5 rounded-lg bg-[#c9313b] text-white font-bold text-xs"
          >
            Get Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#111524] text-slate-300 hover:text-white border border-[#363b94]/40"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b0e1b] border-b border-[#363b94]/40 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-slate-200 hover:bg-[#363b94]/30 hover:text-[#e03a45] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/40 text-center font-bold text-sm flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRFQ();
              }}
              className="w-full py-3 px-4 rounded-xl bg-[#c9313b] text-white text-center font-bold text-sm uppercase tracking-wider flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-2 text-xs text-slate-400 text-center">
            <p>Hotlines: 09020008868 | 08034096635</p>
          </div>
        </div>
      )}
    </header>
  );
};
