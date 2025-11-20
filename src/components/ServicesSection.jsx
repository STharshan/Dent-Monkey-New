"use client";
import React from "react";

export default function ServicesSection() {
  const services = [
    {
      title: "Hail Damage Removal",
      image: "/hail-damage-removal.jpg",
      description:
        "Remove hail dents quickly and effectively without repainting. Our technicians can handle multiple dents in a single session.",
    },
    {
      title: "Door Ding Repair",
      image: "/door-ding-repair.jpg",
      description:
        "Fix minor door dents and dings in minutes with precision techniques that preserve your vehicle's original finish.",
    },
    {
      title: "Crease Removal",
      image: "/crease-removal.jpg",
      description:
        "Remove creases and larger dents with precision using specialized tools and expert techniques.",
    },
    {
      title: "Panel Damage",
      image: "/panel-damage.jpg",
      description:
        "Repair panel damage and restore your vehicle's appearance without costly repainting or bodywork.",
    },
  ];

  return (
    <section id="services" className="w-full py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[38px] font-semibold text-black mb-4">
            Our Services
          </h2>
          <p className="text-[18px] text-[#6F6F6F] max-w-2xl mx-auto leading-relaxed text-balance">
            We offer a comprehensive range of paintless dent removal services for all vehicle types.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-[#E0E0E0] rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden bg-[#F5F5F5]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-[24px] font-medium text-black mb-3">
                  {service.title}
                </h3>

                <p className="text-[16px] text-[#6F6F6F] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
