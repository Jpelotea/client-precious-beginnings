import React from 'react';
import { TESTIMONIALS } from '../data/eventsData';
import { ExternalLink } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-24 bg-[#faf6ef] border-t border-[#ded2c4]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2c3a2a] leading-tight mb-2">
            Client words
          </h2>
          <p className="text-sm sm:text-base text-[#2b2420]/75">
            Client feedback from past celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((review) => (
            <figure
              key={review.id}
              className="bg-white border border-[#ded2c4] rounded-2xl p-7 sm:p-8 shadow-xs flex flex-col justify-between"
            >
              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#2c3a2a] leading-relaxed mb-6">
                “{review.quote}”
              </blockquote>

              <figcaption className="pt-4 border-t border-[#ded2c4] text-xs text-[#80602e] font-medium">
                — {review.author}
                {review.date ? ` · ${review.date}` : ''}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="https://www.facebook.com/janellejampac/reviews/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2c3a2a] hover:text-[#c07a76] underline underline-offset-4 transition-colors"
          >
            <span>See more celebrations and client feedback on Facebook</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
