import React, { useState, useEffect } from 'react';
import { Sparkles, Info } from 'lucide-react';
import { formatLocalDateInput, parseLocalDateInput } from '../utils/date';

export const TimelineGuide: React.FC = () => {
  // Default to a target date 6 months from now using the visitor's local calendar.
  const [targetDate, setTargetDate] = useState<string>(() => {
    const d = new Date();
    d.setMonth(d.getMonth() + 6);
    return formatLocalDateInput(d);
  });

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!targetDate) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const calculateTime = () => {
      const target = parseLocalDateInput(targetDate);

      if (!target) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const difference = +target - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const timelineSteps = [
    {
      phase: 'Initial Preparation',
      title: 'Concept & Consultation',
      action: 'Confirming your preferred date, securing your chosen venue, and establishing your event priorities.',
      role: 'Initial alignment on event vision and coordination requirements.',
    },
    {
      phase: 'Styling & Program Alignment',
      title: 'Styling & Program Blueprint',
      action: 'Color theme alignment, stage backdrop preferences, program sequence, and cue planning.',
      role: 'Guidance on program flow and visual setup coordination.',
    },
    {
      phase: 'Final Weeks',
      title: 'Coordination & Supplier Sync',
      action: 'Finalizing the schedule with all suppliers, confirming guest counts, and reviewing program cues.',
      role: 'Coordinating event logistics so details are aligned ahead of the event.',
    },
    {
      phase: 'Day of the Event',
      title: 'Event Day Coordination & Hosting',
      action: 'On-site coordination, stage & décor styling execution, ceremony timing, and live program hosting.',
      role: 'Guiding the occasion with care so celebrants and families can enjoy every moment.',
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-[#faf6ef] border-t border-[#ded2c4]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Date Selector & Countdown */}
          <div className="lg:col-span-5 bg-white border border-[#ded2c4] rounded-2xl p-6 sm:p-8 shadow-xs">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#80602e] mb-2">
              Event Planning
            </p>
            <h2 className="font-serif text-3xl font-semibold text-[#2c3a2a] mb-3">
              Event countdown
            </h2>
            <p className="text-xs sm:text-sm text-[#2b2420]/80 mb-6 leading-relaxed">
              Select your intended event date to track your timeline towards your celebration in Butuan &amp; Caraga.
            </p>

            {/* Date Input */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="timeline-target-date" className="block text-xs font-semibold text-[#3c4a3a] uppercase tracking-wider">
                  Select Your Planned Event Date
                </label>
                <span className="text-[11px] text-[#80602e] font-medium">YYYY-MM-DD</span>
              </div>
              <input
                id="timeline-target-date"
                type="date"
                min={formatLocalDateInput()}
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#faf6ef] border border-[#ded2c4] rounded-xl text-sm font-medium text-[#2b2420] focus:outline-none focus:ring-2 focus:ring-[#3c4a3a] cursor-pointer"
              />
            </div>

            {/* Countdown Display */}
            <div className="bg-[#f8f1ed] border border-[#ded2c4] rounded-2xl p-5 mb-6 text-center">
              <div className="grid grid-cols-4 gap-2 text-[#2c3a2a]">
                <div className="p-2 bg-white rounded-xl border border-[#ded2c4]/60">
                  <div className="font-serif text-2xl sm:text-3xl font-bold tabular-nums">
                    {timeLeft.days}
                  </div>
                  <div className="text-[10px] uppercase font-semibold text-[#80602e]">Days</div>
                </div>
                <div className="p-2 bg-white rounded-xl border border-[#ded2c4]/60">
                  <div className="font-serif text-2xl sm:text-3xl font-bold tabular-nums">
                    {timeLeft.hours}
                  </div>
                  <div className="text-[10px] uppercase font-semibold text-[#80602e]">Hours</div>
                </div>
                <div className="p-2 bg-white rounded-xl border border-[#ded2c4]/60">
                  <div className="font-serif text-2xl sm:text-3xl font-bold tabular-nums">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-[10px] uppercase font-semibold text-[#80602e]">Mins</div>
                </div>
                <div className="p-2 bg-white rounded-xl border border-[#ded2c4]/60">
                  <div className="font-serif text-2xl sm:text-3xl font-bold tabular-nums">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-[10px] uppercase font-semibold text-[#80602e]">Secs</div>
                </div>
              </div>
              <p className="text-[11px] text-[#80602e] mt-3">
                {targetDate ? (
                  <>
                    Target Date:{' '}
                    {(() => {
                      const target = parseLocalDateInput(targetDate);
                      return target
                        ? target.toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })
                        : targetDate;
                    })()}
                  </>
                ) : (
                  'Select an event date to begin the countdown.'
                )}
              </p>
            </div>

            <div className="p-4 bg-[#faf6ef] rounded-xl border border-[#ded2c4] flex items-start gap-3 mb-4">
              <Sparkles className="w-4 h-4 text-[#80602e] shrink-0 mt-0.5" />
              <p className="text-xs text-[#2b2420]/80 leading-relaxed">
                Reach out early to discuss date availability and planning support for your celebration.
              </p>
            </div>

            {/* Clarification Note per review request */}
            <div className="flex items-start gap-2 text-[11px] text-[#80602e] bg-[#f8f1ed] p-3 rounded-lg border border-[#ded2c4]/70">
              <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#80602e]" />
              <p>
                <em>Note:</em> This timeline outlines a suggested planning sequence for illustration purposes. Specific milestones and schedules are tailored directly during one-on-one client consultation.
              </p>
            </div>
          </div>

          {/* Right Column: Roadmap Cards */}
          <div className="lg:col-span-7 space-y-4">
            {timelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#ded2c4] rounded-2xl p-5 sm:p-6 shadow-xs hover:border-[#80602e]/50 transition-colors"
              >
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-xs font-semibold text-[#80602e] uppercase tracking-wider">
                    {step.phase}
                  </span>
                  <span className="text-xs font-mono text-[#2b2420]/70">
                    Step 0{idx + 1}
                  </span>
                </div>
                <h4 className="font-serif text-xl font-semibold text-[#2c3a2a] mb-2">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#2b2420]/80 mb-3 leading-relaxed">
                  {step.action}
                </p>
                <div className="text-xs text-[#3c4a3a] font-medium bg-[#f8f1ed] p-2.5 rounded-lg border border-[#ded2c4]/60">
                  <span className="font-semibold text-[#2c3a2a]">Focus: </span>
                  {step.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
