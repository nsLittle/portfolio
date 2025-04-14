"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 z-50 h-16 bg-[url('/images/white-brick.jpg')] bg-cover bg-center border-b border-gray-300 shadow-sm">
      <nav className="max-w-9xl mx-auto px-20 py-6">
        <ul className="flex justify-end space-x-6 text-xl font-medium text-[#5a5a5a]">
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
    </header>
  );
}
