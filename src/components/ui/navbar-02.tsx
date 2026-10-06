import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/navbar-02-utils/logo';
import { NavMenu } from '@/components/ui/navbar-02-utils/nav-menu';
import { NavigationSheet } from '@/components/ui/navbar-02-utils/navigation-sheet';

export { NavMenu };

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 h-16 border-b bg-background">
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12">
          <Logo />
          <NavMenu className="hidden md:block" />
        </div>

        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline-flex" aria-label="India">
            <img
              src="/assets/images/flag-india.svg"
              alt="India flag"
              className="h-7 w-10 rounded-sm object-cover"
            />
          </a>
          <Button asChild>
            <a href="#contact">Contact Us</a>
          </Button>

          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
