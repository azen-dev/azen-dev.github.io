import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import About from "../components/About";
import Process from "../components/Process";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import { LangProvider } from "../components/LangContext";

export default function Home() {
  return (
    <LangProvider>
      <Nav />
      <Hero />
      <Work />
      <Testimonials />
      <Expertise />
      <Pricing />
      <About />
      <Process />
      <Contact />
      <Footer />
      <ScrollReveal />
    </LangProvider>
  );
}
