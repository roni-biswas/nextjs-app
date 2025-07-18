import React from "react";

const NavBar = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
