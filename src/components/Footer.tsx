import { footerLinkGroups } from '@/data/navigation';
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_MAP_URL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  SITE_NAME,
  SITE_TAGLINE,
} from '@/data/siteConfig';
import { LOGO_SRC } from '@/utils/assets';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <div className="footer-class">
      <footer className="position-relative">
        <div className="container position-relative z-3">
          <div className="row">
            <div className="col-md-4 sm-sm-100 tab-50">
              <div className="block">
                <div className="logo footer-brand">
                  <img
                    src={LOGO_SRC}
                    alt="Golden Vision Engineering Logo"
                    className="footerlogos"
                  />
                  <p className="footer-brand-name">{SITE_NAME}</p>
                  <p className="footer-brand-tagline">{SITE_TAGLINE}</p>
                  <SocialLinks />
                </div>
              </div>
            </div>

            <div className="col-md-4 sm-100 tab-50">
              <div className="row">
                {footerLinkGroups.slice(0, 2).map((group) => (
                  <div key={group.title} className="col-6 sm-sm-100">
                    <div className="block">
                      <h4 className="aiana-h4 footer-h4">{group.title}</h4>
                      <ul className="footer-list list-unstyled aiana-menu">
                        {group.links.map((link) => (
                          <li key={link.label} className="anchorHover">
                            <a href={link.href} className="aiana-desc">
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-4 sm-100 tab-50">
              <div className="row">
                <div className="col-4 sm-sm-100">
                  <div className="block">
                    <h4 className="aiana-h4 footer-h4">{footerLinkGroups[2].title}</h4>
                    <ul className="footer-list list-unstyled aiana-menu">
                      {footerLinkGroups[2].links.map((link) => (
                        <li key={link.label} className="anchorHover">
                          <a href={link.href} className="aiana-desc">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-8 sm-sm-100">
                  <div className="block" id="contact">
                    <h4 className="aiana-h4 footer-h4">Contact Info</h4>
                    <ul className="footer-list aiana-menu list-unstyled">
                      <li className="anchorHover">
                        <a href={CONTACT_PHONE_HREF} className="aiana-desc">
                          {CONTACT_PHONE}
                        </a>
                      </li>
                      <li className="anchorHover">
                        <a href={`mailto:${CONTACT_EMAIL}`} className="aiana-desc">
                          {CONTACT_EMAIL}
                        </a>
                      </li>
                      <li className="anchorHover">
                        <a
                          href={CONTACT_MAP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="aiana-desc"
                        >
                          {CONTACT_ADDRESS}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container h-100 d-flex justify-content-between copyright-bar">
          <p className="aiana-desc mb-0">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
