import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Copy, Check, ExternalLink, Send } from 'lucide-react';

interface InquiryFormData {
  name: string;
  contact: string;
  eventType: string;
  date: string;
  venue: string;
  guests: string;
  message: string;
}

interface InquirySectionProps {
  initialService?: string;
}

export const InquirySection: React.FC<InquirySectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    contact: '',
    eventType: '',
    date: '',
    venue: '',
    guests: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  // Sync service selection if passed
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        eventType: initialService,
        message: prev.message
          ? `${prev.message}\nInterested in: ${initialService}`
          : `Interested in: ${initialService}`,
      }));
    }
  }, [initialService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateBodyText = () => {
    return [
      `Name: ${(formData.name || '').trim()}`,
      `Contact: ${(formData.contact || '').trim()}`,
      `Event type: ${(formData.eventType || '').trim()}`,
      `Preferred date: ${formData.date || ''}`,
      `Venue: ${(formData.venue || '').trim()}`,
      `Guest count: ${(formData.guests || '').trim()}`,
      '',
      'Message:',
      (formData.message || '').trim(),
    ].join('\r\n');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = generateBodyText();
    const mailtoUrl = `mailto:janellejampac@gmail.com?subject=${encodeURIComponent(
      `Event Inquiry: ${formData.eventType || 'Planning & Styling'} - ${formData.name || 'Client'}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  const handleCopy = async () => {
    try {
      const text = generateBodyText();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // In case clipboard permission is denied
      setCopied(false);
    }
  };

  const formattedSms = () => {
    const text = `Hi Ms. Janelle! Inquiry for ${formData.eventType || 'Event Services'}. Name: ${formData.name || 'Client'}. Contact: ${formData.contact || 'N/A'}. Date: ${formData.date || 'TBD'}. Venue: ${formData.venue || 'TBD'}. Guests: ${formData.guests || 'TBD'}.`;
    return `sms:+639399265029?body=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#f1e3dd] border-t border-[#ded2c4]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2c3a2a] leading-tight mb-3">
            Tell us about your beginning
          </h2>
          <p className="text-sm sm:text-base text-[#2b2420]/80 leading-relaxed">
            Share a few details to prepare an email inquiry about your event.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-4 bg-white border border-[#ded2c4] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#2c3a2a] mb-1">
                Contact &amp; hours
              </h3>
              <p className="text-xs text-[#80602e] uppercase tracking-wider font-semibold">
                Precious Beginnings by Janelle
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#2b2420]/85">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#3c4a3a] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#2c3a2a]">Location</p>
                  <p>T. Calo Street corner Langihan Road</p>
                  <p>Butuan City, 8600</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#3c4a3a] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#2c3a2a]">Hours</p>
                  <p>Monday–Saturday · 9:00 AM–7:00 PM</p>
                  <p className="text-[#80602e]">Sunday · Closed</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#3c4a3a] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#2c3a2a]">Direct Hotline</p>
                  <a
                    href="tel:+639399265029"
                    className="tabular-nums hover:text-[#80602e] font-medium"
                  >
                    +63 939 926 5029
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#3c4a3a] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#2c3a2a]">Email</p>
                  <a
                    href="mailto:janellejampac@gmail.com"
                    className="hover:text-[#80602e] font-medium"
                  >
                    janellejampac@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Messenger Link */}
            <div className="pt-5 border-t border-[#ded2c4]">
              <p className="text-xs text-[#2b2420]/75 mb-2">Connect online</p>
              <a
                href="https://www.facebook.com/janellejampac/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium rounded-xl text-[#2c3a2a] bg-[#f8f1ed] hover:bg-[#ded2c4] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#3c4a3a]" />
                <span>Visit our Facebook page</span>
                <ExternalLink className="w-3.5 h-3.5 ml-auto" />
              </a>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-8 bg-white border border-[#ded2c4] rounded-2xl p-6 sm:p-8 shadow-xs">
            <form onSubmit={handleEmailSubmit} className="space-y-5" id="inquiryForm">
              {/* Row 1: Name and Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inquiry-name" className="block text-xs font-semibold text-[#3c4a3a] uppercase tracking-wider mb-1.5">
                    Name <span className="text-[#c07a76]">*</span>
                  </label>
                  <input
                    id="inquiry-name"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-[#faf6ef] border border-[#ded2c4] rounded-xl text-sm text-[#2b2420] focus:outline-none focus:ring-2 focus:ring-[#3c4a3a]"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-contact" className="block text-xs font-semibold text-[#3c4a3a] uppercase tracking-wider mb-1.5">
                    Mobile number or preferred contact <span className="text-[#c07a76]">*</span>
                  </label>
                  <input
                    id="inquiry-contact"
                    name="contact"
                    required
                    autoComplete="tel"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-[#faf6ef] border border-[#ded2c4] rounded-xl text-sm text-[#2b2420] focus:outline-none focus:ring-2 focus:ring-[#3c4a3a]"
                  />
                </div>
              </div>

              {/* Row 2: Event Type and Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inquiry-event-type" className="block text-xs font-semibold text-[#3c4a3a] uppercase tracking-wider mb-1.5">
                    Event type
                  </label>
                  <input
                    id="inquiry-event-type"
                    name="eventType"
                    placeholder="Wedding, debut, birthday…"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-[#faf6ef] border border-[#ded2c4] rounded-xl text-sm text-[#2b2420] focus:outline-none focus:ring-2 focus:ring-[#3c4a3a]"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="inquiry-event-date" className="block text-xs font-semibold text-[#3c4a3a] uppercase tracking-wider">
                      Preferred date
                    </label>
                    <span className="text-[11px] text-[#80602e] font-medium">YYYY-MM-DD</span>
                  </div>
                  <input
                    id="inquiry-event-date"
                    name="date"
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-[#faf6ef] border border-[#ded2c4] rounded-xl text-sm text-[#2b2420] focus:outline-none focus:ring-2 focus:ring-[#3c4a3a] cursor-pointer"
                  />
                </div>
              </div>

              {/* Row 3: Venue and Guest Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inquiry-venue" className="block text-xs font-semibold text-[#3c4a3a] uppercase tracking-wider mb-1.5">
                    Venue or location
                  </label>
                  <input
                    id="inquiry-venue"
                    name="venue"
                    placeholder="e.g. Your chosen venue or church"
                    value={formData.venue}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-[#faf6ef] border border-[#ded2c4] rounded-xl text-sm text-[#2b2420] focus:outline-none focus:ring-2 focus:ring-[#3c4a3a]"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-guests" className="block text-xs font-semibold text-[#3c4a3a] uppercase tracking-wider mb-1.5">
                    Estimated guest count
                  </label>
                  <input
                    id="inquiry-guests"
                    name="guests"
                    type="number"
                    min="1"
                    inputMode="numeric"
                    placeholder="e.g. 150"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-[#faf6ef] border border-[#ded2c4] rounded-xl text-sm text-[#2b2420] focus:outline-none focus:ring-2 focus:ring-[#3c4a3a]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="inquiry-message" className="block text-xs font-semibold text-[#3c4a3a] uppercase tracking-wider mb-1.5">
                  What help are you looking for?
                </label>
                <textarea
                  id="inquiry-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details regarding your celebration or specific coordination and styling needs..."
                  className="w-full px-3.5 py-2.5 bg-[#faf6ef] border border-[#ded2c4] rounded-xl text-sm text-[#2b2420] focus:outline-none focus:ring-2 focus:ring-[#3c4a3a]"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-[#faf6ef] bg-[#2c3a2a] hover:bg-[#3c4a3a] transition-all shadow-xs"
                >
                  <Mail className="w-4 h-4" />
                  <span>Continue by email</span>
                </button>

                <a
                  href={formattedSms()}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium text-[#2c3a2a] bg-[#f1e3dd] hover:bg-[#ded2c4] transition-colors"
                >
                  <Send className="w-4 h-4 text-[#3c4a3a]" />
                  <span>Send SMS</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs sm:text-sm font-medium text-[#80602e] hover:text-[#2c3a2a] border border-[#ded2c4] hover:bg-[#f8f1ed] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Details</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="ml-auto text-xs text-[#80602e] hover:text-[#2c3a2a] underline underline-offset-4"
                >
                  {showPreview ? 'Hide Preview' : 'Preview Message Text'}
                </button>
              </div>

              {/* Message text preview box */}
              {showPreview && (
                <div className="p-4 bg-[#faf6ef] border border-[#ded2c4] rounded-xl font-mono text-xs text-[#2b2420]/80 whitespace-pre-wrap leading-relaxed animate-in fade-in duration-150">
                  {generateBodyText()}
                </div>
              )}

              <div className="space-y-1.5 text-xs text-[#2b2420]/70 leading-relaxed bg-[#f8f1ed] p-3.5 rounded-xl border border-[#ded2c4]">
                <p>
                  <strong>How it works:</strong> Clicking &ldquo;Continue by email&rdquo; opens your device&apos;s default mail application with these details pre-filled to <strong>janellejampac@gmail.com</strong>.
                </p>
                <p className="text-[#80602e]">
                  <em>No desktop email app configured?</em> Click <strong>Copy Details</strong> to paste your message directly into webmail (Gmail, Yahoo, Outlook) or message us on Facebook, or click <strong>Send SMS</strong> if you are on a mobile device.
                </p>
              </div>
            </form>
          </div>
        </div>

        <p className="mt-8 text-xs sm:text-sm text-[#2b2420]/80 flex flex-wrap items-center gap-1.5">
          <span>Prefer to chat? Message us on</span>
          <a
            className="inline-flex items-center gap-1.5 text-[#2c3a2a] font-medium underline underline-offset-4 hover:text-[#0084FF] transition-colors"
            href="https://m.me/janellejampac"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Messenger"
          >
            {/* Official Meta Messenger Logo */}
            <svg
              className="w-4 h-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="messengerGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0078FF" />
                  <stop offset="60%" stopColor="#00C6FF" />
                  <stop offset="100%" stopColor="#00E5FF" />
                </linearGradient>
              </defs>
              <path
                d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.2 5.43 3.17 7.15.16.14.26.35.26.57l-.06 2.1c-.04.88.85 1.5 1.63 1.12l2.35-1.03c.18-.08.38-.09.57-.04.66.18 1.36.28 2.08.28 5.64 0 10-4.13 10-9.7S17.64 2 12 2z"
                fill="url(#messengerGradient)"
              />
              <path
                d="M6.8 14.1l3.05-4.85a1.2 1.2 0 011.75-.32l2.4 1.8a.4.4 0 00.48 0l3.22-2.45c.44-.33.99.19.67.63l-3.05 4.85a1.2 1.2 0 01-1.75.32l-2.4-1.8a.4.4 0 00-.48 0l-3.22 2.45c-.44.33-.99-.19-.67-.63z"
                fill="#ffffff"
              />
            </svg>
            <span>Messenger</span>
          </a>
        </p>
      </div>
    </section>
  );
};
