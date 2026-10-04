import { SOCIAL_LINKS } from '@/data/siteConfig';

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`footer-social list-unstyled ${className}`.trim()}>
      {SOCIAL_LINKS.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`footer-social-link${'icon' in social && social.icon ? '' : ' footer-social-link--text'}`}
          >
            {'icon' in social && social.icon ? (
              <img src={social.icon} alt="" className="footer-social-icon" />
            ) : (
              <span className="footer-social-text">in</span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
