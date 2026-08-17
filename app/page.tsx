import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import Work from "../components/Work";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import { LangProvider } from "../components/LangContext";

export default function Home() {
  return (
    <LangProvider>
      <Nav />
      <Hero />
      <Expertise />
      <Work />
      <Experience />
      <Contact />
      <Footer />
      <ScrollReveal />
    </LangProvider>
  );
}
