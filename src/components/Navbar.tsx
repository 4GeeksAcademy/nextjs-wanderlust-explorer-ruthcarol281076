"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "@/context/FavoritesContext";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Experiences", href: "/experiences" },
  { label: "Favorites", href: "/favorites" },
  { label: "Profile", href: "/profile" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { favorites } = useFavorites();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="text-xl font-bold text-[#EA580C] hover:text-[#d04d0a] transition-colors"
          >
            🌍 Wanderlust Explorer
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-sm md:text-base font-medium transition-colors duration-200 hover:text-[#EA580C] ${
                      active
                        ? "text-[#EA580C] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#EA580C]"
                        : "text-gray-600"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {link.label === "Favorites" && (
                        <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-[#EA580C] text-white text-xs font-bold">
                          {favorites.length}
                        </span>
                      )}
                      {link.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-[2px] bg-gray-700 transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-gray-700 transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-gray-700 transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-4 pb-4 gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors duration-200 ${
                    active
                      ? "bg-[#EA580C] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.label === "Favorites" && (
                      <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-white text-[#EA580C] text-xs font-bold">
                        {favorites.length}
                      </span>
                    )}
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}