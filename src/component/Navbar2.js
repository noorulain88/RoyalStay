"use client";

import { useState } from "react";
import Link from "next/link"; // Next.js optimized routing component

export default function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Services", href: "#services" },
    { name: "Rooms", href: "#rooms" },
  ];

  return (
    <nav className=" text-black bg-white  w-full sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-wider text-yellow-600">
              RoyalStay
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-cyan-400 transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Hamburger Menu Button (Mobile Only) */}
          <div className="md:hidden flex  items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only text-white">Open main menu</span>
              {/* Dynamic Icon changes based on menu state */}
              {isOpen ? (
                <svg className="h-6 text-white w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-slate-800`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 text-white  sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // Closes menu when a link is clicked
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-cyan-400 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
