"use client";
import React from "react";
import { Phone, Check } from "lucide-react";

export default function DentRepairCTA() {
  return (
    <section className="py-20 lg:py-32 bg-[#000000] text-white">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        
        {/* Heading */}
        <h2 className="text-[32px] leading-tight md:text-[38px] lg:text-[54px] font-bold text-white mb-6">
          Get Your Dent Repaired Today in Nottingham
        </h2>

        {/* Subheading */}
        <p className="text-[18px] md:text-[20px] text-[#F5F5F5] opacity-90 max-w-2xl mx-auto leading-relaxed mb-8">
          Contact Nottingham's leading dent repair specialists for a free,
          no-obligation quote. Same-day service available. Mobile repairs across
          all Nottingham areas.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Primary Button */}
          <button
            className="inline-flex items-center gap-2 bg-black text-white text-[16px] font-semibold px-7 py-4 rounded-lg border border-white/10 hover:bg-[#111111] transition"
          >
            <Phone className="w-5 h-5" />
            Call: 0115 XXX XXXX
          </button>

          {/* Secondary Button */}
          <button
            className="inline-flex items-center gap-2 bg-white text-black text-[16px] font-semibold px-7 py-4 rounded-lg border border-[#6F6F6F] hover:bg-[#F5F5F5] transition"
          >
            Request Free Quote
          </button>
        </div>

        {/* Features */}
        <div className="mt-8 flex flex-wrap gap-6 justify-center text-[16px] text-[#F5F5F5]">
          {[
            "Free Estimates",
            "Lifetime Warranty",
            "Mobile Service",
            "Same-Day Repairs",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-white" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
