// components/BusinessSolutions.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Automate repetitive tasks",
    description:
      "We help grow business efficiency by automating manual workflows and data processing, reporting and approval activities.",
    category: "Workflow Automation",
    tags: ["Instant Task AI", "Auto Automation"],
  },
  {
    title: "Delegate Daily Tasks",
    description:
      "From managing calendars to scheduling staff and summarizing meetings, our AI assistant handles the tasks to keep your business running smoothly and faster.",
    category: "AI Assistant",
    tags: ["Summaries", "Scheduling", "Many more"],
  },
  {
    title: "Accelerate Sales Growth",
    description:
      "AI tools for lead generation, personalized outreach, and automated report creation that works for your sales efforts and strategies.",
    category: "Sales & Marketing",
    tags: ["Leads", "Content", "Insights"],
  },
  {
    title: "Build Smarter Systems",
    description:
      "Whether you're starting from scratch or enhancing an existing system, we offer intelligent consulting and develop modern AI-powered systems.",
    category: "Custom Projects",
    tags: ["Strategy", "Consulting", "Custom AI"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function BusinessSolutions() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          AI Solutions That Take Your Business to the Next Level
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We design, develop, and implement automation tools that help you work smarter, not harder.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-[#111] border border-gray-800 rounded-3xl p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
          >
            <div>
              <span className="text-sm text-[#3A7C7A] font-medium">
                {solution.category}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold mt-2 mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-400 mb-4">{solution.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {solution.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-[#3A7C7A]/20 text-[#3A7C7A] px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
