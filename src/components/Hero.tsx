import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onScrollToContact: () => void;
  onScrollToPortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToContact, onScrollToPortfolio }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Subtle ambient blur */}
      <div
        className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#f1e3dd]/60 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-[#ded2c4]/40 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition and Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#2c3a2a] leading-[1.12] mb-4 text-balance">
              Grace in every beginning.
            </h1>

            <p className="font-serif italic text-xl sm:text-2xl text-[#80602e] mb-4 leading-snug">
              Wedding &amp; event planning, coordination, hosting, and styling — Butuan &amp; Caraga.
            </p>

            <p className="text-base sm:text-lg text-[#2b2420]/85 max-w-xl mb-8 leading-relaxed">
              Thoughtful support for weddings, celebrations, and meaningful events, from the details behind the scenes to the moments your guests remember.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onScrollToContact();
                }}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-medium text-[#faf6ef] bg-[#2c3a2a] hover:bg-[#3c4a3a] shadow-xs transition-colors"
              >
                Inquire about your event
              </a>

              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  onScrollToPortfolio();
                }}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-medium text-[#2c3a2a] border border-[#2c3a2a] hover:bg-[#f1e3dd] transition-colors"
              >
                View our work
              </a>
            </div>

            {/* Trust points */}
            <div className="pt-6 border-t border-[#ded2c4] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#2b2420]/75">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3c4a3a]" />
                <span>Wedding Coordination &amp; Planning</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3c4a3a]" />
                <span>Stage Design &amp; Styling</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3c4a3a]" />
                <span>Event Hosting</span>
              </span>
            </div>
          </div>

          {/* Right Column: Botanical Art & Visual Harmony */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl bg-[#f8f1ed] border border-[#ded2c4] p-8 flex flex-col items-center justify-center shadow-xs text-center">
              {/* Botanical SVG Motif from original design */}
              <svg
                viewBox="0 0 200 240"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                className="w-48 sm:w-56 text-[#c07a76] mx-auto mb-6"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M100 230 C100 170 98 110 104 20" />
                <path d="M101 180 C80 170 62 150 58 128 C80 132 96 150 101 180Z" />
                <path d="M101 150 C122 140 140 120 144 98 C122 102 106 120 101 150Z" />
                <path d="M102 110 C84 100 70 82 68 62 C88 66 100 84 102 110Z" />
                <path d="M103 76 C118 68 130 52 132 36 C116 40 105 56 103 76Z" />
                <circle cx="104" cy="16" r="6" />
              </svg>

              <p className="font-serif text-2xl font-semibold text-[#2c3a2a] leading-tight">
                Precious Beginnings
              </p>
              <p className="font-serif italic text-sm text-[#80602e] mt-1">
                by Janelle
              </p>
              <p className="text-xs text-[#2b2420]/70 mt-3 max-w-[240px]">
                Butuan &amp; Caraga Events Coordinator, Host, Planner &amp; Stylist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
