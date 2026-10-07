import type { ComponentProps } from 'react';
import { mainNavigation } from '@/data/navigation';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gv-nav-list data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      {mainNavigation.map((item) => (
        <NavigationMenuItem key={item.label}>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href={item.href} className="gv-nav-link">
              {item.label}
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);
