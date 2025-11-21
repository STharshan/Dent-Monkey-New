"use client";

import React from "react";
import { Check } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[#F5F5F5] text-[#000000] py-20 lg:py-32 border-b border-[#E0E0E0]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <span className="inline-flex items-center justify-center rounded-md bg-black text-white px-3 py-1 text-[12px] font-medium mb-4">
              Nottingham's Trusted Dent Repair Experts
            </span>

            {/* H1 */}
            <h1 className="text-[38px] lg:text-[54px] font-bold leading-tight text-black mb-6">
              Professional Dent Repair Services in Nottingham
            </h1>

            {/* Body Large */}
            <p className="text-[18px] leading-relaxed text-[#6F6F6F] mb-8">
              Expert paintless dent removal, car body repair, and hail damage
              specialists. Mobile service available across Nottingham, West
              Bridgford, Beeston, and surrounding areas. Same-day repairs with
              lifetime warranty.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Primary Button */}
              <button
                className="bg-black text-white text-[16px] font-semibold rounded-lg px-7 py-4 hover:bg-black/90 transition"
              >
                Get Free Quote
              </button>

              {/* Secondary Button */}
              <button
                className="bg-white text-black text-[16px] font-semibold rounded-lg px-7 py-4 border border-[#6F6F6F] hover:bg-[#F5F5F5] transition"
              >
                View Our Work
              </button>
            </div>

            {/* Features */}
            <div className="mt-8 flex flex-wrap gap-6">
              {[
                "Same-Day Service",
                "Mobile Repairs",
                "Lifetime Warranty",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-black" />
                  <span className="text-[16px] text-[#6F6F6F]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden border border-[#E0E0E0]">
            <img
              src="/professional-car-dent-repair-technician-working-on.jpg"
              alt="Professional dent repair specialist working on car in Nottingham"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
