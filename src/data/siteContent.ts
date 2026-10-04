import type { CaseStudy, HeroSlide, ServiceTab } from '@/types';
import { remoteAsset } from '@/utils/assets';

export const heroSlides: HeroSlide[] = [
  {
    id: 'steel-detailing',
    title: 'Steel Detailing',
    subtitle: 'Every part and every connection-detailed for flawless fabrication.',
    image: remoteAsset('wp-content/uploads/2025/03/Slider-1.png'),
    ctaLabel: 'Discover More',
    ctaHref: '/services/civil/structural-steel-detailing-services/',
  },
  {
    id: 'bim',
    title: 'BIM Services',
    subtitle: 'One coordinated model. Every discipline. Zero surprises on site.',
    image: remoteAsset('wp-content/uploads/2026/09/Slider-BIM-2.png'),
    ctaLabel: 'Explore Now',
    ctaHref: '/services/civil/bim-services/',
  },
  {
    id: 'spm',
    title: 'SPM',
    subtitle: 'Powering production with our SPM excellence in automation.',
    image: remoteAsset('wp-content/uploads/2025/03/Slider-03.png'),
    ctaLabel: 'Built For You',
    ctaHref: '/services/mechanical/special-purpose-machine-design/',
  },
  {
    id: 'utilities',
    title: 'Utilities',
    subtitle: 'Building smarter future with top-notch utility solutions.',
    image: remoteAsset('wp-content/uploads/2025/03/Group-1497.png'),
    ctaLabel: 'Get Started',
    ctaHref: '/services/utilities-power-transmission-design/',
  },
  {
    id: 'engineering-design',
    title: 'Engineering Design & Detailing Services',
    subtitle: 'Precision-driven engineering solutions trusted globally.',
    image: remoteAsset('wp-content/uploads/2025/07/Slider-05.png'),
    ctaLabel: 'Get Started',
    ctaHref: '/civil/',
  },
  {
    id: 'plant-engineering',
    title: 'Plant Engineering',
    subtitle:
      'Moldtek Technologies delivers comprehensive plant engineering solutions designed for performance, safety, and operational efficiency.',
    image: remoteAsset('wp-content/uploads/2025/08/Plant-Engineering-Slider.png'),
    ctaLabel: 'Get Started',
    ctaHref: '/services/plant/plant-engineering/',
  },
  {
    id: 'biw',
    title: 'BIW',
    subtitle: 'Grip onto excellence with BIW fixtures engineered for precision.',
    image: remoteAsset('wp-content/uploads/2025/03/Slider-02.png'),
    ctaLabel: 'Explore Now',
    ctaHref: '/services/mechanical/automotive-design-services/',
  },
];

export const clientLogos: string[] = Array.from({ length: 25 }, (_, i) => {
  const num = i + 1;
  if (num === 1) return remoteAsset('wp-content/uploads/2025/07/moldtek.png');
  if (num <= 6) return remoteAsset(`wp-content/uploads/2025/04/Logo-${num}.png`);
  return remoteAsset(`wp-content/uploads/2025/04/Logo-${String(num).padStart(2, '0')}.png`);
});

export const standardLogos: string[] = [
  remoteAsset('wp-content/uploads/2025/03/cisc-logo.png'),
  remoteAsset('wp-content/uploads/2025/03/Group-1395.png'),
  remoteAsset('wp-content/uploads/2025/03/Group-1396.png'),
  remoteAsset('wp-content/uploads/2025/03/Group-1397.png'),
  remoteAsset('wp-content/uploads/2025/03/Group-1431.png'),
  remoteAsset('wp-content/uploads/2025/03/Group-1435.png'),
  remoteAsset('wp-content/uploads/2025/03/Group-1437.png'),
  remoteAsset('wp-content/uploads/2025/03/Group-1455.png'),
];

const defaultStats = [
  {
    value: 1500,
    suffix: '+',
    label: 'Delivered Successfully',
    href: '/projects/',
    bgImage: remoteAsset('assets/images/Bg-Blue-1.png'),
  },
  {
    value: 50,
    suffix: '+',
    label: 'Clients',
    href: '/our-clients/',
    bgImage: remoteAsset('assets/images/Bg-Black-1.png'),
  },
  {
    value: 10,
    suffix: 'Million +',
    label: 'Man Hours',
    bgImage: remoteAsset('assets/images/Bg-Black-3.png'),
  },
];

export const serviceTabs: ServiceTab[] = [
  {
    id: 'construction',
    label: 'Construction',
    heading: 'Engineering Excellence in',
    headingAccent: 'Construction',
    stats: defaultStats,
    highlights: [
      { title: 'Steel Detailing', image: remoteAsset('assets/images/Steel-Detailing.png'), href: '/services/civil/structural-steel-detailing-services/' },
      { title: 'BIM', image: remoteAsset('assets/images/Construction-Documents-Design-Development.png'), href: '/services/civil/bim-services/' },
      { title: 'Construction Design & Delegated Design', image: remoteAsset('assets/images/Civil-Project.png'), href: '/services/civil/connection-design-delegated-designs-services/' },
      { title: 'Precast Detailing', image: remoteAsset('assets/images/Precast-Detailing.png'), href: '/services/civil/precast-design-detailing-services/' },
      { title: 'Misc', image: remoteAsset('assets/images/Misc.png'), href: '/services/civil/miscellaneous-steel-detailing/' },
      { title: 'Estimation', image: remoteAsset('assets/images/Estimation.png'), href: '/services/civil/structural-steel-estimating-services/' },
      { title: 'Pre-Engineered Building', image: remoteAsset('assets/images/Pre-Engineered-6.png'), href: '/services/civil/pre-engineered-steel-building-design/' },
    ],
    industries: ['Commercial', 'Industrial', 'Infrastructure', 'Healthcare', 'Education', 'Sports & Entertainment'],
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    heading: 'Shaping Ideas,',
    headingAccent: 'Building Products',
    stats: [
      { value: 1120, suffix: '+', label: 'Delivered Successfully', href: '/projects/', bgImage: remoteAsset('assets/images/Bg-Blue-1.png') },
      { value: 32, suffix: '+', label: 'Clients', href: '/our-clients/', bgImage: remoteAsset('assets/images/Bg-Black-1.png') },
      { value: 10000, suffix: '+', label: 'Man Hours', bgImage: remoteAsset('assets/images/Bg-Black-3.png') },
    ],
    highlights: [
      { title: 'BIW', image: remoteAsset('assets/images/BIW-Key-Highlights-01.png'), href: '/services/mechanical/automotive-design-services/' },
      { title: 'SPM', image: remoteAsset('assets/images/Special-Purpose-03.png'), href: '/services/mechanical/special-purpose-machine-design/' },
      { title: 'Press Tools', image: remoteAsset('assets/images/Press-Tool-02.png'), href: '/services/mechanical/sheet-metal-press-tool-designs/' },
    ],
    industries: ['Automotive', 'Aerospace', 'Industrial Machinery', 'Consumer Products'],
  },
  {
    id: 'utilities',
    label: 'Utilities',
    heading: 'Transforming Infrastructure with',
    headingAccent: 'Utility Solutions',
    stats: [
      { value: 40, suffix: '+', label: 'Delivered Successfully', href: '/projects/', bgImage: remoteAsset('assets/images/Bg-Blue-1.png') },
      { value: 2, suffix: '+', label: 'Clients', href: '/our-clients/', bgImage: remoteAsset('assets/images/Bg-Black-1.png') },
      { value: 10000, suffix: '+', label: 'Man Hours', bgImage: remoteAsset('assets/images/Bg-Black-3.png') },
    ],
    highlights: [
      { title: 'Telecom', image: remoteAsset('assets/images/Telecom-Case.png'), href: '/services/telecom-tower-structure-design/' },
      { title: 'Misc Utilities', image: remoteAsset('assets/images/Utilities-case.png'), href: '/services/utilities-power-transmission-design/' },
    ],
    industries: ['Telecom', 'Power Transmission', 'Renewable Energy', 'Infrastructure'],
  },
  {
    id: 'plant-engineering',
    label: 'Plant Engineering',
    heading: 'Engineering Precision in Plants,',
    headingAccent: 'Processes & Systems',
    stats: defaultStats,
    highlights: [
      { title: 'Piping Engineering', image: remoteAsset('assets/images/Piping-Engineering-6.png'), href: '/services/plant-engineering/piping-engineering/' },
      { title: 'Process Engineering', image: remoteAsset('assets/images/Process-Engineering-P.png'), href: '/services/plant-engineering/process-engineering/' },
      { title: 'Mechanical Engineering', image: remoteAsset('assets/images/Mechanical-Engineering-6.png'), href: '/services/plant-engineering/mechanical-engineering/' },
      { title: 'Electrical Engineering', image: remoteAsset('assets/images/Electrical-Engineering-6.png'), href: '/services/plant-engineering/electrical-engineering/' },
      { title: 'Civil & Structural Engineering', image: remoteAsset('assets/images/Structural-Engineering-6.png'), href: '/services/plant-engineering/structural-engineering/' },
      { title: 'Instrumentation Engineering', image: remoteAsset('assets/images/Instrumentation-Engineering-6.png'), href: '/services/plant-engineering/instrumentation-engineering/' },
    ],
    industries: ['Oil & Gas', 'Pharmaceutical', 'Food & Beverage', 'Chemical', 'Power'],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: 'Gillette Stadium North Endzone Renovation',
    image: remoteAsset('wp-content/uploads/2025/03/GIllete-Stadium-2018-customer-choice-award.png'),
    href: '/case-studies-civil/',
  },
  {
    title: 'Taylorsville Utah Temple',
    image: remoteAsset('wp-content/uploads/2025/03/Customer-Choice-Award-2021-Utah-Temple.png'),
    href: '/case-studies-civil/',
  },
  {
    title: 'Parkview Health Core Tower Expansion',
    image: remoteAsset('wp-content/uploads/2025/03/Parkview-Health-care-Building-2019-Award.png'),
    href: '/case-studies-civil/',
  },
  {
    title: 'Morrow School Project',
    image: remoteAsset('wp-content/uploads/2025/03/sds2-solid-steel-commercial-large-Tonnage-award.png'),
    href: '/case-studies-civil/',
  },
  {
    title: 'BOSK Battery Plant – Tennessee',
    image: remoteAsset('wp-content/uploads/2025/03/Group-1455.png'),
    href: '/case-studies-civil/',
  },
];

export const newsItems = [
  {
    title: 'Moldtek Technologies Marks Groundbreaking for New Nashik Branch Office',
    href: '/news-and-events/moldtek-technologies-nashik-branch-groundbreaking-ceremony/',
  },
  {
    title: 'Lakshmana Rao Janumahanti Felicitated at Hurun Stars of the City Awards 2026',
    href: '/news-and-events/lakshmana-rao-hurun-awards-2026/',
    image: '/images/lakshmana-rao-hurun-awards-2026.jpg',
  },
  {
    title: 'Moldtek Technologies Sponsors ₹50 Lakhs for Skill Development Initiative Benefiting 2,203 Civil Engineering Students',
    href: '/news-and-events/moldtek-technologies-sponsors-50-lakhs-skill-development-tamil-nadu/',
    image: '/images/CSR-Activity.jpg',
  },
];

export const blogPosts = [
  {
    title: 'What Is the Difference Between a Steel Detailer and a Structural Engineer?',
    href: '/blog/steel-detailer-vs-structural-engineer/',
  },
  {
    title: 'What Is the Primary Purpose of Structural Detailing in Construction Projects?',
    href: '/blog/purpose-of-structural-detailing-in-construction/',
  },
  {
    title: 'What Are the Different Shapes of Towers?',
    href: '/blog/different-shapes-of-towers/',
  },
];
