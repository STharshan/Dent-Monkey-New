"use client";
import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative h-96 sm:h-[500px] rounded-xl overflow-hidden shadow-lg border border-[#E0E0E0]">
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
              <h2 className="text-[32px] sm:text-[38px] font-semibold text-black mb-4">
                Why Choose Dent Monkey?
              </h2>

              <p className="text-[18px] text-[#6F6F6F] leading-relaxed mb-6">
                With over a decade of experience, Dent Monkey has become the trusted
                choice for paintless dent removal across the region.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-5">

              {/* Item */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-black text-white text-[16px] font-semibold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-[24px] font-medium text-black">
                    Expert Technicians
                  </h3>
                  <p className="text-[16px] text-[#6F6F6F]">
                    Certified professionals with years of experience
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-black text-white text-[16px] font-semibold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-[24px] font-medium text-black">
                    Quick Service
                  </h3>
                  <p className="text-[16px] text-[#6F6F6F]">
                    Same-day appointments available
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-black text-white text-[16px] font-semibold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-[24px] font-medium text-black">
                    Affordable Pricing
                  </h3>
                  <p className="text-[16px] text-[#6F6F6F]">
                    Competitive rates without compromising quality
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-black text-white text-[16px] font-semibold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-[24px] font-medium text-black">
                    Guaranteed Results
                  </h3>
                  <p className="text-[16px] text-[#6F6F6F]">
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
