"use client";
import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-20 sm:py-32 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative h-96 sm:h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-colors">
              <img
                src="/a1.jpg"
                alt="Skilled technician at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">

            {/* Heading */}
            <div>
              <h2 className="text-[32px] sm:text-[38px] font-semibold text-black dark:text-white mb-4 transition-colors">
                Why Choose Dent Monkey?
              </h2>

              <p className="text-[18px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6 transition-colors">
                With over a decade of experience, Dent Monkey has become the trusted
                choice for paintless dent removal across the region.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-5">

              {/* Item */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-black dark:bg-white text-white dark:text-black text-[16px] font-semibold transition-colors">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-[24px] font-medium text-black dark:text-white transition-colors">
                    Expert Technicians
                  </h3>
                  <p className="text-[16px] text-gray-700 dark:text-gray-300 transition-colors">
                    Certified professionals with years of experience
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-black dark:bg-white text-white dark:text-black text-[16px] font-semibold transition-colors">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-[24px] font-medium text-black dark:text-white transition-colors">
                    Quick Service
                  </h3>
                  <p className="text-[16px] text-gray-700 dark:text-gray-300 transition-colors">
                    Same-day appointments available
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-black dark:bg-white text-white dark:text-black text-[16px] font-semibold transition-colors">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-[24px] font-medium text-black dark:text-white transition-colors">
                    Affordable Pricing
                  </h3>
                  <p className="text-[16px] text-gray-700 dark:text-gray-300 transition-colors">
                    Competitive rates without compromising quality
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-black dark:bg-white text-white dark:text-black text-[16px] font-semibold transition-colors">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-[24px] font-medium text-black dark:text-white transition-colors">
                    Guaranteed Results
                  </h3>
                  <p className="text-[16px] text-gray-700 dark:text-gray-300 transition-colors">
                    100% satisfaction guarantee on all work
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
