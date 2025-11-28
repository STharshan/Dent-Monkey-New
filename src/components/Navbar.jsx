"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);


  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white dark:bg-black dark:border-gray-700">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Left Logo Section */}
        <div className="flex items-center p-2">
          {/* Light Mode Logo */}
          <img
            src="/logo.png"          // light mode logo
            alt="Dent Monkey Logo"
            className="h-20 w-40 object-contain dark:hidden"
          />

          {/* Dark Mode Logo (white background) */}
          <div className="flex justify-center bg-white w-50 h-20 mx-auto rounded-xl">
            <img
              src="/logo.png" // your white-bg dark mode logo
              alt="Dent Monkey Logo Dark"
              className="h-20 w-40 object-contain hidden dark:block"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <a className="text-[16px] text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition font-medium" href="/#home">
            Home
          </a>
          <a className="text-[16px] text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition font-medium" href="/#about">
            About
          </a>
          <a className="text-[16px] text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition font-medium" href="/#services">
            Services
          </a>
          <a className="text-[16px] text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition font-medium" href="/#gallery">
            Gallery
          </a>
          <a className="text-[16px] text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition font-medium" href="/#contact">
            Contact
          </a>
          <div className="relative">
            <button
              type="button"
              onClick={() => setLocationOpen((prev) => !prev)}
              className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium"
            >
              Location
              {locationOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {locationOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 shadow-md rounded-md py-2 z-50">
                <Link
                  to="/nottingham"
                  onClick={() => setLocationOpen(false)}
                  className="block px-4 py-2 text-[#4B5563] hover:bg-[#F8FAFC] hover:text-[#0D1525] transition-colors"
                >
                  Nottingham
                </Link>
              </div>
            )}
          </div>
          {/* Theme Toggle */}
          <ThemeToggle className="ml-4" />

          {/* Primary Button */}
          <a href="#contact">
            <button className="bg-black dark:bg-white text-white dark:text-black text-[16px] font-semibold px-7 py-3 rounded-lg transition hover:bg-gray-800 dark:hover:bg-gray-200">
              Quote
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={28} className="text-black dark:text-white" /> : <Menu size={28} className="text-black dark:text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-4 space-y-4">
          <a className="block text-[16px] text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition" href="/#home">
            Home
          </a>
          <a className="block text-[16px] text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition" href="/#about">
            About
          </a>
          <a className="block text-[16px] text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition" href="/#services">
            Services
          </a>
          <a className="block text-[16px] text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition" href="/#gallery">
            Gallery
          </a>
          <a className="block text-[16px] text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition" href="/#contact">
            Contact
          </a>
          <div className="relative">
            <button
              type="button"
              onClick={() => setLocationOpen((prev) => !prev)}
              className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              Location
              {locationOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {locationOpen && (
              <div className="absolute mt-2 w-52 bg-white border border-gray-200 shadow-md rounded-md py-2 z-50">
                <Link
                  to="/nottingham"
                  onClick={() => {
                    setLocationOpen(false);
                  }}
                  className="block px-4 py-2 text-[#4B5563] hover:bg-[#F8FAFC] hover:text-[#0D1525] transition-colors"
                >
                  Nottingham
                </Link>
              </div>
            )}
          </div>

          {/* Primary Button */}
          <button className="w-full bg-black dark:bg-white text-white dark:text-black text-[16px] font-semibold px-7 py-3 rounded-lg transition hover:bg-gray-800 dark:hover:bg-gray-200">
            Get Quote
          </button>
        </div>
      )}
    </header>
  );
}
