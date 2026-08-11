"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GauchMark } from "./GauchMark";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About me" },
  { href: "/contact", label: "Contacts" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-black text-white">
      <nav aria-label="Primary navigation" className="relative mx-auto flex min-h-20 max-w-7xl items-center justify-center px-5 sm:min-h-24">
        <div className="absolute left-5 sm:left-8"><GauchMark /></div>
        <ul className="flex items-center justify-center gap-5 text-[10px] font-medium uppercase tracking-[0.17em] sm:gap-9 sm:text-xs md:gap-14">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link ${active ? "text-white" : "text-white/70"}`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
