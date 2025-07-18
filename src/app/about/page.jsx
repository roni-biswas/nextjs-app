"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AboutPage = () => {
  const route = useRouter();
  const isLoggedIn = true;

  const handleNavigation = () => {
    if (isLoggedIn) {
      route.push("/about/address");
    } else {
      route.push("/");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">About Us</h1>
      <p>This is the about page of our awesome Next.js app!</p>
      <p>
        <Link href="/about/address" className="mr-4 btn btn-primary my-4">
          Address
        </Link>
      </p>
      <button
        type="button"
        onClick={handleNavigation}
        className="btn btn-secondary"
      >
        Address using Navigation route
      </button>
    </div>
  );
};

export default AboutPage;
