"use client";

import React from "react";

const galleryItems = [
  {
    title: "Door Panel Dent - West Bridgford",
    desc: "Large door dent removed using PDR technique",
    before: "/car-door-with-large-dent-damage.jpg",
    after: "/same-car-door-perfectly-repaired-no-dent-visible.jpg",
  },
  {
    title: "Hail Damage Repair - Beeston",
    desc: "Complete hail damage restoration on bonnet",
    before: "/car-bonnet-with-multiple-hail-damage-dents.jpg",
    after: "/same-car-bonnet-flawless-after-hail-damage-repair.jpg",
  },
  {
    title: "Quarter Panel - Carlton",
    desc: "Complex crease dent repair with perfect finish",
    before: "/car-rear-quarter-panel-with-crease-dent.jpg",
    after: "/same-quarter-panel-perfectly-smooth-repaired.jpg",
  },
  {
    title: "Minor Ding - Nottingham City Centre",
    desc: "Car park ding removed in under 30 minutes",
    before: "/car-wing-mirror-cover-damaged-and-dented.jpg",
    after: "/same-wing-mirror-restored-like-new.jpg",
  },
];

export default function DentRepairGallery() {
  return (
    <section className="py-20 lg:py-32 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[38px] lg:text-[54px] font-bold text-black mb-4 leading-tight">
            Our Dent Repair Work in Nottingham
          </h2>

          <p className="text-[18px] text-[#6F6F6F] max-w-2xl mx-auto">
            See the quality of our paintless dent removal and car body repair 
            work across Nottingham.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E0E0E0] rounded-xl shadow-sm overflow-hidden"
            >
              <div className="grid grid-cols-2">
                {/* Before */}
                <div className="relative h-64">
                  <span className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded text-sm font-bold z-10">
                    BEFORE
                  </span>
                  <img
                    src={item.before}
                    alt="Before repair"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* After */}
                <div className="relative h-64">
                  <span className="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded text-sm font-bold z-10">
                    AFTER
                  </span>
                  <img
                    src={item.after}
                    alt="After repair"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[24px] font-medium text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-[16px] text-[#6F6F6F]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
