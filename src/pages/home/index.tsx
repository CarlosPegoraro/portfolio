import Layout from "../Layout.tsx";
import HeroSection from "./heroSection.tsx";
import AboutMe from "./aboutMe.tsx";
import Skills from "@/pages/home/skills.tsx";
import JourneyImpact from "@/pages/home/journeyImpact.tsx";
import Contact from "@/pages/home/contact.tsx";
import Projects from "@/pages/home/projects.tsx";

export default function Home() {
    return (
        <Layout>
            <HeroSection/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <JourneyImpact/>
            <Contact/>
        </Layout>
    )
}
