import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import ScrollReveal from "@/components/ScrollReveal";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <ScrollReveal>
          <Approach />
        </ScrollReveal>
        <Services />
        <ScrollReveal>
          <Industries />
        </ScrollReveal>
        <ScrollReveal>
          <CtaBand />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
