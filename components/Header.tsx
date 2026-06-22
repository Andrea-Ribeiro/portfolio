"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

interface NavigationMenuProps {
  containerStyle: string;
  itemStyle: string;
  activeItem: string;
  activeStyle: string;
  onClickItem: (item: string) => void;
}

function NavigationMenu({
  containerStyle,
  itemStyle,
  activeItem,
  activeStyle,
  onClickItem,
}: Readonly<NavigationMenuProps>) {
  return (
    <ul className={containerStyle}>
      {navigationItems.map((item) => {
        const isActive = activeItem === item.href;

        return (
          <li key={item.href} className="w-full">
            <a
              href={item.href}
              onClick={() => onClickItem(item.href)}
              className={`
                      ${itemStyle}
                      ${isActive ? activeStyle : "text-white/70"}`}
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 border-b bg-black z-50 ">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <p className="text-xl font-semibold">ARF</p>
        <nav className="block md:hidden">
          <button
            aria-label="Open menu"
            className="cursor-pointer text-white/70 transition-colors hover:text-white relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </button>
          {isOpen && (
            <NavigationMenu
              containerStyle="absolute  min-w-40 top-full right-0 border border-white/70 z-50 flex flex-col gap-2 px-4 py-2 rounded-md justify-center "
              itemStyle="text-white/70 transition-colors block w-full px-3 py-2 rounded-md"
              activeItem={activeItem}
              onClickItem={(href) => {
                setActiveItem(href);
                setIsOpen(false);
              }}
              activeStyle="bg-[#211103]"
            />
          )}
        </nav>
        <nav className="hidden md:block">
          <NavigationMenu
            containerStyle="flex gap-6"
            itemStyle="text-white/70 transition-colors px-3 py-1 rounded-md transition-all duration-200 hover:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#EC8627]"
            activeItem={activeItem}
            onClickItem={(href) => {
              setActiveItem(href);
              setIsOpen(false);
            }}
            activeStyle="bg-[#211103] border-[#EC8627] border text-white/100"
          />
        </nav>
      </div>
    </header>
  );
}
