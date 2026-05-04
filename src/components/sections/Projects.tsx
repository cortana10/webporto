"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Web-based CV Portfolio",
    category: "Development & Design",
    image: "/project_cv_1777921746961.png",
    link: "#",
    additions: "React, Next.js, GSAP",
  },
  {
    title: "Aldi's Burger - Sizzle & Flame",
    category: "Landing Page",
    image: "/burger.png",
    link: "https://aldisburgerdemo.netlify.app/",
    additions: "Tailwind, Framer Motion",
  },
  {
    title: "Premium Umrah Travel",
    category: "Landing Page",
    image: "/jtw.png",
    link: "https://journeytowest.netlify.app/",
    additions: "UI/UX, Frontend",
  },
  {
    title: "Bengkel IMS",
    category: "Dashboard Application",
    image: "/ims.png",
    link: "#",
    additions: "React, Google Apps Script",
  },
];

export default function Projects() {
  const [activeId, setActiveId] = useState(0);

  return (
    <section className="w-full py-32 bg-background relative z-20 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Featured Projects</h2>
        <div className="w-12 h-1 bg-accent mb-12"></div>

        {/* Accordion Slider */}
        <div className="flex h-[500px] md:h-[600px] w-full lg:w-[70vw] lg:max-w-[1000px] mx-auto">
          {projects.map((project, index) => {
            const isActive = activeId === index;

            return (
              <div
                key={index}
                onClick={() => setActiveId(index)}
                className={`relative overflow-hidden cursor-pointer bg-white/5 transition-all duration-[500ms] ease-[cubic-bezier(0.05,0.60,0.39,0.94)] mr-2 md:mr-4 last:mr-0 ${isActive
                    ? "flex-[8] md:flex-[9] rounded-[2rem] shadow-[0.3rem_0.3rem_0.4rem_rgba(0,0,0,0.3)]"
                    : "flex-[1] rounded-[3rem] hover:shadow-[0.7rem_0.7rem_0.5rem_rgba(0,0,0,0.3)] min-w-[60px] md:min-w-[80px]"
                  }`}
              >
                {/* Background Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

                {/* Overlay gradient for readability */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "bg-black/40" : "bg-black/60"
                    }`}
                />

                {/* Content Container (only visible when active) */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Top Text (Title Card) */}
                  <div
                    className={`absolute top-6 left-6 md:top-8 md:left-8 flex flex-col text-white transition-all duration-[290ms] ease-[cubic-bezier(0.05,0.60,0.42,0.94)] delay-300 pointer-events-auto w-max ${isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                      }`}
                  >
                    <span className="text-xs md:text-sm text-accent font-semibold uppercase tracking-widest mb-1 md:mb-2">
                      {project.category}
                    </span>
                    <h1 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight drop-shadow-lg max-w-[200px] md:max-w-md break-words whitespace-normal">
                      {project.title}
                    </h1>
                  </div>

                  {/* Bottom Text (Card Title / Actions) */}
                  <div
                    className={`absolute bottom-6 left-6 md:bottom-8 md:left-8 flex flex-col text-white transition-all duration-[290ms] ease-[cubic-bezier(0.05,0.62,0.40,0.95)] delay-300 pointer-events-auto ${isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                      }`}
                  >
                    <span className="text-xs md:text-sm text-white/80 font-light tracking-wider mb-3">
                      {project.additions}
                    </span>

                    <a
                      href={project.link}
                      target={project.link !== "#" ? "_blank" : "_self"}
                      rel="noreferrer"
                      className="inline-block px-5 py-2 md:px-6 md:py-3 border border-white/50 hover:border-accent hover:bg-accent hover:text-black transition-colors rounded-full text-xs md:text-sm font-semibold uppercase tracking-widest w-fit"
                      onClick={(e) => {
                        // Prevent triggering the card expansion when clicking the link
                        if (!isActive) e.preventDefault();
                      }}
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
