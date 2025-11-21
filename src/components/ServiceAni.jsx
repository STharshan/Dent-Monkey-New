"use client";

import React from "react";
import { BadgeCheck } from "lucide-react";

export default function ServicesAniSection() {
  const items = [
    {
      id: 1,
      tag: "Workflow Automation",
      title: "Hail Damage Removal",
      desc: "Remove hail dents quickly and effectively without repainting. Our technicians can handle multiple dents in a single session.",
      buttons: ["Internal Tools", "OCR Automation"],
      image: "/a2.jpg",
    },
    {
      id: 2,
      tag: "AI Assistance",
      title: "Door Ding Repair",
      desc: "Fix minor door dents and dings in minutes with precision techniques that preserve your vehicle's original finish.",
      buttons: ["Summaries", "Scheduling", "Many more"],
      image: "/a3.jpg",
    },
    {
      id: 3,
      tag: "Dent Repair Tools",
      title: "Crease Removal",
      desc: "Remove creases and larger dents with precision using specialized tools and expert techniques.",
      buttons: ["Crease Removal", "Paintless Dent", "Panel Repair"],
      image: "/a4.jpg",
    },
    {
      id: 4,
      tag: "Custom Systems",
      title: "Panel Damage",
      desc: "Repair panel damage and restore your vehicle's appearance without costly repainting or bodywork.",
      buttons: ["Design", "Custom", "Consulting"],
      image: "/a5.jpg",
    },
  ];
  return (
    <section className="w-full py-24 px-6 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-sm tracking-wide px-4 py-1 border border-gray-300 dark:border-white/20 rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-white/80 transition-colors duration-300">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-6">
            AI Solutions That Take Your Business to the Next Level
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg transition-colors duration-300">
            We offer a comprehensive range of paintless dent removal services for all vehicle types.
          </p>
        </div>

        {/* GRID SECTIONS */}
        <div className="max-w-7xl mx-auto space-y-24">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* IMAGE */}
              <div className="w-full flex justify-center">
                <div className="bg-gray-100/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden p-4 shadow-xl w-full max-w-lg transition-colors duration-300">
                  <img
                    src={item.image}
                    className="rounded-lg opacity-90"
                    alt={item.title}
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className={`${index % 2 !== 0 ? "md:order-first" : ""}`}>
                <span className="text-xs uppercase tracking-wider text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-400/30 px-3 py-1 rounded-full transition-colors duration-300">
                  {item.tag}
                </span>

                <h3 className="text-3xl font-bold mt-4">{item.title}</h3>

                <p className="text-gray-700 dark:text-gray-400 mt-3 leading-relaxed text-[15.5px] transition-colors duration-300">
                  {item.desc}
                </p>

                {/* BUTTON TAGS */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {item.buttons.map((btn, idx) => (
                    <span
                      key={idx}
                      className="text-sm px-4 py-1.5 rounded-full border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-white/90 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors duration-300 cursor-pointer"
                    >
                      {btn}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
