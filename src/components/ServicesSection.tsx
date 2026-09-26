import React from 'react';
import { SERVICES } from '../data/eventsData';
import { ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 lg:py-24 bg-[#faf6ef]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2c3a2a] leading-tight mb-3">
            What we help with
          </h2>
          <p className="text-base text-[#2b2420]/80 leading-relaxed">
            From weddings and debuts to organizational events, each occasion is approached with care and attention to the details that bring a celebration together.
          </p>
        </div>

        {/* 2x2 Grid faithful to the verified design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="bg-white border border-[#ded2c4] rounded-2xl p-7 sm:p-8 shadow-xs flex flex-col justify-between hover:border-[#80602e]/50 transition-colors"
            >
              <div>
                <div
                  className="font-serif text-4xl sm:text-5xl text-[#c07a76] font-semibold leading-none mb-4 select-none"
                  aria-hidden="true"
                >
                  {service.letter}
                </div>

                <h3 className="font-serif text-2xl font-semibold text-[#2c3a2a] mb-3">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-[#2b2420]/80 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#ded2c4]">
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2c3a2a] hover:text-[#c07a76] transition-colors"
                >
                  <span>Inquire about this service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
