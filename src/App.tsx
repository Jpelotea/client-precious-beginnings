import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { TrustTicker } from './components/TrustTicker';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TimelineGuide } from './components/TimelineGuide';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal button after user has scrolled 400px down
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForInquiry(serviceTitle);
    scrollToContact();
  };

  const handleInquireSimilar = (portfolioTitle: string) => {
    setSelectedServiceForInquiry(`Event styling inspired by: ${portfolioTitle}`);
    scrollToContact();
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#faf6ef] text-[#2b2420]">
      {/* Skip to Main Content Link for Keyboard / Screen Readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#2c3a2a] focus:text-[#faf6ef] focus:rounded-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2c3a2a] text-sm font-medium"
      >
        Skip to main content
      </a>

      {/* Top Header */}
      <Header onOpenInquiry={scrollToContact} />

      {/* Hero Section */}
      <main id="main-content" className="flex-1">
        <Hero
          onScrollToContact={scrollToContact}
          onScrollToPortfolio={scrollToPortfolio}
        />

        {/* Brand Information Strip */}
        <TrustTicker />

        {/* Services & Offerings */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Curated Portfolio (3 Verified Case Studies) */}
        <PortfolioSection onInquireSimilar={handleInquireSimilar} />

        {/* Event Timeline & Planning Countdown */}
        <TimelineGuide />

        {/* About Section with Neutral Monogram */}
        <AboutSection />

        {/* Verified Client Reviews */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact & Inquiries */}
        <InquirySection initialService={selectedServiceForInquiry} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating "Back to Top" button */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 z-40 p-3.5 sm:p-3 min-w-[48px] min-h-[48px] sm:min-w-0 sm:min-h-0 flex items-center justify-center rounded-full bg-[#2c3a2a] text-[#faf6ef] shadow-lg hover:bg-[#3c4a3a] border border-[#f1e3dd]/20 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[#2c3a2a] focus:ring-offset-2 active:scale-95 ${
          showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
