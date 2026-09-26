import React from 'react';
import { Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#faf6ef] border-t border-[#ded2c4] pt-14 pb-12 px-4 sm:px-6 lg:px-8 text-sm text-[#2b2420]/80">
      <div className="max-w-[1120px] mx-auto">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start pb-10 border-b border-[#ded2c4]">
          {/* Column 1: Brand & Tagline (5 cols on desktop) */}
          <div className="md:col-span-5 space-y-2">
            <a
              href="#top"
              className="inline-block font-serif text-2xl font-semibold tracking-tight text-[#2c3a2a] hover:text-[#3c4a3a] transition-colors"
            >
              Precious Beginnings by Janelle
            </a>
            <p className="text-xs sm:text-sm text-[#80602e] leading-relaxed max-w-sm">
              Wedding &amp; event planning, coordination, hosting, and styling across Butuan &amp; the Caraga Region.
            </p>
          </div>

          {/* Column 2: Navigation Links (4 cols on desktop) */}
          <div className="md:col-span-4 flex flex-col gap-2.5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#2c3a2a]/70">
              Quick Links
            </p>
            <nav
              aria-label="Footer Navigation"
              className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs font-medium text-[#2b2420]/90"
            >
              <a href="#services" className="hover:text-[#c07a76] transition-colors">
                Services &amp; Packages
              </a>
              <a href="#portfolio" className="hover:text-[#c07a76] transition-colors">
                Event Portfolio
              </a>
              <a href="#timeline" className="hover:text-[#c07a76] transition-colors">
                Planning Timeline
              </a>
              <a href="#about" className="hover:text-[#c07a76] transition-colors">
                Meet Janelle
              </a>
              <a href="#reviews" className="hover:text-[#c07a76] transition-colors">
                Client Reviews
              </a>
              <a href="#contact" className="hover:text-[#c07a76] transition-colors">
                Send an Inquiry
              </a>
            </nav>
          </div>

          {/* Column 3: Contact & Direct Channels (3 cols on desktop) */}
          <div className="md:col-span-3 flex flex-col md:items-end gap-2.5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#2c3a2a]/70">
              Connect Directly
            </p>

            {/* Phone */}
            <a
              href="tel:+639399265029"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tabular-nums text-[#2c3a2a] hover:text-[#3c4a3a] transition-colors bg-[#f4eee6] hover:bg-[#ece2d6] px-3.5 py-1.5 rounded-full border border-[#ded2c4] w-fit"
            >
              <Phone className="w-3.5 h-3.5 text-[#2c3a2a] shrink-0" />
              <span>+63 939 926 5029</span>
            </a>

            {/* Social Channels: Facebook & Messenger */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <a
                href="https://www.facebook.com/janellejampac/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2c3a2a] hover:text-[#1877F2] transition-colors bg-[#f4eee6] hover:bg-[#ece2d6] px-3 py-1.5 rounded-full border border-[#ded2c4]"
                aria-label="Facebook"
              >
                {/* Official Meta / Facebook 'f' Logo */}
                <svg
                  className="w-3.5 h-3.5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="12" fill="#1877F2" />
                  <path
                    d="M15.14 12.355l.412-2.686h-2.578V7.925c0-.737.362-1.455 1.519-1.455h1.175V4.183S14.603 4 13.593 4c-2.11 0-3.488 1.28-3.488 3.593v2.076H7.75v2.686h2.355V19.86A12.062 12.062 0 0012 20c.69 0 1.365-.058 2.02-.17v-7.475h2.12z"
                    fill="#ffffff"
                  />
                </svg>
                <span>Facebook</span>
              </a>

              <a
                href="https://m.me/janellejampac"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2c3a2a] hover:text-[#0084FF] transition-colors bg-[#f4eee6] hover:bg-[#ece2d6] px-3 py-1.5 rounded-full border border-[#ded2c4]"
                aria-label="Messenger"
              >
                {/* Official Meta Messenger Logo */}
                <svg
                  className="w-3.5 h-3.5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="footerMessengerGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0078FF" />
                      <stop offset="60%" stopColor="#00C6FF" />
                      <stop offset="100%" stopColor="#00E5FF" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.2 5.43 3.17 7.15.16.14.26.35.26.57l-.06 2.1c-.04.88.85 1.5 1.63 1.12l2.35-1.03c.18-.08.38-.09.57-.04.66.18 1.36.28 2.08.28 5.64 0 10-4.13 10-9.7S17.64 2 12 2z"
                    fill="url(#footerMessengerGradient)"
                  />
                  <path
                    d="M6.8 14.1l3.05-4.85a1.2 1.2 0 011.75-.32l2.4 1.8a.4.4 0 00.48 0l3.22-2.45c.44-.33.99.19.67.63l-3.05 4.85a1.2 1.2 0 01-1.75.32l-2.4-1.8a.4.4 0 00-.48 0l-3.22 2.45c-.44.33-.99-.19-.67-.63z"
                    fill="#ffffff"
                  />
                </svg>
                <span>Messenger</span>
              </a>
            </div>
          </div>
        </div>

        {/* Sub-Footer Row: Copyright & Physical Address */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#2b2420]/70 gap-2">
          <p>© {new Date().getFullYear()} Precious Beginnings by Janelle. All rights reserved.</p>
          <p className="text-[11px] text-[#80602e]">T. Calo Street corner Langihan Road, Butuan City, 8600</p>
        </div>
      </div>
    </footer>
  );
};
