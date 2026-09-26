export interface PortfolioItem {
  id: string;
  title: string;
  category: 'weddings' | 'styling' | 'institutional';
  categoryLabel: string;
  date: string;
  location: string;
  placeholderText: string;
  description: string;
  vendorCredits?: string;
  facebookUrl: string;
  tags: string[];
}

export interface ServiceItem {
  id: string;
  letter: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  date?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'weddings',
    letter: 'W',
    title: 'Wedding planning & coordination',
    description:
      'Your wedding involves dozens of moving parts. We help organize those details, from preparation through the event day, so you can stay focused on the celebration itself.',
  },
  {
    id: 'styling',
    letter: 'S',
    title: 'Event styling & design',
    description:
      'Thoughtful visual styling and stage design shaped around your event, venue, and celebration — including floral and décor arrangements.',
  },
  {
    id: 'hosting',
    letter: 'H',
    title: 'Hosting',
    description:
      'Keep your program moving with a host who guides the occasion while keeping guests engaged and the celebration on track.',
  },
  {
    id: 'milestones',
    letter: 'D',
    title: 'Debuts, milestones & organizational events',
    description:
      'From debuts and birthdays to institutional, government, and company occasions — styling and coordination shaped around the people being celebrated.',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'bjmp-anniversary',
    title: 'BJMP Caraga — 31st Anniversary',
    category: 'institutional',
    categoryLabel: 'Event styling',
    date: 'September 11, 2026',
    location: 'Butuan & Caraga',
    placeholderText: 'BJMP',
    description: 'Event styling for BJMP Caraga’s 31st Anniversary.',
    vendorCredits: 'Precious Beginnings by Janelle for BJMP Caraga.',
    facebookUrl:
      'https://www.facebook.com/janellejampac/posts/09112026event-stylist-for-bjmp-caragas-31st-anniversary-thank-you-so-much-bjmp-c/1547933357351766/',
    tags: ['BJMP Caraga', 'Event Styling', 'Anniversary'],
  },
  {
    id: 'deped-buwan-ng-wika',
    title: 'DepEd Agusan del Norte — Buwan ng Wika',
    category: 'styling',
    categoryLabel: 'Stage design',
    date: 'August 27, 2026',
    location: 'Butuan & Caraga',
    placeholderText: 'DepEd',
    description: 'Stage design for the Buwan ng Wika celebration.',
    vendorCredits: 'Stage design by Precious Beginnings by Janelle.',
    facebookUrl:
      'https://www.facebook.com/janellejampac/posts/082726stage-design-for-deped-agusan-del-nortes-buwan-ng-wika-celebration-pampini/1529838639161238/',
    tags: ['DepEd Agusan del Norte', 'Stage Design', 'Buwan ng Wika'],
  },
  {
    id: 'arnel-april-wedding',
    title: 'Arnel & April — Wedding',
    category: 'weddings',
    categoryLabel: 'Coordination & styling',
    date: 'Date to be confirmed',
    location: 'Butuan & Caraga',
    placeholderText: 'A & A',
    description: 'Coordination and styling, credited alongside other local event suppliers.',
    vendorCredits: 'Coordination and styling by Precious Beginnings by Janelle alongside local event suppliers.',
    facebookUrl:
      'https://www.facebook.com/janellejampac/photos/d41d8cd9/746167084195068/',
    tags: ['Wedding', 'Coordination', 'Styling'],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    quote: 'Thank you so much for helping make a fairy tale come true.',
    author: 'Juanna Paloo',
    date: 'November 12, 2019',
  },
  {
    id: '2',
    quote: 'She always responded with patience.',
    author: 'Sheina Generalao Andres',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'What areas do you serve?',
    answer:
      'Precious Beginnings by Janelle provides wedding and event planning, coordination, hosting, and styling services in Butuan & Caraga.',
  },
  {
    question: 'What types of events do you handle?',
    answer:
      'We handle weddings, debuts, birthdays, milestones, and institutional or organizational occasions, offering event coordination, visual styling, stage design, and hosting.',
  },
  {
    question: 'Can services be booked individually or combined?',
    answer:
      'Yes. Clients can inquire about full event coordination, stage and visual styling, hosting, or a tailored combination shaped around their specific celebration needs.',
  },
  {
    question: 'How do I inquire about availability and pricing?',
    answer:
      'You can share your event details using our contact form to prepare an email inquiry, send an SMS, call +63 939 926 5029, or message Precious Beginnings by Janelle directly on Facebook.',
  },
];
