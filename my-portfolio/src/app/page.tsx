import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import ProjectSection from "@/components/Projects";
import Skills from "@/components/Skills";




export default function Home() {
  return (
  <main>
    <Hero />
    <ProjectSection />
    <Skills />
    <Contact />
    <About />
    <Footer/>
  </main>
  );
}
