import type { StatItem } from '@/types';
import { remoteAsset } from '@/utils/assets';

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

export const careerOpenings = [
  'Steel Detailer (Tekla & SDS2)',
  'Steel Detailing Checker (Tekla & SDS2)',
  'PEMB Drafter',
  'Connection Designer',
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
