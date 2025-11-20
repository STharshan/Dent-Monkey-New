import React from "react";

export default function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Assessment",
      description: "We inspect your vehicle and evaluate the damage.",
    },
    {
      number: "2",
      title: "Quote",
      description: "Receive a free, no-obligation quote for the work.",
    },
    {
      number: "3",
      title: "Repair",
      description:
        "Our technicians expertly remove the dents using specialized tools.",
    },
    {
      number: "4",
      title: "Inspection",
      description:
        "We inspect the work and ensure it meets our quality standards.",
    },
  ];

  return (
    <section className="w-full py-20 sm:py-32 bg-[#F5F5F5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[38px] font-semibold text-black mb-4">
            Our Process
          </h2>
          <p className="text-[18px] text-[#6F6F6F] max-w-2xl mx-auto">
            We follow a simple, transparent process to ensure the best results.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">

                {/* Step Number */}
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center font-bold text-2xl mb-4 shadow-lg">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-[24px] font-medium text-black mb-2 text-center">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[16px] text-[#6F6F6F] text-center">
                  {step.description}
                </p>
              </div>

              {/* Line Connector (Desktop Only) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-[#E0E0E0]"></div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
