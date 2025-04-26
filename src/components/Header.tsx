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
    <header
      id="header"
      className="fixed top-0 left-0 right-0 z-50 h-30 bg-[url('/images/white-brick.jpg')] bg-cover bg-center border-b border-gray-300 shadow-sm">
      <div className="flex justify-between items-center px-6 sm:px-10 pt-4 sm:pt-2">
        {/* Logo or dark mode toggle */}
        <div className="px-2 mt-2">
          {/* You can put a logo here if you want */}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex justify-end space-x-6 text-xl font-medium mt-6">
          {pathname !== "/" && (
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
          )}
          {pathname !== "/about" && (
            <Link href="/about" className="hover:text-gray-900">
              About
            </Link>
          )}
          {pathname !== "/projects" && (
            <Link href="/projects" className="hover:text-gray-900">
              Projects
            </Link>
          )}
          {pathname !== "/resume" && (
            <Link href="/resume" className="hover:text-gray-900">
              Resume
            </Link>
          )}
          {pathname !== "/contact" && (
            <Link href="/contact" className="hover:text-gray-900">
              Contact Me
            </Link>
          )}
          {/* Desktop Dark Mode toggle */}
          <DarkModeToggle />
        </nav>

        {/* Mobile Hamburger Icon */}
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
          {/* Mobile Dark Mode toggle */}
          <div className="mt-4 flex justify-center">
            <DarkModeToggle />
          </div>
        </div>
      )}
    </header>
    // <header
    //   id="header"
    //   className="fixed top-0 left-0 right-0 z-50 h-30 bg-[url('/images/white-brick.jpg')] bg-cover bg-center border-b border-gray-300 shadow-sm">
    //   <div className="flex justify-between items-start px-10 pt-2">
    //     <div className="px-5 mt-10">
    //       <DarkModeToggle />
    //     </div>
    //     <nav className="px-4 mt-10">
    //       <ul className="flex justify-end space-x-6 text-xl font-medium">
    //         {pathname !== "/" && (
    //           <li>
    //             <Link href="/" className="hover:text-gray-900">
    //               Home
    //             </Link>
    //           </li>
    //         )}
    //         {pathname !== "/about" && (
    //           <li>
    //             <Link href="/about" className="hover:text-gray-900">
    //               About
    //             </Link>
    //           </li>
    //         )}
    //         {pathname !== "/projects" && (
    //           <li>
    //             <Link href="/projects" className="hover:text-gray-900">
    //               Projects
    //             </Link>
    //           </li>
    //         )}
    //         {pathname !== "/resume" && (
    //           <li>
    //             <Link href="/resume" className="hover:text-gray-900">
    //               Resume
    //             </Link>
    //           </li>
    //         )}
    //         {pathname !== "/contact" && (
    //           <li>
    //             <Link href="/contact" className="hover:text-gray-900">
    //               Contact Me
    //             </Link>
    //           </li>
    //         )}
    //       </ul>
    //     </nav>
    //   </div>
    // </header>
  );
}
