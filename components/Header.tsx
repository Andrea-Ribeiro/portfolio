const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 border-b bg-black z-50 ">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <p className="text-xl font-semibold">ARF</p>
        <nav>
          <ul className="flex gap-6">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
