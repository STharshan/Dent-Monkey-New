"use client";

import React from "react";
import {
  Shield,
  Award,
  Clock,
  MapPin,
  Star,
  Phone,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Lifetime Warranty",
    desc: "All dent repairs come with our comprehensive lifetime warranty for complete peace of mind.",
  },
  {
    icon: Award,
    title: "Certified Technicians",
    desc: "Our team holds industry certifications in paintless dent removal and car body repair.",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    desc: "Most dent repairs completed the same day. Fast turnaround without compromising quality.",
  },
  {
    icon: MapPin,
    title: "Mobile Service Available",
    desc: "We come to your home or workplace anywhere in Nottingham and surrounding areas.",
  },
  {
    icon: Star,
    title: "4.9★ Customer Rating",
    desc: "Hundreds of 5-star reviews from satisfied customers across Nottinghamshire.",
  },
  {
    icon: Phone,
    title: "Free Quotes",
    desc: "Get an instant quote over the phone or via our website. No hidden charges.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[38px] lg:text-[54px] font-bold text-black leading-tight">
            Why Choose Our Nottingham Dent Repair Service?
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#E0E0E0] rounded-xl text-center p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <item.icon className="h-8 w-8" />
              </div>

              <h3 className="text-[24px] font-medium text-black mb-3">
                {item.title}
              </h3>

              <p className="text-[16px] text-[#6F6F6F] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
