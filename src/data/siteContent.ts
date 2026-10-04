import type { CaseStudy, HeroSlide, StatItem } from '@/types';
import { businessServices } from '@/data/businessServices';
import { SITE_TAGLINE } from '@/data/siteConfig';
import { remoteAsset } from '@/utils/assets';

const heroImages = [
  remoteAsset('wp-content/uploads/2025/03/Slider-1.png'),
  remoteAsset('wp-content/uploads/2026/09/Slider-BIM-2.png'),
  remoteAsset('wp-content/uploads/2025/03/Slider-03.png'),
  remoteAsset('wp-content/uploads/2025/07/Slider-05.png'),
  remoteAsset('wp-content/uploads/2025/08/Plant-Engineering-Slider.png'),
  remoteAsset('wp-content/uploads/2025/03/Slider-02.png'),
];

export const heroSlides: HeroSlide[] = [
  {
    id: 'brand',
    title: 'Golden Vision Engineering',
    subtitle: SITE_TAGLINE,
    image: remoteAsset('wp-content/uploads/2025/07/Slider-05.png'),
    ctaLabel: 'Our Services',
    ctaHref: '#services',
  },
  ...businessServices.map((service, index) => ({
    id: service.id,
    title: service.title,
    subtitle: service.description,
    image: heroImages[index % heroImages.length],
    ctaLabel: 'Learn More',
    ctaHref: service.href,
  })),
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

export const companyStats: StatItem[] = [
  {
    value: 1500,
    suffix: '+',
    label: 'Projects Delivered',
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
    title: 'Golden Vision Engineering Expands Steel Detailing Capabilities',
    href: '/news-and-events/',
  },
  {
    title: 'Lakshmana Rao Janumahanti Felicitated at Hurun Stars of the City Awards 2026',
    href: '/news-and-events/lakshmana-rao-hurun-awards-2026/',
    image: '/images/lakshmana-rao-hurun-awards-2026.jpg',
  },
  {
    title: 'Skill Development Initiative for Civil Engineering Students',
    href: '/news-and-events/',
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
    title: 'Why BIM Integration Matters in Modern Steel Detailing',
    href: '/blog/purpose-of-structural-detailing-in-construction/',
  },
];
