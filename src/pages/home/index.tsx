import Layout from "../Layout.tsx";
import HeroSection from "./heroSection.tsx";
import AboutMe from "./aboutMe.tsx";
import Skills from "@/pages/home/skills.tsx";
import JourneyImpact from "@/pages/home/journeyImpact.tsx";
import Contact from "@/pages/home/contact.tsx";
import Projects from "@/pages/home/projects.tsx";
import {useEffect, useState} from "react";

const EXPERIENCE_COOKIE = "portfolio-experience-started";

export default function Home() {
    const [hasEntered, setHasEntered] = useState(() =>
        document.cookie.split("; ").some((cookie) => cookie === `${EXPERIENCE_COOKIE}=true`)
    );

    useEffect(() => {
        if (hasEntered) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [hasEntered]);

    const startExperience = () => {
        document.cookie = `${EXPERIENCE_COOKIE}=true; max-age=31536000; path=/; SameSite=Lax`;
        window.dispatchEvent(new Event("background-music-play"));
        setHasEntered(true);
    };

    return (
        <Layout>
            <div className={!hasEntered ? "pointer-events-none blur-sm" : ""} aria-hidden={!hasEntered}>
                <HeroSection isActive={hasEntered}/>
                <AboutMe/>
                <Skills/>
                <Projects/>
                <JourneyImpact/>
                <Contact/>
            </div>

            {!hasEntered && (
                <section role="dialog" aria-modal="true" aria-labelledby="welcome-title" className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-5 backdrop-blur-xl sm:px-8">
                    <div className="w-full max-w-2xl rounded-3xl border border-cyan-400/30 bg-slate-950/85 p-8 text-center shadow-[0_0_80px_rgba(34,211,238,0.16)] sm:p-12">
                        <p className="font-code text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">// experiência imersiva</p>
                        <h1 id="welcome-title" className="mt-5 font-header text-3xl font-semibold text-white sm:text-5xl">Bem-vindo ao meu portfólio</h1>
                        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                            Este portfólio foi pensado para ser visitado com calma. Prepare-se pra conhecer mais do meu trabalho e jornada profissional.
                        </p>
                        <button type="button" onClick={startExperience} className="mt-9 rounded-lg border-2 border-cyan-400/60 bg-cyan-800/30 px-7 py-3 text-lg font-bold text-white transition duration-300 hover:border-cyan-300 hover:bg-cyan-800/60 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950">
                            Continuar <i className="bi bi-arrow-right ml-2"/>
                        </button>
                    </div>
                </section>
            )}
        </Layout>
    )
}
