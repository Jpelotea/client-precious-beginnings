import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-[#f1e3dd] border-t border-[#ded2c4]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 lg:gap-12">
          {/* Neutral Monogram / Initials Treatment */}
          <div
            className="shrink-0 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#2c3a2a] text-[#faf6ef] flex items-center justify-center font-serif text-3xl sm:text-4xl font-semibold shadow-sm border-2 border-[#ded2c4]"
            aria-label="Precious Beginnings monogram"
          >
            PB
          </div>

          {/* Factual About Copy */}
          <div className="text-center sm:text-left">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2c3a2a] leading-tight mb-4">
              About Precious Beginnings
            </h2>
            <p className="text-base sm:text-lg text-[#2b2420]/85 leading-relaxed max-w-2xl">
              Precious Beginnings by Janelle provides wedding and event planning, coordination, hosting, styling, and décor support across Butuan and Caraga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
