import { businessServices } from '@/data/businessServices';
import type { NavLink } from '@/types';

export const mainNavigation: NavLink[] = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  {
    label: 'Services',
    href: '#services',
    children: businessServices.map((service) => ({
      label: service.title,
      href: service.href,
    })),
  },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact Us', href: '#contact' },
];

export const footerLinkGroups = [
  {
    title: 'About Us',
    links: [
      { label: 'Home', href: '#top' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Careers', href: '#careers' },
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
      { label: 'Blogs', href: '/blogs/' },
      { label: 'Careers', href: '#careers' },
      { label: 'Privacy Policy', href: '/privacy-policy/' },
      { label: 'Terms of use', href: '/terms-of-use/' },
    ],
  },
];
