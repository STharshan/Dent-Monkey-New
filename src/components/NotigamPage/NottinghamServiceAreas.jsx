"use client";

import React from "react";
import { MapPin } from "lucide-react";

export default function NottinghamServiceAreas() {
  const areas = [
    "Nottingham City Centre",
    "West Bridgford",
    "Beeston",
    "Carlton",
    "Arnold",
    "Mapperley",
    "Clifton",
    "Bulwell",
    "Hucknall",
    "Long Eaton",
    "Stapleford",
    "Eastwood",
    "Kimberley",
    "Wollaton",
    "Gedling",
    "Chilwell",
  ];

  return (
    <section className="py-16 lg:py-28 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[38px] lg:text-[54px] font-bold text-black leading-tight">
            Dent Repair Service Areas Across Nottingham
          </h2>
          <p className="text-[18px] text-[#6F6F6F] max-w-2xl mx-auto mt-4">
            Professional mobile dent repair covering all areas of Nottingham and Nottinghamshire
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Area List */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {areas.map((area, i) => (
                <div key={i} className="flex items-center gap-2">
                  <MapPin
                    size={18}
                    className="text-black shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-[16px] font-medium text-black">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border border-[#E0E0E0]">
              <p className="text-[16px] text-[#6F6F6F] leading-relaxed">
                Our mobile dent repair service covers all areas within a 20-mile
                radius of Nottingham. If you're unsure whether we cover your area,
                please call us for confirmation. We provide the same high-quality
                paintless dent removal and car body repair services to all
                locations.
              </p>

              {/* Buttons */}
              <div className="mt-5 flex gap-4">
                {/* Primary Button */}
                <button className="bg-black text-white text-[16px] font-semibold px-7 py-4 rounded-lg">
                  Call Now
                </button>

                {/* Secondary Button */}
                <button className="bg-white text-black text-[16px] font-semibold px-7 py-4 rounded-lg border border-[#6F6F6F]">
                  Check Coverage
                </button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=500&width=600"
              alt="Nottingham service areas map"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
