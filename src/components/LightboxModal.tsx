import React, { useEffect, useRef } from 'react';
import { PortfolioItem } from '../data/eventsData';
import { ExternalLink, X, Calendar, ArrowRight } from 'lucide-react';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onInquireSimilar: (title: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onInquireSimilar }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!item) return;

    // Save previous active element to restore focus on close
    previousActiveElement.current = document.activeElement as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Constrain Tab / Shift+Tab within modal elements
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Initial focus onto the first focusable element inside the modal
    const timer = setTimeout(() => {
      if (modalRef.current) {
        const firstFocusable = modalRef.current.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus();
      }
    }, 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-[#faf6ef] border border-[#ded2c4] rounded-2xl sm:rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Neutral Placeholder Tile */}
        <div className="bg-[#f1e3dd] border-b border-[#ded2c4] py-14 px-6 flex flex-col items-center justify-center text-center">
          <span className="font-serif text-5xl sm:text-6xl font-semibold text-[#2c3a2a] tracking-wider mb-2">
            {item.placeholderText}
          </span>
          <p className="text-xs font-medium text-[#80602e] uppercase tracking-wider">
            Placeholder Tile · Photo Pending Client Approval
          </p>
        </div>

        {/* Info Area */}
        <div className="p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <p className="text-xs font-semibold text-[#80602e] uppercase tracking-wider mb-2">
              {item.categoryLabel}
            </p>

            <h3
              id="modal-title"
              className="font-serif text-2xl sm:text-3xl font-semibold text-[#2c3a2a] leading-tight mb-3"
            >
              {item.title}
            </h3>

            <div className="flex items-center gap-1.5 text-xs text-[#80602e] mb-4">
              <Calendar className="w-3.5 h-3.5 text-[#3c4a3a]" />
              <span>{item.date}</span>
            </div>

            <p className="text-sm text-[#2b2420]/85 leading-relaxed mb-4">
              {item.description}
            </p>

            {item.vendorCredits && (
              <p className="text-xs text-[#2b2420]/75 bg-[#f8f1ed] p-3 rounded-xl border border-[#ded2c4] mb-4">
                {item.vendorCredits}
              </p>
            )}
          </div>

          <div className="pt-4 border-t border-[#ded2c4] flex flex-col sm:flex-row gap-3 items-center justify-between">
            <a
              href={item.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2c3a2a] hover:text-[#c07a76] transition-colors focus:outline-none focus:ring-1 focus:ring-[#2c3a2a] rounded px-1"
            >
              <span>View original post on Facebook</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                onInquireSimilar(item.title);
              }}
              className="inline-flex items-center justify-center gap-2 py-2.5 px-5 text-xs sm:text-sm font-medium rounded-full text-[#faf6ef] bg-[#2c3a2a] hover:bg-[#3c4a3a] transition-colors w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#2c3a2a]"
            >
              <span>Inquire about this celebration</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
