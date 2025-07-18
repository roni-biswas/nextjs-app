"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathName = usePathname();
  if (pathName.includes("dashboard")) {
    return null; // Hide Footer on dashboard pages
  }
  return (
    <footer className="text-center text-gray-200 bg-gray-800">
      Awesome NextJs Project
    </footer>
  );
};

export default Footer;
