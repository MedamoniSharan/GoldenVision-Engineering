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
      'CNC/NC File Export for Fabrication',
      'Applicable AISC, AWS and Project-Specific Requirements',
    ],
  },
  {
    id: 'connection-misc-steel-design',
    title: 'Connection Design and Miscellaneous Steel Design',
    summary:
      'Engineered connections and misc. steel solutions built for strength, safety, and constructability.',
    description:
      'Our engineering team designs and details connections and miscellaneous steel components — modeled and validated in Tekla for seamless integration with your structural package.',
    image: remoteAsset('assets/images/Civil-Project.png'),
    href: '#connection-misc-steel-design',
    features: [
      'Moment & shear connection design',
      'Brace and gusset connections',
      'Base plate & anchor rod design',
      'Miscellaneous steel design (stairs, railings, canopies, ladders, platforms, etc.)',
      'Delegated connection engineering',
      'Tekla connection detailing modules',
      'Design calculation support',
    ],
  },
  {
    id: 'pemb-design-detailing',
    title: 'PEMB Design / Detailing',
    summary:
      'We provide professional Pre-Engineered Metal Building (PEMB) design, engineering support, and structural steel detailing services for fabricators, contractors, manufacturers, and engineering firms.',
    description:
      'Our team supports projects from initial design through fabrication-ready detailing, with a strong focus on accuracy, constructability, coordination, and schedule.',
    image: remoteAsset('assets/images/Pre-Engineered-6.png'),
    href: '#pemb-design-detailing',
    features: [
      'PEMB Layout & Framing Plans',
      'Purlin, Girt & Eave Strut Detailing',
      'Design Reports & Calculations',
      'MBS Outputs',
      'Approval Drawings',
      'Permit Drawings',
      'Shop Drawings',
      'Construction Drawings',
      'Bill of Materials (BOM)',
      'PE Stamping (Signed & Sealed by a Licensed Professional Engineer)',
      'Fast-Track Delivery Workflows',
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
      'Coordination with Applicable SJI and SDI Standards',
    ],
  },
];
