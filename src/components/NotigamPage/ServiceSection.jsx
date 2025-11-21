"use client";
import React from "react";

export default function ServicesSection() {
  const services = [
    {
      title: "Paintless Dent Removal (PDR)",
      img: "/paintless-dent-removal-tools-and-car-panel-close-u.jpg",
      desc: "Advanced paintless dent removal techniques for door dings, hail damage, and minor dents. Preserves your original paint and finish.",
      tags: "PDR Nottingham, paintless dent repair",
    },
    {
      title: "Hail Damage Repair",
      img: "/hail-damaged-car-roof-repair-before-after.jpg",
      desc: "Specialist hail damage restoration for Nottingham vehicles. Insurance work welcome. Fast turnaround times.",
      tags: "hail damage Nottingham, storm damage",
    },
    {
      title: "Door Ding Removal",
      img: "/car-door-ding-before-and-after-repair-close-up.jpg",
      desc: "Quick and affordable door ding repair in Nottingham. Perfect for supermarket car park damage and minor impacts.",
      tags: "door ding repair, car park damage",
    },
    {
      title: "Mobile Dent Repair",
      img: "/mobile-dent-repair-van-at-customer-location.jpg",
      desc: "We come to you! Mobile dent repair service across Nottingham, West Bridgford, Beeston, Carlton, and surrounding areas.",
      tags: "mobile dent repair Nottingham",
    },
    {
      title: "Car Body Panel Repair",
      img: "/car-body-panel-being-repaired-in-workshop.jpg",
      desc: "Complete car body work and panel beating services. From minor dents to major accident damage repair in Nottingham.",
      tags: "panel beating Nottingham, body shop",
    },
    {
      title: "Alloy Wheel Repair",
      img: "/damaged-alloy-wheel-repair-restoration.jpg",
      desc: "Professional alloy wheel refurbishment and kerb damage repair. Restore your wheels to showroom condition.",
      tags: "alloy wheel repair Nottingham",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] lg:text-[38px] font-semibold text-black mb-4">
            Dent Repair Services in Nottingham
          </h2>
          <p className="text-[18px] text-[#6F6F6F] max-w-2xl mx-auto leading-relaxed">
            Comprehensive car body repair solutions for all types of dents and damage
            across Nottingham and Nottinghamshire.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-[#FFFFFF] border border-[#E0E0E0] rounded-xl shadow-sm hover:shadow-lg transition-shadow flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[24px] font-medium text-black mb-3">
                  {item.title}
                </h3>

                <p className="text-[16px] text-[#6F6F6F] leading-relaxed mb-4">
                  {item.desc}
                </p>

                <div className="text-xs text-[#6F6F6F] italic">{item.tags}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
