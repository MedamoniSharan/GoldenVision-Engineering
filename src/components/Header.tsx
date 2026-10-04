import { useState } from 'react';
import { mainNavigation } from '@/data/navigation';
import type { NavLink } from '@/types';

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
        className={`d-flex align-items-center flex-wrap transitionNav site-nav ${mobileOpen ? 'mobile-open' : ''}`}
      >
        <div className="logo">
          <a href="/">
            <img
              src="/assets/images/Moldtek-Technologies-Logo.svg"
              alt="Moldtek Technologies Logo"
              style={{ marginBottom: '8px' }}
            />
          </a>
        </div>

        <ul className="navMenu aiana-d-md-none list-unstyled d-flex align-items-center flex-grow-1 justify-content-center">
          <li>
            <div className="mega-menu-wrap transitionNav">
              <ul className="mega-menu nav-pill list-unstyled d-flex align-items-center">
                {mainNavigation.map((item) => (
                  <NavDropdown key={item.label} item={item} />
                ))}
              </ul>
            </div>
          </li>
        </ul>

        <ul className="aiana-social sm-sm-none list-unstyled d-flex" style={{ marginRight: '10px' }}>
          <li>
            <a href="#" aria-label="Language">
              <img src="/assets/images/flag.png" alt="US Flag" style={{ height: '40px' }} />
            </a>
          </li>
          <li>
            <a href="/contact-us/">
              <button type="button" className="aiana-button contactbutton">
                Contact Us
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
