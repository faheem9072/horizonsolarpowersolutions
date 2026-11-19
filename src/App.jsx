import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LeadFormSection from './components/LeadFormSection';
import StatsStrip from './components/StatsStrip';
import WhoWeAre from './components/WhoWeAre';
import OurServices from './components/OurServices';
import ProjectsSection from './components/ProjectsSection';
import ProjectsGallerySection from './components/ProjectsGallerySection';
import SolarCalculator from './components/SolarCalculator';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactMapSection from './components/ContactMapSection';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import StickyMobileCall from './components/StickyMobileCall';
import QuoteModal from './components/QuoteModal';
import { FEATURE_FLAGS } from './data/solarData';

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
      
      {/* 1. Header with updated Free Quote CTA and refined branding */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 2. Hero Section with 4K Solar Array, Sunburst Graphic & Legal Disclaimer Note */}
      <Hero onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 3. High-Converting Fast Lead Form right below Hero */}
      <LeadFormSection />

      {/* 4. Trust Pillars & Assurance Strip (4 Factual Guarantees) */}
      <StatsStrip />

      {/* 5. Who We Are / About Section with GSTIN & Circular Accent */}
      <WhoWeAre onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 6. Our Services Section with Distinct Images for On-Grid, Off-Grid, Hybrid */}
      <OurServices onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 7. Popular Solar Packages (2kW, 3kW, 5kW) with WhatsApp Quote Action */}
      <ProjectsSection onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 8. Our Projects & Installed Systems Gallery (Hidden when SHOW_PROJECTS=false) */}
      {FEATURE_FLAGS.SHOW_PROJECTS && (
        <ProjectsGallerySection onOpenQuoteModal={handleOpenQuoteModal} />
      )}

      {/* 9. Interactive Solar Savings & Subsidy Calculator */}
      <SolarCalculator onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 10. What Our Customers Say Testimonials (Hidden when SHOW_TESTIMONIALS=false) */}
      {FEATURE_FLAGS.SHOW_TESTIMONIALS && (
        <TestimonialsSection />
      )}

      {/* 11. Frequently Asked Questions on KSEB & Subsidies */}
      <FaqSection />

      {/* 12. Google Map Embed for Kandakkai Road, Mayyil & Underlined Contact Form */}
      <ContactMapSection />

      {/* 13. Dark Charcoal 4-Column Footer with Legal Disclaimer & Developed by KORE */}
      <Footer />

      {/* 14. Sticky Call Now Button (Visible on mobile only < 768px) */}
      <StickyMobileCall />

      {/* 15. Floating WhatsApp Button (Compact icon on mobile < 768px, full pill on desktop) */}
      <WhatsAppWidget />

      {/* 16. Contact / Site Survey Assessment Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
      />

    </div>
  );
}
