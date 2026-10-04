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
    href: '#',
    children: [
      {
        label: 'Construction',
        href: '/civil/',
        children: [
          { label: 'Structural Steel Detailing Services', href: '/services/civil/structural-steel-detailing-services/' },
          { label: 'BIM Services', href: '/services/civil/bim-services/' },
          { label: 'Connection Design & Delegated Design Services', href: '/services/civil/connection-design-delegated-designs-services/' },
          { label: 'Precast Detailing Services', href: '/services/civil/precast-design-detailing-services/' },
          { label: 'Miscellaneous Steel Detailing Services', href: '/services/civil/miscellaneous-steel-detailing/' },
          { label: 'Structural Steel Estimating Services', href: '/services/civil/structural-steel-estimating-services/' },
          { label: 'Pre Engineered Steel Building Design', href: '/services/civil/pre-engineered-steel-building-design/' },
          { label: 'Architectural Services', href: '/services/civil/architectural-services/' },
        ],
      },
      {
        label: 'Manufacturing',
        href: '/mechanical/',
        children: [
          { label: 'Automotive Design Services', href: '/services/mechanical/automotive-design-services/' },
          { label: 'Special Purpose Machine Design', href: '/services/mechanical/special-purpose-machine-design/' },
          { label: 'Sheet Metal Press Tool Designs', href: '/services/mechanical/sheet-metal-press-tool-designs/' },
        ],
      },
      {
        label: 'Utilities',
        href: '/utilities/',
        children: [
          { label: 'Telecom Tower Structure Design', href: '/services/telecom-tower-structure-design/' },
          { label: 'Power Transmission Design', href: '/services/utilities-power-transmission-design/' },
          { label: 'Poles & Towers', href: '/services/utility-pole-engineering/' },
        ],
      },
      {
        label: 'Plant Engineering',
        href: '/services/plant/plant-engineering/',
        children: [
          { label: 'Process Engineering', href: '/services/plant-engineering/process-engineering/' },
          { label: 'Piping Engineering', href: '/services/plant-engineering/piping-engineering/' },
          { label: 'Mechanical Engineering', href: '/services/plant-engineering/mechanical-engineering/' },
          { label: 'Civil & Structural Engineering', href: '/services/plant-engineering/structural-engineering/' },
          { label: 'Electrical Engineering Services', href: '/services/plant-engineering/electrical-engineering/' },
          { label: 'Instrumentation Engineering', href: '/services/plant-engineering/instrumentation-engineering/' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    href: '#',
    children: [
      { label: 'Blogs', href: '/blogs/' },
      { label: 'News and Events', href: '/news-and-events/' },
      { label: 'Life at Moldtek', href: '/life-at-moldtek/' },
      {
        label: 'Case Studies',
        href: '#',
        children: [
          { label: 'Civil', href: '/case-studies-civil/' },
          { label: 'Mechanical', href: '/mechanical-moldtek/' },
        ],
      },
    ],
  },
  { label: 'Investors', href: '/investors/' },
  { label: 'Careers', href: '/careers/' },
];

export const footerLinkGroups = [
  {
    title: 'About Us',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about/' },
      { label: 'Investors', href: '/investors/' },
      { label: 'Contact', href: '/contact-us/' },
    ],
  },
  {
    title: 'Our Services',
    links: [
      { label: 'Construction', href: '/civil/' },
      { label: 'Manufacturing', href: '/mechanical/' },
      { label: 'Utilities', href: '/utilities/' },
      { label: 'Plant Engineering', href: '/services/plant/plant-engineering/' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Life at Moldtek', href: '/life-at-moldtek/' },
      { label: 'Blogs', href: '/blogs/' },
      { label: 'Careers', href: '/careers/' },
      { label: 'Privacy Policy', href: '/privacy-policy/' },
      { label: 'Cookie Policy', href: '/cookie-policy/' },
      { label: 'Terms of use', href: '/terms-of-use/' },
    ],
  },
];
