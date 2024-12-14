import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-amber-950 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          FoodGallery
        </Link>

        {/* Hamburger Icon */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex sm:items-center sm:space-x-6`}
        >
          <Link
            to="/"
            className="block mt-2 sm:mt-0 sm:inline-block hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block mt-2 sm:mt-0 sm:inline-block hover:text-gray-300"
          >
            About
          </Link>
          <Link
            to="/login"
            className="block mt-2 sm:mt-0 sm:inline-block hover:text-gray-300"
          >
           Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
