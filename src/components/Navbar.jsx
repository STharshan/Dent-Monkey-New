"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E0E0E0] bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Left Logo Section */}
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-white font-bold">
            DM
          </div>
          <span className="hidden sm:inline text-xl font-bold text-black">
            Dent Monkey
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a className="text-[16px] text-[#6F6F6F] hover:text-black transition font-medium" href="#">
            Home
          </a>
          <a className="text-[16px] text-[#6F6F6F] hover:text-black transition font-medium" href="#about">
            About
          </a>
          <a className="text-[16px] text-[#6F6F6F] hover:text-black transition font-medium" href="#services">
            Services
          </a>
          <a className="text-[16px] text-[#6F6F6F] hover:text-black transition font-medium" href="#gallery">
            Gallery
          </a>
          <a className="text-[16px] text-[#6F6F6F] hover:text-black transition font-medium" href="#contact">
            Contact
          </a>

          {/* Primary Button */}
          <button className="bg-black text-white text-[16px] font-semibold px-7 py-3 rounded-lg transition">
            Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E0E0E0] px-4 py-4 space-y-4">
          <a className="block text-[16px] text-[#6F6F6F] hover:text-black transition" href="#">
            Home
          </a>
          <a className="block text-[16px] text-[#6F6F6F] hover:text-black transition" href="#about">
            About
          </a>
          <a className="block text-[16px] text-[#6F6F6F] hover:text-black transition" href="#services">
            Services
          </a>
          <a className="block text-[16px] text-[#6F6F6F] hover:text-black transition" href="#gallery">
            Gallery
          </a>
          <a className="block text-[16px] text-[#6F6F6F] hover:text-black transition" href="#contact">
            Contact
          </a>

          {/* Primary Button */}
          <button className="w-full bg-black text-white text-[16px] font-semibold px-7 py-3 rounded-lg transition">
            Get Quote
          </button>
        </div>
      )}
    </header>
  );
}
