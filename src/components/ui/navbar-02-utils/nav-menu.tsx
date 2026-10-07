import type { ComponentProps, MouseEvent } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { mainNavigation } from '@/data/navigation';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

// Blurring lets the :focus-within dropdown close once a link has been chosen.
const onNavLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
  event.currentTarget.blur();
  event.currentTarget.closest('.gv-nav-dropdown')?.classList.add('is-dismissed');
  document.querySelector<HTMLButtonElement>('.gv-sheet-close')?.click();
};

const onDropdownLeave = (event: MouseEvent<HTMLLIElement>) =>
  event.currentTarget.classList.remove('is-dismissed');

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gv-nav-list data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      {mainNavigation.map((item) =>
        item.children?.length ? (
          <NavigationMenuItem
            key={item.label}
            className="gv-nav-dropdown"
            onMouseLeave={onDropdownLeave}
          >
            <a href={item.href} className="gv-nav-link gv-nav-dropdown-toggle" onClick={onNavLinkClick}>
              {item.label}
              <ChevronDownIcon aria-hidden="true" className="gv-nav-chevron" />
            </a>
            <ul className="gv-nav-submenu" aria-label={`${item.label} menu`}>
              {item.children.map((child) => (
                <li key={child.href}>
                  <a href={child.href} className="gv-nav-sublink" onClick={onNavLinkClick}>
                    {child.label}
                  </a>
                </li>
              ))}
            </ul>
          </NavigationMenuItem>
        ) : (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <a href={item.href} className="gv-nav-link" onClick={onNavLinkClick}>
                {item.label}
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ),
      )}
    </NavigationMenuList>
  </NavigationMenu>
);
