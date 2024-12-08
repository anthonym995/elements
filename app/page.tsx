import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Testimonials />
      <ContactSection />
      <CallToAction />
    </div>
  );
}
