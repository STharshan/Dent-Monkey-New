"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full py-20 sm:py-32 overflow-hidden bg-black/50 dark:bg-black/70">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/placeholder.svg?height=600&width=1200&query=professional-car-dent-removal-technician-with-tools')",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">

            {/* Headings + Body */}
            <div className="space-y-4">
              <h1 className="text-[40px] sm:text-[54px] font-bold text-white dark:text-gray-100 leading-tight text-balance">
                Professional Paintless Dent Removal
              </h1>

              <p className="text-[18px] text-gray-100 dark:text-gray-300 leading-relaxed text-balance">
                Restore your vehicle to its original condition without the hassle of repainting.
                Fast, affordable, and guaranteed results.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary Button */}
              <a href="#contact">
                <button className="bg-black dark:bg-white text-white dark:text-black text-[16px] hover:bg-gray-900 dark:hover:bg-gray-200 font-semibold px-7 py-4 rounded-lg transition">
                  Get Free Quote
                </button>
              </a>

              {/* Secondary Button */}
              <a href="#services">
                <button className="bg-white dark:bg-gray-800 text-black dark:text-white border hover:bg-gray-300 dark:hover:bg-gray-700 border-[#6F6F6F] text-[16px] font-medium px-7 py-4 rounded-lg transition">
                  Learn More
                </button>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
