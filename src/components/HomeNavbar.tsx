"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import {
  Building,
  Flame,
  Construction,
  User,
  MessageSquare,
  Mail,
  Layers,
} from "lucide-react";

const HomeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    {
      title: "Aluminum",
      href: "/segments/aluminum",
      icon: <Layers className="w-5 h-5 mr-2 inline" />,
    },
    {
      title: "Building materials",
      href: "/segments/building-materials",
      icon: <Building className="w-5 h-5 mr-2 inline" />,
    },
    {
      title: "Fire and Safety materials",
      href: "/segments/fire-safety",
      icon: <Flame className="w-5 h-5 mr-2 inline" />,
    },
    {
      title: "Scaffolding",
      href: "/segments/scaffolding",
      icon: <Construction className="w-5 h-5 mr-2 inline" />,
    },
    {
      title: "About Us",
      href: "/about",
      icon: <User className="w-5 h-5 mr-2 inline" />,
    },
    {
      title: "Testimonials",
      href: "/testimonials",
      icon: <MessageSquare className="w-5 h-5 mr-2 inline" />,
    },
    {
      title: "Contact Us",
      href: "/contact",
      icon: <Mail className="w-5 h-5 mr-2 inline" />,
    },
  ];
  const components: { title: string; href: string; icon: React.ReactNode }[] = [
    {
      title: "Aluminum",
      href: "/segments/aluminum",
      icon: <Layers className="w-4 h-4 mr-2 inline" />,
    },
    {
      title: "Building materials",
      href: "/segments/building-materials",
      icon: <Building className="w-4 h-4 mr-2 inline" />,
    },
    {
      title: "Fire and Safety materials",
      href: "/segments/fire-safety",
      icon: <Flame className="w-4 h-4 mr-2 inline" />,
    },
    {
      title: "Scaffolding",
      href: "/segments/scaffolding",
      icon: <Construction className="w-4 h-4 mr-2 inline" />,
    },
  ];
  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">
            <Image
              src="/RIMAC_GOLD_TITLE.png"
              alt="RIMAC"
              width={100}
              height={100}
              className="w-auto h-5"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                <Link href="/segments">Our Products</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[100px] gap-3 p-2 md:w-[200px] md:grid-cols-1 lg:w-[200px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      icon={component.icon}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className={navigationMenuTriggerStyle() + " bg-transparent"}
              >
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/testimonials"
                className={navigationMenuTriggerStyle() + " bg-transparent"}
              >
                Testimonials
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className={navigationMenuTriggerStyle() + " bg-transparent"}
              >
                Contact Us
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </NavbarContent>
      <NavbarMenu className="gap-5">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full flex items-center"
              color="primary"
              href={item.href}
              size="lg"
            >
              {item.icon}
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center text-sm font-medium leading-none">
            {icon}
            {title}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default HomeNavbar;
