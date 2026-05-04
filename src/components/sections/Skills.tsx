"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  "Operational Management",
  "Technical Support",
  "IT Auditing",
  "Leadership",
  "Problem Solving",
  "Front End Programming",
  "English (C1)",
  "CX (Customer Exp)"
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section ref={containerRef} className="w-full py-24 bg-background relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-12 flex flex-col items-center">
        <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-16">Core Competencies</h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/10 hover:border-accent hover:bg-accent/10 transition-colors duration-300 cursor-default"
            >
              <span className="text-lg md:text-2xl font-light text-white tracking-wide">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
