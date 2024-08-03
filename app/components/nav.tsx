"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/socials", label: "Socials" },
  ];

  

  return (
    <nav className="flex space-x-4">
      {links.map(({ href, label }) => (
        <Link key={href} href={href}>
          <span className={pathname === href ? "font-bold" : ""}>{label}</span>
        </Link>
      ))}
    </nav>
  );
}
