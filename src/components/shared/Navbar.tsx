"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="py-4 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* logo */}
        <div className="text-xl font-bold">
          <Link href="/">Daily News</Link>
        </div>

        {/* desktop menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex items-center gap-6">
            {/* News */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/news"
                className={`hover:text-red-500 ${
                  pathname === "/news" ? "text-red-500 font-semibold" : ""
                }`}
              >
                News
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Services */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`${
                  pathname.startsWith("/services")
                    ? "text-red-500 font-semibold"
                    : "text-gray-700"
                }`}
              >
                Services
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="p-4 w-48 space-y-2 rounded-md">
                  <li>
                    <NavigationMenuLink href="/services/web">
                      Web Development
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/services/app">
                      App Development
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/services/logo">
                      Logo Design
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className={`hover:text-red-500 ${
                  pathname === "/about" ? "text-red-500 font-semibold" : ""
                }`}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className={`hover:text-red-500 ${
                  pathname === "/contact" ? "text-red-500 font-semibold" : ""
                }`}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* right side */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center">
            <span className="mr-2">Dark Mode</span>
            <Switch />
          </div>
          <Button>Login</Button>
        </div>

        {/* mobile */}
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;
