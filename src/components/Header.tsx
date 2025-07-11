"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import DarkModeToggle from "@/context/DarkModeToggle";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <header className="relative z-50">
      {theme === "dark" && (
        <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />
      )}

      <div className="relative z-10 bg-white-brick dark:bg-black-brick bg-no-repeat bg-scroll bg-cover bg-center bg-[length:1200px_auto] sm:bg-[length:1200px_1200px]">
        <div className="flex justify-end sm:justify-end items-center px-6 sm:px-10 pt-4 sm:pt-2">
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
      </div>
      {isOpen && (
        <div
          className="sm:hidden bg-white dark:bg-white text-black dark:text-black
 backdrop-blur-md p-6 space-y-4 text-center shadow-md">
          {pathname !== "/" && (
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-lg text-black dark:text-black">
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
