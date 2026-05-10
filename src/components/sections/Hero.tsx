"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const roles = ["Traveler", "Operation Specialist", "Web Developer"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (imageRef.current && containerRef.current) {
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  const name = "Rhaka Fertha Ary Sukma";
  const nameVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05 + 0.5,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const floatAnimation = {
    y: ["-2%", "2%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center"
    >
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center"
        style={{ backgroundImage: "url('/parallax.PNG')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />

      <div className="relative z-20 px-4 max-w-5xl mx-auto">
        <motion.div animate={floatAnimation}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 flex flex-wrap justify-center overflow-hidden">
            {name.split(" ").map((word, wordIndex) => (
              <div key={wordIndex} className="inline-block mr-4 md:mr-6 last:mr-0">
                {word.split("").map((char, charIndex) => {
                  const globalIndex = wordIndex * 10 + charIndex; // simple unique index for delay
                  return (
                    <motion.span
                      key={charIndex}
                      custom={globalIndex}
                      variants={nameVariants as any}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </div>
            ))}
          </h1>
        </motion.div>



        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-4 text-accent font-medium text-xl md:text-3xl h-10 overflow-hidden"
        >
          <motion.div
            key={roleIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {roles[roleIndex]}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 z-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/50 uppercase tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-10 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
