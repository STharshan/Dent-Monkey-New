"use client";
import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  {
    name: "BartekS",
    review:
      "Fast, efficient, friendly. Nicky does the job with a smile. Loads of nasty dents on my car Nicky sorted them no problem at all. Could not recommend him more! If you need any dents removing he’s the man to contact!",
  },
  {
    name: "gareth noon",
    review:
      "I had Dent Monkey out (Nicky) to do a small dent on my rear arch. He's got all the latest equipment to make the repair faultless. A truly amazing gent and suberb quailty of work. Will defo recommend to others, and use again as and when needed. 10/10.",
  },
  {
    name: "James InEngland1",
    review:
      "Absolutely brilliant genuine service from Dent Monkey! I had recently bought a cult car, the only issue was the amount of dings and dents present in the bodywork that had accumulated over the years.",
  },
  {
    name: "Ray Smitham",
    review:
      "I highly recommend Nicky at Dent Monkey for the excellent job he did on my Mazda 6 tailgate. Also for his prompt and reliable service & great communication.",
  },
  {
    name: "Oscar Monk",
    review:
      "Really good experience with Nicky and his ability to repair a bad dent on my Golf GTI. Great communication, a fair price, quality workmanship and a nice bloke too! Thanks again",
  },
  {
    name: "Katie Beeston",
    review:
      "Fantastic service from Nicky. He fixed my car quickly and at a great price. I needed the job doing quickly and he was super helpful and accommodating. I wouldn't hesitate to recommend him to friends and family. Thanks Nicky!",
  },
    {
    name: "TigerTigerPantherFox",
    review:
      "Nicky at Dent Monkey came to remove two dents on my Audi A3 and the results are phenomenal. I would highly recommend him to friends and family. My father had a couple supermarket dents removed on his car which is why I contacted him to come & remove the dents on my car. Excellent results!! Before / After photos of my Audi A3 TFSI. 😎 Thanks.",
  },
    {
    name: "Raheem Zameer",
    review:
      "Nicky was very friendly and helpful and got a dent out of my Mercedes. He came to the car and was all done within 20 minutes of arrival. Couldn't recommend anyone better!",
  },
    {
    name: "Real Perspectives",
    review:
      "Dented the door of my wife’s brand new car, thank God for Dent Monkey who saved my life. Superb Job, excellent communication and fast and friendly service. Alongside great value for money I don’t know how Dent Monkey (Nicky) could improve. Genuinely outstanding. Very happy customer…Thank you!",
  },
];


// Helper to chunk array
const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const slides = chunkArray(testimonials, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => (prev + 1) % slides.length),
    onSwipedRight: () =>
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length),
    trackMouse: true,
  });

  return (
    <section className="w-full py-20 sm:py-32 bg-white dark:bg-black transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[38px] font-semibold text-black dark:text-white mb-4 transition-colors">
            What Our Customers Say
          </h2>
          <p className="text-[18px] text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            Thousands of satisfied customers trust Dent Monkey for their paintless dent removal needs.
          </p>
        </div>

        {/* Carousel */}
        <div {...handlers} className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((group, idx) => (
              <div key={idx} className="shrink-0 w-full flex flex-col md:flex-row gap-6">
                {group.map((item, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md flex-1 transition-colors"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4 justify-center md:justify-start">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <span key={j} className="text-yellow-400 dark:text-yellow-300 text-xl">★</span>
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-[16px] text-gray-700 dark:text-gray-300 italic mb-6 transition-colors">
                      "{item.review}"
                    </p>

                    {/* Name */}
                    <p className="font-semibold text-black dark:text-white text-[18px] transition-colors">{item.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-colors 
                  ${i === current ? "bg-black dark:bg-white" : "bg-gray-400 dark:bg-gray-600"}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}