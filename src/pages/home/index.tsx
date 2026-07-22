import Layout from "../Layout.tsx";
import HeroSection from "./heroSection.tsx";
import AboutMe from "./aboutMe.tsx";

export default function Home() {
    return (
        <Layout>
            <HeroSection/>
            <AboutMe/>
        </Layout>
    )
}