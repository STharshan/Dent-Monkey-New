"use client";
import React, { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How much does dent repair cost in Nottingham?",
      a: "Dent repair costs vary depending on the size, location, and severity of the dent. Small door dings typically start from £60, while larger dents may cost £150-£300. We provide free quotes over the phone or in person.",
    },
    {
      q: "What is paintless dent removal (PDR)?",
      a: "Paintless dent removal is a technique that repairs dents without affecting your vehicle's original paint. Using specialized tools, we massage the dent from behind the panel, restoring it to its original shape. This is faster, cheaper, and preserves your car's value better than traditional body shop repairs.",
    },
    {
      q: "Do you offer mobile dent repair in Nottingham?",
      a: "Yes! We offer mobile dent repair services across Nottingham, West Bridgford, Beeston, Carlton, and all surrounding areas. We come to your home or workplace with all the necessary equipment to repair your dent on-site.",
    },
    {
      q: "How long does dent repair take?",
      a: "Most minor to moderate dents can be repaired in 1–2 hours. Larger or more complex dents may take 2–4 hours. We offer same-day service for most repairs.",
    },
    {
      q: "Will my insurance cover dent repair?",
      a: "Many insurance policies cover dent repair, especially for hail damage. We can work directly with your insurance company and provide all necessary documentation. Contact us to discuss your specific situation.",
    },
    {
      q: "Do you provide a warranty on dent repairs?",
      a: "Yes, all our dent repairs come with a comprehensive lifetime warranty. If you experience any issues with our repair work, we'll fix it free of charge.",
    },
  ];

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if the same FAQ is clicked
    } else {
      setOpenIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[38px] font-semibold text-[#000000] leading-tight">
            Frequently Asked Questions About Dent Repair in Nottingham
          </h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] border border-[#E0E0E0] rounded-xl shadow-sm p-6"
            >
              {/* Question */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-[20px] md:text-[24px] font-medium text-[#000000] mb-3">
                  {item.q}
                </h3>
                <span className="text-[24px] text-[#000000]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <p className="text-[16px] md:text-[18px] text-[#6F6F6F] leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
