'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/portofolio" },
    { name: "About", href: "/portofolio/about" },
    { name: "Portofolio", href: "/portofolio/project" },
    { name: "Contact", href: "/portofolio/contact" }
  ];

  return (
    <nav className="fixed top-0 z-50 backdrop-blur-2xl p-5 w-full flex justify-between items-center">
      {/* Logo */}
      <div>
        <Link href="/">
          <h1 className="font-montserrat tracking-widest text-2xl">
            Rmwd
          </h1>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex bg-gray-800 shadow py-4 px-10 rounded-lg">
        <ul className="flex gap-10">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link href={item.href}>
                  <span
                    className={`underline-animate ${
                      isActive ? "underline-active" : ""
                    } font-poppins text-white`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Contact Info (Desktop) */}
      <div className="hidden md:block bg-gray-800 rounded-lg px-8 py-3 text-white">
        <h1 className="text-sm font-montserrat">Rajendra Mahadana</h1>
        <p className="text-xs font-montserrat opacity-70">
          rajendramahadana7@gmail.com
        </p>
      </div>

      {/* Mobile Burger Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 p-6 md:hidden">
          <ul className="flex flex-col gap-6">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block ${
                      isActive ? "text-sky-300" : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 text-white border-t border-gray-700 pt-4">
            <h1 className="text-sm font-montserrat">Rajendra Mahadana</h1>
            <p className="text-xs font-montserrat opacity-70">
              rajendramahadana7@gmail.com
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
