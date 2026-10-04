import { businessServices } from '@/data/businessServices';
import type { NavLink } from '@/types';

export const mainNavigation: NavLink[] = [
  {
    label: 'About Us',
    href: '/about/',
    children: [
      { label: 'Our Clients', href: '/our-clients/' },
      { label: 'Awards and Recognition', href: '/awards-recognition/' },
    ],
  },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Core Steel Services', href: '#featured-services' },
      { label: 'Tekla Software', href: '#tekla-software' },
      ...businessServices.map((service) => ({
        label: service.title,
        href: service.href,
      })),
    ],
  },
  {
    label: 'Resources',
    href: '#',
    children: [
      { label: 'Case Studies', href: '#projects' },
      { label: 'Blogs', href: '/blogs/' },
      { label: 'News and Events', href: '/news-and-events/' },
    ],
  },
  { label: 'Careers', href: '/careers/' },
  { label: 'Contact', href: '#contact' },
];

export const footerLinkGroups = [
  {
    title: 'About Us',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about/' },
      { label: 'Our Clients', href: '/our-clients/' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Our Services',
    links: businessServices.map((service) => ({
      label: service.title,
      href: service.href,
    })),
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case Studies', href: '#projects' },
      { label: 'Blogs', href: '/blogs/' },
      { label: 'Careers', href: '/careers/' },
      { label: 'Privacy Policy', href: '/privacy-policy/' },
      { label: 'Terms of use', href: '/terms-of-use/' },
    ],
  },
];
