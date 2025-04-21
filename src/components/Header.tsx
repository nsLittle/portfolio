"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "@/context/DarkModeToggle";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 z-50 h-30 bg-cover bg-center border-b border-gray-300 shadow-sm">
      <div className="flex justify-between items-start px-10 pt-2">
        <div className="px-5 mt-10">
          <DarkModeToggle />
        </div>
        <nav className="px-4 mt-10">
          <ul className="flex justify-end space-x-6 text-xl font-medium text-[color:var(--text-color)]">
            {pathname !== "/" && (
              <li>
                <Link href="/" className="hover:text-gray-900">
                  Home
                </Link>
              </li>
            )}
            {pathname !== "/about" && (
              <li>
                <Link href="/about" className="hover:text-gray-900">
                  About
                </Link>
              </li>
            )}
            {pathname !== "/projects" && (
              <li>
                <Link href="/projects" className="hover:text-gray-900">
                  Projects
                </Link>
              </li>
            )}
            {pathname !== "/resume" && (
              <li>
                <Link href="/resume" className="hover:text-gray-900">
                  Resume
                </Link>
              </li>
            )}
            {pathname !== "/contact" && (
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact Me
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
