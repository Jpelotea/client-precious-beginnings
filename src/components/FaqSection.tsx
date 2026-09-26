import React, { useState } from 'react';
import { FAQS } from '../data/eventsData';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#faf6ef] border-t border-[#ded2c4]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#80602e] mb-3">
            Common Inquiries
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2c3a2a] leading-tight mb-4">
            Frequently asked questions.
          </h2>
          <p className="text-sm sm:text-base text-[#2b2420]/80 leading-relaxed">
            Helpful answers to guide your planning before booking your date.
          </p>
        </div>

        <div className="max-w-3xl space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#ded2c4] rounded-2xl overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c3a2a] focus-visible:ring-inset hover:bg-[#f8f1ed]/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-[#2c3a2a]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#80602e] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#2b2420]/80 leading-relaxed border-t border-[#ded2c4]/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
