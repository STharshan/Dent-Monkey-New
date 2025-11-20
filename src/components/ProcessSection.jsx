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
    <section className="w-full py-20 sm:py-32 bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[38px] font-semibold text-black dark:text-white mb-4 transition-colors">
            Our Process
          </h2>
          <p className="text-[18px] text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            We follow a simple, transparent process to ensure the best results.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">

                {/* Step Number */}
                <div className="w-16 h-16 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-2xl mb-4 shadow-lg transition-colors">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-[24px] font-medium text-black dark:text-white mb-2 text-center transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[16px] text-gray-700 dark:text-gray-300 text-center transition-colors">
                  {step.description}
                </p>
              </div>

              {/* Line Connector (Desktop Only) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gray-300 dark:bg-gray-700 transition-colors"></div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
