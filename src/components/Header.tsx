"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 z-50 h-16 bg-[url('/images/white-brick.jpg')] bg-cover bg-center border-b border-gray-300 shadow-sm">
      <nav className="max-w-9xl mx-auto px-10 py-6">
        <ul className="flex justify-end space-x-6 text-base font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-900">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-900">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/resume" className="hover:text-gray-900">
              Resume
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-900">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
