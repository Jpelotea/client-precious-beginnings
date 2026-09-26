import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onOpenInquiry?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#faf6ef]/95 backdrop-blur-md border-b border-[#ded2c4]">
      {/* 3-Zone Top Bar Contract */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-serif text-lg sm:text-2xl font-semibold tracking-tight text-[#2c3a2a] hover:text-[#3c4a3a] transition-colors truncate max-w-[200px] xs:max-w-none sm:whitespace-nowrap"
        >
          <span className="sm:inline">Precious Beginnings</span>{' '}
          <span className="text-[#80602e] font-normal text-sm sm:text-xl">by Janelle</span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#2b2420]/80 hover:text-[#c07a76] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Direct contact & inquiry actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="#contact"
            onClick={onOpenInquiry}
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-[#faf6ef] bg-[#2c3a2a] hover:bg-[#3c4a3a] rounded-full transition-colors whitespace-nowrap shadow-xs"
          >
            Inquire
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2c3a2a] hover:bg-[#f1e3dd] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c3a2a] focus-visible:ring-offset-2"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf6ef] border-b border-[#ded2c4] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#2b2420] hover:bg-[#f1e3dd] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#ded2c4] flex flex-col gap-2">
            <a
              href="tel:+639399265029"
              className="flex items-center gap-2 px-3 py-2 text-sm text-[#80602e] font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>+63 939 926 5029</span>
            </a>
            <a
              href="https://www.facebook.com/janellejampac/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm text-[#3c4a3a] font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Visit our Facebook page</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
