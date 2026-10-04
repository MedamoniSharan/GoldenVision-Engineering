import { footerLinkGroups } from '@/data/navigation';

export default function Footer() {
  return (
    <div className="footer-class">
      <footer className="position-relative">
        <div className="container position-relative z-3">
          <div className="row">
            <div className="col-md-4 sm-sm-100 tab-50">
              <div className="block">
                <div className="logo">
                  <img
                    src="/assets/images/Moldtek-Technologies-Logo.svg"
                    alt="Moldtek Technologies Logo"
                    className="footerlogos"
                  />
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
                  <div className="block">
                    <h4 className="aiana-h4 footer-h4">Contact Info</h4>
                    <ul className="footer-list aiana-menu list-unstyled">
                      <li className="anchorHover">
                        <a href="tel:+914040300328" className="aiana-desc">
                          + 91-40-40300300, 328
                        </a>
                      </li>
                      <li className="anchorHover">
                        <a href="mailto:info@moldtekengineering.com" className="aiana-desc">
                          info@moldtekengineering.com
                        </a>
                      </li>
                      <li className="anchorHover">
                        <span className="aiana-desc">
                          Plot No. 12, Software Units Layout, Madhapur, Hyderabad - 500081, India
                        </span>
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
            © {new Date().getFullYear()} Moldtek Technologies Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
