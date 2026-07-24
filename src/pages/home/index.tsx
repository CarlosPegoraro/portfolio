import Layout from "../Layout.tsx";
import HeroSection from "./heroSection.tsx";
import AboutMe from "./aboutMe.tsx";
import Skills from "@/pages/home/skills.tsx";
import Projects from "@/pages/home/projects.tsx";

export default function Home() {
    return (
        <Layout>
            <HeroSection/>
            <AboutMe/>
            <Skills/>
            <Projects/>
        </Layout>
    )
}