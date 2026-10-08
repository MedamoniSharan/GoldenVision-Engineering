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
          <div className="gv-nav-mobile">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
