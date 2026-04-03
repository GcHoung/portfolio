import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <div id="home" className="min-h-screen pt-18">
        <Hero />
      </div>
      <div
        id="experience"
        className="border-t dark:border-primary/40 border-background-blur py-12 sm:py-18 md:py-28 lg:py-38"
      >
        <Experience />
      </div>
      <div
        id="projects"
        className="border-t dark:border-primary/40 border-background-blur py-12 sm:py-18 md:py-28 lg:py-38"
      >
        <Projects />
      </div>
      <div
        id="skills"
        className="border-t dark:border-primary/40 border-background-blur py-12 sm:py-18 md:py-28 lg:py-38"
      >
        <Skills />
      </div>
      <div
        id="testimonials"
        className="border-t dark:border-primary/40 border-background-blur py-12 sm:py-18 md:py-28 lg:py-38"
      >
        <Testimonials />
      </div>
    </>
  );
}
