"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue, AnimatePresence } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const certificatesData = [
  {
    id: "01",
    title: "EFSET English Certificate C1 Advanced",
    type: "Language Proficiency",
    src: "/EFSETC1Adv.PNG"
  },
  {
    id: "02",
    title: "ISO 27001 Foundation Certification",
    type: "Data Security",
    src: "/ISO27001.PNG"
  },
  {
    id: "03",
    title: "IT Auditor Certification",
    type: "Audit & Compliance",
    src: "/IT Auditor.PNG"
  }
];

export default function Certifications() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0C0C0C] z-20 w-full"
    >
      {/* Education Section */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 pt-24 md:pt-32 pb-12">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white flex items-center gap-4">
            <GraduationCap size={48} className="text-accent" />
            <span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent hero-heading">Education</span>
          </h2>
          <div className="w-12 h-1 bg-accent mt-4 mb-8"></div>

          <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[30px] max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">MA Al-Islam Jamsaren Surakarta</h3>
            <p className="text-white/60 text-lg uppercase tracking-wider font-light">Class of 2012</p>
          </div>
        </div>
      </div>

      {/* Certifications Header */}
      <div className="pt-12 pb-12 max-w-[1400px] mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent hero-heading flex items-center justify-center gap-4">
          <Award size={48} className="text-white/50" />
          Certifications
        </h2>
      </div>

      {/* Sticky Stacking Cards */}
      <div className="px-4 pb-24 md:pb-32 max-w-[1200px] mx-auto">
        {certificatesData.map((cert, i) => {
          const targetScale = 1 - ((certificatesData.length - 1 - i) * 0.03);
          return (
            <CertCard
              key={i}
              i={i}
              cert={cert}
              progress={scrollYProgress}
              range={[i * (1 / certificatesData.length), 1]}
              targetScale={targetScale}
              onView={() => setSelectedCert(cert.src)}
            />
          );
        })}
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-12 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-w-5xl"
            >
              <Image
                src={selectedCert}
                alt="Certificate View"
                fill
                className="object-contain"
              />
            </motion.div>
            <button
              className="absolute top-8 right-8 text-white text-4xl hover:text-accent z-[110]"
              onClick={() => setSelectedCert(null)}
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const CertCard = ({
  cert,
  i,
  progress,
  range,
  targetScale,
  onView
}: {
  cert: any;
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onView: () => void;
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      className="sticky flex flex-col justify-start"
      style={{
        top: `calc(6rem + ${i * 28}px)`,
        paddingBottom: "10vh"
      }}
    >
      <motion.div
        style={{ scale }}
        className="relative flex flex-col w-full h-[85vh] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 transform-gpu origin-top"
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 shrink-0">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-white/20 leading-none">{cert.id}</span>
            <div>
              <div className="text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-widest mb-1">{cert.type}</div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{cert.title}</h3>
            </div>
          </div>
          <button 
            onClick={onView}
            className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors whitespace-nowrap"
          >
            View Certificate
          </button>
        </div>

        {/* Image Display */}
        <div className="flex-1 relative rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden bg-white/5 border border-white/10">
          <Image
            src={cert.src}
            alt={cert.title}
            fill
            className="object-contain p-4 md:p-8"
          />
        </div>
      </motion.div>
    </div>
  );
};
