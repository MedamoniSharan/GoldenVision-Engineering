import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/ui/navbar-02-utils/logo';
import { NavMenu } from '@/components/ui/navbar-02-utils/nav-menu';

export function NavigationSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="gv-menu-btn" aria-label="Open menu">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="gv-mobile-sheet px-6 py-8">
        <Logo />
        <div className="mt-8">
          <NavMenu orientation="vertical" className="max-w-none items-start" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
