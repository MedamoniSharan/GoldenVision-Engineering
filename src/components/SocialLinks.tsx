import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data/siteConfig';

const ICONS = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
  x: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.244 2H21l-6.51 7.44L22 22h-6.79l-4.73-6.18L5.2 22H2.44l6.96-7.96L2 2h6.9l4.28 5.66L18.244 2Zm-1.19 18h1.86L7.03 3.94H5.04L17.054 20Z"
      />
    </svg>
  ),
} as const;

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`footer-social list-unstyled ${className}`.trim()}>
      {SOCIAL_LINKS.map((social) => {
        const Icon = ICONS[social.icon];
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="footer-social-link"
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
