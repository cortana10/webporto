"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function BrandStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!textRef.current || !containerRef.current) return;

    // Split text into words for animation
    const words = textRef.current.innerText.split(" ");
    textRef.current.innerHTML = "";

    words.forEach((word) => {
      const span = document.createElement("span");
      span.innerHTML = word + "&nbsp;";
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.transform = "translateY(30px)";
      textRef.current?.appendChild(span);
    });

    const spans = textRef.current.querySelectorAll("span");

    gsap.to(spans, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom 50%",
        scrub: 1,
      },
    });

    // Slight horizontal parallax on the whole section
    gsap.fromTo(
      textRef.current,
      { x: -50 },
      {
        x: 50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="w-full min-h-[60vh] md:min-h-[80vh] flex flex-col items-center justify-center px-4 md:px-12 py-20 bg-background overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">

        <div className="relative w-40 h-40 md:w-56 md:h-56 mb-12 rounded-full overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)] bg-white/5 border border-white/10">
          <Image
            src="/profile.png"
            alt="Rhaka Fertha Ary Sukma"
            fill
            className="object-cover"
          />
        </div>

        <h2
          ref={textRef}
          className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-white"
        >
          Start Strong, <span className="text-accent font-medium">Finish</span> Strong.
        </h2>
      </div>
    </section>
  );
}
