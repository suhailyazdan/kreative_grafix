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
import { personName, siteName, siteUrl } from "@/lib/site";

const sameAs = [
  "https://www.linkedin.com/in/suhailyazdan-ui-ux-designer/",
  "https://www.behance.net/suhailyazdan",
  "https://www.coroflot.com/suhail_graphics",
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personName,
    url: siteUrl.toString(),
    image: new URL("/Suhail%20Yazdan.jpg", siteUrl).toString(),
    jobTitle: "UI/UX Designer",
    description:
      "UI/UX Designer focused on intuitive digital experiences, with front-end development expertise and a passion for training and mentoring.",
    sameAs,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl.toString(),
    author: { "@type": "Person", name: personName },
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
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
