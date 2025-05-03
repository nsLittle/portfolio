"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import DarkModeToggle from "@/context/DarkModeToggle";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-25 z-50 bg-white-brick dark:bg-black-brick bg-no-repeat bg-scroll bg-cover bg-center bg-[length:1200px_auto] sm:bg-[length:1200px_1200px]">
      {" "}
      <div className="flex justify-between items-center px-6 sm:px-10 pt-4 sm:pt-2">
        {/* Future Logo */}
        <div className="px-2 mt-2">{/* Place Logo Here */}</div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex justify-end space-x-6 text-2xl font-medium mt-6">
          <Link
            href="/"
            className={`hover:text-gray-800 ${
              pathname === "/" ? "font-bold border-b-2 border-gray-700" : ""
            }`}>
            Home
          </Link>

          <Link
            href="/about"
            className={`hover:text-gray-800 ${
              pathname === "/about"
                ? "font-bold border-b-2 border-gray-700"
                : ""
            }`}>
            About
          </Link>
          <Link
            href="/projects"
            className={`hover:text-gray-800 ${
              pathname === "/projects"
                ? "font-bold border-b-2 border-gray-700"
                : ""
            }`}>
            Projects
          </Link>
          <Link
            href="/resume"
            className={`hover:text-gray-800 ${
              pathname === "/resume"
                ? "font-bold border-b-2 border-gray-700"
                : ""
            }`}>
            Resume
          </Link>
          <Link
            href="/contact"
            className={`hover:text-gray-800 ${
              pathname === "/contact"
                ? "font-bold border-b-2 border-gray-700"
                : ""
            }`}>
            Contact
          </Link>
          {/* Desktop Dark Mode Toggle */}
          <DarkModeToggle />
        </nav>

        {/* Mobile Hamburger */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl focus:outline-none">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="sm:hidden bg-white/90 backdrop-blur-md p-6 space-y-4 text-center shadow-md">
          {pathname !== "/" && (
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-lg">
              Home
            </Link>
          )}
          {pathname !== "/about" && (
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block text-lg">
              About
            </Link>
          )}
          {pathname !== "/projects" && (
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="block text-lg">
              Projects
            </Link>
          )}
          {pathname !== "/resume" && (
            <Link
              href="/resume"
              onClick={() => setIsOpen(false)}
              className="block text-lg">
              Resume
            </Link>
          )}
          {pathname !== "/contact" && (
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-lg">
              Contact Me
            </Link>
          )}
          {/* Mobile Dark Mode Toggle */}
          <div className="mt-4 flex justify-center">
            <DarkModeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
