"use client";

import { useState } from "react";
import Image from "next/image";
import { GraduationCap, Award } from "lucide-react";

const certificates = [
  { src: "/EFSETC1Adv.PNG", title: "EFSET English Certificate C1 Advanced", type: "Language Proficiency" },
  { src: "/ISO27001.PNG", title: "ISO 27001 Foundation Certification", type: "Security Framework" },
  { src: "/IT Auditor.PNG", title: "IT Auditor Certification", type: "Audit & Compliance" }
];

export default function Certifications() {
  const [activeId, setActiveId] = useState(0);

  return (
    <section className="w-full py-32 bg-background relative z-20 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 mb-16">

        {/* Education Section remains the same layout */}
        <div className="mb-24 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white flex items-center gap-4">
              <GraduationCap size={48} className="text-accent" /> Education
            </h2>
            <div className="w-12 h-1 bg-accent mt-4 mb-8"></div>

            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-lg max-w-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">MA Al-Islam Jamsaren Surakarta</h3>
              <p className="text-white/60 text-lg uppercase tracking-wider font-light">Class of 2012</p>
            </div>
          </div>
        </div>

        {/* Certifications Accordion */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white flex items-center gap-4">
            <Award size={48} className="text-accent" /> Certifications
          </h2>
          <div className="w-12 h-1 bg-accent mt-4 mb-12"></div>
        </div>

        {/* Accordion Slider - Identical to Projects */}
        <div className="flex h-[400px] md:h-[500px] w-full lg:w-[80vw] lg:max-w-[1100px] mx-auto">
          {certificates.map((cert, index) => {
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
                {/* Background Image - Object Contain to ensure certificate visibility if preferred, but cover matches Projects */}
                <div className="absolute inset-0 bg-[#e8e8e8]"></div> {/* Fallback background for white certificates */}
                <Image
                  src={cert.src}
                  alt={cert.title}
                  fill
                  className="object-contain p-4 md:p-8 z-0" 
                />

                {/* Overlay gradient for readability of text on top of certificates */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 z-10 ${isActive ? "bg-gradient-to-b from-black/80 via-black/40 to-black/80" : "bg-black/70"
                    }`}
                />

                {/* Content Container (only visible when active) */}
                <div className="absolute inset-0 pointer-events-none z-20">
                  {/* Top Text (Category) */}
                  <div
                    className={`absolute top-6 left-6 md:top-8 md:left-8 flex flex-col text-white transition-all duration-[290ms] ease-[cubic-bezier(0.05,0.60,0.42,0.94)] delay-300 pointer-events-auto w-max ${isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                      }`}
                  >
                    <span className="text-xs md:text-sm text-accent font-semibold uppercase tracking-widest mb-1 md:mb-2">
                      {cert.type}
                    </span>
                  </div>

                  {/* Bottom Text (Title) */}
                  <div
                    className={`absolute bottom-6 left-6 md:bottom-8 md:left-8 flex flex-col text-white transition-all duration-[290ms] ease-[cubic-bezier(0.05,0.62,0.40,0.95)] delay-300 pointer-events-auto w-full pr-8 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                      }`}
                  >
                    <h1 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight drop-shadow-lg max-w-[80%] break-words whitespace-normal">
                      {cert.title}
                    </h1>
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
