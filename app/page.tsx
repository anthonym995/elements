import Image from "next/image";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection.jsx";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
    </div>
  );
}
