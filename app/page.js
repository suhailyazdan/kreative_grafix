import SkipLink from "@/components/SkipLink";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Teaching from "@/components/Teaching";
import WhatIBring from "@/components/WhatIBring";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import skillsData from "@/data/skills";
import experienceData from "@/data/experience";
import projectsData from "@/data/projects";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills items={skillsData} />
        <Experience items={experienceData} />
        <Projects items={projectsData} />
        <Teaching />
        <WhatIBring />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
