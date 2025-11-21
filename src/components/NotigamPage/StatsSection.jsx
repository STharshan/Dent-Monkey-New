"use client";
import React from "react";

export default function StatsSection() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "5,000+", label: "Repairs Completed" },
    { value: "4.9", label: "Average Rating" },
    { value: "100%", label: "Satisfaction Guarantee" },
  ];

  return (
    <section className="py-12 bg-[#F5F5F5] border-t border-[#E0E0E0] border-b">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {stats.map((item, i) => (
            <div key={i} className="text-center">
              {/* Value */}
              <div className="text-[32px] font-bold text-black mb-2">
                {item.value}
              </div>

              {/* Label */}
              <div className="text-[16px] text-[#6F6F6F]">
                {item.label}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
