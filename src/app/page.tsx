import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import FloatingCall from "@/components/ui/FloatingCall";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <FloatingCall />
      <Contact />
      <Footer />
    
    </main>
  );
}
