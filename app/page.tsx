import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import ProblemSolving from "@/components/ProblemSolving";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="home">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ProblemSolving />
        <Resume />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
