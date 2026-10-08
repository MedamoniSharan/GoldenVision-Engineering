import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_MAP_URL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  SITE_TAGLINE,
} from '@/data/siteConfig';
import { LOGO_SRC } from '@/utils/assets';

export default function Footer() {
  return (
    <div className="footer-class">
      <footer className="site-footer position-relative">
        <div className="container position-relative z-3">
          <div className="footer-main">
            <div className="footer-brand-col">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="footer-logo-link"
                title={`Email us at ${CONTACT_EMAIL}`}
              >
                <img
                  src={LOGO_SRC}
                  alt="Golden Vision Engineering Logo"
                  className="footerlogos"
                />
              </a>
              <div className="footer-brand-text">
                <h2 className="footer-brand-name">
                  <span>Golden Vision</span>
                  <span>Engineering</span>
                </h2>
                <p className="footer-brand-tagline">{SITE_TAGLINE}</p>
              </div>
            </div>

            <div className="footer-contact" id="contact">
              <h4 className="footer-heading">Contact Info</h4>
              <ul className="footer-contact-list list-unstyled">
                <li>
                  <span className="footer-contact-label">Phone</span>
                  <a href={CONTACT_PHONE_HREF} className="footer-link">
                    {CONTACT_PHONE}
                  </a>
                </li>
                <li>
                  <span className="footer-contact-label">Email</span>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="footer-link">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <span className="footer-contact-label">Address</span>
                  <a
                    href={CONTACT_MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    {CONTACT_ADDRESS}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <p className="footer-copyright mb-0">
            © {new Date().getFullYear()} Golden Vision Engineering. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
