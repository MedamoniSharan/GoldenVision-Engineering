import { Logo } from '@/components/ui/navbar-02-utils/logo';
import { NavMenu } from '@/components/ui/navbar-02-utils/nav-menu';
import { NavigationSheet } from '@/components/ui/navbar-02-utils/navigation-sheet';

export { NavMenu };

const Navbar = () => {
  return (
    <header className="gv-navbar">
      <div className="gv-navbar-inner">
        <div className="gv-navbar-left">
          <Logo />
          <NavMenu className="gv-nav-desktop" />
        </div>

        <div className="gv-navbar-right">
          <a href="#contact" className="gv-nav-flag" aria-label="India">
            <img src="/assets/images/flag-india.svg" alt="" className="nav-flag" />
          </a>
          <a href="#contact" className="gv-nav-cta">
            Contact Us
          </a>
          <div className="gv-nav-mobile">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
