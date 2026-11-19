import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import OurServices from './components/OurServices';
import ProjectsSection from './components/ProjectsSection';
import SolarCalculator from './components/SolarCalculator';
import FaqSection from './components/FaqSection';
import ContactMapSection from './components/ContactMapSection';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleOpenQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-teal-700 selection:text-white font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden">
      {/* 1. Sleek Navbar */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 2. Hero Section with 4K Solar Array, Sunburst Graphic & Bold Title */}
      <Hero onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 3. Who We Are Section with Orange Ring Circular Photo */}
      <WhoWeAre onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 4. Our Services Section with 3 Signature Arched Cards on Dark Background */}
      <OurServices onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 5. Popular Solar Packages (Standardized Models for Homes & Businesses) */}
      <ProjectsSection onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 6. Interactive Solar Savings & Subsidy Calculator (GEPS Energy Inspired) */}
      <SolarCalculator onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 7. Frequently Asked Questions on KSEB & Subsidies */}
      <FaqSection />

      {/* 8. Map with Floating White Pin Card & Underlined Contact Form */}
      <ContactMapSection />

      {/* 9. Dark Charcoal 4-Column Footer (Official Facebook & Instagram ONLY) */}
      <Footer />

      {/* 10. Floating WhatsApp Chat Widget */}
      <WhatsAppWidget />

      {/* 11. Contact / Site Survey Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
      />
    </div>
  );
}
