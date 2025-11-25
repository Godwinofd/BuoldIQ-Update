import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesExpanded from "@/components/ServicesExpanded";
import CaseStudy from "@/components/CaseStudy";
import WhyBuildIQ from "@/components/WhyBuildIQ";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <ServicesExpanded />
      <CaseStudy />
      <WhyBuildIQ />
      <Process />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
