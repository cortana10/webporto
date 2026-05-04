import Preloader from "@/components/Preloader";
import Hero from "@/components/sections/Hero";
import BrandStatement from "@/components/sections/BrandStatement";
import AboutMe from "@/components/sections/AboutMe";
import Metrics from "@/components/sections/Metrics";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import ScrollReset from "@/components/ScrollReset";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Preloader />
      <Hero />
      <BrandStatement />
      <AboutMe />
      <Skills />
      <Metrics />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      
      {/* Cloned Hero for seamless infinite scrolling */}
      <div id="bottom-clone" className="w-full">
        <Hero />
      </div>

      <ScrollReset />
    </main>
  );
}
