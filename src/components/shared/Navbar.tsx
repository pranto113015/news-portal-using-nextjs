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
import { useContext, useState } from "react";
import { ThemeContext } from "@/context/themeContext";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { isDarkMode, toggleTheme }: any = useContext(ThemeContext);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`py-4 shadow-md ${isDarkMode ? "bg-gray-900 text-white" : ""}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* logo */}
        <div className="text-xl font-bold">
          <Link href="/">Daily News</Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

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
          <div onClick={toggleTheme} className="flex items-center">
            <span className="mr-2">Dark Mode</span>
            <Switch />
          </div>
          <Button>Login</Button>
        </div>

        {/* mobile menu */}
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setMobileMenuOpen(false)} />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
