import type { ServiceHighlight } from '@/types';
import { remoteAsset } from '@/utils/assets';

export interface BusinessService extends ServiceHighlight {
  id: string;
  description: string;
  summary: string;
  features: string[];
}

export const businessServices: BusinessService[] = [
  {
    id: 'structural-steel-detailing',
    title: 'Structural Steel Detailing',
    summary: 'End-to-end detailing for fabrication-ready structural steel packages.',
    description:
      'We deliver accurate shop drawings, erection plans, and fabrication details using Tekla Structures — ensuring every member, bolt, and weld is documented for flawless field execution.',
    image: remoteAsset('assets/images/Steel-Detailing.png'),
    href: '#structural-steel-detailing',
    features: [
      '3D modeling in Tekla Structures',
      'Shop & erection drawings',
      'Assembly and single-part drawings',
      'Anchor bolt and embed plans',
      'CNC / N/C file export for fabrication',
      'AISC, AWS & project-specific standards',
    ],
  },
  {
    id: 'miscellaneous-steel-detailing',
    title: 'Miscellaneous Steel Detailing',
    summary: 'Complete misc metals packages for stairs, rails, platforms, and more.',
    description:
      'From stairs and handrails to ladders, platforms, and embed plates — we detail every miscellaneous steel component with Tekla precision for coordinated delivery.',
    image: remoteAsset('assets/images/Misc.png'),
    href: '#miscellaneous-steel-detailing',
    features: [
      'Stair, railing & ladder detailing',
      'Platforms, mezzanines & catwalks',
      'Embed plates & loose items',
      'Grating and floor plate layouts',
      'Misc metals BOM & material lists',
      'Coordinated with main structure',
    ],
  },
  {
    id: 'connection-designing',
    title: 'Connection Designing',
    summary: 'Engineered connections built for strength, safety, and constructability.',
    description:
      'Our connection design team develops moment, shear, brace, and base plate solutions — modeled and validated in Tekla for seamless integration with your structural package.',
    image: remoteAsset('assets/images/Civil-Project.png'),
    href: '#connection-designing',
    features: [
      'Moment & shear connection design',
      'Brace and gusset connections',
      'Base plate & anchor rod design',
      'Delegated connection engineering',
      'Tekla connection detailing modules',
      'Design calculation support',
    ],
  },
  {
    id: 'pemb-designing-drafting',
    title: 'PEMB Designing and Drafting',
    summary: 'Pre-engineered metal building design and drafting for fast-track projects.',
    description:
      'We provide PEMB layout, framing, purlin/girt detailing, and foundation reaction documentation — leveraging Tekla for accurate, buildable pre-engineered building packages.',
    image: remoteAsset('assets/images/Pre-Engineered-6.png'),
    href: '#pemb-designing-drafting',
    features: [
      'PEMB layout & framing plans',
      'Purlin, girt & eave strut detailing',
      'Foundation reaction schedules',
      'Anchor rod & base plate plans',
      'Roof & wall bracing details',
      'Fast-track delivery workflows',
    ],
  },
  {
    id: 'bim-integration',
    title: 'BIM Integration',
    summary: 'Model-based coordination that connects design, detailing, and fabrication.',
    description:
      'Our BIM workflows bridge architects, engineers, and fabricators through Tekla-driven 3D models — reducing clashes, rework, and surprises on site.',
    image: remoteAsset('assets/images/Construction-Documents-Design-Development.png'),
    href: '#bim-integration',
    features: [
      'Tekla Structures BIM modeling',
      'IFC / IFD model exchange',
      'Clash detection & coordination',
      'LOD 300–400 deliverables',
      'Fabrication-ready model export',
      'Multi-discipline integration',
    ],
  },
  {
    id: 'estimation',
    title: 'Estimation',
    summary: 'Data-driven steel quantity takeoffs for confident bidding.',
    description:
      'We extract accurate quantities directly from Tekla models — delivering reliable weight summaries, material lists, and bid support for structural steel projects.',
    image: remoteAsset('assets/images/Estimation.png'),
    href: '#estimation',
    features: [
      'Model-based quantity takeoffs',
      'Weight summaries & tonnage reports',
      'Material list generation',
      'Bid support packages',
      'Change-order quantity tracking',
      'Cost estimation assistance',
    ],
  },
  {
    id: 'joist-deck-detailing',
    title: 'Joist and Deck Detailing',
    summary: 'Coordinated joist and deck layouts for complete roof and floor framing packages.',
    description:
      'We prepare joist placement plans, joist girder layouts, and roof and floor deck drawings coordinated with the structural steel model — giving joist and deck suppliers clear, accurate information for fabrication and installation.',
    image: remoteAsset('assets/images/Steel-Detailing.png'),
    href: '#joist-deck-detailing',
    features: [
      'Joist placement & erection plans',
      'Joist girder layouts & seat details',
      'Roof & floor deck layouts',
      'Bridging & bracing details',
      'Deck openings, edges & reinforcement',
      'SJI & SDI standards compliance',
    ],
  },
];
