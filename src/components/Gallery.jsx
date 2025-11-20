import React, { useState } from "react";

const categories = ["All", "Hail Damage", "Dents", "Creases"];

const galleryItems = [
  {
    title: "Hail Damage Repair 1",
    category: "Hail Damage",
  },
  {
    title: "Door Ding Repair",
    category: "Dents",
  },
  {
    title: "Hail Damage Repair 2",
    category: "Hail Damage",
  },
  {
    title: "Crease Removal",
    category: "Creases",
  },
  {
    title: "Panel Damage Repair",
    category: "Dents",
  },
  {
    title: "Hail Damage Repair 3",
    category: "Hail Damage",
  },
];

export default function GallerySection() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <section id="gallery" className="w-full py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[38px] font-semibold text-black mb-4">
            Before & After Gallery
          </h2>
          <p className="text-[18px] text-[#6F6F6F] max-w-2xl mx-auto">
            See the quality and precision of our paintless dent removal work.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-lg font-semibold text-[16px] transition 
                ${
                  active === cat
                    ? "bg-black text-white"
                    : "bg-white text-black border border-[#6F6F6F]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {filtered.map((item, index) => (
            <div key={index} className="space-y-4">
              <div className="text-center mb-2">
                <h3 className="text-[24px] font-medium text-black">
                  {item.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Before */}
                <div className="relative h-60 rounded-lg overflow-hidden shadow-md group bg-[#F5F5F5]">
                  <img
                    src="/placeholder-before.jpg"
                    alt={item.title + " Before"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 flex items-center justify-center transition">
                    <p className="text-white font-semibold text-sm">Before</p>
                  </div>
                </div>

                {/* After */}
                <div className="relative h-60 rounded-lg overflow-hidden shadow-md group bg-[#F5F5F5]">
                  <img
                    src="/placeholder-after.jpg"
                    alt={item.title + " After"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 flex items-center justify-center transition">
                    <p className="text-white font-semibold text-sm">After</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
