"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Switch } from "@/components/ui/switch";
import { Button } from "../ui/button";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";

interface MobileMenuProps {
  onClose?: () => void;
}

function MobileMenu({ onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { isDarkMode, toggleTheme }: any = useContext(ThemeContext);

  const handleLinkClick = () => {
    onClose?.();
  };

  return (
    <div className="lg:hidden fixed inset-0 top-14 md:top-16 bg-white dark:bg-gray-800 z-40 overflow-y-auto animate-in fade-in">
      <div className="w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 space-y-2 sm:space-y-3">
        {/* News */}
        <Link
          href="/news"
          onClick={handleLinkClick}
          className={`block w-full py-3 sm:py-3.5 px-3 sm:px-4 rounded-md transition font-medium text-base sm:text-lg ${
            pathname === "/news"
              ? "bg-red-500 text-white font-semibold"
              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          News
        </Link>

        {/* Services */}
        <div className="space-y-1 sm:space-y-2 pt-2 sm:pt-3">
          <p className="py-2 sm:py-2.5 px-3 sm:px-4 font-bold text-gray-900 dark:text-white text-base sm:text-lg">
            Services
          </p>
          <Link
            href="/services/web"
            onClick={handleLinkClick}
            className="block w-full py-2.5 sm:py-3 px-6 sm:px-7 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition font-medium text-sm sm:text-base"
          >
            Web Development
          </Link>
          <Link
            href="/services/app"
            onClick={handleLinkClick}
            className="block w-full py-2.5 sm:py-3 px-6 sm:px-7 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition font-medium text-sm sm:text-base"
          >
            App Development
          </Link>
          <Link
            href="/services/logo"
            onClick={handleLinkClick}
            className="block w-full py-2.5 sm:py-3 px-6 sm:px-7 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition font-medium text-sm sm:text-base"
          >
            Logo Design
          </Link>
        </div>

        {/* About */}
        <Link
          href="/about"
          onClick={handleLinkClick}
          className={`block w-full py-3 sm:py-3.5 px-3 sm:px-4 rounded-md transition font-medium text-base sm:text-lg ${
            pathname === "/about"
              ? "bg-red-500 text-white font-semibold"
              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          About
        </Link>

        {/* Contact */}
        <Link
          href="/contact"
          onClick={handleLinkClick}
          className={`block w-full py-3 sm:py-3.5 px-3 sm:px-4 rounded-md transition font-medium text-base sm:text-lg ${
            pathname === "/contact"
              ? "bg-red-500 text-white font-semibold"
              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          Contact
        </Link>

        {/* Divider */}
        <div className="border-t dark:border-gray-700 my-3 sm:my-4"></div>

        {/* Dark Mode Toggle and Login */}
        <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-3">
          <div className="flex items-center justify-between py-2.5 sm:py-3 px-3 sm:px-4 bg-gray-50 dark:bg-gray-700 rounded-md">
            <span className="text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base">
              Dark Mode
            </span>
            <div onClick={toggleTheme} className="cursor-pointer">
              <Switch />
            </div>
          </div>
          <Button
            className="w-full py-2.5 sm:py-3 text-base sm:text-lg font-semibold"
            onClick={handleLinkClick}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
