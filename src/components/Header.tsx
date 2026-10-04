import { useState } from 'react';
import { mainNavigation } from '@/data/navigation';
import type { NavLink } from '@/types';
import { SITE_TAGLINE } from '@/data/siteConfig';
import { LOGO_SRC } from '@/utils/assets';

function NavDropdown({ item }: { item: NavLink }) {
  const [open, setOpen] = useState(false);

  if (!item.children?.length) {
    return (
      <li className="nav-item">
        <a href={item.href} className="mega-menu-link">
          {item.label}
        </a>
      </li>
    );
  }

  return (
    <li
      className={`nav-item has-dropdown ${open ? 'open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="mega-menu-link nav-link-btn"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <span className="mega-indicator" aria-hidden="true">▾</span>
      </button>
      <ul className="dropdown-menu">
        {item.children.map((child) => (
          <li key={child.label} className="dropdown-group">
            <a href={child.href} className="dropdown-link">
              {child.label}
            </a>
            {child.children && (
              <ul className="dropdown-submenu">
                {child.children.map((sub) => (
                  <li key={sub.label}>
                    <a href={sub.href}>{sub.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="mobile-menu-trigger"
        aria-label="Menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`site-nav transitionNav ${mobileOpen ? 'mobile-open' : ''}`}
      >
        <div className="nav-col nav-col-logo">
          <div className="logo-tab">
            <a href="/" className="logo">
              <img src={LOGO_SRC} alt="Golden Vision Engineering Logo" />
              <span className="logo-tagline">{SITE_TAGLINE}</span>
            </a>
          </div>
        </div>

        <div className="nav-col nav-col-menu">
          <ul className="mega-menu nav-pill list-unstyled">
            {mainNavigation.map((item) => (
              <NavDropdown key={item.label} item={item} />
            ))}
          </ul>
        </div>

        <div className="nav-col nav-col-actions">
          <ul className="aiana-social list-unstyled">
            <li>
              <a href="#" aria-label="Language">
                <img src="/assets/images/flag.png" alt="US Flag" className="nav-flag" />
              </a>
            </li>
            <li>
              <a href="#contact">
                <button type="button" className="aiana-button contactbutton">
                  Contact Us
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
