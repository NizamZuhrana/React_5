import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    setTimeout(() =>
    navigate("/login")
    , 1000);
  };
  return (
    <nav className="text-white shadow-md bg-amber-950">
      <div className="container flex items-center justify-between p-4 mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          FoodGallery
        </Link>

        {/* Hamburger Icon */}
        <button
          className="text-white sm:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
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
            onClick={handleLogout}
          >
            Log Out
          </Link>
          <Link
            to="/profile"
            className="block mt-2 sm:mt-0 sm:inline-block hover:text-gray-300"
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
