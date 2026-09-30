import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { ProductCatalog } from './components/ProductCatalog';
import { OEMFactory } from './components/OEMFactory';
import { EngineeringProjects } from './components/EngineeringProjects';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { SolarCalculator } from './components/SolarCalculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RFQModal } from './components/RFQModal';

export const App: React.FC = () => {
  const [rfqOpen, setRfqOpen] = useState(false);
  const [rfqInitialProduct, setRfqInitialProduct] = useState<string | undefined>();
  const [rfqInitialNotes, setRfqInitialNotes] = useState<string | undefined>();

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenRFQ = (productName?: string, notes?: string) => {
    setRfqInitialProduct(productName);
    setRfqInitialNotes(notes);
    setRfqOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-[#c9313b] selection:text-white">
      
      {/* Global Navigation matching old site */}
      <Navbar 
        onOpenRFQ={(prod) => handleOpenRFQ(prod)} 
        onNavigate={scrollToSection} 
      />

      <main className="flex-1">
        {/* Hero: Nigeria Professional Street Lighting Solutions */}
        <Hero 
          onExploreProducts={() => scrollToSection('products')}
          onOpenCalculator={() => scrollToSection('calculator')}
          onOpenRFQ={() => handleOpenRFQ()}
        />

        {/* 17 Years, 70+ Lamp Housings, 100+ Patents, 5K-10K Units */}
        <StatsBanner />

        {/* Our Products: 8 Real Products with Real Photos */}
        <ProductCatalog 
          onSelectProductForRFQ={(productName) => handleOpenRFQ(productName)}
        />

        {/* What We CAN Offer (OEM & ODM Available) */}
        <OEMFactory 
          onOpenRFQ={(note) => handleOpenRFQ(undefined, note)}
        />

        {/* Our Projects: Real Factory Workshops & Assembly Photos */}
        <EngineeringProjects 
          onOpenRFQ={(context) => handleOpenRFQ(undefined, context)}
        />

        {/* About Us: Lagos Amaoso Solar Technology */}
        <AboutSection />

        {/* FAQ from amaoso.com */}
        <FAQSection />

        {/* Solar Project Sizing Tool */}
        <SolarCalculator 
          onQuoteWithSpecs={(specsText) => handleOpenRFQ(undefined, specsText)}
        />

        {/* Contact Us: Lagos Head Office & Warri Warehouse */}
        <ContactSection />
      </main>

      {/* Footer matching Quik Links & Contact info */}
      <Footer 
        onNavigate={scrollToSection}
        onOpenRFQ={() => handleOpenRFQ()}
      />

      {/* RFQ Quote Modal */}
      <RFQModal 
        isOpen={rfqOpen}
        onClose={() => setRfqOpen(false)}
        initialProduct={rfqInitialProduct}
        initialSpecsNote={rfqInitialNotes}
      />

    </div>
  );
};

export default App;
