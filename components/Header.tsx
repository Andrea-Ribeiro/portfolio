"use client";

import { useState } from "react";
import { Drawer } from "./Drawer";
import { Menu, UserCircle, Zap, LayoutGrid, Mail } from "lucide-react";

const navigationItems = [
  {
    label: "About",
    href: "#about",
    icon: UserCircle,
  },
  { label: "Skills", href: "#skills", icon: Zap },
  {
    label: "Work",
    href: "#work",
    icon: LayoutGrid,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

interface NavigationMenuProps {
  containerStyle: string;
  itemStyle: string;
  activeItem: string;
  activeStyle: string;
  mobile?: boolean;
  onClickItem: (item: string) => void;
}

function NavigationMenu({
  containerStyle,
  itemStyle,
  activeItem,
  activeStyle,
  mobile = false,
  onClickItem,
}: Readonly<NavigationMenuProps>) {
  return (
    <ul className={containerStyle}>
      {navigationItems.map((item) => {
        const isActive = activeItem === item.href;
        const Icon = item.icon;
        const mobileActiveColor = isActive
          ? "text-primary-500"
          : "text-primary-300";
        const textColor = mobile ? mobileActiveColor : "text-muted";

        return (
          <li
            key={item.href}
            className={`w-full flex gap-2 items-center justify-start px-4 ${isActive ? activeStyle : ""}`}
          >
            {mobile && <Icon size={20} className={textColor} />}
            <a
              href={item.href}
              onClick={() => onClickItem(item.href)}
              className={`${itemStyle} ${textColor}`}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function Header() {
  const [activeItem, setActiveItem] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <header className="sticky top-0 border-b border-white/14 bg-background z-50 ">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <p className="text-xl font-semibold">ARF</p>
        <nav className="block md:hidden">
          <button
            aria-label="Open menu"
            className="cursor-pointer text-muted
            transition-colors 
            hover:text-primary-500
            px-2
            py-2
            rounded-full
            active:bg-white/50
            "
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <Menu />
          </button>

          <Drawer
            title="Menu"
            isOpen={openDrawer}
            onClose={() => setOpenDrawer(false)}
          >
            <NavigationMenu
              containerStyle="flex flex-col gap-4 "
              itemStyle="px-3 py-3"
              activeItem={activeItem}
              onClickItem={(href) => {
                setActiveItem(href);
                setOpenDrawer(false);
              }}
              activeStyle="bg-surface rounded-full "
              mobile={true}
            />
          </Drawer>
        </nav>
        <nav className="hidden md:block">
          <NavigationMenu
            containerStyle="flex gap-6"
            itemStyle="text-muted transition-colors px-3 py-1 rounded-md 
            transition-all 
            duration-200 
            hover:text-white 
            focus:outline 
            focus:outline-2 
            focus:outline-offset-2 
            focus:outline-primary-500"
            activeItem={activeItem}
            onClickItem={(href) => {
              setActiveItem(href);
              setOpenDrawer(false);
            }}
            activeStyle="bg-secondary border-primary-500 border text-base rounded-md"
          />
        </nav>
      </div>
    </header>
  );
}
