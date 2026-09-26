import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/eventsData';
import { ExternalLink, Eye, ArrowUpRight } from 'lucide-react';
import { LightboxModal } from './LightboxModal';

interface PortfolioSectionProps {
  onInquireSimilar: (title: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onInquireSimilar }) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-20 lg:py-24 bg-[#faf6ef] border-t border-[#ded2c4]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2c3a2a] leading-tight mb-3">
            Recent celebrations &amp; projects
          </h2>
          <p className="text-base text-[#2b2420]/80 leading-relaxed">
            A few of the events we&apos;ve recently helped bring together.
          </p>
        </div>

        {/* 3-Card Grid with clean, neutral placeholder tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PORTFOLIO_ITEMS.map((item) => (
            <article
              key={item.id}
              className="group bg-white border border-[#ded2c4] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Neutral Placeholder Tile */}
                <div
                  className="relative aspect-[4/3] bg-[#f1e3dd] border-b border-[#ded2c4] flex flex-col items-center justify-center p-6 cursor-pointer select-none group-hover:bg-[#ebdcd5] transition-colors"
                  onClick={() => setSelectedItem(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setSelectedItem(item);
                  }}
                  aria-label={`View details for ${item.title}`}
                >
                  <span className="font-serif text-4xl sm:text-5xl font-semibold text-[#2c3a2a] tracking-wider mb-1">
                    {item.placeholderText}
                  </span>
                  <span className="text-[11px] font-medium text-[#80602e] uppercase tracking-wider">
                    Photo Pending Client Approval
                  </span>

                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#2c3a2a] text-xs font-medium shadow-xs">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View details</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs text-[#80602e] uppercase tracking-wider font-semibold mb-2">
                    {item.date} · {item.categoryLabel}
                  </p>

                  <h3
                    onClick={() => setSelectedItem(item)}
                    className="font-serif text-xl font-semibold text-[#2c3a2a] mb-2 hover:text-[#3c4a3a] cursor-pointer transition-colors leading-snug"
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#2b2420]/80 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Links */}
              <div className="px-6 pb-6 pt-2 border-t border-[#ded2c4]/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="text-xs font-medium text-[#2c3a2a] hover:text-[#80602e] flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>

                <a
                  href={item.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#2c3a2a] hover:text-[#c07a76] inline-flex items-center gap-1"
                >
                  <span>View original post</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onInquireSimilar={onInquireSimilar}
      />
    </section>
  );
};
