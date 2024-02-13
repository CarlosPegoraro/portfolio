import HeroSection from "../components/home/HeroSection";
import About from "../components/home/About";
import Header from "../components/home/Header";
import Projects from "../components/home/Projects";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Header />
      <About/>
      <Projects/>
      <Footer />
    </div>
  );
}
