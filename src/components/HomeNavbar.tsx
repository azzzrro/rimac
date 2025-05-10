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

const HomeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    {
      title: "Building materials",
      href: "/categories/building-materials",
    },
    {
      title: "Fire and Safety materials",
      href: "/categories/fire-safety",
    },
    {
      title: "Scaffolding",
      href: "/categories/scaffolding",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "About Us",
      href: "/about-us",
    },
    {
      title: "Testimonials",
      href: "/testimonials",
    },
    {
      title: "Contact Us",
      href: "/contact-us",
    },
  ];
  const components: { title: string; href: string }[] = [
    {
      title: "Building materials",
      href: "/categories/building-materials",
    },
    {
      title: "Fire and Safety materials",
      href: "/categories/fire-safety",
    },
    {
      title: "Scaffolding",
      href: "/categories/scaffolding",
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
                <Link href="/categories">Categories</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[100px] gap-3 p-2 md:w-[200px] md:grid-cols-1 lg:w-[200px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle() + " bg-transparent"}
              >
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle() + " bg-transparent"}
              >
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle() + " bg-transparent"}
              >
                Testimonials
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
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
            <Link className="w-full" color="primary" href={item.href} size="lg">
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
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
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
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default HomeNavbar;
