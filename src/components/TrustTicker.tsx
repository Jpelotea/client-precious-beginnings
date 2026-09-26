import React from 'react';
import { MapPin, Phone, Clock, Calendar } from 'lucide-react';

export const TrustTicker: React.FC = () => {
  return (
    <div className="bg-[#3c4a3a] text-[#faf6ef] text-xs sm:text-sm py-3 px-4 border-y border-[#2c3a2a]">
      <div className="max-w-[1120px] mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-[#f1e3dd] shrink-0" />
          <span>Butuan &amp; Caraga Events Coordinator, Host, Planner &amp; Stylist</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[#f1e3dd]/90 text-xs">
          <a
            href="tel:+639399265029"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-[#f1e3dd]" />
            <span className="tabular-nums">+63 939 926 5029</span>
          </a>
          <span className="hidden md:inline" aria-hidden="true">·</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-[#f1e3dd]" />
            <span>Mon–Sat 9:00 AM–7:00 PM</span>
          </span>
          <span className="hidden md:inline" aria-hidden="true">·</span>
          <a
            href="#contact"
            className="underline underline-offset-2 hover:text-white transition-colors"
          >
            T. Calo St. cor. Langihan Rd, Butuan City
          </a>
        </div>
      </div>
    </div>
  );
};
