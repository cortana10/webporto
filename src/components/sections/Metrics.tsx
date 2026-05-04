"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Metrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  const metrics = [
    { label: "Years Experience", value: 8, suffix: "+" },
    { label: "Issue Resolution", value: 90, suffix: "%" },
  ];

  return (
    <section 
      ref={containerRef}
      className="w-full py-24 md:py-32 bg-background relative border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32">
        {metrics.map((metric, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="flex items-baseline overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.33, 1, 0.68, 1] }}
                className="text-7xl md:text-9xl font-black text-white"
              >
                {metric.value}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                className="text-5xl md:text-7xl font-bold text-accent"
              >
                {metric.suffix}
              </motion.span>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
              className="mt-4 text-xl md:text-2xl text-white/60 font-light uppercase tracking-wider"
            >
              {metric.label}
            </motion.p>
          </div>
        ))}
      </div>
    </section>
  );
}
