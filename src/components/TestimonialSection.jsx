// TestimonialCarousel.jsx
import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  {
    name: "John Smith",
    review:
      "Excellent service! My car looks brand new. Would definitely recommend to anyone.",
  },
  {
    name: "Sarah Johnson",
    review:
      "Fast, professional, and affordable. Best dent removal service in town.",
  },
  {
    name: "Mike Davis",
    review:
      "The technicians were skilled and courteous. Very impressed with the results.",
  },
    {
    name: "John Smith",
    review:
      "Excellent service! My car looks brand new. Would definitely recommend to anyone.",
  },
  {
    name: "Sarah Johnson",
    review:
      "Fast, professional, and affordable. Best dent removal service in town.",
  },
  {
    name: "Mike Davis",
    review:
      "The technicians were skilled and courteous. Very impressed with the results.",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-play every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => (prev + 1) % testimonials.length),
    onSwipedRight: () =>
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length),
    trackMouse: true,
  });

  return (
    <section className="w-full py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[38px] font-semibold text-black mb-4">
            What Our Customers Say
          </h2>
          <p className="text-[18px] text-[#6F6F6F] max-w-2xl mx-auto">
            Thousands of satisfied customers trust Dent Monkey for their paintless dent removal needs.
          </p>
        </div>

        {/* Carousel */}
        <div {...handlers} className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="shrink-0 w-full md:w-1/3 px-4"
              >
                <div className="bg-[#F5F5F5] p-8 rounded-lg border border-[#E0E0E0] shadow-md">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-[16px] text-[#6F6F6F] italic mb-6">
                    "{item.review}"
                  </p>

                  {/* Name */}
                  <p className="font-semibold text-black text-[18px]">{item.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === current ? "bg-black" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
