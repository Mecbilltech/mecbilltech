import ClientLayout from "@/components/ClientLayout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <ClientLayout>
      <div className="max-w-5xl mx-auto">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <WhyChooseUs />
      <TechStack />
      <Testimonials />
      <FAQ />
      <Blog />
      <Contact />
    </div>
    </ClientLayout>
  );
}
