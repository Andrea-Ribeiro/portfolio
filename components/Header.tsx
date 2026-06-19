"use client";

import { useState } from "react";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [activeItem, setActiveItem] = useState("");
  return (
    <header className="sticky top-0 border-b bg-black z-50 ">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <p className="text-xl font-semibold">ARF</p>
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            {navigationItems.map((item) => {
              const isActive = activeItem === item.href;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setActiveItem(item.href)}
                    className={`
                      text-white/70 transition-colors 
                      px-3 py-1
                      rounded-md

                      transition-all
                      duration-200
                    
                      hover:text-white 

                      focus:outline
                      focus:outline-2 
                      focus:outline-offset-2 
                      focus:outline-[#EC8627]
                      ${isActive ? "bg-[#211103] border-[#EC8627] border text-white/100" : "text-white/70"}`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
