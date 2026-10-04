export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  href?: string;
  bgImage: string;
}

export interface ServiceHighlight {
  title: string;
  image: string;
  href: string;
}

export interface ServiceTab {
  id: string;
  label: string;
  heading: string;
  headingAccent?: string;
  stats: StatItem[];
  highlights: ServiceHighlight[];
  industries: string[];
}

export interface CaseStudy {
  title: string;
  image: string;
  href: string;
}

export interface BlogPost {
  title: string;
  href: string;
  image?: string;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}
