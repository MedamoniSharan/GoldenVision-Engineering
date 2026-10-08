import { SOCIAL_LINKS } from '@/data/siteConfig';

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.5 8.5V6.7c0-.7.5-1.2 1.2-1.2h1.3V3h-2.3C12.2 3 11 4.4 11 6.6v1.9H9v2.5h2V21h3.5V11h2.3l.5-2.5H14.5Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 7.2A4.8 4.8 0 1 0 16.8 12 4.81 4.81 0 0 0 12 7.2Zm0 7.9A3.1 3.1 0 1 1 15.1 12 3.1 3.1 0 0 1 12 15.1Zm6.4-8.2a1.12 1.12 0 1 1-1.12-1.12A1.12 1.12 0 0 1 18.4 6.9ZM12 4.4c-2.1 0-2.36 0-3.19.05a4.36 4.36 0 0 0-1.45.27 2.9 2.9 0 0 0-1.64 1.64 4.36 4.36 0 0 0-.27 1.45C5.4 8.64 5.4 8.9 5.4 11s0 2.36.05 3.19a4.36 4.36 0 0 0 .27 1.45 2.9 2.9 0 0 0 1.64 1.64 4.36 4.36 0 0 0 1.45.27c.83.05 1.09.05 3.19.05s2.36 0 3.19-.05a4.36 4.36 0 0 0 1.45-.27 2.9 2.9 0 0 0 1.64-1.64 4.36 4.36 0 0 0 .27-1.45c.05-.83.05-1.09.05-3.19s0-2.36-.05-3.19a4.36 4.36 0 0 0-.27-1.45 2.9 2.9 0 0 0-1.64-1.64 4.36 4.36 0 0 0-1.45-.27C14.36 4.4 14.1 4.4 12 4.4Zm0 1.53c2.06 0 2.3 0 3.11.05a2.83 2.83 0 0 1 .94.17 1.37 1.37 0 0 1 .8.8 2.83 2.83 0 0 1 .17.94c.05.81.05 1.05.05 3.11s0 2.3-.05 3.11a2.83 2.83 0 0 1-.17.94 1.37 1.37 0 0 1-.8.8 2.83 2.83 0 0 1-.94.17c-.81.05-1.05.05-3.11.05s-2.3 0-3.11-.05a2.83 2.83 0 0 1-.94-.17 1.37 1.37 0 0 1-.8-.8 2.83 2.83 0 0 1-.17-.94c-.05-.81-.05-1.05-.05-3.11s0-2.3.05-3.11a2.83 2.83 0 0 1 .17-.94 1.37 1.37 0 0 1 .8-.8 2.83 2.83 0 0 1 .94-.17c.81-.05 1.05-.05 3.11-.05Z"
      />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M22.5 7.2a3.1 3.1 0 0 0-2.18-2.2C18.5 4.6 12 4.6 12 4.6s-6.5 0-8.32.4A3.1 3.1 0 0 0 1.5 7.2 32.5 32.5 0 0 0 1.1 12a32.5 32.5 0 0 0 .4 4.8 3.1 3.1 0 0 0 2.18 2.2c1.82.4 8.32.4 8.32.4s6.5 0 8.32-.4a3.1 3.1 0 0 0 2.18-2.2 32.5 32.5 0 0 0 .4-4.8 32.5 32.5 0 0 0-.4-4.8ZM9.75 15.4V8.6L15.5 12l-5.75 3.4Z"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.54 9.2H4V20h2.54V9.2ZM5.26 4A1.48 1.48 0 1 0 6.74 5.48 1.48 1.48 0 0 0 5.26 4ZM20 20h-2.53v-5.24c0-1.25 0-2.85-1.74-2.85s-2 1.36-2 2.76V20H11.2V9.2h2.43v1.47h.03a2.66 2.66 0 0 1 2.4-1.32c2.56 0 3.04 1.69 3.04 3.88V20Z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.244 2H21l-6.51 7.44L22 22h-6.79l-4.73-6.18L5.2 22H2.44l6.96-7.96L2 2h6.9l4.28 5.66L18.244 2Zm-1.19 18h1.86L7.03 3.94H5.04L17.054 20Z"
      />
    </svg>
  );
}

const ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  linkedin: LinkedinIcon,
  x: XIcon,
} as const;

export default function SocialLinks() {
  return (
    <div className="footer-social">
      <span className="footer-contact-label">Follow Us</span>
      <ul className="footer-social-list" aria-label="Social media">
        {SOCIAL_LINKS.map((social) => {
          const Icon = ICONS[social.icon];
          return (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="footer-social-link"
              >
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
