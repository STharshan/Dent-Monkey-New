"use client";
import React, { useState } from "react";
import { Rocket, Code2, Lightbulb } from "lucide-react";

const stages = [
  {
    stage: "Stage 1",
    title: "Call Us",
    desc: "Reach out via phone or email with your vehicle details and location. Our team will confirm your request and provide an estimated arrival time.",
    tags: ["Comprehensive Consultation", "Project Roadmap"],
    icon: <Rocket className="w-5 h-5 text-black dark:text-white" />,
  },
  {
    stage: "Stage 2",
    title: "On-Site Assistance",
    desc: "We arrive promptly at your location to provide the required service, whether it’s a battery replacement, jump start, or tyre change.",
    tags: ["Seamless Integration", "Real-Time Collaboration"],
    icon: <Code2 className="w-5 h-5 text-black dark:text-white" />,
  },
  {
    stage: "Stage 3",
    title: "Back on the Road",
    desc: "After completing the service, we ensure your vehicle is safe and fully operational so you can continue your journey with confidence.",
    tags: ["Ongoing Support", "Documentation"],
    icon: <Lightbulb className="w-5 h-5 text-black dark:text-white" />,
    cta: "Book an Appointment",
  },
];

const GetSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="relative py-16 px-6 md:px-12 font-['Orbitron',sans-serif] text-[#6F6F6F] bg-[#F5F5F5] dark:bg-black dark:text-[#FFFFFF] transition-colors duration-300">
      
      {/* Grid */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">

        {/* Left sticky area */}
        <div className="self-start lg:sticky lg:top-24 lg:h-fit">
          <div className="inline-flex items-center gap-2 border border-[#E0E0E0] dark:border-[#6F6F6F] rounded-full px-4 py-1 bg-[#FFFFFF]/10 dark:bg-[#6F6F6F]/10 backdrop-blur-sm mb-6 transition-colors duration-300">
            <span className="text-sm text-black/90 dark:text-white/90 tracking-widest uppercase">
              How We Work?
            </span>
            <span className="w-2 h-2 bg-black/70 dark:bg-white/70 rounded-full" />
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold leading-tight mb-4 text-black dark:text-white">
            How Our Service Works
            <br />
          </h2>
        </div>

        {/* Services list */}
        <div className="flex flex-col gap-8 relative">
          {stages.map((s, i) => (
            <div
              key={i}
              className="card relative rounded-2xl border border-[#E0E0E0] dark:border-[#6F6F6F] bg-[#FFFFFF] dark:bg-[#1A1A1A] backdrop-blur-lg p-6 hover:border-[#6F6F6F]/50 dark:hover:border-[#FFFFFF]/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#6F6F6F]/20 dark:bg-[#FFFFFF]/10 border border-[#E0E0E0] dark:border-[#6F6F6F] shadow-[0_0_25px_rgba(0,0,0,0.3)] dark:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-colors duration-300">
                  {s.icon}
                </div>
                <div className="px-3 py-1 text-xs rounded-lg border border-[#E0E0E0] dark:border-[#6F6F6F] bg-[#F5F5F5]/30 dark:bg-[#FFFFFF]/10 text-[#6F6F6F] dark:text-white transition-colors duration-300">
                  {s.stage}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                {s.title}
              </h3>
              <p className="text-[#6F6F6F] dark:text-[#D1D1D1] text-sm mb-5 leading-relaxed transition-colors duration-300">
                {s.desc}
              </p>

              {s.cta && (
                <a
                  href="/contact"
                  className="inline-block mt-6 text-sm font-medium bg-[#6F6F6F] dark:bg-white hover:bg-[#000000] dark:hover:bg-[#6F6F6F] text-[#FFFFFF] dark:text-black px-5 py-2 rounded-lg border border-[#E0E0E0] dark:border-[#6F6F6F] shadow-[0_0_30px_rgba(0,0,0,0.5)] dark:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300"
                >
                  {s.cta}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetSection;
