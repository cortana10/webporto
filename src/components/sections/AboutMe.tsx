"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutText = "Operations and Customer Success professional with over 8 years of experience in online payment services, digital business operations, and technical support. Proven ability to manage daily operations, improve service efficiency, and enhance customer satisfaction. Successfully resolved 90%+ client issues independently, led cross-functional support teams, and contributed to system integrations that accelerated client onboarding by 30%. Experienced in remote coordination, operational reporting, and maintaining high service standards.";

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!textRef.current || !containerRef.current) return;

    // Split text into words
    const words = aboutText.split(" ");
    textRef.current.innerHTML = "";

    words.forEach((word) => {
      const span = document.createElement("span");
      span.innerHTML = word + "&nbsp;";
      span.style.display = "inline-block";
      span.style.opacity = "0.15";
      span.style.transform = "translate(0%, 50%)";
      span.style.filter = "blur(10px)";
      span.className = "word";
      textRef.current?.appendChild(span);
    });

    const spans = textRef.current.querySelectorAll("span.word");

    gsap.to(spans, {
      opacity: 1,
      y: "0%",
      filter: "blur(0px)",
      stagger: 0.05,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 70%",
        scrub: 1, // Smooth scrub effect as they scroll
      },
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="w-full py-32 md:py-48 bg-background relative z-10 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-12 flex flex-col">
        <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-16 self-start">About Me</h2>

        <p
          ref={textRef}
          className="text-3xl md:text-5xl lg:text-[48px] font-small leading-[1.3] tracking-tight text-white max-w-5xl"
        >
          {/* Content injected by GSAP */}
        </p>
      </div>
    </section>
  );
}
