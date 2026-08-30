import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import WhyUs from "../components/WhyUs";
import Process from "../components/Process";
import Work from "../components/Work";
import Testimonials from "../components/Testimonials";
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
      <WhyUs />
      <Process />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollReveal />
    </LangProvider>
  );
}
