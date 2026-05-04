"use client";

import { useState } from "react";

const experiences = [
  {
    year: "2021 - 2025",
    role: "Operational & Tech Support",
    company: "PT. Bakoel Nusantara",
    achievements: [
      "Managed daily operations & support shifts",
      "Solved 90%+ technical issues without escalation",
      "Led Host-to-Host UAT integration (30% faster onboarding)",
      "Participated in ISO 27001 internal audits",
    ],
  },
  {
    year: "2018 - 2021",
    role: "Customer Support Supervisor",
    company: "PT. Bakoel Nusantara",
    achievements: [
      "Led cross-functional support team",
      "Achieved under 2-minute customer support response time",
      "Reduced onboarding time by 40% via training system",
    ],
  },
  {
    year: "2016 - 2018",
    role: "Customer Support Specialist",
    company: "Travelista.id",
    achievements: [
      "Handled customer support via chat, email, and phone with >90% satisfaction rate",
      "Managed airline ticketing operations using Amadeus GDS",
      "Assisted Umrah travel arrangements including booking coordination and customer handling",
      "Increased user retention by 15% within 6 months",
      "Created issue analysis reports to support product team improvements",
    ],
  },
  {
    year: "2015 - 2016",
    role: "Operational Admin",
    company: "NPS Internet Cafe",
    achievements: [
      "Managed daily operations & finance reports",
      "Maintained 99% uptime",
    ],
  },
];

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<typeof experiences[0] | null>(null);

  return (
    <section className="w-full py-32 bg-[#050505] relative z-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 mb-32">

        {/* History Head - Awwwards Style */}
        <div className="mb-24 md:mb-32">
          {/* Stacked Typography Grid */}
          <h2 className="grid text-5xl md:text-[6vw] lg:text-[6vw] xl:text-[80px] font-bold text-white uppercase tracking-tighter leading-[1] mb-12">
            <div>I have</div>
            <div className="text-accent flex gap-4">
              <span>8 years</span>
              <span className="text-white">of</span>
            </div>
            <div>Experience</div>
            <div className="flex flex-wrap items-center gap-[0.3em]">
              <span>in</span>

              {/* Vertical Text Slider */}
              <div className="relative h-[1.2em] overflow-hidden text-accent">
                {/* Invisible dummy to automatically set the perfect width */}
                <div className="invisible h-0 whitespace-nowrap">Customer Experience</div>
                
                <div className="absolute top-0 left-0 flex flex-col animate-slide-up w-full">
                  <span className="h-[1.2em] flex items-center whitespace-nowrap">Operations</span>
                  <span className="h-[1.2em] flex items-center whitespace-nowrap">Customer Experience</span>
                  <span className="h-[1.2em] flex items-center whitespace-nowrap">Front End</span>
                  {/* Loop back to first */}
                  <span className="h-[1.2em] flex items-center whitespace-nowrap">Operations</span>
                </div>
              </div>
            </div>
            <div>field</div>
          </h2>

          <div className="mt-20 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            <span className="text-xl md:text-2xl font-light text-white/40 tracking-widest uppercase">(History)</span>
            <div className="flex flex-col gap-6 max-w-2xl">
              <div className="w-12 h-[2px] bg-accent/30"></div>
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
                With comprehensive experience in managing digital operations and providing top-tier technical support, I have a deep understanding of customer needs and operational efficiency.
              </p>
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
                By choosing me, your organization will benefit from intuitive solutions, streamlined workflows, and a commitment to maintaining the highest service standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-scrolling Horizontal Timeline Container */}
      <div className="w-full relative group cursor-pointer active:cursor-grabbing">
        {/* The continuous timeline line background */}
        <div className="absolute top-[24px] left-0 right-0 h-[1px] bg-white/10 z-0 hidden md:block"></div>

        {/* Marquee Wrapper */}
        <div className="flex w-max animate-marquee hover:pause-marquee relative z-10 pb-16">
          {/* Duplicate the array to create a seamless infinite scroll loop */}
          {[...experiences, ...experiences].map((exp, index) => {
            const period = exp.year.split("-").map(s => s.trim());
            const from = period[0];
            const to = period[1] || "Present";

            return (
              <div
                key={index}
                onClick={() => setSelectedExp(exp)}
                className="shrink-0 w-[85vw] md:w-[450px] lg:w-[500px] relative px-4 md:px-12 group/card hover:-translate-y-2 transition-transform duration-500"
              >
                {/* Timeline node line */}
                <div className="hidden md:block absolute top-[24px] left-12 w-[100%] h-[1px] bg-white/10 group-hover/card:bg-accent/50 transition-colors duration-500 z-0"></div>

                {/* Circle Node */}
                <div className="hidden md:flex absolute top-0 left-12 w-12 h-12 items-center justify-center rounded-full bg-[#050505] border border-white/20 group-hover/card:border-accent text-white group-hover/card:text-accent transition-all duration-500 z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.375 5.625L5.625 14.375" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"></path>
                    <path d="M6.25 5H15V13.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"></path>
                  </svg>
                  {/* Subtle pulsing glow */}
                  <div className="absolute inset-0 rounded-full border border-accent/0 group-hover/card:border-accent/30 group-hover/card:scale-150 transition-all duration-700 opacity-0 group-hover/card:opacity-100"></div>
                </div>

                <div className="flex flex-col h-full pt-4 md:pt-20">
                  <div className="mb-6">
                    <p className="text-2xl lg:text-3xl font-medium text-white group-hover/card:text-accent transition-colors duration-300">{exp.role}</p>
                    <p className="text-white/50 text-xs mt-2 uppercase tracking-widest">Full-time</p>
                  </div>

                  <div className="mb-8">
                    <p className="font-medium text-white text-lg">{exp.company}</p>
                  </div>

                  <div className="flex gap-12 mb-10">
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-widest mb-1">From</p>
                      <p className="text-xl font-medium text-white">{from}</p>
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-widest mb-1">To</p>
                      <p className="text-xl font-medium text-white">{to}</p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <p className="text-accent text-sm uppercase tracking-widest border border-accent/30 rounded-full px-6 py-2 inline-flex group-hover/card:bg-accent group-hover/card:text-black transition-colors duration-300">
                      View Details
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* History Popup Modal */}
      {selectedExp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            onClick={() => setSelectedExp(null)}
          ></div>
          <div className="relative bg-[#111] border border-white/10 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl p-8 sm:p-12 shadow-2xl animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-accent hover:text-black transition-colors text-white"
            >
              ✕
            </button>

            <div className="mb-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">{selectedExp.role}</h3>
              <p className="text-accent text-xl">{selectedExp.company} • Full-time</p>
            </div>

            <div className="h-[1px] w-full bg-white/10 mb-10"></div>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-white/70 leading-relaxed mb-6">
                Key achievements and responsibilities during my tenure:
              </p>
              <ul className="space-y-4">
                {selectedExp.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start text-white/80">
                    <span className="text-accent mr-4 mt-1">▹</span>
                    {ach}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
