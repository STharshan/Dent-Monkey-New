"use client";
import React from "react";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Sarah Thompson",
      location: "West Bridgford",
      text: "Absolutely fantastic service! Had a nasty dent on my door from a car park incident. They came to my house and fixed it in under an hour. You can't even tell there was ever a dent. Highly recommend for anyone in Nottingham needing dent repair.",
    },
    {
      name: "James Mitchell",
      location: "Beeston",
      text: "Best dent repair service in Nottingham! My car had hail damage all over the bonnet and roof. The paintless dent removal work was incredible - looks brand new. Great price too.",
    },
    {
      name: "Emma Davies",
      location: "Carlton",
      text: "Quick, professional, and excellent results. Had multiple door dings removed and the quality of work is outstanding. The mobile service is so convenient. Will definitely use again.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[38px] font-semibold text-[#000000] leading-tight">
            What Our Nottingham Customers Say
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] border border-[#E0E0E0] rounded-xl shadow-sm p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-[#000000] fill-[#000000]"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[16px] md:text-[18px] text-[#6F6F6F] italic leading-relaxed mb-6">
                {review.text}
              </p>

              {/* Divider */}
              <div className="border-t border-[#E0E0E0] pt-4">
                <div className="text-[18px] font-bold text-[#000000]">
                  {review.name}
                </div>
                <div className="text-[16px] text-[#6F6F6F]">
                  {review.location}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}