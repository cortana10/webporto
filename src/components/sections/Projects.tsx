"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const projectsData = [
  {
    id: "01",
    url: "https://rhaka-cv.netlify.app",
    name: "Web Portfolio",
    category: "Development & Design",
    images: {
      leftTop: "/certification.png",
      leftBottom: "/competencies.png",
      right: "/webcv.png"
    }
  },
  {
    id: "02",
    url: "https://aldisburgerdemo.netlify.app",
    name: "Aldi's Burger - Sizzle & Flame",
    category: "Food Brand Landing Page",
    images: {
      leftTop: "/burger.png",
      leftBottom: "/burger.png",
      right: "/burger.png"
    }
  },
  {
    id: "03",
    url: "https://journeytowest.netlify.app",
    name: "Premium Umrah Travel",
    category: "Landing Page",
    images: {
      leftTop: "/jtw.png",
      leftBottom: "/jtw.png",
      right: "/jtw.png"
    }
  },
  {
    id: "04",
    url: "https://script.google.com/macros/s/AKfycbyQsOzt_-uvdhaiuBSutRaC_sQV74sZeusyUC8inFZ3iqY_9qMHiTWYZH3y8wR4Q5k2/exec",
    name: "Bengkel Inventory Management System",
    category: "Dashbaord Application",
    images: {
      leftTop: "/ims.png",
      leftBottom: "/ims.png",
      right: "/ims.png"
    }
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 w-full"
    >
      <div className="pt-24 md:pt-32 pb-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent hero-heading">
          Project
        </h2>
      </div>

      <div className="px-4 pb-24 md:pb-32 max-w-[1200px] mx-auto">
        {projectsData.map((project, i) => {
          const targetScale = 1 - ((projectsData.length - 1 - i) * 0.03);
          return (
            <Card
              key={i}
              i={i}
              project={project}
              progress={scrollYProgress}
              range={[i * (1 / projectsData.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}

const Card = ({
  project,
  i,
  progress,
  range,
  targetScale
}: {
  project: any;
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) => {
  // Scale down when scroll passes its range
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      className="sticky flex flex-col justify-start"
      style={{
        top: `calc(6rem + ${i * 28}px)`, // 6rem approx top-24
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
            <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-white/20 leading-none">{project.id}</span>
            <div>
              <div className="text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-widest mb-1">{project.category}</div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{project.name}</h3>
            </div>
          </div>
          <button
            onClick={() => window.open(project.url, "_blank")}
            className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors whitespace-nowrap">
            Live Project
          </button>
        </div>

        {/* Bottom Row - Images */}
        <div className="flex-1 flex gap-2 sm:gap-4 overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] min-h-0">
          {/* Left Column */}
          <div className="w-[40%] flex flex-col gap-2 sm:gap-4 h-full">
            <div
              className="relative w-full rounded-[24px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden shrink-0"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            >
              <Image src={project.images.leftTop} alt={`${project.name} preview`} fill className="object-cover" />
            </div>
            <div className="relative w-full flex-1 rounded-[24px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden">
              <Image src={project.images.leftBottom} alt={`${project.name} preview`} fill className="object-cover" />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-[60%] relative rounded-[24px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden h-full">
            <Image src={project.images.right} alt={`${project.name} full preview`} fill className="object-cover" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
