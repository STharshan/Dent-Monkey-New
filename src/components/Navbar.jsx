"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Left Logo Section */}
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold">
            DM
          </div>
          <span className="hidden sm:inline text-xl font-bold text-black dark:text-white">
            Dent Monkey
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a className="text-[16px] text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition font-medium" href="#">
            Home
          </a>
          <a className="text-[16px] text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition font-medium" href="#about">
            About
          </a>
          <a className="text-[16px] text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition font-medium" href="#services">
            Services
          </a>
          <a className="text-[16px] text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition font-medium" href="#gallery">
            Gallery
          </a>
          <a className="text-[16px] text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition font-medium" href="#contact">
            Contact
          </a>

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
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={28} className="text-black dark:text-white"/> : <Menu size={28} className="text-black dark:text-white"/>}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-4 space-y-4">
          <a className="block text-[16px] text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition" href="#">
            Home
          </a>
          <a className="block text-[16px] text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition" href="#about">
            About
          </a>
          <a className="block text-[16px] text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition" href="#services">
            Services
          </a>
          <a className="block text-[16px] text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition" href="#gallery">
            Gallery
          </a>
          <a className="block text-[16px] text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition" href="#contact">
            Contact
          </a>

          {/* Primary Button */}
          <button className="w-full bg-black dark:bg-white text-white dark:text-black text-[16px] font-semibold px-7 py-3 rounded-lg transition hover:bg-gray-800 dark:hover:bg-gray-200">
            Get Quote
          </button>
        </div>
      )}
    </header>
  );
}
