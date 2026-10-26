import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import ProjectsSection from "../components/ProjectsSection";
import Hackathons from "../components/Hackathons";
import Certifications from "../components/Certifications";
import BeyondCode from "../components/BeyondCode";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ProjectsSection />
      <Hackathons />
      <Certifications />
      <BeyondCode />
      <Contact />
    </main>
  );
}