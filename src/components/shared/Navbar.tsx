import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const Navbar = () => {
  return (
    <div>
      <header className="py-4 shadow-md">
        <nav className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8  flex items-center justify-between">
          {/* logo */}
          <div className="text-xl font-bold">
            <Link href="/">Daily News</Link>
          </div>

          {/* desktop menu */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex items-center gap-6">
              {/* News */}
              <NavigationMenuItem>
                <NavigationMenuLink href="/news" className="hover:text-red-500">
                  News
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700">
                  Services
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="text-gray-600  p-4 w-45 space-y-2 rounded-md">
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
                  className="hover:text-red-500"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
                  className="hover:text-red-500"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* color switcher and login button */}


          
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
