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
