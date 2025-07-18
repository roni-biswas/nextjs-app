"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathName = usePathname();
  if (pathName.includes("dashboard")) {
    return null; // Hide NavBar on dashboard pages
  }
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <Link href="/">
            <li className="hover:underline">Home</li>
          </Link>
          <Link href="/services">
            <li className="hover:underline">Services</li>
          </Link>
          <Link href="/about">
            <li className="hover:underline">About</li>
          </Link>
          <Link href="/contact">
            <li className="hover:underline">Contact Us</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
