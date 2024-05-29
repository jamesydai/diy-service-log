'use client';

import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"


export function Navbar(props:any) {

    if (props.IsLoggedIn) {
        const navItems = {
            '/vehicles': {
              name: 'Vehicles',
            },
            '/profile': {
              name: 'Profile',
            }
          }

          return (
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                       
                        {Object.entries(navItems).map(([path, { name }]) => {
                            return (
                            <Link
                                href={path}
                                legacyBehavior passHref
                            >
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                {name}
                            </NavigationMenuLink>
                            </Link>
                            )
                        })}
                     </NavigationMenuItem>
                </NavigationMenuList>
        </NavigationMenu>
        
          );
          
    } else {
        const navItems = {
            '/': {
              name: 'Home',
            },
            '/login': {
              name: 'Login',
            }
          }

          return (
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                       
                        {Object.entries(navItems).map(([path, { name }]) => {
                            return (
                            <Link
                                href={path}
                                legacyBehavior passHref
                            >
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                {name}
                            </NavigationMenuLink>
                            </Link>
                            )
                        })}
                     </NavigationMenuItem>
                </NavigationMenuList>
        </NavigationMenu>
        
          );
    }
  
}
