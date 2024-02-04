import Image from "next/image";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Header />
      <About/>
    </div>
  );
}
